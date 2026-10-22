import type { ImageMetadata } from 'astro'

export type Link = {
  label: string
  href: string
}

export type PageMeta = {
  title: string
  description?: string
  noIndex?: boolean
}

export type Picture = {
  src: ImageMetadata
  alt: string
}

// Hero background: a still image, or a video reel with a poster still.
// The poster shows while the video loads, and instead of it for reduced-motion visitors.
export type HeroMedia =
  { type: 'image'; image: Picture } | { type: 'video'; src: string; poster: Picture }

export type NavMenu = {
  label: string
  columns: { title: string; links: Link[] }[]
  footerLink: Link
}

export type NavItem = Link | NavMenu

// Section grounds: dark (default), slightly raised dark, white, or brand yellow.
// Supergraphic shapes: see ui/Supergraphic.astro.
export type Pattern = 'cells' | 'slash' | 'split' | 'star'

export type Tone = 'ink' | 'raised' | 'light' | 'signal'
