import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://zentrolimpiezas.es',
  output: 'hybrid',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/legal/') &&
        !page.includes('/404') &&
        page !== 'https://zentrolimpiezas.es/contacto/' &&
        page !== 'https://zentrolimpiezas.es/gl/contacto/',
    }),
    tailwind({ applyBaseStyles: false }),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'gl'],
    routing: { prefixDefaultLocale: false },
  },
});
