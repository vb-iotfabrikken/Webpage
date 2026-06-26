/** Parsed H / W / D values from a product-sheet size string. */
export type ParsedDimensions = {
  h?: number;
  w?: number;
  d?: number;
};

/** e.g. `"H95 × W66 × D25 mm"` or `"H42 × W110 mm"` */
export function parseDimensionMm(size: string): ParsedDimensions {
  const read = (axis: "h" | "w" | "d") => {
    const match = size.match(new RegExp(`${axis}(\\d+(?:[.,]\\d+)?)`, "i"));
    if (!match) return undefined;
    return Number.parseFloat(match[1].replace(",", "."));
  };

  return { h: read("h"), w: read("w"), d: read("d") };
}

export type DimensionAxis = "h" | "w" | "d";

export type DimensionAxisLetters = Record<DimensionAxis, string>;

export function dimensionLabel(
  axis: DimensionAxis,
  value: number,
  letters: DimensionAxisLetters,
): string {
  const formatted = Number.isInteger(value) ? String(value) : String(value);
  return `${letters[axis]}${formatted} mm`;
}

export function pickAxisValue(
  parsed: ParsedDimensions,
  axis: DimensionAxis,
): number | undefined {
  return parsed[axis];
}

/** Localized H / W / D letter prefixes for dimension callouts on photos. */
export function dimensionAxisLetters(lang: string): DimensionAxisLetters {
  switch (lang) {
    case "de":
      return { h: "H", w: "B", d: "T" };
    case "da":
      return { h: "H", w: "B", d: "D" };
    case "sv":
      return { h: "H", w: "B", d: "D" };
    default:
      return { h: "H", w: "W", d: "D" };
  }
}
