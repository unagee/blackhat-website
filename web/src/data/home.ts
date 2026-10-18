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
      'Singapore creative agency for finance, healthcare and luxury brands. Brand identity, 3D animation and strategy for ideas that are hard to explain.',
  },

  hero: {
    eyebrow: 'Creative agency, Singapore',
    title: 'We make complicated things look good.',
    lead: 'Brand identity, 3D animation and strategy for finance, healthcare and luxury brands. We do the hard thinking up front, so your customers don’t have to do any.',
    primary: { label: 'Start a project', href: '/contact' } satisfies Link,
    secondary: { label: 'See the work', href: '/work' } satisfies Link,
    // Widened so the hero handles both the still and the reel.
    media: heroMedia as HeroMedia,
  },

  services: {
    eyebrow: 'What we do',
    title: 'Three things we do very well',
    items: [
      {
        ...branding,
        body: 'Tell us what you stand for and where you’re headed. We’ll turn it into a logo, colours, a voice and a look people recognise from across the room.',
        image: {
          src: niriSupergraphic,
          alt: 'NIRI restaurant supergraphic pattern and logo designed by Blackhat',
        },
      },
      {
        ...animation,
        body: 'Products that don’t exist yet, buildings still on paper, ideas too big for a photo shoot. We model them, light them and make them move.',
        image: {
          src: warJets,
          alt: 'Photoreal 3D render of a futuristic gunship aircraft on a landing pad, modelled by Blackhat',
        },
      },
      {
        ...strategy,
        body: 'When your business takes ten minutes to explain, we find the two-minute version. Customer journeys, strategy and training decks people actually finish.',
        image: {
          src: ckPermitting,
          alt: 'Jurisdictional approval playbook diagram Blackhat designed for Cloudkitchens',
        },
      },
    ],
  },

  clients: {
    title: 'In good company',
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
    title: 'Got something hard to explain?',
    body: 'A new brand, a product nobody has seen yet, a process that loses people halfway through. Tell us about it. We like the tricky ones.',
    link: { label: 'Reach out', href: '/contact' } satisfies Link,
  },

  featured: {
    eyebrow: 'Featured work',
    client: 'Hyperloop TT, Dubai',
    title: 'Mapping a commute that hasn’t happened yet',
    body: 'We followed daily commuters and tourists from departure to arrival, step by step, then built the tube, the pods and the city around them in 3D so everyone in the room could picture the ride.',
    tags: ['Strategy & Consulting', '3D Animation'],
    link: { label: 'See the project', href: '/work/hyperloop-tt' } satisfies Link,
    image: {
      src: hyperloopRender,
      alt: '3D cutaway render of the Hyperloop TT tube and passenger pods on an elevated pylon',
    },
  },

  work: {
    eyebrow: 'Selected work',
    title: 'A few we’re proud of',
    allLink: { label: 'See all work', href: '/work' } satisfies Link,
    items: [
      {
        client: 'NIRI',
        service: 'Brand & Visual Identity',
        summary:
          'A restaurant identity that runs from the logo to the menus, the walls and the Instagram grid.',
        href: '/work/niri',
        image: { src: niriLogo, alt: 'NIRI logo over a 3D render of the restaurant’s dining room' },
      },
      {
        client: 'MYJ',
        service: '3D Animation & Motion Graphics',
        summary:
          'An investment firm’s new offices in photoreal 3D, from the front door to the CEO’s desk.',
        href: '/work/myj',
        image: { src: myjEntrance, alt: '3D render of the MYJ office entrance facade at dusk' },
      },
      {
        client: 'Cloudkitchens',
        service: 'Strategy & Consulting',
        summary:
          'Safety posters and training that kitchen teams actually read, before anything catches fire.',
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
    statement: 'We do our best work where mistakes are expensive and attention is hard to win.',
    items: [
      {
        title: 'Financial institutions',
        body: 'Products and processes explained plainly, without sounding like the small print.',
      },
      {
        title: 'Healthcare innovators',
        body: 'Approvals, safety and science turned into something people read, remember and follow.',
      },
      {
        title: 'Luxury brands',
        body: 'Identities and packaging with the finish your customers notice, even if they couldn’t say why.',
      },
    ],
  },

  showcase: {
    image: {
      src: cooklaneWorld,
      alt: 'Isometric 3D city with a restaurant, streets and moving vehicles, built by Blackhat for Cooklane',
    },
    caption: 'Cooklane: we built a small 3D town to show how cloud retail works.',
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
