import type { APIRoute } from 'astro';
import { SITEMAP_CHUNKS, entriesForChunk, renderUrlset, XML_HEADERS, type SitemapChunk } from '@/lib/sitemap';

export const prerender = true;

export function getStaticPaths() {
  return SITEMAP_CHUNKS.map((chunk) => ({ params: { chunk } }));
}

export const GET: APIRoute = async ({ params }) => {
  const chunk = params.chunk as SitemapChunk;
  const entries = await entriesForChunk(chunk);
  return new Response(renderUrlset(entries), { headers: XML_HEADERS });
};
