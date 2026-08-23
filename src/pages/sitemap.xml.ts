import type { APIRoute } from 'astro';
import { SERVICIOS } from '@/data/servicios';
import { MUNICIPIOS } from '@/data/municipios';
import type { BarrioArchetype } from '@/data/municipios';
import { CONTENIDO_BARRIO, getContenidoPeriodica, getContenidoViviendas, getContenidoPisos, getContenidoTuristicos, getContenidoAfondo, getContenidoGLBarrio, GL_SERVIZO_SLUGS } from '@/data/combos-barrio';
import { getCollection } from 'astro:content';

export const prerender = true;

const SITE = 'https://zentrolimpiezas.es';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const postsGL = await getCollection('blog-gl', ({ data }) => !data.draft);

  type UrlEntry = { loc: string; priority: string; changefreq: string };

  const entries: UrlEntry[] = [
    // Páginas principales ES
    { loc: `${SITE}/`,                  priority: '1.0', changefreq: 'weekly' },
    { loc: `${SITE}/servicios/`,        priority: '0.9', changefreq: 'monthly' },
    { loc: `${SITE}/zonas/`,            priority: '0.9', changefreq: 'monthly' },
    { loc: `${SITE}/presupuesto/`,      priority: '0.9', changefreq: 'monthly' },
    { loc: `${SITE}/precios/`,          priority: '0.8', changefreq: 'monthly' },
    { loc: `${SITE}/sobre-nosotros/`,   priority: '0.6', changefreq: 'yearly' },
    { loc: `${SITE}/contacto/`,         priority: '0.7', changefreq: 'yearly' },
    { loc: `${SITE}/blog/`,             priority: '0.7', changefreq: 'weekly' },
    // Páginas principales GL
    { loc: `${SITE}/gl/`,               priority: '1.0', changefreq: 'weekly' },
    { loc: `${SITE}/gl/servizos/`,      priority: '0.9', changefreq: 'monthly' },
    { loc: `${SITE}/gl/zonas/`,         priority: '0.9', changefreq: 'monthly' },
    { loc: `${SITE}/gl/orzamento/`,     priority: '0.9', changefreq: 'monthly' },
    { loc: `${SITE}/gl/precios/`,       priority: '0.8', changefreq: 'monthly' },
    { loc: `${SITE}/gl/sobre-nos/`,     priority: '0.6', changefreq: 'yearly' },
    { loc: `${SITE}/gl/contacto/`,      priority: '0.7', changefreq: 'yearly' },
    { loc: `${SITE}/gl/blog/`,          priority: '0.7', changefreq: 'weekly' },
    // Servicios ES (páginas de categoría)
    ...SERVICIOS.map(s => ({ loc: `${SITE}/servicios/${s.slug}/`, priority: '0.8', changefreq: 'monthly' })),
    // Servicios GL
    ...SERVICIOS.map(s => ({ loc: `${SITE}/gl/servizos/${s.slugGL}/`, priority: '0.8', changefreq: 'monthly' })),
    // Zonas ES (páginas de municipio — alta prioridad local)
    ...MUNICIPIOS.map(m => ({ loc: `${SITE}/zonas/${m.slug}/`, priority: '0.85', changefreq: 'monthly' })),
    // Zonas GL
    ...MUNICIPIOS.map(m => ({ loc: `${SITE}/gl/zonas/${m.slug}/`, priority: '0.85', changefreq: 'monthly' })),
    // Combos servicio × municipio ES (long tail — prioridad media)
    ...SERVICIOS.flatMap(s =>
      s.municipiosCombo.map(m => ({ loc: `${SITE}/servicios/${s.slug}/${m}/`, priority: '0.7', changefreq: 'monthly' }))
    ),
    // Combos servizo × municipio GL
    ...SERVICIOS.flatMap(s =>
      s.municipiosCombo.map(m => ({ loc: `${SITE}/gl/servizos/${s.slugGL}/${m}/`, priority: '0.7', changefreq: 'monthly' }))
    ),
    // Barrios ES (páginas de barrio — lower priority)
    ...MUNICIPIOS.flatMap(m => (m.barrios ?? []).map(b => ({ loc: `${SITE}/zonas/${m.slug}/${b.slug}/`, priority: '0.6', changefreq: 'yearly' }))),
    // Barrios GL
    ...MUNICIPIOS.flatMap(m => (m.barrios ?? []).map(b => ({ loc: `${SITE}/gl/zonas/${m.slug}/${b.slug}/`, priority: '0.6', changefreq: 'yearly' }))),
    // Combos servicio × barrio ES (4º nivel — prioridad local long tail)
    ...SERVICIOS.flatMap(s => {
      const servicioMap = CONTENIDO_BARRIO[s.slug];
      if (!servicioMap) return [];
      return MUNICIPIOS
        .filter(m => m.comarca === 'Ferrolterra' && m.barrios)
        .flatMap(m =>
          (m.barrios ?? [])
            .filter(b => b.archetype && servicioMap[b.archetype as BarrioArchetype])
            .map(b => ({ loc: `${SITE}/servicios/${s.slug}/${m.slug}/${b.slug}/`, priority: '0.65', changefreq: 'monthly' }))
        );
    }),
    // Combos servicio × barrio ES — plantillas dedicadas (periódica, viviendas, pisos, turísticos)
    ...MUNICIPIOS
      .filter(m => m.comarca === 'Ferrolterra' && m.barrios)
      .flatMap(m =>
        (m.barrios ?? [])
          .filter(b => b.archetype && getContenidoPeriodica(b.archetype as BarrioArchetype, '', ''))
          .map(b => ({ loc: `${SITE}/servicios/limpieza-periodica/${m.slug}/${b.slug}/`, priority: '0.65', changefreq: 'monthly' }))
      ),
    ...MUNICIPIOS
      .filter(m => m.comarca === 'Ferrolterra' && m.barrios)
      .flatMap(m =>
        (m.barrios ?? [])
          .filter(b => b.archetype && getContenidoViviendas(b.archetype as BarrioArchetype, '', ''))
          .map(b => ({ loc: `${SITE}/servicios/limpieza-de-viviendas/${m.slug}/${b.slug}/`, priority: '0.65', changefreq: 'monthly' }))
      ),
    ...MUNICIPIOS
      .filter(m => m.comarca === 'Ferrolterra' && m.barrios)
      .flatMap(m =>
        (m.barrios ?? [])
          .filter(b => b.archetype && getContenidoPisos(b.archetype as BarrioArchetype, '', ''))
          .map(b => ({ loc: `${SITE}/servicios/limpieza-de-pisos/${m.slug}/${b.slug}/`, priority: '0.65', changefreq: 'monthly' }))
      ),
    ...MUNICIPIOS
      .filter(m => m.comarca === 'Ferrolterra' && m.barrios)
      .flatMap(m =>
        (m.barrios ?? [])
          .filter(b => b.archetype && getContenidoTuristicos(b.archetype as BarrioArchetype, '', ''))
          .map(b => ({ loc: `${SITE}/servicios/limpieza-de-apartamentos-turisticos/${m.slug}/${b.slug}/`, priority: '0.65', changefreq: 'monthly' }))
      ),
    // Combos servicio × barrio ES — limpieza a fondo
    ...MUNICIPIOS
      .filter(m => m.comarca === 'Ferrolterra' && m.barrios)
      .flatMap(m =>
        (m.barrios ?? [])
          .filter(b => b.archetype && getContenidoAfondo(b.archetype as BarrioArchetype, '', ''))
          .map(b => ({ loc: `${SITE}/servicios/limpieza-a-fondo/${m.slug}/${b.slug}/`, priority: '0.65', changefreq: 'monthly' }))
      ),
    // Combos servizo × barrio GL (hreflang pair)
    ...SERVICIOS.flatMap(s => {
      if (!GL_SERVIZO_SLUGS.has(s.slugGL)) return [];
      return MUNICIPIOS
        .filter(m => m.comarca === 'Ferrolterra' && m.barrios)
        .flatMap(m =>
          (m.barrios ?? [])
            .filter(b => b.archetype && getContenidoGLBarrio(s.slugGL, b.archetype as BarrioArchetype, '', ''))
            .map(b => ({ loc: `${SITE}/gl/servizos/${s.slugGL}/${m.slug}/${b.slug}/`, priority: '0.60', changefreq: 'monthly' }))
        );
    }),
    // Blog ES
    ...posts.map(p => ({ loc: `${SITE}/blog/${p.slug}/`, priority: '0.65', changefreq: 'yearly' })),
    // Blog GL
    ...postsGL.map(p => ({ loc: `${SITE}/gl/blog/${p.slug}/`, priority: '0.65', changefreq: 'yearly' })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(e => `  <url><loc>${e.loc}</loc><priority>${e.priority}</priority><changefreq>${e.changefreq}</changefreq></url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
