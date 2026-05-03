# IoT Fabrikken — website

Built with **Astro 6 + Tailwind v4** and content collections.

> **Language policy:** everything in this repo — code, content, filenames,
> URL slugs, identifiers, comments, commit messages and chat with the AI
> assistant — is in English. See `.cursorrules.txt` and
> `.cursor/rules/project-rules.mdc`.

## Commands

| Command          | Action                                       |
| :--------------- | :------------------------------------------- |
| `npm install`    | Install dependencies                         |
| `npm run dev`    | Start local dev server on `localhost:4321`   |
| `npm run build`  | Build the production site to `./dist/`       |
| `npm run preview`| Preview the production build locally         |

## Project structure

```text
src/
├── components/          # Reusable UI (Hero, Button, FAQ, CtaBand, Header, …)
├── content/
│   └── landingpages/    # One .mdx file per landing page (use cases, sensors, integrations, …)
├── content.config.ts    # Content collection schema
├── data/
│   ├── modules.ts           # Top-level product modules shown on the frontpage
│   └── landingCategories.ts # Categories used to group landing pages
├── layouts/
│   ├── Layout.astro             # Site chrome (header, footer, <head>)
│   └── LandingPageLayout.astro  # Shared layout for all landing pages
├── pages/
│   ├── index.astro
│   ├── indoor-climate.astro, preservation.astro, …   # Module hub pages
│   └── solutions/
│       ├── index.astro          # Overview of every landing page, grouped by category
│       └── [slug].astro         # Dynamic route — one page per MDX file
└── styles/global.css
```

## Landing-page framework

We have hundreds of landing pages describing **functions, sensors, use cases, integrations,
industries, standards, cases and more**. They all live under `/solutions/<slug>` and share
a single layout — so the tone, SEO metadata and conversion elements stay consistent.

### URL structure

| URL                                              | Purpose                                          |
| :----------------------------------------------- | :----------------------------------------------- |
| `/solutions/`                                    | Overview — every landing page grouped by category |
| `/solutions/<slug>`                              | Individual landing page                          |
| `/solutions/?category=<category-slug>`           | Filter hint used by the layout breadcrumb        |

### Categories

Defined once in `src/data/landingCategories.ts`. They map to the sections in the
master content list:

`indoor-climate`, `preservation`, `space-management`, `water-detection`,
`push-buttons`, `cabinets-doors`, `cleaning`, `energy`, `sensors`, `platform`,
`integrations`, `industries`, `business-cases`, `standards`, `guides`, `cases`,
`comparisons`, `trends`, `buyers-journey`, `niche`.

### Creating a new landing page

1. Create a file in `src/content/landingpages/<slug>.mdx`. The filename becomes the URL slug.
2. Fill in the required frontmatter. Anything below the frontmatter is standard
   Markdown / MDX rendered in the main article column.
3. Run `npm run dev` — the new page is instantly live at `/solutions/<slug>`.

#### Minimum frontmatter

```yaml
---
title: "CO₂ monitoring in schools"
description: "Short SEO description (max ~160 characters)."
category: "indoor-climate"        # must match a category slug
heroTitle: "CO₂ monitoring."
heroTitleAccent: "Better air, better focus."   # optional accent
heroLead: "One or two sentences that introduce the use case."
---
```

#### Full frontmatter (everything is optional except the block above)

```yaml
---
title: "..."
description: "..."
category: "preservation"
eyebrow: "Use case — Preservation"       # small label over hero headline
heroTitle: "..."
heroTitleAccent: "..."
heroLead: "..."
heroImage: "/roomalyzer-dashboard-clean.png"
heroImageAlt: "..."

primaryCta:   { label: "Book demo",    href: "/book-demo" }
secondaryCta: { label: "Contact sales", href: "/contact"  }

# Sidebar "key points" — shown to the right of the prose column
keyPoints:
  - title: "Range"
    unit: "0–100 % RH"
    body: "Short supporting text."

# Accordion FAQ at the bottom
faq:
  - q: "Question?"
    a: "Answer."

# List of other landing-page slugs. If omitted the layout shows up to 3 pages
# from the same category automatically.
related: ["co2-monitoring-in-schools", "mould-prevention-in-churches"]

tags: ["Churches", "Diocese"]

publishedAt: 2026-04-22
updatedAt:   2026-04-22

draft: false      # set true to hide from the site without deleting the file
noindex: false    # set true to exclude from search engines
---
```

#### Example

See `src/content/landingpages/humidity-in-churches.mdx` for a fully worked
example.

### Linking between landing pages

Use regular Markdown links — internal links resolve naturally:

```md
Read more about [indoor climate](/indoor-climate) or see
[CO₂ in schools](/solutions/co2-monitoring-in-schools).
```

### Bulk authoring

Because every page is just an MDX file with structured frontmatter, you can:

- Generate dozens of files at once with a script or an LLM and drop them in.
- Let non-developers write them — the schema in `src/content.config.ts` catches
  mistakes at build time with friendly error messages.
- Keep everything version-controlled like regular code.

### Adding a new category

1. Add the slug to `LandingCategorySlug` and `landingCategories` in
   `src/data/landingCategories.ts`.
2. Add the slug to the `categorySlugs` array in `src/content.config.ts`.
3. Optionally link a top-level module page via the `module` field.
