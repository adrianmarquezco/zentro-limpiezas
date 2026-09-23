// Orquestador del vigilante. Ejecuta la comprobación HTTP y la del navegador y escribe un informe en Markdown.
// Uso:
//   node monitor/run.mjs --out informe.md            (todo)
//   node monitor/run.mjs --http-only --out informe.md (solo HTTP, sin Playwright)
// Variables: MONITOR_URL, PW_CHANNEL (msedge|chrome), MONITOR_MAX_PAGES, MONITOR_PROBE_PATHS
// Código de salida: 1 si hay algún fallo (los avisos no cuentan).
import { writeFileSync } from 'node:fs';
import * as C from './config.mjs';
import { Findings, renderReport } from './lib.mjs';
import { runHttpChecks } from './http-check.mjs';

const args = process.argv.slice(2);
const outIdx = args.indexOf('--out');
const outFile = outIdx >= 0 ? args[outIdx + 1] : null;
const httpOnly = args.includes('--http-only');

const F = new Findings();
const startedAt = new Date();
const stats = [];

try {
  stats.push(...(await runHttpChecks(F)));
} catch (e) {
  F.fail('Vigilante', '-', `la comprobación HTTP se interrumpió: ${e.message}`);
}

if (!httpOnly) {
  try {
    const { runBrowserChecks } = await import('./browser-check.mjs');
    stats.push(...(await runBrowserChecks(F)));
  } catch (e) {
    F.fail('Vigilante', '-', `la comprobación en navegador se interrumpió: ${String(e.message).split('\n')[0]}`);
  }
}

const report = renderReport({ site: C.SITE, findings: F, stats, startedAt });
if (outFile) writeFileSync(outFile, report, 'utf8');
console.log(report);
process.exit(F.fails.length ? 1 : 0);
