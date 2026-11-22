#!/usr/bin/env node
// Notifica a IndexNow (Bing, Yandex, Seznam, Naver, Yep y demás motores participantes —
// Google NO participa en IndexNow, sigue sus propios tiempos de rastreo) de las URLs
// públicas del sitio, para que las rastreen antes que por su cronograma normal.
//
// Protocolo: https://www.indexnow.org/documentation (+ referencia detallada de Yandex,
// que implementa el mismo estándar: https://yandex.com/support/webmaster/en/indexnow/reference.html)
//   - Endpoint genérico (reparte a todos los motores participantes): POST https://api.indexnow.org/indexnow
//   - Cuerpo JSON: { host, key, keyLocation?, urlList }
//   - Máximo 10.000 URLs por petición (pasarse de esa cifra devuelve 422)
//   - Códigos de respuesta documentados: 200 (recibido), 202 (recibido, clave aún
//     verificándose), 400 (parámetros inválidos), 403 (clave inválida o keyLocation no
//     contiene la clave), 422 (entidad no procesable: demasiadas URLs, o URL de otro host),
//     429 (demasiadas peticiones desde esta IP)
//   - El archivo de clave debe alojarse en la raíz del host: https://<host>/<key>.txt
//     conteniendo únicamente la clave. Astro lo sirve automáticamente desde /public.
//
// Clave reutilizada: este repo ya tiene desde el commit 122f565
// ("Añade el archivo de verificación de IndexNow...") el archivo
// public/d085758489214d61ee5e16c7d5e43b7f.txt, publicado y verificado en producción
// (HTTP 200, contenido correcto). NO se genera una clave nueva: usar una clave nueva
// obligaría a publicar también un archivo nuevo y no aporta nada.
//
// Fuente de URLs: el sitemap YA DESPLEGADO en producción (https://zentrolimpiezas.es/sitemap.xml
// y sus hijos en /sitemaps/*.xml), no el código fuente. Así el script no depende de poder
// ejecutar Astro/TypeScript fuera del propio build (src/lib/sitemap.ts usa `astro:content`,
// un módulo virtual que solo existe dentro del pipeline de Astro) y siempre refleja lo que
// de verdad está publicado.
//
// Modo por defecto: DRY RUN (no llama a la API). Hace falta `--live` para enviar de verdad.
//
// Uso:
//   node scripts/indexnow-submit.mjs                # dry-run: muestra qué se enviaría
//   node scripts/indexnow-submit.mjs --live          # envío real a IndexNow
//   node scripts/indexnow-submit.mjs --live --urls-file urls.txt   # solo pruebas/depuración
//
// Variables de entorno opcionales:
//   INDEXNOW_SITE      (por defecto https://zentrolimpiezas.es)
//   INDEXNOW_KEY       (por defecto la clave ya publicada d085758489214d61ee5e16c7d5e43b7f)
//   INDEXNOW_ENDPOINT  (por defecto https://api.indexnow.org/indexnow)

const SITE = (process.env.INDEXNOW_SITE || 'https://zentrolimpiezas.es').replace(/\/$/, '');
const HOST = new URL(SITE).host;
const KEY = process.env.INDEXNOW_KEY || 'd085758489214d61ee5e16c7d5e43b7f';
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const ENDPOINT = process.env.INDEXNOW_ENDPOINT || 'https://api.indexnow.org/indexnow';
const BATCH_SIZE = 10000; // límite documentado por IndexNow/Yandex

const args = process.argv.slice(2);
const LIVE = args.includes('--live');
const HELP = args.includes('--help') || args.includes('-h');
const urlsFileIdx = args.indexOf('--urls-file');
const URLS_FILE = urlsFileIdx >= 0 ? args[urlsFileIdx + 1] : null;

if (HELP) {
  console.log(`Uso: node scripts/indexnow-submit.mjs [--live] [--urls-file <ruta>]

  (sin flags)   Dry-run: descarga el sitemap de producción, calcula qué se enviaría
                y lo muestra, sin llamar a la API de IndexNow.
  --live        Envía de verdad el POST a ${ENDPOINT}.
  --urls-file   En vez del sitemap de producción, lee las URLs de un fichero de texto
                (una por línea). Solo para pruebas locales.
`);
  process.exit(0);
}

/** Verifica que la clave siga alojada y correcta antes de un envío real (evita un 403 inútil). */
async function verifyKeyFile() {
  const res = await fetch(KEY_LOCATION);
  if (!res.ok) {
    throw new Error(`El archivo de clave no responde (HTTP ${res.status}) en ${KEY_LOCATION}`);
  }
  const body = (await res.text()).trim();
  if (body !== KEY) {
    throw new Error(`El archivo de clave en ${KEY_LOCATION} no contiene la clave esperada (encontrado: "${body}")`);
  }
}

/** Misma lógica que monitor/http-check.mjs: sigue índices de sitemap anidados hasta recoger todas las <loc>. */
async function collectSitemapUrls(url, depth = 0) {
  if (depth > 3) throw new Error(`índice de sitemap anidado demasiado profundo en ${url}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`No se pudo leer ${url} (HTTP ${res.status})`);
  const text = await res.text();
  const locs = [...text.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
  if (/<sitemapindex[\s>]/i.test(text)) {
    const all = [];
    for (const loc of locs) all.push(...(await collectSitemapUrls(loc, depth + 1)));
    return all;
  }
  return locs;
}

/**
 * Punto de extensión para un futuro envío incremental (solo URLs cambiadas desde el
 * último despliegue), en vez del envío completo de arranque que hace este script hoy.
 *
 * Dos vías razonables cuando se quiera implementar, sin tocar el resto del script:
 *   1) Comparar el <lastmod> real de cada URL (ya presente en el sitemap, ver
 *      src/lib/sitemap.ts → lastCommitDate()) contra el de la última ejecución,
 *      guardado en algún sitio persistente entre runs de GitHub Actions
 *      (actions/cache, o un fichero de estado commiteado en el repo).
 *   2) Comparar por `git diff --name-only <sha-anterior> <sha-actual>` qué ficheros de
 *      datos/contenido cambiaron y mapear esos ficheros a las URLs que generan
 *      (acoplado a src/data/*.ts y a las colecciones de blog).
 *
 * Por ahora se deja sin implementar a propósito (ver tarea original): este script
 * siempre envía el conjunto completo de URLs del sitemap como arranque.
 */
function filterChangedUrls(allUrls) {
  return allUrls;
}

async function readUrlsFromFile(path) {
  const fs = await import('node:fs/promises');
  const text = await fs.readFile(path, 'utf8');
  return text.split('\n').map((l) => l.trim()).filter(Boolean);
}

function chunk(array, size) {
  const out = [];
  for (let i = 0; i < array.length; i += size) out.push(array.slice(i, i + size));
  return out;
}

async function submitBatch(urlList) {
  const body = JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList });
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body,
  });
  const text = await res.text().catch(() => '');
  return { status: res.status, ok: res.ok, body: text };
}

async function main() {
  console.log(`IndexNow — ${LIVE ? 'ENVÍO REAL' : 'DRY RUN (nada se envía)'}`);
  console.log(`Host: ${HOST}`);
  console.log(`Clave: ${KEY}`);
  console.log(`keyLocation: ${KEY_LOCATION}`);
  console.log(`Endpoint: ${ENDPOINT}`);

  let urls;
  if (URLS_FILE) {
    urls = await readUrlsFromFile(URLS_FILE);
    console.log(`\nURLs leídas de ${URLS_FILE}: ${urls.length}`);
  } else {
    console.log(`\nDescargando sitemap de producción: ${SITE}/sitemap.xml ...`);
    urls = await collectSitemapUrls(`${SITE}/sitemap.xml`);
    console.log(`URLs encontradas en el sitemap: ${urls.length}`);
  }

  const foreign = urls.filter((u) => {
    try {
      return new URL(u).host !== HOST;
    } catch {
      return true;
    }
  });
  if (foreign.length) {
    console.log(`Aviso: ${foreign.length} URL(s) no pertenecen a ${HOST} y se excluyen (IndexNow exige mismo host que "host").`);
  }
  const ownUrls = [...new Set(urls.filter((u) => !foreign.includes(u)))];

  if (ownUrls.length === 0) {
    console.log('No hay URLs que enviar. Nada que hacer.');
    return;
  }

  const toSend = filterChangedUrls(ownUrls);
  console.log(`\nURLs a notificar a IndexNow: ${toSend.length}`);
  console.log('Primeras 5:');
  for (const u of toSend.slice(0, 5)) console.log(`  - ${u}`);
  if (toSend.length > 5) console.log(`  ... y ${toSend.length - 5} más`);

  const batches = chunk(toSend, BATCH_SIZE);
  if (batches.length > 1) {
    console.log(`\nSe dividirá en ${batches.length} peticiones de hasta ${BATCH_SIZE} URLs (límite documentado por IndexNow).`);
  }

  if (!LIVE) {
    console.log('\n[DRY RUN] No se ha llamado a la API. Payload que se enviaría con --live:');
    console.log(JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: toSend.slice(0, 3).concat(toSend.length > 3 ? ['…'] : []) }, null, 2));
    console.log(`\n(${batches.length} petición(es) POST a ${ENDPOINT} con ${toSend.length} URL(s) en total)`);
    return;
  }

  console.log('\nVerificando que el archivo de clave sigue publicado y correcto...');
  await verifyKeyFile();
  console.log('Clave verificada correctamente.');

  let anyFailed = false;
  for (const [i, batch] of batches.entries()) {
    console.log(`\nEnviando petición ${i + 1}/${batches.length} (${batch.length} URLs) a ${ENDPOINT} ...`);
    const result = await submitBatch(batch);
    console.log(`Respuesta: HTTP ${result.status}${result.body ? ` — ${result.body.slice(0, 500)}` : ''}`);
    if (result.status !== 200 && result.status !== 202) {
      anyFailed = true;
      console.error(`AVISO: respuesta inesperada (esperado 200 o 202).`);
    }
  }

  if (anyFailed) {
    console.error('\nAl menos una petición no devolvió 200/202. Revisa el detalle anterior.');
    process.exitCode = 1;
  } else {
    console.log('\nEnvío completado correctamente.');
  }
}

main().catch((err) => {
  console.error(`\nError: ${err.message}`);
  process.exitCode = 1;
});
