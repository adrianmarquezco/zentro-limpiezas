// El adaptador @astrojs/node en modo standalone sirve las ~2000 páginas prerenderizadas
// directamente desde disco (paquete `send`), sin pasar por el pipeline de Astro — así que
// un middleware de Astro (src/middleware.ts) nunca llegaría a la inmensa mayoría del sitio.
// Interceptamos aquí, a nivel de http.Server, para que las cabeceras lleguen a cualquier
// respuesta, sea un archivo estático o una ruta renderizada en el servidor.
import http from 'node:http';
import https from 'node:https';

const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com",
    "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://region1.google-analytics.com",
    "form-action 'self'",
    "base-uri 'self'",
    "frame-ancestors 'self'",
    "object-src 'none'",
  ].join('; '),
};

function cacheControlFor(requestUrl) {
  let pathname = '/';
  try {
    pathname = new URL(requestUrl, 'http://localhost').pathname;
  } catch {
    return 'public, max-age=0, must-revalidate';
  }
  if (pathname.startsWith('/api/')) return 'no-store';
  if (pathname === '/sw.js' || pathname === '/manifest.json') return 'public, max-age=0, must-revalidate';
  if (pathname.startsWith('/_astro/') || pathname.startsWith('/fonts/')) {
    return 'public, max-age=31536000, immutable';
  }
  if (pathname.startsWith('/images/') || pathname.startsWith('/scripts/') || pathname === '/favicon.svg') {
    return 'public, max-age=86400, stale-while-revalidate=604800';
  }
  if (pathname === '/sitemap.xml' || pathname.startsWith('/sitemaps/')) return 'public, max-age=3600';
  return 'public, max-age=0, must-revalidate';
}

const COMBOS_RETIRADOS = new Set(['moeche', 'san-sadurnino', 'cabanas', 'ortigueira', 'cerdido']);
const SERVICIOS_BARRIO_ES = new Set(['limpieza-de-pisos', 'limpieza-de-viviendas', 'limpieza-periodica']);
const SERVICIOS_BARRIO_GL = new Set(['limpeza-de-pisos', 'limpeza-de-vivendas', 'limpeza-periodica']);
const BARRIOS_MONEY = {
  ferrol: new Set(['caranza', 'recimil', 'a-magdalena', 'esteiro', 'infernino']),
  naron: new Set(['a-gandara', 'o-couto', 'o-val', 'san-xiao-de-naron', 'alto-del-castano']),
};

function isBarrioKept(servicio, municipio, barrio, lang) {
  const allowed = lang === 'gl' ? SERVICIOS_BARRIO_GL : SERVICIOS_BARRIO_ES;
  return allowed.has(servicio) && BARRIOS_MONEY[municipio]?.has(barrio);
}

function policyRedirect(requestUrl) {
  let pathname = '/';
  try {
    pathname = new URL(requestUrl, 'http://localhost').pathname;
  } catch {
    return null;
  }
  const path = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  const parts = path.split('/').filter(Boolean);
  if (parts.length === 3 && parts[0] === 'servicios' && COMBOS_RETIRADOS.has(parts[2])) {
    return `/servicios/${parts[1]}/`;
  }
  if (parts.length === 4 && parts[0] === 'gl' && parts[1] === 'servizos' && COMBOS_RETIRADOS.has(parts[3])) {
    return `/gl/servizos/${parts[2]}/`;
  }
  if (parts.length === 4 && parts[0] === 'servicios') {
    const [, svc, muni, barrio] = parts;
    if (COMBOS_RETIRADOS.has(muni)) return `/servicios/${svc}/`;
    if (!isBarrioKept(svc, muni, barrio, 'es')) return `/servicios/${svc}/${muni}/`;
  }
  if (parts.length === 5 && parts[0] === 'gl' && parts[1] === 'servizos') {
    const svc = parts[2];
    const muni = parts[3];
    const barrio = parts[4];
    if (COMBOS_RETIRADOS.has(muni)) return `/gl/servizos/${svc}/`;
    if (!isBarrioKept(svc, muni, barrio, 'gl')) return `/gl/servizos/${svc}/${muni}/`;
  }
  return null;
}

const CANONICAL_HOST = 'zentrolimpiezas.es';

function withSecurityHeaders(createServer) {
  return function (...args) {
    const i = args.findIndex((a) => typeof a === 'function');
    const listener = args[i];
    args[i] = (req, res) => {
      // Traefik/Coolify ya redirige www→apex y http→https por delante de este contenedor,
      // pero en dos saltos y con 302. Si la petición nos llega directa (host www o
      // x-forwarded-proto http), la resolvemos aquí en un único 301 permanente.
      const host = (req.headers.host || '').toLowerCase();
      const proto = (req.headers['x-forwarded-proto'] || '').toLowerCase();
      if (host === `www.${CANONICAL_HOST}` || proto === 'http') {
        res.writeHead(301, { Location: `https://${CANONICAL_HOST}${req.url || '/'}` });
        res.end();
        return;
      }
      const dest = policyRedirect(req.url || '/');
      if (dest) {
        res.writeHead(301, { Location: dest });
        res.end();
        return;
      }
      for (const [name, value] of Object.entries(SECURITY_HEADERS)) res.setHeader(name, value);
      res.setHeader('Cache-Control', cacheControlFor(req.url || '/'));
      return listener(req, res);
    };
    return createServer.apply(this, args);
  };
}

http.createServer = withSecurityHeaders(http.createServer.bind(http));
https.createServer = withSecurityHeaders(https.createServer.bind(https));

await import('./dist/server/entry.mjs');
