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
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data:",
    "connect-src 'self'",
    "form-action 'self'",
    "base-uri 'self'",
    "frame-ancestors 'self'",
    "object-src 'none'",
  ].join('; '),
};

function withSecurityHeaders(createServer) {
  return function (...args) {
    const i = args.findIndex((a) => typeof a === 'function');
    const listener = args[i];
    args[i] = (req, res) => {
      for (const [name, value] of Object.entries(SECURITY_HEADERS)) res.setHeader(name, value);
      return listener(req, res);
    };
    return createServer.apply(this, args);
  };
}

http.createServer = withSecurityHeaders(http.createServer.bind(http));
https.createServer = withSecurityHeaders(https.createServer.bind(https));

await import('./dist/server/entry.mjs');
