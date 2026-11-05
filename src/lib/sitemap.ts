import { SERVICIOS } from '@/data/servicios';
import { MUNICIPIOS } from '@/data/municipios';
import type { BarrioArchetype } from '@/data/municipios';
import {
  getContenidoPeriodica,
  getContenidoViviendas,
  getContenidoPisos,
  getContenidoGLBarrio,
  GL_SERVIZO_SLUGS,
} from '@/data/combos-barrio';
import { esComboBarrioPermitido, SERVICIOS_BARRIO_MONEY } from '@/data/url-policy';
import { getCollection } from 'astro:content';
import { execSync } from 'node:child_process';

export const SITE = 'https://zentrolimpiezas.es';

export type SitemapEntry = { loc: string; lastmod?: string };

export const SITEMAP_CHUNKS = ['core', 'servicios', 'combos', 'zonas', 'barrios', 'blog'] as const;
export type SitemapChunk = (typeof SITEMAP_CHUNKS)[number];

const lastCommitDateCache = new Map<string, string | undefined>();

/**
 * Fecha ISO del último commit que modificó `relativeFilePath` (p.ej. "src/data/servicios.ts"),
 * usada como <lastmod> real y verificable (Google: solo confiar en lastmod si es
 * "consistently and verifiably accurate"; nunca la fecha de build o la de hoy).
 *
 * Si git no está disponible (p.ej. el .git no viaja en la imagen de build de producción,
 * ver Dockerfile/.dockerignore) o el fichero no tiene historial, devuelve undefined y el
 * resto del pipeline simplemente omite <lastmod> para ese chunk, igual que hace hoy.
 */
function lastCommitDate(relativeFilePath: string): string | undefined {
  if (lastCommitDateCache.has(relativeFilePath)) {
    return lastCommitDateCache.get(relativeFilePath);
  }
  let result: string | undefined;
  try {
    // cwd: process.cwd() es la raíz del repo porque `astro build` siempre se invoca desde ahí
    // (ver package.json → "build": "astro build"). import.meta.url NO sirve aquí: en build
    // este módulo ya corre empaquetado desde dist/server/chunks/*.mjs, en una ruta que no
    // guarda una relación fija con la raíz del repo.
    const iso = execSync(`git log -1 --format=%cI -- "${relativeFilePath}"`, {
      cwd: process.cwd(),
    })
      .toString()
      .trim();
    result = iso || undefined;
  } catch {
    result = undefined;
  }
  lastCommitDateCache.set(relativeFilePath, result);
  return result;
}

/** La más reciente de varias fechas ISO (ignorando las que falten). */
function latestDate(...dates: (string | undefined)[]): string | undefined {
  const valid = dates.filter((d): d is string => !!d);
  if (valid.length === 0) return undefined;
  return valid.reduce((a, b) => (new Date(a).getTime() >= new Date(b).getTime() ? a : b));
}

function loc(path: string, lastmod?: string): SitemapEntry {
  return lastmod ? { loc: `${SITE}${path}`, lastmod } : { loc: `${SITE}${path}` };
}

function ferrolterraConBarrios() {
  return MUNICIPIOS.filter((m) => m.comarca === 'Ferrolterra' && m.barrios);
}

function barrioEntries(
  servicioSlug: string,
  tieneContenido: (archetype: BarrioArchetype) => boolean,
  lastmod?: string,
): SitemapEntry[] {
  return ferrolterraConBarrios().flatMap((m) =>
    (m.barrios ?? [])
      .filter((b) => b.archetype && tieneContenido(b.archetype as BarrioArchetype) && esComboBarrioPermitido(servicioSlug, m.slug, b.slug))
      .map((b) => loc(`/servicios/${servicioSlug}/${m.slug}/${b.slug}/`, lastmod)),
  );
}

export async function entriesForChunk(chunk: SitemapChunk): Promise<SitemapEntry[]> {
  switch (chunk) {
    case 'core':
      return [
        loc('/'),
        loc('/servicios/'),
        loc('/zonas/'),
        loc('/presupuesto/'),
        loc('/precios/'),
        loc('/sobre-nosotros/'),
        loc('/blog/'),
        loc('/gl/'),
        loc('/gl/servizos/'),
        loc('/gl/zonas/'),
        loc('/gl/orzamento/'),
        loc('/gl/precios/'),
        loc('/gl/sobre-nos/'),
        loc('/gl/blog/'),
      ];
    case 'servicios': {
      // Fecha real del último commit que tocó la ficha de servicios (único origen de datos del chunk).
      const lastmod = lastCommitDate('src/data/servicios.ts');
      return [
        ...SERVICIOS.map((s) => loc(`/servicios/${s.slug}/`, lastmod)),
        ...SERVICIOS.map((s) => loc(`/gl/servizos/${s.slugGL}/`, lastmod)),
      ];
    }
    case 'combos': {
      // Los combos salen de s.municipiosCombo, definido en el mismo fichero que los servicios.
      const lastmod = lastCommitDate('src/data/servicios.ts');
      return [
        ...SERVICIOS.flatMap((s) => s.municipiosCombo.map((m) => loc(`/servicios/${s.slug}/${m}/`, lastmod))),
        ...SERVICIOS.flatMap((s) => s.municipiosCombo.map((m) => loc(`/gl/servizos/${s.slugGL}/${m}/`, lastmod))),
      ];
    }
    case 'zonas': {
      const lastmod = lastCommitDate('src/data/municipios.ts');
      return [
        ...MUNICIPIOS.map((m) => loc(`/zonas/${m.slug}/`, lastmod)),
        ...MUNICIPIOS.map((m) => loc(`/gl/zonas/${m.slug}/`, lastmod)),
        // Los barrios con canonicalParent apuntan su <link rel="canonical"> al municipio:
        // no son autocanónicos, así que no deben enviarse en el sitemap como URL propia.
        ...MUNICIPIOS.flatMap((m) => (m.barrios ?? []).filter((b) => !b.canonicalParent).map((b) => loc(`/zonas/${m.slug}/${b.slug}/`, lastmod))),
        ...MUNICIPIOS.flatMap((m) => (m.barrios ?? []).filter((b) => !b.canonicalParent).map((b) => loc(`/gl/zonas/${m.slug}/${b.slug}/`, lastmod))),
      ];
    }
    case 'barrios': {
      const contenidoBarrio: Record<string, (a: BarrioArchetype) => boolean> = {
        'limpieza-periodica': (a) => !!getContenidoPeriodica(a, '', ''),
        'limpieza-de-viviendas': (a) => !!getContenidoViviendas(a, '', ''),
        'limpieza-de-pisos': (a) => !!getContenidoPisos(a, '', ''),
      };
      // Qué barrios/servicios salen en este chunk depende de municipios.ts (barrios y arquetipos),
      // de combos-barrio.ts (contenido disponible por arquetipo) y de url-policy.ts
      // (SERVICIOS_BARRIO_MONEY / esComboBarrioPermitido): usamos la más reciente de las tres.
      const lastmod = latestDate(
        lastCommitDate('src/data/municipios.ts'),
        lastCommitDate('src/data/combos-barrio.ts'),
        lastCommitDate('src/data/url-policy.ts'),
      );
      return [
        ...SERVICIOS_BARRIO_MONEY.flatMap((slug) => barrioEntries(slug, contenidoBarrio[slug], lastmod)),
        ...SERVICIOS.filter((s) => SERVICIOS_BARRIO_MONEY.includes(s.slug as typeof SERVICIOS_BARRIO_MONEY[number]) && GL_SERVIZO_SLUGS.has(s.slugGL)).flatMap((s) =>
          ferrolterraConBarrios().flatMap((m) =>
            (m.barrios ?? [])
              .filter((b) => b.archetype && getContenidoGLBarrio(s.slugGL, b.archetype as BarrioArchetype, '', '') && esComboBarrioPermitido(s.slug, m.slug, b.slug))
              .map((b) => loc(`/gl/servizos/${s.slugGL}/${m.slug}/${b.slug}/`, lastmod)),
          ),
        ),
      ];
    }
    case 'blog': {
      const posts = await getCollection('blog', ({ data }) => !data.draft);
      const postsGL = await getCollection('blog-gl', ({ data }) => !data.draft);
      return [
        ...posts.map((p) => loc(`/blog/${p.slug}/`, p.data.dateModified ?? p.data.datePublished)),
        ...postsGL.map((p) => loc(`/gl/blog/${p.slug}/`, p.data.dateModified ?? p.data.datePublished)),
      ];
    }
  }
}

export function renderUrlset(entries: SitemapEntry[]): string {
  const urls = entries
    .map((e) =>
      e.lastmod
        ? `  <url><loc>${e.loc}</loc><lastmod>${e.lastmod}</lastmod></url>`
        : `  <url><loc>${e.loc}</loc></url>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export function renderSitemapIndex(chunks: readonly SitemapChunk[]): string {
  const items = chunks
    .map((c) => `  <sitemap><loc>${SITE}/sitemaps/${c}.xml</loc></sitemap>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</sitemapindex>`;
}

export const XML_HEADERS = { 'Content-Type': 'application/xml; charset=utf-8' };
