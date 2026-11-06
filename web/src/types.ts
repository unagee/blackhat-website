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
  | { type: 'image'; image: Picture }
  // Sources in order of preference; the browser plays the first it supports whose media matches.
  | { type: 'video'; sources: { src: string; type: string; media?: string }[]; poster: Picture }

export type NavMenu = {
  label: string
  columns: { title: string; links: Link[] }[]
  footerLink: Link
}

// Two-pane menu: a list of groups on the left; the hovered or focused group's items show on the right.
export type NavPanes = {
  label: string
  hint: string
  groups: (Link & { lead: string; items: { title: string; body: string }[] })[]
  footerLink: Link
}

export type NavItem = Link | NavMenu | NavPanes

// Section grounds: dark (default), slightly raised dark, white, or brand yellow.
// Supergraphic shapes: see ui/Supergraphic.astro.
export type Pattern = 'cells' | 'slash' | 'split' | 'star'

// white and grey: sections built for the dark ground, shown light (see .theme-white in styles.css).
export type Tone = 'ink' | 'raised' | 'light' | 'signal' | 'white' | 'grey'
