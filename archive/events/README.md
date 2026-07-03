# Event archive

Retired fair pages are removed from the live hub after `endDate` + `EVENT_ARCHIVE_GRACE_DAYS`
(see [`src/data/events.ts`](../src/data/events.ts)). This folder keeps a record of what was
shipped so future fairs can reuse structure without copying from deleted routes.

## When an event ends

1. Wait until `endDate + EVENT_ARCHIVE_GRACE_DAYS`, or set `status: "archived"` on the
   `siteEvents` row for early takedown.
2. Add `{ slug, hostLocale }` to `archivedEvents` in `src/data/events.ts` (enables 301
   redirects on the next build).
3. Remove hub copy for the slug from `src/data/i18n/events.ts` (optional: copy strings here
   first).
4. Set `status: "archived"` or remove the row from `siteEvents`.
5. Remove `moduleTeasers` cross-links from other pages (registry-driven teasers hide
   automatically when not live).
6. Copy a snapshot into `archive/events/{slug}/` (see `_template/`).
7. Run `npm run build` — detail pages stop building; old URLs redirect via
   `getArchivedEventRedirectMap()`.

## Snapshot contents (per slug)

```
archive/events/{slug}/
  README.md       # dates, officialUrl, cardTheme, locales, notes
  snapshot/       # optional copies of i18n, page source at retirement
```

Do **not** delete `src/data/eventCardThemes.ts` palette tokens — themes are reused.

## Adding a new event

See [`src/data/events/README.md`](../src/data/events/README.md) and
`.cursor/rules/project-rules.mdc`.
