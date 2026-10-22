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
  // Portrait crop for cards, when the hero image doesn't crop well to one.
  cardImage?: Picture
  // 'light' for flat graphics such as a logo on colour, which the usual dark overlay would mute.
  heroShade?: 'full' | 'light'
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
    title: 'One brand for an investment group, from the logo to its offices in 3D',
    meta: {
      title: 'MYJ: Investment Brand, Social Media and 3D | Blackhat',
      description:
        'Brand identity, brand guide, social media and photoreal 3D office renders for MYJ, an investment group, plus strategy and consulting for its operations.',
    },
    summary: 'Brand, social media, photoreal 3D and operations strategy for an investment group.',
    overview: [
      'MYJ is an investment group with businesses in management, currency, real estate and community. We refreshed its logo, from MYJ Group to MYJ Capital, and built one identity to bring every entity under one roof, around the tagline “Where Profit Meets Purpose”.',
      'The brand guide sets the logo and its sub-brands, Albert Sans, a palette of Growth Green, Business Beige, Safety Sage, Big Burgundy and Security Silver, and two geometric patterns. We carry it into stationery, event screens, newsletters and the social media we manage for MYJ.',
      'We also rendered MYJ’s offices in photoreal 3D, room by room, produced its animated film, below, and advise on strategy for its operations.',
    ],
    services: ['brand-visual-identity', '3d-animation-motion-graphics', 'strategy-consulting'],
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
        src: img('myj/myj-brand-collage.jpg'),
        alt: 'MYJ brand applications: business card, app icon, event screen, ID card and website',
      },
      {
        src: img('myj/myj-brand-logo.jpg'),
        alt: 'The refreshed MYJ Capital logo in green and silver',
      },
      {
        src: img('myj/myj-brand-logo-colours.jpg'),
        alt: 'MYJ Capital logo on green, sage, beige and burgundy',
      },
      {
        src: img('myj/myj-brand-palette.jpg'),
        alt: 'MYJ colour palette: Growth Green, Business Beige, Safety Sage, Big Burgundy and Security Silver',
      },
      {
        src: img('myj/myj-brand-typography.jpg'),
        alt: 'MYJ typography in Albert Sans on burgundy',
      },
      {
        src: img('myj/myj-brand-pattern.jpg'),
        alt: 'MYJ geometric pattern in two greens',
      },
      {
        src: img('myj/myj-brand-event-screen.jpg'),
        alt: 'MYJ “Invest with Purpose” slide on a conference stage screen',
      },
      {
        src: img('myj/myj-brand-social-media.jpg'),
        alt: 'Three MYJ social media stories in beige, burgundy and green',
      },
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
      src: img('suricate/suricate-logo-hero.jpg'),
      alt: 'Suricate Capital logo in ivory on chestnut: a standing suricate beside the name',
    },
    heroShade: 'light',
    cardImage: {
      src: img('suricate/suricate-logo-card.jpg'),
      alt: 'Suricate Capital logo in ivory on chestnut',
    },
    gallery: [
      {
        src: img('suricate/suricate-app.jpg'),
        alt: 'Hand holding a phone showing the Suricate Capital app',
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
    slug: 'waves',
    client: 'Waves',
    sector: 'Beverages',
    title: 'A canned cocktail brand built for the morning after',
    meta: {
      title: 'Waves: Canned Cocktail Brand Identity | Blackhat',
      description:
        'Brand identity for Waves, a canned cocktail brand: logo, colour, type, cut-out imagery, photography direction, social media and can packaging.',
    },
    summary:
      'A bold, playful identity for a canned cocktail brand, from logo and type to social and cans.',
    overview: [
      'Waves makes canned cocktails for people who want to sip, laugh and live it up without paying the price the next morning. We built a brand with the same energy: a hand-drawn logo, Ocean Teal, Vanilla Mist and Lime Zest, and Acme Gothic Compressed headlines.',
      'Cut-out people and cocktails, rubber-hose characters, a grunge texture and a warm, moody photography direction come together across social media templates and a range of can designs.',
    ],
    services: ['brand-visual-identity'],
    image: {
      src: img('waves/waves-cans.jpg'),
      alt: 'Six Waves cocktail cans in pink, orange, yellow and green',
    },
    cardImage: {
      src: img('waves/waves-photo-card.jpg'),
      alt: 'Waves brand photography: a woman smiling over a cocktail glass',
    },
    gallery: [
      {
        src: img('waves/waves-cocktails.jpg'),
        alt: 'Waves cut-out cocktail graphics on dark teal',
      },
      {
        src: img('waves/waves-logo.jpg'),
        alt: 'Waves logo in teal, lime and white, and over a photograph',
      },
      {
        src: img('waves/waves-colour.jpg'),
        alt: 'Waves primary colours: Ocean Teal, Vanilla Mist and Lime Zest',
      },
      { src: img('waves/waves-type.jpg'), alt: 'Waves primary typeface, Acme Gothic Compressed' },
      {
        src: img('waves/waves-composition.jpg'),
        alt: 'Waves posters combining the logo, cut-outs and bold headlines',
      },
      {
        src: img('waves/waves-social.jpg'),
        alt: 'Waves social media posts showcasing cans and benefits',
      },
      { src: img('waves/waves-packaging.jpg'), alt: 'Waves packaging page with six can designs' },
    ],
  },
  {
    slug: 'fleet',
    client: 'Fleet',
    sector: 'Operations software',
    title: 'A calm, data-first brand for an operations platform, and a guide for every user',
    meta: {
      title: 'Fleet: Brand Identity and Onboarding Guide | Blackhat',
      description:
        'Brand direction for Fleet, an operations platform: palette, ratio, type and interface rules, plus a role-based onboarding guide for every user.',
    },
    summary: 'Brand direction for an operations platform, plus a role-based onboarding guide.',
    overview: [
      'Fleet is an operations platform that helps teams manage tasks, forms, documents and workflows across many locations, on the web and in the Fleet Tasks mobile app.',
      'We gave Fleet a brand built on depth first, with warmth where it counts. Black and navy share the ground, steel picks out the data, cream is the light, and espresso marks the one thing to do next. Hanken Grotesk, never heavier than medium, keeps the type calm, and a separate set of status colours is kept for the product alone.',
      'We also designed its onboarding training guide around the people who use it: Super Admins, Admins, Managers and Technicians. Each section shows exactly what that role can do, with annotated screens, role diagrams and troubleshooting.',
    ],
    services: ['brand-visual-identity', 'strategy-consulting'],
    image: {
      src: img('fleet/fleet-brand-guide-stack.jpg'),
      alt: 'Fleet brand guidelines pages stacked in perspective: the cover, typography and colour roles',
    },
    heroShade: 'light',
    cardImage: {
      src: img('fleet/fleet-brand-guide-card.jpg'),
      alt: 'A collage of Fleet brand guidelines pages',
    },
    gallery: [
      {
        src: img('fleet/fleet-brand-guide-spread.jpg'),
        alt: 'Six pages of the Fleet brand guidelines laid out on cream',
      },
      {
        src: img('fleet/fleet-brand-palette-ratio.jpg'),
        alt: 'Fleet core palette and ratio: black and navy at 35% each, cream 17%, steel and espresso 6.5%',
      },
      {
        src: img('fleet/fleet-brand-colour-roles.jpg'),
        alt: 'How each Fleet colour works: black and navy grounds, steel detail, cream light, espresso action',
      },
      {
        src: img('fleet/fleet-brand-typography.jpg'),
        alt: 'Fleet typography in Hanken Grotesk: light, regular and medium, with the type scale',
      },
      {
        src: img('fleet/fleet-brand-status-colours.jpg'),
        alt: 'Fleet status colours for the product: urgent, overdue, in progress, completed and scheduled',
      },
      {
        src: img('fleet/fleet-brand-interface.jpg'),
        alt: 'Fleet interface rules: one espresso action per view, on light and on dark',
      },
      {
        src: img('fleet/fleet-training-cover.jpg'),
        alt: 'Fleet onboarding guide section cover: “Basic Training Guide” on blue',
      },
      {
        src: img('fleet/fleet-dashboard-map.jpg'),
        alt: 'Annotated Fleet home dashboard with a map of sites',
      },
      {
        src: img('fleet/fleet-user-roles.jpg'),
        alt: 'Fleet user roles overview: Super Admin, Admin, Manager and Technician',
      },
      {
        src: img('fleet/fleet-user-relationship.jpg'),
        alt: 'Diagram of how Fleet user roles relate across locations',
      },
      {
        src: img('fleet/fleet-mobile-app.jpg'),
        alt: 'Fleet Tasks mobile app download page in the guide',
      },
      {
        src: img('fleet/fleet-mobile-tasks.jpg'),
        alt: 'Fleet Tasks mobile screens: home, filter by type and filter by location',
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
