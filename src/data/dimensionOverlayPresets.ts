/**
 * Label placement for dimension photos with baked-in bracket guides.
 * Coordinates are percentages of the square frame (0–100), tuned to
 * `Sensor Product Pictures/Dimension/` assets (2026 bracket layout).
 */
import type { DimensionAxis } from "../lib/sensors/parse-dimensions";

export type DimensionAxisLabelSlot = {
  axis: DimensionAxis;
  x: number;
  y: number;
  /** Nudge in viewBox units (negative = up). */
  dy?: number;
  textAnchor?: "start" | "middle" | "end";
  dominantBaseline?: "middle" | "hanging" | "auto";
};

export type DimensionStaticLabelSlot = {
  text: string;
  x: number;
  y: number;
  /** Nudge in viewBox units (negative = up). */
  dy?: number;
  textAnchor?: "start" | "middle" | "end";
  dominantBaseline?: "middle" | "hanging" | "auto";
};

export type DimensionLabelSlot = DimensionAxisLabelSlot | DimensionStaticLabelSlot;

export type DimensionOverlayPreset = {
  labels: DimensionLabelSlot[];
};

export const dimensionOverlayPresets = {
  /** CO2, Cloud connector, Outdoor. */
  bracketSideStandard: {
    labels: [
      { axis: "w", x: 50, y: 65, textAnchor: "middle", dominantBaseline: "middle" },
      { axis: "h", x: 73, y: 36, textAnchor: "middle", dominantBaseline: "middle" },
    ],
  },
  /** Open/Close — small unit. */
  bracketSideOpenCloseSmall: {
    labels: [
      { axis: "w", x: 49.95, y: 63.01, dy: -0.7, textAnchor: "middle", dominantBaseline: "middle" },
      { axis: "h", x: 61.8, y: 42.87, dy: -0.55, textAnchor: "middle", dominantBaseline: "middle" },
    ],
  },
  /** Open/Close — large unit. */
  bracketSideOpenCloseLarge: {
    labels: [
      { axis: "w", x: 49.95, y: 63.01, dy: -0.7, textAnchor: "middle", dominantBaseline: "middle" },
      { axis: "h", x: 61.8, y: 38.98, dy: -0.55, textAnchor: "middle", dominantBaseline: "middle" },
    ],
  },
  /** Water detector / Water rope — Compact (IP30). */
  bracketSideWaterCompact: {
    labels: [
      { axis: "w", x: 50, y: 65, textAnchor: "middle", dominantBaseline: "middle" },
      { axis: "h", x: 73, y: 36, textAnchor: "middle", dominantBaseline: "middle" },
      { text: "IP 30", x: 50, y: 20, textAnchor: "middle", dominantBaseline: "middle" },
    ],
  },
  /** Water detector / Water rope — Pro (IP67). */
  bracketSideWaterPro: {
    labels: [
      { axis: "w", x: 50, y: 65, textAnchor: "middle", dominantBaseline: "middle" },
      { axis: "h", x: 73, y: 36, textAnchor: "middle", dominantBaseline: "middle" },
      { text: "IP 67", x: 50, y: 20, textAnchor: "middle", dominantBaseline: "middle" },
    ],
  },
  /** Mini+, Full+, Mini+ PIR. */
  bracketSideWide: {
    labels: [
      { axis: "w", x: 50, y: 65, textAnchor: "middle", dominantBaseline: "middle" },
      { axis: "h", x: 67, y: 37.5, textAnchor: "middle", dominantBaseline: "middle" },
    ],
  },
  /** Humidity. */
  bracketSideHumidity: {
    labels: [
      { axis: "w", x: 50, y: 63.5, textAnchor: "middle", dominantBaseline: "middle" },
      { axis: "h", x: 63.2, y: 39, textAnchor: "middle", dominantBaseline: "middle" },
    ],
  },
  /** Motion. */
  bracketSideMotion: {
    labels: [
      { axis: "w", x: 50, y: 65, textAnchor: "middle", dominantBaseline: "middle" },
      { axis: "h", x: 60.6, y: 36.5, textAnchor: "middle", dominantBaseline: "middle" },
    ],
  },
  /** Touch. */
  bracketSideMid: {
    labels: [
      { axis: "w", x: 51, y: 65, textAnchor: "middle", dominantBaseline: "middle" },
      { axis: "h", x: 63, y: 36, textAnchor: "middle", dominantBaseline: "middle" },
    ],
  },
  /** Range extender — kit part. */
  bracketSideKitRange: {
    labels: [
      { axis: "w", x: 52.5, y: 65, textAnchor: "middle", dominantBaseline: "middle" },
      { axis: "h", x: 62, y: 36, textAnchor: "middle", dominantBaseline: "middle" },
    ],
  },
  /** Mounting bracket — kit part. */
  bracketSideKitBracket: {
    labels: [
      { axis: "w", x: 50.5, y: 65, textAnchor: "middle", dominantBaseline: "middle" },
      { axis: "h", x: 63, y: 36, textAnchor: "middle", dominantBaseline: "middle" },
    ],
  },
  /** Temperature, Desk — isometric coin. */
  bracketIsometric: {
    labels: [
      { axis: "w", x: 36.3, y: 64.6, textAnchor: "middle", dominantBaseline: "middle" },
      { axis: "h", x: 75.2, y: 51, textAnchor: "middle", dominantBaseline: "middle" },
    ],
  },
} as const satisfies Record<string, DimensionOverlayPreset>;

export type DimensionOverlayPresetKey = keyof typeof dimensionOverlayPresets;
