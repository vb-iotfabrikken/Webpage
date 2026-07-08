/**
 * Single source of truth for site redirects — consumed by astro.config.mjs and
 * scripts/export-redirects.mjs. Cross-domain rules for legacy WordPress hosts
 * live in redirects/legacy-domains.caddy.
 */
import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { articles as articleCatalog } from "./library/catalog";
import { getEventRedirectMap } from "./events";
import { getCaseStudiesContent } from "./hubs/caseStudies";
import { platformHub } from "./hubs/platform";
import {
  getLegacyComBarePathMap,
  LEGACY_HOST_LOCALE,
  LEGACY_PATH_BY_HOST,
  resolveLegacyPath,
  type LegacyHost,
} from "./legacyWordPressPaths";
import { canonicalizePath, routePath, type Lang } from "./lang";

export const SITE_LOCALES: readonly Lang[] = ["en", "da", "de", "sv"];

/**
 * Localize a locale-prefixed path via the route registry so redirects land in
 * one hop on the localized destination (`/de/modules/` -> `/de/module/`).
 * Returns `null` when the path is not locale-prefixed. English is the identity,
 * and already-localized targets round-trip unchanged.
 */
function localizeLocalePath(pathname: string): string | null {
  const match = pathname.match(/^\/(en|da|de|sv)(\/.*)?$/);
  if (!match) return null;
  const lang = match[1] as Lang;
  const rest = (match[2] ?? "/").replace(/^\/+/, "").replace(/\/+$/, "");
  return routePath(canonicalizePath(rest, lang), lang);
}

/** Localize a redirect target (relative path or absolute URL) in place. */
export function localizeRedirectTarget(target: string): string {
  if (/^https?:\/\//i.test(target)) {
    try {
      const url = new URL(target);
      const localized = localizeLocalePath(url.pathname);
      if (localized) url.pathname = localized;
      return url.toString();
    } catch {
      return target;
    }
  }
  const hashIdx = target.indexOf("#");
  const pathPart = hashIdx >= 0 ? target.slice(0, hashIdx) : target;
  const hashPart = hashIdx >= 0 ? target.slice(hashIdx) : "";
  const localized = localizeLocalePath(pathPart) ?? pathPart;
  return localized + hashPart;
}

export const CANONICAL_SITE = "https://iot-fabrikken.com";

export type RedirectStatus = "configured" | "proposed";

export type RedirectCategory =
  | "root"
  | "case-studies"
  | "legacy-case-singular"
  | "about"
  | "sensors"
  | "shop"
  | "compare"
  | "pricing"
  | "library"
  | "blog"
  | "solutions"
  | "events"
  | "bare-path"
  | "cross-domain"
  | "runtime";

export type RedirectEntry = {
  source: string;
  target: string;
  category: RedirectCategory;
  status: RedirectStatus;
  /** Legacy host for cross-domain rules (e.g. iot-fabrikken.uk). */
  sourceHost?: string;
};

/** Article slugs renamed after content updates (old → new). */
export const legacyArticleSlugAliases: Readonly<Record<string, string>> = {
  "lorawan-vs-nb-iot-vs-wifi": "nb-iot-vs-wifi",
  "nfc-vs-lorawan-buttons": "nfc-vs-wireless-buttons",
  "lorawan-vs-nb-iot-rf-budget": "nb-iot-rf-budget",
};

/** WordPress case URLs that used a different slug than the new site. */
export const legacyCaseSlugAliases: Readonly<Record<string, string>> = {
  "sweco-6": "sweco",
  "data-skal-dimensionere-nyt-raadhus-rigtigt": "gribskov-municipality",
  "deutches-museum-nordschleswig": "deutsches-museum-nordschleswig",
  "varde-kommune-3": "varde-municipality",
  "kommune-norddjurs": "norddjurs-municipality",
  "kommune-varde": "varde-municipality",
  "erzdioezese-freiburg": "archdiocese-of-freiburg",
  "norddjurs-kommun": "norddjurs-municipality",
  "varde-kommun": "varde-municipality",
};

const landingDir = fileURLToPath(new URL("../content/landingpages", import.meta.url));

/** Article + landing-page slugs used for library/blog/solutions redirects. */
export function getArticleSlugs(): string[] {
  const landingSlugs = readdirSync(landingDir)
    .filter((f) => /\.(md|mdx)$/.test(f))
    .map((f) => f.replace(/\.(md|mdx)$/, ""));

  return Array.from(new Set([...articleCatalog.map((a) => a.slug), ...landingSlugs]));
}

export function getEnCaseSlugs(): string[] {
  return getCaseStudiesContent("en").cases.map((c) => c.slug);
}

export function getDaCaseSlugs(): string[] {
  return getCaseStudiesContent("da").cases.map((c) => c.slug);
}

export function resolveCaseSlug(slug: string, lang: Lang): string {
  const aliased = legacyCaseSlugAliases[slug] ?? slug;
  if (lang === "da") {
    const daAliases: Record<string, string> = {
      "norddjurs-municipality": "norddjurs-kommune",
      "varde-municipality": "varde-kommune",
      "gribskov-municipality": "gribskov-kommune",
    };
    return daAliases[aliased] ?? aliased;
  }
  return aliased;
}

/** Legacy /library/ and /blog/ URLs → /articles/ for every locale prefix. */
export function getLegacyArticlesRedirectMap(): Record<string, string> {
  const articleSlugs = getArticleSlugs();

  return Object.fromEntries(
    SITE_LOCALES.flatMap((lang) => [
      [`/${lang}/library/`, `/${lang}/articles/`],
      [`/${lang}/library/tags/`, `/${lang}/articles/tags/`],
      ...articleSlugs.map((slug) => [`/${lang}/library/${slug}/`, `/${lang}/articles/${slug}/`]),
      [`/${lang}/blog/`, `/${lang}/articles/`],
      [`/${lang}/blog/welcome-to-the-iot-fabrikken-blog/`, `/${lang}/articles/`],
      [`/${lang}/blog/en-15757-in-practice/`, `/${lang}/articles/en-15757-in-practice/`],
      [`/${lang}/blog/rollout-in-varde-municipality/`, `/${lang}/articles/rollout-in-varde-municipality/`],
    ]),
  );
}

/** Old /solutions/ IA → /articles/ (README-era paths; never shipped in Astro). */
export function getSolutionsRedirectMap(): Record<string, string> {
  const articleSlugs = getArticleSlugs();

  return Object.fromEntries(
    SITE_LOCALES.flatMap((lang) => [
      [`/${lang}/solutions/`, `/${lang}/articles/`],
      ...articleSlugs.map((slug) => [`/${lang}/solutions/${slug}/`, `/${lang}/articles/${slug}/`]),
    ]),
  );
}

/** WordPress singular /case/{slug}/ → /case-studies/{slug}/ per locale. */
export function getLegacyCaseSingularRedirectMap(): Record<string, string> {
  const entries: [string, string][] = [];

  for (const lang of SITE_LOCALES) {
    for (const slug of caseSlugsForLocale(lang)) {
      entries.push([
        `/${lang}/case/${slug}/`,
        `/${lang}/case-studies/${resolveCaseSlug(slug, lang)}/`,
      ]);
    }
    for (const [oldSlug, newSlug] of Object.entries(legacyCaseSlugAliases)) {
      const resolved = resolveCaseSlug(newSlug, lang);
      entries.push([`/${lang}/case/${oldSlug}/`, `/${lang}/case-studies/${resolved}/`]);
      entries.push([`/${lang}/case-studies/${oldSlug}/`, `/${lang}/case-studies/${resolved}/`]);
    }
  }

  return Object.fromEntries(entries);
}

function caseSlugsForLocale(lang: Lang): string[] {
  if (lang === "da") return getDaCaseSlugs();
  return getEnCaseSlugs();
}

/** Bare paths from old Danish WordPress on iot-fabrikken.com (no /da/ prefix). */
export function getBarePathLegacyRedirectMap(): Record<string, string> {
  return {
    ...getLegacyComBarePathMap(),
    "/cases/": "/da/case-studies/",
    ...Object.fromEntries(
      getDaCaseSlugs().flatMap((slug) => {
        const resolved = resolveCaseSlug(slug, "da");
        return [
          [`/case/${slug}/`, `/da/case-studies/${resolved}/`],
          [`/cases/${slug}/`, `/da/case-studies/${resolved}/`],
        ] as [string, string][];
      }),
    ),
    ...Object.fromEntries(
      Object.entries(legacyCaseSlugAliases).map(([oldSlug, newSlug]) => {
        const daSlug =
          newSlug.endsWith("-municipality")
            ? newSlug.replace("-municipality", "-kommune")
            : newSlug;
        return [`/case/${oldSlug}/`, `/da/case-studies/${daSlug}/`] as [string, string];
      }),
    ),
  };
}

/** Platform leaf pages → overview anchors (hub retired). */
export function getPlatformLeafRedirectMap(): Record<string, string> {
  return Object.fromEntries(
    SITE_LOCALES.flatMap((lang) =>
      platformHub.leaves.map((leaf) => {
        const source = routePath(`platform/${leaf.slug}`, lang);
        const target = `${routePath("platform", lang)}#${leaf.slug}`;
        return [source, target] as [string, string];
      }),
    ),
  );
}

/** Static path renames (excluding dynamic article/event maps). */
export function getStaticSiteRedirectMap(): Record<string, string> {
  const sensorRenames: Record<string, string> = {
    gateway: "cloud-connector",
    "motion-pir": "motion",
    "push-button": "touch",
  };
  const sensorRemoved = ["full", "mini", "full-plus-pir", "series-a", "series-b", "series-c"];

  const sensorEntries: [string, string][] = [];
  for (const [oldSlug, newSlug] of Object.entries(sensorRenames)) {
    sensorEntries.push([`/en/sensors/${oldSlug}/`, `/en/sensors/${newSlug}/`]);
    sensorEntries.push([`/en/shop/products/${oldSlug}/`, `/en/shop/products/${newSlug}/`]);
  }
  for (const slug of sensorRemoved) {
    sensorEntries.push([`/en/sensors/${slug}/`, "/en/sensors/"]);
    sensorEntries.push([`/en/shop/products/${slug}/`, "/en/shop/products/"]);
  }

  const compareEntries = SITE_LOCALES.map(
    (lang) => [`/${lang}/sensors/compare/`, `/${lang}/compare/`] as [string, string],
  );

  const pricingEntries = SITE_LOCALES.flatMap((lang) => [
    [`/${lang}/pricing/plans/`, `/${lang}/pricing/`],
    [`/${lang}/pricing/enterprise/`, `/${lang}/pricing/`],
  ] as [string, string][]);

  const trustEntries = SITE_LOCALES.flatMap((lang) => [
    [`/${lang}/about/d-label/`, `/${lang}/about/trust-center/`],
    [`/${lang}/about/d-maerket/`, `/${lang}/about/trust-center/`],
  ] as [string, string][]);

  /** German module slug renames — 301 old published URLs to localized slugs. */
  const deModuleSlugRedirects: [string, string][] = [
    ["/de/module/konservierung/", routePath("modules/preservation", "de")],
    ["/de/module/push-buttons/", routePath("modules/push-buttons", "de")],
    ["/de/module/usage-cleaning/", routePath("modules/usage-cleaning", "de")],
    ["/de/module/lockers-doors/", routePath("modules/lockers-doors", "de")],
  ];

  const articleSlugRenameEntries: [string, string][] = [];
  for (const [oldSlug, newSlug] of Object.entries(legacyArticleSlugAliases)) {
    for (const lang of SITE_LOCALES) {
      articleSlugRenameEntries.push([`/${lang}/articles/${oldSlug}/`, `/${lang}/articles/${newSlug}/`]);
      articleSlugRenameEntries.push([`/${lang}/library/${oldSlug}/`, `/${lang}/articles/${newSlug}/`]);
      articleSlugRenameEntries.push([`/${lang}/solutions/${oldSlug}/`, `/${lang}/articles/${newSlug}/`]);
      articleSlugRenameEntries.push([`/${lang}/compare/${oldSlug}/`, `/${lang}/compare/${newSlug}/`]);
    }
  }

  return Object.fromEntries([
    ["/", "/da/"],
    ["/en/cases/", "/en/case-studies/"],
    ["/da/cases/", "/da/case-studies/"],
    ["/de/cases/", "/de/case-studies/"],
    ["/sv/cases/", "/sv/case-studies/"],
    ["/da/case-studies/varde-kommune-3/", "/da/case-studies/varde-kommune/"],
    ["/en/case-studies/norddjurs-kommune/", "/en/case-studies/norddjurs-municipality/"],
    ["/en/case-studies/varde-kommune/", "/en/case-studies/varde-municipality/"],
    ["/en/case-studies/gribskov-kommune/", "/en/case-studies/gribskov-municipality/"],
    ...trustEntries,
    ...sensorEntries,
    ...compareEntries,
    ...pricingEntries,
    ...articleSlugRenameEntries,
    ...deModuleSlugRedirects,
  ]);
}

/** Full redirect map merged into astro.config.mjs `redirects`. */
export function getSiteRedirectMap(): Record<string, string> {
  const raw = {
    ...getStaticSiteRedirectMap(),
    ...getPlatformLeafRedirectMap(),
    ...getLegacyCaseSingularRedirectMap(),
    ...getSolutionsRedirectMap(),
    ...getLegacyArticlesRedirectMap(),
    ...getBarePathLegacyRedirectMap(),
    ...getEventRedirectMap(),
  };
  // Localize every target so redirects land in a single hop on the localized
  // destination. Sources stay as authored (legacy URLs we redirect *from*).
  return Object.fromEntries(
    Object.entries(raw).map(([source, target]) => [source, localizeRedirectTarget(target)]),
  );
}

/** Cross-domain rules — enforce on legacy hosts (see redirects/legacy-domains.caddy). */
export function getCrossDomainRedirectEntries(): RedirectEntry[] {
  const entries: RedirectEntry[] = [];
  const legacyHosts: LegacyHost[] = [
    "iot-fabrikken.uk",
    "iot-fabrikken.com",
    "iot-fabrikken.de",
    "iot-fabrikken.se",
  ];

  for (const host of legacyHosts) {
    const locale = LEGACY_HOST_LOCALE[host];
    const base = host === "iot-fabrikken.com" ? "https://iot-fabrikken.com" : `https://${host}`;
    const hosts =
      host === "iot-fabrikken.com"
        ? ["https://iot-fabrikken.com", "https://www.iot-fabrikken.com"]
        : host === "iot-fabrikken.se"
          ? ["https://iot-fabrikken.se", "https://www.iot-fabrikken.se"]
          : [base];

    for (const [legacyPath] of Object.entries(LEGACY_PATH_BY_HOST[host])) {
      const target = resolveLegacyPath(host, legacyPath);
      if (!target) continue;
      for (const origin of hosts) {
        entries.push({
          source: `${origin}${legacyPath === "/" ? "/" : legacyPath}`,
          target: localizeRedirectTarget(target),
          category: "cross-domain",
          status: "proposed",
          sourceHost: host,
        });
      }
    }

    const caseSlugs = locale === "da" ? getDaCaseSlugs() : getEnCaseSlugs();
    for (const origin of hosts) {
      for (const slug of caseSlugs) {
        const resolved = resolveCaseSlug(slug, locale);
        const target = localizeRedirectTarget(`${CANONICAL_SITE}/${locale}/case-studies/${resolved}/`);
        entries.push({
          source: `${origin}/case/${slug}/`,
          target,
          category: "cross-domain",
          status: "proposed",
          sourceHost: host,
        });
      }
      for (const [oldSlug, newSlug] of Object.entries(legacyCaseSlugAliases)) {
        const resolved = resolveCaseSlug(newSlug, locale);
        entries.push({
          source: `${origin}/case/${oldSlug}/`,
          target: localizeRedirectTarget(`${CANONICAL_SITE}/${locale}/case-studies/${resolved}/`),
          category: "cross-domain",
          status: "proposed",
          sourceHost: host,
        });
      }
      if (host === "iot-fabrikken.de") {
        for (const slug of getEnCaseSlugs()) {
          entries.push({
            source: `${origin}/projekte/${slug}/`,
            target: localizeRedirectTarget(`${CANONICAL_SITE}/de/case-studies/${slug}/`),
            category: "cross-domain",
            status: "proposed",
            sourceHost: host,
          });
        }
      }
    }
  }

  return entries;
}

function categorizePath(source: string): RedirectCategory {
  if (source === "/") return "root";
  if (source.startsWith("/case/") || source.includes("/case/")) return "legacy-case-singular";
  if (source.includes("/case-studies/") || source.includes("/cases/")) return "case-studies";
  if (source.includes("/about/")) return "about";
  if (source.includes("/shop/products/")) return "shop";
  if (source.includes("/sensors/")) return "sensors";
  if (source.includes("/compare/")) return "compare";
  if (source.includes("/pricing/")) return "pricing";
  if (source.includes("/library/")) return "library";
  if (source.includes("/blog/")) return "blog";
  if (source.includes("/solutions/")) return "solutions";
  if (source.includes("/events/")) return "events";
  if (!source.match(/^\/(en|da|de|sv)\//)) return "bare-path";
  return "case-studies";
}

/** Flat list for CSV export — configured site rules + proposed cross-domain rules. */
export function getAllRedirectEntries(): RedirectEntry[] {
  const siteMap = getSiteRedirectMap();
  const configured: RedirectEntry[] = Object.entries(siteMap).map(([source, target]) => ({
    source,
    target,
    category: categorizePath(source),
    status: "configured" as const,
  }));

  configured.push({
    source: "/{lang}/roi/calculator/results/",
    target: "/{lang}/roi/calculator/",
    category: "runtime",
    status: "configured",
  });

  return [...configured, ...getCrossDomainRedirectEntries()];
}
