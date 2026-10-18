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

| Page                                     | Address        | Words live in                                        |
| ---------------------------------------- | -------------- | ---------------------------------------------------- |
| Home: page title and search snippet      | `/`            | `data/home.ts` (`meta`)                              |
| Home: hero headline, buttons, background | `/`            | `data/home.ts` (`hero`, background in `heroMedia`)   |
| Home: services cards (01–03)             | `/#services`   | `data/home.ts` (`services`); names in `data/site.ts` |
| Home: client logo strip                  | `/`            | `data/home.ts` (`clients`)                           |
| Home: "What do you need…" prompt         | `/`            | `data/home.ts` (`prompt`)                            |
| Home: featured project (Hyperloop TT)    | `/`            | `data/home.ts` (`featured`)                          |
| Home: selected work cards                | `/#work`       | `data/home.ts` (`work`)                              |
| Home: who we work with (white section)   | `/#industries` | `data/home.ts` (`industries`)                        |
| Home: full-width image and caption       | `/`            | `data/home.ts` (`showcase`)                          |
| Home: closing contact (yellow section)   | `/#contact`    | `data/home.ts` (`contact`)                           |
| Contact page                             | `/contact`     | `data/contact.ts` (`contactPage`)                    |
| Page not found                           | any missing    | `pages/404.astro`                                    |
| Header menu, footer links, labels        | every page     | `data/site.ts`                                       |
| Company name, email, address, socials    | every page     | `config.ts`                                          |

To switch the home hero to the video reel: put the video in `web/public/video/`, then in `data/home.ts` change `heroMedia` to `{ type: 'video', src: '/video/reel.mp4', poster: { src: myjLobby, alt: '…' } }`.

## Images

| What                                   | Where                            |
| -------------------------------------- | -------------------------------- |
| Favicon                                | `web/public/`                    |
| Blackhat wordmark                      | `web/src/assets/logos/`          |
| Client logos (black on transparent)    | `web/src/assets/logos/partners/` |
| Project images, one folder per project | `web/src/assets/work/<project>/` |
| Service process diagrams               | `web/src/assets/services/`       |
