/**
 * Press resources for journalists and analysts. Rendered at
 * `/en/about/press/`.
 *
 * English press releases and media mentions are placeholders until translated
 * copy is ready. Danish source material lives in `press-da-backlog.ts`.
 */

export type PressRelease = {
  date: string; // ISO yyyy-mm-dd
  headline: string;
  summary: string;
  url?: string;
};

export type PressMention = {
  outlet: string;
  date: string;
  headline: string;
  url?: string;
};

import { defaultLang, type Lang } from "./lang";

export const keyFacts: { label: string; value: string }[] = [
  { label: "Founded", value: "2018" },
  { label: "Headquarters", value: "Aarhus, Denmark" },
  { label: "Ownership", value: "100% privately owned" },
  { label: "Employees", value: "10 (2026)" },
  { label: "Customers", value: "400+ buildings across 8 European countries" },
  { label: "Sensors deployed", value: "38,000+" },
];

const keyFactsI18n: Partial<Record<Lang, { label: string; value: string }[]>> = {
  da: [
    { label: "Grundlagt", value: "2018" },
    { label: "Hovedkontor", value: "Aarhus, Danmark" },
    { label: "Ejerskab", value: "100% privatejet" },
    { label: "Medarbejdere", value: "10 (2026)" },
    { label: "Kunder", value: "400+ bygninger i 8 europæiske lande" },
    { label: "Sensorer i drift", value: "38.000+" },
  ],
  de: [
    { label: "Gegründet", value: "2018" },
    { label: "Hauptsitz", value: "Aarhus, Dänemark" },
    { label: "Eigentum", value: "100% in Privatbesitz" },
    { label: "Mitarbeitende", value: "10 (2026)" },
    { label: "Kunden", value: "400+ Gebäude in 8 europäischen Ländern" },
    { label: "Installierte Sensoren", value: "38.000+" },
  ],
  sv: [
    { label: "Grundat", value: "2018" },
    { label: "Huvudkontor", value: "Aarhus, Danmark" },
    { label: "Ägande", value: "100% privatägt" },
    { label: "Medarbetare", value: "10 (2026)" },
    { label: "Kunder", value: "400+ byggnader i 8 europeiska länder" },
    { label: "Sensorer i drift", value: "38 000+" },
  ],
};

export function getKeyFacts(
  lang: Lang = defaultLang,
): { label: string; value: string }[] {
  return keyFactsI18n[lang] ?? keyFacts;
}

export const pressContact = {
  name: "Jon Wichmann",
  role: "CEO",
  email: "press@iot-fabrikken.com",
  phone: "+45 70 00 00 00",
};

/** Company-issued press releases — empty until English copy is published. */
export const releases: PressRelease[] = [];

/** Third-party media coverage — empty until English copy is published. */
export const mentions: PressMention[] = [];
