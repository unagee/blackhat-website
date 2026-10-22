import citi from '@/assets/logos/partners/citi-logo.png'
import ea from '@/assets/logos/partners/ea-logo.png'
import ikea from '@/assets/logos/partners/ikea-logo.png'
import niri from '@/assets/logos/partners/niri-logo.png'
import tcdc from '@/assets/logos/partners/tcdc-logo.png'
import twh from '@/assets/logos/partners/twh-logo.png'
import vespa from '@/assets/logos/partners/vespa-logo.png'
import cooklaneWorld from '@/assets/work/cooklane/cooklane-3d-world-mono.jpg'
import energendShowroom from '@/assets/work/energend/energend-showroom-interior-dome.jpg'
import warJets from '@/assets/work/game-3d/3d-realistic-render-war-jets.jpg'
import hyperloopRender from '@/assets/work/hyperloop/hyperloop-tt-realistic-render-of-highway.jpg'
import myjLobby from '@/assets/work/myj/myj-office-design-3d-lobby.jpg'
import niriSupergraphic from '@/assets/work/niri/niri-luxury-restaurant-supergraphic.png'
import { site } from '@/data/site'
import type { HeroMedia, Link } from '@/types'

const [branding, animation, strategy] = site.services

// Hero background. To switch to the reel, upload it to web/public/video/ and use:
// { type: 'video', src: '/video/reel.mp4', poster: { src: myjLobby, alt: '…' } }
const heroMedia: HeroMedia = {
  type: 'image',
  image: {
    src: myjLobby,
    alt: '3D render of an investment firm’s office lobby with a stone reception desk, created by Blackhat for MYJ',
  },
}

// Home page copy and images, top to bottom.
export const home = {
  meta: {
    title: 'Branding, 3D & Strategy Agency in Singapore | Blackhat',
    description:
      'Blackhat is a Singapore creative agency for finance, healthcare and luxury brands. We turn complex ideas into brand identities, 3D animation and strategy.',
  },

  hero: {
    eyebrow: 'Strategy-driven creative agency, Singapore',
    title: 'We turn complex ideas into *brands* people trust.',
    lead: 'Brand identity, 3D animation and strategy for financial institutions, healthcare innovators and luxury brands. Based in Singapore, working worldwide.',
    primary: { label: 'Start a Project', href: '/contact' } satisfies Link,
    secondary: { label: 'See Our Work', href: '/work' } satisfies Link,
    // Widened so the hero handles both the still and the reel.
    media: heroMedia as HeroMedia,
  },

  services: {
    eyebrow: 'What we do',
    title: 'Disciplines we do very well',
    items: [
      {
        ...branding,
        body: 'We turn your values and goals into a logo, colours, a tone of voice and graphics that carry your story to every touchpoint.',
        image: {
          src: niriSupergraphic,
          alt: 'NIRI restaurant supergraphic pattern and logo designed by Blackhat',
        },
      },
      {
        ...animation,
        body: 'Product visualisation, story-driven animation and cinematic walk-throughs that show what words and photos can’t.',
        image: {
          src: warJets,
          alt: 'Photoreal 3D render of a futuristic gunship aircraft on a landing pad, modelled by Blackhat',
        },
      },
      {
        ...strategy,
        body: 'Customer journeys, business strategy and interactive training decks that turn a complicated business into a plan your teams can follow.',
        image: {
          src: hyperloopRender,
          alt: '3D cutaway render of the Hyperloop TT tube and passenger pods, built by Blackhat',
        },
      },
    ],
  },

  clients: {
    title: 'Brands we’ve worked with',
    logos: [
      { src: ikea, alt: 'IKEA' },
      { src: ea, alt: 'Electronic Arts' },
      { src: citi, alt: 'Citi' },
      { src: twh, alt: 'The Warehouse Hotel' },
      { src: niri, alt: 'NIRI' },
      { src: tcdc, alt: 'TCDC, The Castleworks Design Collective' },
      { src: vespa, alt: 'Vespa' },
    ],
  },

  prompt: {
    title: 'What do you need people to understand?',
    body: 'A new brand, a product nobody has seen yet, a process that loses people halfway. Tell us the problem and we’ll show you how we’d solve it.',
    link: { label: 'Reach Out', href: '/contact' } satisfies Link,
  },

  featured: {
    eyebrow: 'Featured work',
    client: 'Energend',
    title: 'Building an energy brand, from the particle to the showroom',
    body: 'We created Energend’s positioning, story and identity, then rendered its products, showroom and factory in 3D, so investors, partners and customers can see technology that’s hard to picture.',
    tags: ['Brand & Visual Identity', '3D Animation'],
    link: { label: 'See the Project', href: '/work/energend' } satisfies Link,
    image: {
      src: energendShowroom,
      alt: '3D render of the Energend showroom, with a curved screen showing a satellite above Earth',
    },
  },

  // Projects shown in the Selected work grid, by their slug in data/projects.ts.
  work: {
    eyebrow: 'Selected work',
    title: 'Work that does the explaining',
    allLink: { label: 'See All Work', href: '/work' } satisfies Link,
    projects: ['suricate-capital', 'myj', 'niri'],
  },

  industries: {
    eyebrow: 'Who we work with',
    statement:
      'We work in sectors where every visual has to earn *trust*: finance, healthcare and luxury.',
    items: [
      {
        title: 'Financial Institutions',
        body: 'Products, processes and spaces explained simply, without losing credibility.',
      },
      {
        title: 'Healthcare Innovators',
        body: 'Approvals, safety and science turned into material people understand and act on.',
      },
      {
        title: 'Luxury Brands',
        body: 'Identities and packaging with the craft your customers expect.',
      },
    ],
  },

  showcase: {
    image: {
      src: cooklaneWorld,
      alt: 'Isometric 3D city in white and grey, with the Cooklane store and a delivery truck on the streets',
    },
    caption: 'Cooklane: an isometric 3D world built to explain cloud retail at a glance.',
  },
}
