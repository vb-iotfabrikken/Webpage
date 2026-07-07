/**
 * Localized technical spec values for enhanced sensor product pages.
 * Row labels live in `src/data/i18n/ui.ts` under `sensors.detail.specs`.
 */
import type { Lang } from "./lang";
import type { SpecRowId } from "./sensorTechnicalSpecs";

type SpecValueOverrides = Partial<Record<SpecRowId, string>>;

type SpecI18nEntry = {
  values?: SpecValueOverrides;
  complianceNote?: string;
};

export const sensorTechnicalSpecsI18n: Partial<
  Record<Lang, Partial<Record<string, SpecI18nEntry>>>
> = {
  da: {
    "mini-plus": {
      values: {
        measurements: "Temperatur og luftfugtighed",
        dimensions: "H124 × B60 × D26 mm · 130 g",
        measuringRange: "Temperatur −15 til +70 °C / Luftfugtighed 0–99 % r.f.",
        operatingRange: "−35 °C til +70 °C",
        precision: "Temperatur ±0,1 °C / Luftfugtighed ±1 % r.f.",
        longTermDrift:
          "Temperatur <0,03 °C/år / Luftfugtighed <0,20 % r.f./år (under normale forhold)",
        battery: "Op til 10 år (udskifteligt 3 × AA litiumpakke)",
        connectivity: "NB-IoT (direkte mobil, uden Wi-Fi eller gateway)",
        activation: "Knap på sensoren",
        controlSoftware: "Webapplikation og mobilapp (iOS/Android)",
        mounting: "Skruer eller 3M klæbepuder",
        material: "Stødsikker hvid ABS-plast",
        application:
          "Kontorer, skoler, museer, kirker, arkiver, lagre og meget mere",
        certification: "CE-certificeret",
      },
    },
  },
  de: {
    "mini-plus": {
      values: {
        measurements: "Temperatur und Luftfeuchtigkeit",
        dimensions: "H124 × B60 × T26 mm · 130 g",
        measuringRange: "Temperatur −15 bis +70 °C / Luftfeuchtigkeit 0–99 % r.F.",
        operatingRange: "−35 °C bis +70 °C",
        precision: "Temperatur ±0,1 °C / Luftfeuchtigkeit ±1 % r.F.",
        longTermDrift:
          "Temperatur <0,03 °C/Jahr / Luftfeuchtigkeit <0,20 % r.F./Jahr (unter normalen Bedingungen)",
        battery: "Bis zu 10 Jahre (austauschbares 3 × AA-Lithium-Paket)",
        connectivity: "NB-IoT (direktes Mobilfunk, ohne Wi-Fi oder Gateway)",
        activation: "Taste am Sensor",
        controlSoftware: "Webanwendung und mobile App (iOS/Android)",
        mounting: "Schrauben oder 3M-Klebe-Pads",
        material: "Schlagfester weißer ABS-Kunststoff",
        application:
          "Büros, Schulen, Museen, Kirchen, Archive, Lager und mehr",
        certification: "CE-zertifiziert",
      },
    },
  },
  sv: {
    "mini-plus": {
      values: {
        measurements: "Temperatur och luftfuktighet",
        dimensions: "H124 × B60 × D26 mm · 130 g",
        measuringRange: "Temperatur −15 till +70 °C / Luftfuktighet 0–99 % RF",
        operatingRange: "−35 °C till +70 °C",
        precision: "Temperatur ±0,1 °C / Luftfuktighet ±1 % RF",
        longTermDrift:
          "Temperatur <0,03 °C/år / Luftfuktighet <0,20 % RF/år (under normala förhållanden)",
        battery: "Upp till 10 år (utbytbart 3 × AA litiumpaket)",
        connectivity: "NB-IoT (direkt mobil, utan Wi-Fi eller gateway)",
        activation: "Knapp på sensorn",
        controlSoftware: "Webbapplikation och mobilapp (iOS/Android)",
        mounting: "Skruvar eller 3M klisterkuddar",
        material: "Stöttålig vit ABS-plast",
        application:
          "Kontor, skolor, museer, kyrkor, arkiv, lager och mer",
        certification: "CE-certifierad",
      },
    },
  },
};
