/**
 * On-page technical specifications for enhanced sensor product pages.
 * Canonical values from official product sheets (`Productsheets/EN/`).
 */
import type { Lang } from "./lang";
import { defaultLang } from "./lang";
import { sensorTechnicalSpecEntries } from "./sensorTechnicalSpecs.entries";
import { sensorTechnicalSpecsI18n } from "./sensorTechnicalSpecs.i18n";

export const ENHANCED_PRODUCT_PAGE_SLUGS = Object.keys(
  sensorTechnicalSpecEntries,
) as readonly (keyof typeof sensorTechnicalSpecEntries)[];

export type EnhancedProductPageSlug = (typeof ENHANCED_PRODUCT_PAGE_SLUGS)[number];

export function isEnhancedProductPage(slug: string): slug is EnhancedProductPageSlug {
  return slug in sensorTechnicalSpecEntries;
}

export type SpecRowId =
  | "productLine"
  | "measurements"
  | "dimensions"
  | "measuringRange"
  | "operatingRange"
  | "operatingConditions"
  | "fieldOfView"
  | "precision"
  | "longTermDrift"
  | "battery"
  | "connectivity"
  | "simCard"
  | "wirelessRange"
  | "voltage"
  | "ipRating"
  | "probe"
  | "maintenance"
  | "activation"
  | "controlSoftware"
  | "mounting"
  | "material"
  | "application"
  | "certification";

export type SpecRow = {
  id: SpecRowId;
  /** English canonical value; localized via `sensorTechnicalSpecsI18n` when present. */
  value: string;
};

export type SensorTechnicalSpecEntry = {
  rows: SpecRow[];
  /** Optional compliance note shown below the table. */
  complianceNote?: string;
};

const sensorTechnicalSpecs = sensorTechnicalSpecEntries as Partial<
  Record<string, SensorTechnicalSpecEntry>
>;

export function getSensorTechnicalSpecs(slug: string): SensorTechnicalSpecEntry | undefined {
  const entry = sensorTechnicalSpecs[slug];
  if (!entry) return undefined;
  return entry;
}

/** Spec rows with localized values where translations exist. */
export function getLocalizedSensorTechnicalSpecs(
  slug: string,
  lang: Lang = defaultLang,
): SensorTechnicalSpecEntry | undefined {
  const entry = getSensorTechnicalSpecs(slug);
  if (!entry) return undefined;

  const valueOverrides = sensorTechnicalSpecsI18n[lang]?.[slug]?.values ?? {};
  const complianceNote =
    sensorTechnicalSpecsI18n[lang]?.[slug]?.complianceNote ?? entry.complianceNote;

  return {
    complianceNote,
    rows: entry.rows.map((row) => ({
      ...row,
      value: valueOverrides[row.id] ?? row.value,
    })),
  };
}

const SCHEMA_PROPERTY_ROWS: SpecRowId[] = [
  "measurements",
  "dimensions",
  "connectivity",
  "battery",
  "precision",
];

/** Key spec rows for Product JSON-LD `additionalProperty`. */
export function getSensorProductSchemaProperties(
  slug: string,
  lang: Lang = defaultLang,
  rowLabels?: Partial<Record<SpecRowId, string>>,
): Array<{ name: string; value: string }> | undefined {
  const specs = getLocalizedSensorTechnicalSpecs(slug, lang);
  if (!specs) return undefined;

  return SCHEMA_PROPERTY_ROWS.flatMap((id) => {
    const row = specs.rows.find((entry) => entry.id === id);
    if (!row) return [];
    const name = rowLabels?.[id] ?? id;
    return [{ name, value: row.value }];
  });
}
