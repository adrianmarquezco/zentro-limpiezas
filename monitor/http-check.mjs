// Comprobación HTTP sin dependencias. Uso: node monitor/http-check.mjs
import * as C from './config.mjs';
import { Findings, request, pool, sleep, analyzeHtml, resolveUrl, renderReport } from './lib.mjs';

const ERROR_TITLE = /\b(error|404|not found|no encontrad[ao]|undefined|internal server)\b/i;
const SECURITY_HEADERS = [
  ['strict-transport-security', 'HSTS'],
  ['x-content-type-options', 'X-Content-Type-Options'],
  ['referrer-policy', 'Referrer-Policy'],
  ['content-security-policy', 'Content-Security-Policy'],
];

function pathOf(u) {
  const url = new URL(u, C.SITE);
  return url.host === C.HOST ? url.pathname + url.search : u;
}

export async function runHttpChecks(F) {
  const started = Date.now();
  const stats = [];

  // ---- robots.txt y sitemap.xml ----
  const robots = await request(C.SITE + '/robots.txt');
  if (robots.status !== 200) F.fail('robots.txt', '/robots.txt', `estado ${robots.status || robots.error}`);
  else {
    if (!/user-agent/i.test(robots.text)) F.fail('robots.txt', '/robots.txt', 'no contiene User-agent');
    if (!/^sitemap:/im.test(robots.text)) F.warn('robots.txt', '/robots.txt', 'no declara el Sitemap');
    if (/user-agent:\s*\*\s*\r?\n(?:\s*(?:allow|crawl-delay):[^\n]*\r?\n)*\s*disallow:\s*\/\s*(?:\r?\n|$)/i.test(robots.text)) {
      F.fail('robots.txt', '/robots.txt', 'Disallow: / para todos los rastreadores');
    }
  }

  const sm = await request(C.SITE + '/sitemap.xml');
  let paths = [];
  if (sm.status !== 200) {
    F.fail('sitemap.xml', '/sitemap.xml', `estado ${sm.status || sm.error}`);
  } else {
    if (!/xml/i.test(sm.headers.get('content-type') || '')) F.fail('sitemap.xml', '/sitemap.xml', `content-type inesperado: ${sm.headers.get('content-type')}`);
    const locs = [...sm.text.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
    if (locs.length < C.MIN_SITEMAP_URLS) F.fail('sitemap.xml', '/sitemap.xml', `solo ${locs.length} URLs (mínimo esperado ${C.MIN_SITEMAP_URLS})`);
    const foreign = locs.filter((l) => new URL(l).host !== C.HOST);
    if (foreign.length) F.warn('sitemap.xml', '/sitemap.xml', `${foreign.length} URLs de otro dominio`);
    paths = [...new Set(locs.filter((l) => new URL(l).host === C.HOST).map((l) => pathOf(l)))];
    stats.push(`Sitemap: ${locs.length} URLs`);
  }
  const extra = (process.env.MONITOR_PROBE_PATHS || '').split(',').map((s) => s.trim()).filter(Boolean);
  if (extra.length) F.note(`Rutas de prueba añadidas: ${extra.join(', ')}`);
  const known = new Set(paths);
  let sample = paths;
  const limit = Number(process.env.MONITOR_MAX_PAGES || 0); // solo para pruebas locales rápidas
  if (limit > 0 && paths.length > limit) {
    const step = Math.ceil(paths.length / limit);
    sample = paths.filter((_, i) => i % step === 0);
    F.note(`Modo muestra: ${sample.length} de ${paths.length} páginas`);
  }
  const all = [...new Set([...sample, ...extra])];

  // ---- 404 real ----
  const missing = `/vigilante-no-existe-${Date.now()}/`;
  const nf = await request(C.SITE + missing);
  if (nf.status !== 404) F.fail('404', missing, `una URL inexistente devuelve ${nf.status || nf.error} en vez de 404`);
  else if (nf.decodeError) {
    F.fail('404 ilegible', missing, 'la página 404 declara Content-Encoding: gzip pero el cuerpo no está comprimido; los navegadores no pueden mostrarla (pantalla en blanco)');
  }

  // ---- Rutas internas que no deben ser públicas ----
  await pool(C.PRIVATE_PATHS, 5, async (p) => {
    const r = await request(C.SITE + p, { redirect: 'manual', readBody: false });
    if (r.status === 404) return;
    if (r.status >= 200 && r.status < 300) F.fail('Archivo interno público', p, `responde ${r.status} (debe ser 404)`);
    else F.warn('Archivo interno', p, `responde ${r.status || r.error} (se esperaba 404)`);
  });

  // ---- Zonas privadas (sin sesión no deben dar 200) ----
  for (const p of C.PRIVATE_ZONES) {
    const r = await request(C.SITE + p, { redirect: 'manual', readBody: false });
    if (r.status === 200) F.fail('Zona privada', p, 'accesible sin sesión (200)');
  }

  // ---- Redirecciones ----
  const redirects = [...C.REDIRECTS, ...C.OLD_URLS.map((o) => ({ from: C.SITE + o.from, to: C.SITE + o.to }))];
  for (const rd of redirects) {
    const label = `${rd.from} -> ${rd.to}`;
    // Se siguen los saltos a mano (máx. 4) para comprobar cada estado y el destino final
    let cur = rd.from;
    const hops = [];
    let broken = null;
    for (let i = 0; i < 4; i++) {
      const r = await request(cur, { redirect: 'manual', readBody: false });
      if (r.error) { broken = `no se pudo comprobar (${r.error})`; break; }
      const loc = r.headers.get('location');
      if (r.status >= 300 && r.status < 400 && loc) {
        hops.push({ from: cur, status: r.status });
        cur = new URL(loc, cur).href;
        continue;
      }
      break;
    }
    if (broken) { F.warn('Redirección', rd.from, broken); continue; }
    if (!hops.length) { F.fail('Redirección', rd.from, `no redirige; se esperaba ${label}`); continue; }
    if (cur !== rd.to) { F.fail('Redirección', rd.from, `acaba en ${cur} (se esperaba ${rd.to})`); continue; }
    const temp = hops.filter((h) => ![301, 308].includes(h.status));
    if (temp.length) F.warn('Redirección temporal', rd.from, `${temp.map((h) => h.status).join('/')} en vez de 301 (${label})`);
    if (hops.length > 2) F.warn('Redirección', rd.from, `cadena de ${hops.length} saltos`);
  }

  // ---- API del formulario ----
  const apiGet = await request(C.SITE + '/api/presupuesto', { redirect: 'manual', readBody: false });
  if (![404, 405].includes(apiGet.status)) F.fail('API', 'GET /api/presupuesto', `responde ${apiGet.status || apiGet.error} (se esperaba 404/405)`);
  const fd = new FormData();
  fd.append('nombre', '');
  const apiPost = await request(C.SITE + '/api/presupuesto', { method: 'POST', body: fd, readBody: true });
  if (apiPost.status !== 400) F.fail('API', 'POST /api/presupuesto (vacío)', `responde ${apiPost.status || apiPost.error} (se esperaba 400 de validación; el formulario puede estar roto)`);
  else if (apiPost.ms > C.RESP_FAIL_MS) F.warn('API', 'POST /api/presupuesto', `tarda ${apiPost.ms} ms`);
  F.note('La API se comprueba con un envío vacío (400). No se puede verificar Resend sin enviar un correo real.');

  // ---- Páginas ----
  const refs = new Map(); // url absoluta -> { type, from }
  const times = [];
  let homeHeaders = null;

  await pool(all, C.HTTP_CONCURRENCY, async (p) => {
    let r = await request(C.SITE + p);
    if (r.status !== 200 || r.error || r.ms > C.RESP_FAIL_MS) {
      await sleep(800);
      const r2 = await request(C.SITE + p);
      if (r2.status === 200 || r.status === 0) r = r2;
    }
    times.push({ p, ms: r.ms });
    if (p === '/') homeHeaders = r.headers;
    if (r.status !== 200) { F.fail('HTTP', p, `estado ${r.status || r.error}`); return; }
    const ct = r.headers.get('content-type') || '';
    if (!/text\/html/i.test(ct)) { F.fail('HTTP', p, `content-type inesperado: ${ct}`); return; }
    if (r.ms > C.RESP_FAIL_MS) F.fail('Tiempo de respuesta', p, `${r.ms} ms (más de ${C.RESP_FAIL_MS})`);
    else if (r.ms > C.RESP_WARN_MS) F.warn('Tiempo de respuesta', p, `${r.ms} ms (más de ${C.RESP_WARN_MS})`);

    const a = analyzeHtml(r.text);
    if (!a.complete || r.text.length < 3000) F.fail('Contenido', p, `HTML incompleto o cortado (${r.text.length} caracteres)`);
    if (!a.title) F.fail('Título', p, 'sin <title>');
    else {
      if (ERROR_TITLE.test(a.title)) F.fail('Título', p, `título sospechoso de error: "${a.title.slice(0, 60)}"`);
      if (a.title.length < 15) F.warn('Título', p, `título muy corto: "${a.title}"`);
    }
    if (a.h1Count !== 1) F.fail('H1', p, `tiene ${a.h1Count} H1 (debe ser 1)`);
    if (!a.canonical) F.fail('Canonical', p, 'sin canonical');
    else {
      let cu = null;
      try { cu = new URL(a.canonical, C.SITE); } catch { /* se informa abajo */ }
      if (!cu || cu.host !== C.HOST) F.fail('Canonical', p, `canonical fuera del dominio: ${a.canonical}`);
      else if (cu.pathname !== p && !known.has(cu.pathname)) F.fail('Canonical', p, `canonical apunta a una URL que no está en el sitemap: ${cu.pathname}`);
    }
    if (!a.description) F.fail('Meta description', p, 'sin meta description');
    else if (a.description.length < 50 || a.description.length > 175) F.warn('Meta description', p, `longitud ${a.description.length}`);
    if (a.noindex) F.fail('Indexación', p, 'está en el sitemap pero tiene noindex');
    if (a.ldErrors.length) F.fail('JSON-LD', p, `JSON-LD inválido: ${a.ldErrors[0]}`);
    else if (a.ldCount === 0) F.warn('JSON-LD', p, 'sin datos estructurados');
    if (a.broken.length) F.fail('Texto roto', p, `aparece "${a.broken.join('", "')}" en pantalla`);

    // referencias a comprobar una sola vez
    const add = (ref, type) => {
      const u = resolveUrl(ref, C.SITE + p);
      if (!u || u.host !== C.HOST) return;
      if (u.pathname.startsWith('/api/')) return;
      if (type === 'link' && known.has(u.pathname + u.search)) return;
      const key = u.origin + u.pathname + u.search;
      if (!refs.has(key)) refs.set(key, { type, from: p });
    };
    a.links.forEach((l) => add(l, 'link'));
    a.imgs.forEach((l) => add(l, 'imagen'));
    a.scripts.forEach((l) => add(l, 'script'));
    a.styles.forEach((l) => add(l, 'css'));
  });

  // ---- Enlaces internos y recursos (cada uno una sola vez) ----
  const refList = [...refs.entries()];
  await pool(refList, 6, async ([url, meta]) => {
    let r = await request(url, { method: meta.type === 'link' ? 'GET' : 'HEAD', readBody: false });
    if (meta.type !== 'link' && [405, 501, 403].includes(r.status)) r = await request(url, { method: 'GET', readBody: false });
    if (r.status === 0 || r.status >= 400) {
      const msg = `${meta.type} roto (${r.status || r.error}): ${pathOf(url)}`;
      // los enlaces a páginas fuera del sitemap (p. ej. legales) pueden existir aun sin estar listadas
      F.fail(meta.type === 'link' ? 'Enlace interno' : 'Recurso', meta.from, msg);
    }
  });
  stats.push(`Referencias únicas comprobadas: ${refList.length}`);

  // ---- Compresión y cabeceras de seguridad (avisos) ----
  if (homeHeaders) {
    const enc = homeHeaders.get('content-encoding');
    if (!enc) F.warn('Compresión', '/', 'la portada no se sirve comprimida (gzip/br)');
    const missingH = SECURITY_HEADERS.filter(([h]) => !homeHeaders.get(h)).map(([, n]) => n);
    if (!homeHeaders.get('x-frame-options') && !/frame-ancestors/i.test(homeHeaders.get('content-security-policy') || '')) missingH.push('X-Frame-Options');
    if (missingH.length) F.warn('Cabeceras de seguridad', '/', `faltan: ${missingH.join(', ')}`);
  }

  // ---- Estadísticas ----
  if (times.length) {
    const ms = times.map((t) => t.ms).sort((a, b) => a - b);
    const avg = Math.round(ms.reduce((s, x) => s + x, 0) / ms.length);
    const p95 = ms[Math.floor(ms.length * 0.95)];
    const slow = [...times].sort((a, b) => b.ms - a.ms).slice(0, 3).map((t) => `${t.p} ${t.ms} ms`).join('; ');
    stats.push(`Páginas comprobadas: ${times.length}; respuesta media ${avg} ms, p95 ${p95} ms, más lentas: ${slow}`);
  }
  stats.push(`Comprobación HTTP: ${Math.round((Date.now() - started) / 1000)} s`);
  return stats;
}

// Ejecución directa
if (process.argv[1]?.endsWith('http-check.mjs')) {
  const F = new Findings();
  const startedAt = new Date();
  const stats = await runHttpChecks(F);
  console.log(renderReport({ site: C.SITE, findings: F, stats, startedAt }));
  process.exit(F.fails.length ? 1 : 0);
}
