import type { Link, NavItem } from '@/types'

const services: Link[] = [
  { label: 'Brand & Visual Identity', href: '/what-we-do/brand-visual-identity' },
  { label: '3D Animation & Motion Graphics', href: '/what-we-do/3d-animation-motion-graphics' },
  { label: 'Strategy & Consulting', href: '/what-we-do/strategy-consulting' },
]

const nav: NavItem[] = [
  {
    label: 'What We Do',
    columns: [
      { title: 'Services', links: [{ label: 'Overview', href: '/what-we-do' }, ...services] },
      {
        title: 'Industries',
        links: [
          { label: 'Financial Institutions', href: '/work' },
          { label: 'Healthcare', href: '/work' },
          { label: 'Luxury', href: '/work' },
        ],
      },
    ],
    footerLink: { label: 'All Services', href: '/what-we-do' },
  },
  { label: 'Work', href: '/work' },
]

// Navigation, footer and shared labels used on every page.
export const site = {
  tagline: 'Strategy-driven creative agency in Singapore.',
  services,
  nav,
  cta: { label: 'Contact', href: '/contact' } satisfies Link,
  // Yellow closing contact section at the bottom of most pages.
  contact: {
    eyebrow: 'Contact',
    title: 'Tell us what you’re *working on*.',
    body: 'A rough brief, a half-finished deck, a hunch. Send whatever you have and we’ll come back with how we’d approach it.',
    emailLabel: 'Email Us',
    emailSubject: 'New project enquiry',
    emailBody:
      'Name:\nCompany:\nWhich services are you interested in?\nTell us about your project:\n',
  },
  footer: {
    title: 'Keep exploring',
    links: [
      { label: 'What We Do', href: '/what-we-do' },
      { label: 'Work', href: '/work' },
      { label: 'Contact', href: '/contact' },
    ] satisfies Link[],
    legal: [
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/cookies' },
    ] satisfies Link[],
    legalTitle: 'Legal',
    visitTitle: 'Visit',
    contactTitle: 'Talk to us',
  },
  labels: {
    skipToContent: 'Skip to main content',
    mainNavigation: 'Main navigation',
    footerNavigation: 'Footer navigation',
    legalNavigation: 'Legal',
    home: 'Blackhat Agency home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menu: 'Menu',
    rights: 'All rights reserved.',
    pauseMotion: 'Pause Animation',
    playMotion: 'Play Animation',
    pauseVideo: 'Pause Video',
    playVideo: 'Play Video',
    search: 'Search',
    searchLabel: 'Search the site',
    searchPlaceholder: 'Search…',
    // "{count}" and "{query}" are replaced when results show.
    searchResults: '{count} results',
    searchEmpty: 'No results for “{query}”',
    searchHint: 'Try a client, a service or a sector, such as “Energend”, “3D” or “finance”.',
  },
  // The cookie notice in the bottom-right corner.
  cookies: {
    label: 'Cookie preferences',
    title: 'Cookies',
    body: 'We use cookies to keep this site working and, if you allow them, to understand how it’s used so we can improve it.',
    accept: 'Allow Cookies',
    decline: 'Decline',
  },
}
