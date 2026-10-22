import type { Link } from '@/types'

// Work page and project page labels.
export const workPage = {
  meta: {
    title: 'Our Work: Branding, 3D and Strategy Projects | Blackhat',
    description:
      'Branding, 3D animation and strategy projects for energy, finance, hospitality and education brands, from Energend and MYJ to NIRI and Hyperloop TT.',
  },
  eyebrow: 'Work',
  title: 'Work that does the explaining',
  lead: 'Brand identities, 3D worlds and strategy for companies in energy, finance, hospitality, education and more.',
  filterLabel: 'Filter by service',
  allLabel: 'All work',
  // "{count}" is replaced with the number of projects shown.
  resultsLabel: 'Showing {count} projects',
}

export const projectPage = {
  breadcrumbLabel: 'Breadcrumb',
  parent: { label: 'Work', href: '/work' } satisfies Link,
  clientLabel: 'Client',
  sectorLabel: 'Sector',
  servicesLabel: 'Services',
  overviewTitle: 'Overview',
  galleryTitle: 'Gallery',
  nextLabel: 'Next project',
  allWork: { label: 'See all work', href: '/work' } satisfies Link,
}
