import type { Lang } from "../lang";
import { defaultLang } from "../lang";
import type { ModuleProseWithLinks } from "./modulePageTypes";

/** Localized content for the space-management module landing page. */
export interface SpaceManagementStrings {
  metaTitle: string;
  metaDescription: string;
  breadcrumbHome: string;
  breadcrumbModules: string;
  breadcrumbCurrent: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroLead: string;
  /** Alt text for the editorial photo beside the hero title. */
  heroTitleImageAlt: string;
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
  smarterTogetherLabel: string;
  smarterTogetherHeadline: string;
  smarterTogether: string;
  smarterTogetherOccupancyLabel: string;
  smarterTogetherOccupancyContext: string;
  smarterTogetherOccupancyStat: string;
  smarterTogetherClimateLabel: string;
  smarterTogetherClimateContext: string;
  smarterTogetherIndoorClimateLink: string;
  audiencesEyebrow: string;
  audiencesHeading: string;
  audiencesLead: string;
  fmHeading: string;
  fmItems: string[];
  realEstateHeading: string;
  realEstateItems: string[];
  faqTitle: string;
  faqContextAlt: string;
  faqItems: { q: string; a: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
  /** Reassurance line below the bottom CTA buttons. */
  ctaMicrocopy: string;
}

const en: SpaceManagementStrings = {
  metaTitle: "Space management: occupancy sensors and data | IoT Fabrikken",
  metaDescription:
    "Optimise office costs and employee well-being with wireless occupancy sensors for desks and meeting rooms. See real utilisation, fix ghost bookings, and turn space data into rent and energy savings.",
  breadcrumbHome: "Home",
  breadcrumbModules: "Modules",
  breadcrumbCurrent: "Space management",
  heroTitle: "Optimise office costs and employee well-being,",
  heroTitleAccent: "with space management built on real usage.",
  heroLead:
    "Live desk and room occupancy that turns guesswork into rent and energy savings, and gives people a workplace worth showing up for.",
  heroTitleImageAlt: "Hand placing a RoomAlyzer Space desk sensor under an office desk",
  intro: [
    "Facility management is no longer just about desks and indoor climate. It is navigating a human dilemma between flexibility and physical presence. Employees no longer commute out of habit; the workplace must deliver clear value. The challenge is to elevate the employee experience while driving waste towards zero, shifting from counting heads to optimising how people actually use the office.",
  ],
  heroPrimaryCta: "Book a free demo",
  heroSecondaryCta: "Get an offer",
  dashboardLabel: "RoomAlyzer: Space management",
  dashboardAlt: "RoomAlyzer Space management dashboard showing desk occupancy, trends, and utilisation",
  challengesEyebrow: "The challenges you actually face",
  challengesHeading:
    "Without live utilisation data, every space, cost and workplace decision is guesswork.",
  challenges: [
    {
      title: "The \"fully booked\" illusion",
      body: "Meeting rooms look completely blocked in your calendar, yet they stand empty, or are booked for ten and used by two. Without real-time data, you miss the hidden slack that could accommodate an entire additional department.",
    },
    {
      title: "Policy vs. reality",
      body: "Leadership may mandate a five-day office week, but team leads keep making exceptions. Offices peak mid-week while desks sit empty on Mondays and Fridays — and you pay for full-scale heating, cooling and cleaning week after week.",
    },
    {
      title: "Green agendas without teeth",
      body: "Municipalities and corporations want to aggressively downsize square footage for sustainability targets, but facility managers lack the hard occupancy data needed to justify those proposals to sceptical leadership.",
    },
    {
      title: "Office upgrades you can't measure",
      body: "To incentivise office attendance, companies invest in silent zones, standing rooms and project walls, but without tracking, you have no baseline for which layouts actually drive attendance and which ones waste budget.",
    },
  ],
  capabilitiesEyebrow: "How RoomAlyzer solves it",
  capabilitiesHeading: "Occupancy data tailored to how people work, deployed securely from day one.",
  solutionLead:
    "RoomAlyzer Space management uses plug-and-play Desk and Motion sensors to give you a live, entirely anonymised and GDPR-compliant overview of workspace dynamics, built for facility managers, space planners, corporate leadership and municipalities.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Space management uses plug-and-play " },
    { type: "sensor", slug: "desk", label: "Desk" },
    { type: "text", value: " and " },
    { type: "sensor", slug: "motion", label: "Motion" },
    {
      type: "text",
      value:
        " sensors to give you a live, entirely anonymised and GDPR-compliant overview of workspace dynamics, built for facility managers, space planners, corporate leadership and municipalities. ",
    },
    { type: "compare", label: "Compare hybrid office sensors", useCaseId: "hybrid-office" },
  ],
  capabilitiesContextAlt:
    "Facility team reviewing live desk occupancy on a wall display",
  features: [
    {
      id: "desks",
      title: "Desks & zone tagging",
      body: "Don't just count heads: tag and compare how departments use their home zones versus shared project spaces, and make data-driven layout changes based on how teams actually interact with your real estate.",
      bodyWithSensorLinks: [
        { type: "text", value: "The " },
        { type: "sensor", slug: "desk", label: "Desk" },
        { type: "text", value: " and " },
        { type: "sensor", slug: "motion", label: "Motion" },
        {
          type: "text",
          value:
            " sensors let you tag and compare how departments use their home zones versus shared project spaces, so you can make data-driven layout changes, not just count heads.",
        },
      ],
      unit: "Tagging",
      imageAlt: "RoomAlyzer floor plan showing department and zone tagging",
    },
    {
      id: "meeting-rooms",
      title: "Meeting rooms & smart release",
      body: "Close the calendar gap between bookings and actual use. Unused bookings release the room automatically, integrated with Google, Microsoft 365 and Pronestor to free ghost bookings when a room stays empty.",
      unit: "Smart release",
      imageAlt: "Meeting room booking versus actual utilisation in RoomAlyzer",
    },
    {
      id: "heatmaps",
      title: "Intuitive heat maps",
      body: "Move past dense, confusing spreadsheets. Heat maps translate raw occupancy into scannable visual trends: see a week's underutilisation or peak occupancy across entire floors at a glance.",
      unit: "Trends",
      imageAlt: "Occupancy heat map across a floor plan in RoomAlyzer",
    },
    {
      id: "savings",
      title: "Energy & cleaning savings",
      body: "Manage facilities on reality, not policy. See when occupancy drops on Mondays and Fridays or across whole zones, so you can align heating, ventilation and cleaning with actual use instead of fixed schedules. A documented Dansk Industri case: 1M DKK infrastructure investment yielding up to 1.5M DKK in direct energy and operational savings within year one.",
      bodyWithSensorLinks: [
        {
          type: "text",
          value:
            "Manage facilities on reality, not policy. See when occupancy drops on Mondays and Fridays or across whole zones, so you can align heating, ventilation and cleaning with actual use instead of fixed schedules. ",
        },
        { type: "caseStudy", slug: "dansk-industri", label: "A documented Dansk Industri case" },
        {
          type: "text",
          value:
            ": 1M DKK infrastructure investment yielding up to 1.5M DKK in direct energy and operational savings within year one.",
        },
      ],
      unit: "ROI",
      imageAlt: "RoomAlyzer savings dashboard showing energy and operational ROI",
    },
  ],
  smarterTogetherLabel: "Smarter together",
  smarterTogetherHeadline: "Occupancy, indoor climate and compliance in one view",
  smarterTogether:
    "RoomAlyzer pairs space utilisation with indoor climate (CO₂, temperature and humidity) so you ventilate for actual headcount and dial back when rooms are empty.",
  smarterTogetherOccupancyLabel: "Space utilisation",
  smarterTogetherOccupancyContext: "Open plan · Floor 3",
  smarterTogetherOccupancyStat: "62% occupied",
  smarterTogetherClimateLabel: "Indoor climate",
  smarterTogetherClimateContext: "Meeting room A",
  smarterTogetherIndoorClimateLink: "Explore indoor climate",
  audiencesEyebrow: "Who it's for",
  audiencesHeading: "For workplace and facilities teams, and the leadership that approves the numbers.",
  audiencesLead:
    "Workplace and facility functions are merging into unified teams. RoomAlyzer gives workplace and facilities managers the hard data to build an internal case, and gives senior management the proof to approve budget and consolidation.",
  fmHeading: "For workplace & facilities managers",
  fmItems: [
    "Build the occupancy business case management expects before space or budget changes",
    "Run day-to-day operations with live desk, room and zone data",
    "Replace opinions with hard metrics as workplace and facility roles converge",
  ],
  realEstateHeading: "For senior management & building owners",
  realEstateItems: [
    "Approve consolidation, downsizing and rent decisions with documented spare capacity",
    "Turn sustainability targets into verifiable energy and rent savings",
    "Allocate department space with objective usage metrics, not politics",
  ],
  faqTitle: "Frequently asked questions",
  faqContextAlt: "Colleagues discussing plans around a meeting table",
  faqItems: [
    {
      q: "How do occupancy sensors work without identifying people?",
      a: "Data is 100% anonymous and fully GDPR-compliant. The system tracks movement and occupancy dynamics, never individuals: no cameras, no badges, no personal data.",
    },
    {
      q: "Can we automatically release no-show meetings?",
      a: "Yes. RoomAlyzer integrates with your calendar systems to automatically free ghost bookings when a room remains empty after a grace period.",
    },
    {
      q: "How accurate is the occupancy detection?",
      a: "Detection is powered by fine-tuned environment scenarios and AI reporting. Sensors are pre-configured before deployment so you get reliable utilisation data from day one.",
    },
    {
      q: "How does it impact our IT security?",
      a: "Zero impact on your corporate network. The infrastructure is completely isolated, WiFi-free and cellular-backed, with no network configuration required.",
    },
  ],
  ctaTitle: "Want to see it for yourself?",
  ctaSubtitle:
    "Book a demo. See how occupancy data turns into energy and operational savings. RoomAlyzer installs in minutes and adapts as your workplace changes.",
  ctaMicrocopy: "Installs in minutes · adapts as your workplace changes",
};

const da: SpaceManagementStrings = {
  metaTitle: "Space management: belægningssensorer og data | IoT Fabrikken",
  metaDescription:
    "Optimér kontoromkostninger og medarbejdertrivsel med trådløse belægningssensorer til skriveborde og mødelokaler. Se reel udnyttelse, løs spøgelsesbookinger, og omsæt arealdata til besparelser på husleje og energi.",
  breadcrumbHome: "Hjem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Space management",
  heroTitle: "Optimér kontoromkostninger og medarbejdertrivsel,",
  heroTitleAccent: "med space management bygget på reel brug.",
  heroLead:
    "Live belægning af skriveborde og lokaler, der omsætter gætterier til besparelser på husleje og energi — og giver medarbejderne en arbejdsplads, det er værd at møde op på.",
  heroTitleImageAlt: "Hånd, der monterer en RoomAlyzer Space desk-sensor under et kontorskrivebord",
  intro: [
    "Facility management handler ikke længere kun om skriveborde og indeklima. Det handler om at navigere et menneskeligt dilemma mellem fleksibilitet og fysisk tilstedeværelse. Medarbejdere pendler ikke længere af vane; arbejdspladsen skal levere tydelig værdi. Udfordringen er at løfte medarbejderoplevelsen, mens spild presses mod nul: et skift fra at tælle hoveder til at optimere, hvordan mennesker faktisk bruger kontoret.",
  ],
  heroPrimaryCta: "Book en gratis demo",
  heroSecondaryCta: "Få et tilbud",
  dashboardLabel: "RoomAlyzer: Space management",
  dashboardAlt: "RoomAlyzer Space management-dashboard med skrivebordsbelægning, tendenser og udnyttelse",
  challengesEyebrow: "Udfordringerne, I faktisk står med",
  challengesHeading:
    "Uden live udnyttelsesdata er enhver beslutning om areal, omkostninger og arbejdsplads et gæt.",
  challenges: [
    {
      title: "Illusionen om fuldt booket",
      body: "Mødelokaler ser fuldt booket ud i kalenderen, men står tomme – eller er booket til ti og brugt af to. Uden realtidsdata overser du den skjulte kapacitet, der kunne rumme en hel ekstra afdeling.",
    },
    {
      title: "Politik vs. virkelighed",
      body: "Ledelsen kan kræve en fem-dages kontoruge, men teamlederne giver fortsat undtagelser. Kontorerne topper midt på ugen, mens skrivebordene står tomme mandag og fredag – og du betaler for fuld opvarmning, køling og rengøring uge efter uge.",
    },
    {
      title: "Grønne dagsordener uden substans",
      body: "Kommuner og virksomheder vil aggressivt nedjustere kvadratmeter for bæredygtighedsmål — men facility managers mangler den hårde belægningsdata, der skal til for at retfærdiggøre det over for skeptisk ledelse.",
    },
    {
      title: "Kontorforbedringer I ikke kan måle",
      body: "For at give medarbejderne lyst til at komme på kontoret investerer virksomheder i stillezoner, ståpladser og projektvægge – men uden data har du intet udgangspunkt for at vide, hvilke indretninger der rent faktisk får folk til at møde op, og hvilke der spilder budgettet.",
    },
  ],
  capabilitiesEyebrow: "Sådan løser RoomAlyzer det",
  capabilitiesHeading: "Belægningsdata tilpasset, hvordan mennesker arbejder — sikkert deployet fra dag ét.",
  solutionLead:
    "RoomAlyzer Space management bruger plug-and-play Desk- og Motion-sensorer til et live, fuldt anonymiseret og GDPR-compliant overblik over arbejdspladsens dynamik — bygget til facility managers, arealplanlæggere, ledelse og kommuner.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Space management bruger plug-and-play " },
    { type: "sensor", slug: "desk", label: "Desk" },
    { type: "text", value: " og " },
    { type: "sensor", slug: "motion", label: "Motion" },
    {
      type: "text",
      value:
        "-sensorer til et live, fuldt anonymiseret og GDPR-compliant overblik over arbejdspladsens dynamik — bygget til facility managers, arealplanlæggere, ledelse og kommuner. ",
    },
    { type: "compare", label: "Sammenlign hybridkontorsensorer", useCaseId: "hybrid-office" },
  ],
  capabilitiesContextAlt:
    "Facility-team der gennemgår live skrivebordsbelægning på en vægmonteret skærm",
  features: [
    {
      id: "desks",
      title: "Skriveborde og zonetagging",
      body: "Tæl ikke bare hoveder — tag og sammenlign, hvordan afdelinger bruger deres hjemmezoner versus fælles projektarealer, og lav datadrevne layoutændringer baseret på, hvordan teams faktisk bruger jeres ejendom.",
      bodyWithSensorLinks: [
        { type: "text", value: "Sensoren " },
        { type: "sensor", slug: "desk", label: "Desk" },
        { type: "text", value: " og " },
        { type: "sensor", slug: "motion", label: "Motion" },
        {
          type: "text",
          value:
            " lader jer tagge og sammenligne, hvordan afdelinger bruger deres hjemmezoner versus fælles projektarealer — så I kan lave datadrevne layoutændringer, ikke bare tælle hoveder.",
        },
      ],
      unit: "Tagging",
      imageAlt: "RoomAlyzer-plantegning med afdelings- og zonetagging",
    },
    {
      id: "meeting-rooms",
      title: "Mødelokaler og smart release",
      body: "Luk kalenderhullet mellem bookinger og faktisk brug. Ubrugte bookinger frigiver lokalet automatisk — integreret med Google, Microsoft 365 og Pronestor, så spøgelsesbookinger frigives, når et lokale står tomt.",
      unit: "Smart release",
      imageAlt: "Mødelokalebooking versus faktisk udnyttelse i RoomAlyzer",
    },
    {
      id: "heatmaps",
      title: "Intuitive heatmaps",
      body: "Slip for tætpakkede, uoverskuelige regneark. Heatmaps omsætter rå belægning til visuelle mønstre, du kan skimme – se en uges underudnyttelse eller spidsbelastning på tværs af hele etager med ét blik.",
      unit: "Tendenser",
      imageAlt: "Belægningsheatmap på en plantegning i RoomAlyzer",
    },
    {
      id: "savings",
      title: "Energi- og rengøringsbesparelser",
      body: "Styr driften efter virkeligheden, ikke efter politik. Se, hvornår belægningen falder mandag og fredag eller på tværs af zoner, så du kan tilpasse opvarmning, ventilation og rengøring til faktisk brug i stedet for faste planer. En dokumenteret case fra Dansk Industri: 1 mio. kr. i infrastruktur giver op til 1,5 mio. kr. i direkte energi- og driftsbesparelser inden for det første år.",
      bodyWithSensorLinks: [
        {
          type: "text",
          value:
            "Styr faciliteter efter virkelighed, ikke politik. Se, hvornår belægningen falder mandag og fredag eller på tværs af zoner, så I kan tilpasse opvarmning, ventilation og rengøring til faktisk brug i stedet for faste planer. ",
        },
        { type: "caseStudy", slug: "dansk-industri", label: "Et dokumenteret Dansk Industri-case" },
        {
          type: "text",
          value:
            ": 1 mio. kr. i infrastruktur giver op til 1,5 mio. kr. i direkte energi- og driftsbesparelser inden for det første år.",
        },
      ],
      unit: "ROI",
      imageAlt: "RoomAlyzer-dashboard med energi- og drifts-ROI",
    },
  ],
  smarterTogetherLabel: "Smartere sammen",
  smarterTogetherHeadline: "Belægning, indeklima og compliance i ét overblik",
  smarterTogether:
    "RoomAlyzer kombinerer arealudnyttelse med indeklima (CO₂, temperatur og luftfugtighed), så du ventilerer efter det faktiske antal mennesker og skruer ned, når lokalerne står tomme.",
  smarterTogetherOccupancyLabel: "Arealudnyttelse",
  smarterTogetherOccupancyContext: "Åbent kontor · 3. sal",
  smarterTogetherOccupancyStat: "62 % belagt",
  smarterTogetherClimateLabel: "Indeklima",
  smarterTogetherClimateContext: "Mødelokale A",
  smarterTogetherIndoorClimateLink: "Se indeklima-modulet",
  audiencesEyebrow: "Hvem det er til",
  audiencesHeading: "Til workplace- og facility-teams, og den ledelse, der godkender tallene.",
  audiencesLead:
    "Workplace- og facility-funktioner smelter sammen i samlede teams. RoomAlyzer giver workplace- og facility managers de hårde data til at bygge en intern business case — og giver ledelsen dokumentation til at godkende budget og konsolidering.",
  fmHeading: "Til workplace- og facility managers",
  fmItems: [
    "Byg den belægnings-business case, ledelsen forventer, før der ændres på areal eller budget",
    "Kør daglig drift med live data om skriveborde, lokaler og zoner",
    "Erstat holdninger med hårde tal, efterhånden som workplace- og facility-roller smelter sammen",
  ],
  realEstateHeading: "Til ledelse og bygningsejere",
  realEstateItems: [
    "Godkend konsolidering, nedskalering og lejeændringer med dokumenteret ledig kapacitet",
    "Omsæt bæredygtighedsmål til verificerbare besparelser på energi og husleje",
    "Fordel afdelingsarealer med objektive brugstal, ikke politik",
  ],
  faqTitle: "Ofte stillede spørgsmål",
  faqContextAlt: "Kolleger, der diskuterer planer omkring et mødebord",
  faqItems: [
    {
      q: "Hvordan fungerer belægningssensorer uden at identificere personer?",
      a: "Data er 100 % anonyme og fuldt GDPR-compliant. Systemet registrerer bevægelse og belægningsdynamik, aldrig enkeltpersoner — ingen kameraer, ingen badges, ingen persondata.",
    },
    {
      q: "Kan vi automatisk frigive møder, hvor ingen dukker op?",
      a: "Ja. RoomAlyzer integrerer med dine kalendersystemer og frigiver automatisk spøgelsesbookinger, når et lokale står tomt efter en kort frist.",
    },
    {
      q: "Hvor præcis er belægningsdetektionen?",
      a: "Detektionen drives af finjusterede miljøscenarier og AI-rapportering. Sensorerne prækonfigureres før udrulning, så du får pålidelige udnyttelsesdata fra dag ét.",
    },
    {
      q: "Hvordan påvirker det vores IT-sikkerhed?",
      a: "Ingen påvirkning af dit virksomhedsnetværk. Infrastrukturen er fuldt isoleret, Wi-Fi-fri og mobildrevet – ingen netværkskonfiguration nødvendig.",
    },
  ],
  ctaTitle: "Vil du selv se det?",
  ctaSubtitle:
    "Book en demo. Se, hvordan belægningsdata omsættes til energi- og driftsbesparelser — RoomAlyzer installeres på minutter og tilpasser sig, når arbejdspladsen ændrer sig.",
  ctaMicrocopy: "Installeres på minutter · tilpasser sig, når arbejdspladsen ændrer sig",
};

const de: SpaceManagementStrings = {
  metaTitle: "Space-Management: Belegungssensoren und Daten | IoT Fabrikken",
  metaDescription:
    "Optimieren Sie Bürokosten und das Wohlbefinden Ihrer Mitarbeitenden mit drahtlosen Belegungssensoren für Arbeitsplätze und Besprechungsräume. Sehen Sie reale Nutzung, lösen Sie Geisterbuchungen und setzen Sie Flächendaten in Miet- und Energieeinsparungen um.",
  breadcrumbHome: "Startseite",
  breadcrumbModules: "Module",
  breadcrumbCurrent: "Space-Management",
  heroTitle: "Bürokosten optimieren und Mitarbeitendenwohlbefinden stärken,",
  heroTitleAccent: "mit Space-Management auf Basis realer Nutzung.",
  heroLead:
    "Echte Auslastungsdaten statt vager Schätzungen: Senken Sie Miet- sowie Energiekosten spürbar und bieten Sie Ihren Teams eine moderne Arbeitsumgebung, in die man gerne kommt.",
  heroTitleImageAlt: "Hand, die einen RoomAlyzer Space Desk unter einem Bürotisch anbringt",
  intro: [
    "Modernes Facility Management umfasst weit mehr als die reine Bereitstellung von Arbeitsplätzen und Raumklima. Es bewegt sich im Spannungsfeld zwischen maximaler Flexibilität und physischer Präsenz. Mitarbeitende pendeln heute nicht mehr aus reiner Gewohnheit ins Büro – der Arbeitsplatz muss einen klaren Mehrwert bieten. Die große Herausforderung lautet: Das Mitarbeitererlebnis spürbar zu verbessern und gleichzeitig Ressourcenverschwendung konsequent zu minimieren. Der Schlüssel dazu liegt im Wechsel von starren Mitarbeiterzahlen hin zur präzisen Optimierung der tatsächlichen Nutzung.",
  ],
  heroPrimaryCta: "Kostenlose Demo buchen",
  heroSecondaryCta: "Angebot anfordern",
  dashboardLabel: "RoomAlyzer: Space-Management",
  dashboardAlt: "RoomAlyzer Space-Management-Dashboard mit Arbeitsplatzbelegung, Trends und Nutzung",
  challengesEyebrow: "Die Herausforderungen, denen Sie wirklich begegnen",
  challengesHeading:
    "Ohne Live-Nutzungsdaten bleibt jede Entscheidung zu Fläche, Kosten und Arbeitsplatz reines Rätselraten.",
  challenges: [
    {
      title: "Die Illusion der vollen Auslastung",
      body: "Besprechungsräume wirken im Kalender vollständig blockiert, stehen aber leer oder sind für zehn gebucht und von zweien genutzt. Ohne Echtzeitdaten übersehen Sie die versteckte Reserve, die eine ganze zusätzliche Abteilung aufnehmen könnte.",
    },
    {
      title: "Politik vs. Realität",
      body: "Die Unternehmensleitung kann zwar eine Präsenzwoche anordnen, doch in der Praxis machen Teamleiter oft Ausnahmen. <strong>Die Folge:</strong> Volle Büros zur Wochenmitte, leere Schreibtische an den Randtagen – bei durchgehend vollen Betriebs- und Reinigungskosten.",
    },
    {
      title: "Grüne Agenda ohne Substanz",
      body: "Kommunen und Unternehmen wollen Fläche aggressiv reduzieren, um Nachhaltigkeitsziele zu erreichen — aber Facility Managern fehlen die belastbaren Belegungsdaten, um diese Vorschläge skeptischer Führung zu rechtfertigen.",
    },
    {
      title: "Büro-Upgrades, die Sie nicht messen können",
      body: "Um Büropräsenz zu fördern, investieren Unternehmen in Ruhezonen, Stehräume und Projektwände — aber ohne Tracking fehlt jede Basis, welche Layouts Anwesenheit fördern und welche Budget verschwenden.",
    },
  ],
  capabilitiesEyebrow: "So löst RoomAlyzer das",
  capabilitiesHeading: "Belegungsdaten, angepasst an die Art, wie Menschen arbeiten — sicher ab Tag eins.",
  solutionLead:
    "RoomAlyzer Space-Management nutzt die Plug-and-Play-Sensoren Desk und Motion für einen anonymisierten, DSGVO-konformen Echtzeit-Überblick über die Arbeitsplatzdynamik – entwickelt für Facility Manager, Flächenplaner, Führungskräfte und Kommunen.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Space-Management nutzt Plug-and-Play-" },
    { type: "sensor", slug: "desk", label: "Desk" },
    { type: "text", value: " und " },
    { type: "sensor", slug: "motion", label: "Motion" },
    {
      type: "text",
      value:
        "-Sensoren für einen live, vollständig anonymisierten und DSGVO-konformen Überblick über Arbeitsplatzdynamik — entwickelt für Facility Manager, Flächenplaner, Führungskräfte und Kommunen. ",
    },
    { type: "compare", label: "Hybrid-Office-Sensoren vergleichen", useCaseId: "hybrid-office" },
  ],
  capabilitiesContextAlt:
    "Facility-Team prüft die Live-Belegung von Arbeitsplätzen auf einem Wanddisplay",
  features: [
    {
      id: "desks",
      title: "Arbeitsplätze und Zonen-Tagging",
      body: "Zählen Sie nicht nur Köpfe — taggen und vergleichen Sie, wie Abteilungen ihre Heimzonen versus gemeinsame Projektbereiche nutzen und treffen Sie datengestützte Layout-Entscheidungen nach tatsächlicher Nutzung.",
      bodyWithSensorLinks: [
        { type: "text", value: "Die Sensoren " },
        { type: "sensor", slug: "desk", label: "Desk" },
        { type: "text", value: " und " },
        { type: "sensor", slug: "motion", label: "Motion" },
        {
          type: "text",
          value:
            " ermöglichen Tagging und Vergleich, wie Abteilungen ihre Heimzonen versus gemeinsame Projektbereiche nutzen — für datengestützte Layout-Entscheidungen statt bloßem Köpfezählen.",
        },
      ],
      unit: "Tagging",
      imageAlt: "RoomAlyzer-Grundriss mit Abteilungs- und Zonen-Tagging",
    },
    {
      id: "meeting-rooms",
      title: "Besprechungsräume und Smart Release",
      body: "Schließen Sie die Kalenderlücke zwischen Buchung und tatsächlicher Nutzung. Ungenutzte Buchungen geben den Raum automatisch frei — integriert mit Google, Microsoft 365 und Pronestor, um Geisterbuchungen freizugeben, wenn ein Raum leer bleibt.",
      unit: "Smart Release",
      imageAlt: "Besprechungsraumbuchung versus tatsächliche Nutzung in RoomAlyzer",
    },
    {
      id: "heatmaps",
      title: "Intuitive Heatmaps",
      body: "Weg von dichten, verwirrenden Tabellen. Heatmaps übersetzen Rohbelegung in scannbare visuelle Trends — sehen Sie eine Woche Unterauslastung oder Spitzenbelegung über ganze Etagen auf einen Blick.",
      unit: "Trends",
      imageAlt: "Belegungs-Heatmap auf einem Grundriss in RoomAlyzer",
    },
    {
      id: "savings",
      title: "Energie- und Reinigungseinsparungen",
      body: "Steuern Sie Gebäude nach Realität, nicht nach Policy. Erkennen Sie, wann die Belegung montags und freitags oder in ganzen Zonen sinkt und passen Sie Heizung, Lüftung und Reinigung an die tatsächliche Nutzung statt an feste Pläne an. Ein dokumentierter Dansk Industri-Fall: 1 Mio. DKK Infrastruktur mit bis zu 1,5 Mio. DKK direkten Energie- und Betriebseinsparungen im ersten Jahr.",
      bodyWithSensorLinks: [
        {
          type: "text",
          value:
            "Steuern Sie Gebäude nach Realität, nicht nach Policy. Erkennen Sie, wann die Belegung montags und freitags oder in ganzen Zonen sinkt und passen Sie Heizung, Lüftung und Reinigung an die tatsächliche Nutzung statt an feste Pläne an. ",
        },
        { type: "caseStudy", slug: "dansk-industri", label: "Ein dokumentierter Dansk Industri-Fall" },
        {
          type: "text",
          value:
            ": 1 Mio. DKK Infrastruktur mit bis zu 1,5 Mio. DKK direkten Energie- und Betriebseinsparungen im ersten Jahr.",
        },
      ],
      unit: "ROI",
      imageAlt: "RoomAlyzer-Einsparungsdashboard mit Energie- und Betriebs-ROI",
    },
  ],
  smarterTogetherLabel: "Smarter zusammen",
  smarterTogetherHeadline: "Belegung, Raumklima und Compliance in einer Ansicht",
  smarterTogether:
    "RoomAlyzer kombiniert Flächennutzung mit Raumklima (CO₂, Temperatur und Luftfeuchtigkeit), damit Sie für tatsächliche Kopfzahl lüften und drosseln, wenn Räume leer sind.",
  smarterTogetherOccupancyLabel: "Flächennutzung",
  smarterTogetherOccupancyContext: "Open Space · Etage 3",
  smarterTogetherOccupancyStat: "62 % belegt",
  smarterTogetherClimateLabel: "Raumklima",
  smarterTogetherClimateContext: "Besprechungsraum A",
  smarterTogetherIndoorClimateLink: "Raumklima-Modul entdecken",
  audiencesEyebrow: "Für wen",
  audiencesHeading: "Für Workplace- und Facility-Teams — und die Führung, die die Zahlen freigibt.",
  audiencesLead:
    "Workplace- und Facility-Funktionen verschmelzen zu gemeinsamen Teams. RoomAlyzer liefert Workplace- und Facility-Managern belastbare Daten für den internen Business Case — und der Geschäftsführung den Nachweis für Budget- und Konsolidierungsentscheidungen.",
  fmHeading: "Für Workplace- und Facility-Manager",
  fmItems: [
    "Den Belegungs-Business Case aufbauen, den die Führung vor Flächen- oder Budgetänderungen erwartet",
    "Den Tagesbetrieb mit Live-Daten zu Arbeitsplätzen, Räumen und Zonen steuern",
    "Meinungen durch belastbare Kennzahlen ersetzen, während Workplace- und Facility-Rollen zusammenwachsen",
  ],
  realEstateHeading: "Für Geschäftsführung und Gebäudeeigentümer",
  realEstateItems: [
    "Konsolidierung, Verkleinerung und Mietentscheidungen mit dokumentierter freier Kapazität freigeben",
    "Nachhaltigkeitsziele in nachweisbare Energie- und Mieteinsparungen umsetzen",
    "Abteilungsflächen mit objektiven Nutzungsmetriken statt Politik verteilen",
  ],
  faqTitle: "Häufig gestellte Fragen",
  faqContextAlt: "Kollegen besprechen Pläne an einem Besprechungstisch",
  faqItems: [
    {
      q: "Wie funktionieren Belegungssensoren, ohne Personen zu identifizieren?",
      a: "Daten sind 100 % anonym und vollständig DSGVO-konform. Das System erfasst Bewegung und Belegungsdynamik, niemals Einzelpersonen — keine Kameras, keine Badges, keine personenbezogenen Daten.",
    },
    {
      q: "Können wir No-Show-Meetings automatisch freigeben?",
      a: "Ja. RoomAlyzer integriert sich in Ihre Kalendersysteme und gibt Geisterbuchungen automatisch frei, wenn ein Raum nach einer Kulanzzeit leer bleibt.",
    },
    {
      q: "Wie genau ist die Belegungserkennung?",
      a: "Die Erkennung basiert auf fein abgestimmten Umgebungsszenarien und KI-Reporting. Sensoren werden vor dem Rollout vorkonfiguriert, damit Sie ab Tag eins verlässliche Nutzungsdaten erhalten.",
    },
    {
      q: "Wie wirkt sich das auf unsere IT-Sicherheit aus?",
      a: "Null Auswirkung auf Ihr Unternehmensnetzwerk. Die Infrastruktur ist vollständig isoliert, WiFi-frei und mobilfunkbasiert — keine Netzwerkkonfiguration nötig.",
    },
  ],
  ctaTitle: "Möchten Sie es selbst sehen?",
  ctaSubtitle:
    "Buchen Sie eine Demo. Sehen Sie, wie Belegungsdaten in Energie- und Betriebseinsparungen werden — RoomAlyzer ist in Minuten installiert und passt sich an, wenn sich Ihr Arbeitsplatz verändert.",
  ctaMicrocopy: "In Minuten installiert · passt sich an, wenn sich Ihr Arbeitsplatz verändert",
};

const sv: SpaceManagementStrings = {
  metaTitle: "Space management: beläggningssensorer och data | IoT Fabrikken",
  metaDescription:
    "Optimera kontorskostnader och medarbetarnas välbefinnande med trådlösa beläggningssensorer för skrivbord och mötesrum. Se verkligt utnyttjande, lösa spökbookningar och omvandla ytdata till besparingar på hyra och energi.",
  breadcrumbHome: "Hem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Space management",
  heroTitle: "Optimera kontorskostnader och medarbetarnas välbefinnande,",
  heroTitleAccent: "med space management byggt på verklig användning.",
  heroLead:
    "Live beläggning av skrivbord och rum som omvandlar gissningar till hyres- och energibesparingar — och ger medarbetare en arbetsplats värd att dyka upp på.",
  heroTitleImageAlt: "Hand som monterar en RoomAlyzer Space desk-sensor under ett kontorsskrivbord",
  intro: [
    "Facility management handlar inte längre bara om skrivbord och inomhusklimat. Det handlar om att navigera ett mänskligt dilemma mellan flexibilitet och fysisk närvaro. Medarbetare pendlar inte längre av vana; arbetsplatsen måste leverera tydligt värde. Utmaningen är att höja medarbetarupplevelsen samtidigt som slöseri pressas mot noll: ett skifte från att räkna huvuden till att optimera hur människor faktiskt använder kontoret.",
  ],
  heroPrimaryCta: "Boka en gratis demo",
  heroSecondaryCta: "Få en offert",
  dashboardLabel: "RoomAlyzer: Space management",
  dashboardAlt: "RoomAlyzer Space management-dashboard med skrivbordsbeläggning, trender och utnyttjande",
  challengesEyebrow: "Utmaningarna ni faktiskt står inför",
  challengesHeading:
    "Utan live utnyttjandedata är varje beslut om yta, kostnad och arbetsplats en gissning.",
  challenges: [
    {
      title: "Illusionen om fullbokat",
      body: "Mötesrum ser helt blockerade ut i kalendern men står tomma — eller är bokade för tio och använda av två. Utan realtidsdata missar ni den dolda kapacitet som skulle rymma en hel extra avdelning.",
    },
    {
      title: "Policy vs. verklighet",
      body: "Ledningen kan kräva en femdagars kontorsvecka, men teamledare ger fortfarande undantag. Kontor toppar mitt i veckan medan skrivbord står tomma måndag och fredag — och ni betalar för full uppvärmning, kylning och städning vecka efter vecka.",
    },
    {
      title: "Gröna agenda utan substans",
      body: "Kommuner och företag vill aggressivt minska kvadratmeter för hållbarhetsmål — men facility managers saknar den hårda beläggningsdata som krävs för att motivera det inför skeptisk ledning.",
    },
    {
      title: "Kontorsförbättringar ni inte kan mäta",
      body: "För att locka kontorsnärvaro investerar företag i tysta zoner, stående rum och projektväggar — men utan spårning finns ingen baslinje för vilka layouter som driver närvaro och vilka som slösar budget.",
    },
  ],
  capabilitiesEyebrow: "Så löser RoomAlyzer det",
  capabilitiesHeading: "Beläggningsdata anpassad till hur människor arbetar — säkert driftsatt från dag ett.",
  solutionLead:
    "RoomAlyzer Space management använder plug-and-play Desk- och Motion-sensorer för en live, helt anonymiserad och GDPR-kompatibel överblick över arbetsplatsens dynamik — byggd för facility managers, ytplanerare, ledning och kommuner.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Space management använder plug-and-play " },
    { type: "sensor", slug: "desk", label: "Desk" },
    { type: "text", value: " och " },
    { type: "sensor", slug: "motion", label: "Motion" },
    {
      type: "text",
      value:
        "-sensorer för en live, helt anonymiserad och GDPR-kompatibel överblick över arbetsplatsens dynamik — byggd för facility managers, ytplanerare, ledning och kommuner. ",
    },
    { type: "compare", label: "Jämför hybridkontorssensorer", useCaseId: "hybrid-office" },
  ],
  capabilitiesContextAlt:
    "Facility-team som granskar live skrivbordsbeläggning på en väggmonterad skärm",
  features: [
    {
      id: "desks",
      title: "Skrivbord och zonmärkning",
      body: "Räkna inte bara huvuden — märk och jämför hur avdelningar använder sina hemzoner versus gemensamma projektytor, och gör datadrivna layoutändringar baserat på hur team faktiskt använder er fastighet.",
      bodyWithSensorLinks: [
        { type: "text", value: "Sensorerna " },
        { type: "sensor", slug: "desk", label: "Desk" },
        { type: "text", value: " och " },
        { type: "sensor", slug: "motion", label: "Motion" },
        {
          type: "text",
          value:
            " låter er märka och jämföra hur avdelningar använder sina hemzoner versus gemensamma projektytor — för datadrivna layoutändringar, inte bara huvudräkning.",
        },
      ],
      unit: "Tagging",
      imageAlt: "RoomAlyzer-planlösning med avdelnings- och zonmärkning",
    },
    {
      id: "meeting-rooms",
      title: "Mötesrum och smart release",
      body: "Stäng kalendergapet mellan bokningar och faktisk användning. Oanvända bokningar frigör rummet automatiskt — integrerat med Google, Microsoft 365 och Pronestor för att frigöra spökbookningar när ett rum står tomt.",
      unit: "Smart release",
      imageAlt: "Mötesrumsbokning versus faktiskt utnyttjande i RoomAlyzer",
    },
    {
      id: "heatmaps",
      title: "Intuitiva heatmaps",
      body: "Lägg de täta, förvirrande kalkylbladen bakom er. Heatmaps omvandlar rå beläggning till skannbara visuella trender — se en veckas underutnyttjande eller topputnyttjande över hela våningar med ett ögonkast.",
      unit: "Trender",
      imageAlt: "Beläggningsheatmap på en planlösning i RoomAlyzer",
    },
    {
      id: "savings",
      title: "Energi- och städbesparingar",
      body: "Styr lokaler efter verklighet, inte policy. Se när beläggningen sjunker måndag och fredag eller i hela zoner, så ni kan anpassa uppvärmning, ventilation och städning till faktisk användning i stället för fasta scheman. Ett dokumenterat Dansk Industri-case: 1 M DKK i infrastruktur ger upp till 1,5 M DKK i direkta energi- och driftsbesparingar inom det första året.",
      bodyWithSensorLinks: [
        {
          type: "text",
          value:
            "Styr lokaler efter verklighet, inte policy. Se när beläggningen sjunker måndag och fredag eller i hela zoner, så ni kan anpassa uppvärmning, ventilation och städning till faktisk användning i stället för fasta scheman. ",
        },
        { type: "caseStudy", slug: "dansk-industri", label: "Ett dokumenterat Dansk Industri-case" },
        {
          type: "text",
          value:
            ": 1 M DKK i infrastruktur ger upp till 1,5 M DKK i direkta energi- och driftsbesparingar inom det första året.",
        },
      ],
      unit: "ROI",
      imageAlt: "RoomAlyzer-dashboard med energi- och drifts-ROI",
    },
  ],
  smarterTogetherLabel: "Smartare tillsammans",
  smarterTogetherHeadline: "Beläggning, inomhusklimat och compliance i en vy",
  smarterTogether:
    "RoomAlyzer kombinerar ytanvändning med inomhusklimat (CO₂, temperatur och luftfuktighet) så att ni ventilerar efter faktisk headcount och drar ner när rum står tomma.",
  smarterTogetherOccupancyLabel: "Ytanvändning",
  smarterTogetherOccupancyContext: "Öppet kontor · Våning 3",
  smarterTogetherOccupancyStat: "62 % belagt",
  smarterTogetherClimateLabel: "Inomhusklimat",
  smarterTogetherClimateContext: "Mötesrum A",
  smarterTogetherIndoorClimateLink: "Utforska inomhusklimat",
  audiencesEyebrow: "Vem det är för",
  audiencesHeading: "För workplace- och facility-team — och ledningen som godkänner siffrorna.",
  audiencesLead:
    "Workplace- och facility-funktioner smälter samman i enhetliga team. RoomAlyzer ger workplace- och facility managers hårda data för internt business case — och ger ledningen bevis för budget- och konsolideringsbeslut.",
  fmHeading: "För workplace- och facility managers",
  fmItems: [
    "Bygg beläggnings-business caset ledningen förväntar sig innan yta eller budget ändras",
    "Driv vardagsdrift med live data om skrivbord, rum och zoner",
    "Ersätt åsikter med hårda siffror när workplace- och facility-roller sammanfaller",
  ],
  realEstateHeading: "För ledning och fastighetsägare",
  realEstateItems: [
    "Godkänn konsolidering, nedskalning och hyresbeslut med dokumenterad ledig kapacitet",
    "Omvandla hållbarhetsmål till verifierbara besparingar på energi och hyra",
    "Fördela avdelningsytor med objektiva användningsmått, inte politik",
  ],
  faqTitle: "Vanliga frågor",
  faqContextAlt: "Kolleger som diskuterar planer runt ett mötesbord",
  faqItems: [
    {
      q: "Hur fungerar beläggningssensorer utan att identifiera personer?",
      a: "Data är 100 % anonyma och fullt GDPR-kompatibla. Systemet spårar rörelse och beläggningsdynamik, aldrig individer — inga kameror, inga brickor, inga personuppgifter.",
    },
    {
      q: "Kan vi automatiskt frigöra möten där ingen dyker upp?",
      a: "Ja. RoomAlyzer integreras med era kalendersystem och frigör automatiskt spökbookningar när ett rum förblir tomt efter en respitperiod.",
    },
    {
      q: "Hur exakt är beläggningsdetekteringen?",
      a: "Detekteringen drivs av finjusterade miljöscenarier och AI-rapportering. Sensorer förskonfigureras före utrullning så att ni får pålitliga utnyttjandedata från dag ett.",
    },
    {
      q: "Hur påverkar det vår IT-säkerhet?",
      a: "Noll påverkan på ert företagsnätverk. Infrastrukturen är helt isolerad, WiFi-fri och mobilnätsbaserad — ingen nätverkskonfiguration krävs.",
    },
  ],
  ctaTitle: "Vill du se det själv?",
  ctaSubtitle:
    "Boka en demo. Se hur beläggningsdata blir energi- och driftsbesparingar — RoomAlyzer installeras på minuter och anpassar sig när arbetsplatsen förändras.",
  ctaMicrocopy: "Installeras på minuter · anpassar sig när arbetsplatsen förändras",
};

const dictionaries: Partial<Record<Lang, SpaceManagementStrings>> = { en, da, de, sv };

export function getSpaceManagement(lang: Lang): SpaceManagementStrings {
  return dictionaries[lang] ?? dictionaries[defaultLang]!;
}
