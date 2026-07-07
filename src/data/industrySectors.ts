import type { NavStrings } from "./i18n/ui";
import { langPath, type Lang } from "./lang";

/** Query param on the industries hub for pre-filtering by sector. */
export const INDUSTRY_SECTOR_QUERY_PARAM = "sector";

/** Canonical sector identifiers for industry hub grouping and nav columns. */
export type IndustrySectorId =
  | "public-health"
  | "commercial"
  | "culture"
  | "property";

/** Keys into `nav.industryColumns` for localized sector labels. */
export type IndustrySectorLabelKey =
  | "publicHealth"
  | "commercial"
  | "culture"
  | "property";

export type IndustrySector = {
  id: IndustrySectorId;
  labelKey: IndustrySectorLabelKey;
  slugs: readonly string[];
};

/** Single source of truth: every industry leaf slug belongs to exactly one sector. */
export const industrySectors: readonly IndustrySector[] = [
  {
    id: "public-health",
    labelKey: "publicHealth",
    slugs: ["municipalities", "schools", "hospitals", "elderly-care"],
  },
  {
    id: "commercial",
    labelKey: "commercial",
    slugs: ["offices", "warehouses-logistics", "hotels", "retail"],
  },
  {
    id: "culture",
    labelKey: "culture",
    slugs: [
      "museums-galleries",
      "archives-libraries",
      "churches",
      "manors-castles",
    ],
  },
  {
    id: "property",
    labelKey: "property",
    slugs: ["property-management", "fm-companies", "consulting-engineers"],
  },
];

const sectorBySlug = new Map<string, IndustrySectorId>(
  industrySectors.flatMap((sector) =>
    sector.slugs.map((slug) => [slug, sector.id] as const),
  ),
);

/** Resolve the sector id for an industry hub leaf slug. */
export function industrySectorIdForSlug(slug: string): IndustrySectorId | undefined {
  return sectorBySlug.get(slug);
}

/** Localized sector label from nav chrome strings. */
export function industrySectorLabel(
  labelKey: IndustrySectorLabelKey,
  nav: NavStrings,
): string {
  return nav.industryColumns[labelKey];
}

const sectorIds = new Set<string>(industrySectors.map((s) => s.id));

/** Validate a raw query-param value against known sector ids. */
export function parseIndustrySectorParam(
  value: string | null,
): IndustrySectorId | undefined {
  if (!value || !sectorIds.has(value)) return undefined;
  return value as IndustrySectorId;
}

/** Industries hub URL, optionally pre-filtered to one sector. */
export function industryHubHref(
  lang: Lang,
  sectorId?: IndustrySectorId,
): string {
  const base = langPath("industries", lang);
  if (!sectorId) return base;
  return `${base}?${INDUSTRY_SECTOR_QUERY_PARAM}=${sectorId}`;
}
