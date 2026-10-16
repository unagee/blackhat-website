import type { Link } from '@/types'

// Home page copy. Placeholder wording: rewrite it to match the agency's real offer.
export const home = {
  meta: {
    title: 'Blackhat Agency | Growth, content and performance marketing',
    description:
      'Blackhat Agency plans and runs growth, content and paid media for ambitious B2B brands.',
  },
  hero: {
    eyebrow: 'Growth marketing agency',
    title: 'Marketing that ships, measures and compounds.',
    lead: 'We plan, make and run the content, campaigns and reporting that turn attention into pipeline.',
    primary: { label: 'Start a project', href: '/contact' } satisfies Link,
    secondary: { label: 'See what we do', href: '/#services' } satisfies Link,
  },
  services: {
    eyebrow: 'Services',
    title: 'One team from strategy to reporting',
    items: [
      {
        title: 'Content and social',
        body: 'Blog posts, carousels and LinkedIn programs built around a clear editorial theme.',
      },
      {
        title: 'Performance media',
        body: 'Google Ads and paid social campaigns with clean tracking and weekly optimization.',
      },
      {
        title: 'Websites and SEO',
        body: 'Fast marketing sites, information architecture and off-page SEO that earns links.',
      },
      {
        title: 'Reporting',
        body: 'GA4 and ad platform data turned into decks your leadership will actually read.',
      },
    ],
  },
  approach: {
    eyebrow: 'Approach',
    title: 'How we work',
    steps: [
      {
        title: 'Audit',
        body: 'We map where you are today: channels, data, content and competitors.',
      },
      {
        title: 'Plan',
        body: 'A focused quarter plan with goals, owners and the numbers that matter.',
      },
      { title: 'Ship', body: 'We make and launch the work, in small batches you review as we go.' },
      { title: 'Measure', body: 'Regular reports show what moved, and what we change next.' },
    ],
  },
  cta: {
    title: 'Have a project in mind?',
    body: 'Tell us what you are trying to grow. We reply within two working days.',
    link: { label: 'Get in touch', href: '/contact' } satisfies Link,
  },
}
