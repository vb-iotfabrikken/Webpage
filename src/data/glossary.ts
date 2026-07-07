/**
 * Glossary entries rendered at `/en/glossary/` as a single long page with
 * anchor links per term. Each entry also gets a DefinedTerm JSON-LD block so
 * search engines and LLMs can surface the definitions.
 *
 * Keep definitions concise (1–2 sentences) and add the long-form "detail"
 * paragraph only when the short definition genuinely needs more context.
 */

import { defaultLang, type Lang } from "./lang";
import { glossaryI18n } from "./glossary.i18n";

export type GlossaryEntry = {
  term: string;
  /** Shorter alternative forms (acronyms, plurals) listed next to the heading. */
  aka?: string[];
  anchor: string;
  short: string;
  detail?: string;
  /** Anchors of related terms, rendered as chips under each entry. */
  seeAlso?: string[];
};

export const glossary: GlossaryEntry[] = [
  {
    term: "BMS",
    aka: ["Building Management System", "BAS", "CTS"],
    anchor: "bms",
    short: "The central control system for a building's HVAC, lighting, access and fire systems.",
    detail: "BMS / BAS (US) / CTS (DK) sit on top of wired field buses like BACnet, Modbus and KNX. RoomAlyzer overlays wireless sensors on existing BMS installations, often filling in the gaps where wiring is impractical.",
    seeAlso: ["lorawan", "mqtt", "bacnet"],
  },
  {
    term: "BACnet",
    anchor: "bacnet",
    short: "An ANSI/ISO building-automation protocol that connects HVAC, lighting and access control over wired networks.",
    seeAlso: ["bms", "niagara"],
  },
  {
    term: "BR18",
    anchor: "br18",
    short: "The 2018 Danish Building Regulations, which set the baseline indoor-climate and energy requirements for new and renovated buildings.",
    detail: "BR18 chapter 14 covers indoor climate and mandates keeping CO₂ below 1000 ppm in occupied rooms, with temperature and humidity ranges that vary by occupancy type.",
    seeAlso: ["co2", "en-16798"],
  },
  {
    term: "CO₂",
    aka: ["carbon dioxide"],
    anchor: "co2",
    short: "The gas exhaled by occupants; indoor levels are the most practical proxy for ventilation quality in classrooms and offices.",
    detail: "Outdoor baseline is around 420 ppm. Danish BR18 requires < 1000 ppm in classrooms during teaching hours; levels above 1200 ppm start to affect concentration, above 2000 ppm cause headaches.",
    seeAlso: ["voc", "ppm", "en-16798"],
  },
  {
    term: "CSRD",
    aka: ["Corporate Sustainability Reporting Directive"],
    anchor: "csrd",
    short: "The EU directive that mandates detailed sustainability reporting for large undertakings, including building-energy and GHG metrics.",
    seeAlso: ["esg", "scope-2"],
  },
  {
    term: "DGNB",
    aka: ["Deutsche Gesellschaft für Nachhaltiges Bauen"],
    anchor: "dgnb",
    short: "A European building-sustainability certification scheme widely used in Denmark, Germany and Austria; includes an indoor-environment pillar.",
    seeAlso: ["leed", "well"],
  },
  {
    term: "EN 15251",
    anchor: "en-15251",
    short: "The earlier (2007) European indoor-environment standard, now superseded by EN 16798 but still referenced in older specifications.",
    seeAlso: ["en-16798"],
  },
  {
    term: "EN 15757",
    anchor: "en-15757",
    short: "The European preservation standard specifying climate specifications for organic hygroscopic materials in heritage environments.",
    detail: "EN 15757 uses a relative approach (seasonal bands derived from the object's historical climate) rather than a fixed setpoint, which is usually more realistic for unheated historic buildings.",
    seeAlso: ["preservation", "dgnb"],
  },
  {
    term: "EN 16798",
    anchor: "en-16798",
    short: "The current European standard for energy performance of buildings including indoor environmental input parameters.",
    detail: "Part 1 defines four categories of indoor environment (I–IV) with CO₂, temperature and humidity ranges for each. Category II is the normal design target for new buildings.",
    seeAlso: ["co2", "br18", "en-15251"],
  },
  {
    term: "ESG",
    aka: ["Environmental, Social, Governance"],
    anchor: "esg",
    short: "A reporting framework used by investors and regulators to measure non-financial performance, including building energy and indoor-environment data.",
    seeAlso: ["csrd"],
  },
  {
    term: "FM",
    aka: ["Facility Management"],
    anchor: "fm",
    short: "The discipline that operates the physical workspace, cleaning, maintenance, space planning, energy and environment.",
    seeAlso: ["bms", "space-management"],
  },
  {
    term: "GDPR",
    aka: ["General Data Protection Regulation"],
    anchor: "gdpr",
    short: "The EU data-protection regulation that applies whenever a building's sensor data can be linked to an identifiable individual.",
    detail: "Aggregated room occupancy is not personal data. Desk-level occupancy combined with hot-desk bookings usually is; we handle that case with strict role-based access controls and configurable retention.",
    seeAlso: ["space-management"],
  },
  {
    term: "GHG",
    aka: ["Greenhouse Gas"],
    anchor: "ghg",
    short: "The gases measured in carbon footprints: CO₂, CH₄, N₂O, F-gases. Building operations generate scope-1 and scope-2 emissions.",
    seeAlso: ["scope-2", "csrd"],
  },
  {
    term: "IAQ",
    aka: ["Indoor Air Quality"],
    anchor: "iaq",
    short: "The umbrella term for measuring and managing the air inside a building: CO₂, temperature, humidity, VOC, PM2.5 and more.",
    seeAlso: ["co2", "voc", "pm25"],
  },
  {
    term: "IoT",
    aka: ["Internet of Things"],
    anchor: "iot",
    short: "The network of physical devices (sensors, gateways, actuators) connected to the internet for data collection and automation.",
    seeAlso: ["lorawan", "nb-iot"],
  },
  {
    term: "ISO 27001",
    anchor: "iso-27001",
    short: "The international standard for information-security management systems (ISMS); IoT Fabrikken is certified.",
    seeAlso: ["gdpr"],
  },
  {
    term: "LED",
    aka: ["Light-Emitting Diode"],
    anchor: "led",
    short: "A low-power light source used on sensors as a traffic-light indicator for CO₂, humidity or alarm status.",
  },
  {
    term: "LEED",
    aka: ["Leadership in Energy and Environmental Design"],
    anchor: "leed",
    short: "A US-origin building-certification scheme with indoor air quality credits that require continuous monitoring.",
    seeAlso: ["dgnb", "well"],
  },
  {
    term: "LoRaWAN",
    anchor: "lorawan",
    short: "A low-power, long-range wireless protocol (typically 868 MHz in Europe) used by the majority of our battery-powered sensors.",
    detail: "Gateways cover 2–5 km outdoors and 200–500 m indoors, depending on building construction. Each sensor gets AES-128-encrypted session keys.",
    seeAlso: ["nb-iot", "iot"],
  },
  {
    term: "MQTT",
    aka: ["Message Queuing Telemetry Transport"],
    anchor: "mqtt",
    short: "A lightweight publish-subscribe protocol used to stream live sensor data from the platform to BMS, NOC and ITSM systems.",
    seeAlso: ["rest-api", "bms"],
  },
  {
    term: "MCP",
    aka: ["Model Context Protocol"],
    anchor: "mcp",
    short: "An emerging open protocol that lets LLM clients query external data sources (including IoT platforms) with structured tools.",
    seeAlso: ["iot"],
  },
  {
    term: "NB-IoT",
    aka: ["Narrowband IoT"],
    anchor: "nb-iot",
    short: "A 3GPP cellular protocol for low-power IoT. Works through concrete and underground, runs on carrier networks, and doesn't need a local gateway.",
    seeAlso: ["lorawan"],
  },
  {
    term: "Niagara",
    aka: ["Tridium Niagara"],
    anchor: "niagara",
    short: "A widely deployed building-automation framework for connecting BACnet, LonWorks, Modbus and IP devices under one supervisor.",
    seeAlso: ["bacnet", "bms"],
  },
  {
    term: "NOC",
    aka: ["Network Operations Centre"],
    anchor: "noc",
    short: "The 24/7 monitoring centre that receives our water-detection and critical alarms on behalf of data-centre and enterprise customers.",
    seeAlso: ["mqtt"],
  },
  {
    term: "PI",
    aka: ["Performance Indicator"],
    anchor: "pi",
    short: "An aggregate score used in indoor-climate reporting that combines exceedance frequency, severity and duration into a single percentage.",
    seeAlso: ["twpi"],
  },
  {
    term: "PIR",
    aka: ["Passive Infrared"],
    anchor: "pir",
    short: "An occupancy-sensor technology that detects motion by measuring changes in infrared radiation, the standard for room-level presence.",
    seeAlso: ["mmwave"],
  },
  {
    term: "PM2.5",
    aka: ["Particulate Matter ≤ 2.5 µm"],
    anchor: "pm25",
    short: "Fine airborne particles small enough to cross into the bloodstream. Monitored as part of modern IAQ programmes.",
    seeAlso: ["iaq", "voc"],
  },
  {
    term: "PMV/PPD",
    aka: ["Predicted Mean Vote / Predicted Percentage Dissatisfied"],
    anchor: "pmv-ppd",
    short: "Fanger's thermal-comfort indices, used in EN 16798 and ISO 7730 to predict how people will perceive a given combination of temperature, humidity and activity.",
    seeAlso: ["en-16798"],
  },
  {
    term: "ppm",
    aka: ["parts per million"],
    anchor: "ppm",
    short: "The unit used for CO₂ and many trace-gas measurements: 1 ppm means 1 molecule in a million.",
    seeAlso: ["co2", "voc"],
  },
  {
    term: "PropTech",
    anchor: "proptech",
    short: "Property technology: the software and hardware reshaping how commercial and residential real estate is designed, built and operated.",
  },
  {
    term: "REST API",
    anchor: "rest-api",
    short: "A request-response HTTP interface for pulling sensor data, managing rooms and configuring alarms. Our API is documented with OpenAPI.",
    seeAlso: ["mqtt"],
  },
  {
    term: "RH",
    aka: ["Relative Humidity"],
    anchor: "rh",
    short: "The ratio of water-vapour pressure to saturation, expressed as a percentage. 40–60 % RH is the comfort range for most occupied rooms.",
    seeAlso: ["en-15757"],
  },
  {
    term: "Scope 2",
    anchor: "scope-2",
    short: "GHG emissions from purchased electricity and district heating. Most building operational emissions fall under scope 2.",
    seeAlso: ["csrd", "ghg"],
  },
  {
    term: "SLA",
    aka: ["Service Level Agreement"],
    anchor: "sla",
    short: "The contractual commitments around platform uptime and support response times.",
  },
  {
    term: "SSO",
    aka: ["Single Sign-On"],
    anchor: "sso",
    short: "Letting users authenticate once with a corporate identity provider (Azure AD, Okta, Google) instead of managing separate accounts per service.",
    seeAlso: ["gdpr"],
  },
  {
    term: "TVOC",
    aka: ["Total Volatile Organic Compounds"],
    anchor: "voc",
    short: "A combined reading of organic compounds that off-gas from paint, glue, cleaning products and human activity.",
    detail: "TVOC is useful for trend detection (cleaning just happened, a new piece of furniture arrived) rather than absolute health thresholds, because individual compounds have very different toxicities.",
    seeAlso: ["iaq"],
  },
  {
    term: "TWPI",
    aka: ["Time-Weighted Performance Indicator"],
    anchor: "twpi",
    short: "An indoor-climate indicator that weights exceedances by how long the room was actually occupied.",
    seeAlso: ["pi"],
  },
  {
    term: "VAV",
    aka: ["Variable Air Volume"],
    anchor: "vav",
    short: "A ventilation control scheme where each room gets a damper that modulates airflow, an ideal target for CO₂-driven demand control.",
    seeAlso: ["co2"],
  },
  {
    term: "VOC",
    aka: ["Volatile Organic Compound"],
    anchor: "voc-single",
    short: "Any of a large family of carbon-based compounds that evaporate at room temperature. Monitored in combination as TVOC.",
    seeAlso: ["voc"],
  },
  {
    term: "VTT",
    anchor: "vtt",
    short: "The Finnish Technical Research Centre. Publishes widely cited studies on indoor climate and preservation.",
  },
  {
    term: "WELL",
    anchor: "well",
    short: "A wellness-focused building certification with strict indoor-air and comfort requirements, increasingly chosen by office tenants.",
    seeAlso: ["dgnb", "leed"],
  },
  {
    term: "mmWave",
    anchor: "mmwave",
    short: "Millimetre-wave radar sensors that count people and estimate posture without cameras. Used where PIR is too coarse.",
    seeAlso: ["pir"],
  },
];

/** Localized glossary entries; terms and anchors stay English. */
export function getGlossary(lang: Lang = defaultLang): GlossaryEntry[] {
  if (lang === defaultLang) return glossary;

  const overlay = glossaryI18n[lang];
  if (!overlay) return glossary;

  return glossary.map((entry) => {
    const o = overlay[entry.anchor];
    if (!o) return entry;
    return {
      ...entry,
      short: o.short ?? entry.short,
      detail: o.detail ?? entry.detail,
    };
  });
}

export const glossaryByAnchor: Record<string, GlossaryEntry> = Object.fromEntries(
  glossary.map((g) => [g.anchor, g]),
);

/** Localized glossary lookup by anchor. */
export function getGlossaryByAnchor(lang: Lang = defaultLang): Record<string, GlossaryEntry> {
  return Object.fromEntries(getGlossary(lang).map((g) => [g.anchor, g]));
}
