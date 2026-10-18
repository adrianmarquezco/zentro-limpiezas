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

export const SITE = 'https://zentrolimpiezas.es';

export type SitemapEntry = { loc: string; lastmod?: string };

export const SITEMAP_CHUNKS = ['core', 'servicios', 'combos', 'zonas', 'barrios', 'blog'] as const;
export type SitemapChunk = (typeof SITEMAP_CHUNKS)[number];

function loc(path: string, lastmod?: string): SitemapEntry {
  return lastmod ? { loc: `${SITE}${path}`, lastmod } : { loc: `${SITE}${path}` };
}

function ferrolterraConBarrios() {
  return MUNICIPIOS.filter((m) => m.comarca === 'Ferrolterra' && m.barrios);
}

function barrioEntries(
  servicioSlug: string,
  tieneContenido: (archetype: BarrioArchetype) => boolean,
): SitemapEntry[] {
  return ferrolterraConBarrios().flatMap((m) =>
    (m.barrios ?? [])
      .filter((b) => b.archetype && tieneContenido(b.archetype as BarrioArchetype) && esComboBarrioPermitido(servicioSlug, m.slug, b.slug))
      .map((b) => loc(`/servicios/${servicioSlug}/${m.slug}/${b.slug}/`)),
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
    case 'servicios':
      return [
        ...SERVICIOS.map((s) => loc(`/servicios/${s.slug}/`)),
        ...SERVICIOS.map((s) => loc(`/gl/servizos/${s.slugGL}/`)),
      ];
    case 'combos':
      return [
        ...SERVICIOS.flatMap((s) => s.municipiosCombo.map((m) => loc(`/servicios/${s.slug}/${m}/`))),
        ...SERVICIOS.flatMap((s) => s.municipiosCombo.map((m) => loc(`/gl/servizos/${s.slugGL}/${m}/`))),
      ];
    case 'zonas':
      return [
        ...MUNICIPIOS.map((m) => loc(`/zonas/${m.slug}/`)),
        ...MUNICIPIOS.map((m) => loc(`/gl/zonas/${m.slug}/`)),
        ...MUNICIPIOS.flatMap((m) => (m.barrios ?? []).map((b) => loc(`/zonas/${m.slug}/${b.slug}/`))),
        ...MUNICIPIOS.flatMap((m) => (m.barrios ?? []).map((b) => loc(`/gl/zonas/${m.slug}/${b.slug}/`))),
      ];
    case 'barrios': {
      const contenidoBarrio: Record<string, (a: BarrioArchetype) => boolean> = {
        'limpieza-periodica': (a) => !!getContenidoPeriodica(a, '', ''),
        'limpieza-de-viviendas': (a) => !!getContenidoViviendas(a, '', ''),
        'limpieza-de-pisos': (a) => !!getContenidoPisos(a, '', ''),
      };
      return [
        ...SERVICIOS_BARRIO_MONEY.flatMap((slug) => barrioEntries(slug, contenidoBarrio[slug])),
        ...SERVICIOS.filter((s) => SERVICIOS_BARRIO_MONEY.includes(s.slug as typeof SERVICIOS_BARRIO_MONEY[number]) && GL_SERVIZO_SLUGS.has(s.slugGL)).flatMap((s) =>
          ferrolterraConBarrios().flatMap((m) =>
            (m.barrios ?? [])
              .filter((b) => b.archetype && getContenidoGLBarrio(s.slugGL, b.archetype as BarrioArchetype, '', '') && esComboBarrioPermitido(s.slug, m.slug, b.slug))
              .map((b) => loc(`/gl/servizos/${s.slugGL}/${m.slug}/${b.slug}/`)),
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
