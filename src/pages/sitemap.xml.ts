import type { APIRoute } from 'astro';
import { SERVICIOS } from '@/data/servicios';
import { MUNICIPIOS } from '@/data/municipios';
import { getCollection } from 'astro:content';

export const prerender = true;

const SITE = 'https://zentrolimpiezas.es';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const postsGL = await getCollection('blog-gl', ({ data }) => !data.draft);

  const urls: string[] = [
    // Páginas principales ES
    `${SITE}/`,
    `${SITE}/servicios/`,
    `${SITE}/zonas/`,
    `${SITE}/sobre-nosotros/`,
    `${SITE}/presupuesto/`,
    `${SITE}/blog/`,
    // Páginas principales GL
    `${SITE}/gl/`,
    `${SITE}/gl/servizos/`,
    `${SITE}/gl/zonas/`,
    `${SITE}/gl/orzamento/`,
    `${SITE}/gl/blog/`,
    // Servicios ES
    ...SERVICIOS.map(s => `${SITE}/servicios/${s.slug}/`),
    // Servicios GL
    ...SERVICIOS.map(s => `${SITE}/gl/servizos/${s.slugGL}/`),
    // Combos servicio × municipio ES
    ...SERVICIOS.flatMap(s =>
      s.municipiosCombo.map(m => `${SITE}/servicios/${s.slug}/${m}/`)
    ),
    // Zonas ES
    ...MUNICIPIOS.map(m => `${SITE}/zonas/${m.slug}/`),
    // Zonas GL
    ...MUNICIPIOS.map(m => `${SITE}/gl/zonas/${m.slug}/`),
    // Blog ES
    ...posts.map(p => `${SITE}/blog/${p.slug}/`),
    // Blog GL
    ...postsGL.map(p => `${SITE}/gl/blog/${p.slug}/`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
