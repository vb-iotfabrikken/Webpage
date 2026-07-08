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
      a: "No. Most RoomAlyzer sensors run on NB-IoT and connect directly over the mobile network – no building Wi-Fi and no gateways. Sensors that use SecureDataShot connect through a Cloud Connector with its own SIM card, so you never depend on your Wi-Fi.",
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
    "Book a demo. We'll show the platform, walk through your case and give you a price estimate.",
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
      body: "Opvarmning og køling kører, uanset om rummene har brug for det – og uden ordentlige data betaler du for en komfort, ingen mærker.",
    },
    {
      title: "Balancen",
      body: "Den ene side af bygningen er for varm, den anden for kold. Uden objektive målinger kan facility-teamet ikke finde den rette balance mellem opvarmning og køling.",
    },
    {
      title: "Koordineringsudfordringer",
      body: "Facility managers, HVAC-entreprenører og compliance-teams arbejder ud fra hver deres antagelser – og ingen har det samme billede af, hvad luften faktisk gør.",
    },
    {
      title: "Uforudsigelighed",
      body: "Forholdene skifter gennem dagen og året. Uden løbende overvågning forbliver et uforudsigeligt indeklima et gæt i stedet for noget, du kan handle på.",
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
      body: "Se, hvor meget energi bygningen spilder på at holde rum varmere eller koldere end nødvendigt. Modulet sammenligner indendørstemperaturen med vinter- og sommersætpunkter og sætter et klart tal på overopvarmning og overkøling – i kWh, i kroner og i CO₂ – så du præcist kan se, hvor besparelserne gemmer sig. En effektivitetsscore opsummerer hvert sted med ét blik, passive perioder udelades, så tallene er reelle, og du får konkrete, prioriterede anbefalinger for ethvert interval fra 24 timer til 90 dage.",
      unit: "Energi",
      imageAlt: "Energioptimeringsanalyse i RoomAlyzer",
    },
    {
      id: "mould-risk",
      title: "Skimmelrisiko",
      body: "Skimmelrisiko-modulet bruger den anerkendte VTT-model til at omsætte temperatur og fugt til ét enkelt skimmelindeks fra 0 til 6 for hver sensor – fra ingen risiko over tidlig mikroskopisk vækst til synlig, kritisk risiko. Indstil hver lokations materialefølsomhed, så modellen afspejler din faktiske bygning. Et klart overblik viser den højeste risiko lige nu, hvilke zoner der vokser, og hvordan hver enkelt udvikler sig – i klart sprog og med råd, før en lille ventilationsændring bliver en dyr reparation.",
      unit: "VTT",
      imageAlt: "Skimmelrisiko-overblik i RoomAlyzer",
    },
    {
      id: "scenarios",
      title: "Tærskler og scenarier",
      body: "Tærskler er de grønne, gule og røde zoner, der definerer et godt indeklima for din bygning – og med scenarier sætter du dem én gang og anvender dem globalt, pr. lokation eller helt ned til en enkelt sensor. RoomAlyzer leveres med færdige scenarier bygget på anerkendte standarder (fra EPBD / EN 16798 og BR18 for kontorer til EN 15757 for bevaring og HACCP for fødevareopbevaring), grupperet efter sektor, så de rette grænser kun er ét klik væk.",
      unit: "Tærskler",
      imageAlt: "Indeklimascenarier og standardbibliotek i RoomAlyzer",
    },
    {
      id: "legacy-report",
      title: "Rapport og advarsler",
      body: "Daglige, ugentlige og månedlige indeklimaoversigter lander direkte i indbakken. Vælg præcis hvilke værdier der skal med, send til så mange modtagere, du vil, og send altid en test først. Advarselsfunktionen giver besked i det øjeblik, indeklimaet afviger fra det niveau, du har sat. Finjustér alarmerne for at undgå falske udslag, vælg SMS eller e-mail, og tildel forskellige rapporter til forskellige modtagere, så stigende fugt eller dårlig luftkvalitet opdages tidligt.",
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
      a: "Nej. De fleste RoomAlyzer-sensorer kører på NB-IoT og forbinder direkte via mobilnettet – uden bygnings-Wi-Fi og uden gateways. Sensorer, der bruger SecureDataShot, forbinder via en Cloud Connector med eget simkort, så du aldrig er afhængig af dit Wi-Fi.",
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
      a: "Prisen afhænger af antallet af sensorer og bygningens størrelse. Book en demo, så giver vi et konkret estimat ud fra din case.",
    },
  ],
  ctaTitle: "Vil du selv se det?",
  ctaSubtitle:
    "Book en demo. Vi viser platformen, gennemgår din case og giver dig et prisestimat.",
  ctaMicrocopy: "Sensorer klar på minutter · års batterilevetid",
};

const de: IndoorClimateStrings = {
  metaTitle: "Raumklima: Sensoren und Daten | IoT Fabrikken",
  metaDescription:
    "Drahtloses Raumklima-Fernmonitoring: Verwandeln Sie Beschwerden in Fakten, senken Sie die Energieverschwendung und beugen Sie Schimmelbildung rechtzeitig vor – unterstützt durch EPBD- und DGNB-konforme Berichte.",
  breadcrumbHome: "Startseite",
  breadcrumbModules: "Module",
  breadcrumbCurrent: "Raumklima",
  heroTitle: "Beschwerden und Energie mit Daten begegnen,",
  heroTitleAccent: "nicht mit Gefühlen.",
  heroLead:
    "Raumklima-Fernmonitoring, das Beschwerden mit harten Fakten entkräftet und Ihre Energiekosten spürbar senkt.",
  intro: [
    "Raumklimaüberwachung liefert die Daten, um eine Frage zu beantworten, die jeder Facility Manager kennt: Ist die Beschwerde berechtigt oder eine subjektive Empfindung? Dem einen ist es zu warm, dem anderen zu kalt und nachmittags fühlt sich die Luft „schwer“ an. Ohne konkrete Daten zu Temperatur, Luftfeuchtigkeit und CO2 steuern Sie die Lüftung jedoch im Blindflug und müssen am Ende Entscheidungen verteidigen, die Sie nicht belegen können.",
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
      body: "Heizung und Kühlung laufen oft ununterbrochen, völlig unabhängig vom tatsächlichen Bedarf. Ohne belastbare Daten zahlen Sie für teure Energie, die niemandem nützt.",
    },
    {
      title: "Die Balance",
      body: "Auf der einen Seite des Gebäudes ist es zu warm, auf der anderen zu kalt. Ohne objektive Messwerte findet das Facility-Team nicht die richtige Balance zwischen Heizen und Kühlen.",
    },
    {
      title: "Koordinationsprobleme",
      body: "Facility Manager, HLK-Dienstleister und Compliance-Teams arbeiten oft mit völlig unterschiedlichen Annahmen – ohne einen verlässlichen Gesamtüberblick über den tatsächlichen Zustand des Raumklimas.",
    },
    {
      title: "Unvorhersehbarkeit",
      body: "Das Raumklima schwankt je nach Tages- und Jahreszeit. Ohne kontinuierliches Monitoring agieren Sie im Dauerblindflug. Mit Daten verwandeln Sie Unsicherheit in planbares Handeln.",
    },
  ],
  capabilitiesEyebrow: "So löst RoomAlyzer das",
  capabilitiesHeading: "Alle relevanten Parameter — in einer Ansicht.",
  solutionLead:
    "RoomAlyzer Raumklima verbindet CO2, Humidity und Mini+en mit klaren Dashboards, Alarmen, Berichten, Prognosen und Empfehlungen — für Facility-Teams, Compliance-Verantwortliche und Gebäudeeigentümer mit Compliance im Blick.",
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
      body: "Sehen Sie genau, wie viel Energie Ihr Gebäude verschwendet, weil Räume wärmer oder kälter als nötig gehalten werden. Das Modul vergleicht die Innentemperatur mit den saisonalen Sollwerten und quantifiziert Überhitzung und Überkühlung (in kWh, in Kosten und in CO₂), damit Sie genau sehen, wo Einsparpotenziale liegen. Ein Effizienzscore fasst jeden Standort auf einen Blick zusammen. Passive Phasen werden herausgefiltert, um absolut verlässliche Daten zu garantieren. Sie erhalten konkrete, priorisierte Empfehlungen für jedes Zeitfenster von 24 Stunden bis zu 90 Tagen.",
      unit: "Energie",
      imageAlt: "Energieoptimierungsanalyse in RoomAlyzer",
    },
    {
      id: "mould-risk",
      title: "Schimmelrisiko",
      body: "Das Schimmelrisiko-Modul nutzt das anerkannte VTT-Modell, um Temperatur und Luftfeuchtigkeit für jeden Sensor in einen präzisen Schimmelindex von 0 bis 6 zu übersetzen – von keinem Risiko über frühes mikroskopisches Wachstum bis hin zum sichtbaren, kritischen Befall. Indem Sie die Materialempfindlichkeit je Standort festlegen, passt sich das Modell exakt den baulichen Gegebenheiten Ihres Gebäudes an. Eine klare Übersicht zeigt Ihnen das aktuelle Höchstrisiko, in welchen Zonen das Risiko steigt und wie sich die Lage entwickelt. So erhalten Sie rechtzeitig verständliche Hinweise, bevor ein einfaches Lüftungsproblem zu einer teuren Sanierung wird.",
      unit: "VTT",
      imageAlt: "Schimmelrisiko-Übersicht in RoomAlyzer",
    },
    {
      id: "scenarios",
      title: "Schwellen & Szenarien",
      body: "Mit Szenarien steuern Sie Ihre Grenzwerte flexibel: Legen Sie grüne, gelbe und rote Zonen einmal fest und wenden Sie diese global, standortbasiert oder auf Sensorebene an. RoomAlyzer enthält schlüsselfertige Profile nach anerkannten Normen (u.a. EPBD/EN 16798 & GEG für Büros, EN 15757 für Archive/Museen, HACCP für Lebensmittel). Nach Branchen sortiert, sind die richtigen Compliance-Grenzen sofort einsatzbereit.",
      unit: "Schwellen",
      imageAlt: "Raumklimaszenarien und Standardbibliothek in RoomAlyzer",
    },
    {
      id: "legacy-report",
      title: "Berichte & Warnungen",
      body: "Sie erhalten tägliche, wöchentliche oder monatliche Raumklima-Zusammenfassungen in Ihrem Posteingang. Bestimmen Sie flexibel, welche Kennzahlen enthalten sein sollen, versenden Sie die Berichte an beliebig viele Empfänger und nutzen Sie die Vorschau-Funktion für einen schnellen Vorab-Test. Die integrierte Warnfunktion benachrichtigt Sie per SMS oder E-Mail, sobald das Raumklima von Ihren definierten Sollwerten abweicht. Durch die präzise Feinabstimmung der Alarme und die zielgerichtete Zuweisung an verschiedene Empfänger stellen Sie sicher, dass steigende Luftfeuchtigkeit oder sinkende Luftqualität sofort erkannt werden.",
      unit: "Berichte",
      imageAlt: "Raumklimabericht und CO₂-Diagramm in RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smarter zusammen",
  relatedModuleBody:
    "Kombinieren Sie Raumklimadaten mit Belegung aus Space-Management — lüften, wenn Räume genutzt werden und drosseln, wenn sie leer stehen.",
  relatedModuleLink: "Space-Management entdecken",
  audiencesEyebrow: "Für wen es gedacht ist",
  audiencesHeading: "Daten für die sichere Einhaltung aller relevanten Standards, Richtlinien und gesetzlichen Vorschriften",
  audiencesLead:
    "Ob Ihre Berichterstattung auf EPBD, DGNB, CSRD, ESG oder lokalen Bauvorschriften basiert – RoomAlyzer liefert Compliance-Verantwortlichen und Facility-Teams ein und dieselbe objektive Datenbasis, auf die Sie sich bei jedem Audit absolut verlassen können.",
  fmHeading: "Für Facility Manager und Betriebsteams",
  fmItems: [
    "Alarme nach Kritikalität filtern: Behalten Sie den Überblick und reagieren Sie sofort auf die wichtigsten Meldungen.",
    "Heizen und Kühlen mit objektiven Daten ausbalancieren; Beschwerden mit Raumdaten reduzieren",
    "Leistung von Lüftungsanlagen dokumentieren — inkl. VDI 6022-Nachweis",
    "GEG und lokale Bauvorschriften – Daten, die Sie für operative Gebäude- und HLK-Anforderungen nutzen können.",
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
      a: "Nein. Die meisten RoomAlyzer-Sensoren nutzen NB-IoT und verbinden sich direkt über das Mobilfunknetz – ohne Gebäude-WLAN und ohne Gateways. Sensoren mit SecureDataShot verbinden sich über einen Cloud Connector mit eigener SIM-Karte, sodass Sie nie von Ihrem WLAN abhängig sind.",
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
      a: "Der Preis hängt von der Anzahl der Sensoren und der Größe des Gebäudes ab. Buchen Sie eine Demo und wir geben Ihnen eine konkrete Schätzung auf Basis Ihres Falls.",
    },
  ],
  ctaTitle: "Möchten Sie es selbst sehen?",
  ctaSubtitle:
    "Buchen Sie eine Demo. Wir zeigen die Plattform, gehen Ihren Fall durch und geben Ihnen eine Preisschätzung.",
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
      body: "Värme och kyla körs oavsett om rummen behöver det – och utan ordentlig data betalar du för en komfort ingen känner.",
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
      body: "Förhållandena skiftar genom dagen och året. Utan kontinuerlig övervakning förblir ett oförutsägbart inomhusklimat en gissning i stället för något du kan agera på.",
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
      body: "Se hur mycket energi byggnaden slösar på att hålla rum varmare eller kallare än nödvändigt. Modulen jämför inomhustemperaturen med vinter- och sommarbörvärden och sätter en tydlig siffra på överuppvärmning och överkylning – i kWh, i kostnad och i CO₂ – så att du exakt ser var besparingarna finns. En effektivitetspoäng sammanfattar varje plats med en blick, passiva perioder exkluderas så att siffrorna är rättvisande, och du får konkreta, prioriterade rekommendationer för valfritt intervall från 24 timmar till 90 dagar.",
      unit: "Energi",
      imageAlt: "Energioptimeringsanalys i RoomAlyzer",
    },
    {
      id: "mould-risk",
      title: "Mögelrisk",
      body: "Mögelriskmodulen använder den erkända VTT-modellen för att omvandla temperatur och fukt till ett enda mögelindex från 0 till 6 för varje sensor – från ingen risk via tidig mikroskopisk tillväxt till synlig, kritisk risk. Ställ in varje plats materialkänslighet så att modellen speglar din faktiska byggnad. En tydlig översikt visar den högsta risken just nu, vilka zoner som växer och hur var och en utvecklas – med klart språk och råd innan en liten ventilationsändring blir en dyr reparation.",
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
      body: "Dagliga, veckovisa och månatliga inomhusklimatsammanfattningar landar direkt i inkorgen. Välj exakt vilka värden som ska ingå, skicka till så många mottagare du vill och skicka alltid ett test först. Varningsfunktionen meddelar dig i samma ögonblick som inomhusklimatet avviker från den nivå du satt. Finjustera larmen för att undvika falsklarm, välj SMS eller e-post och tilldela olika rapporter till olika mottagare, så att stigande fukt eller dålig luftkvalitet upptäcks tidigt.",
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
      a: "Nej. De flesta RoomAlyzer-sensorer kör på NB-IoT och ansluter direkt via mobilnätet – utan byggnads-wifi och utan gateways. Sensorer som använder SecureDataShot ansluter via en Cloud Connector med eget SIM-kort, så du aldrig är beroende av ditt wifi.",
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
    "Boka en demo. Vi visar plattformen, går igenom ert fall och ger dig en prisuppskattning.",
  ctaMicrocopy: "Sensorer live på minuter · års batteritid",
};

const dictionaries: Partial<Record<Lang, IndoorClimateStrings>> = { en, da, de, sv };

export function getIndoorClimate(lang: Lang): IndoorClimateStrings {
  return dictionaries[lang] ?? dictionaries[defaultLang]!;
}
