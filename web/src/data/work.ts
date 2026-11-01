import type { Link } from '@/types'

// Work page and project page labels.
export const workPage = {
  meta: {
    title: 'Our Work: Branding, 3D and Strategy Projects | Blackhat',
    description:
      'Branding, 3D animation and strategy projects for energy, finance, hospitality and education brands, from Energend and MYJ to NIRI and Hyperloop TT.',
  },
  eyebrow: 'Work',
  title: 'Make Them Look Twice',
  lead: 'Brand identities, 3D worlds and strategy for companies in energy, finance, hospitality, education and more.',
  filterLabel: 'Filter by service',
  allLabel: 'All Work',
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
  videoTitle: 'Film',
  playLabel: 'Play the Film',
  nextLabel: 'Next Project',
  allWork: { label: 'See All Work', href: '/work' } satisfies Link,
}
