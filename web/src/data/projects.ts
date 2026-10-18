import ckPermitting from '@/assets/work/cloudkitchens-permitting/jurisdictional-approval-process-diagram.png'
import ckSafety from '@/assets/work/cloudkitchens-safety/how-to-use-fire-extinguisher.jpg'
import cooklane from '@/assets/work/cooklane/cooklane-3d-restaurant-and-owner.jpg'
import gameRobot from '@/assets/work/game-3d/3d-character-design-futuristic-robot.jpg'
import hyperloop from '@/assets/work/hyperloop/hyperloop-tt-realistic-render-of-highway.jpg'
import innovair from '@/assets/work/innovair/innovair-commercial-kitchen-equipment-3-fold-brochure.png'
import myj from '@/assets/work/myj/myj-office-design-render-entrance.jpg'
import niri from '@/assets/work/niri/niri-luxury-restaurant-logo-design.png'
import studyzone from '@/assets/work/studyzone/studyzone-pre-university-education-advertising-mockup.jpg'
import tcdc from '@/assets/work/tcdc/tcdc-creative-agency-business-card.jpg'
import vespa from '@/assets/work/vespa/vespa-tet-nguyen-dan-packaging-design-round.png'
import type { Picture } from '@/types'

export type ServiceSlug =
  'brand-visual-identity' | '3d-animation-motion-graphics' | 'strategy-consulting'

export type Project = {
  slug: string
  client: string
  summary: string
  services: ServiceSlug[]
  image: Picture
}

// Every project we can show, described only from what the work itself shows.
// Project pages will live at /work/<slug>.
export const projects: Project[] = [
  {
    slug: 'niri',
    client: 'NIRI',
    summary: 'A fine-dining identity, from logo and supergraphics to menus and social.',
    services: ['brand-visual-identity'],
    image: { src: niri, alt: 'NIRI logo over a 3D render of the restaurant’s dining room' },
  },
  {
    slug: 'tcdc',
    client: 'TCDC',
    summary:
      'An identity for The Castleworks Design Collective, applied to cards, merchandise and the studio walls.',
    services: ['brand-visual-identity'],
    image: { src: tcdc, alt: 'TCDC business cards with the studio’s geometric pattern' },
  },
  {
    slug: 'studyzone',
    client: 'Studyzone',
    summary: 'A warm, optimistic brand for a pre-university education provider.',
    services: ['brand-visual-identity'],
    image: {
      src: studyzone,
      alt: 'Studyzone billboard reading “Connecting the world and you” in a station',
    },
  },
  {
    slug: 'innovair',
    client: 'Innovair',
    summary: 'Brand, brochure and 3D product visuals for a commercial kitchen ventilation company.',
    services: ['brand-visual-identity', '3d-animation-motion-graphics'],
    image: { src: innovair, alt: 'Innovair three-fold product brochure with 3D renders' },
  },
  {
    slug: 'vespa',
    client: 'Vespa',
    summary: 'Limited-edition packaging concepts celebrating Tết Nguyên Đán.',
    services: ['brand-visual-identity'],
    image: { src: vespa, alt: 'Round Vespa Tết gift boxes with a festive illustrated pattern' },
  },
  {
    slug: 'myj',
    client: 'MYJ',
    summary: 'Photoreal renders of an investment firm’s new offices, from entrance to CEO suite.',
    services: ['3d-animation-motion-graphics'],
    image: { src: myj, alt: '3D render of the MYJ office entrance facade at dusk' },
  },
  {
    slug: 'cooklane',
    client: 'Cooklane',
    summary: 'An isometric 3D town and cast of characters that explain how cloud retail works.',
    services: ['3d-animation-motion-graphics'],
    image: {
      src: cooklane,
      alt: '3D render of a Cooklane restaurant owner character outside an isometric restaurant',
    },
  },
  {
    slug: 'game-renders',
    client: 'Game renders',
    summary: 'Photoreal vehicles, characters and environments modelled for games.',
    services: ['3d-animation-motion-graphics'],
    image: {
      src: gameRobot,
      alt: '3D render of a futuristic winged robot tank in a laboratory hangar',
    },
  },
  {
    slug: 'cloudkitchens-safety',
    client: 'Cloudkitchens',
    summary:
      'A global safety awareness campaign, with characters and posters kitchen teams remember.',
    services: ['strategy-consulting'],
    image: {
      src: ckSafety,
      alt: 'Cloudkitchens safety poster showing how to use a fire extinguisher, step by step',
    },
  },
  {
    slug: 'cloudkitchens-permitting',
    client: 'Cloudkitchens',
    summary:
      'A permitting playbook that maps approvals across jurisdictions for facilities in the US.',
    services: ['strategy-consulting'],
    image: {
      src: ckPermitting,
      alt: 'Jurisdictional approval process diagram from the Cloudkitchens permitting playbook',
    },
  },
  {
    slug: 'hyperloop-tt',
    client: 'Hyperloop TT',
    summary: 'Customer journey design and 3D visuals for a hyperloop system in Dubai.',
    services: ['strategy-consulting', '3d-animation-motion-graphics'],
    image: {
      src: hyperloop,
      alt: '3D cutaway render of the Hyperloop TT tube and passenger pods on an elevated pylon',
    },
  },
]

export const projectsFor = (service: ServiceSlug) =>
  projects.filter((project) => project.services.includes(service))
