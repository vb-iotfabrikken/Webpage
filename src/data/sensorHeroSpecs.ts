/**
 * Short hero spec chips for enhanced sensor product pages.
 */
import type { Lang } from "./lang";
import { defaultLang } from "./lang";
import { isEnhancedProductPage } from "./sensorTechnicalSpecs";

const cloudChips = (
  battery: string,
  dimensions: string,
  measurements: string,
): string[] => ["Cloud Connector · no Wi-Fi", battery, dimensions, measurements];

const nbIotChips = (
  battery: string,
  dimensions: string,
  measurements: string,
): string[] => ["NB-IoT · no Wi-Fi", battery, dimensions, measurements];

const heroSpecsBySlug: Partial<Record<string, Partial<Record<Lang, string[]>>>> = {
  co2: {
    en: cloudChips(
      "Up to 10 years battery",
      "H95 × W66 × D25 mm",
      "CO₂, temperature & humidity",
    ),
  },
  "full-plus": {
    en: nbIotChips(
      "Up to 10 years battery",
      "H124 × W60 × D26 mm",
      "CO₂, temperature, humidity & TVOC",
    ),
  },
  humidity: {
    en: cloudChips(
      "Up to 15 years battery",
      "H39 × W23 × D12 mm",
      "Temperature & humidity",
    ),
  },
  "mini-plus": {
    en: nbIotChips(
      "Up to 10 years battery",
      "H124 × W60 × D26 mm",
      "Temperature & humidity",
    ),
    da: [
      "NB-IoT · uden Wi-Fi",
      "Op til 10 års batteri",
      "H124 × B60 × D26 mm",
      "Temperatur og luftfugtighed",
    ],
    de: [
      "NB-IoT · ohne Wi-Fi",
      "Bis zu 10 Jahre Batterie",
      "H124 × B60 × T26 mm",
      "Temperatur & Luftfeuchtigkeit",
    ],
    sv: [
      "NB-IoT · utan Wi-Fi",
      "Upp till 10 års batteri",
      "H124 × B60 × D26 mm",
      "Temperatur & luftfuktighet",
    ],
  },
  "mini-plus-pir": {
    en: nbIotChips(
      "Up to 10 years battery",
      "H124 × W60 × D26 mm",
      "Climate & occupancy (PIR)",
    ),
  },
  outdoor: {
    en: nbIotChips(
      "Up to 8 years battery",
      "H132 × W80 × D30 mm",
      "Outdoor temperature & humidity",
    ),
  },
  temperature: {
    en: cloudChips("Up to 15 years battery", "H19 × W19 × D3.5 mm", "Temperature"),
  },
  desk: {
    en: cloudChips(
      "Up to 9 years battery",
      "H19 × W19 × D3.5 mm",
      "Desk occupancy & temperature",
    ),
  },
  motion: {
    en: cloudChips(
      "Up to 15 years battery",
      "H42 × W110 mm",
      "360° PIR presence",
    ),
  },
  "open-close": {
    en: cloudChips(
      "Up to 15 years battery",
      "Small & large units",
      "Open/close detection",
    ),
  },
  touch: {
    en: cloudChips(
      "Up to 15 years battery",
      "H19 × W19 × D3.5 mm",
      "One-tap feedback",
    ),
  },
  "water-detector": {
    en: nbIotChips(
      "Up to 7 years battery",
      "Compact & Pro (IP30/IP67)",
      "Spot water detection",
    ),
  },
  "water-rope": {
    en: nbIotChips(
      "Up to 7 years battery",
      "3 m cable (up to 50 m)",
      "Line leak detection",
    ),
  },
  "cloud-connector": {
    en: [
      "SecureDataShot gateway",
      "Up to 40 m wireless range",
      "H153 × W114 × D30 mm",
      "REST API & webhooks",
    ],
  },
  "range-extender-and-bracket": {
    en: [
      "Signal booster & mount",
      "Freezer-rated ABS",
      "Range extender: H72 × W32 × D7 mm",
      "Bracket: H100 × W40 × D15 mm",
    ],
  },
};

export function getSensorHeroSpecs(slug: string, lang: Lang = defaultLang): string[] | undefined {
  if (!isEnhancedProductPage(slug)) return undefined;
  const entry = heroSpecsBySlug[slug];
  if (!entry) return undefined;
  return entry[lang] ?? entry[defaultLang];
}
