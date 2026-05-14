# Daniel's House — Cache & Deploy Strategy

## TL;DR

**Every deploy, run this one command:**
```
./bump-version.sh
```

Then upload the site. Every user will fetch the new version on their next page load — no waiting for browser cache to expire, no "hard refresh" needed.

---

## How Caching Causes Stale Sites

When you upload new files to your hosting, users don't always see them right away. Three caches stand between your server and your user:

| Layer | Lives | Common TTL Default |
|---|---|---|
| **Browser cache** | On user's device | Days to weeks |
| **CDN edge cache** | Cloudflare/Vercel/Netlify edge servers | Hours to days |
| **Hosting cache** | Your origin server (sometimes) | Varies |

A user opening danielshousewellness.com gets the **first** cached copy any of these layers has. If that copy is from yesterday, they see yesterday's site.

---

## The Fix: Two Layers of Defense

### Layer 1: Cache-Busting Query Strings (`?v=...`)

Every CSS, JS, and data file is loaded with a version stamp in the URL:

```html
<link rel="stylesheet" href="css/shared.css?v=202605140018">
<script src="js/shared.js?v=202605140018"></script>
```

When the version changes, the URL is **technically different**, so every cache treats it as a brand-new file and fetches from origin. This is the industry-standard "cache busting" approach.

The `bump-version.sh` script:
- Generates a timestamp like `202605140018` (YYYYMMDDHHMM)
- Replaces every `?v=...` in every HTML file with that new stamp
- Adds version stamps to assets that were missing them

**Run `./bump-version.sh` before every deploy.**

### Layer 2: Proper HTTP Cache Headers

The CSS/JS cache-bust only works if the HTML pages themselves aren't cached. If a user gets a cached HTML from yesterday, they get yesterday's version stamps in it.

To prevent HTML caching, configure your hosting to send:
```
Cache-Control: public, max-age=0, must-revalidate
```
on every HTML response.

Config files for each major host are included in this folder:

| Host | Config File |
|---|---|
| **Netlify** | `_headers` (Netlify reads this automatically) |
| **Vercel** | `vercel.json` (Vercel reads this automatically) |
| **Cloudflare Pages** | `_headers` (same as Netlify) + see `CLOUDFLARE-RULES.md` |
| **Apache / cPanel / GoDaddy / Bluehost** | `.htaccess` |
| **Nginx (VPS)** | `nginx.conf.example` |
| **Shopify** | Built-in — Shopify handles this for you |
| **Squarespace / Wix** | Built-in — you can't override their caching |

---

## Standard Deploy Workflow

```bash
# 1. Make your changes (HTML, CSS, JS, data)
# 2. Bump the cache-bust version
./bump-version.sh

# 3. Zip the site
zip -rq danielshouse-site.zip . -x "node_modules/*" ".git/*" "*.DS_Store"

# 4. Upload to your host
# 5. (Optional) Purge CDN cache from your host's dashboard
```

---

## What Each Asset Gets Cached For

| Asset Type | Cache Duration | Why |
|---|---|---|
| `*.html` | 0 seconds | Always fetch fresh — this is the entry point |
| `*.css?v=...` | 1 year | URL changes on deploy → fresh fetch when needed |
| `*.js?v=...` | 1 year | Same as CSS |
| `images/*.jpeg` | 30 days | Product photos don't change often |
| `fonts/*` | 1 year | Fonts essentially never change |

If you rename an image file (like swapping a product photo), users will see the new image immediately — but only if you also rename the file (e.g., `boost-v2.jpeg` instead of overwriting `boost.jpeg`). To force cache-bust on a specific image, give it a new filename.

---

## "But the CDN Still Shows the Old Version!"

If your host is behind Cloudflare, Fastly, or another global CDN, the edge cache can persist independently. Two options:

1. **Wait** — the CDN's edge TTL expires on its own (usually 1-4 hours for HTML if headers are right)
2. **Manual purge** — most CDNs let you "Purge Everything" from their dashboard

For Cloudflare specifically: Dashboard → Caching → Configuration → Purge Everything. Do this after every deploy if you're not seeing changes.

---

## Mobile and Service Worker Caches

Some browsers (especially mobile Safari and Chrome) cache aggressively for offline use. If a user has the site "installed" as a Progressive Web App or recently visited, they may have a service worker holding old assets. The `?v=...` query string still works here — service workers in this codebase don't intercept versioned URLs.

The cache-control meta tags in every HTML file (`<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">`) add an extra safety net on the client side.

---

## Quick Test: Did the Cache Bust Work?

After deploy, open the live site in an incognito window. Then open dev tools (F12) → Network tab → reload. Look at the request URLs:

- ✓ If you see `shared.js?v=202605140018` (your latest stamp), cache-bust worked.
- ✗ If you see `shared.js?v=202602010931` (an old stamp), the HTML was cached — check your hosting headers.

---

## Files in This Folder

```
bump-version.sh          ← Run before every deploy
_headers                 ← Netlify / Cloudflare Pages
vercel.json              ← Vercel
.htaccess                ← Apache / cPanel / GoDaddy / Bluehost
nginx.conf.example       ← Nginx (VPS)
CLOUDFLARE-RULES.md      ← Cloudflare Page Rules
DEPLOY.md                ← This file
```
