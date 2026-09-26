// Configuración del vigilante de zentrolimpiezas.es
// Sitio: Astro 5 (output hybrid, adaptador Node standalone), Coolify, repo GitHub adrianmarquezco/zentro-limpiezas.
// Todas las páginas públicas salen de /sitemap.xml. Solo hay una ruta dinámica: POST /api/presupuesto (Resend).

export const SITE = (process.env.MONITOR_URL || 'https://zentrolimpiezas.es').replace(/\/$/, '');
export const HOST = new URL(SITE).host;

// Umbrales
export const RESP_WARN_MS = 1500;
export const RESP_FAIL_MS = 4000;
export const LCP_WARN_MS = 4000;
export const LCP_FAIL_MS = 8000;
export const CLS_WARN = 0.1;
export const LOAD_FAIL_MS = 9000;

// Si el sitemap trae menos URLs que esto, algo se ha roto (hoy son unas 2.050)
export const MIN_SITEMAP_URLS = 1800;

// Concurrencia de la comprobación HTTP (suave para no cargar el servidor)
export const HTTP_CONCURRENCY = 6;

// Rutas que NO deben ser públicas: deben dar 404
export const PRIVATE_PATHS = [
  '/.git/config',
  '/.git/HEAD',
  '/.env',
  '/.env.local',
  '/.env.example',
  '/README.md',
  '/CONTENT-GUIDE.md',
  '/SEO-MAP.md',
  '/package.json',
  '/package-lock.json',
  '/Dockerfile',
  '/.dockerignore',
  '/.gitignore',
  '/astro.config.mjs',
  '/tsconfig.json',
  '/tailwind.config.mjs',
  '/src/pages/index.astro',
  '/src/data/config.ts',
  '/node_modules/',
  '/.github/workflows/vigilante.yml',
  '/monitor/config.mjs',
  '/monitor/run.mjs',
  '/dist/server/entry.mjs',
  '/dist/client/index.html',
  '/.claude/settings.json',
];

// Zonas privadas o con login: esta web no tiene. Si algún día existe, añadir aquí (sin sesión no debe dar 200)
export const PRIVATE_ZONES = [];

// Redirecciones importantes. Se espera 301/308; 302/307 se avisa.
export const REDIRECTS = [
  { from: 'http://zentrolimpiezas.es/', to: 'https://zentrolimpiezas.es/' },
  { from: 'https://www.zentrolimpiezas.es/', to: 'https://zentrolimpiezas.es/' },
  { from: 'http://www.zentrolimpiezas.es/', to: 'https://zentrolimpiezas.es/' },
];

// URLs antiguas que deben redirigir
export const OLD_URLS = [
  // Servicio de limpieza de tapicerías descatalogado (estaba indexado): 301 a la home
  { from: '/servicios/limpieza-de-tapicerias/', to: '/' },
  { from: '/servicios/limpieza-de-tapicerias/ferrol/', to: '/' },
  { from: '/servicios/limpieza-de-tapicerias/a-coruna/', to: '/' },
  { from: '/servicios/limpieza-de-tapicerias/naron/', to: '/' },
  { from: '/gl/servizos/limpeza-de-tapizarias/', to: '/gl/' },
  { from: '/gl/servizos/limpeza-de-tapizarias/ferrol/', to: '/gl/' },
  { from: '/gl/servizos/limpeza-de-tapizarias/a-coruna/', to: '/gl/' },
  { from: '/gl/servizos/limpeza-de-tapizarias/naron/', to: '/gl/' },
];

// Páginas para el navegador real (una de cada tipo de plantilla)
export const BROWSER_PAGES = [
  { path: '/', tests: ['menu', 'faq'] },
  { path: '/servicios/', tests: ['menu'] },
  { path: '/servicios/limpieza-de-pisos/', tests: ['heroForm', 'faq'] },
  { path: '/servicios/limpieza-de-pisos/naron/', tests: ['heroForm', 'faq'] },
  { path: '/servicios/limpieza-de-pisos/naron/a-gandara/', tests: ['heroForm', 'faq'] },
  { path: '/servicios/limpieza-de-cristales/a-coruna/', tests: ['heroForm'] },
  { path: '/zonas/', tests: [] },
  { path: '/zonas/naron/', tests: ['heroForm', 'faq'] },
  { path: '/zonas/naron/a-gandara/', tests: ['heroForm', 'faq'] },
  { path: '/presupuesto/', tests: ['budgetForm'] },
  { path: '/precios/', tests: ['faq'] },
  { path: '/sobre-nosotros/', tests: ['faq'] },
  { path: '/blog/', tests: [] },
  { path: '/blog/eliminar-humedad-moho-en-casa/', tests: ['toc'] },
  { path: '/gl/', tests: ['menu'] },
  { path: '/gl/servizos/limpeza-de-cristais/naron/', tests: ['heroForm'] },
  { path: '/gl/zonas/naron/a-gandara/', tests: ['heroForm'] },
];

// Solo para autopruebas: páginas extra (separadas por coma) que se cargan en el navegador
for (const p of (process.env.MONITOR_BROWSER_PROBE || '').split(',').map((s) => s.trim()).filter(Boolean)) {
  BROWSER_PAGES.push({ path: p, tests: [] });
}

// Solo para depuración: limita las páginas del navegador a las rutas indicadas
const only = (process.env.MONITOR_BROWSER_ONLY || '').split(',').map((s) => s.trim()).filter(Boolean);
if (only.length) {
  for (let i = BROWSER_PAGES.length - 1; i >= 0; i--) if (!only.includes(BROWSER_PAGES[i].path)) BROWSER_PAGES.splice(i, 1);
}

// Prueba del aviso de cookies (contexto limpio, solo en la portada)
export const COOKIE_TEST_PATH = '/';
