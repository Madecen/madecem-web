// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // <--- AÑADE ESTO
  site: 'https://www.madecem.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});