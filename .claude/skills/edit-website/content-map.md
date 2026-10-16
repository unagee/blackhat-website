# Content map

Keep this file up to date: when a page or section is added, add a row.

## Site addresses

| What                  | Address                                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Live site             | https://blackhat-website.onrender.com (update when a custom domain is connected)                                          |
| Pull request previews | Render's comment or deployment on the pull request; otherwise usually `https://blackhat-website-pr-<number>.onrender.com` |
| Local preview         | http://localhost:4321 after `pnpm build && pnpm preview` in `web/`                                                        |

## Pages

All paths are relative to `web/src/`.

| Page                                   | Address      | Words live in                              |
| -------------------------------------- | ------------ | ------------------------------------------ |
| Home: page title and search snippet    | `/`          | `data/home.ts` (`meta`)                    |
| Home: top banner, headline, buttons    | `/`          | `data/home.ts` (`hero`)                    |
| Home: services                         | `/#services` | `data/home.ts` (`services`)                |
| Home: how we work                      | `/#approach` | `data/home.ts` (`approach`)                |
| Home: closing banner                   | `/`          | `data/home.ts` (`cta`)                     |
| Contact page                           | `/contact`   | `data/contact.ts` (`contactPage`)          |
| Page not found                         | any missing  | `pages/404.astro`                          |
| Header links, tagline, button, labels  | every page   | `data/site.ts`                             |
| Site name, contact email, social links | every page   | `config.ts`                                |

## Images

| What                          | Where                   |
| ----------------------------- | ----------------------- |
| Favicon                       | `web/public/`           |
| Images used by pages (future) | `web/src/assets/`       |
