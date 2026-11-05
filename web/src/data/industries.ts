import type { PageMeta } from '@/types'
import type { ServiceSlug } from './projects'

// One thing we do for an industry: a short title and one line, shown in the Industries menu
// and as a card on the industry page.
export type IndustryOffering = {
  title: string
  body: string
  service: ServiceSlug
}

export type Industry = {
  slug: string
  name: string
  // One line under the name on the industry page and the Industries overview.
  lead: string
  meta: PageMeta
  offerings: IndustryOffering[]
  // Project slugs from projects.ts, in the order they show on the industry page.
  projects: string[]
}

// The Industries menu (left column: industries; right column: the hovered industry's offerings)
// and the pages at /industries/<slug>. Only industries we have real work to show for.
// Pages are noindex and out of the sitemap until their copy is signed off: set `ready` to true.
export const industriesPage = {
  ready: false,
  eyebrow: 'Industries',
  title: 'Every Industry Has Its Own *Mess*',
  lead: 'Finance, energy, food, games. Different problems, same crew. Pick yours to see what we’ve done there.',
  meta: {
    title: 'Industries We Work With | Blackhat',
    description:
      'The industries Blackhat works with, from financial services and energy to food, consumer brands and gaming, with the work we’ve done in each.',
  } satisfies PageMeta,
  breadcrumbLabel: 'Breadcrumb',
  offeringsEyebrow: 'What We Do Here',
  offeringsTitle: 'Where We Come In',
  workEyebrow: 'Work',
  workTitle: 'Proof, Not Promises',
  allLink: { label: 'All Industries', href: '/industries' },
  allWork: { label: 'See All Work', href: '/work' },
  // Menu labels.
  menuLabel: 'Industries',
  menuHint: 'Choose an industry',
}

export const industries: Industry[] = [
  {
    slug: 'financial-services',
    name: 'Financial Services',
    lead: 'Money is serious. Your brand doesn’t have to be boring.',
    meta: {
      title: 'Branding and 3D for Financial Services | Blackhat',
      description:
        'Brand identity, investor decks and 3D for funds, investment platforms and holding groups.',
    },
    offerings: [
      {
        title: 'Investment Brand Identity',
        body: 'Brands for funds and investment platforms that look as credible as they are.',
        service: 'brand-visual-identity',
      },
      {
        title: 'Group and Sub-Brand Systems',
        body: 'One identity that brings a holding group and every entity under it together.',
        service: 'brand-visual-identity',
      },
      {
        title: 'Investor and Pitch Decks',
        body: 'Decks that explain the business, the numbers and the plan.',
        service: 'brand-visual-identity',
      },
      {
        title: 'Financial Data in Motion',
        body: 'Portfolios, markets and products explained in 3D animation.',
        service: '3d-animation-motion-graphics',
      },
      {
        title: 'Office and Space Visualisation',
        body: 'Photoreal 3D of offices and branches before they are built.',
        service: '3d-animation-motion-graphics',
      },
      {
        title: 'Social Media Management',
        body: 'On-brand content and scheduling, month after month.',
        service: 'brand-visual-identity',
      },
    ],
    projects: ['suricate-capital', 'myj'],
  },
  {
    slug: 'energy-technology',
    name: 'Energy & Technology',
    lead: 'Your product is hard to picture. So we picture it.',
    meta: {
      title: 'Branding and 3D for Energy and Technology | Blackhat',
      description:
        'Positioning, identity and photoreal 3D for energy and technology companies with products that are hard to picture.',
    },
    offerings: [
      {
        title: 'Technology Brand Identity',
        body: 'Positioning and identity for companies selling technology that is hard to picture.',
        service: 'brand-visual-identity',
      },
      {
        title: 'Product Visualisation',
        body: 'Photoreal renders of products that are still in the lab.',
        service: '3d-animation-motion-graphics',
      },
      {
        title: 'Factory and Showroom Renders',
        body: 'Facilities and showrooms in 3D for investors and partners.',
        service: '3d-animation-motion-graphics',
      },
      {
        title: 'Concept Visualisation',
        body: 'Systems that don’t exist yet, rendered so people can see them.',
        service: '3d-animation-motion-graphics',
      },
      {
        title: 'Customer Journey Design',
        body: 'How riders and customers will move through a new service.',
        service: 'strategy-consulting',
      },
    ],
    projects: ['energend', 'hyperloop-tt'],
  },
  {
    slug: 'software-operations',
    name: 'Software & Operations',
    lead: 'Great software, confusing to learn. We fix the confusing part.',
    meta: {
      title: 'Brand and Training Design for Software | Blackhat',
      description:
        'Product brand direction, onboarding guides and process mapping for software and operations teams.',
    },
    offerings: [
      {
        title: 'Product Brand Direction',
        body: 'Palette, type and interface rules for a software product.',
        service: 'brand-visual-identity',
      },
      {
        title: 'Onboarding and Training Guides',
        body: 'Role-based guides that teach each user what they need.',
        service: 'strategy-consulting',
      },
      {
        title: 'Process Mapping',
        body: 'Workflows and approvals mapped and simplified.',
        service: 'strategy-consulting',
      },
      {
        title: 'Interface Visuals',
        body: 'Dashboards and app screens presented for sales and launch.',
        service: 'brand-visual-identity',
      },
    ],
    projects: ['fleet'],
  },
  {
    slug: 'food-hospitality',
    name: 'Food & Hospitality',
    lead: 'The food is the star. We make sure people know where to find it.',
    meta: {
      title: 'Branding and 3D for Food and Hospitality | Blackhat',
      description:
        'Restaurant identity, menus, explainer worlds in 3D and product visuals for food and hospitality brands.',
    },
    offerings: [
      {
        title: 'Restaurant Identity',
        body: 'Logo, menus and supergraphics that carry the story of the food.',
        service: 'brand-visual-identity',
      },
      {
        title: 'Menu and Print Design',
        body: 'Menus, posters and signage in one system.',
        service: 'brand-visual-identity',
      },
      {
        title: 'Explainer Worlds in 3D',
        body: 'Isometric towns and characters that show how a service works.',
        service: '3d-animation-motion-graphics',
      },
      {
        title: 'Equipment and Product Visuals',
        body: 'Commercial kitchen products shown in detail.',
        service: '3d-animation-motion-graphics',
      },
      {
        title: 'Brochures and Sales Material',
        body: 'Brochures and ads for B2B buyers.',
        service: 'brand-visual-identity',
      },
    ],
    projects: ['niri', 'cooklane', 'innovair'],
  },
  {
    slug: 'consumer-lifestyle',
    name: 'Consumer & Lifestyle',
    lead: 'You get three seconds on the shelf. We make them count.',
    meta: {
      title: 'Branding and Packaging for Consumer Brands | Blackhat',
      description:
        'Consumer brand identity, packaging, limited editions and social media systems for lifestyle brands.',
    },
    offerings: [
      {
        title: 'Consumer Brand Identity',
        body: 'Logo, colour, type and imagery for brands people pick off a shelf.',
        service: 'brand-visual-identity',
      },
      {
        title: 'Packaging and Label Design',
        body: 'Cans, boxes and labels with illustration that earns a second look.',
        service: 'brand-visual-identity',
      },
      {
        title: 'Limited Editions and Seasonal Campaigns',
        body: 'Packaging and campaigns for a moment in the calendar.',
        service: 'brand-visual-identity',
      },
      {
        title: 'Social Media Systems',
        body: 'Templates and content that keep every post on brand.',
        service: 'brand-visual-identity',
      },
    ],
    projects: ['waves', 'vespa'],
  },
  {
    slug: 'education',
    name: 'Education',
    lead: 'Parents compare. Students scroll. We give them a reason to stop.',
    meta: {
      title: 'Branding for Education | Blackhat',
      description:
        'Brand identity, lettering, campaign graphics and social media templates for schools and learning providers.',
    },
    offerings: [
      {
        title: 'Education Brand Identity',
        body: 'Warm, recognisable identities for schools and learning providers.',
        service: 'brand-visual-identity',
      },
      {
        title: 'Lettering and Campaign Graphics',
        body: 'Hand-drawn lettering and campaign artwork.',
        service: 'brand-visual-identity',
      },
      {
        title: 'Social Media Templates',
        body: 'Posts parents and students recognise at a glance.',
        service: 'brand-visual-identity',
      },
    ],
    projects: ['studyzone'],
  },
  {
    slug: 'gaming-entertainment',
    name: 'Gaming & Entertainment',
    lead: 'Worlds, vehicles and characters, built to be stared at.',
    meta: {
      title: '3D for Gaming and Entertainment | Blackhat',
      description: 'Photoreal vehicles, props, characters and environments in 3D for games.',
    },
    offerings: [
      {
        title: 'Vehicles and Props',
        body: 'Photoreal vehicles and props modelled, textured and lit.',
        service: '3d-animation-motion-graphics',
      },
      {
        title: 'Characters',
        body: 'Characters built for games and cinematics.',
        service: '3d-animation-motion-graphics',
      },
      {
        title: 'Environments',
        body: 'Hangars, worlds and sets in 3D.',
        service: '3d-animation-motion-graphics',
      },
    ],
    projects: ['game-renders'],
  },
  {
    slug: 'creative-professional',
    name: 'Creative & Professional Services',
    lead: 'You judge design for a living. So do your clients.',
    meta: {
      title: 'Branding for Creative and Professional Services | Blackhat',
      description:
        'Studio identity, stationery, merchandise and environmental graphics for studios and firms.',
    },
    offerings: [
      {
        title: 'Studio Identity',
        body: 'Logo and pattern systems for studios and firms.',
        service: 'brand-visual-identity',
      },
      {
        title: 'Stationery and Merchandise',
        body: 'Cards, badges, totes and apparel in one system.',
        service: 'brand-visual-identity',
      },
      {
        title: 'Environmental Graphics',
        body: 'Wall and glass graphics for the studio itself.',
        service: 'brand-visual-identity',
      },
    ],
    projects: ['tcdc'],
  },
]

export const industryHref = (slug: string) => `/industries/${slug}`
