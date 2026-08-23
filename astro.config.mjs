import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://zentrolimpiezas.es',
  output: 'hybrid',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'gl'],
    routing: { prefixDefaultLocale: false },
  },
});
