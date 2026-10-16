---
name: test-web
description: Test the web application using the agent-browser CLI to ensure a feature is working as expected before making a commit.
argument-hint: [test-description]
---

1. Start the web dev server in the background (if not already running):

   ```bash
   cd web && pnpm dev
   ```

2. Wait for port 4321 to be ready, use a different port if needed.

3. Use agent-browser to test:

   ```bash
   agent-browser open http://localhost:4321
   agent-browser snapshot -i  # Get interactive elements with refs
   agent-browser click @e2    # Click element by ref
   ```

   to see all available commands, run `agent-browser --help`

4. Stop the dev server when done
