# Helping an editor change the website

Most people asking you to change this site are not developers: they want wording, images, links or pages changed, and they approve what they see, not code. For any such request, use the `edit-website` skill (`.claude/skills/edit-website/SKILL.md`) and follow it end to end, every time:

1. Sync with `origin/main` before starting, and help the editor through any merge conflict.
2. If the request is vague, use the `grilling` skill to settle what they want before changing anything.
3. Make the change in the content files listed in the skill's content map.
4. Run the checks, then show before and after screenshots.
5. Open a pull request and share the Render preview link.
6. Merge only after the editor approves, then tell them when the change is live.

Talk to editors in plain language: no file paths, commands or diffs unless they ask. Setup steps and the starter prompt for editors are in `docs/editing-guide.md`.

The rest of this file is for code changes.

# Repository overview

The Blackhat Agency marketing website (`/web`): a static Astro site styled with Tailwind CSS v4, built with pnpm and hosted on Render. There is no CMS: all copy lives in typed data files in `web/src/data/`.

## Commands (run in `web/`)

```bash
pnpm dev      # local dev server on http://localhost:4321
pnpm build    # static build to web/dist
pnpm check    # astro check (types)
pnpm lint     # eslint
pnpm format   # prettier
pnpm screenshot --label after / /contact   # desktop + phone screenshots
```

CI (`.github/workflows/ci.yml`) runs Format, Lint, Type Check and Build on every pull request. Render deploys `main` only after these pass, and builds a preview for every pull request (`render.yaml`).

## Structure

- `web/src/pages/`: routes (`index.astro`, `what-we-do/`, `work/`, `contact.astro`, `404.astro`, `sitemap.xml.ts`, `robots.txt.ts`). Add new pages to the list in `sitemap.xml.ts`.
- `web/src/data/`: all page copy (`home.ts`, `services.ts`, `projects.ts`, `work.ts`, `contact.ts`, `site.ts` for navigation and shared labels). `projects.ts` drives the Work page, project pages, service page work grids and the homepage Selected work.
- `web/src/config.ts`: site name, legal name, contact email, address, social links.
- `web/src/assets/`: wordmark, client logos, and project images grouped by project.
- `web/src/layout/`: `Layout.astro`, `Header.astro` (with the "What we do" menu), `Footer.astro`, `SEOMetadata.astro`, `StructuredData.astro` (Organization + LocalBusiness JSON-LD).
- `web/src/components/ui/`: primitives (`Container`, `PageSection`, `SectionHeader`, `Button`, `ArrowIcon`, `CtaBanner`). Build new pages by composing these.
- `web/src/components/home/`: home page sections.

## SEO

Every page passes a `meta` object (`title`, `description`, optional `noIndex`) to `Layout`. Only production builds (`SITE_ENV=production`) are indexable; preview and local builds send `noindex, nofollow` and a disallow-all `robots.txt`.

## Design system

- **Tokens** live in `web/src/styles.css` (`@theme`), taken from blackhat.agency: `ink` (black ground), `ink-raised` (alternate dark ground), `hairline` (borders), `bone` (white text and light ground), `ash` (secondary text on dark), `graphite` (secondary text on light), `signal` (yellow accent) and `on-signal`. Never hard-code hex values.
- **Type**: Work Sans for everything (`@fontsource-variable/work-sans`), never heavier than medium (500): headings and buttons 500, body 400. Source Serif 4 italic (`@fontsource-variable/source-serif-4`) only for highlight words, written as `*word*` in a data file and rendered by `ui/Highlighted.astro`; at most one per heading, on the most important headings only. Sizes: `text-display-xl` (page h1), `text-display-lg` (statements), `text-display-md` (section h2), `text-lead`, plus the `eyebrow` utility (colour set per section).
- **Accent**: signal yellow marks the main action and small accents only, never as text on light grounds.
- **Brand graphics**: `ui/Wordmark.astro` (the supplied light wordmark, used uncropped), `public/favicon.svg` (the B). Hero imagery gets `ui/Grain.astro` film grain. Sections without imagery take `PageSection graphic="left" | "right"`, which adds `ui/Supergraphic.astro` (hairline grid and the slanted Blackhat star). Use it at most twice per page, one near the top and one near the bottom.
- **Sections**: mostly dark. `PageSection` takes `tone="ink" | "raised" | "light" | "signal"`; light and yellow tones use dark text (`on-light` also darkens focus rings).

## Conventions

- Follow the `astro-components` and `astro-accessibility` skills.
- Components read copy from `web/src/data/`; don't hard-code user-facing text in components.
- Commits follow the `commit` skill (conventional commits, scope `web`).
- Never push to `main` directly; every change goes through a pull request.
