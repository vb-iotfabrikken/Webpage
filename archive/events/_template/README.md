# {slug} — archived event

| Field | Value |
|-------|--------|
| Slug | `{slug}` |
| Host locale | `{lang}` |
| Dates | `{start}` – `{end}` |
| Official URL | `{url}` |
| Card theme | `{theme}` |
| Retired on | `{date}` |

## What shipped

- [ ] Hub Card 1 / Card 2 copy
- [ ] Landing page (`src/pages/[lang]/events/{slug}.astro`)
- [ ] Contact page (`src/pages/[lang]/contact/{slug}.astro`)
- [ ] Module teasers (if any)

## Snapshot

Copy retired sources into `snapshot/` when archiving:

- `src/data/i18n/{event}.ts`
- `src/pages/[lang]/events/{slug}.astro`
- `src/pages/[lang]/contact/{slug}.astro`
- `src/data/{event}Images.ts` (if present)
