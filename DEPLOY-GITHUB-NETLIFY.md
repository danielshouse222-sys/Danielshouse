# Deploy: GitHub → Netlify

## TL;DR

**Push to GitHub.** That's the whole deploy. Cache-busting happens automatically on Netlify's side.

```bash
git add .
git commit -m "Update product copy"
git push
```

Within 30–90 seconds the live site at danielshousewellness.com is fresh — for every user, no waiting, no cache purges, no hard refreshes.

---

## What Happens When You Push

```
1. You push to GitHub.
   ↓
2. Netlify detects the push (it watches your repo).
   ↓
3. Netlify spins up a build container.
   ↓
4. Netlify runs: bash bump-version.sh
   → bump-version.py stamps a fresh ?v=YYYYMMDDHHMM on every CSS/JS/data asset
   → 222 asset references updated across 27 HTML files
   ↓
5. Netlify uploads the built site to its global CDN.
   ↓
6. Netlify invalidates its own edge cache instantly (automatic).
   ↓
7. The next user request fetches the new HTML, which references
   new ?v=... URLs, which forces a fresh fetch of every asset.
```

**Time: ~30–90 seconds end-to-end.** No manual steps.

---

## One-Time Netlify Setup (if not already done)

If your site isn't yet connected to Netlify, do this once:

1. Log in to **app.netlify.com**
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** → authorize → pick your repo
4. **Build settings** — Netlify will auto-detect the `netlify.toml` file. Don't override:
   - Build command: `bash bump-version.sh` (already in netlify.toml)
   - Publish directory: `.` (already in netlify.toml)
5. Click **"Deploy site"**

Netlify gives you a random subdomain like `radiant-cobbler-abc123.netlify.app`. Then under **Domain settings**, add your custom domain `danielshousewellness.com` and follow Netlify's DNS instructions (about 5 minutes of work).

---

## Daily Workflow

### Make a change

```bash
# Edit any file (HTML, CSS, JS, data, image)
# For example, change a price in data/products.js

git status                              # See what changed
git add data/products.js                # Stage your changes
git commit -m "Update Boost price"      # Commit with a clear message
git push                                # Push to GitHub
```

### Watch it deploy

Go to **app.netlify.com** → your site → **Deploys** tab. You'll see your push trigger a new deploy. Click on it to watch the build log in real time. About 30 seconds in, you'll see:

```
$ bash bump-version.sh
━━━ Cache-bust deploy ━━━
Version stamp: 202605142030
✓  Stamped 222 asset references across 27 HTML files
✓  Cache-bust complete.
```

When the build finishes (status: **Published**), the site is live. Open it in incognito to verify.

---

## What If I Edit Locally and Want to Test First?

Run the bump script locally, then preview:

```bash
./bump-version.sh     # Stamp fresh versions
python3 -m http.server 8000   # Open http://localhost:8000 to preview
```

When happy:
```bash
git add .
git commit -m "..."
git push
```

You don't need to commit the version stamps locally — Netlify will re-bump on its own during the build. Either way works (committing version stamps to GitHub is fine; not committing them is fine).

---

## Branch Previews

Netlify creates a unique preview URL for every Git branch you push. This is incredibly powerful:

```bash
git checkout -b new-pricing-test
# Make changes
git push -u origin new-pricing-test
```

Netlify will deploy this to a separate URL like:
`new-pricing-test--danielshousewellness.netlify.app`

You can share this with mom (or your team) to get feedback before merging to main. Once approved, merge to main and it goes to production.

The `netlify.toml` already configures branch deploys to have `INDEXABLE=false` so Google won't accidentally index your in-progress work.

---

## Emergency Cache Purge

99% of the time you don't need this — Netlify auto-invalidates on every deploy. But if a user reports seeing an old version:

1. **app.netlify.com** → your site → **Deploys** tab
2. Click the latest deploy
3. Click **"Trigger deploy"** → **"Clear cache and deploy site"**

This forces every CDN edge node to drop its cached copy.

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| Build fails with "python3: command not found" | Build container doesn't have Python (rare on Netlify) | Edit `netlify.toml` → change `command = "bash bump-version.sh"` to `command = "true"` to skip auto-bump. Then run `./bump-version.sh` locally before each push. |
| Build fails with permission denied on `bump-version.sh` | File isn't executable in the repo | Run `chmod +x bump-version.sh` then commit + push |
| User sees old site after deploy | Browser cached HTML (rare with our headers) | Tell them to do one hard refresh (Ctrl+Shift+R). After that, they're permanently on the new version. |
| User sees old site after deploy | Aggressive ISP-level cache (very rare) | Wait 1-2 hours, or use the Netlify cache-clear deploy option above. |

---

## Don't Commit These to GitHub

The `.gitignore` already excludes:

- `node_modules/` (Node packages)
- `.env` files (API keys — never commit these!)
- `.DS_Store` (macOS clutter)
- `*.zip` (build outputs)
- `screenshots/` and `site-preview/` (local previews)

If you accidentally commit one (especially `.env`), see GitHub's guide on [removing sensitive data](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository).

---

## Files That Make This Work

| File | What it does |
|---|---|
| **`netlify.toml`** | Tells Netlify to run `bump-version.sh` on every build + sets cache headers |
| **`bump-version.py`** | The Python script that stamps fresh versions on assets |
| **`bump-version.sh`** | Bash wrapper for `bump-version.py` (Netlify's build command runs this) |
| **`_headers`** | Backup cache rules (netlify.toml takes precedence but both work) |
| **`.gitignore`** | Tells Git which files to never upload |

---

## Why Netlify Is Great for This

- **Free tier** handles your traffic levels indefinitely
- **Atomic deploys** — every deploy is a complete snapshot, no in-between state
- **Instant rollback** — see a bug? Click "Publish deploy" on any previous deploy to roll back in seconds
- **HTTPS automatic** — SSL certs renew themselves, no manual work
- **Branch previews** — every PR/branch gets its own URL
- **Global CDN** — your site is fast from every continent
- **DDoS protection** — built-in
- **Form handling** — your waitlist form can post to Netlify Forms without a backend (configure this when you launch)

---

## Next Steps (Optional)

When you're ready, two Netlify features to enable:

1. **Netlify Forms** for the waitlist — add `netlify` attribute to the form in `js/shared.js` and Netlify will collect emails for you, free, no Klaviyo needed yet
2. **Netlify Identity** for the customer login on `signin.html` — free auth, no Auth0/Firebase needed

But you don't need these to launch the marketing site.
