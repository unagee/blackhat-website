# Editing the website with Claude

You can change the website's wording, images, links and pages by asking Claude in plain English. Claude makes the change, shows you screenshots and a preview of the site, and only publishes it after you say it looks good.

## One-time setup

1. **GitHub access.** Ask the repository owner to invite your GitHub account to `unagee/blackhat-website` with **Write** access, and accept the invitation email.
2. **Claude.** Go to [claude.ai/code](https://claude.ai/code) (or the Code tab in the Claude desktop app) and connect your GitHub account when asked.
3. **Choose the repository.** Pick `unagee/blackhat-website` for your session.
4. **Allow the preview sites.** In the environment settings for your session, set **Network access** to **Custom**, keep the default package managers, and add `onrender.com` (plus the site's own domain once it has one). See [Claude's cloud environment docs](https://code.claude.com/docs/en/cloud-environments#network-access).

## Starting a session

Start a new session with `unagee/blackhat-website` selected and paste this as your first message:

```text
You're helping me edit the Blackhat Agency website (unagee/blackhat-website). I'm not a developer, so explain things in plain language and don't show me code unless I ask.

For every change I ask for, follow the editor workflow in this repo's CLAUDE.md and the edit-website skill: show me screenshots and the preview link before anything goes live, and only merge when I say it looks good. After merging, tell me when the change is live.

Start by checking that I'm set up, then ask me what I'd like to change.
```

## What happens next

1. If your request leaves choices open, Claude asks a few numbered questions, each with its recommendation. Answer them, or reply "go with your recommendations".
2. Claude makes the change and checks nothing is broken.
3. It shows you before and after screenshots on desktop and phone.
4. It sends you a preview link of the whole site with your change.
5. Reply "looks good" to publish, or tell Claude what to adjust.
6. After you approve, Claude publishes and tells you when it's live.

## For the site owner

One-time settings that make this safe:

- **Render:** New → Blueprint, pick this repository. Render reads `render.yaml`, creates the static site and turns on pull request previews.
- **GitHub branch protection on `main`:** require a pull request before merging, require the Format, Lint, Type Check and Build checks, and block force pushes.
- Invite each editor with **Write** access.
