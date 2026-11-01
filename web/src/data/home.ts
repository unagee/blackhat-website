import fleetDiagram from '@/assets/home/discipline-fleet-diagram.jpg'
import myjAnimation from '@/assets/home/discipline-myj-animation.jpg'
import wavesGrid from '@/assets/home/discipline-waves.jpg'
import wavesFeatured from '@/assets/home/featured-waves.jpg'
import reelPoster from '@/assets/home/reel-poster.jpg'
import workEnergend from '@/assets/home/work-energend.jpg'
import workMyj from '@/assets/home/work-myj.jpg'
import workSuricate from '@/assets/home/work-suricate.jpg'
import citi from '@/assets/logos/partners/citi-logo.png'
import ea from '@/assets/logos/partners/ea-logo.png'
import ikea from '@/assets/logos/partners/ikea-logo.png'
import niri from '@/assets/logos/partners/niri-logo.png'
import tcdc from '@/assets/logos/partners/tcdc-logo.png'
import twh from '@/assets/logos/partners/twh-logo.png'
import vespa from '@/assets/logos/partners/vespa-logo.png'
import cooklaneWorld from '@/assets/work/cooklane/cooklane-3d-world-mono.jpg'
import energendShowroom from '@/assets/work/energend/energend-showroom-interior-dome.jpg'
import { site } from '@/data/site'
import type { HeroMedia, Link } from '@/types'

const [branding, animation, strategy] = site.services

// Hero background: the Blackhat reel, in web/public/video/. H.264 MP4 first, VP9 WebM as a
// fallback, each in a smaller cut for phones (the supplied file was HEVC, which Chrome and
// Firefox can't play). The poster shows before it loads and for reduced motion.
const phone = '(max-width: 767px)'
const heroMedia: HeroMedia = {
  type: 'video',
  sources: [
    { src: '/video/blackhat-reel-960.mp4', type: 'video/mp4', media: phone },
    { src: '/video/blackhat-reel-960.webm', type: 'video/webm', media: phone },
    { src: '/video/blackhat-reel.mp4', type: 'video/mp4' },
    { src: '/video/blackhat-reel.webm', type: 'video/webm' },
  ],
  poster: {
    src: reelPoster,
    alt: 'Energend satellite with orange solar panels above the lights of Earth at night, rendered by Blackhat',
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
    title: 'We turn complex ideas into *brands* people trust.',
    primary: { label: 'Start a Project', href: '/contact' } satisfies Link,
    secondary: { label: 'See Our Work', href: '/work' } satisfies Link,
    // Widened so the hero handles both the still and the reel.
    media: heroMedia as HeroMedia,
  },

  services: {
    eyebrow: 'What we do',
    title: 'Designed to Own the Category',
    items: [
      {
        ...branding,
        body: 'We turn your values and goals into a logo, colours, a tone of voice and graphics that carry your story to every touchpoint.',
        image: {
          src: wavesGrid,
          alt: 'Waves social media grid: cocktail photography, cut-out people and bold headlines designed by Blackhat',
        },
      },
      {
        ...animation,
        body: 'Product visualisation, story-driven animation and cinematic walk-throughs that show what words and photos can’t.',
        image: {
          src: myjAnimation,
          alt: 'Frame from Blackhat’s 3D animation for MYJ: a circular platform split into stocks, bonds, currency, real estate and ETFs',
        },
      },
      {
        ...strategy,
        body: 'Customer journeys, business strategy and interactive training decks that turn a complicated business into a plan your teams can follow.',
        image: {
          src: fleetDiagram,
          alt: 'Diagram from Blackhat’s Fleet onboarding deck showing how Super Admins, Admins, Managers and Technicians relate',
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

  // Featured projects, shown one at a time with previous and next buttons.
  featured: {
    eyebrow: 'Featured work',
    label: 'Featured projects',
    previous: 'Previous Project',
    next: 'Next Project',
    // "{current}" and "{total}" are replaced, e.g. "1 of 2".
    position: '{current} of {total}',
    items: [
      {
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
      {
        client: 'Waves',
        title: 'A canned cocktail brand built for the morning after',
        body: 'We gave Waves a hand-drawn logo, a teal, vanilla and lime palette, cut-out people and cocktails, and a warm photography direction, carried across social media and a range of cans.',
        tags: ['Brand & Visual Identity'],
        link: { label: 'See the Project', href: '/work/waves' } satisfies Link,
        image: {
          src: wavesFeatured,
          alt: 'Waves brand collage: cut-out cocktails, a woman sipping a martini, Negroni and Martini cans and the Waves logo',
        },
      },
    ],
  },

  // The Selected work grid. Images here are for the homepage only; the Work page keeps each
  // project's own card image.
  work: {
    eyebrow: 'Selected work',
    title: 'Recent projects across brand, 3D and strategy',
    allLink: { label: 'See All Work', href: '/work' } satisfies Link,
    projects: [
      {
        slug: 'suricate-capital',
        image: {
          src: workSuricate,
          alt: 'Suricate Capital billboard: “Invest right, for what matters most.” beside a woman at breakfast',
        },
      },
      {
        slug: 'myj',
        image: {
          src: workMyj,
          alt: 'MYJ brand guide applications: business card, app icon, event screen, ID card and website',
        },
      },
      {
        slug: 'energend',
        image: {
          src: workEnergend,
          alt: 'Energend satellite with orange solar panels above the lights of Earth at night',
        },
      },
    ],
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
