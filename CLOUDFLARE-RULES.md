# Daniel's House — Cloudflare Pages cache rules
#
# Cloudflare Pages reads _headers (Netlify-style) by default. If using Cloudflare
# as a CDN in front of any host, also set these Page Rules in the Cloudflare dashboard:
#
# Rule 1: *.html
#   Cache Level: Bypass
#   Browser Cache TTL: Respect Existing Headers
#
# Rule 2: *.css OR *.js (with ?v= in URL)
#   Cache Level: Cache Everything
#   Edge Cache TTL: 1 month
#   Browser Cache TTL: 1 year
#
# Rule 3: */images/*
#   Cache Level: Cache Everything
#   Edge Cache TTL: 1 month
#   Browser Cache TTL: 30 days
#
# In addition, after every deploy you can manually purge the Cloudflare cache:
#   Dashboard → Caching → Configuration → Purge Everything
#   (or use the API: https://api.cloudflare.com/zones/{zone_id}/purge_cache)
