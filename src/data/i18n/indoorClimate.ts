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
  /** Intro paragraphs below the hero screenshot (white band). */
  intro: string[];
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  dashboardLabel: string;
  dashboardAlt: string;
  challengesEyebrow: string;
  challengesHeading: string;
  challenges: { title: string; body: string }[];
  capabilitiesEyebrow: string;
  capabilitiesHeading: string;
  solutionLead: string;
  capabilitiesContextAlt: string;
  features: { id: string; title: string; body: string; unit: string; imageAlt: string }[];
  relatedModuleLabel: string;
  relatedModuleBody: string;
  relatedModuleLink: string;
  audiencesEyebrow: string;
  audiencesHeading: string;
  audiencesLead: string;
  fmHeading: string;
  fmItems: string[];
  complianceHeading: string;
  complianceItems: string[];
  faqTitle: string;
  faqContextAlt: string;
  faqItems: { q: string; a: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaMicrocopy: string;
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
    "Wireless sensors measure CO2, temperature, humidity and VOC in real time — so you can act before complaints escalate.",
  intro: [
    "Indoor-climate complaints are hard to settle when everyone feels the air differently and nobody has numbers to point to.",
    "RoomAlyzer gives you live readings in every room, early warnings about mould and damp, and documentation that stands up to workplace-environment requirements.",
  ],
  heroPrimaryCta: "Book a free demo",
  heroSecondaryCta: "Get an offer",
  dashboardLabel: "RoomAlyzer — Indoor climate",
  dashboardAlt: "RoomAlyzer dashboard showing indoor-climate data from several rooms",
  challengesEyebrow: "The challenges you know",
  challengesHeading: "When you cannot measure the air, every complaint becomes a debate.",
  challenges: [
    {
      title: "Complaints you cannot verify",
      body: "Staff say it is stuffy or too cold — but without room-level data, facility teams are stuck mediating opinions instead of fixing the cause.",
    },
    {
      title: "Mould and damp you see too late",
      body: "By the time moisture damage is visible, remediation is expensive. Humidity trends should alarm you long before the structure is at risk.",
    },
    {
      title: "Ventilation on autopilot",
      body: "Systems run at full capacity whether rooms are packed or empty — wasting energy and still missing the rooms that actually need more air.",
    },
  ],
  capabilitiesEyebrow: "What we measure",
  capabilitiesHeading: "All the parameters that matter — in one view.",
  solutionLead:
    "RoomAlyzer Indoor climate turns sensor readings into clear dashboards, alarms and reports — built for facility teams, compliance officers and building owners.",
  capabilitiesContextAlt: "Facility team reviewing indoor climate data on a display",
  features: [
    {
      id: "co2",
      title: "CO2",
      body: "Precise readings that show when it is time to air the room — before headaches set in.",
      unit: "400–5000 ppm",
      imageAlt: "CO2 levels chart in RoomAlyzer",
    },
    {
      id: "temperature",
      title: "Temperature",
      body: "Continuous monitoring so both comfort and compliance are covered.",
      unit: "-10 to +50°C",
      imageAlt: "Temperature monitoring dashboard in RoomAlyzer",
    },
    {
      id: "humidity",
      title: "Humidity",
      body: "Keep an eye on humidity levels — key to wellbeing and the health of the building.",
      unit: "0–100 % RH",
      imageAlt: "Humidity trend view in RoomAlyzer",
    },
    {
      id: "voc",
      title: "VOC",
      body: "Total level of volatile organic compounds from materials and cleaning.",
      unit: "0–5000 ppb",
      imageAlt: "VOC monitoring view in RoomAlyzer",
    },
    {
      id: "mould-damp",
      title: "Mould & damp",
      body: "Predictive analysis that alarms before mould takes hold in the structure.",
      unit: "Predictive model",
      imageAlt: "Mould and damp risk analysis in RoomAlyzer",
    },
    {
      id: "pressure",
      title: "Pressure",
      body: "Relative pressure between rooms — relevant for labs and clean rooms.",
      unit: "± 500 Pa",
      imageAlt: "Room pressure monitoring in RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smarter together",
  relatedModuleBody:
    "Pair indoor-climate data with occupancy from Space management — ventilate when rooms are in use and dial back when they are empty.",
  relatedModuleLink: "Explore space management",
  audiencesEyebrow: "Who it is for",
  audiencesHeading: "For operations teams and compliance — with data everyone can trust.",
  audiencesLead:
    "Whether you run day-to-day building operations or report on ESG, RoomAlyzer gives you the same objective baseline.",
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
  faqContextAlt: "Colleagues discussing plans around a meeting table",
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
  ctaMicrocopy: "Sensors live in minutes · years of battery life",
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
    "Trådløse sensorer måler CO2, temperatur, fugt og VOC i realtid — så I kan handle, før klagerne eskalerer.",
  intro: [
    "Indeklimaklager er svære at løse, når alle oplever luften forskelligt — og ingen har tal at pege på.",
    "RoomAlyzer giver jer live målinger i hvert rum, tidlige advarsler om skimmel og fugt og dokumentation, der lever op til arbejdsmiljøkravene.",
  ],
  heroPrimaryCta: "Book en gratis demo",
  heroSecondaryCta: "Få et tilbud",
  dashboardLabel: "RoomAlyzer — Indeklima",
  dashboardAlt: "RoomAlyzer-dashboard, der viser indeklimadata fra flere rum",
  challengesEyebrow: "Udfordringerne, I kender",
  challengesHeading: "Når I ikke kan måle luften, bliver hver klage til en diskussion.",
  challenges: [
    {
      title: "Klager I ikke kan verificere",
      body: "Medarbejdere siger, det er tung luft eller for koldt — men uden rumdata sidder facility-teamet og mægler meninger i stedet for at løse årsagen.",
    },
    {
      title: "Skimmel og fugt, I ser for sent",
      body: "Når fugtskader først er synlige, er udbedringen dyr. Fugttrends bør alarmer jer længe før konstruktionen er i fare.",
    },
    {
      title: "Ventilation på autopilot",
      body: "Anlæg kører for fuld kraft, uanset om rummene er fyldt eller tomme — det spilder energi og rammer stadig ikke de rum, der faktisk mangler luft.",
    },
  ],
  capabilitiesEyebrow: "Det vi måler",
  capabilitiesHeading: "Alle de parametre, der betyder noget — i ét overblik.",
  solutionLead:
    "RoomAlyzer Indeklima omsætter sensordata til tydelige dashboards, alarmer og rapporter — bygget til facility-teams, compliance-ansvarlige og bygningsejere.",
  capabilitiesContextAlt: "Facility-team der gennemgår indeklimadata på en skærm",
  features: [
    {
      id: "co2",
      title: "CO2",
      body: "Præcise målinger, der viser, hvornår der skal luftes ud — før hovedpinen sætter ind.",
      unit: "400–5000 ppm",
      imageAlt: "CO2-niveauer i RoomAlyzer",
    },
    {
      id: "temperature",
      title: "Temperatur",
      body: "Kontinuerlig overvågning, så både komfort og compliance er dækket.",
      unit: "-10 til +50°C",
      imageAlt: "Temperaturovervågning i RoomAlyzer",
    },
    {
      id: "humidity",
      title: "Fugt",
      body: "Hold øje med fugtniveauet — afgørende for trivsel og bygningens sundhed.",
      unit: "0–100 % RH",
      imageAlt: "Fugttrend i RoomAlyzer",
    },
    {
      id: "voc",
      title: "VOC",
      body: "Samlet niveau af flygtige organiske forbindelser fra materialer og rengøring.",
      unit: "0–5000 ppb",
      imageAlt: "VOC-overvågning i RoomAlyzer",
    },
    {
      id: "mould-damp",
      title: "Skimmel og fugt",
      body: "Forudsigende analyse, der alarmerer, før skimmel får fat i konstruktionen.",
      unit: "Forudsigende model",
      imageAlt: "Skimmel- og fugtrisikoanalyse i RoomAlyzer",
    },
    {
      id: "pressure",
      title: "Tryk",
      body: "Relativt tryk mellem rum — relevant for laboratorier og renrum.",
      unit: "± 500 Pa",
      imageAlt: "Rumtryksovervågning i RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smartere sammen",
  relatedModuleBody:
    "Kombinér indeklimadata med belægning fra Space management — ventilér, når rummene er i brug, og skru ned, når de står tomme.",
  relatedModuleLink: "Udforsk space management",
  audiencesEyebrow: "Hvem det er til",
  audiencesHeading: "Til driftsteams og compliance — med data, alle kan stole på.",
  audiencesLead:
    "Uanset om I driver den daglige bygningsdrift eller rapporterer på ESG, giver RoomAlyzer jer det samme objektive udgangspunkt.",
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
  faqContextAlt: "Kolleger der diskuterer planer omkring et mødebord",
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
  ctaMicrocopy: "Sensorer klar på minutter · års batterilevetid",
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
    "Drahtlose Sensoren messen CO2, Temperatur, Luftfeuchtigkeit und VOC in Echtzeit — damit Sie handeln können, bevor Beschwerden eskalieren.",
  intro: [
    "Raumklima-Beschwerden lassen sich schwer klären, wenn jeder die Luft anders empfindet — und niemand Zahlen vorlegen kann.",
    "RoomAlyzer liefert Live-Messwerte in jedem Raum, frühzeitige Warnungen vor Schimmel und Feuchtigkeit sowie Dokumentation, die den Arbeitsschutzanforderungen standhält.",
  ],
  heroPrimaryCta: "Kostenlose Demo buchen",
  heroSecondaryCta: "Angebot anfordern",
  dashboardLabel: "RoomAlyzer — Raumklima",
  dashboardAlt: "RoomAlyzer-Dashboard mit Raumklimadaten aus mehreren Räumen",
  challengesEyebrow: "Die Herausforderungen, die Sie kennen",
  challengesHeading: "Wenn Sie die Luft nicht messen können, wird jede Beschwerde zur Debatte.",
  challenges: [
    {
      title: "Beschwerden, die Sie nicht verifizieren können",
      body: "Mitarbeitende sagen, es sei stickig oder zu kalt — aber ohne Raumdaten vermittelt das Facility-Team Meinungen statt die Ursache zu beheben.",
    },
    {
      title: "Schimmel und Feuchtigkeit, die Sie zu spät sehen",
      body: "Wenn Feuchteschäden sichtbar werden, ist die Sanierung teuer. Feuchtigkeitstrends sollten alarmieren, lange bevor die Bausubstanz gefährdet ist.",
    },
    {
      title: "Lüftung auf Autopilot",
      body: "Anlagen laufen auf Hochtouren, egal ob Räume voll oder leer sind — das verschwendet Energie und trifft trotzdem nicht die Räume, die wirklich mehr Luft brauchen.",
    },
  ],
  capabilitiesEyebrow: "Was wir messen",
  capabilitiesHeading: "Alle relevanten Parameter — in einer Ansicht.",
  solutionLead:
    "RoomAlyzer Raumklima verwandelt Sensordaten in klare Dashboards, Alarme und Berichte — für Facility-Teams, Compliance-Verantwortliche und Gebäudeeigentümer.",
  capabilitiesContextAlt: "Facility-Team prüft Raumklimadaten auf einem Display",
  features: [
    {
      id: "co2",
      title: "CO2",
      body: "Präzise Messwerte, die zeigen, wann gelüftet werden sollte — bevor Kopfschmerzen einsetzen.",
      unit: "400–5000 ppm",
      imageAlt: "CO2-Werte in RoomAlyzer",
    },
    {
      id: "temperature",
      title: "Temperatur",
      body: "Kontinuierliche Überwachung, sodass Komfort und Compliance abgedeckt sind.",
      unit: "-10 bis +50°C",
      imageAlt: "Temperaturüberwachung in RoomAlyzer",
    },
    {
      id: "humidity",
      title: "Luftfeuchtigkeit",
      body: "Behalten Sie die Luftfeuchtigkeit im Blick — entscheidend für Wohlbefinden und die Gesundheit des Gebäudes.",
      unit: "0–100 % RH",
      imageAlt: "Luftfeuchtigkeitstrend in RoomAlyzer",
    },
    {
      id: "voc",
      title: "VOC",
      body: "Gesamtgehalt flüchtiger organischer Verbindungen aus Materialien und Reinigung.",
      unit: "0–5000 ppb",
      imageAlt: "VOC-Überwachung in RoomAlyzer",
    },
    {
      id: "mould-damp",
      title: "Schimmel & Feuchtigkeit",
      body: "Vorausschauende Analyse, die alarmiert, bevor sich Schimmel in der Bausubstanz festsetzt.",
      unit: "Prognosemodell",
      imageAlt: "Schimmel- und Feuchtigkeitsrisiko in RoomAlyzer",
    },
    {
      id: "pressure",
      title: "Druck",
      body: "Relativer Druck zwischen Räumen — relevant für Labore und Reinräume.",
      unit: "± 500 Pa",
      imageAlt: "Raumdrucküberwachung in RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smarter zusammen",
  relatedModuleBody:
    "Kombinieren Sie Raumklimadaten mit Belegung aus Space management — lüften, wenn Räume genutzt werden, und drosseln, wenn sie leer stehen.",
  relatedModuleLink: "Space management entdecken",
  audiencesEyebrow: "Für wen es gedacht ist",
  audiencesHeading: "Für Betriebsteams und Compliance — mit Daten, denen alle vertrauen können.",
  audiencesLead:
    "Ob Sie den täglichen Gebäudebetrieb steuern oder ESG berichten — RoomAlyzer liefert dieselbe objektive Basis.",
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
  faqContextAlt: "Kollegen besprechen Pläne an einem Besprechungstisch",
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
  ctaMicrocopy: "Sensoren in Minuten live · jahrelange Batterielaufzeit",
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
    "Trådlösa sensorer mäter CO2, temperatur, fukt och VOC i realtid — så att ni kan agera innan klagomålen eskalerar.",
  intro: [
    "Klagomål om inomhusklimat är svåra att lösa när alla upplever luften olika — och ingen har siffror att peka på.",
    "RoomAlyzer ger er livemätningar i varje rum, tidiga varningar om mögel och fukt samt dokumentation som håller för arbetsmiljökraven.",
  ],
  heroPrimaryCta: "Boka en gratis demo",
  heroSecondaryCta: "Få en offert",
  dashboardLabel: "RoomAlyzer — Inomhusklimat",
  dashboardAlt: "RoomAlyzer-dashboard som visar inomhusklimatdata från flera rum",
  challengesEyebrow: "Utmaningarna ni känner igen",
  challengesHeading: "När ni inte kan mäta luften blir varje klagomål en debatt.",
  challenges: [
    {
      title: "Klagomål ni inte kan verifiera",
      body: "Personalen säger att det är tung luft eller för kallt — men utan rumsdata sitter facility-teamet och medlar mellan åsikter i stället för att åtgärda orsaken.",
    },
    {
      title: "Mögel och fukt ni ser för sent",
      body: "När fuktskador syns är åtgärden dyr. Fukt­trender bör larma er långt innan konstruktionen riskeras.",
    },
    {
      title: "Ventilation på autopilot",
      body: "Systemen kör för fullt oavsett om rummen är fulla eller tomma — det slösar energi och missar fortfarande de rum som faktiskt behöver mer luft.",
    },
  ],
  capabilitiesEyebrow: "Det vi mäter",
  capabilitiesHeading: "Alla parametrar som spelar roll — i en vy.",
  solutionLead:
    "RoomAlyzer Inomhusklimat omvandlar sensordata till tydliga dashboards, larm och rapporter — byggt för facility-team, compliance-ansvariga och fastighetsägare.",
  capabilitiesContextAlt: "Facility-team som granskar inomhusklimatdata på en skärm",
  features: [
    {
      id: "co2",
      title: "CO2",
      body: "Exakta mätvärden som visar när det är dags att vädra — innan huvudvärken sätter in.",
      unit: "400–5000 ppm",
      imageAlt: "CO2-nivåer i RoomAlyzer",
    },
    {
      id: "temperature",
      title: "Temperatur",
      body: "Kontinuerlig övervakning så att både komfort och compliance täcks.",
      unit: "-10 till +50°C",
      imageAlt: "Temperaturövervakning i RoomAlyzer",
    },
    {
      id: "humidity",
      title: "Fukt",
      body: "Håll koll på fuktnivåerna — avgörande för välbefinnande och byggnadens hälsa.",
      unit: "0–100 % RH",
      imageAlt: "Fukttrend i RoomAlyzer",
    },
    {
      id: "voc",
      title: "VOC",
      body: "Total nivå av flyktiga organiska föreningar från material och städning.",
      unit: "0–5000 ppb",
      imageAlt: "VOC-övervakning i RoomAlyzer",
    },
    {
      id: "mould-damp",
      title: "Mögel och fukt",
      body: "Förutsägande analys som larmar innan mögel får fäste i konstruktionen.",
      unit: "Förutsägande modell",
      imageAlt: "Mögel- och fuktriskanalys i RoomAlyzer",
    },
    {
      id: "pressure",
      title: "Tryck",
      body: "Relativt tryck mellan rum — relevant för laboratorier och renrum.",
      unit: "± 500 Pa",
      imageAlt: "Rumstrycksövervakning i RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smartare tillsammans",
  relatedModuleBody:
    "Kombinera inomhusklimatdata med beläggning från Space management — ventilera när rummen används och dra ner när de står tomma.",
  relatedModuleLink: "Utforska space management",
  audiencesEyebrow: "Vem det är för",
  audiencesHeading: "För driftteam och compliance — med data alla kan lita på.",
  audiencesLead:
    "Oavsett om ni driver den dagliga byggnadsdriften eller rapporterar ESG ger RoomAlyzer er samma objektiva utgångspunkt.",
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
  faqContextAlt: "Kolleger som diskuterar planer runt ett mötesbord",
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
  ctaMicrocopy: "Sensorer live på minuter · års batteritid",
};

const dictionaries: Partial<Record<Lang, IndoorClimateStrings>> = { en, da, de, sv };

export function getIndoorClimate(lang: Lang): IndoorClimateStrings {
  return dictionaries[lang] ?? dictionaries[defaultLang]!;
}
