import type { Lang } from "../lang";
import { defaultLang } from "../lang";

/** Localized content for the indoor-climate module landing page. */
export interface IndoorClimateStrings {
  metaTitle: string;
  metaDescription: string;
  breadcrumbHome: string;
  breadcrumbModules: string;
  breadcrumbCurrent: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroLead: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  dashboardLabel: string;
  dashboardAlt: string;
  howItWorksEyebrow: string;
  howItWorksHeading: string;
  steps: { n: string; title: string; body: string }[];
  paramsEyebrow: string;
  paramsHeading: string;
  features: { title: string; body: string; unit: string }[];
  fmHeading: string;
  fmItems: string[];
  complianceHeading: string;
  complianceItems: string[];
  faqTitle: string;
  faqItems: { q: string; a: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
}

const en: IndoorClimateStrings = {
  metaTitle: "Indoor climate — sensors and data | IoT Fabrikken",
  metaDescription:
    "Measure CO2, temperature, humidity and VOC with wireless sensors. React to data instead of feelings — and stay ahead of mould and damp.",
  breadcrumbHome: "Home",
  breadcrumbModules: "Modules",
  breadcrumbCurrent: "Indoor climate",
  heroTitle: "Handle complaints with data.",
  heroTitleAccent: "Not feelings.",
  heroLead:
    "Wireless sensors measure CO2, temperature, humidity and VOC in real time. Get early warnings about mould and damp before they hurt the building — and documentation that stands up to workplace-environment requirements.",
  heroPrimaryCta: "Book a free demo",
  heroSecondaryCta: "Download product sheets",
  dashboardLabel: "RoomAlyzer — Indoor climate",
  dashboardAlt: "RoomAlyzer dashboard showing indoor-climate data from several rooms",
  howItWorksEyebrow: "How it works",
  howItWorksHeading: "From box to data in under 10 minutes.",
  steps: [
    { n: "01", title: "Unpack", body: "The sensor ships ready to use — no configuration, no setup." },
    { n: "02", title: "Mount", body: "Fix it with a single screw or double-sided tape. Takes under 2 minutes per sensor." },
    { n: "03", title: "See data", body: "The sensor reports into RoomAlyzer automatically. Insight is flowing the same day." },
  ],
  paramsEyebrow: "Parameters we measure",
  paramsHeading: "All the data you need — and nothing you don't.",
  features: [
    { title: "CO2", body: "Precise readings that show when it's time to air the room — before headaches set in.", unit: "400–5000 ppm" },
    { title: "Temperature", body: "Continuous monitoring so both comfort and compliance are covered.", unit: "-10 to +50°C" },
    { title: "Humidity", body: "Keep an eye on humidity levels — key to wellbeing and the health of the building.", unit: "0–100 % RH" },
    { title: "VOC", body: "Total level of volatile organic compounds from materials and cleaning.", unit: "0–5000 ppb" },
    { title: "Mould & damp", body: "Predictive analysis that alarms before mould takes hold in the structure.", unit: "Predictive model" },
    { title: "Pressure", body: "Relative pressure between rooms — relevant for labs and clean rooms.", unit: "± 500 Pa" },
  ],
  fmHeading: "For Facility Managers",
  fmItems: [
    "See alarms sorted by criticality",
    "Document performance of ventilation systems",
    "Reduce complaint cases with objective data",
    "Run operations based on real usage — not schedule",
  ],
  complianceHeading: "For Compliance & ESG",
  complianceItems: [
    "Export of reports for CSRD and ESG work",
    "Indoor-climate history for workplace inspections and audits",
    "Documented effort on employee wellbeing",
    "Lower energy consumption through data-driven control",
  ],
  faqTitle: "Frequently asked questions",
  faqItems: [
    {
      q: "How long is the battery life?",
      a: "Our indoor-climate sensors typically run 7–10 years on a single battery, depending on reporting frequency. The platform warns you well in advance when the battery needs replacing.",
    },
    {
      q: "Do we need WiFi across the whole building?",
      a: "No. The sensors use LoRaWAN or similar long-range radio protocols. A single gateway can typically cover an entire floor or more.",
    },
    {
      q: "Can data be integrated with our BMS (Building Management System)?",
      a: "Yes. RoomAlyzer offers open APIs and supports the most common BMS protocols. We're happy to help with the setup.",
    },
    {
      q: "Is the solution GDPR-compliant?",
      a: "Yes. We measure physical conditions in the rooms — not people. Data is processed in the EU and meets the applicable standards.",
    },
    {
      q: "What does it cost?",
      a: "The price depends on the number of sensors and the size of the building. Book a demo and we'll give a concrete estimate based on your case.",
    },
  ],
  ctaTitle: "Want to see it for yourself?",
  ctaSubtitle:
    "Book a 30-minute demo. We'll show the platform, walk through your case and give you a price estimate.",
};

const da: IndoorClimateStrings = {
  metaTitle: "Indeklima — sensorer og data | IoT Fabrikken",
  metaDescription:
    "Mål CO2, temperatur, fugt og VOC med trådløse sensorer. Reagér på data i stedet for fornemmelser — og vær på forkant med skimmel og fugt.",
  breadcrumbHome: "Hjem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Indeklima",
  heroTitle: "Håndtér klager med data.",
  heroTitleAccent: "Ikke fornemmelser.",
  heroLead:
    "Trådløse sensorer måler CO2, temperatur, fugt og VOC i realtid. Få tidlige advarsler om skimmel og fugt, før de skader bygningen — og dokumentation, der lever op til arbejdsmiljøkravene.",
  heroPrimaryCta: "Book en gratis demo",
  heroSecondaryCta: "Download produktblade",
  dashboardLabel: "RoomAlyzer — Indeklima",
  dashboardAlt: "RoomAlyzer-dashboard, der viser indeklimadata fra flere rum",
  howItWorksEyebrow: "Sådan virker det",
  howItWorksHeading: "Fra kasse til data på under 10 minutter.",
  steps: [
    { n: "01", title: "Pak ud", body: "Sensoren leveres klar til brug — ingen konfiguration, ingen opsætning." },
    { n: "02", title: "Montér", body: "Sæt den op med en enkelt skrue eller dobbeltklæbende tape. Tager under 2 minutter pr. sensor." },
    { n: "03", title: "Se data", body: "Sensoren rapporterer automatisk ind i RoomAlyzer. Indsigten flyder samme dag." },
  ],
  paramsEyebrow: "Parametre, vi måler",
  paramsHeading: "Alle de data, du har brug for — og intet, du ikke har.",
  features: [
    { title: "CO2", body: "Præcise målinger, der viser, hvornår der skal luftes ud — før hovedpinen sætter ind.", unit: "400–5000 ppm" },
    { title: "Temperatur", body: "Kontinuerlig overvågning, så både komfort og compliance er dækket.", unit: "-10 til +50°C" },
    { title: "Fugt", body: "Hold øje med fugtniveauet — afgørende for trivsel og bygningens sundhed.", unit: "0–100 % RH" },
    { title: "VOC", body: "Samlet niveau af flygtige organiske forbindelser fra materialer og rengøring.", unit: "0–5000 ppb" },
    { title: "Skimmel og fugt", body: "Forudsigende analyse, der alarmerer, før skimmel får fat i konstruktionen.", unit: "Forudsigende model" },
    { title: "Tryk", body: "Relativt tryk mellem rum — relevant for laboratorier og renrum.", unit: "± 500 Pa" },
  ],
  fmHeading: "Til facility managers",
  fmItems: [
    "Se alarmer sorteret efter kritikalitet",
    "Dokumentér ventilationsanlæggenes ydeevne",
    "Reducér klagesager med objektive data",
    "Driv drift ud fra reel brug — ikke skema",
  ],
  complianceHeading: "Til compliance og ESG",
  complianceItems: [
    "Eksport af rapporter til CSRD- og ESG-arbejde",
    "Indeklimahistorik til arbejdspladsvurderinger og audits",
    "Dokumenteret indsats for medarbejdernes trivsel",
    "Lavere energiforbrug gennem datadreven styring",
  ],
  faqTitle: "Ofte stillede spørgsmål",
  faqItems: [
    {
      q: "Hvor lang er batterilevetiden?",
      a: "Vores indeklimasensorer kører typisk 7–10 år på ét batteri, afhængigt af rapporteringsfrekvens. Platformen advarer dig i god tid, når batteriet skal skiftes.",
    },
    {
      q: "Skal vi have WiFi i hele bygningen?",
      a: "Nej. Sensorerne bruger LoRaWAN eller lignende langtrækkende radioprotokoller. En enkelt gateway kan typisk dække en hel etage eller mere.",
    },
    {
      q: "Kan data integreres med vores BMS (Building Management System)?",
      a: "Ja. RoomAlyzer tilbyder åbne API'er og understøtter de mest udbredte BMS-protokoller. Vi hjælper gerne med opsætningen.",
    },
    {
      q: "Er løsningen GDPR-compliant?",
      a: "Ja. Vi måler fysiske forhold i rummene — ikke personer. Data behandles i EU og lever op til de gældende standarder.",
    },
    {
      q: "Hvad koster det?",
      a: "Prisen afhænger af antallet af sensorer og bygningens størrelse. Book en demo, så giver vi et konkret estimat ud fra jeres case.",
    },
  ],
  ctaTitle: "Vil du selv se det?",
  ctaSubtitle:
    "Book en demo på 30 minutter. Vi viser platformen, gennemgår jeres case og giver dig et prisestimat.",
};

const de: IndoorClimateStrings = {
  metaTitle: "Raumklima — Sensoren und Daten | IoT Fabrikken",
  metaDescription:
    "Messen Sie CO2, Temperatur, Luftfeuchtigkeit und VOC mit drahtlosen Sensoren. Reagieren Sie auf Daten statt auf Gefühle — und bleiben Sie Schimmel und Feuchtigkeit voraus.",
  breadcrumbHome: "Startseite",
  breadcrumbModules: "Module",
  breadcrumbCurrent: "Raumklima",
  heroTitle: "Beschwerden mit Daten begegnen.",
  heroTitleAccent: "Nicht mit Gefühlen.",
  heroLead:
    "Drahtlose Sensoren messen CO2, Temperatur, Luftfeuchtigkeit und VOC in Echtzeit. Erhalten Sie frühzeitige Warnungen vor Schimmel und Feuchtigkeit, bevor sie dem Gebäude schaden — und Dokumentation, die den Arbeitsschutzanforderungen standhält.",
  heroPrimaryCta: "Kostenlose Demo buchen",
  heroSecondaryCta: "Produktdatenblätter herunterladen",
  dashboardLabel: "RoomAlyzer — Raumklima",
  dashboardAlt: "RoomAlyzer-Dashboard mit Raumklimadaten aus mehreren Räumen",
  howItWorksEyebrow: "So funktioniert es",
  howItWorksHeading: "Von der Box zu Daten in unter 10 Minuten.",
  steps: [
    { n: "01", title: "Auspacken", body: "Der Sensor wird einsatzbereit geliefert — keine Konfiguration, keine Einrichtung." },
    { n: "02", title: "Montieren", body: "Befestigen Sie ihn mit einer einzigen Schraube oder mit doppelseitigem Klebeband. Unter 2 Minuten pro Sensor." },
    { n: "03", title: "Daten sehen", body: "Der Sensor meldet automatisch an RoomAlyzer. Die Erkenntnisse fließen noch am selben Tag." },
  ],
  paramsEyebrow: "Parameter, die wir messen",
  paramsHeading: "Alle Daten, die Sie brauchen — und nichts, was Sie nicht brauchen.",
  features: [
    { title: "CO2", body: "Präzise Messwerte, die zeigen, wann gelüftet werden sollte — bevor Kopfschmerzen einsetzen.", unit: "400–5000 ppm" },
    { title: "Temperatur", body: "Kontinuierliche Überwachung, sodass Komfort und Compliance abgedeckt sind.", unit: "-10 bis +50°C" },
    { title: "Luftfeuchtigkeit", body: "Behalten Sie die Luftfeuchtigkeit im Blick — entscheidend für Wohlbefinden und die Gesundheit des Gebäudes.", unit: "0–100 % RH" },
    { title: "VOC", body: "Gesamtgehalt flüchtiger organischer Verbindungen aus Materialien und Reinigung.", unit: "0–5000 ppb" },
    { title: "Schimmel & Feuchtigkeit", body: "Vorausschauende Analyse, die alarmiert, bevor sich Schimmel in der Bausubstanz festsetzt.", unit: "Prognosemodell" },
    { title: "Druck", body: "Relativer Druck zwischen Räumen — relevant für Labore und Reinräume.", unit: "± 500 Pa" },
  ],
  fmHeading: "Für Facility Manager",
  fmItems: [
    "Alarme nach Kritikalität sortiert sehen",
    "Die Leistung von Lüftungsanlagen dokumentieren",
    "Beschwerdefälle mit objektiven Daten reduzieren",
    "Den Betrieb nach tatsächlicher Nutzung führen — nicht nach Zeitplan",
  ],
  complianceHeading: "Für Compliance & ESG",
  complianceItems: [
    "Export von Berichten für CSRD- und ESG-Arbeit",
    "Raumklima-Historie für Arbeitsstättenprüfungen und Audits",
    "Dokumentierter Einsatz für das Wohlbefinden der Mitarbeitenden",
    "Geringerer Energieverbrauch durch datengestützte Steuerung",
  ],
  faqTitle: "Häufig gestellte Fragen",
  faqItems: [
    {
      q: "Wie lange hält die Batterie?",
      a: "Unsere Raumklimasensoren laufen je nach Meldefrequenz typischerweise 7–10 Jahre mit einer einzigen Batterie. Die Plattform warnt Sie rechtzeitig, wenn die Batterie gewechselt werden muss.",
    },
    {
      q: "Brauchen wir WLAN im gesamten Gebäude?",
      a: "Nein. Die Sensoren nutzen LoRaWAN oder ähnliche Funkprotokolle mit großer Reichweite. Ein einziges Gateway deckt in der Regel eine ganze Etage oder mehr ab.",
    },
    {
      q: "Lassen sich die Daten in unser BMS (Building Management System) integrieren?",
      a: "Ja. RoomAlyzer bietet offene APIs und unterstützt die gängigsten BMS-Protokolle. Wir helfen gern bei der Einrichtung.",
    },
    {
      q: "Ist die Lösung DSGVO-konform?",
      a: "Ja. Wir messen physikalische Bedingungen in den Räumen — keine Personen. Die Daten werden in der EU verarbeitet und erfüllen die geltenden Standards.",
    },
    {
      q: "Was kostet das?",
      a: "Der Preis hängt von der Anzahl der Sensoren und der Größe des Gebäudes ab. Buchen Sie eine Demo, und wir geben Ihnen eine konkrete Schätzung auf Basis Ihres Falls.",
    },
  ],
  ctaTitle: "Möchten Sie es selbst sehen?",
  ctaSubtitle:
    "Buchen Sie eine 30-minütige Demo. Wir zeigen die Plattform, gehen Ihren Fall durch und geben Ihnen eine Preisschätzung.",
};

const sv: IndoorClimateStrings = {
  metaTitle: "Inomhusklimat — sensorer och data | IoT Fabrikken",
  metaDescription:
    "Mät CO2, temperatur, fukt och VOC med trådlösa sensorer. Reagera på data i stället för känslor — och ligg steget före mögel och fukt.",
  breadcrumbHome: "Hem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Inomhusklimat",
  heroTitle: "Hantera klagomål med data.",
  heroTitleAccent: "Inte känslor.",
  heroLead:
    "Trådlösa sensorer mäter CO2, temperatur, fukt och VOC i realtid. Få tidiga varningar om mögel och fukt innan de skadar byggnaden — och dokumentation som håller för arbetsmiljökraven.",
  heroPrimaryCta: "Boka en gratis demo",
  heroSecondaryCta: "Ladda ner produktblad",
  dashboardLabel: "RoomAlyzer — Inomhusklimat",
  dashboardAlt: "RoomAlyzer-dashboard som visar inomhusklimatdata från flera rum",
  howItWorksEyebrow: "Så fungerar det",
  howItWorksHeading: "Från kartong till data på under 10 minuter.",
  steps: [
    { n: "01", title: "Packa upp", body: "Sensorn levereras klar att använda — ingen konfiguration, ingen installation." },
    { n: "02", title: "Montera", body: "Fäst den med en enda skruv eller dubbelhäftande tejp. Tar under 2 minuter per sensor." },
    { n: "03", title: "Se data", body: "Sensorn rapporterar automatiskt in i RoomAlyzer. Insikten flödar redan samma dag." },
  ],
  paramsEyebrow: "Parametrar vi mäter",
  paramsHeading: "All data du behöver — och inget du inte behöver.",
  features: [
    { title: "CO2", body: "Exakta mätvärden som visar när det är dags att vädra — innan huvudvärken sätter in.", unit: "400–5000 ppm" },
    { title: "Temperatur", body: "Kontinuerlig övervakning så att både komfort och compliance täcks.", unit: "-10 till +50°C" },
    { title: "Fukt", body: "Håll koll på fuktnivåerna — avgörande för välbefinnande och byggnadens hälsa.", unit: "0–100 % RH" },
    { title: "VOC", body: "Total nivå av flyktiga organiska föreningar från material och städning.", unit: "0–5000 ppb" },
    { title: "Mögel och fukt", body: "Förutsägande analys som larmar innan mögel får fäste i konstruktionen.", unit: "Förutsägande modell" },
    { title: "Tryck", body: "Relativt tryck mellan rum — relevant för laboratorier och renrum.", unit: "± 500 Pa" },
  ],
  fmHeading: "För facility managers",
  fmItems: [
    "Se larm sorterade efter kritikalitet",
    "Dokumentera ventilationssystemens prestanda",
    "Minska klagomålsärenden med objektiva data",
    "Driv driften utifrån verklig användning — inte schema",
  ],
  complianceHeading: "För compliance och ESG",
  complianceItems: [
    "Export av rapporter för CSRD- och ESG-arbete",
    "Inomhusklimathistorik för arbetsmiljöinspektioner och revisioner",
    "Dokumenterad insats för medarbetarnas välbefinnande",
    "Lägre energiförbrukning genom datadriven styrning",
  ],
  faqTitle: "Vanliga frågor",
  faqItems: [
    {
      q: "Hur lång är batteritiden?",
      a: "Våra inomhusklimatsensorer håller vanligtvis 7–10 år på ett enda batteri, beroende på rapporteringsfrekvens. Plattformen varnar dig i god tid när batteriet behöver bytas.",
    },
    {
      q: "Behöver vi wifi i hela byggnaden?",
      a: "Nej. Sensorerna använder LoRaWAN eller liknande radioprotokoll med lång räckvidd. En enda gateway täcker vanligtvis ett helt våningsplan eller mer.",
    },
    {
      q: "Kan data integreras med vårt BMS (Building Management System)?",
      a: "Ja. RoomAlyzer erbjuder öppna API:er och stöder de vanligaste BMS-protokollen. Vi hjälper gärna till med installationen.",
    },
    {
      q: "Är lösningen GDPR-förenlig?",
      a: "Ja. Vi mäter fysiska förhållanden i rummen — inte personer. Data behandlas inom EU och uppfyller gällande standarder.",
    },
    {
      q: "Vad kostar det?",
      a: "Priset beror på antalet sensorer och byggnadens storlek. Boka en demo så ger vi en konkret uppskattning utifrån ert fall.",
    },
  ],
  ctaTitle: "Vill du se det själv?",
  ctaSubtitle:
    "Boka en 30-minuters demo. Vi visar plattformen, går igenom ert fall och ger dig en prisuppskattning.",
};

const dictionaries: Partial<Record<Lang, IndoorClimateStrings>> = { en, da, de, sv };

export function getIndoorClimate(lang: Lang): IndoorClimateStrings {
  return dictionaries[lang] ?? dictionaries[defaultLang]!;
}
