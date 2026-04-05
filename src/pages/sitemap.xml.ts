import type { APIRoute } from 'astro';

const routes = [
  '',
  '/empresa',
  '/servicios',
  '/como-trabajamos',
  '/software-e-innovacion',
  '/legal',
];

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') || 'https://madecem.com';
  const now = new Date().toISOString();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>\n    <loc>${base}${route || '/'}</loc>\n    <lastmod>${now}</lastmod>\n  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
