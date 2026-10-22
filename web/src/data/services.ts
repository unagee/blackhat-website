import ckOnboarding from '@/assets/work/cloudkitchens-safety/global-safety-awareness-campaign-onboarding-training.png'
import cooklaneOwner from '@/assets/work/cooklane/cooklane-3d-character-business-owner.png'
import hyperloopJourney from '@/assets/work/hyperloop/hyperloop-tt-customer-journey-design-diagram-2.png'
import hyperloopContext from '@/assets/work/hyperloop/hyperloop-tt-customer-journey-design-diagram-3.png'
import hyperloopRender from '@/assets/work/hyperloop/hyperloop-tt-realistic-render-of-highway.jpg'
import innovairProduct from '@/assets/work/innovair/innovair-product-visualization.png'
import myjDataCenter from '@/assets/work/myj/myj-office-design-3d-data-center.jpg'
import myjCeo from '@/assets/work/myj/myj-office-design-3d-render-ceo-office.jpg'
import niriAdvertising from '@/assets/work/niri/niri-luxury-restaurant-advertising-mockup.jpg'
import niriConcept from '@/assets/work/niri/niri-luxury-restaurant-logo-concept.png'
import tcdcLogo from '@/assets/work/tcdc/tcdc-creative-agency-logo-design.jpg'
import vespaPackaging from '@/assets/work/vespa/vespa-tet-nguyen-dan-packaging-design-rectangular.png'
import type { ServiceSlug } from '@/data/projects'
import type { Link, PageMeta, Picture } from '@/types'

export type Service = {
  slug: ServiceSlug
  name: string
  meta: PageMeta
  hero: { lead: string; image: Picture }
  // One-line summary used on the What we do overview.
  summary: string
  intro: { title: string; body: string[] }
  offerings: { title: string; items: { title: string; body: string; image: Picture }[] }
  // `motion` picks the animated diagram set in components/services/MotionScene.astro.
  process: {
    title: string
    motion: 'brand' | 'animation' | 'strategy'
    steps: { title: string; body: string }[]
  }
  prompt: { title: string; body: string; link: Link }
  work: { title: string }
  faq: { title: string; items: { question: string; answer: string }[] }
}

const startProject: Link = { label: 'Start a Project', href: '/contact' }

export const services: Service[] = [
  {
    slug: 'brand-visual-identity',
    name: 'Brand & Visual Identity',
    meta: {
      title: 'Brand & Visual Identity Agency in Singapore | Blackhat',
      description:
        'Logo design, brand identity and visual storytelling for finance, healthcare and luxury brands. Branding work for NIRI, TCDC, Studyzone and Innovair.',
    },
    hero: {
      lead: 'We turn your values and goals into a brand people recognise, remember and trust.',
      image: {
        src: niriAdvertising,
        alt: 'NIRI restaurant posters on a street billboard, part of the identity Blackhat designed',
      },
    },
    summary: 'Logos, colour, tone of voice and graphics that carry your story to every touchpoint.',
    intro: {
      title: 'Your story, built into every part of the brand',
      body: [
        'We start with what you stand for: your vision, your mission, the back story and the idea that sets you apart. Then we turn it into a logo, a colour palette, a tone of voice and a set of graphics designed to work together.',
        'The result is an identity your team can use everywhere, from menus and signage to social posts, packaging and pitch decks.',
      ],
    },
    offerings: {
      title: 'What we can help with',
      items: [
        {
          title: 'Brand Image & Identity',
          body: 'Logos, colour palettes, typography and tone of voice, built into a system your team can use with confidence.',
          image: { src: tcdcLogo, alt: 'TCDC logo on a dark wall in a design studio' },
        },
        {
          title: 'Visual Storytelling',
          body: 'Illustrations, supergraphics and campaign visuals that show where your brand comes from and what it stands for.',
          image: {
            src: niriConcept,
            alt: 'NIRI logo concept with line illustrations of breakfast, a rubber tree plantation and coffee beans',
          },
        },
        {
          title: 'Experience Design',
          body: 'Menus, packaging, signage, merchandise and social templates that bring the identity into the real world.',
          image: { src: vespaPackaging, alt: 'Vespa Tết limited-edition gift box packaging' },
        },
      ],
    },
    process: {
      title: 'How we work',
      motion: 'brand',
      steps: [
        {
          title: 'Discover',
          body: 'Vision, mission, back story and idea. We dig into what makes you different before we draw anything.',
        },
        {
          title: 'Design',
          body: 'Logo, colour, tone of voice and graphics, developed together so each piece supports the others.',
        },
        {
          title: 'Deliver',
          body: 'A finished brand identity, applied to the places your customers meet you.',
        },
      ],
    },
    prompt: {
      title: 'Thinking about a new brand or a refresh?',
      body: 'Tell us where you are today and where you want to be. We’ll show you how we’d get there.',
      link: startProject,
    },
    work: { title: 'Branding work' },
    faq: {
      title: 'Questions we often hear',
      items: [
        {
          question: 'What does a brand identity project include?',
          answer:
            'Usually a logo, colour palette, typography, tone of voice and a set of graphics, plus the applications you need most, such as menus, packaging, social templates, stationery or signage.',
        },
        {
          question: 'Which industries do you work with?',
          answer:
            'Mostly financial institutions, healthcare innovators and luxury brands. We have also built identities for a restaurant, an education provider, a design studio and a kitchen equipment company.',
        },
        {
          question: 'Can branding be combined with 3D or strategy work?',
          answer:
            'Yes. For Innovair we designed the brand and produced the 3D product visuals for its brochure and product pages, so everything looks like it comes from one place.',
        },
      ],
    },
  },
  {
    slug: '3d-animation-motion-graphics',
    name: '3D Animation & Motion Graphics',
    meta: {
      title: '3D Animation & Motion Graphics Studio Singapore | Blackhat',
      description:
        'Photoreal 3D renders, product visualisation, character design and animation for finance, healthcare and luxury brands, from a Singapore studio.',
    },
    hero: {
      lead: 'We show people what doesn’t exist yet: products, spaces, characters and whole worlds, in photoreal 3D and motion.',
      image: {
        src: myjDataCenter,
        alt: '3D render of a secure server room designed for the investment firm MYJ',
      },
    },
    summary:
      'Product visualisation, story-driven animation and cinematic walk-throughs that show what words and photos can’t.',
    intro: {
      title: 'When a photo can’t do the job, we build it in 3D',
      body: [
        'Products still in development, offices still being designed, characters that need a personality. We model, light and animate them so your audience can see exactly what you mean.',
        'We also produce custom motion graphics and video for your channels, and can manage and schedule that content for you.',
      ],
    },
    offerings: {
      title: 'What we can help with',
      items: [
        {
          title: 'Product Visualisation & Visual Effects',
          body: 'Accurate, detailed renders that show how a product looks and works, inside and out.',
          image: {
            src: innovairProduct,
            alt: 'Axonometric 3D render of an Innovair recirculating device with each filter labelled',
          },
        },
        {
          title: 'Story-Driven Animation',
          body: 'Characters and worlds built to carry a story, like the Cooklane town we made to explain cloud retail.',
          image: { src: cooklaneOwner, alt: '3D character of a Cooklane restaurant owner' },
        },
        {
          title: 'Cinematic Walk-Throughs',
          body: 'Photoreal interiors and architecture that let people walk through a space while it’s still being designed.',
          image: { src: myjCeo, alt: '3D render of the CEO’s office designed for MYJ' },
        },
      ],
    },
    process: {
      title: 'How we work',
      motion: 'animation',
      steps: [
        {
          title: 'Storyboard',
          body: 'We plan every scene and shot, so you see the story before we build it.',
        },
        {
          title: 'Characters & Worlds',
          body: 'We design and model the characters, products and environments the story needs.',
        },
        {
          title: 'Animation & Video',
          body: 'We light, animate and render the final pieces, ready for your channels.',
        },
      ],
    },
    prompt: {
      title: 'Got something people need to see?',
      body: 'A product launch, a new space, a story that needs characters. Tell us what you want people to see and we’ll show you how we’d build it.',
      link: startProject,
    },
    work: { title: '3D and motion work' },
    faq: {
      title: 'Questions we often hear',
      items: [
        {
          question: 'What kinds of 3D work do you do?',
          answer:
            'Product visualisation, architectural and interior renders, character design, isometric worlds and animation. Recent work includes products and a showroom for an energy technology company, office interiors for an investment firm, a 3D town for a cloud retail platform, and photoreal vehicles and characters for games.',
        },
        {
          question: 'Can you produce motion graphics and video for social media?',
          answer:
            'Yes. We make custom motion graphics, animation and video, and can manage and schedule that content for you.',
        },
        {
          question: 'Can 3D be part of a bigger brand or strategy project?',
          answer:
            'Often. Our Hyperloop TT work paired customer journey design with 3D renders of the system, and Innovair’s brand launched with 3D product visuals.',
        },
      ],
    },
  },
  {
    slug: 'strategy-consulting',
    name: 'Strategy & Consulting',
    meta: {
      title: 'Strategy & Consulting Agency in Singapore | Blackhat',
      description:
        'Customer journey mapping, business strategy and training decks that make complex processes easy to follow. Work for Cloudkitchens and Hyperloop TT.',
    },
    hero: {
      lead: 'We take complicated businesses, processes and ideas and turn them into something people understand and act on.',
      image: {
        src: hyperloopRender,
        alt: '3D cutaway render of the Hyperloop TT tube and passenger pods on an elevated pylon',
      },
    },
    summary:
      'Customer journeys, business strategy and interactive training decks that turn a complicated business into a plan your teams can follow.',
    intro: {
      title: 'We make complicated things easy to follow',
      body: [
        'We start by finding where people get lost: in a customer journey, an approval process or a business model. Then we simplify it, design the materials that explain it and help train the teams who use it.',
        'For Cloudkitchens that meant a global safety campaign for kitchen teams. For Hyperloop TT, it meant mapping a rider’s journey through a system that doesn’t exist yet.',
      ],
    },
    offerings: {
      title: 'What we can help with',
      items: [
        {
          title: 'Customer Journey',
          body: 'Step-by-step maps of how customers and staff move through your service, and where it can work better.',
          image: {
            src: hyperloopJourney,
            alt: 'Hyperloop TT customer journey diagram for commuters and tourists, from departure to arrival',
          },
        },
        {
          title: 'Business Strategy',
          body: 'Playbooks and frameworks that break complex processes and systems into simple steps people can follow.',
          image: {
            src: hyperloopContext,
            alt: 'Hyperloop TT diagram showing the system sections in their urban context',
          },
        },
        {
          title: 'Interactive Training Decks',
          body: 'Onboarding and training materials, with characters and templates teams can adapt to local rules.',
          image: {
            src: ckOnboarding,
            alt: 'Cloudkitchens onboarding training slide with a smiling sun character',
          },
        },
      ],
    },
    process: {
      title: 'How we work',
      motion: 'strategy',
      steps: [
        {
          title: 'Identify & Diagnose',
          body: 'We map the problem and find where people, processes or messages break down.',
        },
        {
          title: 'Simplify & Execute',
          body: 'We redesign the process and create the materials that explain it.',
        },
        {
          title: 'Consolidate & Train',
          body: 'We bring it together in playbooks and training, so the change sticks.',
        },
      ],
    },
    prompt: {
      title: 'Have a process people keep getting lost in?',
      body: 'Tell us where things get stuck. We’ll show you how we’d simplify it.',
      link: startProject,
    },
    work: { title: 'Strategy work' },
    faq: {
      title: 'Questions we often hear',
      items: [
        {
          question: 'What does a strategy project produce?',
          answer:
            'Things people can use: customer journey maps, playbooks, process diagrams, training decks and campaign materials, designed to be easy to follow.',
        },
        {
          question: 'Do you work on projects outside Singapore?',
          answer:
            'Yes. Our strategy work includes a global safety awareness campaign for Cloudkitchens and customer journey design for Hyperloop TT in Dubai.',
        },
        {
          question: 'Can you design the training as well as the strategy?',
          answer:
            'Yes. For Cloudkitchens we created the characters, onboarding templates, escalation flows and emergency posters for a global safety awareness campaign.',
        },
      ],
    },
  },
]

export const serviceHref = (slug: ServiceSlug) => `/what-we-do/${slug}`

// Shared labels for service pages and the overview.
export const servicePage = {
  eyebrow: 'What we do',
  breadcrumbLabel: 'Breadcrumb',
  offeringsEyebrow: 'Services',
  processEyebrow: 'Process',
  workEyebrow: 'Selected work',
  faqEyebrow: 'FAQ',
  relatedEyebrow: 'Explore',
  relatedTitle: 'Our other services',
  allWork: { label: 'See All Work', href: '/work' } satisfies Link,
}

// The What we do overview page.
export const whatWeDo = {
  meta: {
    title: 'Branding, 3D Animation & Strategy Services | Blackhat',
    description:
      'Brand identity, 3D animation and motion graphics, and strategy consulting from a Singapore creative agency for finance, healthcare and luxury brands.',
  },
  eyebrow: 'What we do',
  title: 'Brand, 3D and strategy under one roof',
  lead: 'Most of our projects use more than one discipline. Pick a starting point, or tell us the problem and we’ll suggest the mix.',
  listTitle: 'Our services',
  linkLabel: 'Explore',
}

// "Brand & Visual Identity · 3D Animation & Motion Graphics" for project cards.
export const serviceNames = (slugs: ServiceSlug[]) =>
  slugs.map((slug) => services.find((service) => service.slug === slug)?.name ?? '').join(' · ')

// Engagement models on the What we do overview: Plan, Design, Execute.
export const engagement = {
  eyebrow: 'How we engage',
  title: 'Three ways to work with us',
  lead: 'Start where you are. Some clients need the thinking, some need the design, and some need a team to keep the brand running. Many start with one and grow into the next.',
  items: [
    {
      id: 'plan',
      name: 'Plan',
      kicker: 'Vision to concept',
      body: 'Everything conceptual. We translate your vision into a concept you can build on: positioning, brand story and creative direction.',
      cta: 'Start with a Plan',
    },
    {
      id: 'design',
      name: 'Design',
      kicker: 'Brand and full deck design',
      body: 'We design the brand deck and every deck around it: identity, guidelines, and pitch and presentation decks, ready to use.',
      cta: 'Start with Design',
    },
    {
      id: 'execute',
      name: 'Execute',
      kicker: 'Brand deck execution',
      body: 'The ongoing part. We maintain your brand deck, produce new assets and manage your social media, month after month.',
      cta: 'Talk About Ongoing Support',
    },
  ],
}

// The enquiry form on the What we do overview. Sending opens the visitor's email app.
export const enquiry = {
  eyebrow: 'Contact',
  title: 'Let’s talk about your project',
  fields: {
    name: 'Name',
    organisation: 'Organisation',
    email: 'Email',
    engagement: 'What do you need?',
    message: 'How can we help?',
    messageHint: 'Tell us about your project, your challenge or what you want to achieve.',
  },
  notSure: 'Not sure yet',
  required: '(required)',
  submit: 'Send',
  note: 'Sending opens your email app with your message ready to go.',
  subject: 'New project enquiry',
}
