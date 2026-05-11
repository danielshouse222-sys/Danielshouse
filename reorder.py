with open('css/shared.css') as f:
    css = f.read()
import re
# Replace the bundle-card flex order block
pattern = re.compile(
    r'(/\* \xe2\x95\x90\xe2\x95\x90\xe2\x95\x90 BUNDLE CARD CTA REPOSITIONING.*?bundle-savings\s*\{ order: 10[^\}]*\})',
    re.DOTALL
)
new_block = '''/* === BUNDLE CARD CTA REPOSITIONING ===
   Matches skincare bundle-footnote: button at bottom after pricing+toggle */
.bundle-card .bundle-body { display: flex; flex-direction: column; }
.bundle-card .bundle-body > .bundle-eyebrow         { order: 1; }
.bundle-card .bundle-body > .bundle-title           { order: 2; }
.bundle-card .bundle-body > .bundle-sub             { order: 3; }
.bundle-card .bundle-body > .bundle-desc            { order: 4; }
.bundle-card .bundle-body > .bundle-view-link       { order: 5; margin-top: 14px; }
.bundle-card .bundle-body > .bundle-details         { order: 6; }
.bundle-card .bundle-body > .bundle-included        { order: 7; margin-top: 24px; }
.bundle-card .bundle-body > .bundle-savings         { order: 8; margin-top: 16px; }
.bundle-card .bundle-body > .bundle-subscribe-toggle{ order: 9; margin-top: 16px; }
.bundle-card .bundle-body > .bundle-cta             { order: 10; margin-top: 14px; }'''
print('block search:', bool(pattern.search(css)))
