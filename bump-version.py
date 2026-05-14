#!/usr/bin/env python3
"""
Daniel's House — Cache Bust on Deploy
═══════════════════════════════════════════════════════════════════

Stamps every CSS/JS/data asset link in every HTML file with a fresh
YYYYMMDDHHMM version. This forces every browser and CDN to fetch
fresh files on the next page load — no manual cache purges needed.

Runs in two ways:
  1. Manually:    python3 bump-version.py    (or)   ./bump-version.sh
  2. Auto on Netlify: configured in netlify.toml [build] command

What this protects against:
  - Browser cache holding old CSS/JS
  - CDN edge cache (Cloudflare, Netlify CDN, Vercel)
  - Service worker / PWA caches

The HTML files themselves use Cache-Control headers (set in
_headers / netlify.toml) so they're never cached. With both layers
in place, the next page load every user does gets the fresh site.
═══════════════════════════════════════════════════════════════════
"""

import os
import re
import sys
from datetime import datetime
from pathlib import Path

# Site assets that need cache-busting (paths relative to site root)
ASSETS = [
    "styles.css",
    "css/shared.css",
    "css/bundle-expand.css",
    "js/shared.js",
    "js/auth.js",
    "js/chatbot.js",
    "js/bundle-expand.js",
    "data/products.js",
    "data/bundle-details.js",
    "data/ingredients.js",
    "data/faq-data.js",
]


def main():
    # Use UTC if available, else local time — for monotonic version stamps
    version = datetime.now().strftime("%Y%m%d%H%M")

    # Run from script's own directory
    site_root = Path(__file__).parent.resolve()
    os.chdir(site_root)

    print(f"━━━ Cache-bust deploy ━━━")
    print(f"Version stamp: {version}")
    print(f"Site root: {site_root}")
    print()

    html_files = sorted(site_root.glob("*.html"))
    if not html_files:
        print("⚠️  No HTML files found. Did you run this from the site root?")
        sys.exit(1)

    total_replacements = 0
    files_modified = set()

    for asset in ASSETS:
        # Match: href="ASSET"  OR  href="ASSET?v=ANYTHING"
        # (same for src=)
        # Captures the original attribute name so we preserve it (href vs src)
        escaped = re.escape(asset)
        pattern = re.compile(
            r'(href|src)="' + escaped + r'(\?v=[^"]*)?"'
        )
        replacement = lambda m, a=asset, v=version: f'{m.group(1)}="{a}?v={v}"'

        for html_file in html_files:
            content = html_file.read_text()
            new_content, n = pattern.subn(replacement, content)
            if n > 0:
                html_file.write_text(new_content)
                total_replacements += n
                files_modified.add(html_file.name)

    print(f"✓  Stamped {total_replacements} asset references across {len(files_modified)} HTML files")
    print()

    # Show a sample of the new asset URLs
    sample_file = site_root / "index.html"
    if sample_file.exists():
        print("Sample from index.html:")
        sample_content = sample_file.read_text()
        for asset in ASSETS:
            pattern = re.compile(r'(href|src)="' + re.escape(asset) + r'\?v=[^"]*"')
            match = pattern.search(sample_content)
            if match:
                print(f"  {match.group()}")

    print()
    print("✓  Cache-bust complete. Deploy the site now and every")
    print("   user will fetch fresh assets on their next page load.")


if __name__ == "__main__":
    main()
