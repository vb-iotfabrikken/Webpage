import type { Lang } from "../lang";
import { defaultLang } from "../lang";

/**
 * Translations for the sensor comparison matrix: its chrome, capability row
 * labels, battery/connectivity values and use-case filters. English is
 * canonical; getCompareStrings falls back to English for unknown locales.
 *
 * Capability matrix booleans live in sensorCompare.ts and are language-neutral;
 * only the human-readable labels are translated here.
 */

export interface CompareStrings {
  legend: { supported: string; notApplicable: string; scrollHint: string };
  headers: {
    capability: string;
    batteryLife: string;
    connectivity: string;
    capabilityMatrix: string;
    matrixHeading: string;
  };
  battery: {
    upToYears: string; // "{n}" is replaced with the year count
    multiYear: string;
    mains: string;
    passive: string;
    varies: string;
  };
  connectivity: {
    cloudConnector: string;
    nbIotStandalone: string;
    cellularGateway: string;
    accessory: string;
    seeProductSheet: string;
  };
  cells: { ip67Variant: string; gateway: string };
  rowGroups: Record<string, { label: string; rows: Record<string, { label: string; hint?: string }> }>;
  useCases: Record<string, { label: string; description: string }>;
}

const en: CompareStrings = {
  legend: {
    supported: "Supported",
    notApplicable: "Not applicable",
    scrollHint: "Scroll horizontally to see all sensors.",
  },
  headers: {
    capability: "Capability",
    batteryLife: "Battery life",
    connectivity: "Connectivity",
    capabilityMatrix: "Capability matrix",
    matrixHeading: "What each sensor measures and how it connects.",
  },
  battery: {
    upToYears: "Up to {n} years",
    multiYear: "Multi-year battery",
    mains: "Mains powered",
    passive: "Passive accessory",
    varies: "Varies",
  },
  connectivity: {
    cloudConnector: "Cloud Connector",
    nbIotStandalone: "NB-IoT (standalone)",
    cellularGateway: "Cellular gateway",
    accessory: "Accessory",
    seeProductSheet: "See product sheet",
  },
  cells: { ip67Variant: "IP67 variant", gateway: "Gateway" },
  rowGroups: {
    climate: {
      label: "Climate measurements",
      rows: {
        co2: { label: "CO₂", hint: "Air quality and ventilation control" },
        temperature: { label: "Temperature" },
        humidity: { label: "Relative humidity" },
        voc: { label: "VOC / TVOC", hint: "Volatile organic compounds" },
        outdoorRated: { label: "Outdoor rated", hint: "Weatherproof housing or probe" },
      },
    },
    space: {
      label: "Space & interaction",
      rows: {
        occupancy: { label: "Room occupancy", hint: "PIR presence — no cameras" },
        deskOccupancy: { label: "Desk occupancy", hint: "Under-desk utilisation" },
        openClose: { label: "Open / close contact", hint: "Doors, windows, lockers" },
        touch: { label: "Touch / service button", hint: "One-tap feedback or requests" },
      },
    },
    water: {
      label: "Water detection",
      rows: {
        waterSpot: { label: "Spot detection", hint: "Single-point leak sensor" },
        waterLine: { label: "Line / rope detection", hint: "Continuous cable coverage" },
      },
    },
    connectivity: {
      label: "Connectivity & infrastructure",
      rows: {
        nbIot: { label: "Standalone NB-IoT", hint: "No Cloud Connector required" },
        cloudConnector: { label: "Cloud Connector", hint: "SecureDataShot bridge or gateway" },
        extendsRange: { label: "Extends wireless range", hint: "Coverage and mounting accessory" },
      },
    },
  },
  useCases: {
    classroom: { label: "Classrooms & learning", description: "CO₂, comfort and documented air quality." },
    "hybrid-office": { label: "Hybrid offices", description: "Desk use, meeting rooms and indoor climate." },
    heritage: { label: "Heritage & preservation", description: "Discreet RH logging and outdoor reference." },
    "cold-chain": { label: "Fridges & cold storage", description: "Spot temperature with instant alarms." },
    leak: { label: "Leak protection", description: "Spot or line coverage for water damage." },
    "fm-service": { label: "FM & service points", description: "Demand-driven cleaning and feedback." },
  },
};

const da: CompareStrings = {
  legend: {
    supported: "Understøttet",
    notApplicable: "Ikke relevant",
    scrollHint: "Scroll vandret for at se alle sensorer.",
  },
  headers: {
    capability: "Funktion",
    batteryLife: "Batterilevetid",
    connectivity: "Forbindelse",
    capabilityMatrix: "Funktionsmatrix",
    matrixHeading: "Hvad hver sensor måler, og hvordan den forbinder.",
  },
  battery: {
    upToYears: "Op til {n} år",
    multiYear: "Flerårig batterilevetid",
    mains: "Netforsynet",
    passive: "Passivt tilbehør",
    varies: "Varierer",
  },
  connectivity: {
    cloudConnector: "Cloud Connector",
    nbIotStandalone: "NB-IoT (selvstændig)",
    cellularGateway: "Mobil gateway",
    accessory: "Tilbehør",
    seeProductSheet: "Se produktblad",
  },
  cells: { ip67Variant: "IP67-variant", gateway: "Gateway" },
  rowGroups: {
    climate: {
      label: "Klimamålinger",
      rows: {
        co2: { label: "CO₂", hint: "Luftkvalitet og ventilationsstyring" },
        temperature: { label: "Temperatur" },
        humidity: { label: "Relativ luftfugtighed" },
        voc: { label: "VOC / TVOC", hint: "Flygtige organiske forbindelser" },
        outdoorRated: { label: "Godkendt til udendørs", hint: "Vejrbestandigt hus eller probe" },
      },
    },
    space: {
      label: "Rum og interaktion",
      rows: {
        occupancy: { label: "Rumbelægning", hint: "PIR-tilstedeværelse — ingen kameraer" },
        deskOccupancy: { label: "Skrivebordsbelægning", hint: "Udnyttelse under skrivebordet" },
        openClose: { label: "Åbn/luk-kontakt", hint: "Døre, vinduer, skabe" },
        touch: { label: "Tryk-/serviceknap", hint: "Feedback eller anmodninger med ét tryk" },
      },
    },
    water: {
      label: "Vanddetektion",
      rows: {
        waterSpot: { label: "Punktdetektion", hint: "Lækagesensor i ét punkt" },
        waterLine: { label: "Linje-/rebdetektion", hint: "Sammenhængende kabeldækning" },
      },
    },
    connectivity: {
      label: "Forbindelse og infrastruktur",
      rows: {
        nbIot: { label: "Selvstændig NB-IoT", hint: "Ingen Cloud Connector påkrævet" },
        cloudConnector: { label: "Cloud Connector", hint: "SecureDataShot-bro eller gateway" },
        extendsRange: { label: "Udvider trådløs rækkevidde", hint: "Dæknings- og monteringstilbehør" },
      },
    },
  },
  useCases: {
    classroom: { label: "Klasselokaler og læring", description: "CO₂, komfort og dokumenteret luftkvalitet." },
    "hybrid-office": { label: "Hybridkontorer", description: "Skrivebordsbrug, mødelokaler og indeklima." },
    heritage: { label: "Kulturarv og bevaring", description: "Diskret RH-logning og udendørs reference." },
    "cold-chain": { label: "Køleskabe og kølelager", description: "Punkttemperatur med øjeblikkelige alarmer." },
    leak: { label: "Lækagebeskyttelse", description: "Punkt- eller linjedækning mod vandskade." },
    "fm-service": { label: "FM og servicepunkter", description: "Behovsstyret rengøring og feedback." },
  },
};

const de: CompareStrings = {
  legend: {
    supported: "Unterstützt",
    notApplicable: "Nicht zutreffend",
    scrollHint: "Horizontal scrollen, um alle Sensoren zu sehen.",
  },
  headers: {
    capability: "Funktion",
    batteryLife: "Batterielaufzeit",
    connectivity: "Konnektivität",
    capabilityMatrix: "Funktionsmatrix",
    matrixHeading: "Was jeder Sensor misst und wie er sich verbindet.",
  },
  battery: {
    upToYears: "Bis zu {n} Jahre",
    multiYear: "Mehrjährige Batterielaufzeit",
    mains: "Netzbetrieben",
    passive: "Passives Zubehör",
    varies: "Variiert",
  },
  connectivity: {
    cloudConnector: "Cloud Connector",
    nbIotStandalone: "NB-IoT (eigenständig)",
    cellularGateway: "Mobilfunk-Gateway",
    accessory: "Zubehör",
    seeProductSheet: "Siehe Produktdatenblatt",
  },
  cells: { ip67Variant: "IP67-Variante", gateway: "Gateway" },
  rowGroups: {
    climate: {
      label: "Klimamessungen",
      rows: {
        co2: { label: "CO₂", hint: "Luftqualität und Lüftungssteuerung" },
        temperature: { label: "Temperatur" },
        humidity: { label: "Relative Luftfeuchtigkeit" },
        voc: { label: "VOC / TVOC", hint: "Flüchtige organische Verbindungen" },
        outdoorRated: { label: "Für den Außenbereich geeignet", hint: "Wetterfestes Gehäuse oder Sonde" },
      },
    },
    space: {
      label: "Raum & Interaktion",
      rows: {
        occupancy: { label: "Raumbelegung", hint: "PIR-Präsenz — keine Kameras" },
        deskOccupancy: { label: "Arbeitsplatzbelegung", hint: "Nutzung unter dem Schreibtisch" },
        openClose: { label: "Auf/Zu-Kontakt", hint: "Türen, Fenster, Schließfächer" },
        touch: { label: "Touch-/Servicetaste", hint: "Feedback oder Anfragen per Tastendruck" },
      },
    },
    water: {
      label: "Wassererkennung",
      rows: {
        waterSpot: { label: "Punkterkennung", hint: "Lecksensor an einem Punkt" },
        waterLine: { label: "Linien-/Seilerkennung", hint: "Durchgehende Kabelabdeckung" },
      },
    },
    connectivity: {
      label: "Konnektivität & Infrastruktur",
      rows: {
        nbIot: { label: "Eigenständiges NB-IoT", hint: "Kein Cloud Connector erforderlich" },
        cloudConnector: { label: "Cloud Connector", hint: "SecureDataShot-Brücke oder Gateway" },
        extendsRange: { label: "Erweitert die Funkreichweite", hint: "Abdeckungs- und Montagezubehör" },
      },
    },
  },
  useCases: {
    classroom: { label: "Klassenzimmer & Lernen", description: "CO₂, Komfort und dokumentierte Luftqualität." },
    "hybrid-office": { label: "Hybride Büros", description: "Schreibtischnutzung, Besprechungsräume und Raumklima." },
    heritage: { label: "Kulturerbe & Bewahrung", description: "Diskrete RH-Aufzeichnung und Außenreferenz." },
    "cold-chain": { label: "Kühlschränke & Kühllager", description: "Punkttemperatur mit Sofortalarmen." },
    leak: { label: "Leckageschutz", description: "Punkt- oder Linienabdeckung gegen Wasserschäden." },
    "fm-service": { label: "FM & Servicepunkte", description: "Bedarfsgesteuerte Reinigung und Feedback." },
  },
};

const sv: CompareStrings = {
  legend: {
    supported: "Stöds",
    notApplicable: "Ej tillämpligt",
    scrollHint: "Scrolla horisontellt för att se alla sensorer.",
  },
  headers: {
    capability: "Funktion",
    batteryLife: "Batteritid",
    connectivity: "Anslutning",
    capabilityMatrix: "Funktionsmatris",
    matrixHeading: "Vad varje sensor mäter och hur den ansluter.",
  },
  battery: {
    upToYears: "Upp till {n} år",
    multiYear: "Flerårig batteritid",
    mains: "Nätansluten",
    passive: "Passivt tillbehör",
    varies: "Varierar",
  },
  connectivity: {
    cloudConnector: "Cloud Connector",
    nbIotStandalone: "NB-IoT (fristående)",
    cellularGateway: "Mobil gateway",
    accessory: "Tillbehör",
    seeProductSheet: "Se produktblad",
  },
  cells: { ip67Variant: "IP67-variant", gateway: "Gateway" },
  rowGroups: {
    climate: {
      label: "Klimatmätningar",
      rows: {
        co2: { label: "CO₂", hint: "Luftkvalitet och ventilationsstyrning" },
        temperature: { label: "Temperatur" },
        humidity: { label: "Relativ luftfuktighet" },
        voc: { label: "VOC / TVOC", hint: "Flyktiga organiska föreningar" },
        outdoorRated: { label: "Godkänd för utomhus", hint: "Väderbeständigt hölje eller givare" },
      },
    },
    space: {
      label: "Yta och interaktion",
      rows: {
        occupancy: { label: "Rumsbeläggning", hint: "PIR-närvaro — inga kameror" },
        deskOccupancy: { label: "Skrivbordsbeläggning", hint: "Utnyttjande under skrivbordet" },
        openClose: { label: "Öppna/stäng-kontakt", hint: "Dörrar, fönster, skåp" },
        touch: { label: "Tryck-/serviceknapp", hint: "Feedback eller förfrågningar med ett tryck" },
      },
    },
    water: {
      label: "Vattendetektering",
      rows: {
        waterSpot: { label: "Punktdetektering", hint: "Läckagesensor i en punkt" },
        waterLine: { label: "Linje-/repdetektering", hint: "Sammanhängande kabeltäckning" },
      },
    },
    connectivity: {
      label: "Anslutning och infrastruktur",
      rows: {
        nbIot: { label: "Fristående NB-IoT", hint: "Ingen Cloud Connector krävs" },
        cloudConnector: { label: "Cloud Connector", hint: "SecureDataShot-brygga eller gateway" },
        extendsRange: { label: "Utökar trådlös räckvidd", hint: "Tillbehör för täckning och montering" },
      },
    },
  },
  useCases: {
    classroom: { label: "Klassrum och lärande", description: "CO₂, komfort och dokumenterad luftkvalitet." },
    "hybrid-office": { label: "Hybridkontor", description: "Skrivbordsanvändning, mötesrum och inomhusklimat." },
    heritage: { label: "Kulturarv och bevarande", description: "Diskret RH-loggning och utomhusreferens." },
    "cold-chain": { label: "Kylskåp och kyllager", description: "Punkttemperatur med omedelbara larm." },
    leak: { label: "Läckageskydd", description: "Punkt- eller linjetäckning mot vattenskador." },
    "fm-service": { label: "FM och servicepunkter", description: "Behovsstyrd städning och feedback." },
  },
};

const dictionaries: Record<Lang, CompareStrings> = { en, da, de, sv };

export function getCompareStrings(lang: Lang): CompareStrings {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}
