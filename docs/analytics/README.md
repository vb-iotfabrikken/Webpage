# Analytics setup guide

This site uses **Google Tag Manager (GTM)**, **Google Analytics 4 (GA4)**, **Microsoft Clarity** (heatmaps), and **Google Consent Mode v2** with an in-repo cookie banner. Custom events are pushed to `window.dataLayer` from `src/lib/analytics/`.

## Launch wave gate

Analytics is **second-wave only** — not active during soft launch.

**Building stage:** internal dashboard, cookie policy, consent banner, and GTM load
only during local `npm run dev` (via `isAnalyticsWaveBuilt()` in `src/data/launch.ts`).
`astro build` and Railway never ship `/internal/*` or `/legal/cookies/*` until you
explicitly approve and set `ANALYTICS_WAVE_LIVE = true`.

| Flag | Location | Soft launch / prod build | Local dev (`npm run dev`) | Second wave (approved) |
|------|----------|--------------------------|---------------------------|------------------------|
| `ANALYTICS_WAVE_LIVE` | `src/data/launch.ts` | `false` | `false` (pages still emit in dev) | `true` |
| `isAnalyticsWaveBuilt()` | same file | `false` | `true` | `true` |
| `legal/cookies` in `LIVE_EXACT` | same file | omitted | omitted until approved | add when live |
| `internal/journey` in `LIVE_EXACT` | same file | omitted | omitted until approved | add when live |

Docker/Railway builds force `ANALYTICS_WAVE_LIVE = false` even if the branch sets it to `true`. Event tracking, the consent banner, and GTM markup are omitted from HTML until the wave flag is enabled. A post-build hook deletes any stray second-wave HTML when the wave is off.

## Team access and security

True **2FA at the URL** is not possible on a static Caddy site (Basic Auth is username + password only). Use this model:

| Layer | Protects | 2FA |
|-------|----------|-----|
| **Google Analytics / Looker Studio** | Funnels, campaigns, conversions | Google Workspace account 2FA |
| **Microsoft Clarity** | Heatmaps, click maps, session replay | Microsoft/Google SSO + 2FA on Clarity |
| **Google Search Console** | Organic queries, indexing | Google Workspace account 2FA |
| **Google Ads** | Paid performance | Google Workspace account 2FA |
| **`/en/internal/journey/`** | SEO audit + link hub | Separate Caddy `INTERNAL_AUTH_*` credentials |

### Who gets access

| Tool | Suggested role | Notes |
|------|----------------|-------|
| GA4 | Viewer (marketing/leadership); Editor (web owner) | Property: `iot-fabrikken.com` |
| Looker Studio | Viewer on shared reports | Build funnel + GSC dashboards |
| Search Console | Full user (web owner) | Verify domain first |
| Clarity | Admin (web owner); Member (marketing) | One project per domain |
| Google Ads | Standard access for campaign owners | Link to GA4 |
| Internal journey page | Share `INTERNAL_AUTH_*` via password manager | Not the same as soft-launch site password |

**Require Google Workspace 2FA** on every account with access to the tools above.

### Internal dashboard URL

Local dev (building stage): `http://localhost:4321/en/internal/journey/`

Production (second wave only, after approval): `https://iot-fabrikken.com/en/internal/journey/`

Protected by path-specific Basic Auth in [`Caddyfile`](../../Caddyfile) (`INTERNAL_AUTH_USER`, `INTERNAL_AUTH_HASH`). The page is `noindex` and excluded from the sitemap. It does **not** embed Looker or GA4 — only outbound links and the SEO audit table.

### Optional upgrade: Cloudflare Zero Trust

If you use Cloudflare in front of Railway, you can add Google SSO + 2FA on `/internal/*` at the edge. Not required for the recommended setup.

## Caddy auth (Railway)

| Variable | When | Purpose |
|----------|------|---------|
| `INTERNAL_AUTH_USER` / `INTERNAL_AUTH_HASH` | Always (production) | Team-only `/internal/*` routes |
| `SOFT_LAUNCH_SITE_AUTH=true` | Soft launch | Gates the whole marketing site |
| `BASIC_AUTH_USER` / `BASIC_AUTH_HASH` | Soft launch | Site-wide invite password |
| `SOFT_LAUNCH_SITE_AUTH=false` | Public launch | Marketing site open; internal routes still gated |

Generate bcrypt hashes:

```bash
docker run --rm caddy caddy hash-password --plaintext 'your-password'
```

## Environment variables (Astro / Railway)

Copy [`.env.example`](../../.env.example) to `.env` for local dev.

| Variable | Required | Description |
|----------|----------|-------------|
| `PUBLIC_GTM_ID` | Yes (prod, wave 2) | GTM container ID, e.g. `GTM-XXXXXXX` |
| `PUBLIC_GA4_MEASUREMENT_ID` | Optional | Fallback GA4 ID if not loaded via GTM |
| `PUBLIC_ANALYTICS_ENABLED` | Optional | Set to `false` to disable tags locally |
| `PUBLIC_GSC_VERIFICATION` | Optional | Search Console HTML verification token |
| `PUBLIC_CLARITY_PROJECT_ID` | Optional | Reference only; load Clarity via GTM |
| `PUBLIC_GA4_REPORT_URL` | Optional | Link on internal hub → GA4 reports |
| `PUBLIC_LOOKER_GA4_URL` | Optional | Link on internal hub → funnel dashboard |
| `PUBLIC_LOOKER_GSC_URL` | Optional | Link on internal hub → GSC Looker report |
| `PUBLIC_GSC_URL` | Optional | Link on internal hub → Search Console |
| `PUBLIC_CLARITY_DASHBOARD_URL` | Optional | Link on internal hub → Clarity project |
| `PUBLIC_GOOGLE_ADS_URL` | Optional | Link on internal hub → Google Ads |

## Google property setup

### 1. GA4

1. Create a GA4 property for `iot-fabrikken.com`.
2. Add a **Web** data stream for the production domain.
3. Register custom event parameters as dimensions: `lang`, `page_type`, `form_type`, `lead_source`, `cta_id`, `content_id`.
4. Mark **`generate_lead`** as a conversion.
5. Set `PUBLIC_GA4_REPORT_URL` to your property reports URL for the internal hub.

### 2. GTM

1. Create a container for the website.
2. Add a **Consent Overview**; tags must respect Consent Mode (analytics + ads).
3. Add tags:
   - **GA4 Configuration** — analytics consent
   - **GA4 Event** tags — map `dataLayer` events (`generate_lead`, `cta_click`, etc.)
   - **Microsoft Clarity** — Custom HTML or Clarity template; **analytics consent only**
   - **Google Ads Conversion Linker** — marketing consent
   - **Google Ads Conversion** — on `generate_lead`
   - **Enhanced conversions** — on `enhanced_conversion` event (hashed email from site code)
4. Set `PUBLIC_GTM_ID` on Railway.

GTM loads **only after** the visitor accepts analytics and/or marketing cookies.

### 3. Microsoft Clarity (heatmaps)

1. Create a project at [clarity.microsoft.com](https://clarity.microsoft.com) for `iot-fabrikken.com`.
2. Add the Clarity tag in **GTM** (not hardcoded in Astro) — trigger on **analytics consent granted**.
3. Mask sensitive fields on form pages in the Clarity UI if needed.
4. Set `PUBLIC_CLARITY_DASHBOARD_URL` to the project dashboard URL for the internal hub.

Clarity provides click heatmaps, scroll maps, session recordings (sampled), rage clicks, and UTM filters. Session recording requires analytics consent — documented in the cookie policy ([`src/data/i18n/legal.ts`](../../src/data/i18n/legal.ts)).

### 4. Link GA4 ↔ Google Ads

1. GA4: **Admin → Product links → Google Ads links**.
2. Google Ads: enable **auto-tagging** (`gclid`).
3. Import GA4 `generate_lead` as a primary conversion.

### 5. Search Console

1. Add property `https://iot-fabrikken.com/`.
2. Verify via `PUBLIC_GSC_VERIFICATION` or DNS.
3. Submit sitemap: `https://iot-fabrikken.com/sitemap-index.xml`.
4. Set `PUBLIC_GSC_URL` for the internal hub.

### 6. Looker Studio

Build and share (viewer access for team):

- **Funnel:** Sessions → `cta_click` → `form_start` → `generate_lead` (by `lang`, campaign, landing page).
- **Search Console:** Queries, impressions, CTR.

Set `PUBLIC_LOOKER_GA4_URL` and `PUBLIC_LOOKER_GSC_URL` on the internal hub — open in a new tab, not embedded.

## UTM conventions (Google Ads)

```
https://iot-fabrikken.com/da/?utm_source=google&utm_medium=cpc&utm_campaign={campaign}&utm_content={adgroup}
```

| Parameter | Example |
|-----------|---------|
| `utm_source` | `google` |
| `utm_medium` | `cpc` |
| `utm_campaign` | `modules-de-q3` |
| `utm_content` | `indoor-climate-ad1` |

First-touch UTMs and `gclid` are stored in `sessionStorage` and appended to Zoho lead descriptions.

## Event catalog

See [`src/lib/analytics/events.ts`](../../src/lib/analytics/events.ts) and `/en/internal/journey/`.

| Event | When |
|-------|------|
| `content_view` | Module, sensor, compare, case study pages |
| `cta_click` | Book demo, get offer, contact sales, etc. |
| `form_start` | First focus on lead form |
| `generate_lead` | Successful Zoho submit |
| `form_error` | Validation or submit failure |
| `enhanced_conversion` | Hashed email for Google Ads (GTM tag) |

## Analytics depth

| Depth | Capability | Tool |
|-------|------------|------|
| Landing | Page views, UTMs, `gclid`, locale | GA4 |
| Exploration | Module/sensor/compare views | GA4 `content_view` |
| Intent | CTA clicks | GA4 `cta_click` |
| Form | Start, errors | GA4 |
| Conversion | Leads + Ads enhanced conversions | GA4 + Google Ads |
| CRM attribution | UTM + GA4 client_id in Zoho | Zoho Description |
| Visual UX | Click/scroll heatmaps, replays | Microsoft Clarity |
| Organic | Queries, CTR | Search Console → Looker |
| SEO meta | Title/description audit | `npm run audit:seo` |

**Phase 3 (optional):** GA4 → BigQuery export for multi-touch paths; GA4 audiences for remarketing (marketing consent only).

**Limits:** No cross-device identity without CRM email matching; B2B traffic needs weeks before heatmaps are meaningful; remove soft-launch site auth before trusting public funnel data.

## SEO audit

```bash
npm run audit:seo
```

Writes `exports/seo-audit.json` — shown on `/en/internal/journey/` during local dev.

### Local dev URLs (building stage)

| URL | When available |
|-----|----------------|
| `http://localhost:4321/en/internal/journey/` | `npm run dev` only |
| `http://localhost:4321/en/legal/cookies/` | `npm run dev` only |

These routes are not emitted by `npm run build` while `ANALYTICS_WAVE_LIVE` is `false`.

## Rollout checklist

1. **Soft launch (now):** `ANALYTICS_WAVE_LIVE = false`; second-wave pages dev-only; `SOFT_LAUNCH_SITE_AUTH=true`. Do not deploy analytics until explicitly approved.
2. **Public launch:** `SOFT_LAUNCH_SITE_AUTH=false`; marketing site open.
3. **Second wave (after explicit approval):** `ANALYTICS_WAVE_LIVE = true`; add `legal/cookies` + `internal/journey` to `LIVE_EXACT`; GTM + Clarity + cookie policy live; configure tool link env vars; set `INTERNAL_AUTH_*` for production internal hub.
4. **After 2–4 weeks:** Review Looker funnels, Clarity heatmaps, Search Console queries.
