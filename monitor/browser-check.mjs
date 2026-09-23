// Comprobación en navegador real (Playwright), móvil 375 px y escritorio 1366 px.
// Uso: node monitor/browser-check.mjs   (PW_CHANNEL=msedge o chrome para usar el navegador instalado en Windows)
// Nunca envía formularios: toda petición a /api/ se aborta y se cuenta.
import { chromium } from 'playwright';
import * as C from './config.mjs';
import { Findings, renderReport } from './lib.mjs';

const VIEWPORTS = [
  { name: 'móvil', width: 375, height: 812, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
  { name: 'escritorio', width: 1366, height: 768, isMobile: false, hasTouch: false, deviceScaleFactor: 1 },
];

const INIT_SCRIPT = `
  window.__lcp = 0; window.__cls = 0;
  try {
    new PerformanceObserver((l) => { for (const e of l.getEntries()) window.__lcp = e.startTime; }).observe({ type: 'largest-contentful-paint', buffered: true });
    new PerformanceObserver((l) => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__cls += e.value; }).observe({ type: 'layout-shift', buffered: true });
  } catch (e) {}
`;

async function scrollThrough(page) {
  await page.evaluate(async () => {
    const step = Math.max(300, Math.floor(innerHeight * 0.8));
    let y = 0;
    while (y < document.documentElement.scrollHeight) {
      window.scrollTo(0, y);
      y += step;
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, document.documentElement.scrollHeight);
    await new Promise((r) => setTimeout(r, 300));
  });
}

async function checkPage(context, vp, entry, F) {
  const label = `${entry.path} (${vp.name})`;
  const page = await context.newPage();
  const apiCalls = [];
  const errors = [];
  const failedReq = [];
  const badResp = [];
  const dialogs = [];

  page.on('console', (m) => {
    if (m.type() !== 'error') return;
    const t = m.text();
    if (/Failed to load resource/i.test(t)) return; // ya se detecta por las respuestas
    errors.push(t.slice(0, 160));
  });
  page.on('pageerror', (e) => errors.push(`pageerror: ${String(e.message).slice(0, 160)}`));
  page.on('requestfailed', (r) => {
    const u = new URL(r.url());
    if (u.host !== C.HOST) return;
    if (u.pathname.startsWith('/api/')) return; // abortadas a propósito
    failedReq.push(`${u.pathname} (${r.failure()?.errorText || 'fallo'})`);
  });
  page.on('response', (r) => {
    const u = new URL(r.url());
    if (u.host !== C.HOST || u.pathname.startsWith('/api/')) return;
    if (r.status() >= 400) badResp.push(`${u.pathname} (${r.status()})`);
  });
  page.on('dialog', async (d) => { dialogs.push(d.message().slice(0, 80)); await d.dismiss(); });
  await page.route('**/api/**', (route) => { apiCalls.push(route.request().url()); route.abort(); });
  await page.addInitScript(INIT_SCRIPT);

  try {
    const res = await page.goto(C.SITE + entry.path, { waitUntil: 'load', timeout: 30000 });
    if (!res || res.status() !== 200) {
      F.fail('Navegador', label, `estado ${res ? res.status() : 'sin respuesta'}`);
      return;
    }
    await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});
    await scrollThrough(page);
    await page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {});
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(600);

    // Estructura visible
    if (!(await page.locator('#site-header').first().isVisible().catch(() => false))) F.fail('Estructura', label, 'la cabecera no se muestra');
    const mainText = await page.evaluate(() => (document.querySelector('main')?.innerText || '').trim().length);
    if (mainText < 200) F.fail('Estructura', label, `contenido principal vacío o casi vacío (${mainText} caracteres)`);
    if (!(await page.locator('h1').first().isVisible().catch(() => false))) F.fail('Estructura', label, 'el H1 no es visible');
    const footerOk = await page.evaluate(() => { const f = document.querySelector('footer'); return !!f && f.innerText.trim().length > 20; });
    if (!footerOk) F.fail('Estructura', label, 'el pie no se muestra');

    // Desbordes horizontales
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    if (overflow > 4) F.fail('Diseño', label, `desborde horizontal de ${overflow}px`);
    else if (overflow > 1) F.warn('Diseño', label, `desborde horizontal leve de ${overflow}px (aparece scroll lateral en móvil)`);

    // Errores de JS y recursos
    if (errors.length) F.fail('JavaScript', label, `errores en consola: ${[...new Set(errors)].slice(0, 3).join(' | ')}`);
    if (failedReq.length) F.fail('Recursos', label, `peticiones propias fallidas: ${[...new Set(failedReq)].slice(0, 4).join(', ')}`);
    if (badResp.length) F.fail('Recursos', label, `respuestas de error propias: ${[...new Set(badResp)].slice(0, 4).join(', ')}`);
    if (dialogs.length) F.warn('JavaScript', label, `aparece un diálogo/alert: "${dialogs[0]}"`);

    // Imágenes rotas
    const broken = await page.evaluate(() => [...document.images].filter((i) => i.currentSrc && i.complete && i.naturalWidth === 0).map((i) => i.currentSrc.replace(location.origin, '')).slice(0, 5));
    if (broken.length) F.fail('Imágenes', label, `imágenes rotas: ${broken.join(', ')}`);

    // Rendimiento
    const perf = await page.evaluate(() => {
      const nav = performance.getEntriesByType('navigation')[0];
      return { lcp: Math.round(window.__lcp || 0), cls: Number((window.__cls || 0).toFixed(3)), load: nav ? Math.round(nav.loadEventEnd) : 0 };
    });
    if (perf.lcp > C.LCP_FAIL_MS) F.fail('LCP', label, `${perf.lcp} ms (más de ${C.LCP_FAIL_MS})`);
    else if (perf.lcp > C.LCP_WARN_MS) F.warn('LCP', label, `${perf.lcp} ms (más de ${C.LCP_WARN_MS})`);
    if (perf.cls > C.CLS_WARN) F.warn('CLS', label, `${perf.cls} (más de ${C.CLS_WARN})`);
    if (perf.load > C.LOAD_FAIL_MS) F.fail('Tiempo de carga', label, `${perf.load} ms (más de ${C.LOAD_FAIL_MS})`);
    F.metrics.push({ label, ...perf });

    // Interacciones
    for (const t of entry.tests || []) await interaction(t, page, vp, label, F, apiCalls);

    if (apiCalls.length && !(entry.tests || []).some((t) => ['heroForm', 'budgetForm'].includes(t))) {
      F.warn('Seguridad de la prueba', label, `se intentó llamar a la API (${apiCalls.length}) sin que la prueba lo esperase`);
    }
  } catch (e) {
    F.fail('Navegador', label, `error en la prueba: ${String(e.message).split('\n')[0].slice(0, 160)}`);
  } finally {
    await page.close().catch(() => {});
  }
}

async function interaction(name, page, vp, label, F, apiCalls) {
  const fail = (msg) => F.fail('Interacción', label, msg);
  if (name === 'menu') {
    if (vp.isMobile) {
      const btn = page.locator('#menu-toggle');
      if (!(await btn.isVisible())) return fail('no se ve el botón de menú móvil');
      await btn.click();
      const open = await page.locator('#mobile-menu').isVisible();
      const expanded = await btn.getAttribute('aria-expanded');
      if (!open || expanded !== 'true') return fail('el menú móvil no se abre');
      await page.locator('#mob-servicios-btn').click();
      if (!(await page.locator('#mob-servicios-sub').isVisible())) fail('el desplegable de Servicios del menú móvil no se abre');
      await btn.click();
    } else {
      const trigger = page.locator('header nav > div a[href="/servicios/"], header nav > div a[href="/gl/servizos/"]').first();
      await trigger.hover();
      await page.waitForTimeout(350);
      const link = page.locator('header nav a[href$="/limpieza-de-pisos/"], header nav a[href$="/limpeza-de-pisos/"]').first();
      if (!(await link.isVisible())) fail('el desplegable de Servicios no aparece al pasar el ratón');
      await page.mouse.move(5, 400);
    }
    return;
  }
  if (name === 'faq') {
    const custom = page.locator('[data-faq-trigger]').first();
    if (await custom.count()) {
      await custom.scrollIntoViewIfNeeded();
      await custom.click();
      if ((await custom.getAttribute('aria-expanded')) !== 'true') fail('las preguntas frecuentes no se despliegan');
      return;
    }
    const summary = page.locator('details summary').first();
    if (await summary.count()) {
      await summary.scrollIntoViewIfNeeded();
      await summary.click();
      const isOpen = await summary.evaluate((s) => s.parentElement.open);
      if (!isOpen) fail('las preguntas frecuentes (details) no se despliegan');
    }
    return;
  }
  if (name === 'heroForm') {
    const card = page.locator('.hero-quote-card');
    if (!(await card.count())) return fail('no existe la tarjeta de presupuesto de la portada');
    const visible = await card.first().isVisible();
    if (vp.isMobile) {
      if (visible) fail('la tarjeta de presupuesto debería estar oculta en móvil');
      return;
    }
    if (!visible) return fail('la tarjeta de presupuesto no se ve en escritorio');
    const before = apiCalls.length;
    await card.locator('button[type="submit"]').click();
    await page.waitForTimeout(400);
    if (apiCalls.length !== before) fail('el formulario envió datos estando vacío');
    const invalid = await card.locator('input[name="nombre"]').evaluate((i) => !i.checkValidity());
    if (!invalid) fail('el formulario no valida el nombre obligatorio');
    await card.locator('label:has(input[value="email"])').click();
    if (!(await card.locator('input[name="email"]').isVisible())) fail('al elegir Email no aparece el campo de correo');
    await card.locator('label:has(input[value="whatsapp"])').click();
    if (await card.locator('input[name="email"]').isVisible()) fail('el campo de correo no se oculta al volver a WhatsApp');
    if (!(await card.locator('textarea[name="mensaje"]').count())) fail('falta el cuadro de comentarios');
    return;
  }
  if (name === 'budgetForm') {
    const form = page.locator('form').first();
    if (!(await form.isVisible())) return fail('el formulario de presupuesto no se ve');
    const before = apiCalls.length;
    await form.locator('button[type="submit"]').click();
    await page.waitForTimeout(500);
    // Es un defecto de experiencia (el servidor rechaza el envío vacío con 400), no una caída: aviso
    if (apiCalls.length !== before) F.warn('Formulario', label, 'el formulario no valida en el navegador: un envío vacío llega al servidor y el visitante ve un error genérico');
    for (const n of ['nombre', 'servicio', 'zona']) {
      if (!(await form.locator(`[name="${n}"]`).count())) fail(`falta el campo "${n}" en el formulario`);
    }
    return;
  }
  if (name === 'toc') {
    const nav = page.locator('nav[aria-label="En este artículo"], nav[aria-label="Neste artigo"]');
    if (!(await nav.count())) return fail('no aparece el índice de contenidos');
    const first = nav.locator('a').first();
    const href = await first.getAttribute('href');
    const exists = await page.evaluate((h) => !!document.getElementById(decodeURIComponent(h.slice(1))), href);
    if (!exists) fail(`el enlace del índice ${href} no apunta a ningún título`);
    return;
  }
}

async function cookieTest(browser, F, channelOpts) {
  const label = `${C.COOKIE_TEST_PATH} (cookies)`;
  const context = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  const page = await context.newPage();
  await page.route('**/api/**', (r) => r.abort());
  try {
    await page.goto(C.SITE + C.COOKIE_TEST_PATH, { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(1500);
    const banner = page.locator('#cookie-banner');
    if (!(await banner.isVisible())) return F.fail('Interacción', label, 'el aviso de cookies no aparece en una visita nueva');
    await page.locator('#cookie-reject').click();
    await page.waitForTimeout(600);
    if (await banner.isVisible()) F.fail('Interacción', label, 'el aviso de cookies no se cierra al pulsar "Solo esenciales"');
  } catch (e) {
    F.fail('Interacción', label, `error en la prueba de cookies: ${String(e.message).split('\n')[0].slice(0, 120)}`);
  } finally {
    await context.close();
  }
}

export async function runBrowserChecks(F) {
  const started = Date.now();
  F.metrics = [];
  const launchOpts = { headless: true };
  if (process.env.PW_CHANNEL) launchOpts.channel = process.env.PW_CHANNEL;
  const browser = await chromium.launch(launchOpts);
  try {
    for (const vp of VIEWPORTS) {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        isMobile: vp.isMobile,
        hasTouch: vp.hasTouch,
        deviceScaleFactor: vp.deviceScaleFactor,
        // Evita que el aviso de cookies tape las pruebas de interacción
        storageState: undefined,
      });
      // Marca el aviso de cookies como resuelto en las pruebas generales (se prueba aparte)
      await context.addInitScript(() => { try { localStorage.setItem('zentro_cookie_consent', 'essential'); } catch (e) {} });
      for (const entry of C.BROWSER_PAGES) await checkPage(context, vp, entry, F);
      await context.close();
    }
    await cookieTest(browser, F);
  } finally {
    await browser.close();
  }
  const lcps = F.metrics.map((m) => m.lcp).filter(Boolean).sort((a, b) => a - b);
  const stats = [];
  if (lcps.length) stats.push(`Navegador: ${F.metrics.length} cargas; LCP mediano ${lcps[Math.floor(lcps.length / 2)]} ms, máximo ${lcps[lcps.length - 1]} ms; CLS máximo ${Math.max(...F.metrics.map((m) => m.cls))}`);
  stats.push(`Comprobación en navegador: ${Math.round((Date.now() - started) / 1000)} s (${process.env.PW_CHANNEL || 'chromium de Playwright'})`);
  return stats;
}

if (process.argv[1]?.endsWith('browser-check.mjs')) {
  const F = new Findings();
  const startedAt = new Date();
  const stats = await runBrowserChecks(F);
  console.log(renderReport({ site: C.SITE, findings: F, stats, startedAt }));
  process.exit(F.fails.length ? 1 : 0);
}
