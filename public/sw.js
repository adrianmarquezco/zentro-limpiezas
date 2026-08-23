const CACHE = 'zentro-v1';
const OFFLINE_URL = '/';

const PRECACHE = [
  '/',
  '/servicios/',
  '/presupuesto/',
  '/zonas/',
  '/precios/',
  '/manifest.json',
  '/images/hero-equipo.webp',
  '/images/logo.png',
  '/favicon.svg',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  // HTML: network-first, fallback a caché
  if (e.request.headers.get('accept')?.includes('text/html')) {
    e.respondWith(
      fetch(e.request)
        .then(r => { caches.open(CACHE).then(c => c.put(e.request, r.clone())); return r; })
        .catch(() => caches.match(e.request).then(r => r ?? caches.match(OFFLINE_URL)))
    );
    return;
  }

  // Estáticos: cache-first
  e.respondWith(
    caches.match(e.request).then(r => r ?? fetch(e.request).then(r2 => {
      if (r2.ok) caches.open(CACHE).then(c => c.put(e.request, r2.clone()));
      return r2;
    }))
  );
});
