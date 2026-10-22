import { websiteConfig } from '@/config'

// Web app manifest: names and icons for "Add to Home Screen" on Android.
export function GET() {
  const manifest = {
    name: websiteConfig.name,
    short_name: 'Blackhat',
    icons: [
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    // Matches the ink token: the site's black ground.
    theme_color: '#000000',
    background_color: '#000000',
    display: 'browser',
  }

  return new Response(JSON.stringify(manifest), {
    headers: { 'Content-Type': 'application/manifest+json' },
  })
}
