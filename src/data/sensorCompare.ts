import type { SensorCategory } from "./hubs/types";
import { getSensorsHub } from "./hubs/sensors";
import { getSensorCategoryLabels } from "./sensorCategories";
import { getSensorContent } from "./content/sensors";
import { defaultLang, langPath, type Lang } from "./lang";
import { getCompareStrings } from "./i18n/sensorsCompare";

export type CompareCell = boolean | string;

export type CompareRow = {
  id: string;
  label: string;
  hint?: string;
};

export type CompareRowGroup = {
  id: string;
  label: string;
  rows: CompareRow[];
};

export type CompareSensor = {
  slug: string;
  name: string;
  category: SensorCategory;
  categoryLabel: string;
  tagline: string;
  batteryLife: string;
  connectivity: string;
  href: string;
  productSheetUrl?: string;
};

/** Capability matrix — `true` = yes, string = qualified yes or note, `false` = no. */
export const compareMatrix: Record<string, Record<string, CompareCell>> = {
  co2: {
    co2: true,
    temperature: true,
    humidity: true,
    voc: false,
    outdoorRated: false,
    occupancy: false,
    deskOccupancy: false,
    openClose: false,
    touch: false,
    waterSpot: false,
    waterLine: false,
    nbIot: false,
    cloudConnector: true,
    extendsRange: false,
  },
  "full-plus": {
    co2: true,
    temperature: true,
    humidity: true,
    voc: true,
    outdoorRated: false,
    occupancy: false,
    deskOccupancy: false,
    openClose: false,
    touch: false,
    waterSpot: false,
    waterLine: false,
    nbIot: true,
    cloudConnector: false,
    extendsRange: false,
  },
  humidity: {
    co2: false,
    temperature: true,
    humidity: true,
    voc: false,
    outdoorRated: false,
    occupancy: false,
    deskOccupancy: false,
    openClose: false,
    touch: false,
    waterSpot: false,
    waterLine: false,
    nbIot: false,
    cloudConnector: true,
    extendsRange: false,
  },
  "mini-plus": {
    co2: false,
    temperature: true,
    humidity: true,
    voc: false,
    outdoorRated: false,
    occupancy: false,
    deskOccupancy: false,
    openClose: false,
    touch: false,
    waterSpot: false,
    waterLine: false,
    nbIot: true,
    cloudConnector: false,
    extendsRange: false,
  },
  "mini-plus-pir": {
    co2: false,
    temperature: true,
    humidity: true,
    voc: false,
    outdoorRated: false,
    occupancy: true,
    deskOccupancy: false,
    openClose: false,
    touch: false,
    waterSpot: false,
    waterLine: false,
    nbIot: true,
    cloudConnector: false,
    extendsRange: false,
  },
  outdoor: {
    co2: false,
    temperature: true,
    humidity: true,
    voc: false,
    outdoorRated: true,
    occupancy: false,
    deskOccupancy: false,
    openClose: false,
    touch: false,
    waterSpot: false,
    waterLine: false,
    nbIot: true,
    cloudConnector: false,
    extendsRange: false,
  },
  temperature: {
    co2: false,
    temperature: true,
    humidity: false,
    voc: false,
    outdoorRated: false,
    occupancy: false,
    deskOccupancy: false,
    openClose: false,
    touch: false,
    waterSpot: false,
    waterLine: false,
    nbIot: false,
    cloudConnector: true,
    extendsRange: false,
  },
  desk: {
    co2: false,
    temperature: true,
    humidity: false,
    voc: false,
    outdoorRated: false,
    occupancy: false,
    deskOccupancy: true,
    openClose: false,
    touch: false,
    waterSpot: false,
    waterLine: false,
    nbIot: false,
    cloudConnector: true,
    extendsRange: false,
  },
  motion: {
    co2: false,
    temperature: false,
    humidity: false,
    voc: false,
    outdoorRated: false,
    occupancy: true,
    deskOccupancy: false,
    openClose: false,
    touch: false,
    waterSpot: false,
    waterLine: false,
    nbIot: false,
    cloudConnector: true,
    extendsRange: false,
  },
  "open-close": {
    co2: false,
    temperature: false,
    humidity: false,
    voc: false,
    outdoorRated: false,
    occupancy: false,
    deskOccupancy: false,
    openClose: true,
    touch: false,
    waterSpot: false,
    waterLine: false,
    nbIot: false,
    cloudConnector: true,
    extendsRange: false,
  },
  touch: {
    co2: false,
    temperature: false,
    humidity: false,
    voc: false,
    outdoorRated: false,
    occupancy: false,
    deskOccupancy: false,
    openClose: false,
    touch: true,
    waterSpot: false,
    waterLine: false,
    nbIot: false,
    cloudConnector: true,
    extendsRange: false,
  },
  "water-detector": {
    co2: false,
    temperature: false,
    humidity: false,
    voc: false,
    outdoorRated: "IP67 variant",
    occupancy: false,
    deskOccupancy: false,
    openClose: false,
    touch: false,
    waterSpot: true,
    waterLine: false,
    nbIot: true,
    cloudConnector: false,
    extendsRange: false,
  },
  "water-rope": {
    co2: false,
    temperature: false,
    humidity: false,
    voc: false,
    outdoorRated: false,
    occupancy: false,
    deskOccupancy: false,
    openClose: false,
    touch: false,
    waterSpot: false,
    waterLine: true,
    nbIot: true,
    cloudConnector: false,
    extendsRange: false,
  },
  "cloud-connector": {
    co2: false,
    temperature: false,
    humidity: false,
    voc: false,
    outdoorRated: false,
    occupancy: false,
    deskOccupancy: false,
    openClose: false,
    touch: false,
    waterSpot: false,
    waterLine: false,
    nbIot: false,
    cloudConnector: "Gateway",
    extendsRange: false,
  },
  "range-extender-and-bracket": {
    co2: false,
    temperature: false,
    humidity: false,
    voc: false,
    outdoorRated: false,
    occupancy: false,
    deskOccupancy: false,
    openClose: false,
    touch: false,
    waterSpot: false,
    waterLine: false,
    nbIot: false,
    cloudConnector: false,
    extendsRange: true,
  },
};

/** Capability row groups in display order (labels/hints are localized). */
const rowGroupOrder: { id: string; rowIds: string[] }[] = [
  { id: "climate", rowIds: ["co2", "temperature", "humidity", "voc", "outdoorRated"] },
  { id: "space", rowIds: ["occupancy", "deskOccupancy", "openClose", "touch"] },
  { id: "water", rowIds: ["waterSpot", "waterLine"] },
  { id: "connectivity", rowIds: ["nbIot", "cloudConnector", "extendsRange"] },
];

export function getCompareRowGroups(lang: Lang = defaultLang): CompareRowGroup[] {
  const rg = getCompareStrings(lang).rowGroups;
  return rowGroupOrder.map((group) => ({
    id: group.id,
    label: rg[group.id].label,
    rows: group.rowIds.map((rowId) => ({
      id: rowId,
      label: rg[group.id].rows[rowId].label,
      hint: rg[group.id].rows[rowId].hint,
    })),
  }));
}

/** Capability matrix with localized string cells (booleans are untouched). */
export function getCompareMatrix(lang: Lang = defaultLang): Record<string, Record<string, CompareCell>> {
  const cells = getCompareStrings(lang).cells;
  const out: Record<string, Record<string, CompareCell>> = {};
  for (const [slug, row] of Object.entries(compareMatrix)) {
    const next: Record<string, CompareCell> = { ...row };
    if (next.outdoorRated === "IP67 variant") next.outdoorRated = cells.ip67Variant;
    if (next.cloudConnector === "Gateway") next.cloudConnector = cells.gateway;
    out[slug] = next;
  }
  return out;
}

type BatterySpec =
  | { kind: "years"; years: number }
  | { kind: "multi" }
  | { kind: "mains" }
  | { kind: "passive" };

const batteryBySlug: Record<string, BatterySpec> = {
  co2: { kind: "years", years: 10 },
  "full-plus": { kind: "years", years: 10 },
  humidity: { kind: "years", years: 15 },
  "mini-plus": { kind: "years", years: 10 },
  "mini-plus-pir": { kind: "years", years: 10 },
  outdoor: { kind: "years", years: 8 },
  temperature: { kind: "years", years: 15 },
  desk: { kind: "years", years: 9 },
  motion: { kind: "years", years: 15 },
  "open-close": { kind: "years", years: 15 },
  touch: { kind: "years", years: 15 },
  "water-detector": { kind: "multi" },
  "water-rope": { kind: "multi" },
  "cloud-connector": { kind: "mains" },
  "range-extender-and-bracket": { kind: "passive" },
};

type ConnectivityKey = "cloudConnector" | "nbIotStandalone" | "cellularGateway" | "accessory";

const connectivityBySlug: Record<string, ConnectivityKey> = {
  co2: "cloudConnector",
  "full-plus": "nbIotStandalone",
  humidity: "cloudConnector",
  "mini-plus": "nbIotStandalone",
  "mini-plus-pir": "nbIotStandalone",
  outdoor: "nbIotStandalone",
  temperature: "cloudConnector",
  desk: "cloudConnector",
  motion: "cloudConnector",
  "open-close": "cloudConnector",
  touch: "cloudConnector",
  "water-detector": "nbIotStandalone",
  "water-rope": "nbIotStandalone",
  "cloud-connector": "cellularGateway",
  "range-extender-and-bracket": "accessory",
};

function batteryLabel(slug: string, lang: Lang): string {
  const b = getCompareStrings(lang).battery;
  const spec = batteryBySlug[slug];
  if (!spec) return b.varies;
  switch (spec.kind) {
    case "years":
      return b.upToYears.replace("{n}", String(spec.years));
    case "multi":
      return b.multiYear;
    case "mains":
      return b.mains;
    case "passive":
      return b.passive;
    default:
      return b.varies;
  }
}

function connectivityLabel(slug: string, lang: Lang): string {
  const c = getCompareStrings(lang).connectivity;
  const key = connectivityBySlug[slug];
  return key ? c[key] : c.seeProductSheet;
}

/** Use-case filters in display order (slugs are language-neutral). */
const useCaseOrder: { id: string; slugs: string[] }[] = [
  { id: "classroom", slugs: ["co2", "full-plus", "mini-plus"] },
  { id: "hybrid-office", slugs: ["desk", "motion", "mini-plus-pir", "full-plus"] },
  { id: "heritage", slugs: ["humidity", "mini-plus", "full-plus", "outdoor"] },
  { id: "cold-chain", slugs: ["temperature"] },
  { id: "leak", slugs: ["water-detector", "water-rope"] },
  { id: "fm-service", slugs: ["touch", "motion", "open-close"] },
];

export function getCompareUseCases(
  lang: Lang = defaultLang,
): { id: string; label: string; description: string; slugs: string[] }[] {
  const uc = getCompareStrings(lang).useCases;
  return useCaseOrder.map((item) => ({
    id: item.id,
    label: uc[item.id].label,
    description: uc[item.id].description,
    slugs: item.slugs,
  }));
}

export function getCompareSensors(lang: Lang = defaultLang): CompareSensor[] {
  const hub = getSensorsHub(lang);
  const labels = getSensorCategoryLabels(lang);

  return hub.leaves
    .filter((leaf) => leaf.slug !== "compare" && leaf.category)
    .map((leaf) => {
      const content = getSensorContent(leaf.slug, lang);
      // The sensors hub always carries a SensorCategory here (HubLeaf.category
      // is a union shared with the case-studies hub).
      const category = leaf.category as SensorCategory;

      return {
        slug: leaf.slug,
        name: leaf.title.replace(/\.$/, ""),
        category,
        categoryLabel: labels[category],
        tagline: content?.useCases ?? leaf.lead,
        batteryLife: batteryLabel(leaf.slug, lang),
        connectivity: connectivityLabel(leaf.slug, lang),
        href: langPath(`/sensors/${leaf.slug}/`, lang),
        productSheetUrl: leaf.productSheetUrl,
      };
    });
}

export function getCompareSensorsByCategory(lang: Lang = defaultLang): {
  category: SensorCategory;
  label: string;
  sensors: CompareSensor[];
}[] {
  const sensors = getCompareSensors(lang);
  const labels = getSensorCategoryLabels(lang);
  const order: SensorCategory[] = ["air", "space", "water", "misc"];

  return order.map((category) => ({
    category,
    label: labels[category],
    sensors: sensors.filter((s) => s.category === category),
  }));
}
