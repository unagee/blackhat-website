import type { APIRoute } from 'astro'
import { WEBSITE_URL } from 'astro:env/client'

// Add every new page here so search engines can find it.
const paths = ['/', '/contact']

export const GET: APIRoute = () => {
  const urls = paths.map((path) => `<url><loc>${new URL(path, WEBSITE_URL)}</loc></url>`)
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}</urlset>`

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
