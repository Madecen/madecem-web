import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Tu dominio real para que WhatsApp encuentre la imagen
  site: 'https://madecem.com', 

  integrations: [
    tailwind()
  ],
});