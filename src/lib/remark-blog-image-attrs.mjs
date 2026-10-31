// Plugin remark para Astro: añade width/height/loading/decoding a las
// imágenes de CUERPO de los artículos de blog (sintaxis Markdown
// `![alt](ruta)` en src/content/blog/*.md y src/content/blog-gl/*.md).
//
// Se ejecuta sobre el árbol mdast (Markdown), ANTES de que Astro lo
// convierta a HTML, así que Astro ya emite las imágenes con estos
// atributos listos (el mecanismo estándar: remarkPlugins en
// astro.config.mjs -> node.data.hProperties -> atributos HTML finales).
//
// No toca la imagen "hero" de cada artículo (frontmatter `image:`),
// porque esa se renderiza aparte, directamente como <img> en
// src/layouts/BlogLayout.astro, y nunca pasa por este árbol Markdown.
//
// Dimensiones: se intenta leer el tamaño REAL del archivo .webp
// referenciado (cabecera RIFF/WEBP, sin dependencias nuevas). Si el
// archivo no existe o el formato no se reconoce, se usa como fallback
// 900x550, que es el tamaño REAL verificado (con `file`) de las 21
// imágenes de contenido existentes en public/images/blog/content-*.webp
// a fecha de este cambio — nunca un valor inventado.

import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { visit } from 'unist-util-visit';

const FALLBACK_WIDTH = 900;
const FALLBACK_HEIGHT = 550;

/**
 * Lee el ancho/alto real de un WebP a partir de su cabecera RIFF,
 * soportando los tres sub-formatos (lossy VP8, lossless VP8L, extended
 * VP8X). Devuelve null si no se puede determinar.
 */
function readWebpSize(absPath) {
  try {
    const buf = readFileSync(absPath);
    if (buf.length < 30) return null;
    if (buf.toString('ascii', 0, 4) !== 'RIFF' || buf.toString('ascii', 8, 12) !== 'WEBP') {
      return null;
    }
    const subFormat = buf.toString('ascii', 12, 16);

    if (subFormat === 'VP8 ') {
      // Lossy simple: ancho/alto de 14 bits en little-endian, offsets 26 y 28
      const width = buf.readUInt16LE(26) & 0x3fff;
      const height = buf.readUInt16LE(28) & 0x3fff;
      return width > 0 && height > 0 ? { width, height } : null;
    }

    if (subFormat === 'VP8L') {
      const b0 = buf[21];
      const b1 = buf[22];
      const b2 = buf[23];
      const b3 = buf[24];
      const width = 1 + (((b1 & 0x3f) << 8) | b0);
      const height = 1 + (((b3 & 0x0f) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6));
      return width > 0 && height > 0 ? { width, height } : null;
    }

    if (subFormat === 'VP8X') {
      const width = 1 + buf.readUIntLE(24, 3);
      const height = 1 + buf.readUIntLE(27, 3);
      return width > 0 && height > 0 ? { width, height } : null;
    }

    return null;
  } catch {
    return null;
  }
}

const sizeCache = new Map();

function getImageSize(publicDir, url) {
  if (sizeCache.has(url)) return sizeCache.get(url);

  let size = null;
  if (typeof url === 'string' && url.startsWith('/images/blog/')) {
    const absPath = path.join(publicDir, url);
    if (existsSync(absPath)) {
      size = readWebpSize(absPath);
    }
  }
  if (!size) {
    size = { width: FALLBACK_WIDTH, height: FALLBACK_HEIGHT };
  }

  sizeCache.set(url, size);
  return size;
}

export default function remarkBlogImageAttrs() {
  const publicDir = path.join(process.cwd(), 'public');

  return (tree) => {
    visit(tree, 'image', (node) => {
      if (typeof node.url !== 'string' || !node.url.startsWith('/images/blog/')) {
        return;
      }

      const { width, height } = getImageSize(publicDir, node.url);

      node.data = node.data || {};
      node.data.hProperties = {
        ...(node.data.hProperties || {}),
        loading: 'lazy',
        decoding: 'async',
        width,
        height,
      };
    });
  };
}
