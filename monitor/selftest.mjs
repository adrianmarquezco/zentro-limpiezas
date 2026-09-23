// Autoprueba de las reglas: comprueba que el analizador detecta HTML roto conocido. Uso: node monitor/selftest.mjs
import { analyzeHtml } from './lib.mjs';

let failed = 0;
const ok = (name, cond) => {
  console.log(`${cond ? 'OK   ' : 'FALLA'} ${name}`);
  if (!cond) failed++;
};

const good = `<!doctype html><html lang="es"><head><title>Limpieza de pisos en Narón | Zentro</title>
<link rel="canonical" href="https://zentrolimpiezas.es/a/"><meta name="description" content="${'Descripción correcta de la página. '.repeat(3)}">
<script type="application/ld+json">{"@type":"Service","name":"x"}</script></head><body><h1>Titulo</h1><p>Texto normal ${'a'.repeat(50)}</p>
<a href="/b/">b</a><img src="/images/x.webp" alt=""></body></html>`;
const a = analyzeHtml(good);
ok('página correcta: sin incidencias', a.h1Count === 1 && a.complete && a.ldErrors.length === 0 && a.broken.length === 0 && a.canonical && a.description && a.title);
ok('página correcta: extrae enlaces e imágenes', a.links.includes('/b/') && a.imgs.includes('/images/x.webp'));

const twoH1 = good.replace('<h1>Titulo</h1>', '<h1>A</h1><h1>B</h1>');
ok('detecta dos H1', analyzeHtml(twoH1).h1Count === 2);

ok('detecta texto roto "undefined"', analyzeHtml(good.replace('Texto normal', 'Precio undefined')).broken.includes('undefined'));
ok('detecta [object Object]', analyzeHtml(good.replace('Texto normal', '[object Object]')).broken.includes('[object Object]'));
ok('detecta {{ }}', analyzeHtml(good.replace('Texto normal', '{{ nombre }}')).broken.length > 0);
ok('detecta NaN', analyzeHtml(good.replace('Texto normal', 'desde NaN€')).broken.includes('NaN'));

ok('detecta JSON-LD inválido', analyzeHtml(good.replace('{"@type":"Service","name":"x"}', '{"@type":"Service",')).ldErrors.length === 1);

const truncated = good.slice(0, good.indexOf('<a href'));
ok('detecta HTML cortado', analyzeHtml(truncated).complete === false);

ok('no confunde enlaces dentro de scripts', analyzeHtml(good.replace('</body>', `<script>var s='<a href="/falso/">x</a>';</script></body>`)).links.every((l) => l !== '/falso/'));

const noCanon = good.replace(/<link rel="canonical"[^>]*>/, '');
ok('detecta falta de canonical', analyzeHtml(noCanon).canonical === null);

ok('detecta noindex', analyzeHtml(good.replace('<title>', '<meta name="robots" content="noindex,follow"><title>')).noindex === true);

const errTitle = analyzeHtml(good.replace(/<title>[^<]*<\/title>/, '<title>Error 404 - Not Found</title>'));
ok('lee títulos de error', /error|404/i.test(errTitle.title));

// Scripts después de </html> (Astro los añade así) no deben marcarse como cortado
ok('acepta scripts tras </html>', analyzeHtml(good + '<script>console.log(1)</script>').complete === true);

if (failed) {
  console.error(`\n${failed} pruebas fallidas`);
  process.exit(1);
}
console.log('\nTodas las pruebas correctas');
