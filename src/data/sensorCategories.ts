import type { SensorCategory } from "./hubs/types";
import { defaultLang, type Lang } from "./lang";

/** Display labels for the four official RoomAlyzer product lines. */
export const SENSOR_CATEGORY_LABELS: Record<SensorCategory, string> = {
  air: "RoomAlyzer Air",
  space: "RoomAlyzer Space",
  water: "RoomAlyzer Water",
  misc: "Miscellaneous",
};

/**
 * Localized category labels. The three RoomAlyzer line names are brand names
 * and never translated; only the generic "Miscellaneous" label is localized.
 */
const MISC_LABEL: Record<Lang, string> = {
  en: "Miscellaneous",
  da: "Diverse",
  de: "Sonstiges",
  sv: "Övrigt",
};

export function getSensorCategoryLabels(lang: Lang): Record<SensorCategory, string> {
  return {
    ...SENSOR_CATEGORY_LABELS,
    misc: MISC_LABEL[lang] ?? SENSOR_CATEGORY_LABELS.misc,
  };
}

/** Section order on sensors and product-sheets index pages. */
export const SENSOR_CATEGORY_ORDER: SensorCategory[] = [
  "air",
  "space",
  "water",
  "misc",
];

/**
 * Locales with their own product sheet PDFs (synced by
 * scripts/sync-product-sheets.mjs). English is canonical; Swedish has no
 * sheets yet and therefore falls back to the English PDF.
 */
const LOCALIZED_SHEET_LANGS = new Set<Lang>(["da", "de"]);

export function productSheetPath(slug: string, lang: Lang = defaultLang): string {
  if (LOCALIZED_SHEET_LANGS.has(lang)) {
    return `/downloads/product-sheets/${lang}/${slug}.pdf`;
  }
  return `/downloads/product-sheets/${slug}.pdf`;
}

/**
 * Sensor and brand names are not translated — with approved per-locale
 * exceptions. Keyed by sensor slug.
 */
const SENSOR_NAME_OVERRIDES: Partial<Record<string, Partial<Record<Lang, string>>>> = {
  "water-detector": { de: "Wasserdetektor" },
  outdoor: { de: "Außen Sensor" },
};

/**
 * Localized display name for a sensor. Returns the English name unchanged
 * unless an approved per-locale override exists. A trailing period in the
 * English title (e.g. "Water detector.") is preserved on the override.
 */
export function localizedSensorName(slug: string, englishName: string, lang: Lang): string {
  const override = SENSOR_NAME_OVERRIDES[slug]?.[lang];
  if (!override) return englishName;
  return /\.\s*$/.test(englishName) ? `${override}.` : override;
}
