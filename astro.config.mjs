// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.madecem.com',

  // Configuración de optimización de imágenes
  image: {
    // Forzamos el uso de Sharp para que los 1800KiB bajen a menos de 100KiB
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});