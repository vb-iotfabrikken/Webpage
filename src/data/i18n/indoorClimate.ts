import type { Lang } from "../lang";
import { defaultLang } from "../lang";
import type { ModuleProseWithLinks } from "./modulePageTypes";

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
  /** Intro paragraphs below the challenges section header. */
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
  solutionLeadWithSensorLinks?: ModuleProseWithLinks;
  capabilitiesContextAlt: string;
  features: {
    id: string;
    title: string;
    body: string;
    bodyWithSensorLinks?: ModuleProseWithLinks;
    unit: string;
    imageAlt: string;
  }[];
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
  metaTitle: "Indoor climate: sensors and data | IoT Fabrikken",
  metaDescription:
    "Remote indoor climate monitoring with wireless sensors. Turn complaints into facts, cut energy waste, and stay ahead of mould — with EPBD and DGNB-ready reports.",
  breadcrumbHome: "Home",
  breadcrumbModules: "Modules",
  breadcrumbCurrent: "Indoor climate",
  heroTitle: "Handle complaints and energy with data,",
  heroTitleAccent: "not feelings.",
  heroLead:
    "Remote indoor climate monitoring that turns complaints into facts and saves energy",
  intro: [
    "Indoor climate monitoring gives you the data to answer a question every facility manager knows: is the complaint real, or is it a feeling? Someone is too warm, someone else is too cold, and the air feels \"heavy\" by mid-afternoon, but without data on temperature, humidity, and CO₂, you are left managing impressions, adjusting ventilation on guesswork, and defending decisions you cannot back up.",
  ],
  heroPrimaryCta: "Book a free demo",
  heroSecondaryCta: "Get an offer",
  dashboardLabel: "RoomAlyzer: Indoor climate",
  dashboardAlt: "Occupied office with RoomAlyzer indoor climate monitoring",
  challengesEyebrow: "The challenges you know",
  challengesHeading: "Without room-level data, energy spend and comfort complaints both get worse.",
  challenges: [
    {
      title: "Unnecessary energy waste",
      body: "Heating and cooling run whether rooms need it or not — and without proper data you are paying for comfort nobody feels.",
    },
    {
      title: "The balancing act",
      body: "One side of the building is too warm while another is too cold. Without objective readings, facility teams cannot find the right balance between heating and cooling.",
    },
    {
      title: "Coordination challenges",
      body: "Facility managers, HVAC contractors and compliance teams work from different assumptions — and nobody shares the same picture of what the air is actually doing.",
    },
    {
      title: "Unpredictability",
      body: "Conditions shift through the day and the season. Without continuous monitoring, unpredictable indoor climate stays a guessing game instead of something you can act on.",
    },
  ],
  capabilitiesEyebrow: "How RoomAlyzer solves it",
  capabilitiesHeading: "All the parameters that matter — in one view.",
  solutionLead:
    "RoomAlyzer Indoor climate connects CO2, Humidity, and Mini+ sensors to clear dashboards, alarms, reports, predictions and recommendations — built for facility teams, compliance officers and building owners with compliance in mind.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Indoor climate connects " },
    { type: "sensor", slug: "co2", label: "CO2" },
    { type: "text", value: ", " },
    { type: "sensor", slug: "humidity", label: "Humidity" },
    { type: "text", value: ", and " },
    { type: "sensor", slug: "mini-plus", label: "Mini+" },
    {
      type: "text",
      value:
        " sensors to clear dashboards, alarms, reports, predictions and recommendations — built for facility teams, compliance officers and building owners with compliance in mind. ",
    },
    { type: "compare", label: "Compare indoor climate sensors", useCaseId: "classroom" },
  ],
  capabilitiesContextAlt: "RoomAlyzer dashboard showing indoor-climate data from several rooms",
  features: [
    {
      id: "epbd-report",
      title: "EPBD & DGNB reporting",
      body: "RoomAlyzer produces compliance documentation directly from live sensor data — no spreadsheets, no manual collection. For DGNB certification (SOC 1.1 / 1.2, EN 16798-1), a wizard walks you through period, working hours, sensors and thresholds, then generates a professional PDF with charts, statistics and floor-plan overlays. For buildings under EPBD 2024, create a full compliance report on demand with gap analysis, compliance percentages per parameter, an energy overview and rule-based recommendations.",
      unit: "EPBD · DGNB",
      imageAlt: "EPBD compliance report generated in RoomAlyzer",
    },
    {
      id: "energy-optimisation",
      title: "Energy optimisation",
      body: "See how much energy your building wastes keeping rooms warmer or cooler than they need to be. The module compares indoor temperature against winter and summer setpoints and puts a clear figure on overheating and overcooling (in kWh, in cost and in CO₂) so you can see exactly where savings are hiding. An efficiency score sums up each location at a glance, passive periods are excluded so the numbers stay honest, and you get concrete, prioritised recommendations for any window from 24 hours to 90 days.",
      unit: "Energy",
      imageAlt: "Energy optimisation analysis in RoomAlyzer",
    },
    {
      id: "mould-risk",
      title: "Mould risk",
      body: "The Mould Risk module uses the recognised VTT model to turn temperature and humidity into a single mould index from 0 to 6 for every sensor — from no risk through early microscopic growth to visible, critical risk. Set each location's material sensitivity so the model reflects your actual building. A clear overview shows the highest risk right now, which zones are growing and how each one is trending, with plain-language advice before a small ventilation change becomes a costly repair.",
      unit: "VTT",
      imageAlt: "Mould risk overview in RoomAlyzer",
    },
    {
      id: "scenarios",
      title: "Thresholds & scenarios",
      body: "Thresholds are the green, yellow and red zones that define a good indoor climate for your building — and with scenarios you set them once and apply them globally, per location, or down to a single sensor. RoomAlyzer ships with ready-made scenarios built on recognised standards (from EPBD / EN 16798 for offices to EN 15757 for preservation and HACCP for food storage), grouped by sector so the right limits are only a click away.",
      unit: "Thresholds",
      imageAlt: "Indoor climate scenarios and standards library in RoomAlyzer",
    },
    {
      id: "legacy-report",
      title: "Report & warnings",
      body: "Daily, weekly and monthly indoor climate summaries land straight in your inbox. Choose exactly which values to include, send to as many recipients as you like, and always send a test first. The warning function notifies you the moment the indoor climate drifts from the level you have set. Tune alerts to avoid false alarms, choose SMS or email, and assign different reports to different recipients, so rising humidity or poor air quality is caught early.",
      unit: "Reports",
      imageAlt: "Indoor climate report and CO₂ graph in RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smarter together",
  relatedModuleBody:
    "Pair indoor-climate data with occupancy from Space management — ventilate when rooms are in use and dial back when they are empty.",
  relatedModuleLink: "Explore space management",
  audiencesEyebrow: "Who it is for",
  audiencesHeading: "For compliance officers and ESG managers: data you can use across standards and regulations.",
  audiencesLead:
    "Whether your reporting touches EPBD, DGNB, CSRD, ESG or local building rules, RoomAlyzer gives compliance officers and facility teams the same objective baseline to build on.",
  fmHeading: "For facility managers and operations teams",
  fmItems: [
    "See alarms sorted by criticality; run operations based on real usage — not schedule",
    "Balance heating and cooling with objective data; reduce complaints with room-level data",
    "Document ventilation system performance with exportable reports",
    "Local building and HVAC rules — data you can use for operational compliance",
  ],
  complianceHeading: "For compliance officers & ESG managers",
  complianceItems: [
    "Exported reports you can use in CSRD, ESG and other disclosure work",
    "EPBD 2024 and DGNB — reports and PDF exports you can use for gap analysis, energy overviews and SOC 1.1 / 1.2 (EN 16798-1) submissions",
    "Indoor-climate history and documented data you can draw on for workplace inspections, audits and employee wellbeing work",
    "Evidence to support energy reduction through data-driven control",
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
  metaTitle: "Indeklima: sensorer og data | IoT Fabrikken",
  metaDescription:
    "Fjernovervågning af indeklima med trådløse sensorer. Gør klager til fakta, reducer energispild, og vær på forkant med skimmel — med EPBD- og DGNB-klare rapporter.",
  breadcrumbHome: "Hjem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Indeklima",
  heroTitle: "Håndtér klager og energi med data,",
  heroTitleAccent: "ikke fornemmelser.",
  heroLead:
    "Fjernovervågning af indeklima, der gør klager til fakta og sparer energi",
  intro: [
    "Indeklimaovervågning giver jer data til at besvare et spørgsmål, enhver facility manager kender: er klagen reel, eller er det en fornemmelse? Den ene er for varm, den anden for kold, og luften føles \"tung\" tidligt på eftermiddagen, men uden data om temperatur, fugt og CO₂ styrer I på indtryk, justerer ventilation på mavefornemmelse og forsvarer beslutninger, I ikke kan underbygge.",
  ],
  heroPrimaryCta: "Book en gratis demo",
  heroSecondaryCta: "Få et tilbud",
  dashboardLabel: "RoomAlyzer: Indeklima",
  dashboardAlt: "Beplant kontor med RoomAlyzer indeklimaovervågning",
  challengesEyebrow: "Udfordringerne, I kender",
  challengesHeading: "Uden rumdata bliver både energiforbrug og komfortklager værre.",
  challenges: [
    {
      title: "Unødvendigt energispild",
      body: "Opvarmning og køling kører, uanset om rummene har brug for det — og uden ordentlige data betaler I for komfort, ingen mærker.",
    },
    {
      title: "Balancen",
      body: "Den ene side af bygningen er for varm, den anden for kold. Uden objektive målinger kan facility-teamet ikke finde den rette balance mellem opvarmning og køling.",
    },
    {
      title: "Koordineringsudfordringer",
      body: "Facility managers, HVAC-entreprenører og compliance-teams arbejder ud fra forskellige antagelser — og ingen deler det samme billede af, hvad luften faktisk gør.",
    },
    {
      title: "Uforudsigelighed",
      body: "Forholdene skifter gennem dagen og årstiden. Uden løbende overvågning forbliver uforudsigeligt indeklima et gæt i stedet for noget, I kan handle på.",
    },
  ],
  capabilitiesEyebrow: "Sådan løser RoomAlyzer det",
  capabilitiesHeading: "Alle de parametre, der betyder noget — i ét overblik.",
  solutionLead:
    "RoomAlyzer Indeklima forbinder CO2, Humidity og Mini+ sensorer til tydelige dashboards, alarmer, rapporter, forudsigelser og anbefalinger — bygget til facility-teams, compliance-ansvarlige og bygningsejere med compliance for øje.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Indeklima forbinder " },
    { type: "sensor", slug: "co2", label: "CO2" },
    { type: "text", value: ", " },
    { type: "sensor", slug: "humidity", label: "Humidity" },
    { type: "text", value: " og " },
    { type: "sensor", slug: "mini-plus", label: "Mini+" },
    {
      type: "text",
      value:
        "-sensorer til tydelige dashboards, alarmer, rapporter, forudsigelser og anbefalinger — bygget til facility-teams, compliance-ansvarlige og bygningsejere med compliance for øje. ",
    },
    { type: "compare", label: "Sammenlign indeklimasensorer", useCaseId: "classroom" },
  ],
  capabilitiesContextAlt: "RoomAlyzer-dashboard, der viser indeklimadata fra flere rum",
  features: [
    {
      id: "epbd-report",
      title: "EPBD- og DGNB-rapportering",
      body: "RoomAlyzer producerer compliance-dokumentation direkte fra live sensordata — uden regneark og uden manuel indsamling. Til DGNB-certificering (SOC 1.1 / 1.2, EN 16798-1) guider en wizard jer gennem periode, arbejdstid, sensorer og tærskler og genererer en professionel PDF med diagrammer, statistik og plantegningsoverlays. Til bygninger under EPBD 2024 kan I oprette en fuld compliance-rapport på bestilling med gap-analyse, compliance-procenter pr. parameter, et energioverblik og regelbaserede anbefalinger.",
      unit: "EPBD · DGNB",
      imageAlt: "EPBD-compliance-rapport genereret i RoomAlyzer",
    },
    {
      id: "energy-optimisation",
      title: "Energioptimering",
      body: "Se, hvor meget energi bygningen spilder på at holde rum varmere eller koldere end nødvendigt. Modulet sammenligner indendørstemperaturen med vinter- og sommersætpunkter og sætter et klart tal på overopvarmning og overkøling (i kWh, i omkostninger og i CO₂) så I præcis kan se, hvor besparelserne gemmer sig. En effektivitetsscore opsummerer hvert sted med ét blik, passive perioder udelades, så tallene holder sig ærlige, og I får konkrete, prioriterede anbefalinger for ethvert vindue fra 24 timer til 90 dage.",
      unit: "Energi",
      imageAlt: "Energioptimeringsanalyse i RoomAlyzer",
    },
    {
      id: "mould-risk",
      title: "Skimmelrisiko",
      body: "Skimmelrisiko-modulet bruger den anerkendte VTT-model til at omsætte temperatur og fugt til et enkelt skimmelindeks fra 0 til 6 for hver sensor — fra ingen risiko over tidlig mikroskopisk vækst til synlig, kritisk risiko. Indstil hver lokations materialefølsomhed, så modellen afspejler jeres faktiske bygning. Et klart overblik viser den højeste risiko lige nu, hvilke zoner der vokser, og hvordan hver enkelt udvikler sig, med klart sprog og råd, før en lille ventilationsændring bliver en dyr reparation.",
      unit: "VTT",
      imageAlt: "Skimmelrisiko-overblik i RoomAlyzer",
    },
    {
      id: "scenarios",
      title: "Tærskler og scenarier",
      body: "Tærskler er de grønne, gule og røde zoner, der definerer et godt indeklima for jeres bygning — og med scenarier sætter I dem én gang og anvender dem globalt, pr. lokation eller helt ned til en enkelt sensor. RoomAlyzer leveres med færdige scenarier bygget på anerkendte standarder (fra EPBD / EN 16798 og BR18 til kontorer til EN 15757 til bevaring og HACCP til fødevareopbevaring), grupperet efter sektor, så de rette grænser kun er et klik væk.",
      unit: "Tærskler",
      imageAlt: "Indeklimascenarier og standardbibliotek i RoomAlyzer",
    },
    {
      id: "legacy-report",
      title: "Rapport og advarsler",
      body: "Daglige, ugentlige og månedlige indeklimaoversigter lander direkte i indbakken. Vælg præcis hvilke værdier der skal med, send til så mange modtagere, I vil, og send altid en test først. Advarselsfunktionen giver besked i det øjeblik, indeklimaet afviger fra det niveau, I har sat. Finjuster alarmer for at undgå falske alarmer, vælg SMS eller e-mail, og tildel forskellige rapporter til forskellige modtagere, så stigende fugt eller dårlig luftkvalitet opdages tidligt.",
      unit: "Rapporter",
      imageAlt: "Indeklimarapport og CO₂-graf i RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smartere sammen",
  relatedModuleBody:
    "Kombinér indeklimadata med belægning fra Space management — ventilér, når rummene er i brug, og skru ned, når de står tomme.",
  relatedModuleLink: "Udforsk space management",
  audiencesEyebrow: "Hvem det er til",
  audiencesHeading: "Til compliance-ansvarlige og ESG-managere: data I kan bruge på tværs af standarder og regler.",
  audiencesLead:
    "Uanset om jeres rapportering berører EPBD, DGNB, CSRD, ESG eller lokale bygningsregler, giver RoomAlyzer compliance-ansvarlige og facility-teams det samme objektive udgangspunkt at bygge videre på.",
  fmHeading: "Til facility managers og ejendomsdrift",
  fmItems: [
    "Se alarmer sorteret efter kritikalitet; driv drift ud fra reel brug — ikke skema",
    "Balancér opvarmning og køling med objektive data; reducér klager med rumdata",
    "Dokumentér ventilationsanlæggenes ydeevne — inkl. underlag til APV og tilsyn",
    "BR18 / BR25 og FaDi-loven — data I kan bruge til operationelle bygnings- og HVAC-krav",
  ],
  complianceHeading: "Til compliance-ansvarlige og ESG-managere",
  complianceItems: [
    "Eksporterede rapporter I kan bruge i CSRD-, ESG- og andet disclosures-arbejde",
    "EPBD 2024 og DGNB — rapporter og PDF-eksporter I kan bruge til gap-analyse, energioverblik og SOC 1.1 / 1.2 (EN 16798-1)-indsendelser",
    "Indeklimahistorik og dokumenterede data I kan trække på til APV, audits og medarbejdertrivsel",
    "Evidens til at understøtte energireduktion gennem datadreven styring",
  ],
  faqTitle: "Ofte stillede spørgsmål",
  faqContextAlt: "Kolleger, der diskuterer planer omkring et mødebord",
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
  metaTitle: "Raumklima: Sensoren und Daten | IoT Fabrikken",
  metaDescription:
    "Fernüberwachung des Raumklimas mit drahtlosen Sensoren. Beschwerden in Fakten verwandeln, Energieverschwendung senken und dem Schimmel voraus sein — mit EPBD- und DGNB-fertigen Berichten.",
  breadcrumbHome: "Startseite",
  breadcrumbModules: "Module",
  breadcrumbCurrent: "Raumklima",
  heroTitle: "Beschwerden und Energie mit Daten begegnen,",
  heroTitleAccent: "nicht mit Gefühlen.",
  heroLead:
    "Fernüberwachung des Raumklimas, die Beschwerden in Fakten verwandelt und Energie spart",
  intro: [
    "Raumklimaüberwachung liefert die Daten, um eine Frage zu beantworten, die jeder Facility Manager kennt: Ist die Beschwerde berechtigt oder eine subjektive Empfindung? Dem einen ist es zu warm, dem anderen zu kalt, und nachmittags fühlt sich die Luft „schwer“ an, aber ohne Daten zu Temperatur, Luftfeuchtigkeit und CO₂ verwalten Sie nach Eindruck, steuern die Lüftung nach Bauchgefühl und verteidigen Entscheidungen, die Sie nicht belegen können.",
  ],
  heroPrimaryCta: "Kostenlose Demo buchen",
  heroSecondaryCta: "Angebot anfordern",
  dashboardLabel: "RoomAlyzer: Raumklima",
  dashboardAlt: "Belegtes Büro mit RoomAlyzer Raumklimaüberwachung",
  challengesEyebrow: "Die Herausforderungen, die Sie kennen",
  challengesHeading: "Ohne Raumdaten verschlechtern sich sowohl Energieverbrauch als auch Komfortbeschwerden.",
  challenges: [
    {
      title: "Energieverschwendung",
      body: "Heizen und Kühlen laufen, egal ob Räume es brauchen — und ohne belastbare Daten zahlen Sie für Komfort, den niemand spürt.",
    },
    {
      title: "Die Balance",
      body: "Auf der einen Gebäudeseite ist es zu warm, auf der anderen zu kalt. Ohne objektive Messwerte findet das Facility-Team nicht die richtige Balance zwischen Heizen und Kühlen.",
    },
    {
      title: "Koordinationsprobleme",
      body: "Facility Manager, HVAC-Dienstleister und Compliance-Teams arbeiten mit unterschiedlichen Annahmen — und niemand teilt dasselbe Bild davon, was die Luft tatsächlich tut.",
    },
    {
      title: "Unvorhersehbarkeit",
      body: "Die Bedingungen wechseln über den Tag und die Jahreszeit. Ohne kontinuierliche Überwachung bleibt unvorhersehbares Raumklima ein Ratespiel statt etwas, worauf Sie reagieren können.",
    },
  ],
  capabilitiesEyebrow: "So löst RoomAlyzer das",
  capabilitiesHeading: "Alle relevanten Parameter — in einer Ansicht.",
  solutionLead:
    "RoomAlyzer Raumklima verbindet CO2, Humidity und Mini+ Sensoren mit klaren Dashboards, Alarmen, Berichten, Prognosen und Empfehlungen — für Facility-Teams, Compliance-Verantwortliche und Gebäudeeigentümer mit Compliance im Blick.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Raumklima verbindet " },
    { type: "sensor", slug: "co2", label: "CO2" },
    { type: "text", value: ", " },
    { type: "sensor", slug: "humidity", label: "Humidity" },
    { type: "text", value: " und " },
    { type: "sensor", slug: "mini-plus", label: "Mini+" },
    {
      type: "text",
      value:
        "-Sensoren mit klaren Dashboards, Alarmen, Berichten, Prognosen und Empfehlungen — für Facility-Teams, Compliance-Verantwortliche und Gebäudeeigentümer mit Compliance im Blick. ",
    },
    { type: "compare", label: "Raumklimasensoren vergleichen", useCaseId: "classroom" },
  ],
  capabilitiesContextAlt: "RoomAlyzer-Dashboard mit Raumklimadaten aus mehreren Räumen",
  features: [
    {
      id: "epbd-report",
      title: "EPBD- und DGNB-Berichte",
      body: "RoomAlyzer erstellt Compliance-Dokumentation direkt aus Live-Sensordaten — ohne Tabellen und ohne manuelle Erfassung. Für DGNB-Zertifizierung (SOC 1.1 / 1.2, EN 16798-1) führt ein Assistent Sie durch Zeitraum, Arbeitszeiten, Sensoren und Schwellen und erzeugt ein professionelles PDF mit Diagrammen, Statistiken und Grundriss-Overlays. Für Gebäude unter EPBD 2024 erstellen Sie auf Abruf einen vollständigen Compliance-Bericht mit Gap-Analyse, Compliance-Prozentsätzen je Parameter, Energieüberblick und regelbasierten Empfehlungen.",
      unit: "EPBD · DGNB",
      imageAlt: "EPBD-Compliance-Bericht in RoomAlyzer",
    },
    {
      id: "energy-optimisation",
      title: "Energieoptimierung",
      body: "Sehen Sie, wie viel Energie Ihr Gebäude verschwendet, weil Räume wärmer oder kälter gehalten werden als nötig. Das Modul vergleicht die Innentemperatur mit Winter- und Sommer-Sollwerten und quantifiziert Überhitzung und Überkühlung (in kWh, in Kosten und in CO₂), damit Sie genau sehen, wo Einsparpotenziale liegen. Ein Effizienzscore fasst jeden Standort auf einen Blick zusammen, passive Phasen werden ausgeschlossen, damit die Zahlen ehrlich bleiben, und Sie erhalten konkrete, priorisierte Empfehlungen für jedes Zeitfenster von 24 Stunden bis 90 Tagen.",
      unit: "Energie",
      imageAlt: "Energieoptimierungsanalyse in RoomAlyzer",
    },
    {
      id: "mould-risk",
      title: "Schimmelrisiko",
      body: "Das Schimmelrisiko-Modul nutzt das anerkannte VTT-Modell, um Temperatur und Luftfeuchtigkeit in einen Schimmelindex von 0 bis 6 für jeden Sensor zu überführen — von keinem Risiko über frühes mikroskopisches Wachstum bis zu sichtbarem, kritischem Risiko. Legen Sie die Materialempfindlichkeit je Standort fest, damit das Modell Ihr Gebäude widerspiegelt. Eine klare Übersicht zeigt das höchste Risiko gerade jetzt, welche Zonen wachsen und wie sich jede entwickelt, mit verständlichen Hinweisen, bevor eine kleine Lüftungsänderung zu einer teuren Reparatur wird.",
      unit: "VTT",
      imageAlt: "Schimmelrisiko-Übersicht in RoomAlyzer",
    },
    {
      id: "scenarios",
      title: "Schwellen & Szenarien",
      body: "Schwellen sind die grünen, gelben und roten Zonen, die ein gutes Raumklima für Ihr Gebäude definieren, und mit Szenarien legen Sie sie einmal fest und wenden sie global, pro Standort oder bis auf einen einzelnen Sensor an. RoomAlyzer bringt fertige Szenarien auf Basis anerkannter Standards (von EPBD / EN 16798 und GEG für Büros bis EN 15757 für Konservierung und HACCP für Lebensmittellagerung) nach Branche gruppiert, damit die richtigen Grenzen nur einen Klick entfernt sind.",
      unit: "Schwellen",
      imageAlt: "Raumklimaszenarien und Standardbibliothek in RoomAlyzer",
    },
    {
      id: "legacy-report",
      title: "Berichte & Warnungen",
      body: "Tägliche, wöchentliche und monatliche Raumklima-Zusammenfassungen landen direkt in Ihrem Posteingang. Wählen Sie genau, welche Werte enthalten sein sollen, senden Sie an beliebig viele Empfänger und testen Sie immer zuerst. Die Warnfunktion benachrichtigt Sie, sobald das Raumklima von Ihrem Soll abweicht. Stimmen Sie Alarme fein ab, wählen Sie SMS oder E-Mail und weisen Sie verschiedene Berichte verschiedenen Empfängern zu, damit steigende Luftfeuchtigkeit oder schlechte Luftqualität früh erkannt werden.",
      unit: "Berichte",
      imageAlt: "Raumklimabericht und CO₂-Diagramm in RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smarter zusammen",
  relatedModuleBody:
    "Kombinieren Sie Raumklimadaten mit Belegung aus Space-Management — lüften, wenn Räume genutzt werden, und drosseln, wenn sie leer stehen.",
  relatedModuleLink: "Space-Management entdecken",
  audiencesEyebrow: "Für wen es gedacht ist",
  audiencesHeading: "Für Compliance-Verantwortliche und ESG-Manager: Daten, die Sie für Standards und Vorschriften nutzen können.",
  audiencesLead:
    "Ob Ihre Berichterstattung EPBD, DGNB, CSRD, ESG oder lokale Bauvorschriften betrifft — RoomAlyzer liefert Compliance-Verantwortlichen und Facility-Teams dieselbe objektive Basis, auf der Sie aufbauen können.",
  fmHeading: "Für Facility Manager und Betriebsteams",
  fmItems: [
    "Alarme nach Kritikalität sortiert sehen; Betrieb nach tatsächlicher Nutzung führen — nicht nach Zeitplan",
    "Heizen und Kühlen mit objektiven Daten ausbalancieren; Beschwerden mit Raumdaten reduzieren",
    "Leistung von Lüftungsanlagen dokumentieren — inkl. VDI 6022-Nachweis",
    "GEG und lokale Bauvorschriften — Daten, die Sie für operative Gebäude- und HVAC-Anforderungen nutzen können",
  ],
  complianceHeading: "Für Compliance-Verantwortliche & ESG-Manager",
  complianceItems: [
    "Exportierte Berichte, die Sie für CSRD-, ESG- und andere Offenlegungsarbeit nutzen können",
    "EPBD 2024 und DGNB — Berichte und PDF-Exporte, die Sie für Gap-Analyse, Energieüberblicke und SOC 1.1 / 1.2 (EN 16798-1)-Einreichungen nutzen können",
    "Raumklima-Historie und dokumentierte Daten, auf die Sie bei Arbeitsstättenprüfungen, Audits und Mitarbeiterwohlbefinden zurückgreifen können",
    "Belege zur Unterstützung von Energieeinsparung durch datengestützte Steuerung",
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
  metaTitle: "Inomhusklimat: sensorer och data | IoT Fabrikken",
  metaDescription:
    "Fjärrövervakning av inomhusklimat med trådlösa sensorer. Förvandla klagomål till fakta, minska energislöseri och ligga steget före mögel — med EPBD- och DGNB-klara rapporter.",
  breadcrumbHome: "Hem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Inomhusklimat",
  heroTitle: "Hantera klagomål och energi med data,",
  heroTitleAccent: "inte känslor.",
  heroLead:
    "Fjärrövervakning av inomhusklimat som förvandlar klagomål till fakta och sparar energi",
  intro: [
    "Inomhusklimatövervakning ger er data för att besvara en fråga varje facility manager känner igen: är klagomålet verkligt, eller en känsla? Någon är för varm, någon annan för kall, och luften känns \"tung\" tidigt på eftermiddagen, men utan data om temperatur, fukt och CO₂ styr ni på intryck, justerar ventilation på magkänsla och försvarar beslut ni inte kan backa upp.",
  ],
  heroPrimaryCta: "Boka en gratis demo",
  heroSecondaryCta: "Få en offert",
  dashboardLabel: "RoomAlyzer: Inomhusklimat",
  dashboardAlt: "Bevakat kontorsutrymme med RoomAlyzer inomhusklimatövervakning",
  challengesEyebrow: "Utmaningarna ni känner igen",
  challengesHeading: "Utan rumsdata försämras både energiförbrukning och komfortklagomål.",
  challenges: [
    {
      title: "Onödigt energislöseri",
      body: "Värme och kyla körs oavsett om rummen behöver det — och utan ordentlig data betalar ni för komfort ingen känner.",
    },
    {
      title: "Balansgången",
      body: "Den ena sidan av byggnaden är för varm, den andra för kall. Utan objektiva mätningar kan facility-teamet inte hitta rätt balans mellan värme och kyla.",
    },
    {
      title: "Samordningsutmaningar",
      body: "Facility managers, HVAC-entreprenörer och compliance-team arbetar utifrån olika antaganden — och ingen delar samma bild av vad luften faktiskt gör.",
    },
    {
      title: "Oförutsägbarhet",
      body: "Förhållandena skiftar genom dagen och årstiden. Utan kontinuerlig övervakning förblir oförutsägbart inomhusklimat en gissning i stället för något ni kan agera på.",
    },
  ],
  capabilitiesEyebrow: "Så löser RoomAlyzer det",
  capabilitiesHeading: "Alla parametrar som spelar roll — i en vy.",
  solutionLead:
    "RoomAlyzer Inomhusklimat kopplar CO2, Humidity och Mini+ sensorer till tydliga dashboards, larm, rapporter, prognoser och rekommendationer — byggt för facility-team, compliance-ansvariga och fastighetsägare med compliance i åtanke.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Inomhusklimat kopplar " },
    { type: "sensor", slug: "co2", label: "CO2" },
    { type: "text", value: ", " },
    { type: "sensor", slug: "humidity", label: "Humidity" },
    { type: "text", value: " och " },
    { type: "sensor", slug: "mini-plus", label: "Mini+" },
    {
      type: "text",
      value:
        "-sensorer till tydliga dashboards, larm, rapporter, prognoser och rekommendationer — byggt för facility-team, compliance-ansvariga och fastighetsägare med compliance i åtanke. ",
    },
    { type: "compare", label: "Jämför inomhusklimatsensorer", useCaseId: "classroom" },
  ],
  capabilitiesContextAlt: "RoomAlyzer-dashboard som visar inomhusklimatdata från flera rum",
  features: [
    {
      id: "epbd-report",
      title: "EPBD- och DGNB-rapportering",
      body: "RoomAlyzer producerar compliance-dokumentation direkt från live sensordata — utan kalkylark och utan manuell insamling. För DGNB-certifiering (SOC 1.1 / 1.2, EN 16798-1) guidar en guide er genom period, arbetstid, sensorer och trösklar och genererar en professionell PDF med diagram, statistik och planritningsoverlays. För byggnader under EPBD 2024 skapar ni en fullständig compliance-rapport på begäran med gap-analys, compliance-procent per parameter, en energiöversikt och regelbaserade rekommendationer.",
      unit: "EPBD · DGNB",
      imageAlt: "EPBD-compliance-rapport genererad i RoomAlyzer",
    },
    {
      id: "energy-optimisation",
      title: "Energioptimering",
      body: "Se hur mycket energi byggnaden slösar på att hålla rum varmare eller kallare än nödvändigt. Modulen jämför inomhustemperaturen med vinter- och sommarsetpoints och sätter en tydlig siffra på överuppvärmning och överkylning (i kWh, i kostnad och i CO₂) så ni exakt ser var besparingarna finns. En effektivitetspoäng sammanfattar varje plats med en blick, passiva perioder exkluderas så siffrorna förblir ärliga, och ni får konkreta, prioriterade rekommendationer för vilket fönster som helst från 24 timmar till 90 dagar.",
      unit: "Energi",
      imageAlt: "Energioptimeringsanalys i RoomAlyzer",
    },
    {
      id: "mould-risk",
      title: "Mögelrisk",
      body: "Mögelriskmodulen använder den erkända VTT-modellen för att omvandla temperatur och fukt till ett enda mögelindex från 0 till 6 för varje sensor — från ingen risk via tidig mikroskopisk tillväxt till synlig, kritisk risk. Ställ in varje plats materialkänslighet så modellen speglar er faktiska byggnad. En tydlig översikt visar den högsta risken just nu, vilka zoner som växer och hur varje utvecklas, med klart språk och råd innan en liten ventilationsändring blir en dyr reparation.",
      unit: "VTT",
      imageAlt: "Mögelrisköversikt i RoomAlyzer",
    },
    {
      id: "scenarios",
      title: "Trösklar och scenarier",
      body: "Trösklar är de gröna, gula och röda zonerna som definierar ett bra inomhusklimat för er byggnad, och med scenarier sätter ni dem en gång och tillämpar dem globalt, per plats eller ända ner till en enskild sensor. RoomAlyzer levereras med färdiga scenarier byggda på erkända standarder (från EPBD / EN 16798 och BBR för kontor till EN 15757 för bevaring och HACCP för livsmedelsförvaring), grupperade efter sektor så rätt gränser bara är ett klick bort.",
      unit: "Trösklar",
      imageAlt: "Inomhusklimatscenarier och standardbibliotek i RoomAlyzer",
    },
    {
      id: "legacy-report",
      title: "Rapport och varningar",
      body: "Dagliga, veckovisa och månatliga inomhusklimatsammanfattningar landar direkt i inkorgen. Välj exakt vilka värden som ska ingå, skicka till så många mottagare ni vill och skicka alltid ett test först. Varningsfunktionen meddelar er i samma ögonblick som inomhusklimatet avviker från den nivå ni satt. Finjustera larm för att undvika falsklarm, välj SMS eller e-post och tilldela olika rapporter till olika mottagare, så stigande fukt eller dålig luftkvalitet upptäcks tidigt.",
      unit: "Rapporter",
      imageAlt: "Inomhusklimatrapport och CO₂-diagram i RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smartare tillsammans",
  relatedModuleBody:
    "Kombinera inomhusklimatdata med beläggning från Space management — ventilera när rummen används och dra ner när de står tomma.",
  relatedModuleLink: "Utforska space management",
  audiencesEyebrow: "Vem det är för",
  audiencesHeading: "För compliance-ansvariga och ESG-chefer — data ni kan använda över standarder och regler.",
  audiencesLead:
    "Oavsett om er rapportering berör EPBD, DGNB, CSRD, ESG eller lokala byggregler ger RoomAlyzer compliance-ansvariga och facility-team samma objektiva utgångspunkt att bygga vidare på.",
  fmHeading: "För facility managers och fastighetsdrift",
  fmItems: [
    "Se larm sorterade efter kritikalitet; driv driften utifrån verklig användning — inte schema",
    "Balansera värme och kyla med objektiva data; minska klagomål med rumsdata",
    "Dokumentera ventilationssystemens prestanda — inkl. underlag till OVK och arbetsmiljökrav",
    "BBR och lokala byggregler — data ni kan använda för operativa byggnads- och HVAC-krav",
  ],
  complianceHeading: "För compliance-ansvariga och ESG-chefer",
  complianceItems: [
    "Exporterade rapporter ni kan använda i CSRD-, ESG- och annat disclosures-arbete",
    "EPBD 2024 och DGNB — rapporter och PDF-exporter ni kan använda för gap-analys, energiöversikter och SOC 1.1 / 1.2 (EN 16798-1)-inlämningar",
    "Inomhusklimathistorik och dokumenterad data ni kan luta er mot vid arbetsmiljöinspektioner, revisioner och medarbetarnas välbefinnande",
    "Underlag för att stödja energireduktion genom datadriven styrning",
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
