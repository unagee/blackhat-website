#!/bin/bash
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "$CLAUDE_PROJECT_DIR"

pnpm install --frozen-lockfile

if [ ! -f web/.env ]; then
  cp web/.env.example web/.env
fi

git fetch origin main --quiet || true
