import type { Lang } from "../lang";
import { defaultLang } from "../lang";
import type { ModulePageStrings } from "./modulePageTypes";

/** Localized content for the preservation module landing page. */
export type PreservationStrings = ModulePageStrings;

const en: PreservationStrings = {
  metaTitle: "Preservation: heritage climate monitoring | IoT Fabrikken",
  metaDescription:
    "Wireless sensors monitor temperature and humidity around irreplaceable collections — with the precision conservators require and documentation for EN 15757.",
  breadcrumbHome: "Home",
  breadcrumbModules: "Modules",
  breadcrumbCurrent: "Preservation",
  heroTitle: "Flawless preservation",
  heroTitleAccent: "meets energy optimisation",
  heroLead:
    "Our smart module secures the ideal climate while actively reducing unnecessary energy consumption",
  intro: [],
  heroPrimaryCta: "Book a free demo",
  heroSecondaryCta: "Get an offer",
  dashboardLabel: "RoomAlyzer: Preservation",
  dashboardAlt: "RoomAlyzer dashboard showing heritage climate data across rooms and display cases",
  heroGallery: {
    images: [
      {
        alt: "RoomAlyzer sensor monitoring climate in an archive stack with bound volumes and storage boxes",
        caption: "Monitoring in archive stacks, storage rooms, and bound volumes",
      },
      {
        alt: "Open manuscript in a display case with a RoomAlyzer climate sensor",
        caption: "Object-level monitoring in vitrines and display cases",
      },
    ],
    intro: {
      heading: "Object-level insight for conservators",
      paragraphs: [
        "Most climate hardware is built for HVAC teams — not for conservators, archivists, and church wardens. You balance fragile collections against energy mandates without object-level proof, while building-wide sensors miss the vitrine, the nave, and the loan you never get to inspect.",
      ],
    },
  },
  challengesEyebrow: "The challenges you know",
  challengesHeading: "When you cannot prove the climate, every object is at risk.",
  challenges: [
    {
      title: "Invisible gradual damage",
      body: "Unfavourable humidity and temperature harm irreplaceable objects long before any visible sign appears — by the time cracking, warping or mould shows, the damage is already done.",
    },
    {
      title: "No documentation of conditions",
      body: "You cannot prove the climate your collection has been kept in (for insurers, funders, or conservation requirements) when readings live in notebooks or not at all.",
    },
    {
      title: "Preservation versus energy bills",
      body: "Heating a historic building to protect its contents is expensive, and without data you cannot find the balance between safeguarding collections and controlling running costs.",
    },
  ],
  capabilitiesEyebrow: "How RoomAlyzer solves it",
  capabilitiesHeading: "The specific analysis tools you need. The standards you trust.",
  solutionLead:
    "Stop guessing and start optimising. RoomAlyzer Preservation provides a complete suite of specialised analysis tools and turns wireless sensor readings into zoned dashboards, drift alerts and audit-ready reports, so you can balance flawless preservation with energy efficiency.",
  solutionLeadWithSensorLinks: [
    {
      type: "text",
      value:
        "Stop guessing and start optimising. RoomAlyzer Preservation provides specialised analysis tools and turns wireless ",
    },
    { type: "sensor", slug: "humidity", label: "Humidity" },
    { type: "text", value: " and " },
    { type: "sensor", slug: "mini-plus", label: "Mini+" },
    { type: "text", value: " sensor readings (with " },
    { type: "sensor", slug: "outdoor", label: "Outdoor" },
    {
      type: "text",
      value:
        " for façades) into zoned dashboards, drift alerts and audit-ready reports, so you can balance flawless preservation with energy efficiency. ",
    },
    { type: "compare", label: "Compare heritage sensors", useCaseId: "heritage" },
  ],
  solutionProofPoints: [
    { value: "±0.1 °C · ±1 % RH", label: "Sensor precision" },
    { value: "7–10 yr", label: "Battery life" },
  ],
  capabilitiesContextAlt: "Specialist maintaining a historic pipe organ",
  features: [
    {
      id: "mould-risk",
      title: "Mould risk (VTT)",
      body: "Advanced predictive modelling to identify and prevent mould growth before it threatens your assets.",
      unit: "Predictive",
      imageAlt: "Mould risk (VTT) analysis in RoomAlyzer",
    },
    {
      id: "bizot-green",
      title: "Bizot Green",
      body: "Compliance scoring against the Bizot Green protocol — temperature, humidity and fluctuation bands in one report.",
      unit: "Compliance",
      imageAlt: "Bizot Green compliance analysis in RoomAlyzer",
    },
    {
      id: "ashrae",
      title: "ASHRAE",
      body: "Climate class analysis with achieved class scores and a full-year view for audit-ready documentation.",
      unit: "Compliance",
      imageAlt: "ASHRAE climate class analysis in RoomAlyzer",
    },
    {
      id: "preservation-index",
      title: "Preservation Index",
      body: "A clear, actionable rating of how well your current environment is protecting your valuables.",
      unit: "PI / TWPI",
      imageAlt: "Preservation Index rating in RoomAlyzer",
    },
    {
      id: "fluctuations",
      title: "Fluctuations tracking",
      body: "Monitor temperature and humidity shifts against EN 15757, with exportable logs ready for audits, insurers and grant reviews.",
      bodyWithSensorLinks: [
        { type: "text", value: "The " },
        { type: "sensor", slug: "humidity", label: "Humidity" },
        { type: "text", value: " and " },
        { type: "sensor", slug: "mini-plus", label: "Mini+" },
        {
          type: "text",
          value:
            " sensors monitor temperature and humidity shifts against EN 15757, with exportable logs ready for audits, insurers and grant reviews.",
        },
      ],
      unit: "EN 15757",
      imageAlt: "EN 15757 fluctuations tracking in RoomAlyzer",
    },
    {
      id: "heat-ventilation",
      title: "Preservation heat & ventilation analysis",
      body: "Deep insights to help you stabilise your climate while actively reducing unnecessary energy consumption.",
      unit: "Energy",
      imageAlt: "Preservation heat and ventilation analysis in RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smarter together",
  relatedModuleBody:
    "Pair preservation monitoring with live indoor-climate data for occupied spaces.",
  relatedModuleLink: "Explore indoor climate",
  audiencesEyebrow: "Who it is for",
  audiencesHeading: "For conservators and facility teams, with data everyone can trust.",
  audiencesLead:
    "The same objective climate baseline serves the conservator protecting the collection and the facility manager running the building.",
  primaryAudienceHeading: "For conservators and specialists",
  primaryAudienceItems: [
    "Monitor RH and temperature at collection level",
    "Document conditions for EN 15757, insurers and funders",
    "Trust high-precision readings conservators require",
    "See climate history for every display case and storage zone",
  ],
  secondaryAudienceHeading: "For facility managers",
  secondaryAudienceItems: [
    "Balance preservation with heating and energy costs",
    "Get early warnings when HVAC drifts off setpoint",
    "Share the same data with conservation teams",
    "Deploy without WiFi across thick-walled historic buildings",
  ],
  faqTitle: "Frequently asked questions",
  faqContextAlt: "Colleagues discussing plans around a meeting table",
  faqItems: [
    {
      q: "How long is the battery life?",
      a: "Our preservation sensors typically run 7–10 years on a single battery, depending on reporting frequency. The platform warns you well in advance when a battery needs replacing.",
    },
    {
      q: "How precise are the sensors, and do they need calibration?",
      a: "RoomAlyzer Air humidity and temperature sensors deliver ±0.1 °C and ±1 % RH — the tolerances conservators expect. Each sensor is factory-calibrated; the platform flags any unit that drifts outside spec.",
    },
    {
      q: "Can this work in historic buildings without WiFi?",
      a: "Yes. NB-IoT sensors connect directly over the mobile network and reach deep into naves, archive stacks and museum floors through thick masonry – no building Wi-Fi required. Where SecureDataShot is used, a single Cloud Connector with a SIM card links the sensors to the platform.",
    },
    {
      q: "Does RoomAlyzer support EN 15757 documentation?",
      a: "Yes. Continuous climate logs and exportable reports give you the documented history EN 15757 expects for organic hygroscopic materials — ready for audits, insurers and grant reviews.",
    },
    {
      q: "What does it cost?",
      a: "The price depends on the number of sensors and zones. Book a demo and we will give a concrete estimate based on your buildings and collections.",
    },
  ],
  ctaTitle: "Want to see it for yourself?",
  ctaSubtitle:
    "Book a demo. We will show the platform, walk through your case and give you a price estimate.",
  ctaMicrocopy: "Installs in minutes · precision conservators trust",
};

const da: PreservationStrings = {
  metaTitle: "Bevaring: klimaovervågning af kulturarv | IoT Fabrikken",
  metaDescription:
    "Trådløse sensorer overvåger temperatur og luftfugtighed omkring uerstattelige samlinger, med den præcision, konservatorer kræver, og dokumentation til EN 15757.",
  breadcrumbHome: "Hjem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Bevaring",
  heroTitle: "Fejlfri bevaring",
  heroTitleAccent: "møder energioptimering",
  heroLead:
    "Vores smarte modul sikrer det ideelle klima, mens det aktivt reducerer unødvendigt energiforbrug",
  intro: [],
  heroPrimaryCta: "Book en gratis demo",
  heroSecondaryCta: "Få et tilbud",
  dashboardLabel: "RoomAlyzer: Bevaring",
  dashboardAlt: "RoomAlyzer-dashboard, der viser kulturarvsklimadata på tværs af rum og montrer",
  heroGallery: {
    images: [
      {
        alt: "RoomAlyzer-sensor, der overvåger klima i et arkivmagasin med bind og opbevaringskasser",
        caption: "Overvågning i arkivmagasiner, depoter og bind",
      },
      {
        alt: "Åben håndskrift i montre med RoomAlyzer-klimasensor",
        caption: "Objektniveau-overvågning i montrer og vitriner",
      },
    ],
    intro: {
      heading: "Indsigt på objektniveau for konservatorer",
      paragraphs: [
        "Det meste klimahardware er bygget til HVAC-teams – ikke til konservatorer, arkivarer og kirkeværger. Du balancerer skrøbelige samlinger mod energikrav uden data på det enkelte objekt, mens bygningsdækkende sensorer overser montren, kirkeskibet og udlånet, du aldrig når at inspicere.",
      ],
    },
  },
  challengesEyebrow: "Udfordringerne, I kender",
  challengesHeading: "Når du ikke kan dokumentere klimaet, er hver eneste genstand i risiko.",
  challenges: [
    {
      title: "Usynlig, gradvis skade",
      body: "Ugunstig luftfugtighed og temperatur skader uerstattelige genstande længe før, der viser sig et synligt tegn — når revner, skævhed eller skimmel først ses, er skaden allerede sket.",
    },
    {
      title: "Ingen dokumentation af forholdene",
      body: "Du kan ikke bevise, hvilket klima jeres samling har været opbevaret i (over for forsikringsselskaber, fonde eller bevaringskrav), når målingerne lever i notesbøger eller slet ikke findes.",
    },
    {
      title: "Bevaring kontra energiregninger",
      body: "At opvarme en historisk bygning for at beskytte dens indhold er dyrt, og uden data kan du ikke finde balancen mellem at beskytte samlingerne og styre driftsomkostningerne.",
    },
  ],
  capabilitiesEyebrow: "Sådan løser RoomAlyzer det",
  capabilitiesHeading: "De helt rigtige analyseværktøjer. De standarder, du stoler på.",
  solutionLead:
    "Stop gætteriet, og begynd at optimere. RoomAlyzer Bevaring giver en komplet pakke af specialiserede analyseværktøjer og omsætter trådløse sensordata til zonede dashboards, driftsalarmer og revisionsklare rapporter – så du kan balancere fejlfri bevaring med energieffektivitet.",
  solutionLeadWithSensorLinks: [
    {
      type: "text",
      value:
        "Stop gætteriet og begynd at optimere. RoomAlyzer Bevaring giver specialiserede analyseværktøjer og omsætter trådløse ",
    },
    { type: "sensor", slug: "humidity", label: "Humidity" },
    { type: "text", value: " og " },
    { type: "sensor", slug: "mini-plus", label: "Mini+" },
    { type: "text", value: "-sensordata (med " },
    { type: "sensor", slug: "outdoor", label: "Outdoor" },
    {
      type: "text",
      value:
        " til facader) til zonede dashboards, driftalarmer og revisionsklare rapporter — så I kan balancere fejlfri bevaring med energieffektivitet. ",
    },
    { type: "compare", label: "Sammenlign kulturarvssensorer", useCaseId: "heritage" },
  ],
  solutionProofPoints: [
    { value: "±0,1 °C · ±1 % r.f.", label: "Sensorpræcision" },
    { value: "7–10 år", label: "Batterilevetid" },
  ],
  capabilitiesContextAlt: "Specialist vedligeholder et historisk orgel",
  features: [
    {
      id: "mould-risk",
      title: "Skimmelrisiko (VTT)",
      body: "Avanceret prædiktiv modellering, der identificerer og forebygger skimmelvækst, før den truer jeres værdier.",
      unit: "Prædiktiv",
      imageAlt: "Skimmelrisiko (VTT)-analyse i RoomAlyzer",
    },
    {
      id: "bizot-green",
      title: "Bizot Green",
      body: "Compliance-scoring mod Bizot Green-protokollen — temperatur, luftfugtighed og svingningsbånd i én rapport.",
      unit: "Compliance",
      imageAlt: "Bizot Green-complianceanalyse i RoomAlyzer",
    },
    {
      id: "ashrae",
      title: "ASHRAE",
      body: "Klimaklasseanalyse med opnåede klassescores og helårsvisning til revisionsklar dokumentation.",
      unit: "Compliance",
      imageAlt: "ASHRAE-klimaklasseanalyse i RoomAlyzer",
    },
    {
      id: "preservation-index",
      title: "Preservation Index",
      body: "En klar, handlingsorienteret vurdering af, hvor godt jeres nuværende miljø beskytter jeres værdier.",
      unit: "PI / TWPI",
      imageAlt: "Preservation Index-vurdering i RoomAlyzer",
    },
    {
      id: "fluctuations",
      title: "Svingningssporing",
      body: "Overvåg temperatur- og luftfugtighedsskift mod EN 15757 med eksportérbare logs klar til revision, forsikring og fondsansøgninger.",
      bodyWithSensorLinks: [
        { type: "text", value: "Sensoren " },
        { type: "sensor", slug: "humidity", label: "Humidity" },
        { type: "text", value: " og " },
        { type: "sensor", slug: "mini-plus", label: "Mini+" },
        {
          type: "text",
          value:
            " overvåger temperatur- og luftfugtighedsskift mod EN 15757 med eksportérbare logs klar til revision, forsikring og fondsansøgninger.",
        },
      ],
      unit: "EN 15757",
      imageAlt: "EN 15757-svingningssporing i RoomAlyzer",
    },
    {
      id: "heat-ventilation",
      title: "Bevaringsvarme- og ventilationsanalyse",
      body: "Dyb indsigt, der hjælper jer med at stabilisere klimaet, mens I aktivt reducerer unødvendigt energiforbrug.",
      unit: "Energi",
      imageAlt: "Bevaringsvarme- og ventilationsanalyse i RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smartere sammen",
  relatedModuleBody:
    "Kombinér bevaringsovervågning med live indeklimadata for befolkede rum.",
  relatedModuleLink: "Udforsk indeklima",
  audiencesEyebrow: "Hvem det er til",
  audiencesHeading: "Til konservatorer og facility-teams, med data, alle kan stole på.",
  audiencesLead:
    "Det samme objektive klimagrundlag kan bruges af både konservatoren, der beskytter samlingen, og facility manageren, der driver bygningen.",
  primaryAudienceHeading: "Til konservatorer og specialister",
  primaryAudienceItems: [
    "Overvåg r.f. og temperatur på samlingsniveau",
    "Dokumentér forhold til EN 15757, forsikring og fonde",
    "Stol på højpræcise målinger, konservatorer kræver",
    "Se klimahistorik for hver montre og hvert magasin",
  ],
  secondaryAudienceHeading: "Til facility managers",
  secondaryAudienceItems: [
    "Find balancen mellem bevaring og opvarmnings- og energiomkostninger",
    "Få tidlige advarsler, når HVAC glider væk fra setpoint",
    "Del de samme data med bevaringsteams",
    "Udrul uden WiFi i tykvæggede historiske bygninger",
  ],
  faqTitle: "Ofte stillede spørgsmål",
  faqContextAlt: "Kolleger, der diskuterer planer omkring et mødebord",
  faqItems: [
    {
      q: "Hvor lang er batterilevetiden?",
      a: "Vores bevaringssensorer kører typisk 7–10 år på ét batteri, afhængigt af rapporteringsfrekvens. Platformen advarer dig i god tid, når et batteri skal skiftes.",
    },
    {
      q: "Hvor præcise er sensorerne, og skal de kalibreres?",
      a: "RoomAlyzer Air-fugt- og temperatursensorer leverer ±0,1 °C og ±1 % r.f. – de tolerancer, konservatorer forventer. Hver sensor er fabrikskalibreret, og platformen markerer de enheder, der glider uden for spec.",
    },
    {
      q: "Kan det fungere i historiske bygninger uden WiFi?",
      a: "Ja. NB-IoT-sensorerne forbinder direkte via mobilnettet og når helt ind i kirkeskibe, magasiner og museumsetager gennem tykt murværk – uden bygnings-Wi-Fi. Hvor SecureDataShot bruges, kobler en enkelt Cloud Connector med simkort sensorerne på platformen.",
    },
    {
      q: "Understøtter RoomAlyzer EN 15757-dokumentation?",
      a: "Ja. Løbende klimalogs og eksportérbare rapporter giver den dokumenterede historik, EN 15757 forventer for organiske hygroskopiske materialer — klar til audits, forsikring og ansøgninger.",
    },
    {
      q: "Hvad koster det?",
      a: "Prisen afhænger af antallet af sensorer og zoner. Book en demo, så giver vi et konkret estimat ud fra jeres bygninger og samlinger.",
    },
  ],
  ctaTitle: "Vil du selv se det?",
  ctaSubtitle:
    "Book en demo. Vi viser platformen, gennemgår jeres case og giver dig et prisestimat.",
  ctaMicrocopy: "Klar på minutter · præcision konservatorer stoler på",
};

const de: PreservationStrings = {
  metaTitle: "Preservation: Klimaüberwachung für Kulturgut | IoT Fabrikken",
  metaDescription:
    "Drahtlose Sensoren überwachen Temperatur und Luftfeuchtigkeit rund um unersetzliche Sammlungen, mit der Präzision, die Restauratoren verlangen und Dokumentation für EN 15757.",
  breadcrumbHome: "Startseite",
  breadcrumbModules: "Module",
  breadcrumbCurrent: "Preservation",
  heroTitle: "Makellose Preservation",
  heroTitleAccent: "trifft auf Energieoptimierung",
  heroLead:
    "Unser intelligentes Modul sichert das ideale Klima und reduziert gleichzeitig unnötigen Energieverbrauch",
  intro: [],
  heroPrimaryCta: "Kostenlose Demo buchen",
  heroSecondaryCta: "Angebot anfordern",
  dashboardLabel: "RoomAlyzer: Preservation",
  dashboardAlt: "RoomAlyzer-Dashboard mit Klimadaten für Kulturgut in Räumen und Vitrinen",
  heroGallery: {
    images: [
      {
        alt: "RoomAlyzer-Sensor überwacht das Klima in einem Archivmagazin mit Bänden und Lagerkisten",
        caption: "Überwachung in Archivmagazinen, Depots und Bänden",
      },
      {
        alt: "Offenes Manuskript in einer Vitrine mit RoomAlyzer-Klimasensor",
        caption: "Objektbezogene Überwachung in Vitrinen und Schaukästen",
      },
    ],
    intro: {
      heading: "Einblicke auf Objektebene für Restauratoren",
      paragraphs: [
        "Die meiste Klimahardware wurde für HLK-Techniker entwickelt – nicht für Restauratoren, Archivare oder Kirchenvorstände. Sie müssen den Schutz empfindlicher Sammlungen mühsam mit strengen Energievorgaben vereinbaren, ohne auf präzise Objektdaten zugreifen zu können. Grobe Gebäudesensoren übersehen dabei das spezifische Mikroklima in Vitrinen, Kirchenschiffen oder bei wertvollen Leihgaben – und lassen Sie völlig im Dunkeln.",
      ],
    },
  },
  challengesEyebrow: "Die Herausforderungen, die Sie kennen",
  challengesHeading: "Wenn Sie das Klima nicht belegen können, ist jedes Objekt gefährdet.",
  challenges: [
    {
      title: "Unsichtbarer, schleichender Schaden",
      body: "Ungünstige Luftfeuchtigkeit und Temperatur schädigen unersetzliche Objekte, lange bevor der Schaden sichtbar wird. Wenn Risse, Verzug oder Schimmel schließlich sichtbar werden, ist es für präventive Maßnahmen bereits zu spät.",
    },
    {
      title: "Keine Dokumentation der Bedingungen",
      body: "Sie können das Klima, in dem Ihre Sammlung aufbewahrt wird, nicht lückenlos belegen, weder gegenüber Versicherern und Fördergebern noch zur Erfüllung von Preservationsanforderungen, wenn Messwerte nur in Notizbüchern stehen oder gar nicht existieren.",
    },
    {
      title: "Preservation versus Energiekosten",
      body: "Ein historisches Gebäude zu beheizen, um seinen kostbaren Inhalt zu schützen, ist extrem teuer. Ohne präzise Daten ist es jedoch schier unmöglich, die richtige Balance zwischen Sammlungsschutz und Betriebskosten zu finden.",
    },
  ],
  capabilitiesEyebrow: "So löst RoomAlyzer das",
  capabilitiesHeading: "Die spezifischen Analysewerkzeuge, die Sie brauchen. Die Standards, denen Sie vertrauen.",
  solutionLead:
    "Schluss mit Vermutungen — starten Sie mit Optimierung. RoomAlyzer Preservation bietet eine vollständige Suite spezialisierter Analysewerkzeuge und verwandelt drahtlose Sensordaten in Zonen-Dashboards, Drift-Alarme und prüffähige Berichte, damit Sie makellose Preservation mit Energieeffizienz in Einklang bringen.",
  solutionLeadWithSensorLinks: [
    {
      type: "text",
      value:
        "Schluss mit Vermutungen — starten Sie mit Optimierung. RoomAlyzer Preservation bietet spezialisierte Analysewerkzeuge und verwandelt drahtlose ",
    },
    { type: "sensor", slug: "humidity", label: "Humidity" },
    { type: "text", value: " und " },
    { type: "sensor", slug: "mini-plus", label: "Mini+" },
    { type: "text", value: "-Sensordaten (inkl. " },
    { type: "sensor", slug: "outdoor", label: "Außen" },
    {
      type: "text",
      value:
        " für Fassaden) in Zonen-Dashboards, Drift-Alarme und prüffähige Berichte, damit Sie makellose Preservation mit Energieeffizienz in Einklang bringen. ",
    },
    { type: "compare", label: "Kulturerbe-Sensoren vergleichen", useCaseId: "heritage" },
  ],
  solutionProofPoints: [
    { value: "±0,1 °C · ±1 % r. F.", label: "Sensorpräzision" },
    { value: "7–10 J.", label: "Batterielaufzeit" },
  ],
  capabilitiesContextAlt: "Spezialist wartet an einer historischen Orgel",
  features: [
    {
      id: "mould-risk",
      title: "Schimmelrisiko (VTT)",
      body: "Fortschrittliche prädiktive Modellierung, um Schimmelwachstum zu erkennen und zu verhindern, bevor es Ihre Werte gefährdet.",
      unit: "Prädiktiv",
      imageAlt: "Schimmelrisiko (VTT)-Analyse in RoomAlyzer",
    },
    {
      id: "bizot-green",
      title: "Bizot Green",
      body: "Compliance-Bewertung nach dem Bizot-Green-Protokoll — Temperatur, Luftfeuchtigkeit und Schwankungsbänder in einem Bericht.",
      unit: "Compliance",
      imageAlt: "Bizot-Green-Compliance-Analyse in RoomAlyzer",
    },
    {
      id: "ashrae",
      title: "ASHRAE",
      body: "Klimaklassen-Analyse mit erreichten Klassen-Scores und Jahresübersicht für prüffähige Dokumentation.",
      unit: "Compliance",
      imageAlt: "ASHRAE-Klimaklassen-Analyse in RoomAlyzer",
    },
    {
      id: "preservation-index",
      title: "Preservation Index",
      body: "Eine klare, umsetzbare Bewertung, wie gut Ihre aktuelle Umgebung Ihre Werte schützt.",
      unit: "PI / TWPI",
      imageAlt: "Preservation Index-Bewertung in RoomAlyzer",
    },
    {
      id: "fluctuations",
      title: "Schwankungsüberwachung",
      body: "Temperatur- und Feuchtigkeitsschwankungen nach EN 15757 überwachen — mit exportierbaren Protokollen für Prüfungen, Versicherer und Förderanträge.",
      bodyWithSensorLinks: [
        { type: "text", value: "Die Sensoren " },
        { type: "sensor", slug: "humidity", label: "Humidity" },
        { type: "text", value: " und " },
        { type: "sensor", slug: "mini-plus", label: "Mini+" },
        {
          type: "text",
          value:
            " überwachen Temperatur- und Feuchtigkeitsschwankungen nach EN 15757 — mit exportierbaren Protokollen für Prüfungen, Versicherer und Förderanträge.",
        },
      ],
      unit: "EN 15757",
      imageAlt: "EN 15757-Schwankungsüberwachung in RoomAlyzer",
    },
    {
      id: "heat-ventilation",
      title: "Preservationsheiz- und Lüftungsanalyse",
      body: "Tiefe Einblicke, die Ihnen helfen, Ihr Klima zu stabilisieren und gleichzeitig unnötigen Energieverbrauch zu reduzieren.",
      unit: "Energie",
      imageAlt: "Preservationsheiz- und Lüftungsanalyse in RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smarter zusammen",
  relatedModuleBody:
    "Kombinieren Sie Preservationsüberwachung mit Live-Indoor climate data für bewohnte Bereiche.",
  relatedModuleLink: "Indoor climate entdecken",
  audiencesEyebrow: "Für wen es gedacht ist",
  audiencesHeading: "Für Restauratoren und Facility-Teams, mit Daten, denen alle vertrauen können.",
  audiencesLead:
    "Dieselbe objektive Klimabasis dient dem Restaurator, der die Sammlung schützt und dem Facility Manager, der das Gebäude betreibt.",
  primaryAudienceHeading: "Für Restauratoren und Spezialisten",
  primaryAudienceItems: [
    "Relative Luftfeuchtigkeit und Temperatur auf Sammlungsebene überwachen",
    "Bedingungen für EN 15757, Versicherer und Förderer dokumentieren",
    "Hochpräzisen Messwerten vertrauen, die Restauratoren verlangen",
    "Klimaverlauf für jede Vitrine und jedes Depot einsehen",
  ],
  secondaryAudienceHeading: "Für Facility Manager",
  secondaryAudienceItems: [
    "Preservation mit Heiz- und Energiekosten in Einklang bringen",
    "Frühwarnungen erhalten, wenn die HLK vom Sollwert abweicht",
    "Dieselben Daten mit Preservationsteams teilen",
    "Ohne WLAN in dickwändigen historischen Gebäuden einsetzen",
  ],
  faqTitle: "Häufig gestellte Fragen",
  faqContextAlt: "Kollegen besprechen Pläne an einem Besprechungstisch",
  faqItems: [
    {
      q: "Wie lange hält die Batterie?",
      a: "Unsere Preservationssensoren laufen je nach Meldefrequenz typischerweise 7–10 Jahre mit einer einzigen Batterie. Die Plattform warnt Sie rechtzeitig, wenn eine Batterie gewechselt werden muss.",
    },
    {
      q: "Wie präzise sind die Sensoren und müssen sie kalibriert werden?",
      a: "RoomAlyzer Air Feuchtigkeits- und Temperature liefern ±0,1 °C und ±1 % r. F.. Jeder Sensor ist werkskalibriert; die Plattform markiert Geräte, die außerhalb der Spezifikation geraten.",
    },
    {
      q: "Funktioniert das in historischen Gebäuden ohne WLAN?",
      a: "Ja. Die NB-IoT-Sensoren verbinden sich direkt über das Mobilfunknetz und erreichen selbst durch dickes Mauerwerk Kirchenschiffe, Archivmagazine und Museumsetagen – ohne Gebäude-WLAN. Wo SecureDataShot zum Einsatz kommt, verbindet ein einziger Cloud Connector mit SIM-Karte die Sensoren mit der Plattform.",
    },
    {
      q: "Unterstützt RoomAlyzer EN-15757-Dokumentation?",
      a: "Ja. Kontinuierliche Klimaprotokolle und exportierbare Berichte liefern die dokumentierte Historie, die EN 15757 für organische hygroskopische Materialien erwartet.",
    },
    {
      q: "Was kostet das?",
      a: "Der Preis hängt von der Anzahl der Sensoren und Zonen ab. Buchen Sie eine Demo und wir geben Ihnen eine konkrete Schätzung auf Basis Ihrer Gebäude und Sammlungen.",
    },
  ],
  ctaTitle: "Möchten Sie es selbst sehen?",
  ctaSubtitle:
    "Buchen Sie eine Demo. Wir zeigen die Plattform, gehen Ihren Fall durch und geben Ihnen eine Preisschätzung.",
  ctaMicrocopy: "In Minuten einsatzbereit · Präzision, der Restauratoren vertrauen",
};

const sv: PreservationStrings = {
  metaTitle: "Bevarande: klimatövervakning för kulturarv | IoT Fabrikken",
  metaDescription:
    "Trådlösa sensorer övervakar temperatur och luftfuktighet kring oersättliga samlingar — med den precision konservatorer kräver och dokumentation för EN 15757.",
  breadcrumbHome: "Hem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Bevarande",
  heroTitle: "Felfri bevarande",
  heroTitleAccent: "möter energioptimering",
  heroLead:
    "Vår smarta modul säkrar det idealiska klimatet och minskar samtidigt onödig energiförbrukning",
  intro: [],
  heroPrimaryCta: "Boka en gratis demo",
  heroSecondaryCta: "Få en offert",
  dashboardLabel: "RoomAlyzer: Bevarande",
  dashboardAlt: "RoomAlyzer-dashboard som visar kulturarvsklimatdata över rum och montrar",
  heroGallery: {
    images: [
      {
        alt: "RoomAlyzer-sensor som övervakar klimat i ett arkivmagasin med band och förvaringslådor",
        caption: "Övervakning i arkivmagasin, depåer och band",
      },
      {
        alt: "Öppet manuskript i monter med RoomAlyzer-klimatsensor",
        caption: "Objektnivåövervakning i montrar och vitriner",
      },
    ],
    intro: {
      heading: "Insikt på objektnivå för konservatorer",
      paragraphs: [
        "Det mesta av klimathårdvaran är byggd för HVAC-team – inte för konservatorer, arkivarier och kyrkvärdar. Du balanserar ömtåliga samlingar mot energikrav utan data på objektnivå, medan byggnadsomfattande sensorer missar montern, långhuset och utlånet du aldrig hinner inspektera.",
      ],
    },
  },
  challengesEyebrow: "Utmaningarna ni känner igen",
  challengesHeading: "När du inte kan bevisa klimatet är varje föremål i riskzonen.",
  challenges: [
    {
      title: "Osynlig, gradvis skada",
      body: "Ogynnsam luftfuktighet och temperatur skadar oersättliga föremål långt innan något synligt tecken visar sig — när sprickor, skevhet eller mögel syns är skadan redan skedd.",
    },
    {
      title: "Ingen dokumentation av förhållandena",
      body: "Ni kan inte bevisa vilket klimat er samling har förvarats i (för försäkringsbolag, finansiärer eller bevarandekrav) när mätningar finns i anteckningsböcker eller inte alls.",
    },
    {
      title: "Bevarande kontra energiräkningar",
      body: "Att värma upp en historisk byggnad för att skydda dess innehåll är dyrt, och utan data kan ni inte hitta balansen mellan att skydda samlingar och styra driftskostnaderna.",
    },
  ],
  capabilitiesEyebrow: "Så löser RoomAlyzer det",
  capabilitiesHeading: "De specifika analysverktyg du behöver. De standarder du litar på.",
  solutionLead:
    "Sluta gissa och börja optimera. RoomAlyzer Bevarande erbjuder en komplett svit av specialiserade analysverktyg och omvandlar trådlösa sensordata till zonerade dashboards, driftlarm och revisionsklara rapporter – så att du kan balansera felfritt bevarande med energieffektivitet.",
  solutionLeadWithSensorLinks: [
    {
      type: "text",
      value:
        "Sluta gissa och börja optimera. RoomAlyzer Bevarande erbjuder specialiserade analysverktyg och omvandlar trådlösa ",
    },
    { type: "sensor", slug: "humidity", label: "Humidity" },
    { type: "text", value: " och " },
    { type: "sensor", slug: "mini-plus", label: "Mini+" },
    { type: "text", value: "-sensordata (med " },
    { type: "sensor", slug: "outdoor", label: "Outdoor" },
    {
      type: "text",
      value:
        " för fasader) till zonerade dashboards, driftlarm och revisionsklara rapporter — så att ni kan balansera felfritt bevarande med energieffektivitet. ",
    },
    { type: "compare", label: "Jämför kulturarvssensorer", useCaseId: "heritage" },
  ],
  solutionProofPoints: [
    { value: "±0,1 °C · ±1 % RF", label: "Sensorprecision" },
    { value: "7–10 år", label: "Batteritid" },
  ],
  capabilitiesContextAlt: "Specialist underhåller ett historiskt orgel",
  features: [
    {
      id: "mould-risk",
      title: "Mögelrisk (VTT)",
      body: "Avancerad prediktiv modellering för att identifiera och förebygga mögelväxt innan den hotar era tillgångar.",
      unit: "Prediktiv",
      imageAlt: "Mögelrisk (VTT)-analys i RoomAlyzer",
    },
    {
      id: "bizot-green",
      title: "Bizot Green",
      body: "Compliance-poäng enligt Bizot Green-protokollet — temperatur, luftfuktighet och fluktuationsband i en rapport.",
      unit: "Compliance",
      imageAlt: "Bizot Green-complianceanalys i RoomAlyzer",
    },
    {
      id: "ashrae",
      title: "ASHRAE",
      body: "Klimatklassanalys med uppnådda klasspoäng och helårsvy för revisionsklar dokumentation.",
      unit: "Compliance",
      imageAlt: "ASHRAE-klimatklassanalys i RoomAlyzer",
    },
    {
      id: "preservation-index",
      title: "Preservation Index",
      body: "En tydlig, handlingsbar bedömning av hur väl er nuvarande miljö skyddar era värden.",
      unit: "PI / TWPI",
      imageAlt: "Preservation Index-bedömning i RoomAlyzer",
    },
    {
      id: "fluctuations",
      title: "Fluktuationsspårning",
      body: "Övervaka temperatur- och fuktförskjutningar mot EN 15757, med exporterbara loggar redo för revision, försäkringsbolag och bidragsansökningar.",
      bodyWithSensorLinks: [
        { type: "text", value: "Sensorerna " },
        { type: "sensor", slug: "humidity", label: "Humidity" },
        { type: "text", value: " och " },
        { type: "sensor", slug: "mini-plus", label: "Mini+" },
        {
          type: "text",
          value:
            " övervakar temperatur- och fuktförskjutningar mot EN 15757, med exporterbara loggar redo för revision, försäkringsbolag och bidragsansökningar.",
        },
      ],
      unit: "EN 15757",
      imageAlt: "EN 15757-fluktuationsspårning i RoomAlyzer",
    },
    {
      id: "heat-ventilation",
      title: "Bevarande värme- och ventilationsanalys",
      body: "Djupa insikter som hjälper er stabilisera klimatet medan ni aktivt minskar onödig energiförbrukning.",
      unit: "Energi",
      imageAlt: "Bevarande värme- och ventilationsanalys i RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smartare tillsammans",
  relatedModuleBody:
    "Kombinera bevarandeövervakning med live inomhusklimatdata för bebodda utrymmen.",
  relatedModuleLink: "Utforska inomhusklimat",
  audiencesEyebrow: "Vem det är för",
  audiencesHeading: "För konservatorer och facility-team — med data alla kan lita på.",
  audiencesLead:
    "Samma objektiva klimatbas tjänar konservatorn som skyddar samlingen och facility managern som driver byggnaden.",
  primaryAudienceHeading: "För konservatorer och specialister",
  primaryAudienceItems: [
    "Övervaka RF och temperatur på samlingsnivå",
    "Dokumentera förhållanden för EN 15757, försäkring och finansiärer",
    "Lita på högprecisa mätningar som konservatorer kräver",
    "Se klimathistorik för varje monter och varje magasin",
  ],
  secondaryAudienceHeading: "För facility managers",
  secondaryAudienceItems: [
    "Balansera bevarande med uppvärmnings- och energikostnader",
    "Få tidiga varningar när HVAC glider från börvärdet",
    "Dela samma data med bevarandeteam",
    "Distribuera utan wifi i tjockväggiga historiska byggnader",
  ],
  faqTitle: "Vanliga frågor",
  faqContextAlt: "Kolleger som diskuterar planer runt ett mötesbord",
  faqItems: [
    {
      q: "Hur lång är batteritiden?",
      a: "Våra bevarandesensorer håller vanligtvis 7–10 år på ett enda batteri, beroende på rapporteringsfrekvens. Plattformen varnar dig i god tid när ett batteri behöver bytas.",
    },
    {
      q: "Hur precisa är sensorerna, och behöver de kalibreras?",
      a: "RoomAlyzer Air fukt- och temperatursensorer levererar ±0,1 °C och ±1 % RF – de toleranser konservatorer förväntar sig. Varje sensor är fabrikskalibrerad, och plattformen flaggar enheter som glider utanför specifikationen.",
    },
    {
      q: "Fungerar det i historiska byggnader utan wifi?",
      a: "Ja. NB-IoT-sensorerna ansluter direkt via mobilnätet och når djupt in i kyrkorum, arkivmagasin och museivåningar genom tjockt murverk – utan byggnads-wifi. Där SecureDataShot används kopplar en enda Cloud Connector med SIM-kort sensorerna till plattformen.",
    },
    {
      q: "Stöder RoomAlyzer EN 15757-dokumentation?",
      a: "Ja. Kontinuerliga klimatloggar och exporterbara rapporter ger den dokumenterade historik EN 15757 förväntar sig för organiska hygroskopiska material — redo för revisioner, försäkring och ansökningsgranskningar.",
    },
    {
      q: "Vad kostar det?",
      a: "Priset beror på antalet sensorer och zoner. Boka en demo så ger vi en konkret uppskattning utifrån era byggnader och samlingar.",
    },
  ],
  ctaTitle: "Vill du se det själv?",
  ctaSubtitle:
    "Boka en demo. Vi visar plattformen, går igenom ert fall och ger dig en prisuppskattning.",
  ctaMicrocopy: "Klar på minuter · precision konservatorer litar på",
};

const dictionaries: Partial<Record<Lang, PreservationStrings>> = { en, da, de, sv };

export function getPreservation(lang: Lang): PreservationStrings {
  return dictionaries[lang] ?? dictionaries[defaultLang]!;
}
