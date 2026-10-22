import { contactPage } from '@/data/contact'
import { home } from '@/data/home'
import { projectHref, projects } from '@/data/projects'
import { serviceHref, serviceNames, services, whatWeDo } from '@/data/services'
import { workPage } from '@/data/work'
import type { APIRoute } from 'astro'

// The site search index: every page, service and project, read by the header search.
export type SearchEntry = {
  title: string
  kind: string
  description: string
  url: string
  keywords: string
}

const strip = (text: string) => text.replace(/\*/g, '')

// Extra words so industry searches find projects (an investment firm is a finance client).
const industryWords: Record<string, string> = {
  Investment: 'finance financial institutions',
  'Energy technology': 'energy technology innovation',
  'Food and hospitality': 'healthcare safety training hospitality',
  Hospitality: 'luxury hospitality restaurant',
  'Luxury lifestyle': 'luxury',
}

export const GET: APIRoute = () => {
  const entries: SearchEntry[] = [
    {
      title: 'Home',
      kind: 'Page',
      description: home.meta.description,
      url: '/',
      keywords: strip(home.hero.title),
    },
    {
      title: 'What We Do',
      kind: 'Page',
      description: whatWeDo.meta.description,
      url: '/what-we-do',
      keywords: 'services plan design maintenance engagement',
    },
    ...services.map((service) => ({
      title: service.name,
      kind: 'Service',
      description: service.summary,
      url: serviceHref(service.slug),
      keywords: [
        service.hero.lead,
        ...service.offerings.items.map((item) => item.title),
        ...service.process.steps.map((step) => step.title),
      ].join(' '),
    })),
    {
      title: workPage.eyebrow,
      kind: 'Page',
      description: workPage.meta.description,
      url: '/work',
      keywords: 'projects portfolio case studies',
    },
    ...projects.map((project) => ({
      title: project.client,
      kind: 'Project',
      description: project.summary,
      url: projectHref(project.slug),
      keywords: [
        project.title,
        project.sector,
        industryWords[project.sector] ?? '',
        serviceNames(project.services),
        ...project.overview,
      ].join(' '),
    })),
    {
      title: contactPage.eyebrow,
      kind: 'Page',
      description: contactPage.meta.description ?? '',
      url: '/contact',
      keywords: 'email address enquiry start a project',
    },
  ]

  return new Response(JSON.stringify(entries), {
    headers: { 'Content-Type': 'application/json' },
  })
}
