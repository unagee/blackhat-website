import citi from '@/assets/logos/partners/citi-logo.png'
import ea from '@/assets/logos/partners/ea-logo.png'
import ikea from '@/assets/logos/partners/ikea-logo.png'
import niri from '@/assets/logos/partners/niri-logo.png'
import tcdc from '@/assets/logos/partners/tcdc-logo.png'
import twh from '@/assets/logos/partners/twh-logo.png'
import vespa from '@/assets/logos/partners/vespa-logo.png'
import ckPermitting from '@/assets/work/cloudkitchens-permitting/jurisdictional-approval-playbook.png'
import ckSafety from '@/assets/work/cloudkitchens-safety/how-to-use-fire-extinguisher.jpg'
import cooklaneWorld from '@/assets/work/cooklane/cooklane-3d-world-building.jpg'
import warJets from '@/assets/work/game-3d/3d-realistic-render-war-jets.jpg'
import hyperloopRender from '@/assets/work/hyperloop/hyperloop-tt-realistic-render-of-highway.jpg'
import myjLobby from '@/assets/work/myj/myj-office-design-3d-lobby.jpg'
import myjEntrance from '@/assets/work/myj/myj-office-design-render-entrance.jpg'
import niriLogo from '@/assets/work/niri/niri-luxury-restaurant-logo-design.png'
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
    title: 'We turn complex ideas into brands people trust.',
    lead: 'Brand identity, 3D animation and strategy for financial institutions, healthcare innovators and luxury brands. Based in Singapore, working worldwide.',
    primary: { label: 'Start a project', href: '/contact' } satisfies Link,
    secondary: { label: 'See our work', href: '/work' } satisfies Link,
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
          src: ckPermitting,
          alt: 'Jurisdictional approval playbook diagram Blackhat designed for Cloudkitchens',
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
    link: { label: 'Reach out', href: '/contact' } satisfies Link,
  },

  featured: {
    eyebrow: 'Featured work',
    client: 'Hyperloop TT, Dubai',
    title: 'Designing the hyperloop journey before the first passenger boards',
    body: 'We mapped the rider journey from departure to arrival for daily commuters and tourists, then built the tube, pods and city context in 3D so stakeholders could see how the system would work.',
    tags: ['Strategy & Consulting', '3D Animation'],
    link: { label: 'See the project', href: '/work/hyperloop-tt' } satisfies Link,
    image: {
      src: hyperloopRender,
      alt: '3D cutaway render of the Hyperloop TT tube and passenger pods on an elevated pylon',
    },
  },

  work: {
    eyebrow: 'Selected work',
    title: 'Work that does the explaining',
    allLink: { label: 'See all work', href: '/work' } satisfies Link,
    items: [
      {
        client: 'NIRI',
        service: 'Brand & Visual Identity',
        summary: 'A fine-dining identity, from logo and supergraphics to menus and social.',
        href: '/work/niri',
        image: { src: niriLogo, alt: 'NIRI logo over a 3D render of the restaurant’s dining room' },
      },
      {
        client: 'MYJ',
        service: '3D Animation & Motion Graphics',
        summary:
          'Photoreal renders of an investment firm’s new offices, from entrance to CEO suite.',
        href: '/work/myj',
        image: { src: myjEntrance, alt: '3D render of the MYJ office entrance facade at dusk' },
      },
      {
        client: 'Cloudkitchens',
        service: 'Strategy & Consulting',
        summary:
          'A global safety awareness campaign, with characters and posters kitchen teams remember.',
        href: '/work/cloudkitchens-safety',
        image: {
          src: ckSafety,
          alt: 'Cloudkitchens safety poster showing how to use a fire extinguisher, step by step',
        },
      },
    ],
  },

  industries: {
    eyebrow: 'Who we work with',
    statement:
      'We work in sectors where every visual has to earn trust: finance, healthcare and luxury.',
    items: [
      {
        title: 'Financial institutions',
        body: 'Products, processes and spaces explained simply, without losing credibility.',
      },
      {
        title: 'Healthcare innovators',
        body: 'Approvals, safety and science turned into material people understand and act on.',
      },
      {
        title: 'Luxury brands',
        body: 'Identities and packaging with the craft your customers expect.',
      },
    ],
  },

  showcase: {
    image: {
      src: cooklaneWorld,
      alt: 'Isometric 3D city with a restaurant, streets and moving vehicles, built by Blackhat for Cooklane',
    },
    caption: 'Cooklane: an isometric 3D world built to explain cloud retail at a glance.',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Tell us what you’re working on.',
    body: 'A rough brief, a half-finished deck, a hunch. Send whatever you have and we’ll come back with how we’d approach it.',
    emailLabel: 'Email us',
    emailSubject: 'New project enquiry',
    emailBody:
      'Name:\nCompany:\nWhich services are you interested in?\nTell us about your project:\n',
  },
}
