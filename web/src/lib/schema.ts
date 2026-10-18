import type { Link } from '@/types'
import { WEBSITE_URL } from 'astro:env/client'

// schema.org helpers for page-level structured data.
const absolute = (href: string) => new URL(href, WEBSITE_URL).toString()

export const breadcrumbSchema = (items: Link[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    item: absolute(item.href),
  })),
})

export const serviceSchema = (name: string, description: string, href: string) => ({
  '@type': 'Service',
  name,
  description,
  url: absolute(href),
  serviceType: name,
  areaServed: 'Worldwide',
  provider: { '@id': `${absolute('/')}#organization` },
})

export const faqSchema = (items: { question: string; answer: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
})
