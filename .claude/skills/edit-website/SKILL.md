---
name: edit-website
description: The workflow for changing the Blackhat Agency website on behalf of a non-technical editor. Use for every request to change wording, images, links or pages, from setup check through preview, merge and confirming the change is live.
---

# Editing the website for an editor

The person you are helping is not a developer. They approve what they see, never code. Follow every step below for every change, in order. Speak in plain language: no file paths, commands, branch names or diffs unless they ask.

Reference files in this folder:

- `content-map.md`: which file holds the words and images for each page, and the site addresses.
- `conflicts.md`: how to walk the editor through a merge conflict.
- `design-and-voice.md`: how the site looks and sounds.

## 0. Setup check (first request of a session only)

Confirm quietly, and only mention what is broken:

1. `git fetch origin main` works.
2. Dependencies are installed and `web/.env` exists (the SessionStart hook does both; if not, run `pnpm install` and copy `web/.env.example` to `web/.env`).
3. You can reach GitHub to open and merge pull requests.
4. You can open `onrender.com` (`curl -sI` the live URL from `content-map.md`). If the network blocks it, tell the editor to add `onrender.com` (and the live domain, once there is one) to their environment's allowed domains (see `docs/editing-guide.md`), and carry on with screenshots only.

## 1. Sync with main

- **New request**: `git fetch origin main`, then start a fresh branch from `origin/main` (the branch name the session assigned, recreated from `origin/main`, or `edit/<short-topic>`). If the current branch still has an open pull request, ask whether the new request belongs to it.
- **Changing an open pull request**: `git fetch origin main && git merge origin/main` on its branch before editing.
- Merge conflict at any point: follow `conflicts.md`.

## 2. Understand the request

Restate the request in one sentence and name the pages it affects. Find the right file with `content-map.md`.

If the request is clear and small, go ahead. If it is vague or leaves real choices open ("make the home page more exciting", "add a case studies page"), use the `grilling` skill first: ask numbered questions in plain language with your recommended answer for each, and look up facts in the repo yourself. Start only after the editor confirms.

## 3. Screenshot before

```bash
cd web && pnpm screenshot --base <live site URL> --label before --out ../screenshots / /contact
```

Pass the page paths that will change. Each gets a desktop and a phone screenshot.

## 4. Make the change

- Edit content in the files listed in `content-map.md`, following `design-and-voice.md`.
- Keep text lengths close to the original unless asked, so layouts don't break.
- Adding, removing or renaming a page: update the list in `web/src/pages/sitemap.xml.ts` and the content map; a removed or renamed page gets a redirect in `render.yaml` (`routes:` with `type: redirect`). Tell the editor in one line.
- If the request needs a code change (a new section type, a layout change, a new page template), say in plain words that it changes how the site is built and flag it on the pull request. Then follow `CLAUDE.md`.

## 5. Check

Run from `web/` and fix anything that fails before telling the editor anything:

```bash
pnpm format && pnpm lint && pnpm check && pnpm build
```

## 6. Screenshot after and show the editor

```bash
cd web && (pnpm preview --port 4321 &) && sleep 3 && pnpm screenshot --label after --out ../screenshots / /contact
```

Look at every screenshot yourself first. Then show the editor before and after for each page. If the session can't display images to them, publish a private page with the images (an artifact) and send that link. Never commit `screenshots/`.

## 7. Open the pull request

Commit with a plain conventional message (`docs(web): update home page headline`), push the branch, and open a pull request using `.github/pull_request_template.md`, written for a non-technical reader. Tick "changes how the site is built" if anything outside the content files changed.

## 8. Share the preview link

Render builds a preview of every pull request. Find its address in Render's comment or deployment on the pull request; otherwise it follows the pattern in `content-map.md`. Poll every 30 seconds (up to 15 minutes) until it shows the change, then send the editor a direct link to each changed page and ask them to reply "looks good" or say what to adjust. Tweaks go on the same pull request: back to step 4.

## 9. Merge, only after the editor approves

1. `git fetch origin main`. If main moved, merge it in, re-run step 5, and re-share screenshots and preview if the affected pages changed.
2. Make sure the pull request's checks are green. Never merge red.

Then merge the pull request (a normal merge, never a force push to main).

## 10. Confirm it's live

Render deploys `main` once the checks on the merge commit pass. Watch the live site for up to 20 minutes:

```bash
timeout 1200 bash -c 'until curl -fsS "<live page URL>" | grep -qF "<a distinctive phrase>"; do sleep 30; done'
```

Then tell the editor "Your change is live", with links. If it doesn't appear, say plainly that it isn't live yet and comment on the merged pull request with what you saw.

## Undo

Revert the merge commit on a fresh branch from `origin/main` (`git revert -m 1 <merge commit>`) and run steps 5 onward.

## Never

- Push to main, force push, rebase or rewrite history.
- Merge without the editor's approval in this conversation.
- Drop someone else's change to resolve a conflict without the editor choosing.
- Edit `render.yaml`, `.github/`, `.claude/` or dependencies unless the editor explicitly asks, except a redirect for a removed or renamed page (flag it on the pull request).
