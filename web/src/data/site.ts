import type { Link } from '@/types'

// Navigation, footer and shared labels used on every page.
export const site = {
  tagline: 'Growth, content and performance marketing.',
  nav: [
    { label: 'Services', href: '/#services' },
    { label: 'Approach', href: '/#approach' },
    { label: 'Contact', href: '/contact' },
  ] satisfies Link[],
  cta: { label: 'Start a project', href: '/contact' } satisfies Link,
  labels: {
    skipToContent: 'Skip to main content',
    mainNavigation: 'Main navigation',
    home: 'Blackhat Agency home',
    rights: 'All rights reserved.',
  },
}
