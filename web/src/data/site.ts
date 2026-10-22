import type { Link, NavItem } from '@/types'

const services: Link[] = [
  { label: 'Brand & Visual Identity', href: '/what-we-do/brand-visual-identity' },
  { label: '3D Animation & Motion Graphics', href: '/what-we-do/3d-animation-motion-graphics' },
  { label: 'Strategy & Consulting', href: '/what-we-do/strategy-consulting' },
]

const nav: NavItem[] = [
  {
    label: 'What we do',
    columns: [
      { title: 'Services', links: services },
      {
        title: 'Industries',
        links: [
          { label: 'Financial institutions', href: '/work' },
          { label: 'Healthcare', href: '/work' },
          { label: 'Luxury', href: '/work' },
        ],
      },
    ],
    footerLink: { label: 'All services', href: '/what-we-do' },
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
    emailLabel: 'Email us',
    emailSubject: 'New project enquiry',
    emailBody:
      'Name:\nCompany:\nWhich services are you interested in?\nTell us about your project:\n',
  },
  footer: {
    title: 'Keep exploring',
    links: [
      { label: 'What we do', href: '/what-we-do' },
      { label: 'Work', href: '/work' },
      { label: 'Contact', href: '/contact' },
    ] satisfies Link[],
    legal: [
      { label: 'Terms of service', href: '/terms' },
      { label: 'Privacy policy', href: '/privacy' },
      { label: 'Cookie policy', href: '/cookies' },
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
    pauseMotion: 'Pause animation',
    playMotion: 'Play animation',
    pauseVideo: 'Pause video',
    playVideo: 'Play video',
  },
}
