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

| Page                                                                             | Address                                                                                                            | Words live in                                                                                     |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| Home: page title and search snippet                                              | `/`                                                                                                                | `data/home.ts` (`meta`)                                                                           |
| Home: hero headline, buttons, background                                         | `/`                                                                                                                | `data/home.ts` (`hero`, background in `heroMedia`)                                                |
| Home: services cards (01–03)                                                     | `/#services`                                                                                                       | `data/home.ts` (`services`); names in `data/site.ts`                                              |
| Home: client logo strip                                                          | `/`                                                                                                                | `data/home.ts` (`clients`)                                                                        |
| Home: "What do you need…" prompt                                                 | `/`                                                                                                                | `data/home.ts` (`prompt`)                                                                         |
| Home: featured projects (Energend, Waves)                                        | `/`                                                                                                                | `data/home.ts` (`featured.items`)                                                                 |
| Home: who we work with (white section)                                           | `/#industries`                                                                                                     | `data/home.ts` (`industries`)                                                                     |
| Home: full-width image and caption                                               | `/`                                                                                                                | `data/home.ts` (`showcase`)                                                                       |
| What we do overview                                                              | `/what-we-do`                                                                                                      | `data/services.ts` (`whatWeDo`)                                                                   |
| Service pages: title, hero, intro, "What we can help with", process, prompt, FAQ | `/what-we-do/brand-visual-identity`, `/what-we-do/3d-animation-motion-graphics`, `/what-we-do/strategy-consulting` | `data/services.ts` (one block per service)                                                        |
| Service pages: shared labels                                                     | all three                                                                                                          | `data/services.ts` (`servicePage`)                                                                |
| Projects shown on service pages                                                  | service pages                                                                                                      | `data/projects.ts` (which services each project belongs to)                                       |
| Yellow closing contact section                                                   | most pages                                                                                                         | `data/site.ts` (`contact`)                                                                        |
| Work page (title, filters)                                                       | `/work`                                                                                                            | `data/work.ts` (`workPage`)                                                                       |
| Project pages: headline, summary, overview, gallery, search snippet              | `/work/<project>`                                                                                                  | `data/projects.ts` (one block per project; images in `assets/work/<project>/`)                    |
| Project page labels                                                              | all projects                                                                                                       | `data/work.ts` (`projectPage`)                                                                    |
| Home: Selected work projects and their homepage images                           | `/#work`                                                                                                           | `data/home.ts` (`work.projects`: slug and image)                                                  |
| What we do: Design / Execute cards                                                   | `/what-we-do#engage`                                                                                               | `data/services.ts` (`engagement`)                                                                 |
| What we do: enquiry form labels                                                  | `/what-we-do#enquiry`                                                                                              | `data/services.ts` (`enquiry`)                                                                    |
| Service pages: animated process diagrams                                         | service pages                                                                                                      | step text in `data/services.ts` (`process.steps`); animation set by `process.motion`              |
| Project films (YouTube)                                                          | `/work/<project>`                                                                                                  | `data/projects.ts` (`video.youtubeId`)                                                            |
| Header search: labels and hint                                                   | every page                                                                                                         | `data/site.ts` (`labels.search…`); results come from page, service and project data automatically |
| Contact page                                                                     | `/contact`                                                                                                         | `data/contact.ts` (`contactPage`)                                                                 |
| Page not found                                                                   | any missing                                                                                                        | `pages/404.astro`                                                                                 |
| Header menu, footer links, labels                                                | every page                                                                                                         | `data/site.ts`                                                                                    |
| Company name, email, address, socials                                            | every page                                                                                                         | `config.ts`                                                                                       |

The home hero plays the Blackhat reel from `web/public/video/`, listed in `heroMedia` in `data/home.ts`. To replace it, re-encode the new video as H.264 MP4 and VP9 WebM, each at 1920px and 960px wide (phones get the smaller ones), with no audio; desktop H.264 at CRF 23, and keep a still from it as the poster.

## Images

| What                                   | Where                            |
| -------------------------------------- | -------------------------------- |
| Favicon                                | `web/public/`                    |
| Blackhat wordmark                      | `web/src/assets/logos/`          |
| Client logos (black on transparent)    | `web/src/assets/logos/partners/` |
| Project images, one folder per project | `web/src/assets/work/<project>/` |
| Service process diagrams               | `web/src/assets/services/`       |

## Redirects

Old blackhat.agency addresses (`/services`, `/branding-visual-identity`, `/animation`, `/strategy`) redirect to the new service pages via `routes` in `render.yaml`.
