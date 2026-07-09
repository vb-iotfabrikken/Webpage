# White papers registry

Authoring data and hub catalogue for long-form PDF guides aimed at decision makers.

**Hub page:** [`src/pages/[lang]/whitepapers/index.astro`](../../pages/[lang]/whitepapers/index.astro)

**Data entry point:** [`whitepapers.ts`](../hubs/whitepapers.ts) (hub metadata + leaves)

## File layout

| File | Purpose |
|------|---------|
| [`types.ts`](types.ts) | `WhitepaperLeaf`, outline, source, and localization types |
| [`outlines.ts`](outlines.ts) | Wave 1 detailed section blueprints (four teased topics) |
| [`sources.ts`](sources.ts) | Article and case study → chapter repackaging map |
| [`wave2.ts`](wave2.ts) | Wave 2 flagship picks per remaining module |
| [`localization.ts`](localization.ts) | EN + DA/DE/SV translation priorities |
| [`catalog.ts`](catalog.ts) | Hub leaves wired from outlines and wave 2 flagships |
| [`index.ts`](index.ts) | Re-exports |

## WhitepaperLeaf fields

| Field | Description |
|-------|-------------|
| `slug` | URL segment under `/whitepapers/{slug}/` |
| `wave` | Rollout wave (`1`, `2`, or `3`) |
| `status` | `in_preparation`, `planned`, or `published` |
| `pdfPath` | Site-relative PDF once published, e.g. `/downloads/whitepapers/classroom-air-quality.pdf` |
| `gated` | When `true`, detail page email-gates the PDF download |
| `relatedArticles` | Article slugs for cross-links |
| `relatedCaseStudies` | Case study slugs for proof links |
| `relatedModules` | Module route keys, e.g. `modules/indoor-climate` |
| `outlineSlug` | Key into `outlines.ts` (defaults to `slug` for wave 1) |

## Publishing a white paper

1. Complete the PDF using the outline in `outlines.ts` and sources in `sources.ts`.
2. Place the PDF under `public/downloads/whitepapers/{slug}.pdf` (or localized subfolder).
3. Update the catalog entry in `catalog.ts`:
   - Set `status: "published"`
   - Set `pdfPath`
   - Remove `noindex` if the page should be indexed
4. Add localized PDFs per `localization.ts` and register paths when multi-locale PDFs ship.
5. Remove or shorten the "In preparation" block on the hub index once `leaves` include published entries.

## Wave 1 (in preparation)

- `classroom-air-quality` — schools indoor climate
- `hybrid-office-business-case` — space management + energy
- `museum-preservation-monitoring` — preservation dual-audience
- `indoor-climate-esg-reporting` — CSRD / DGNB data layer

## Wave 2 (planned)

- `water-damage-economics` — water-detection module
- `demand-driven-cleaning` — usage-cleaning module
- `open-close-monitoring` — lockers-doors module
- `church-climate-heritage` — preservation niche (churches)

## Content repackaging

Before writing from scratch, check `sources.ts` for published articles and case studies mapped to each chapter. Key assets:

- `co2-monitoring-in-schools.mdx` → schools whitepaper methodology
- `rollout-in-varde-municipality.mdx` → schools + hybrid case chapters
- `en-15757-in-practice.mdx` → museum methodology
- Four water-detection articles → water economics whitepaper
- ROI calculator tabs → worksheet appendices

## Soft launch

Whitepapers remain hidden when `LAUNCH_LIVE_ONLY = true` in [`launch.ts`](../launch.ts). Data can be authored before the hub goes live.
