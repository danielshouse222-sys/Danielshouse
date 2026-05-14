# Daniel's House — Cloudflare cache configuration
#
# As of mid-2024, Cloudflare DEPRECATED Page Rules in favor of Cache Rules,
# Configuration Rules, and Redirect Rules. New zones don't get Page Rules
# on the free plan. Existing Page Rules still work but should be migrated.
# This doc is written for the modern Cache Rules interface.
#
# Reference: https://developers.cloudflare.com/cache/how-to/cache-rules/

# ═══════════════════════════════════════════════════════════════════
#  HOW CACHE RULES EVALUATE (this is important — opposite of Page Rules)
# ═══════════════════════════════════════════════════════════════════
#
# Page Rules: FIRST match wins. Most-specific rule at the top.
# Cache Rules: LAST match wins. Multiple rules can match the same URL
#              and they all apply in order, so the LAST one overrides
#              earlier ones. Specific overrides go at the BOTTOM.
#
# Example: a request for /data/products.js could match both a /js/* rule
# and a /data/* rule. With Cache Rules, the /data/* rule wins ONLY if it
# is placed BELOW the /js/* rule.

# ═══════════════════════════════════════════════════════════════════
#  REQUIRED CACHE RULE — bypass /data/* (the only rule we strictly need)
# ═══════════════════════════════════════════════════════════════════
#
# The /data/*.js content files (products, bundle-details, faq-data,
# ingredients) change between deploys and we want updates visible
# immediately. Origin _headers sets `no-cache, must-revalidate` on them,
# but Cloudflare's edge will cache them anyway unless we tell it not to.
#
# In the dashboard:
#   Caching → Cache Rules → Create rule
#   Rule name: Bypass cache for /data/
#   When incoming requests match:
#     Field:    URI Path
#     Operator: starts with
#     Value:    /data/
#   Then → Cache eligibility: Bypass cache
#   Place at: (anywhere — see ordering note below)
#   Deploy

# ═══════════════════════════════════════════════════════════════════
#  OPTIONAL — recommended additional Cache Rules
# ═══════════════════════════════════════════════════════════════════
#
# Cloudflare's defaults already cache static extensions (css, js, jpg,
# woff2, etc.) reasonably well, and origin _headers provides the rest.
# These rules are only worth setting if you want more aggressive edge
# caching than Cloudflare's defaults provide.
#
# Rule: Long-cache versioned assets
#   When: (URI Path contains "/css/") or (URI Path contains "/js/")
#         or (URI Path ends with ".css") or (URI Path ends with ".js")
#   Then: Eligible for cache
#         Edge TTL: 1 month (override origin)
#         Browser TTL: 1 year (respect origin)
#   The ?v=YYYYMMDDHHMM query string from bump-version.py makes each
#   deploy's URLs unique, so long edge cache is safe.
#
# Rule: Images — long cache
#   When: URI Path contains "/images/" or URI Path contains "/products/"
#   Then: Eligible for cache, Edge TTL 1 month, Browser TTL 30 days
#
# ─── Important: ordering ───
# If you add the "Long-cache .js" rule above and the "Bypass /data/" rule,
# the /data/* rule MUST be placed BELOW the .js rule. Otherwise a request
# for /data/products.js will match both rules, with the .js cache rule
# (placed later) overriding the bypass.
#
# Recommended final order, top to bottom:
#   1. Long-cache versioned assets
#   2. Images — long cache
#   3. Bypass cache for /data/    ← specific override at the bottom

# ═══════════════════════════════════════════════════════════════════
#  ONE-TIME PURGE
# ═══════════════════════════════════════════════════════════════════
#
# After adding the Cache Rule (or any time content seems stuck on an
# old version), purge the edge cache:
#
#   Dashboard → Caching → Configuration → Purge Cache → Purge Everything
#
# Or via API:
#   curl -X POST "https://api.cloudflare.com/client/v4/zones/{ZONE_ID}/purge_cache" \
#     -H "Authorization: Bearer {API_TOKEN}" \
#     -H "Content-Type: application/json" \
#     --data '{"purge_everything":true}'

# ═══════════════════════════════════════════════════════════════════
#  MIGRATING OLD PAGE RULES
# ═══════════════════════════════════════════════════════════════════
#
# If you still have old Page Rules (Dashboard → Rules → Page Rules),
# they continue to work but should be deleted once equivalent Cache
# Rules are in place. Cloudflare's migration guide:
#   https://developers.cloudflare.com/cache/how-to/cache-rules/page-rules-migration/
#
# When both a Page Rule and a Cache Rule match the same URL, the Cache
# Rule wins. So you can add Cache Rules first, verify they work, then
# delete the Page Rules.

# ═══════════════════════════════════════════════════════════════════
#  WHY THIS SETUP
# ═══════════════════════════════════════════════════════════════════
#
# The site relies on bump-version.py to stamp every CSS/JS asset URL
# with ?v=YYYYMMDDHHMM on each deploy. That makes every asset URL
# unique per deploy, which lets us cache aggressively without ever
# serving stale code.
#
# But that strategy only works when bump-version.py actually runs. If
# a deploy uploads files without re-running it (manual file upload,
# build command misconfigured), the URLs don't change, and every
# layer of cache — browser, Cloudflare edge — keeps serving the old
# files for up to a month.
#
# Carving /data/* out of the cache eliminates that failure mode for
# the four content files that change most often. The cost is one
# small revalidation request per page load, which usually returns
# 304 Not Modified and is effectively free. Code, images, and fonts
# stay aggressively cached.
