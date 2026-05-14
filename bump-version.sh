#!/usr/bin/env bash
# ───────────────────────────────────────────────────────────────────
# Daniel's House — Cache Bust on Deploy (wrapper)
# ───────────────────────────────────────────────────────────────────
# Delegates to bump-version.py. Runs automatically in Netlify builds
# (via netlify.toml) and can also be run manually before commits.
#
# Manual use:  ./bump-version.sh
# ───────────────────────────────────────────────────────────────────
set -e
cd "$(dirname "$0")"
if command -v python3 >/dev/null 2>&1; then
  python3 bump-version.py
else
  python bump-version.py
fi
