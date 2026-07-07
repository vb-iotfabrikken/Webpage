/**
 * Physical dimensions and weights from official RoomAlyzer product sheets
 * (`Productsheets/EN/`). Re-check when PDFs change.
 *
 * Side-view photography is synced from `Pictures/Sensors/Dimensions/`
 * into `public/images/sensors/` via `scripts/sync-sensor-dimension-images.mjs`.
 *
 * When adding a new sensor dimension gallery:
 * 1. Add source PNG + mapping in scripts/lib/dimension-image-mappings.mjs
 * 2. Run `npm run sync-sensor-dimensions` (sync WebP + regenerate bracket calibration)
 * 3. Add an entry below with `bracketSide` (or `bracketIsometric` / water preset)
 */

import type { DimensionOverlayPresetKey } from "./dimensionOverlayPresets";
import { dimensionOverlayPresets } from "./dimensionOverlayPresets";

const BASE = "/images/sensors";

export type SensorDimensionLine = {
  label?: string;
  size: string;
  weight?: string;
};

export type SensorDimensionSpec =
  | { kind: "single"; lines: [SensorDimensionLine] }
  | { kind: "variants"; lines: [SensorDimensionLine, SensorDimensionLine] }
  | { kind: "kit"; lines: SensorDimensionLine[] };

export type SensorDimensionImages =
  | { kind: "single"; src: string; alt: string }
  | { kind: "variants"; compact: { src: string; alt: string }; pro: { src: string; alt: string } }
  | { kind: "kit"; parts: Array<{ src: string; alt: string; labelKey: "rangeExtender" | "bracket" }> };

type SensorDimensionEntry = {
  spec: SensorDimensionSpec;
  images: SensorDimensionImages;
  /** Bracket placement preset for a single side-view photo. */
  overlay?: DimensionOverlayPresetKey;
  variantOverlays?: {
    compact: DimensionOverlayPresetKey;
    pro: DimensionOverlayPresetKey;
  };
  kitOverlays?: {
    rangeExtender: DimensionOverlayPresetKey;
    bracket: DimensionOverlayPresetKey;
  };
};

/** Canonical specs keyed by sensor slug. */
export const sensorDimensions: Partial<Record<string, SensorDimensionEntry>> = {
  co2: {
    spec: { kind: "single", lines: [{ size: "H95 × W66 × D25 mm", weight: "116 g" }] },
    overlay: "bracketSide",
    images: {
      kind: "single",
      src: `${BASE}/co2-dimensions.webp`,
      alt: "RoomAlyzer Air CO2 sensor, side view for physical dimensions",
    },
  },
  "full-plus": {
    spec: { kind: "single", lines: [{ size: "H124 × W60 × D26 mm", weight: "130 g" }] },
    overlay: "bracketSide",
    images: {
      kind: "single",
      src: `${BASE}/full-plus-dimensions.webp`,
      alt: "RoomAlyzer Air Full+ sensor, side view for physical dimensions",
    },
  },
  humidity: {
    spec: { kind: "single", lines: [{ size: "H39 × W23 × D12 mm", weight: "9.3 g" }] },
    overlay: "bracketSide",
    images: {
      kind: "single",
      src: `${BASE}/humidity-dimensions.webp`,
      alt: "RoomAlyzer Air Humidity sensor, side view for physical dimensions",
    },
  },
  "mini-plus": {
    spec: { kind: "single", lines: [{ size: "H124 × W60 × D26 mm", weight: "130 g" }] },
    overlay: "bracketSide",
    images: {
      kind: "single",
      src: `${BASE}/mini-plus-dimensions.webp`,
      alt: "RoomAlyzer Air Mini+ sensor, side view with height and width dimensions (124 × 60 × 26 mm)",
    },
  },
  "mini-plus-pir": {
    spec: { kind: "single", lines: [{ size: "H124 × W60 × D26 mm", weight: "130 g" }] },
    overlay: "bracketSide",
    images: {
      kind: "single",
      src: `${BASE}/mini-plus-pir-dimensions.webp`,
      alt: "RoomAlyzer Air Mini+ PIR sensor, side view for physical dimensions",
    },
  },
  outdoor: {
    spec: { kind: "single", lines: [{ size: "H132 × W80 × D30 mm", weight: "283 g" }] },
    overlay: "bracketSide",
    images: {
      kind: "single",
      src: `${BASE}/outdoor-dimensions.webp`,
      alt: "RoomAlyzer Air Outdoor sensor, side view for physical dimensions",
    },
  },
  temperature: {
    spec: { kind: "single", lines: [{ size: "H19 × W19 × D3.5 mm", weight: "3 g" }] },
    overlay: "bracketIsometric",
    images: {
      kind: "single",
      src: `${BASE}/temperature-dimensions.webp`,
      alt: "RoomAlyzer Air Temperature sensor, side view for physical dimensions",
    },
  },
  desk: {
    spec: { kind: "single", lines: [{ size: "H19 × W19 × D3.5 mm", weight: "3 g" }] },
    overlay: "bracketIsometric",
    images: {
      kind: "single",
      src: `${BASE}/desk-dimensions.webp`,
      alt: "RoomAlyzer Space Desk sensor, side view for physical dimensions",
    },
  },
  motion: {
    spec: { kind: "single", lines: [{ size: "H42 × W110 mm", weight: "123 g" }] },
    overlay: "bracketSide",
    images: {
      kind: "single",
      src: `${BASE}/motion-dimensions.webp`,
      alt: "RoomAlyzer Space Motion sensor, side view for physical dimensions",
    },
  },
  "open-close": {
    spec: {
      kind: "variants",
      lines: [
        { label: "smallUnit", size: "H25 × W10 × D10 mm" },
        { label: "largeUnit", size: "H38 × W23 × D10 mm" },
      ],
    },
    variantOverlays: { compact: "bracketSideOpenClose", pro: "bracketSideOpenClose" },
    images: {
      kind: "variants",
      compact: {
        src: `${BASE}/open-close-dimensions-compact.webp`,
        alt: "RoomAlyzer Space Open/Close sensor, small unit, side view for physical dimensions",
      },
      pro: {
        src: `${BASE}/open-close-dimensions-pro.webp`,
        alt: "RoomAlyzer Space Open/Close sensor, large unit, side view for physical dimensions",
      },
    },
  },
  touch: {
    spec: { kind: "single", lines: [{ size: "H19 × W19 × D3.5 mm", weight: "3 g" }] },
    overlay: "bracketSide",
    images: {
      kind: "single",
      src: `${BASE}/touch-dimensions.webp`,
      alt: "RoomAlyzer Space Touch sensor, side view for physical dimensions",
    },
  },
  "water-detector": {
    spec: {
      kind: "variants",
      lines: [
        { label: "compact", size: "H95 × W66 × D25 mm" },
        { label: "pro", size: "H132 × W80 × D30 mm" },
      ],
    },
    variantOverlays: { compact: "bracketSideWaterCompact", pro: "bracketSideWaterPro" },
    images: {
      kind: "variants",
      compact: {
        src: `${BASE}/water-detector-dimensions-compact.webp`,
        alt: "RoomAlyzer Water detector Compact (IP30), side view for physical dimensions",
      },
      pro: {
        src: `${BASE}/water-detector-dimensions-pro.webp`,
        alt: "RoomAlyzer Water detector Pro (IP67), side view for physical dimensions",
      },
    },
  },
  "water-rope": {
    spec: {
      kind: "variants",
      lines: [
        { label: "compact", size: "H95 × W66 × D25 mm" },
        { label: "pro", size: "H124 × W60 × D26 mm" },
      ],
    },
    variantOverlays: { compact: "bracketSideWaterCompact", pro: "bracketSideWaterPro" },
    images: {
      kind: "variants",
      compact: {
        src: `${BASE}/water-rope-dimensions-compact.webp`,
        alt: "RoomAlyzer Water rope Compact (IP30), side view for physical dimensions",
      },
      pro: {
        src: `${BASE}/water-rope-dimensions-pro.webp`,
        alt: "RoomAlyzer Water rope Pro (IP67), side view for physical dimensions",
      },
    },
  },
  "cloud-connector": {
    spec: { kind: "single", lines: [{ size: "H153 × W114 × D30 mm", weight: "200 g" }] },
    overlay: "bracketSide",
    images: {
      kind: "single",
      src: `${BASE}/cloud-connector-dimensions.webp`,
      alt: "RoomAlyzer Cloud connector, side view for physical dimensions",
    },
  },
  "range-extender-and-bracket": {
    spec: {
      kind: "kit",
      lines: [
        { label: "rangeExtender", size: "H72 × W32 × D7 mm", weight: "7 g" },
        { label: "bracket", size: "H100 × W40 × D15 mm", weight: "7 g" },
      ],
    },
    kitOverlays: { rangeExtender: "bracketSide", bracket: "bracketSide" },
    images: {
      kind: "kit",
      parts: [
        {
          src: `${BASE}/range-extender-dimensions.webp`,
          alt: "RoomAlyzer range extender, side view for physical dimensions",
          labelKey: "rangeExtender",
        },
        {
          src: `${BASE}/bracket-dimensions.webp`,
          alt: "RoomAlyzer mounting bracket, side view for physical dimensions",
          labelKey: "bracket",
        },
      ],
    },
  },
};

export function getSensorDimensions(slug: string): SensorDimensionEntry | undefined {
  return sensorDimensions[slug];
}

export function getDimensionOverlayPreset(key: DimensionOverlayPresetKey) {
  return dimensionOverlayPresets[key];
}

export function sensorHasDimensionGallery(slug: string): boolean {
  return slug in sensorDimensions;
}
