// Utilidades compartidas del vigilante (sin dependencias)

export class Findings {
  constructor() {
    this.items = [];
    this.info = [];
  }
  fail(area, url, msg) { this.items.push({ level: 'FAIL', area, url, msg }); }
  warn(area, url, msg) { this.items.push({ level: 'WARN', area, url, msg }); }
  note(text) { this.info.push(text); }
  get fails() { return this.items.filter((i) => i.level === 'FAIL'); }
  get warns() { return this.items.filter((i) => i.level === 'WARN'); }
}

export async function request(url, opts = {}) {
  const { method = 'GET', redirect = 'follow', body, headers = {}, timeout = 15000, readBody = true } = opts;
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), timeout);
  const t0 = performance.now();
  try {
    const res = await fetch(url, {
      method,
      redirect,
      body,
      headers: { 'user-agent': 'ZentroVigilante/1.0 (+https://github.com/adrianmarquezco/zentro-limpiezas)', ...headers },
      signal: ctl.signal,
    });
    let text = '';
    if (method !== 'HEAD') {
      if (readBody) text = await res.text();
      else await res.arrayBuffer();
    }
    return { status: res.status, headers: res.headers, text, ms: Math.round(performance.now() - t0), error: null };
  } catch (e) {
    const code = e.cause?.code || e.message;
    // Respuesta con Content-Encoding: gzip pero cuerpo sin comprimir: el navegador tampoco puede leerla.
    // Se repite con HEAD (sin cuerpo) para conocer al menos el estado y las cabeceras.
    if (code === 'Z_DATA_ERROR' && method !== 'HEAD') {
      const h = await request(url, { ...opts, method: 'HEAD', readBody: false });
      return { ...h, decodeError: true };
    }
    return { status: 0, headers: new Headers(), text: '', ms: Math.round(performance.now() - t0), error: e.name === 'AbortError' ? 'timeout' : code };
  } finally {
    clearTimeout(timer);
  }
}

export async function pool(items, n, fn) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(Array.from({ length: Math.min(n, items.length) }, async () => {
    while (i < items.length) {
      const k = i++;
      out[k] = await fn(items[k], k);
    }
  }));
  return out;
}

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function tagAttr(tag, name) {
  const m = tag.match(new RegExp(`\\s${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, 'i'));
  return m ? (m[1] ?? m[2]) : null;
}

// Analiza un documento HTML y devuelve lo necesario para las reglas
export function analyzeHtml(html) {
  const noScripts = html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ');
  const text = noScripts.replace(/<[^>]+>/g, ' ');
  const title = ((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] ?? null)?.trim() ?? null;
  const h1Count = (noScripts.match(/<h1[\s>]/gi) || []).length;
  const tags = (re) => html.match(re) || [];
  const canonTag = tags(/<link\b[^>]*>/gi).find((t) => /rel\s*=\s*["']canonical["']/i.test(t));
  const canonical = canonTag ? tagAttr(canonTag, 'href') : null;
  const descTag = tags(/<meta\b[^>]*>/gi).find((t) => /name\s*=\s*["']description["']/i.test(t));
  const description = descTag ? tagAttr(descTag, 'content') : null;
  const robotsTag = tags(/<meta\b[^>]*>/gi).find((t) => /name\s*=\s*["']robots["']/i.test(t));
  const noindex = robotsTag ? /noindex/i.test(tagAttr(robotsTag, 'content') || '') : false;
  const ld = [...html.matchAll(/<script\b[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
  const ldErrors = [];
  for (const block of ld) {
    try { JSON.parse(block); } catch (e) { ldErrors.push(e.message.slice(0, 80)); }
  }
  const broken = [...new Set((text.match(/\bundefined\b|\[object Object\]|\{\{|\}\}|\bNaN\b/g) || []))];
  // Astro puede añadir scripts tras </html>; se exige que el cierre exista y que lo posterior sea corto
  const closeIdx = html.lastIndexOf('</html>');
  const complete = closeIdx > -1 && /<\/body>/i.test(html) && html.length - closeIdx < 60000;
  const links = [];
  for (const m of noScripts.matchAll(/<a\b[^>]*>/gi)) {
    const h = tagAttr(m[0], 'href');
    if (h) links.push(h);
  }
  const imgs = [];
  for (const m of noScripts.matchAll(/<img\b[^>]*>/gi)) {
    const s = tagAttr(m[0], 'src');
    if (s) imgs.push(s);
  }
  const scripts = [];
  for (const m of html.matchAll(/<script\b[^>]*>/gi)) {
    const s = tagAttr(m[0], 'src');
    if (s) scripts.push(s);
  }
  const styles = [];
  for (const t of tags(/<link\b[^>]*>/gi)) {
    if (/rel\s*=\s*["']stylesheet["']/i.test(t)) {
      const h = tagAttr(t, 'href');
      if (h) styles.push(h);
    }
  }
  return { title, h1Count, canonical, description, noindex, ldCount: ld.length, ldErrors, broken, complete, links, imgs, scripts, styles, textLength: text.replace(/\s+/g, ' ').trim().length };
}

// Resuelve una referencia relativa contra la URL de la página; devuelve null si no es http(s)
export function resolveUrl(ref, base) {
  if (/^(mailto:|tel:|javascript:|data:|blob:|#)/i.test(ref)) return null;
  try {
    const u = new URL(ref, base);
    if (!/^https?:$/.test(u.protocol)) return null;
    u.hash = '';
    return u;
  } catch {
    return null;
  }
}

// Informe en Markdown: agrupa hallazgos repetidos para que sea legible
export function renderReport({ site, findings, stats, startedAt }) {
  const group = (items) => {
    const map = new Map();
    for (const it of items) {
      const key = `${it.area}|${it.msg}`;
      if (!map.has(key)) map.set(key, { area: it.area, msg: it.msg, urls: [] });
      map.get(key).urls.push(it.url);
    }
    return [...map.values()];
  };
  const lines = [];
  const fails = findings.fails;
  const warns = findings.warns;
  lines.push(`# Informe del vigilante de ${site}`);
  lines.push('');
  lines.push(`Ejecución: ${startedAt.toISOString()} | Resultado: ${fails.length ? 'FALLO' : 'correcto'} | fallos: ${fails.length} | avisos: ${warns.length}`);
  lines.push('');
  const render = (title, items, max) => {
    lines.push(`## ${title} (${items.length})`);
    lines.push('');
    if (!items.length) { lines.push('Ninguno.'); lines.push(''); return; }
    for (const g of group(items).slice(0, max)) {
      const shown = g.urls.slice(0, 5).map((u) => '`' + u + '`').join(', ');
      const extra = g.urls.length > 5 ? ` y ${g.urls.length - 5} más` : '';
      lines.push(`- **${g.area}** — ${g.msg} (${g.urls.length}): ${shown}${extra}`);
    }
    lines.push('');
  };
  render('Fallos', fails, 60);
  render('Avisos', warns, 40);
  lines.push('## Resumen');
  lines.push('');
  for (const s of [...findings.info, ...(stats || [])]) lines.push(`- ${s}`);
  lines.push('');
  return lines.join('\n');
}
