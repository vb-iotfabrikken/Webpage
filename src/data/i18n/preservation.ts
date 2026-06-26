import type { Lang } from "../lang";
import { defaultLang } from "../lang";
import type { ModulePageStrings } from "./modulePageTypes";

/** Localized content for the preservation module landing page. */
export type PreservationStrings = ModulePageStrings;

const en: PreservationStrings = {
  metaTitle: "Preservation — heritage climate monitoring | IoT Fabrikken",
  metaDescription:
    "Wireless sensors monitor temperature and humidity around irreplaceable collections — with the precision conservators require and documentation for EN 15757.",
  breadcrumbHome: "Home",
  breadcrumbModules: "Modules",
  breadcrumbCurrent: "Preservation",
  heroTitle: "Protect collections with data.",
  heroTitleAccent: "Not guesswork.",
  heroLead:
    "Wireless sensors monitor temperature and humidity around irreplaceable objects — with the precision conservators require.",
  intro: [
    "RoomAlyzer monitors temperature and humidity and turns it into clear documentation of the exact conditions your objects are kept in. Our sensors are known for their high precision — something conservators rightly insist on — so you can trust the figures you preserve your collection by.",
    "Whether you care for altars and organs in a historic church, paintings in a museum gallery, or records in an archive, the same platform gives you room-level and display-case coverage — built for museums, churches, archives and heritage conservation.",
  ],
  heroPrimaryCta: "Book a free demo",
  heroSecondaryCta: "Get an offer",
  dashboardLabel: "RoomAlyzer — Preservation",
  dashboardAlt: "RoomAlyzer dashboard showing heritage climate data across rooms and display cases",
  challengesEyebrow: "The challenges you know",
  challengesHeading: "When you cannot prove the climate, every object is at risk.",
  challenges: [
    {
      title: "Invisible gradual damage",
      body: "Unfavourable humidity and temperature harm irreplaceable objects long before any visible sign appears — by the time cracking, warping or mould shows, the damage is already done.",
    },
    {
      title: "No documentation of conditions",
      body: "You cannot prove the climate your collection has been kept in — for insurers, funders, or conservation requirements — when readings live in notebooks or not at all.",
    },
    {
      title: "Preservation versus energy bills",
      body: "Heating a historic building to protect its contents is expensive, and without data you cannot find the balance between safeguarding collections and controlling running costs.",
    },
  ],
  capabilitiesEyebrow: "How RoomAlyzer solves it",
  capabilitiesHeading: "Precision climate monitoring built for heritage.",
  solutionLead:
    "RoomAlyzer Preservation turns wireless sensor readings into zoned dashboards, drift alerts and audit-ready reports — so conservators and facility teams work from the same facts.",
  capabilitiesContextAlt: "Conservators reviewing climate conditions in a collection store",
  features: [
    {
      id: "precision",
      title: "High-precision RH & temperature",
      body: "Discreet wireless sensors deliver the tight tolerances conservators need — in galleries, storage rooms and display cases alike.",
      unit: "±0.3 °C / ±2 % RH",
      imageAlt: "High-precision temperature and humidity readings in RoomAlyzer",
    },
    {
      id: "documentation",
      title: "Climate history & reports",
      body: "Continuous logs and exportable reports document exactly how your collection has been stored — ready for audits, insurers and grant applications.",
      unit: "Audit-ready",
      imageAlt: "Climate history and preservation reports in RoomAlyzer",
    },
    {
      id: "drift-alerts",
      title: "Setpoint drift detection",
      body: "HVAC setpoints creep over the years. Automated drift detection warns you before conditions slip outside the bands your objects need.",
      unit: "Early warning",
      imageAlt: "Setpoint drift alert in RoomAlyzer",
    },
    {
      id: "multi-zone",
      title: "Every room and display case",
      body: "Monitor naves, storage racks, vitrines and archives in one zoned view — from a single church to a multi-building museum campus.",
      unit: "Zoned view",
      imageAlt: "Multi-zone preservation climate overview in RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smarter together",
  relatedModuleBody:
    "Pair preservation monitoring with live indoor-climate data for occupied spaces.",
  relatedModuleLink: "Explore indoor climate",
  audiencesEyebrow: "Who it is for",
  audiencesHeading: "For conservators and facility teams — with data everyone can trust.",
  audiencesLead:
    "The same objective climate baseline serves the conservator protecting the collection and the facility manager running the building.",
  primaryAudienceHeading: "For Conservators",
  primaryAudienceItems: [
    "Monitor RH and temperature at collection level",
    "Document conditions for EN 15757, insurers and funders",
    "Trust high-precision readings conservators require",
    "See climate history for every display case and storage zone",
  ],
  secondaryAudienceHeading: "For Facility Managers",
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
      a: "RoomAlyzer Air humidity and temperature sensors deliver ±0.3 °C and ±2 % RH — the tolerances conservators expect. Each sensor is factory-calibrated; the platform flags any unit that drifts outside spec.",
    },
    {
      q: "Can this work in historic buildings without WiFi?",
      a: "Yes. Sensors use LoRaWAN or similar long-range radio — no building WiFi required. A single gateway typically covers a nave, archive stack or museum floor through thick masonry walls.",
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
    "Book a 30-minute demo. We will show the platform, walk through your case and give you a price estimate.",
  ctaMicrocopy: "Installs in minutes · precision conservators trust",
};

const da: PreservationStrings = {
  metaTitle: "Bevaring — klimaovervågning af kulturarv | IoT Fabrikken",
  metaDescription:
    "Trådløse sensorer overvåger temperatur og luftfugtighed omkring uerstattelige samlinger — med den præcision, konservatorer kræver, og dokumentation til EN 15757.",
  breadcrumbHome: "Hjem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Bevaring",
  heroTitle: "Beskyt samlinger med data.",
  heroTitleAccent: "Ikke gætværk.",
  heroLead:
    "Trådløse sensorer overvåger temperatur og luftfugtighed omkring uerstattelige genstande — med den præcision, konservatorer kræver.",
  intro: [
    "RoomAlyzer overvåger temperatur og luftfugtighed og omsætter det til klar dokumentation af de præcise forhold, jeres genstande opbevares i. Vores sensorer er kendt for deres høje præcision — noget konservatorer med rette insisterer på — så I kan stole på de tal, I bevarer jeres samling efter.",
    "Uanset om I passer altre og orgler i en historisk kirke, malerier i et museum eller arkivalier i et arkiv, giver den samme platform dækning på rum- og montreniveau — bygget til museer, kirker, arkiver og bevaring af kulturarv.",
  ],
  heroPrimaryCta: "Book en gratis demo",
  heroSecondaryCta: "Få et tilbud",
  dashboardLabel: "RoomAlyzer — Bevaring",
  dashboardAlt: "RoomAlyzer-dashboard, der viser kulturarvsklimadata på tværs af rum og montrer",
  challengesEyebrow: "Udfordringerne, I kender",
  challengesHeading: "Når I ikke kan dokumentere klimaet, er enhver genstand i risiko.",
  challenges: [
    {
      title: "Usynlig, gradvis skade",
      body: "Ugunstig luftfugtighed og temperatur skader uerstattelige genstande længe før, der viser sig et synligt tegn — når revner, skævhed eller skimmel først ses, er skaden allerede sket.",
    },
    {
      title: "Ingen dokumentation af forholdene",
      body: "I kan ikke bevise, hvilket klima jeres samling har været opbevaret i — over for forsikringsselskaber, fonde eller bevaringskrav — når målinger lever i notesbøger eller slet ikke findes.",
    },
    {
      title: "Bevaring kontra energiregninger",
      body: "At opvarme en historisk bygning for at beskytte dens indhold er dyrt, og uden data kan I ikke finde balancen mellem at beskytte samlinger og styre driftsomkostningerne.",
    },
  ],
  capabilitiesEyebrow: "Sådan løser RoomAlyzer det",
  capabilitiesHeading: "Præcis klimaovervågning bygget til kulturarv.",
  solutionLead:
    "RoomAlyzer Bevaring omsætter trådløse sensordata til zonede dashboards, driftalarmer og revisionsklare rapporter — så konservatorer og facility-teams arbejder ud fra de samme fakta.",
  capabilitiesContextAlt: "Konservatorer der gennemgår klimatiske forhold i et magasin",
  features: [
    {
      id: "precision",
      title: "Højpræcis RH og temperatur",
      body: "Diskrete trådløse sensorer leverer de snævre tolerancer, konservatorer har brug for — i gallerier, magasiner og montrer.",
      unit: "±0,3 °C / ±2 % RH",
      imageAlt: "Højpræcise temperatur- og luftfugtighedsmålinger i RoomAlyzer",
    },
    {
      id: "documentation",
      title: "Klimahistorik og rapporter",
      body: "Løbende logning og eksportérbare rapporter dokumenterer præcis, hvordan jeres samling har været opbevaret — klar til audits, forsikring og ansøgninger.",
      unit: "Revisionsklar",
      imageAlt: "Klimahistorik og bevaringsrapporter i RoomAlyzer",
    },
    {
      id: "drift-alerts",
      title: "Detektion af setpoint-drift",
      body: "HVAC-setpoints glider over årene. Automatisk driftdetektion advarer jer, før forholdene glider uden for de bånd, jeres genstande har brug for.",
      unit: "Tidlig advarsel",
      imageAlt: "Setpoint-driftalarm i RoomAlyzer",
    },
    {
      id: "multi-zone",
      title: "Hvert rum og hver montre",
      body: "Overvåg skib, magasinreoler, vitriner og arkiver i ét zonet overblik — fra én kirke til et museums campus på flere bygninger.",
      unit: "Zoneoverblik",
      imageAlt: "Multi-zone bevaringsklima i RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smartere sammen",
  relatedModuleBody:
    "Kombinér bevaringsovervågning med live indeklimadata for befolkede rum.",
  relatedModuleLink: "Udforsk indeklima",
  audiencesEyebrow: "Hvem det er til",
  audiencesHeading: "Til konservatorer og facility-teams — med data, alle kan stole på.",
  audiencesLead:
    "Det samme objektive klimagrundlag tjener konservatoren, der beskytter samlingen, og facility manageren, der driver bygningen.",
  primaryAudienceHeading: "Til konservatorer",
  primaryAudienceItems: [
    "Overvåg RH og temperatur på samlingsniveau",
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
  faqContextAlt: "Kolleger der diskuterer planer omkring et mødebord",
  faqItems: [
    {
      q: "Hvor lang er batterilevetiden?",
      a: "Vores bevaringssensorer kører typisk 7–10 år på ét batteri, afhængigt af rapporteringsfrekvens. Platformen advarer dig i god tid, når et batteri skal skiftes.",
    },
    {
      q: "Hvor præcise er sensorerne, og skal de kalibreres?",
      a: "RoomAlyzer Air-fugt- og temperatursensorer leverer ±0,3 °C og ±2 % RH — de tolerancer, konservatorer forventer. Hver sensor er fabrikskalibreret; platformen markerer enheder, der glider uden for spec.",
    },
    {
      q: "Kan det fungere i historiske bygninger uden WiFi?",
      a: "Ja. Sensorerne bruger LoRaWAN eller lignende langtrækkende radio — ingen bygnings-WiFi påkrævet. En enkelt gateway dækker typisk et skib, et arkivmagasin eller en museums-etage gennem tykke murstensvægge.",
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
    "Book en demo på 30 minutter. Vi viser platformen, gennemgår jeres case og giver dig et prisestimat.",
  ctaMicrocopy: "Klar på minutter · præcision konservatorer stoler på",
};

const de: PreservationStrings = {
  metaTitle: "Konservierung — Klimaüberwachung für Kulturgut | IoT Fabrikken",
  metaDescription:
    "Drahtlose Sensoren überwachen Temperatur und Luftfeuchtigkeit rund um unersetzliche Sammlungen — mit der Präzision, die Restauratoren verlangen, und Dokumentation für EN 15757.",
  breadcrumbHome: "Startseite",
  breadcrumbModules: "Module",
  breadcrumbCurrent: "Konservierung",
  heroTitle: "Schützen Sie Sammlungen mit Daten.",
  heroTitleAccent: "Nicht mit Vermutungen.",
  heroLead:
    "Drahtlose Sensoren überwachen Temperatur und Luftfeuchtigkeit rund um unersetzliche Objekte — mit der Präzision, die Restauratoren verlangen.",
  intro: [
    "RoomAlyzer überwacht Temperatur und Luftfeuchtigkeit und macht daraus eine klare Dokumentation der genauen Bedingungen, in denen Ihre Objekte aufbewahrt werden. Unsere Sensoren sind für ihre hohe Präzision bekannt — worauf Restauratoren zu Recht bestehen — sodass Sie den Werten vertrauen können, nach denen Sie Ihre Sammlung bewahren.",
    "Ob Sie Altäre und Orgeln in einer historischen Kirche, Gemälde in einem Museum oder Akten in einem Archiv betreuen — dieselbe Plattform liefert Abdeckung auf Raum- und Vitrinenebene, entwickelt für Museen, Kirchen, Archive und die Denkmalpflege.",
  ],
  heroPrimaryCta: "Kostenlose Demo buchen",
  heroSecondaryCta: "Angebot anfordern",
  dashboardLabel: "RoomAlyzer — Konservierung",
  dashboardAlt: "RoomAlyzer-Dashboard mit Klimadaten für Kulturgut in Räumen und Vitrinen",
  challengesEyebrow: "Die Herausforderungen, die Sie kennen",
  challengesHeading: "Wenn Sie das Klima nicht belegen können, ist jedes Objekt gefährdet.",
  challenges: [
    {
      title: "Unsichtbarer, schleichender Schaden",
      body: "Ungünstige Luftfeuchtigkeit und Temperatur schädigen unersetzliche Objekte, lange bevor ein sichtbares Zeichen erscheint — wenn Risse, Verzug oder Schimmel sichtbar werden, ist der Schaden bereits geschehen.",
    },
    {
      title: "Keine Dokumentation der Bedingungen",
      body: "Sie können das Klima, in dem Ihre Sammlung aufbewahrt wurde, nicht belegen — gegenüber Versicherern, Fördergebern oder Konservierungsanforderungen — wenn Messwerte in Notizbüchern stehen oder gar nicht existieren.",
    },
    {
      title: "Konservierung versus Energiekosten",
      body: "Ein historisches Gebäude zu beheizen, um seinen Inhalt zu schützen, ist teuer, und ohne Daten finden Sie die Balance zwischen Sammlungsschutz und Betriebskosten nicht.",
    },
  ],
  capabilitiesEyebrow: "So löst RoomAlyzer das",
  capabilitiesHeading: "Präzise Klimaüberwachung für Kulturgut.",
  solutionLead:
    "RoomAlyzer Konservierung verwandelt drahtlose Sensordaten in Zonen-Dashboards, Drift-Alarme und prüffähige Berichte — damit Restauratoren und Facility-Teams mit denselben Fakten arbeiten.",
  capabilitiesContextAlt: "Restauratoren prüfen Klimabedingungen in einem Depots",
  features: [
    {
      id: "precision",
      title: "Hochpräzise RH & Temperatur",
      body: "Diskrete drahtlose Sensoren liefern die engen Toleranzen, die Restauratoren brauchen — in Galerien, Depots und Vitrinen gleichermaßen.",
      unit: "±0,3 °C / ±2 % RH",
      imageAlt: "Hochpräzise Temperatur- und Luftfeuchtigkeitswerte in RoomAlyzer",
    },
    {
      id: "documentation",
      title: "Klimaverlauf & Berichte",
      body: "Kontinuierliche Protokolle und exportierbare Berichte dokumentieren genau, wie Ihre Sammlung gelagert wurde — bereit für Audits, Versicherer und Förderanträge.",
      unit: "Prüffähig",
      imageAlt: "Klimaverlauf und Konservierungsberichte in RoomAlyzer",
    },
    {
      id: "drift-alerts",
      title: "Setpoint-Drift-Erkennung",
      body: "HVAC-Sollwerte verschieben sich über die Jahre. Automatische Drift-Erkennung warnt Sie, bevor die Bedingungen außerhalb der Bänder geraten, die Ihre Objekte brauchen.",
      unit: "Frühwarnung",
      imageAlt: "Setpoint-Drift-Alarm in RoomAlyzer",
    },
    {
      id: "multi-zone",
      title: "Jeder Raum und jede Vitrine",
      body: "Überwachen Sie Schiffe, Regalmagazine, Vitrinen und Archive in einer Zonenansicht — von einer einzelnen Kirche bis zu einem mehrgebäudigen Museumscampus.",
      unit: "Zonenansicht",
      imageAlt: "Mehrzonen-Klimaübersicht für Kulturgut in RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smarter zusammen",
  relatedModuleBody:
    "Kombinieren Sie Konservierungsüberwachung mit Live-Raumklimadaten für bewohnte Bereiche.",
  relatedModuleLink: "Raumklima entdecken",
  audiencesEyebrow: "Für wen es gedacht ist",
  audiencesHeading: "Für Restauratoren und Facility-Teams — mit Daten, denen alle vertrauen können.",
  audiencesLead:
    "Dieselbe objektive Klimabasis dient dem Restaurator, der die Sammlung schützt, und dem Facility Manager, der das Gebäude betreibt.",
  primaryAudienceHeading: "Für Restauratoren",
  primaryAudienceItems: [
    "RH und Temperatur auf Sammlungsebene überwachen",
    "Bedingungen für EN 15757, Versicherer und Förderer dokumentieren",
    "Hochpräzisen Messwerten vertrauen, die Restauratoren verlangen",
    "Klimaverlauf für jede Vitrine und jedes Depot einsehen",
  ],
  secondaryAudienceHeading: "Für Facility Manager",
  secondaryAudienceItems: [
    "Konservierung mit Heiz- und Energiekosten in Einklang bringen",
    "Frühwarnungen erhalten, wenn die HVAC vom Sollwert abweicht",
    "Dieselben Daten mit Konservierungsteams teilen",
    "Ohne WLAN in dickwandigen historischen Gebäuden einsetzen",
  ],
  faqTitle: "Häufig gestellte Fragen",
  faqContextAlt: "Kollegen besprechen Pläne an einem Besprechungstisch",
  faqItems: [
    {
      q: "Wie lange hält die Batterie?",
      a: "Unsere Konservierungssensoren laufen je nach Meldefrequenz typischerweise 7–10 Jahre mit einer einzigen Batterie. Die Plattform warnt Sie rechtzeitig, wenn eine Batterie gewechselt werden muss.",
    },
    {
      q: "Wie präzise sind die Sensoren, und müssen sie kalibriert werden?",
      a: "RoomAlyzer Air Feuchtigkeits- und Temperatursensoren liefern ±0,3 °C und ±2 % RH — die Toleranzen, die Restauratoren erwarten. Jeder Sensor ist werkskalibriert; die Plattform markiert Geräte, die außerhalb der Spezifikation geraten.",
    },
    {
      q: "Funktioniert das in historischen Gebäuden ohne WLAN?",
      a: "Ja. Die Sensoren nutzen LoRaWAN oder ähnliche Funkprotokolle mit großer Reichweite — kein Gebäude-WLAN erforderlich. Ein einziges Gateway deckt in der Regel ein Kirchenschiff, ein Archivmagazin oder eine Museumsetage durch dicke Mauerwerk ab.",
    },
    {
      q: "Unterstützt RoomAlyzer EN-15757-Dokumentation?",
      a: "Ja. Kontinuierliche Klimaprotokolle und exportierbare Berichte liefern die dokumentierte Historie, die EN 15757 für organische hygroskopische Materialien erwartet — bereit für Audits, Versicherer und Förderprüfungen.",
    },
    {
      q: "Was kostet das?",
      a: "Der Preis hängt von der Anzahl der Sensoren und Zonen ab. Buchen Sie eine Demo, und wir geben Ihnen eine konkrete Schätzung auf Basis Ihrer Gebäude und Sammlungen.",
    },
  ],
  ctaTitle: "Möchten Sie es selbst sehen?",
  ctaSubtitle:
    "Buchen Sie eine 30-minütige Demo. Wir zeigen die Plattform, gehen Ihren Fall durch und geben Ihnen eine Preisschätzung.",
  ctaMicrocopy: "In Minuten einsatzbereit · Präzision, der Restauratoren vertrauen",
};

const sv: PreservationStrings = {
  metaTitle: "Bevarande — klimatövervakning för kulturarv | IoT Fabrikken",
  metaDescription:
    "Trådlösa sensorer övervakar temperatur och luftfuktighet kring oersättliga samlingar — med den precision konservatorer kräver och dokumentation för EN 15757.",
  breadcrumbHome: "Hem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Bevarande",
  heroTitle: "Skydda samlingar med data.",
  heroTitleAccent: "Inte gissningar.",
  heroLead:
    "Trådlösa sensorer övervakar temperatur och luftfuktighet kring oersättliga föremål — med den precision konservatorer kräver.",
  intro: [
    "RoomAlyzer övervakar temperatur och luftfuktighet och omvandlar det till tydlig dokumentation av de exakta förhållanden era föremål förvaras i. Våra sensorer är kända för sin höga precision — något konservatorer med rätta insisterar på — så att ni kan lita på de siffror ni bevarar er samling efter.",
    "Oavsett om ni vårdar altaren och orglar i en historisk kyrka, målningar i ett museum eller arkivhandlingar i ett arkiv ger samma plattform täckning på rums- och monternivå — byggd för museer, kyrkor, arkiv och kulturarvsvård.",
  ],
  heroPrimaryCta: "Boka en gratis demo",
  heroSecondaryCta: "Få en offert",
  dashboardLabel: "RoomAlyzer — Bevarande",
  dashboardAlt: "RoomAlyzer-dashboard som visar kulturarvsklimatdata över rum och montrar",
  challengesEyebrow: "Utmaningarna ni känner igen",
  challengesHeading: "När ni inte kan bevisa klimatet är varje föremål i riskzonen.",
  challenges: [
    {
      title: "Osynlig, gradvis skada",
      body: "Ogynnsam luftfuktighet och temperatur skadar oersättliga föremål långt innan något synligt tecken visar sig — när sprickor, skevhet eller mögel syns är skadan redan skedd.",
    },
    {
      title: "Ingen dokumentation av förhållandena",
      body: "Ni kan inte bevisa vilket klimat er samling har förvarats i — för försäkringsbolag, finansiärer eller bevarandekrav — när mätningar finns i anteckningsböcker eller inte alls.",
    },
    {
      title: "Bevarande kontra energiräkningar",
      body: "Att värma upp en historisk byggnad för att skydda dess innehåll är dyrt, och utan data kan ni inte hitta balansen mellan att skydda samlingar och styra driftskostnaderna.",
    },
  ],
  capabilitiesEyebrow: "Så löser RoomAlyzer det",
  capabilitiesHeading: "Precis klimatövervakning byggd för kulturarv.",
  solutionLead:
    "RoomAlyzer Bevarande omvandlar trådlösa sensordata till zonerade dashboards, driftlarm och revisionsklara rapporter — så konservatorer och facility-team arbetar utifrån samma fakta.",
  capabilitiesContextAlt: "Konservatorer som granskar klimatförhållanden i ett magasin",
  features: [
    {
      id: "precision",
      title: "Högprecision RH och temperatur",
      body: "Diskreta trådlösa sensorer levererar de snäva toleranser konservatorer behöver — i gallerier, magasin och montrar.",
      unit: "±0,3 °C / ±2 % RH",
      imageAlt: "Högprecisa temperatur- och luftfuktighetsmätningar i RoomAlyzer",
    },
    {
      id: "documentation",
      title: "Klimathistorik och rapporter",
      body: "Kontinuerlig loggning och exporterbara rapporter dokumenterar exakt hur er samling har förvarats — redo för revisioner, försäkring och ansökningar.",
      unit: "Revisionsklar",
      imageAlt: "Klimathistorik och bevaranderapporter i RoomAlyzer",
    },
    {
      id: "drift-alerts",
      title: "Detektion av setpoint-drift",
      body: "HVAC-setpoints glider över åren. Automatisk driftdetektering varnar er innan förhållandena glider utanför de band era föremål behöver.",
      unit: "Tidig varning",
      imageAlt: "Setpoint-driftlarm i RoomAlyzer",
    },
    {
      id: "multi-zone",
      title: "Varje rum och varje monter",
      body: "Övervaka långhus, magasinhyllor, vitriner och arkiv i en zonerad vy — från en enskild kyrka till ett museums campus med flera byggnader.",
      unit: "Zonvy",
      imageAlt: "Flerzons bevarandeklimatöversikt i RoomAlyzer",
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
  primaryAudienceHeading: "För konservatorer",
  primaryAudienceItems: [
    "Övervaka RH och temperatur på samlingsnivå",
    "Dokumentera förhållanden för EN 15757, försäkring och finansiärer",
    "Lita på högprecisa mätningar som konservatorer kräver",
    "Se klimathistorik för varje monter och varje magasin",
  ],
  secondaryAudienceHeading: "För facility managers",
  secondaryAudienceItems: [
    "Balansera bevarande med uppvärmnings- och energikostnader",
    "Få tidiga varningar när HVAC glider från setpoint",
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
      a: "RoomAlyzer Air fukt- och temperatursensorer levererar ±0,3 °C och ±2 % RH — de toleranser konservatorer förväntar sig. Varje sensor är fabrikskalibrerad; plattformen flaggar enheter som glider utanför specifikationen.",
    },
    {
      q: "Fungerar det i historiska byggnader utan wifi?",
      a: "Ja. Sensorerna använder LoRaWAN eller liknande radioprotokoll med lång räckvidd — inget byggnads-wifi krävs. En enda gateway täcker vanligtvis ett långhus, ett arkivmagasin eller en museumsvåning genom tjocka murverksväggar.",
    },
    {
      q: "Stöder RoomAlyzer EN 15757-dokumentation?",
      a: "Ja. Kontinuerliga klimaloggar och exporterbara rapporter ger den dokumenterade historik EN 15757 förväntar sig för organiska hygroskopiska material — redo för revisioner, försäkring och ansökningsgranskningar.",
    },
    {
      q: "Vad kostar det?",
      a: "Priset beror på antalet sensorer och zoner. Boka en demo så ger vi en konkret uppskattning utifrån era byggnader och samlingar.",
    },
  ],
  ctaTitle: "Vill du se det själv?",
  ctaSubtitle:
    "Boka en 30-minuters demo. Vi visar plattformen, går igenom ert fall och ger dig en prisuppskattning.",
  ctaMicrocopy: "Klar på minuter · precision konservatorer litar på",
};

const dictionaries: Partial<Record<Lang, PreservationStrings>> = { en, da, de, sv };

export function getPreservation(lang: Lang): PreservationStrings {
  return dictionaries[lang] ?? dictionaries[defaultLang]!;
}
