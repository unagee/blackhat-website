# Blackhat Agency website

The marketing website for Blackhat Agency. It is a static [Astro](https://astro.build/) site in `web/`, styled with [Tailwind CSS](https://tailwindcss.com/). All content lives in this repository, so changes go through pull requests and Render preview deployments.

**Not a developer?** You can change the site by asking Claude. See [Editing the website with Claude](docs/editing-guide.md).

## Getting started

Requirements: Node.js 22 and pnpm (version pinned in `package.json`).

1. `pnpm install`
2. Copy `web/.env.example` to `web/.env`.
3. Run `pnpm dev` in `web` and open http://localhost:4321.

## Commands (from `web/`)

| Command       | What it does                   |
| ------------- | ------------------------------ |
| `pnpm dev`    | Start the local dev server     |
| `pnpm build`  | Build the static site          |
| `pnpm check`  | Type-check Astro files         |
| `pnpm lint`   | Lint the source files          |
| `pnpm format` | Format the source files        |

## Where content lives

- Home page copy: `web/src/data/home.ts`
- Contact page copy: `web/src/data/contact.ts`
- Navigation, tagline, shared labels: `web/src/data/site.ts`
- Site name, contact email, social links: `web/src/config.ts`

## Hosting

Deployed to [Render](https://render.com/) as a static site defined in `render.yaml`. Merging to `main` deploys to production once GitHub checks pass, and every pull request gets its own preview URL.
