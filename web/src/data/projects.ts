import type { PageMeta, Picture } from '@/types'
import type { ImageMetadata } from 'astro'

export type ServiceSlug =
  'brand-visual-identity' | '3d-animation-motion-graphics' | 'strategy-consulting'

// A gallery image. `ground` sets the panel behind images with transparent backgrounds.
export type GalleryImage = Picture & { ground?: 'light' | 'dark' }

export type Project = {
  slug: string
  client: string
  sector: string
  // Headline for the project page: says plainly what we did.
  title: string
  meta: PageMeta
  // One line for cards.
  summary: string
  overview: string[]
  services: ServiceSlug[]
  image: Picture
  // Optional YouTube film, shown above the gallery.
  video?: { youtubeId: string; title: string; poster: Picture }
  gallery: GalleryImage[]
}

const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/work/**/*.{jpg,png}', {
  eager: true,
})

// Look up an image in web/src/assets/work/ by its path, e.g. 'niri/niri-luxury-restaurant-logo-design.png'.
const img = (path: string): ImageMetadata => {
  const found = images[`/src/assets/work/${path}`]
  if (!found) throw new Error(`Missing project image: ${path}`)
  return found.default
}

// Every project we can show, described only from what the work itself shows.
// Order here is the order on the Work page. Project pages live at /work/<slug>.
export const projects: Project[] = [
  {
    slug: 'energend',
    client: 'Energend',
    sector: 'Energy technology',
    title: 'Building an energy brand, from the particle to the showroom',
    meta: {
      title: 'Energend: Energy Brand Identity and 3D Renders | Blackhat',
      description:
        'Brand strategy, identity and photoreal 3D for Energend, a nanotechnology energy company: products, showroom and factory, built from particles up.',
    },
    summary:
      'Positioning, identity and photoreal 3D for a nanotechnology energy company, from products to showroom.',
    overview: [
      'Energend is a nanotechnology energy company making safer, compact, zero-carbon power for products, infrastructure and everyday life. We built its brand from the ground up: the positioning for investors, manufacturers and consumers, the brand story, the promise “Built from particles. Designed for generations.” and the tagline “Built for Rising Generations.”',
      'The identity pairs Radiant Orange with Core Black, textured gradients and particle patterns. We then brought the technology to life in 3D, with renders of smart glasses, a satellite solar array, an EV battery and a battery storage system, alongside the showroom, the factory and a company intro video.',
    ],
    services: ['brand-visual-identity', '3d-animation-motion-graphics'],
    video: {
      youtubeId: '2o7BofCSICU',
      title: 'Energend company intro film',
      poster: {
        src: img('energend/energend-showroom-interior-exhibit.jpg'),
        alt: 'Energend showroom render with an “Evolution of Energy” timeline wall',
      },
    },
    image: {
      src: img('energend/energend-showroom-interior-dome.jpg'),
      alt: '3D render of the Energend showroom, with a curved screen showing a satellite above Earth',
    },
    gallery: [
      {
        src: img('energend/energend-smart-glasses.png'),
        alt: 'Energend-branded smart glasses with orange solar arms, rendered in 3D',
        ground: 'dark',
      },
      {
        src: img('energend/energend-satellite-solar-dark.png'),
        alt: '3D render of a satellite with orange Energend solar panels',
        ground: 'dark',
      },
      {
        src: img('energend/energend-showroom-exterior.jpg'),
        alt: '3D render of the white Energend showroom building on a street corner',
      },
      {
        src: img('energend/energend-showroom-interior-exhibit.jpg'),
        alt: 'Energend showroom render with an “Evolution of Energy” timeline wall and product displays',
      },
      {
        src: img('energend/energend-ev-battery.png'),
        alt: 'Transparent car render revealing an Energend battery pack in its floor',
        ground: 'light',
      },
      {
        src: img('energend/energend-battery-storage.png'),
        alt: 'Orange Energend battery storage container with its doors open, rendered in 3D',
        ground: 'light',
      },
      {
        src: img('energend/energend-solar-layers.png'),
        alt: 'Exploded 3D view of the layers inside an Energend solar panel',
        ground: 'light',
      },
      {
        src: img('energend/energend-satellite-solar-light.png'),
        alt: 'Cutaway 3D render of a satellite powered by Energend solar arrays',
        ground: 'light',
      },
    ],
  },
  {
    slug: 'myj',
    client: 'MYJ',
    sector: 'Investment',
    title: 'An investment firm’s offices in photoreal 3D, room by room',
    meta: {
      title: 'MYJ: Photoreal 3D Office Renders | Blackhat',
      description:
        'Photoreal 3D renders of an investment firm’s offices, from the entrance and lobby to the staff area, data centre and CEO office.',
    },
    summary: 'Photoreal renders of an investment firm’s new offices, from entrance to CEO suite.',
    overview: [
      'MYJ is an investment firm. We rendered its offices in photoreal 3D, room by room: the entrance facade, a lobby with a stone reception desk, the staff area with branded panelling, a secure data centre and the CEO’s office.',
      'Each render shows the materials, light and layout of the space in detail. We also produced MYJ’s animated film, below, and a book.',
    ],
    services: ['3d-animation-motion-graphics'],
    video: {
      youtubeId: 'w4cxV6Wn83E',
      title: 'MYJ animated film',
      poster: {
        src: img('myj/myj-office-design-3d-lobby.jpg'),
        alt: 'MYJ office lobby, rendered in 3D',
      },
    },
    image: {
      src: img('myj/myj-office-design-render-entrance.jpg'),
      alt: '3D render of the MYJ office entrance facade at dusk',
    },
    gallery: [
      {
        src: img('myj/myj-office-design-3d-lobby.jpg'),
        alt: 'MYJ office lobby with a green stone reception desk, rendered in 3D',
      },
      {
        src: img('myj/myj-office-design-render-staff-area.jpg'),
        alt: 'MYJ staff area with desks under a double-height screen wall, rendered in 3D',
      },
      {
        src: img('myj/myj-office-design-3d-render-ceo-office.jpg'),
        alt: 'MYJ CEO office, rendered in 3D',
      },
      {
        src: img('myj/myj-office-design-3d-data-center.jpg'),
        alt: 'MYJ data centre corridor, rendered in 3D',
      },
    ],
  },
  {
    slug: 'suricate-capital',
    client: 'Suricate Capital',
    sector: 'Investment',
    title: 'An investment brand that never takes its eyes off the market',
    meta: {
      title: 'Suricate Capital: Investment Brand Identity | Blackhat',
      description:
        'Brand strategy and identity for Suricate Capital, an investment platform for a new generation of investors: story, logo, colour, app and web.',
    },
    summary:
      'Positioning, story and identity for an investment platform built for a new generation of investors.',
    overview: [
      'Suricate Capital is a fast, accessible investment platform for younger investors, operating under MYJ Capital’s regulatory framework. We placed it in the space between serious fund management and entry-level investing apps, and built the brand story around the suricate sentinel: “Eyes Above the Ground”.',
      'The promise “Investment Instinct, Within Reach” and the tagline “Always Alert, Investing Right” lead into an identity of a sentinel logo, Dark Walnut, Chestnut, Ivory and Powder Blue, textures, icons, and app and web visuals.',
    ],
    services: ['brand-visual-identity'],
    image: {
      src: img('suricate/suricate-app.jpg'),
      alt: 'Hand holding a phone showing the Suricate Capital app',
    },
    gallery: [
      {
        src: img('suricate/suricate-cover.jpg'),
        alt: 'Suricate Capital brand guidelines cover in chestnut',
      },
      {
        src: img('suricate/suricate-logo.jpg'),
        alt: 'Suricate Capital logo: a standing suricate beside the name',
      },
      {
        src: img('suricate/suricate-tagline.jpg'),
        alt: 'Suricate Capital tagline page: “Always Alert, Investing Right”',
      },
      {
        src: img('suricate/suricate-colour.jpg'),
        alt: 'Suricate Capital colour proportions with app widgets in light and dark',
      },
      {
        src: img('suricate/suricate-brand-story.jpg'),
        alt: 'Suricate Capital brand story page: a suricate beside the line “Eyes Above the Ground”',
      },
      {
        src: img('suricate/suricate-web.jpg'),
        alt: 'Suricate Capital website pages in chestnut, ivory and blue',
      },
    ],
  },
  {
    slug: 'niri',
    client: 'NIRI',
    sector: 'Hospitality',
    title: 'A fine-dining identity, from the logo to the last menu page',
    meta: {
      title: 'NIRI: Restaurant Brand Identity and Menu Design | Blackhat',
      description:
        'Brand identity for NIRI, a fine-dining restaurant: logo, illustrated supergraphics, menus, outdoor posters and social media templates.',
    },
    summary: 'A fine-dining identity, from logo and supergraphics to menus and social.',
    overview: [
      'NIRI is a fine-dining restaurant. Its logo grew out of the story on the plate, with line illustrations of breakfast, a rubber tree plantation, coffee beans and cutlery.',
      'We carried the identity into supergraphics, menu covers and pages, street posters and social media templates, so the brand feels the same on a billboard as it does at the table.',
    ],
    services: ['brand-visual-identity'],
    image: {
      src: img('niri/niri-luxury-restaurant-logo-design.png'),
      alt: 'NIRI logo over a 3D render of the restaurant’s dining room',
    },
    gallery: [
      {
        src: img('niri/niri-luxury-restaurant-logo-concept.png'),
        alt: 'NIRI logo concept with line illustrations of breakfast, a rubber tree plantation and coffee beans',
      },
      {
        src: img('niri/niri-luxury-restaurant-supergraphic.png'),
        alt: 'NIRI supergraphic pattern alongside the logo',
      },
      {
        src: img('niri/niri-luxury-restaurant-advertising-mockup.jpg'),
        alt: 'NIRI posters on a street billboard',
      },
      { src: img('niri/niri-luxury-restaurant-menu-cover-design.png'), alt: 'NIRI menu cover' },
      {
        src: img('niri/niri-luxury-restaurant-open-menu-design.png'),
        alt: 'NIRI menu open on a table',
      },
      {
        src: img('niri/niri-luxury-restaurant-social-media.jpg'),
        alt: 'NIRI social media posts on a phone',
      },
    ],
  },
  {
    slug: 'innovair',
    client: 'Innovair',
    sector: 'Commercial kitchens',
    title: 'Brand and product visuals for a kitchen ventilation company',
    meta: {
      title: 'Innovair: Brand Identity and 3D Product Visuals | Blackhat',
      description:
        'Brand identity, brochure, ads and axonometric 3D product renders for Innovair, a commercial kitchen ventilation company.',
    },
    summary: 'Brand, brochure and 3D product visuals for a commercial kitchen ventilation company.',
    overview: [
      'Innovair makes ventilation and exhaust systems for commercial kitchens. We designed the brand, from the logo to social media and advertising.',
      'For the products, we built axonometric 3D renders that show every filter inside the slim recirculating device, and used them across a three-fold brochure and product pages.',
    ],
    services: ['brand-visual-identity', '3d-animation-motion-graphics'],
    image: {
      src: img('innovair/innovair-commercial-kitchen-equipment-3-fold-brochure.png'),
      alt: 'Innovair three-fold product brochure with 3D renders',
    },
    gallery: [
      {
        src: img('innovair/innovair-commercial-kitchen-equipment-logo.png'),
        alt: 'Innovair logo on a blue gradient',
      },
      {
        src: img('innovair/innovair-product-visualization.png'),
        alt: 'Axonometric 3D render of an Innovair recirculating device with each filter labelled',
      },
      {
        src: img('innovair/innovair-commercial-kitchen-equipment-ad-mockup.png'),
        alt: 'Innovair advertisement in a commercial kitchen: “A beacon of innovation in your kitchen”',
      },
      {
        src: img('innovair/innovair-commercial-kitchen-equipment-social-media-mockup.png'),
        alt: 'Innovair social media posts',
      },
    ],
  },
  {
    slug: 'tcdc',
    client: 'TCDC',
    sector: 'Design studio',
    title: 'An identity for a design collective, worn and worked in',
    meta: {
      title: 'TCDC: Brand Identity for a Design Collective | Blackhat',
      description:
        'Brand identity for The Castleworks Design Collective: logo, business cards, ID badges, merchandise, wall graphics and social media.',
    },
    summary:
      'An identity for The Castleworks Design Collective, applied to cards, merchandise and the studio walls.',
    overview: [
      'TCDC, The Castleworks Design Collective, is a design studio. We created its logo and geometric pattern system.',
      'The identity runs across business cards, lanyards and ID badges, tote bags and t-shirts, the studio walls and its social media.',
    ],
    services: ['brand-visual-identity'],
    image: {
      src: img('tcdc/tcdc-creative-agency-business-card.jpg'),
      alt: 'TCDC business cards with the studio’s geometric pattern',
    },
    gallery: [
      {
        src: img('tcdc/tcdc-creative-agency-logo-design.jpg'),
        alt: 'TCDC logo on a dark studio wall',
      },
      {
        src: img('tcdc/tcdc-creative-agency-wall-vinyl-mockup.jpg'),
        alt: 'TCDC logo on a glass office wall',
      },
      { src: img('tcdc/tcdc-lanyard-id-badge.jpg'), alt: 'TCDC lanyard and ID badge' },
      { src: img('tcdc/tcdc-creative-agency-tote-bag-design.jpg'), alt: 'TCDC tote bag' },
      {
        src: img('tcdc/tcdc-creative-agency-logo-on-t-shirt-design.jpg'),
        alt: 'TCDC logo on a white t-shirt',
      },
      {
        src: img('tcdc/tcdc-creative-agency-social-media-mockup.png'),
        alt: 'TCDC social media posts',
      },
    ],
  },
  {
    slug: 'studyzone',
    client: 'Studyzone',
    sector: 'Education',
    title: 'A brighter brand for a pre-university education provider',
    meta: {
      title: 'Studyzone: Education Brand Identity | Blackhat',
      description:
        'Brand identity for Studyzone, a pre-university education provider: logo, lettering, billboard advertising and social media.',
    },
    summary: 'A warm, optimistic brand for a pre-university education provider.',
    overview: [
      'Studyzone prepares students for university. We gave it a warm, optimistic identity: a new logo, hand-drawn lettering and a palette of orange and deep green.',
      'The brand runs from billboards (“Connecting the world and you”) to social media posts built around students’ stories, goals and dreams.',
    ],
    services: ['brand-visual-identity'],
    image: {
      src: img('studyzone/studyzone-pre-university-education-advertising-mockup.jpg'),
      alt: 'Studyzone billboard reading “Connecting the world and you” in a station',
    },
    gallery: [
      {
        src: img('studyzone/studyzone-pre-university-education-logo.png'),
        alt: 'Studyzone logo on deep green',
      },
      {
        src: img('studyzone/studyzone-pre-university-education-lettering.png'),
        alt: 'Studyzone lettering: “Embrace the bright future of yours!”',
      },
      {
        src: img('studyzone/studyzone-pre-university-education-social-media-mockup-1.png'),
        alt: 'Studyzone social media post',
      },
      {
        src: img('studyzone/studyzone-pre-university-education-social-media-mockup-2.png'),
        alt: 'Studyzone social media post: “Weaving stories, goals and dreams”',
      },
    ],
  },
  {
    slug: 'vespa',
    client: 'Vespa',
    sector: 'Luxury lifestyle',
    title: 'Limited-edition packaging for Tết',
    meta: {
      title: 'Vespa: Tết Limited-Edition Packaging Concept | Blackhat',
      description:
        'Limited-edition packaging concepts for Vespa celebrating Tết Nguyên Đán, with rectangular and round gift boxes.',
    },
    summary: 'Limited-edition packaging concepts celebrating Tết Nguyên Đán.',
    overview: [
      'For Tết Nguyên Đán, the Lunar New Year, we developed limited-edition packaging concepts for Vespa that combine Vietnamese heritage with the brand’s lifestyle.',
      'The concept runs across a rectangular gift box and a round box, finished in festive illustrated patterns.',
    ],
    services: ['brand-visual-identity'],
    image: {
      src: img('vespa/vespa-tet-nguyen-dan-packaging-design-round.png'),
      alt: 'Round Vespa Tết gift boxes with a festive illustrated pattern',
    },
    gallery: [
      {
        src: img('vespa/vespa-tet-nguyen-dan-packaging-design-concept.png'),
        alt: 'Vespa Tết Nguyên Đán packaging concept board',
      },
      {
        src: img('vespa/vespa-tet-nguyen-dan-packaging-design-rectangular.png'),
        alt: 'Rectangular Vespa Tết gift box',
      },
    ],
  },
  {
    slug: 'cooklane',
    client: 'Cooklane',
    sector: 'Cloud retail',
    title: 'A small 3D town to explain cloud retail',
    meta: {
      title: 'Cooklane: Isometric 3D World and Characters | Blackhat',
      description:
        'An isometric 3D town and character designs for Cooklane, built to explain how cloud retail works for restaurant owners and staff.',
    },
    summary: 'An isometric 3D town and cast of characters that explain how cloud retail works.',
    overview: [
      'Cooklane is a cloud retail platform for restaurants. To explain how it works, we built an isometric 3D town with streets, restaurants and delivery vans.',
      'We designed a cast of characters to live in it: a restaurant owner, the staff and the permit team, each modelled and lit in 3D.',
    ],
    services: ['3d-animation-motion-graphics'],
    image: {
      src: img('cooklane/cooklane-3d-restaurant-and-owner.jpg'),
      alt: '3D render of a Cooklane restaurant owner character outside an isometric restaurant',
    },
    gallery: [
      {
        src: img('cooklane/cooklane-3d-world-building.jpg'),
        alt: 'Isometric 3D town with streets, restaurants and a delivery van',
      },
      {
        src: img('cooklane/cooklane-3d-character-business-owner.png'),
        alt: '3D character of a restaurant owner',
      },
      {
        src: img('cooklane/cooklane-3d-character-staff.png'),
        alt: '3D character of a staff member in a red uniform',
      },
      {
        src: img('cooklane/cooklane-3d-character-staff-2.png'),
        alt: '3D character of a permit team member',
      },
    ],
  },
  {
    slug: 'game-renders',
    client: 'Game renders',
    sector: 'Gaming',
    title: 'Photoreal vehicles and characters for games',
    meta: {
      title: 'Game Renders: Photoreal 3D Vehicles & Characters | Blackhat',
      description:
        'Photoreal 3D modelling for games: a futuristic gunship, an armoured soldier and a winged robot tank, rendered in cinematic detail.',
    },
    summary: 'Photoreal vehicles, characters and environments modelled for games.',
    overview: [
      'We modelled, textured and lit game assets in photoreal detail: a futuristic gunship on its landing pad, an armoured soldier and a winged robot tank in its hangar.',
    ],
    services: ['3d-animation-motion-graphics'],
    image: {
      src: img('game-3d/3d-character-design-futuristic-robot.jpg'),
      alt: '3D render of a futuristic winged robot tank in a laboratory hangar',
    },
    gallery: [
      {
        src: img('game-3d/3d-realistic-render-war-jets.jpg'),
        alt: 'Futuristic gunship aircraft on a landing pad, rendered in 3D',
      },
      {
        src: img('game-3d/3d-character-design-soldier.jpg'),
        alt: 'Armoured soldier character with a sword, rendered in 3D',
      },
      {
        src: img('game-3d/3d-realistic-render-war-jets-2.png'),
        alt: 'Two futuristic gunships, rendered in 3D',
      },
      {
        src: img('game-3d/3d-realistic-render-war-jets-3.jpg'),
        alt: 'Close-up of a futuristic gunship cockpit and guns',
      },
    ],
  },
  {
    slug: 'cloudkitchens-safety',
    client: 'Cloudkitchens',
    sector: 'Food and hospitality',
    title: 'A global safety campaign for kitchen teams',
    meta: {
      title: 'Cloudkitchens: Global Safety Awareness Campaign | Blackhat',
      description:
        'A global safety awareness campaign for Cloudkitchens: characters, onboarding templates, escalation flows and emergency response posters.',
    },
    summary:
      'A global safety awareness campaign, with characters and posters kitchen teams remember.',
    overview: [
      'Cloudkitchens runs kitchens around the world, each with its own local safety rules. We created a global safety awareness campaign that every site can adapt.',
      'The system includes a cast of characters, onboarding training templates, an accident escalation flow and step-by-step emergency posters for fires, gas leaks and electric shocks.',
    ],
    services: ['strategy-consulting'],
    image: {
      src: img('cloudkitchens-safety/how-to-use-fire-extinguisher.jpg'),
      alt: 'Cloudkitchens safety poster showing how to use a fire extinguisher, step by step',
    },
    gallery: [
      {
        src: img('cloudkitchens-safety/character-design-for-safety-awareness-campaign.png'),
        alt: 'Cloudkitchens safety campaign characters: a smiling flame and a warning triangle',
      },
      {
        src: img('cloudkitchens-safety/global-safety-awareness-campaign-onboarding-training.png'),
        alt: 'Onboarding training slide with a smiling sun character',
      },
      {
        src: img(
          'cloudkitchens-safety/global-safety-awareness-campaign-accident-report-escalation-flow.png',
        ),
        alt: 'Accident report escalation flow diagram',
      },
      {
        src: img(
          'cloudkitchens-safety/global-safety-awareness-campaign-electrical-equipment-catches-fire.png',
        ),
        alt: 'Poster: what to do if electrical equipment catches fire',
      },
      {
        src: img(
          'cloudkitchens-safety/global-safety-awareness-campaign-emergency-response-poster-gas-leaks.jpg',
        ),
        alt: 'Poster: what to do if gas leaks',
      },
      {
        src: img(
          'cloudkitchens-safety/global-safety-awareness-campaign-emergency-response-poster-oil-catches-fire.jpg',
        ),
        alt: 'Poster: what to do if oil catches fire',
      },
      {
        src: img(
          'cloudkitchens-safety/global-safety-awareness-campaign-emergency-response-poster-electric-shock.jpg',
        ),
        alt: 'Poster: electric shock emergency response',
      },
    ],
  },
  {
    slug: 'hyperloop-tt',
    client: 'Hyperloop TT',
    sector: 'Transport',
    title: 'Designing the hyperloop journey before the first passenger boards',
    meta: {
      title: 'Hyperloop TT: Customer Journey Design and 3D | Blackhat',
      description:
        'Customer journey design and 3D visuals for a hyperloop system in Dubai, mapping commuters and tourists from departure to arrival.',
    },
    summary: 'Customer journey design and 3D visuals for a hyperloop system in Dubai.',
    overview: [
      'We mapped the rider journey for Hyperloop TT in Dubai, from departure to arrival, for both daily commuters and tourists.',
      'Alongside the journey maps, we diagrammed how the system sits in the city, from solar harvest to material efficiency, and built the tube and pods in 3D so stakeholders could see how it would work.',
    ],
    services: ['strategy-consulting', '3d-animation-motion-graphics'],
    image: {
      src: img('hyperloop/hyperloop-tt-realistic-render-of-highway.jpg'),
      alt: '3D cutaway render of the Hyperloop TT tube and passenger pods on an elevated pylon',
    },
    gallery: [
      {
        src: img('hyperloop/hyperloop-tt-customer-journey-design-diagram-2.png'),
        alt: 'Hyperloop TT user journey diagram for commuters and tourists',
      },
      {
        src: img('hyperloop/hyperloop-tt-customer-journey-design-diagram-1.png'),
        alt: 'Hyperloop TT infrastructure diagram',
      },
      {
        src: img('hyperloop/hyperloop-tt-customer-journey-design-diagram-3.png'),
        alt: 'Hyperloop TT sections in their urban context',
      },
    ],
  },
]

export const projectHref = (slug: string) => `/work/${slug}`

export const projectsFor = (service: ServiceSlug) =>
  projects.filter((project) => project.services.includes(service))

export const projectBySlug = (slug: string) => {
  const project = projects.find((item) => item.slug === slug)
  if (!project) throw new Error(`Unknown project: ${slug}`)
  return project
}
