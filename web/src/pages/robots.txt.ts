import { WEBSITE_URL } from 'astro:env/client'
import { SITE_ENV } from 'astro:env/server'

export async function GET() {
  const lines =
    SITE_ENV === 'production'
      ? ['User-agent: *', 'Allow: /', `Sitemap: ${WEBSITE_URL}/sitemap.xml`]
      : ['User-agent: *', 'Disallow: /']

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain' },
  })
}
