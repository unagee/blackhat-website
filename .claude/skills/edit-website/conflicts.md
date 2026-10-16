# Merge conflicts

A conflict means someone else changed the same lines since this edit started. The editor decides what to keep for content; you handle the mechanics.

1. Tell the editor in plain words: "Someone else changed the same part of the <page> since I started. I need you to pick which version to keep."
2. For each conflicting spot, show both versions as a reader would see them:
   - **Already on the site (from main):** the other person's wording.
   - **Your change:** the editor's wording.
   - **Combined (suggested):** only when both can sensibly live together.
3. Ask which to keep. Never pick for them.
4. Apply the choice, remove every conflict marker, and run `pnpm format && pnpm lint && pnpm check && pnpm build` in `web/`.
5. Commit the merge, push, and send fresh screenshots and the preview link before asking for approval again.

If the conflict is in code (components, layout, styles, `render.yaml`, `.github/`, dependencies or `pnpm-lock.yaml`), don't ask the editor to choose: run `git merge --abort`, tell them it needs the site owner, and comment on the pull request with the files involved.
