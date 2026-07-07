import type { DimensionOverlayPreset } from "../../data/dimensionOverlayPresets";
import {
  dimensionBracketCalibration,
  type DimensionBracketCoords,
  type DimensionBracketSlot,
} from "../../data/dimensionBracketCalibration";
import type { Lang } from "../../data/lang";
import {
  dimensionAxisLetters,
  dimensionLabel,
  parseDimensionMm,
  pickAxisValue,
} from "./parse-dimensions";

export type ResolvedDimensionLabel = {
  text: string;
  x: number;
  y: number;
  dy?: number;
  textAnchor?: "start" | "middle" | "end";
  dominantBaseline?: "middle" | "hanging" | "auto";
};

function dimensionImageBasename(src: string): string {
  const path = src.split("?")[0] ?? src;
  const segments = path.split("/");
  return segments[segments.length - 1] ?? path;
}

export function resolveDimensionLabels(
  src: string,
  overlay: DimensionOverlayPreset,
  size: string,
  lang: Lang,
): ResolvedDimensionLabel[] {
  const parsed = parseDimensionMm(size);
  const letters = dimensionAxisLetters(lang);
  const basename = dimensionImageBasename(src);
  const calibration = dimensionBracketCalibration[
    basename as keyof typeof dimensionBracketCalibration
  ] as Partial<Record<DimensionBracketSlot, DimensionBracketCoords>> | undefined;

  const labels: ResolvedDimensionLabel[] = [];

  for (const slot of overlay.labels) {
    if ("text" in slot) {
      labels.push({
        text: slot.text,
        x: slot.x,
        y: slot.y,
        dy: slot.dy,
        textAnchor: slot.textAnchor,
        dominantBaseline: slot.dominantBaseline,
      });
      continue;
    }

    const value = pickAxisValue(parsed, slot.axis);
    if (value === undefined) continue;

    let x = slot.x;
    let y = slot.y;

    if (slot.slot && calibration?.[slot.slot]) {
      x = calibration[slot.slot]!.x;
      y = calibration[slot.slot]!.y;
    }

    if (x === undefined || y === undefined) continue;

    labels.push({
      text: dimensionLabel(slot.axis, value, letters),
      x,
      y,
      dy: slot.dy,
      textAnchor: slot.textAnchor,
      dominantBaseline: slot.dominantBaseline,
    });
  }

  return labels;
}
