/**
 * Per-locale URL path-segment translation registry.
 *
 * Internal identity stays canonical English: route keys, content lookups and
 * the soft-launch allowlist all key off English segments. Every outward URL is
 * localized through this registry, and inbound localized paths are mapped back
 * to canonical English via the reverse lookup.
 *
 * A path is treated as a sequence of `/`-separated segments. Each segment is
 * translated independently, so nested paths compose (e.g. `modules` +
 * `indoor-climate`). Anything without an override maps to itself, which is why
 * English is always the identity and adding a translation is purely additive.
 *
 * Only the `Lang` *type* is imported from `./lang` (type-only, erased at
 * runtime) so this module never participates in the lang.ts <-> events.ts
 * import cycle.
 */
import type { Lang } from "./lang";

const NON_DEFAULT_LOCALES = ["da", "de", "sv"] as const;

/** Canonical English segment -> localized segment per locale. */
export type SegmentI18n = Partial<Record<Lang, string>>;

/**
 * Structural, hub, module, industry and other route segments.
 *
 * Key is the canonical English segment; values list only non-English
 * overrides. Absent locales fall back to the canonical (English) segment, so
 * English is always the identity and adding a translation is purely additive.
 *
 * Translation notes / rules:
 * - Grounded where possible in the company's legacy WordPress slugs (terms
 *   search engines already associate with the brand): `indeklima`/`raumklima`/
 *   `inomhusklimat`, `kontakt`, `om-os`/`ueber-uns`/`om-oss`, `projekte`, etc.
 * - RoomAlyzer line and product names stay English, so **sensor product slugs
 *   are not localized** (`co2`, `desk`, `water-detector`, …). The approved
 *   "Water detector" -> "Wasserdetektor" (de) exception is a display-name only
 *   (see `localizedSensorName`), not a URL slug.
 * - Standards, acronyms and loanwords stay English (`roi`, `api`, `faq`,
 *   `gdpr`, `whitepapers`, `impressum`, `team`, `trust-center`).
 * - `space-management` and `water-detection` intentionally stay English in all
 *   locales (the legacy site kept them English).
 * - Segment translations are global: a localized value must not equal another
 *   canonical key, and two canonicals must not share a localized value in the
 *   same locale (see the collision guard in `buildLocaleMaps`). Extend
 *   carefully; leave a segment English if unsure — English is always safe.
 * - Danish/Swedish forms here are best-effort; native review is recommended
 *   before a broad public launch.
 */
export const SEGMENT_I18N: Record<string, SegmentI18n> = {
  // --- Case-study municipality pairs (previously `slugPairs` in lang.ts) ---
  "norddjurs-municipality": { da: "norddjurs-kommune" },
  "varde-municipality": { da: "varde-kommune" },
  "gribskov-municipality": { da: "gribskov-kommune" },

  // --- Top-level hubs / nav ---
  about: { da: "om-os", de: "ueber-uns", sv: "om-oss" },
  contact: { da: "kontakt", de: "kontakt", sv: "kontakt" },
  "get-an-offer": { da: "faa-et-tilbud", de: "angebot-einholen", sv: "faa-en-offert" },
  "case-studies": { de: "referenzen", sv: "projekt" },
  sensors: { da: "sensorer", de: "sensoren", sv: "sensorer" },
  articles: { da: "artikler", de: "wissenszentrum", sv: "artiklar" },
  integrations: { da: "integrationer", de: "integrationen", sv: "integrationer" },
  platform: { de: "plattform", sv: "plattform" },
  modules: { da: "moduler", de: "module", sv: "moduler" },
  industries: { da: "brancher", de: "branchen", sv: "branscher" },
  glossary: { da: "ordliste", de: "glossar", sv: "ordlista" },
  pricing: { da: "priser", de: "preise", sv: "priser" },
  compare: { da: "sammenlign", de: "vergleich", sv: "jamfor" },
  events: { de: "veranstaltungen", sv: "evenemang" },
  legal: { da: "juridisk", de: "rechtliches", sv: "juridik" },

  // --- Contact leaves ---
  "book-demo": { de: "demo-buchen", sv: "boka-demo" },
  sales: { da: "salg", de: "vertrieb", sv: "forsaljning" },
  "become-partner": { da: "bliv-partner", de: "partner-werden", sv: "bli-partner" },

  // --- About leaves ---
  partners: { da: "partnere", de: "partner", sv: "partner" },
  story: { da: "historie", de: "geschichte", sv: "historia" },
  press: { da: "presse", de: "presse", sv: "press" },
  careers: { da: "karriere", de: "karriere", sv: "karriar" },

  // --- Sensors leaves (container only; product slugs stay English) ---
  "product-sheets": { da: "produktark", de: "produktdatenblaetter", sv: "produktblad" },

  // --- Legal leaves ---
  privacy: { da: "privatlivspolitik", de: "datenschutz", sv: "integritetspolicy" },
  terms: { da: "betingelser", de: "agb", sv: "villkor" },
  security: { da: "sikkerhed", de: "sicherheit", sv: "sakerhet" },

  // --- Module leaves (space-management / water-detection stay English) ---
  "indoor-climate": { da: "indeklima", de: "raumklima", sv: "inomhusklimat" },
  preservation: { da: "bevaring", de: "konservierung", sv: "bevarande" },

  // --- Industry leaves (legacy-confirmed) ---
  churches: { da: "kirker", de: "kirchen", sv: "kyrkor" },
  schools: { da: "skoler", de: "schulen", sv: "skolor" },
  offices: { da: "kontorer", de: "bueros", sv: "kontor" },
};

/**
 * Canonical article slug -> localized slug per locale. Populated per post as
 * translations ship (content-readiness gate). Kept separate from SEGMENT_I18N
 * purely for organisation; merged into the lookup maps at load time.
 */
export const ARTICLE_SLUG_I18N: Record<string, SegmentI18n> = {};

/**
 * Content-readiness gate for article detail pages. Maps a canonical article
 * slug to the set of non-English locales in which the post is genuinely
 * translated and may therefore be indexed under its localized slug.
 *
 * Article bodies are English-only today, so this is empty: every /da/, /de/,
 * /sv/ article stays `noindex` (serving the English fallback) until its
 * translation ships and its slug is added here. Structural, hub, product and
 * other segments are unaffected — they localize and index immediately.
 */
export const ARTICLE_TRANSLATED_LOCALES: Record<string, ReadonlySet<Lang>> = {};

/** Is this article translated (and therefore indexable) in the given locale? */
export function isArticleTranslated(canonicalSlug: string, lang: Lang): boolean {
  if (lang === "en") return true;
  return ARTICLE_TRANSLATED_LOCALES[canonicalSlug]?.has(lang) ?? false;
}

type LocaleMaps = {
  /** canonical English segment -> localized segment */
  forward: Map<string, string>;
  /** localized segment -> canonical English segment */
  reverse: Map<string, string>;
};

function buildLocaleMaps(): Record<string, LocaleMaps> {
  const maps: Record<string, LocaleMaps> = {};
  for (const lang of NON_DEFAULT_LOCALES) {
    maps[lang] = { forward: new Map(), reverse: new Map() };
  }

  const sources = [SEGMENT_I18N, ARTICLE_SLUG_I18N];
  const canonicalKeys = new Set<string>(
    sources.flatMap((source) => Object.keys(source)),
  );

  for (const source of sources) {
    for (const [canonical, perLocale] of Object.entries(source)) {
      for (const lang of NON_DEFAULT_LOCALES) {
        const localized = perLocale[lang];
        if (!localized || localized === canonical) continue;

        // Guard: a localized value must not shadow another canonical key, and
        // two canonicals must not map to the same localized value, or the
        // reverse lookup (localized -> canonical) becomes ambiguous.
        if (canonicalKeys.has(localized) && localized !== canonical) {
          console.warn(
            `[routes] "${lang}" localized segment "${localized}" collides with canonical key "${localized}".`,
          );
        }
        const existing = maps[lang].reverse.get(localized);
        if (existing && existing !== canonical) {
          console.warn(
            `[routes] "${lang}" localized segment "${localized}" maps to both "${existing}" and "${canonical}".`,
          );
        }

        maps[lang].forward.set(canonical, localized);
        if (!maps[lang].reverse.has(localized)) {
          maps[lang].reverse.set(localized, canonical);
        }
      }
    }
  }

  return maps;
}

const localeMaps = buildLocaleMaps();

/** Translate a single canonical English segment into `lang`. */
export function localizeSegment(segment: string, lang: Lang): string {
  if (lang === "en") return segment;
  return localeMaps[lang]?.forward.get(segment) ?? segment;
}

/** Translate a single localized segment (in `lang`) back to canonical English. */
export function canonicalizeSegment(segment: string, lang: Lang): string {
  if (lang === "en") return segment;
  return localeMaps[lang]?.reverse.get(segment) ?? segment;
}

function cleanPath(path: string): string {
  return path.replace(/^\/+/, "").replace(/\/+$/, "");
}

function mapSegments(path: string, map: (segment: string) => string): string {
  const clean = cleanPath(path);
  if (!clean) return "";
  const parts = clean.split("/");

  // The article tag subtree (`articles/tags/<dimension>/<value>`) uses tag
  // dimensions and free-form tag values that collide with hub/product segments
  // (e.g. the `module` dimension vs the `modules` hub's localized form, or a
  // `preservation` tag value vs the preservation module slug). Mapping them
  // corrupts the URL and breaks the canonical round-trip, so only the hub and
  // `tags` segments are translated; everything under `tags/` stays verbatim.
  const opaqueFrom = parts[1] === "tags" ? 2 : Infinity;

  return parts
    .map((segment, i) => (i >= opaqueFrom ? segment : map(segment)))
    .join("/");
}

/**
 * Build a fully locale-prefixed URL from a canonical English path, translating
 * every segment into `lang`. Always leaves a trailing slash so Astro does not
 * 301 the link. Mirrors the previous `langPath` contract (canonical path in,
 * localized URL out).
 */
export function routePath(path: string, lang: Lang): string {
  const localized = mapSegments(path, (segment) => localizeSegment(segment, lang));
  if (!localized) return `/${lang}/`;
  return `/${lang}/${localized}/`;
}

/**
 * Map a locale-stripped, localized route (segments in `lang`) back to its
 * canonical English route key. Used by indexing/allowlist checks that key off
 * English segments.
 */
export function canonicalizePath(path: string, lang: Lang): string {
  return mapSegments(path, (segment) => canonicalizeSegment(segment, lang));
}
