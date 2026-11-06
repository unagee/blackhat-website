import posterEnergend from '@/assets/home/poster-featured-energend.jpg'
import posterWaves from '@/assets/home/poster-featured-waves.jpg'
import myjPoster from '@/assets/industries/myj-poster.jpg'
import fleetPoster from '@/assets/work/fleet/fleet-film-poster.jpg'
import type { PageMeta, Picture } from '@/types'
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
  // One plain paragraph under the hero line: what we do for this industry, in searchable words.
  intro: string
  // The problem we solve here: a short heading and two paragraphs that name the real work.
  challenge: { title: string; body: string[] }
  // The big picture under the hero: a silent loop from our work, or a project's hero image.
  media: IndustryMedia
  // Questions people ask about this industry (also published as FAQ structured data).
  faq: { question: string; answer: string }[]
}

export type IndustryMedia =
  // shape: 'wide' fills the column; 'square' sits beside a caption.
  // slug: the project it comes from, linked under the caption.
  | {
      type: 'video'
      slug: string
      src: string
      poster: Picture
      shape: 'wide' | 'square'
      caption: string
    }
  | { type: 'project'; slug: string; caption: string }

// The Industries menu (left column: industries; right column: the hovered industry's offerings)
// and the pages at /industries/<slug>. Only industries we have real work to show for.
// Pages are indexed and in the sitemap while `ready` is true; set it to false to hide them.
export const industriesPage = {
  ready: true,
  eyebrow: 'Industries',
  title: 'Every Industry Has Its Own *Mess*',
  lead: 'Finance, energy, food, games. Different problems, same crew. Pick yours to see what we’ve done there.',
  meta: {
    title: 'Industries We Work With | Blackhat',
    description:
      'The industries Blackhat works with, from financial services and energy to food, consumer brands and gaming, with the work we’ve done in each.',
  } satisfies PageMeta,
  breadcrumbLabel: 'Breadcrumb',
  offeringsEyebrow: 'What We Do',
  offeringsTitle: 'Where We Come In',
  workEyebrow: 'Work',
  workTitle: 'Fingerprints All Over It',
  challengeEyebrow: 'The Problem',
  seeProject: 'See the Project',
  faqEyebrow: 'FAQ',
  faqTitle: 'Questions We Often Hear',
  otherTitle: 'Other Industries',
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
      title: 'Financial Services Branding and 3D Agency in Singapore | Blackhat',
      description:
        'Blackhat is a Singapore creative agency for financial services: brand identity, investor decks, 3D animation and social media for funds, investment platforms and holding groups.',
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
    intro:
      'Blackhat is a Singapore creative agency for financial services. We build brand identities, investor decks, 3D animation and social content for funds, investment platforms and holding groups.',
    challenge: {
      title: 'Credibility Is the Product',
      body: [
        'In finance, people judge the brand before they read the numbers. A dated logo or a muddled deck costs trust you then have to win back.',
        'We start with what the business stands for and carry it through every touchpoint: the identity, the pitch, the office and the feed. For MYJ, an investment group, we built one system across its entities. For Suricate Capital, a new investment platform, we built the brand from its first word.',
      ],
    },
    media: {
      type: 'video',
      slug: 'myj',
      src: '/video/industries/myj.mp4',
      poster: {
        src: myjPoster,
        alt: 'MYJ in motion: the 3D investment ring, market charts, the brand guide and the colour palette',
      },
      shape: 'square',
      caption: 'MYJ: brand, 3D and social media for an investment group.',
    },
    faq: [
      {
        question: 'What do you do for financial services companies?',
        answer:
          'Brand identity and sub-brand systems, investor and pitch decks, 3D animation of products and portfolios, photoreal visualisation of offices, and social media management.',
      },
      {
        question: 'Have you worked with investment firms?',
        answer:
          'Yes. We built the brand of Suricate Capital, an investment platform, and the identity, 3D and social media of MYJ, an investment group. Both are in our work.',
      },
      {
        question: 'Can you explain complex financial products visually?',
        answer:
          'Yes. We turn portfolios, markets and processes into 3D animation and diagrams that people can follow without a glossary.',
      },
    ],
  },
  {
    slug: 'energy-technology',
    name: 'Energy & Technology',
    lead: 'Your product is hard to picture. So we picture it.',
    meta: {
      title: 'Energy and Technology Branding and 3D Agency in Singapore | Blackhat',
      description:
        'Blackhat is a Singapore creative agency for energy and technology companies: positioning, brand identity and photoreal 3D of products, factories and systems that don’t exist yet.',
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
    intro:
      'Blackhat is a Singapore creative agency for energy and technology companies. We handle positioning, brand identity and photoreal 3D for products, facilities and systems that are still in the lab or on the drawing board.',
    challenge: {
      title: 'Investors Can’t Fund What They Can’t See',
      body: [
        'Deep tech sells on a story people can follow. When the product is a material, a battery or a transport system that doesn’t exist yet, words and diagrams only go so far.',
        'So we render it. For Energend we built the brand, then its products, showroom and factory in 3D. For Hyperloop TT we mapped the passenger journey and visualised the system before the first passenger boards.',
      ],
    },
    media: {
      type: 'video',
      slug: 'energend',
      src: '/video/home/featured-energend.mp4',
      poster: {
        src: posterEnergend,
        alt: 'Energend work in motion: the satellite, the electric car, the factory and the showroom, rendered in 3D by Blackhat',
      },
      shape: 'wide',
      caption:
        'Energend: positioning, identity and photoreal 3D for a nanotechnology energy company.',
    },
    faq: [
      {
        question: 'What do you do for energy and technology companies?',
        answer:
          'Positioning and brand identity, photoreal product renders, factory and showroom visualisation, concept visualisation and customer journey design.',
      },
      {
        question: 'Can you render a product that isn’t built yet?',
        answer:
          'Yes. Most of our 3D work shows things before they exist, from batteries and smart glasses to a hyperloop line.',
      },
      {
        question: 'Do you only do 3D?',
        answer:
          'No. We often start with positioning and identity, as with Energend, and use 3D to carry that brand into products and spaces.',
      },
    ],
  },
  {
    slug: 'software-operations',
    name: 'Software & Operations',
    lead: 'Great software, confusing to learn. We fix the confusing part.',
    meta: {
      title: 'Software Branding and Onboarding Design Agency in Singapore | Blackhat',
      description:
        'Blackhat is a Singapore creative agency for software and operations teams: product brand direction, role-based onboarding guides, process mapping and interface visuals.',
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
    intro:
      'Blackhat is a Singapore creative agency for software and operations teams. We create product brand direction, onboarding and training guides, process maps and interface visuals.',
    challenge: {
      title: 'Adoption Is a Design Problem',
      body: [
        'Teams rarely drop software for lack of features. They drop it because nobody showed them how it fits their day.',
        'For Fleet, an operations platform, we built a calm, data-first brand and an onboarding guide written for each role, from Super Admins to Technicians.',
      ],
    },
    media: {
      type: 'video',
      slug: 'fleet',
      src: '/video/industries/fleet.mp4',
      poster: { src: fleetPoster, alt: 'A technician clearing open issues in the Fleet app' },
      shape: 'wide',
      caption:
        'Fleet: brand direction and a role-based onboarding guide for an operations platform.',
    },
    faq: [
      {
        question: 'What do you do for software companies?',
        answer:
          'Product brand direction, onboarding and training guides, process mapping, and interface visuals for sales and launch.',
      },
      {
        question: 'Can you write training material for different user roles?',
        answer:
          'Yes. Fleet’s onboarding guide shows each role exactly what it can do, with annotated screens and role diagrams.',
      },
      {
        question: 'How does a software project start?',
        answer:
          'With your users. We map who uses the product and what each of them needs, then design the brand and the material around that.',
      },
    ],
  },
  {
    slug: 'food-hospitality',
    name: 'Food & Hospitality',
    lead: 'The food is the star. We make sure people know where to find it.',
    meta: {
      title: 'Restaurant and Hospitality Branding Agency in Singapore | Blackhat',
      description:
        'Blackhat is a Singapore creative agency for restaurants, food brands and hospitality suppliers: restaurant identity, menus and print, 3D explainer worlds and product visuals.',
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
    intro:
      'Blackhat is a Singapore creative agency for restaurants, food brands and hospitality suppliers. We design restaurant identities, menus and print, explainer worlds in 3D and product visuals.',
    challenge: {
      title: 'People Taste With Their Eyes First',
      body: [
        'Guests decide on the menu, the sign and the feed before they sit down. Suppliers are judged on the brochure before the first demo.',
        'For NIRI we built a fine-dining identity from the logo to the last menu page. For Cooklane we built a small 3D town that explains cloud retail, and for Innovair we created the brand, brochure and product visuals for commercial kitchen ventilation.',
      ],
    },
    media: {
      type: 'project',
      slug: 'niri',
      caption: 'NIRI: a fine-dining identity, from the logo to the last menu page.',
    },
    faq: [
      {
        question: 'What do you do for restaurants?',
        answer:
          'Restaurant identity, menus, posters and signage, supergraphics and social media, designed as one system.',
      },
      {
        question: 'Do you work with food and kitchen suppliers too?',
        answer:
          'Yes. For Innovair, a commercial kitchen ventilation company, we created the brand, a brochure and 3D product visuals.',
      },
      {
        question: 'Can you explain a food business visually?',
        answer:
          'Yes. For Cooklane we built an isometric 3D town and a cast of characters to explain how cloud retail works.',
      },
    ],
  },
  {
    slug: 'consumer-lifestyle',
    name: 'Consumer & Lifestyle',
    lead: 'You get three seconds on the shelf. We make them count.',
    meta: {
      title: 'Consumer Brand and Packaging Design Agency in Singapore | Blackhat',
      description:
        'Blackhat is a Singapore creative agency for consumer and lifestyle brands: brand identity, packaging and label design, limited editions and social media systems.',
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
    intro:
      'Blackhat is a Singapore creative agency for consumer and lifestyle brands. We create brand identities, packaging and labels, limited editions and social media systems.',
    challenge: {
      title: 'The Pack Is the Pitch',
      body: [
        'On a shelf or a feed, nobody reads the copy first. They see colour, shape and character, then decide.',
        'For Waves, a zero-alcohol cocktail brand, we built a hand-drawn logo, label art and a social system across a range of cans. For Vespa we designed limited-edition packaging concepts for Tết.',
      ],
    },
    media: {
      type: 'video',
      slug: 'waves',
      src: '/video/home/featured-waves.mp4',
      poster: {
        src: posterWaves,
        alt: 'Waves work in motion: the beach film, the cans, the labels and the investor deck',
      },
      shape: 'wide',
      caption: 'Waves: a bold, playful identity for a zero-alcohol cocktail brand.',
    },
    faq: [
      {
        question: 'What do you do for consumer brands?',
        answer:
          'Brand identity, packaging and label design, limited editions and seasonal campaigns, and social media templates.',
      },
      {
        question: 'Do you design packaging illustration?',
        answer:
          'Yes. Each Waves can carries its own illustrated label, built on one shared system.',
      },
      {
        question: 'Can you design a seasonal or limited edition?',
        answer:
          'Yes. For Vespa we created limited-edition packaging concepts celebrating Tết Nguyên Đán.',
      },
    ],
  },
  {
    slug: 'education',
    name: 'Education',
    lead: 'Parents compare. Students scroll. We give them a reason to stop.',
    meta: {
      title: 'Education Branding Agency in Singapore | Blackhat',
      description:
        'Blackhat is a Singapore creative agency for schools and learning providers: education brand identity, lettering and campaign graphics, and social media templates.',
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
    intro:
      'Blackhat is a Singapore creative agency for schools and learning providers. We design education brand identities, lettering and campaign graphics, and social media templates.',
    challenge: {
      title: 'Warm Beats Generic',
      body: [
        'Education brands tend to look alike: stock smiles and blue gradients. Parents and students notice the one that feels human.',
        'For Studyzone, a pre-university education provider, we built a warm, optimistic brand with hand-drawn lettering, carried into campaigns and social posts.',
      ],
    },
    media: {
      type: 'project',
      slug: 'studyzone',
      caption: 'Studyzone: a warm, optimistic brand for a pre-university education provider.',
    },
    faq: [
      {
        question: 'What do you do for education providers?',
        answer:
          'Brand identity, lettering and campaign graphics, and social media templates that parents and students recognise at a glance.',
      },
      {
        question: 'Have you worked with an education provider?',
        answer: 'Yes. We created the brand for Studyzone, a pre-university education provider.',
      },
      {
        question: 'Can our team keep social posts on brand themselves?',
        answer: 'Yes. We design templates your team can fill in, so every post stays on brand.',
      },
    ],
  },
  {
    slug: 'gaming-entertainment',
    name: 'Gaming & Entertainment',
    lead: 'Worlds, vehicles and characters, built to be stared at.',
    meta: {
      title: '3D Studio for Games and Entertainment in Singapore | Blackhat',
      description:
        'Blackhat is a Singapore 3D studio for games and entertainment: photoreal vehicles, props, characters and environments, modelled, textured and lit.',
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
    intro:
      'Blackhat is a Singapore 3D studio for games and entertainment. We model, texture and light photoreal vehicles, props, characters and environments.',
    challenge: {
      title: 'Close-Ups Don’t Forgive',
      body: [
        'In games, a model is seen from every angle and up close. Every panel line and scuff has to hold up.',
        'Our game renders include fighter jets, mechs and soldiers, modelled, textured and lit in photoreal detail.',
      ],
    },
    media: {
      type: 'project',
      slug: 'game-renders',
      caption: 'Game renders: photoreal vehicles, characters and environments.',
    },
    faq: [
      {
        question: 'What 3D work do you do for games?',
        answer:
          'Photoreal vehicles and props, characters and environments, modelled, textured and lit.',
      },
      {
        question: 'Do you create characters as well as vehicles?',
        answer: 'Yes. Our game work includes robots and soldiers as well as aircraft.',
      },
      {
        question: 'Do you also make animation?',
        answer: 'Yes. 3D animation and motion graphics is one of our three services.',
      },
    ],
  },
  {
    slug: 'creative-professional',
    name: 'Creative & Professional Services',
    lead: 'You judge design for a living. So do your clients.',
    meta: {
      title: 'Branding for Studios and Professional Firms in Singapore | Blackhat',
      description:
        'Blackhat is a Singapore creative agency for studios and professional firms: studio identity, stationery and merchandise, and environmental graphics.',
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
    intro:
      'Blackhat is a Singapore creative agency for studios and professional firms. We design studio identities, stationery and merchandise, and environmental graphics.',
    challenge: {
      title: 'Even Designers Need Designers',
      body: [
        'Creative and professional firms spend their days on other people’s brands. Their own often gets whatever time is left.',
        'For The Castleworks Design Collective we built an identity that works on cards, totes and apparel, and on the studio walls themselves.',
      ],
    },
    media: {
      type: 'project',
      slug: 'tcdc',
      caption: 'TCDC: an identity for a design collective, worn and worked in.',
    },
    faq: [
      {
        question: 'What do you do for studios and firms?',
        answer:
          'Studio identity, logo and pattern systems, stationery and merchandise, and wall and glass graphics.',
      },
      {
        question: 'Can you brand our physical space?',
        answer: 'Yes. For TCDC we applied the identity to the studio’s walls and glass.',
      },
    ],
  },
]

export const industryHref = (slug: string) => `/industries/${slug}`
