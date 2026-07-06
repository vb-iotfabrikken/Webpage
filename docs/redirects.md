# Legacy redirect cutover checklist

Canonical site: **https://iot-fabrikken.com** with locale prefixes (`/en/`, `/da/`, `/de/`, `/sv/`). Within each locale, path segments are localized via [`src/data/routes.ts`](../src/data/routes.ts) (e.g. DE `module/raumklima`, SV `kontakt`; EN stays English).

Bare domain: **`/` → `/da/`** (Danish legacy home on `.com`). Apply the same rule for `www.iot-fabrikken.com` after www → apex canonicalization at the CDN/host.

Machine-readable inventory: [`exports/redirect-inventory.csv`](../exports/redirect-inventory.csv)  
Regenerate: `npm run export-redirects`

Legacy sitemap crawl: [`exports/legacy-sitemap-urls.json`](../exports/legacy-sitemap-urls.json)  
Regenerate: `npm run crawl-legacy-sitemaps`

---

## Three redirect layers

| Layer | Location | What it handles |
|-------|----------|-----------------|
| **1 — Astro `redirects`** | [`src/data/redirects.ts`](../src/data/redirects.ts) → [`astro.config.mjs`](../astro.config.mjs) | Legacy IA, bare `.com` paths, slug fixes. Sources stay English/legacy; **targets are localized** via `localizeRedirectTarget()`. |
| **2 — Build hook stubs** | `localizeFixedPages()` in [`astro.config.mjs`](../astro.config.mjs) | English-segment bookmarks on da/de/sv (e.g. `/de/modules/indoor-climate/`) → localized URL in one hop. |
| **3 — Legacy host rules** | [`redirects/legacy-domains.caddy`](../redirects/legacy-domains.caddy) (or Cloudflare) | `.uk`, `.de`, `.se` → `iot-fabrikken.com/{locale}/…` with localized targets. |

Additional:

| Layer | Location | Scope |
|-------|----------|--------|
| Runtime | [`src/pages/[lang]/roi/calculator/results/index.astro`](../src/pages/[lang]/roi/calculator/results/index.astro) | ROI calculator results → calculator |
| Event retirement | [`src/data/events.ts`](../src/data/events.ts) `archivedEvents` | Host-locale landing + contact → hub |
| Dev server | [`src/middleware.ts`](../src/middleware.ts) | Rewrites localized URLs to English-segment routes Astro generates |

Railway soft-launch [`Caddyfile`](../Caddyfile) serves static `dist/` only — no redirect rules there.

---

## Configured on the new site (~3,000 rules)

Source: `getSiteRedirectMap()` in `src/data/redirects.ts`.

| Category | Examples (sources → localized targets) |
|----------|------------------------------------------|
| Root | `/` → `/da/` |
| Case studies hub | `/de/cases/` → `/de/referenzen/`; `/sv/cases/` → `/sv/projekt/`; en/da keep `case-studies` |
| Singular case CPT | `/{lang}/case/{slug}/` → localized case-studies hub + slug |
| Slug fixes | `varde-kommune-3`, EN `*-kommune` → `*-municipality`, UK aliases (`sweco-6` → `sweco`) |
| Trust centre | `/{lang}/about/d-label/` → localized `about/trust-center/` |
| Sensors + shop (EN) | `gateway` → `cloud-connector`, removed series → hub |
| Compare | `/de/sensors/compare/` → `/de/sensoren/vergleich/` → `/de/vergleich/` |
| Pricing | `/{lang}/pricing/plans/` → localized pricing hub |
| Library / blog | `/de/library/` → `/de/wissenszentrum/` (~325 slugs × 4 locales) |
| Solutions (old IA) | `/{lang}/solutions/{slug}/` → localized articles path |
| Bare Danish paths | `/indeklima/` → `/da/moduler/indeklima/`; `/kontakt/` → `/da/kontakt/` |
| Events | `/de/events/…` (foreign locale) → `/de/veranstaltungen/` |

---

## Cross-domain: legacy WordPress → new site

Configure on each legacy host (see `redirects/legacy-domains.caddy`). Full matrix: `exports/redirect-inventory.csv` (`status=proposed`).

Do **not** redirect `/wp-content/uploads/…` to HTML pages.

### iot-fabrikken.uk (English)

| Legacy | Target |
|--------|--------|
| `/` | `/en/` |
| `/cases/` | `/en/case-studies/` |
| `/case/{slug}/` | `/en/case-studies/{slug}/` |
| `/indoor-climate/` | `/en/modules/indoor-climate/` |

### iot-fabrikken.com (Danish era, bare paths)

Same-domain Astro rules handle bare paths on the canonical host. At cutover:

| Legacy | Target |
|--------|--------|
| `/` | `/da/` |
| `/cases/` | `/da/case-studies/` |
| `/case/{slug}/`, `/cases/{slug}/` | `/da/case-studies/{slug}/` |
| `/kontakt/` | `/da/kontakt/` |
| `/indeklima/` | `/da/moduler/indeklima/` |

`www.iot-fabrikken.com` paths redirect to the same localized targets on apex (see CSV).

### iot-fabrikken.de (German)

| Legacy | Target |
|--------|--------|
| `/` | `/de/` |
| `/raumklima/` | `/de/module/raumklima/` |
| `/space-management/` | `/de/module/space-management/` |
| `/raumklima-messgerat/` | `/de/sensoren/` |
| `/projekte/` | `/de/referenzen/` |
| `/projekte/{slug}/`, `/case/{slug}/` | `/de/referenzen/{slug}/` |
| `/demo-buchen/` | `/de/kontakt/demo-buchen/` |
| `/kontakt/` | `/de/kontakt/` |
| `/impressum/` | `/de/rechtliches/impressum/` |
| `/privacy-policy/` | `/de/rechtliches/datenschutz/` |
| `/archivistica/` | `/de/veranstaltungen/archivistica/` |
| `/wissenszentrum/` | `/de/wissenszentrum/` |

### iot-fabrikken.se (Swedish)

| Legacy | Target |
|--------|--------|
| `/` | `/sv/` |
| `/projekt/` | `/sv/projekt/` |
| `/case/{slug}/` | `/sv/projekt/{slug}/` |
| `/kontakt/` | `/sv/kontakt/` |
| `/boka-en-demo/` | `/sv/kontakt/boka-demo/` |
| `/inomhusklimat/` | `/sv/moduler/inomhusklimat/` |

Verify with `npm run crawl-legacy-sitemaps`.

---

## Cutover steps

1. Run `npm run export-redirects` and `npm run crawl-legacy-sitemaps`.
2. Review `exports/legacy-sitemap-urls.json` → `unmapped` array; add rules to `redirects.ts` or Caddy as needed.
3. Deploy Astro build (same-domain rules ship in `dist/`).
4. Apply `redirects/legacy-domains.caddy` (or Cloudflare equivalents) on legacy hosts.
5. Configure `www` → apex and ensure `/` → `/da/` on `iot-fabrikken.com`.
6. When events retire, add `{ slug, hostLocale }` to `archivedEvents` in `src/data/events.ts`.

---

## Summary counts

Regenerate counts after export:

```bash
npm run export-redirects
npm run crawl-legacy-sitemaps
```

See `exports/redirect-inventory.csv` and `exports/legacy-sitemap-urls.json` for current totals.
