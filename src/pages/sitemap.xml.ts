import type { APIRoute } from 'astro';
import { SITEMAP_CHUNKS, renderSitemapIndex, XML_HEADERS } from '@/lib/sitemap';

export const prerender = true;

export const GET: APIRoute = () =>
  new Response(renderSitemapIndex(SITEMAP_CHUNKS), { headers: XML_HEADERS });
