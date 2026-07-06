/**
 * Press resources for journalists and analysts. Rendered at
 * `/{lang}/about/press/`.
 *
 * English is the canonical headline source; Danish originals are used on `da`.
 */

import { defaultLang, type Lang } from "./lang";

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

type PressMentionSource = {
  date: string;
  outlet: string;
  url?: string;
  headline: Record<Lang, string>;
};

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
  email: "info@iot-fabrikken.com",
  phone: "+45 70 00 00 00",
};

/** Company-issued press releases — hidden on the page until entries are added. */
export const releases: PressRelease[] = [];

/** Third-party media coverage — newest first. */
const mentionSources: PressMentionSource[] = [
  {
    date: "2026-03-09",
    outlet: "Licitationen",
    url: "https://www.licitationen.dk/article/view/1214254/dansk_iotgazelle_har_fundet_en_enkel_losning_pa_et_komplekst_problem",
    headline: {
      en: "Danish IoT gazelle has found a simple solution to a complex problem",
      da: "Dansk IoT-gazelle har fundet en enkel løsning på et komplekst problem",
      de: "Dänisches IoT-Gazellen-Unternehmen hat eine einfache Lösung für ein komplexes Problem gefunden",
      sv: "Dansk IoT-gazelle har hittat en enkel lösning på ett komplext problem",
    },
  },
  {
    date: "2025-09-01",
    outlet: "BAUSUBSTANZ",
    url: "https://iot-fabrikken.de/wp-content/uploads/2025/09/BAUSUBSTANZ-web-1.pdf",
    headline: {
      en: "Coverage in German magazine BAUSUBSTANZ (Churches in Hessen-Nassau)",
      da: "Omtale i det tyske magasin BAUSUBSTANZ (Kirker i Hessen-Nassau)",
      de: "Erwähnung im deutschen Magazin BAUSUBSTANZ (Kirchen in Hessen-Nassau)",
      sv: "Omtale i tyska magasinet BAUSUBSTANZ (Kyrkor i Hessen-Nassau)",
    },
  },
  {
    date: "2025-06-30",
    outlet: "Licitationen",
    url: "https://www.licitationen.dk/article/view/1171791/kontoret_vi_investerer_i_mennesker_i_stedet_for_kvadratmeter",
    headline: {
      en: "The office: We invest in people instead of square metres",
      da: "Kontoret: Vi investerer i mennesker i stedet for kvadratmeter",
      de: "Das Büro: Wir investieren in Menschen statt in Quadratmeter",
      sv: "Kontoret: Vi investerar i människor i stället för kvadratmeter",
    },
  },
  {
    date: "2025-06-02",
    outlet: "Sjællandske Nyheder",
    url: "https://www.sn.dk/art6306093/roskilde-kommune/erhverv/lagde-ud-med-rottefaelder-nu-taeller-kunderne-baade-museer-kirker-og-kommuner/",
    headline: {
      en: "Started with rat traps, now customers include museums, churches and municipalities",
      da: "Lagde ud med rottefælder – nu tæller kunderne både museer, kirker og kommuner",
      de: "Begann mit Rattenfallen, heute zählen Museen, Kirchen und Kommunen zu den Kunden",
      sv: "Började med råttfällor, nu räknas museer, kyrkor och kommuner bland kunderna",
    },
  },
  {
    date: "2025-03-03",
    outlet: "Licitationen",
    url: "https://www.licitationen.dk/article/view/1148854/kommuner_skaber_fremtidens_arbejdsplads_med_data_og_space_management",
    headline: {
      en: "Municipalities create the workplace of the future with data and space management",
      da: "Kommuner skaber fremtidens arbejdsplads med data og space management",
      de: "Kommunen gestalten den Arbeitsplatz der Zukunft mit Daten und Space-Management",
      sv: "Kommuner skapar framtidens arbetsplats med data och space management",
    },
  },
  {
    date: "2025-01-07",
    outlet: "Energiforum Danmark",
    url: "https://www.energiforumdanmark.dk/viden-og-temaer/iot-fabrikken-saadan-dokumenterer-du-indeklimaet-optimerer-arealet-og-undgaar-vandskader-med-et-system/",
    headline: {
      en: "How to document indoor climate, optimise space and avoid water damage, with one system",
      da: "Sådan dokumenterer du indeklimaet, optimerer arealet og undgår vandskader – med ét system",
      de: "So dokumentieren Sie Raumklima, optimieren Flächen und vermeiden Wasserschäden, mit einem System",
      sv: "Så dokumenterar du inomhusklimatet, optimerar ytan och undviker vattenskador, med ett system",
    },
  },
  {
    date: "2024-05-22",
    outlet: "DFM",
    url: "https://dfm-net.dk/space-management-med-sensorer-frigav-650-kvm-og-det-batter-paa-bundlinjen/",
    headline: {
      en: "Space management with sensors freed 650 sqm, and it shows on the bottom line",
      da: "Space management med sensorer frigav 650 kvm – og det batter på bundlinjen",
      de: "Space-Management mit Sensoren machte 650 m² frei, mit spürbarem Effekt auf die Bilanz",
      sv: "Space management med sensorer frigjorde 650 kvm, och det syns på resultatet",
    },
  },
  {
    date: "2024-02-20",
    outlet: "Teknologisk Institut",
    url: "https://www.teknologisk.dk/ydelser/sensorer-skal-advare-om-luftbaaren-smittespredning-i-boernehaver/45769",
    headline: {
      en: "Sensors to warn of airborne infection spread in nurseries",
      da: "Sensorer skal advare om luftbåren smittespredning i børnehaver",
      de: "Sensoren sollen vor luftgetragener Infektionsübertragung in Kindergärten warnen",
      sv: "Sensorer ska varna för luftburen smittspridning i förskolor",
    },
  },
  {
    date: "2024-01-14",
    outlet: "YouTube / Roskilde TV",
    url: "https://roskildehandelogerhverv.dk/roskilde-erhvervspris/",
    headline: {
      en: "IoT Fabrikken is finalist for Roskilde Business Award",
      da: "IoT Fabrikken er finalist til Roskilde Erhvervspris",
      de: "IoT Fabrikken ist Finalist für den Roskilde Erhvervspris",
      sv: "IoT Fabrikken är finalist till Roskilde Erhvervspris",
    },
  },
  {
    date: "2023-07-07",
    outlet: "Sjællandske Nyheder",
    url: "https://www.sn.dk/art491591/roskilde-kommune/erhverv/snak-over-roedvin-foerte-til-erhvervseventyr/",
    headline: {
      en: "Chat over red wine led to a business adventure",
      da: "Snak over rødvin førte til erhvervseventyr",
      de: "Ein Gespräch bei Rotwein führte zu einem Business-Abenteuer",
      sv: "Samtal över rödvin ledde till ett affärseventyr",
    },
  },
  {
    date: "2023-07-07",
    outlet: "Sjællandske Nyheder",
    url: "https://www.sn.dk/art491590/roskilde-kommune/erhverv/nomineret-til-erhvervspris-der-er-salg-i-sensorer/",
    headline: {
      en: "Nominated for business award: There is sales in sensors",
      da: "Nomineret til erhvervspris: Der er salg i sensorer",
      de: "Nominiert für Wirtschaftspreis: In Sensoren steckt Umsatz",
      sv: "Nominerad till näringslivspris: Det finns försäljning i sensorer",
    },
  },
  {
    date: "2023-06-16",
    outlet: "BygTek",
    headline: {
      en: "No more Excel gymnastics when indoor climate must be measured",
      da: "Slut med Excel-gymnastik, når indeklimaet skal måles",
      de: "Schluss mit Excel-Gymnastik, wenn das Raumklima gemessen werden muss",
      sv: "Slut med Excel-gymnastik när inomhusklimatet ska mätas",
    },
  },
  {
    date: "2023-05-23",
    outlet: "DFM",
    url: "https://dfm-net.dk/dgnb-bygninger-i-drift-vinder-indpas-ny-rapport-goer-det-enklere/",
    headline: {
      en: "DGNB Buildings in Operation gaining ground, new report makes it easier",
      da: "DGNB Bygninger i Drift vinder indpas – ny rapport gør det enklere",
      de: "DGNB Betrieb zieht an, neuer Bericht macht es einfacher",
      sv: "DGNB Byggnader i drift vinner terräng, ny rapport gör det enklare",
    },
  },
  {
    date: "2022-04-07",
    outlet: "Energiforum Danmark",
    url: "https://www.energiforumdanmark.dk/viden-og-temaer/07-04-2022-iot-ivaerksaettere-har-skabt-stor-succes-med-brugervenlig-indeklima-sensor/",
    headline: {
      en: "IoT entrepreneurs achieve major success with user-friendly indoor climate sensor",
      da: "IoT-iværksættere har skabt stor succes med brugervenlig indeklima-sensor",
      de: "IoT-Gründer feiern großen Erfolg mit benutzerfreundlichem Raumklimasensor",
      sv: "IoT-entreprenörer har skapat stor framgång med användarvänlig inomhusklimatsensor",
    },
  },
  {
    date: "2021-05-26",
    outlet: "TV2 Bornholm",
    url: "https://www.tv2bornholm.dk/artikel/bornholmsk-sensor-skaber-bedre-indeklima-i-klassen",
    headline: {
      en: "Bornholm sensor creates better indoor climate in the classroom",
      da: "Bornholmsk sensor skaber bedre indeklima i klassen",
      de: "Bornholmer Sensor sorgt für besseres Raumklima im Klassenzimmer",
      sv: "Bornholmsk sensor skapar bättre inomhusklimat i klassrummet",
    },
  },
  {
    date: "2021-05-20",
    outlet: "Sjællandske Nyheder",
    url: "https://www.sn.dk/art368892/roskilde-kommune/erhverv/ivaerksaetterfabrik-har-udviklet-et-vaagent-oeje-der-aldrig-bliver-traet/",
    headline: {
      en: "Startup factory develops a vigilant eye that never gets tired",
      da: "Iværksætterfabrik har udviklet et vågent øje, der aldrig bliver træt",
      de: "Gründerfabrik entwickelt ein wachsames Auge, das nie müde wird",
      sv: "Entreprenörsfabrik har utvecklat ett vaket öga som aldrig blir trött",
    },
  },
  {
    date: "2020-06-18",
    outlet: "MyNewsDesk / Telenor",
    url: "https://press.telenor.dk/pressreleases/telenor-og-iot-fabrikken-indgaar-samarbejde-3014532",
    headline: {
      en: "Telenor and IoT Fabrikken enter partnership",
      da: "Telenor og IoT Fabrikken indgår samarbejde",
      de: "Telenor und IoT Fabrikken gehen Partnerschaft ein",
      sv: "Telenor och IoT Fabrikken ingår samarbete",
    },
  },
  {
    date: "2020-03-31",
    outlet: "Roskilde Nyheder",
    url: "https://roskildenyheder.dk/2020/03/31/erhverv/de-tager-temperaturen-paa-virksomheder-og-skoler/",
    headline: {
      en: "They take the temperature of businesses and schools",
      da: "De tager temperaturen på virksomheder og skoler",
      de: "Sie nehmen Unternehmen und Schulen die Temperatur ab",
      sv: "De tar temperaturen på företag och skolor",
    },
  },
];

export function getPressMentions(lang: Lang = defaultLang): PressMention[] {
  return mentionSources.map(({ headline, ...rest }) => ({
    ...rest,
    headline: headline[lang] ?? headline.en,
  }));
}

/** @deprecated Use `getPressMentions(lang)` — kept for backwards compatibility. */
export const mentions: PressMention[] = getPressMentions(defaultLang);
