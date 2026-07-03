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
  metaTitle: "Space management — occupancy sensors and data | IoT Fabrikken",
  metaDescription:
    "Optimise office costs and employee well-being with wireless occupancy sensors for desks and meeting rooms. See real utilisation, fix ghost bookings, and turn space data into rent and energy savings.",
  breadcrumbHome: "Home",
  breadcrumbModules: "Modules",
  breadcrumbCurrent: "Space management",
  heroTitle: "Optimise office costs and employee well-being —",
  heroTitleAccent: "with space management built on real usage.",
  heroLead:
    "Live desk and room occupancy that turns calendar illusions and hybrid-policy guesswork into rent, energy and workplace decisions.",
  intro: [
    "Hybrid work means facility teams juggle employee experience and leadership decisions every day — who needs a desk right now, and whether you can downsize with proof. Without real-time occupancy data, both sides run on guesswork.",
  ],
  heroPrimaryCta: "Book a free demo",
  heroSecondaryCta: "Get an offer",
  dashboardLabel: "RoomAlyzer — Space management",
  dashboardAlt: "RoomAlyzer Space management dashboard showing desk occupancy, trends, and utilisation",
  challengesEyebrow: "The challenges you actually face",
  challengesHeading:
    "When you cannot see real-time utilisation, every real estate decision is a guess. Hybrid office policy says one thing; human behaviour says another.",
  challenges: [
    {
      title: "The \"fully booked\" illusion",
      body: "Meeting rooms look blocked in your calendar system, yet they stand empty — or are booked for ten and used by two. Without real data, you miss the hidden slack that could fit an entire additional department.",
    },
    {
      title: "Policy vs. reality",
      body: "Management may announce a mandatory five-day office week, but team leads make individual exceptions. Desks sit empty on Mondays and Fridays while you pay for full-scale heating, cooling and cleaning.",
    },
    {
      title: "Green agendas without teeth",
      body: "Municipalities and corporations want to downsize square footage to hit sustainability targets — but facility managers lack the bulletproof occupancy data needed to justify those proposals to leadership.",
    },
    {
      title: "Nursing the modern employee",
      body: "To incentivise office attendance, companies build silent zones, standing rooms and project walls — but without tracking, you have no idea which layouts actually drive attendance and which waste budget.",
    },
  ],
  capabilitiesEyebrow: "How RoomAlyzer solves it",
  capabilitiesHeading: "Occupancy data tailored to how people work — deployed securely from day one.",
  solutionLead:
    "RoomAlyzer Space management uses plug-and-play Desk and Motion sensors to give you a live, entirely anonymised overview of workspace dynamics — built for facility managers, space planners, corporate leadership and municipalities.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Space management uses plug-and-play " },
    { type: "sensor", slug: "desk", label: "Desk" },
    { type: "text", value: " and " },
    { type: "sensor", slug: "motion", label: "Motion" },
    {
      type: "text",
      value:
        " sensors to give you a live, entirely anonymised overview of workspace dynamics — built for facility managers, space planners, corporate leadership and municipalities. ",
    },
    { type: "compare", label: "Compare hybrid office sensors", useCaseId: "hybrid-office" },
  ],
  capabilitiesContextAlt:
    "Facility team reviewing live desk occupancy on a wall display",
  features: [
    {
      id: "desks",
      title: "Desks & zone tagging",
      body: "Don't just count heads — tag and compare how departments use their home zones versus shared project spaces. Understand exactly how your teams interact with your real estate.",
      bodyWithSensorLinks: [
        { type: "text", value: "The " },
        { type: "sensor", slug: "desk", label: "Desk" },
        { type: "text", value: " and " },
        { type: "sensor", slug: "motion", label: "Motion" },
        {
          type: "text",
          value:
            " sensors let you tag and compare how departments use their home zones versus shared project spaces — so you understand how teams interact with your real estate, not just how many people are present.",
        },
      ],
      unit: "Tagging",
      imageAlt: "RoomAlyzer floor plan showing department and zone tagging",
    },
    {
      id: "meeting-rooms",
      title: "Meeting rooms & smart release",
      body: "Compare bookings to actual use and close the gap that blocks your calendar. Unused bookings can release the room automatically — integrated with Google, Microsoft 365 and Pronestor.",
      unit: "Smart release",
      imageAlt: "Meeting room booking versus actual utilisation in RoomAlyzer",
    },
    {
      id: "heatmaps",
      title: "Intuitive heat maps",
      body: "Move past dense spreadsheets. Heat maps translate raw occupancy into scannable visual trends — see a week's worth of underutilisation or peak occupancy across entire floors at a glance.",
      unit: "Trends",
      imageAlt: "Occupancy heat map across a floor plan in RoomAlyzer",
    },
    {
      id: "savings",
      title: "Energy & cleaning savings",
      body: "When occupancy is low on Mondays and Fridays, consolidate teams onto lower floors and shut down heating, ventilation and cleaning on upper levels. A documented case: 1M DKK infrastructure investment yielding up to 1.5M DKK in direct energy and operational savings within year one.",
      unit: "ROI",
      imageAlt: "RoomAlyzer savings dashboard showing energy and operational ROI",
    },
  ],
  smarterTogetherLabel: "Smarter together",
  smarterTogetherHeadline: "Occupancy, indoor climate and compliance in one view",
  smarterTogether:
    "RoomAlyzer pairs space utilisation with indoor climate monitoring — CO₂, temperature and humidity — so you ventilate for actual headcount and dial back when rooms are empty. Standard environments for offices and classrooms update as European and German legislation changes, keeping your buildings compliant without the legal overhead.",
  smarterTogetherOccupancyLabel: "Space utilisation",
  smarterTogetherOccupancyContext: "Open plan · Floor 3",
  smarterTogetherOccupancyStat: "62% occupied",
  smarterTogetherClimateLabel: "Indoor climate",
  smarterTogetherClimateContext: "Meeting room A",
  smarterTogetherIndoorClimateLink: "Explore indoor climate",
  audiencesEyebrow: "Who it's for",
  audiencesHeading: "Day-to-day operations and long-term decisions",
  audiencesLead:
    "The same occupancy data helps the colleague find a desk today, gives leadership the proof to downsize tomorrow, and turns climate goals into verifiable rent and energy savings.",
  fmHeading: "For facility management",
  fmItems: [
    "Help employees find a free desk or room instantly",
    "Smart release when bookings go unused",
    "Adjust ventilation dynamically based on actual headcount",
  ],
  realEstateHeading: "For real estate & leadership",
  realEstateItems: [
    "Prove spare capacity before you rent, repurpose or build",
    "Allocate department space with objective usage metrics",
    "Turn climate goals into verifiable energy and rent savings",
  ],
  faqTitle: "Frequently asked questions",
  faqContextAlt: "Colleagues discussing plans around a meeting table",
  faqItems: [
    {
      q: "How do occupancy sensors work without identifying people?",
      a: "RoomAlyzer uses sensors that detect presence and movement without capturing faces or personal identifiers. Data is entirely anonymised and GDPR-compliant — no cameras, no badges, no personal data.",
    },
    {
      q: "Can we automatically release no-show meetings?",
      a: "Yes. Combine occupancy signals with a calendar integration (Google, Microsoft 365, Pronestor) and the platform will release the room after a grace period when a booking goes unused — freeing ghost bookings without manual cleanup.",
    },
    {
      q: "How accurate is the occupancy detection?",
      a: "Accuracy depends on the environment scenario assigned to each sensor — which is why RoomAlyzer is pre-configured before deployment. Fine-tuned scenarios and AI-powered reporting give you reliable utilisation data from day one.",
    },
    {
      q: "How does it impact our IT security?",
      a: "A major advantage for IT teams: the infrastructure operates entirely independently of your corporate network. It is WiFi-free, cellular-backed and requires zero network configuration — fully isolated and secure.",
    },
  ],
  ctaTitle: "Want to see it for yourself?",
  ctaSubtitle:
    "Book a 30-minute demo. See how occupancy data turns into energy and operational savings — RoomAlyzer installs in minutes and adapts as your workplace changes.",
  ctaMicrocopy: "Installs in minutes · adapts as your workplace changes",
};

const da: SpaceManagementStrings = {
  metaTitle: "Space management — belægningssensorer og data | IoT Fabrikken",
  metaDescription:
    "Optimér kontoromkostninger og medarbejdertrivsel med trådløse belægningssensorer til skriveborde og mødelokaler. Se reel udnyttelse, løs spøgelsesbookinger, og omsæt arealdata til besparelser på husleje og energi.",
  breadcrumbHome: "Hjem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Space management",
  heroTitle: "Optimér kontoromkostninger og medarbejdertrivsel —",
  heroTitleAccent: "med space management bygget på reel brug.",
  heroLead:
    "Live belægning af skriveborde og lokaler, der omsætter kalenderillusioner og gætterier om hybridpolitik til beslutninger om husleje, energi og arbejdsplads.",
  intro: [
    "Hybrid arbejde betyder, at facility-teams hver dag balancerer medarbejderoplevelse og ledelsesbeslutninger — hvem har brug for et skrivebord lige nu, og om I kan nedskalere med dokumentation. Uden realtidsdata om belægning kører begge dele på mavefornemmelse.",
  ],
  heroPrimaryCta: "Book en gratis demo",
  heroSecondaryCta: "Få et tilbud",
  dashboardLabel: "RoomAlyzer — Space management",
  dashboardAlt: "RoomAlyzer Space management-dashboard med skrivebordsbelægning, tendenser og udnyttelse",
  challengesEyebrow: "Udfordringerne, I faktisk står med",
  challengesHeading:
    "Når I ikke kan se realtidsudnyttelse, bliver enhver ejendomsbeslutning et gæt. Hybridkontorpolitik siger én ting; menneskelig adfærd siger noget andet.",
  challenges: [
    {
      title: "Illusionen om fuldt booket",
      body: "Mødelokaler ser blokerede ud i kalendersystemet, men står tomme — eller er booket til ti og brugt af to. Uden reelle data overser I den skjulte kapacitet, der kunne rumme en hel ekstra afdeling.",
    },
    {
      title: "Politik vs. virkelighed",
      body: "Ledelsen kan annoncere en obligatorisk fem-dages kontoruge, men teamledere giver individuelle undtagelser. Skriveborde står tomme mandag og fredag, mens I betaler for fuld opvarmning, køling og rengøring.",
    },
    {
      title: "Grønne dagsordener uden substans",
      body: "Kommuner og virksomheder vil nedjustere kvadratmeter for at nå bæredygtighedsmål — men facility managers mangler den uigendrivelige belægningsdata, der skal til for at retfærdiggøre det over for ledelsen.",
    },
    {
      title: "Den moderne medarbejder",
      body: "For at tiltrække kontor fremmøde bygger virksomheder stille zoner, stående rum og projektvægge — men uden sporing ved I ikke, hvilke layouts der faktisk driver fremmøde, og hvilke der spilder budget.",
    },
  ],
  capabilitiesEyebrow: "Sådan løser RoomAlyzer det",
  capabilitiesHeading: "Belægningsdata tilpasset, hvordan mennesker arbejder — sikkert deployet fra dag ét.",
  solutionLead:
    "RoomAlyzer Space management bruger plug-and-play Desk- og Motion-sensorer til et live, fuldt anonymiseret overblik over arbejdspladsens dynamik — bygget til facility managers, arealplanlæggere, ledelse og kommuner.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Space management bruger plug-and-play " },
    { type: "sensor", slug: "desk", label: "Desk" },
    { type: "text", value: " og " },
    { type: "sensor", slug: "motion", label: "Motion" },
    {
      type: "text",
      value:
        "-sensorer til et live, fuldt anonymiseret overblik over arbejdspladsens dynamik — bygget til facility managers, arealplanlæggere, ledelse og kommuner. ",
    },
    { type: "compare", label: "Sammenlign hybridkontorsensorer", useCaseId: "hybrid-office" },
  ],
  capabilitiesContextAlt:
    "Facility-team der gennemgår live skrivebordsbelægning på en vægmonteret skærm",
  features: [
    {
      id: "desks",
      title: "Skriveborde og zonetagging",
      body: "Tæl ikke bare hoveder — tag og sammenlign, hvordan afdelinger bruger deres hjemmezoner versus fælles projektarealer. Forstå præcis, hvordan teams interagerer med jeres ejendom.",
      bodyWithSensorLinks: [
        { type: "text", value: "Sensoren " },
        { type: "sensor", slug: "desk", label: "Desk" },
        { type: "text", value: " og " },
        { type: "sensor", slug: "motion", label: "Motion" },
        {
          type: "text",
          value:
            " lader jer tagge og sammenligne, hvordan afdelinger bruger deres hjemmezoner versus fælles projektarealer — så I forstår, hvordan teams interagerer med jeres ejendom, ikke bare hvor mange der er til stede.",
        },
      ],
      unit: "Tagging",
      imageAlt: "RoomAlyzer-plantegning med afdelings- og zonetagging",
    },
    {
      id: "meeting-rooms",
      title: "Mødelokaler og smart release",
      body: "Sammenlign bookinger med faktisk brug og luk hullet, der blokerer jeres kalender. Ubrugte bookinger kan frigive lokalet automatisk — integreret med Google, Microsoft 365 og Pronestor.",
      unit: "Smart release",
      imageAlt: "Mødelokalebooking versus faktisk udnyttelse i RoomAlyzer",
    },
    {
      id: "heatmaps",
      title: "Intuitive heatmaps",
      body: "Kom væk fra tætte regneark. Heatmaps omsætter rå belægning til visuelle tendenser, I kan scanne — se en uges underudnyttelse eller topbelægning på tværs af hele etager med ét blik.",
      unit: "Tendenser",
      imageAlt: "Belægningsheatmap på en plantegning i RoomAlyzer",
    },
    {
      id: "savings",
      title: "Energi- og rengøringsbesparelser",
      body: "Når belægningen er lav mandag og fredag, kan I samle teams på lavere etager og lukke opvarmning, ventilation og rengøring på øvre niveauer. Et dokumenteret case: 1 mio. kr. i infrastruktur giver op til 1,5 mio. kr. i direkte energi- og driftsbesparelser inden for det første år.",
      unit: "ROI",
      imageAlt: "RoomAlyzer-dashboard med energi- og drifts-ROI",
    },
  ],
  smarterTogetherLabel: "Smarter together",
  smarterTogetherHeadline: "Belægning, indeklima og compliance i ét overblik",
  smarterTogether:
    "RoomAlyzer kombinerer arealudnyttelse med indeklimamonitorering — CO₂, temperatur og luftfugtighed — så I ventilerer efter faktisk headcount og skruer ned, når lokaler står tomme. Standardmiljøer til kontorer og klasselokaler opdateres, når europæisk og tysk lovgivning ændrer sig, så jeres bygninger forbliver compliant uden juridisk bøvl.",
  smarterTogetherOccupancyLabel: "Arealudnyttelse",
  smarterTogetherOccupancyContext: "Åbent kontor · 3. sal",
  smarterTogetherOccupancyStat: "62 % belagt",
  smarterTogetherClimateLabel: "Indeklima",
  smarterTogetherClimateContext: "Mødelokale A",
  smarterTogetherIndoorClimateLink: "Se indeklima-modulet",
  audiencesEyebrow: "Hvem det er til",
  audiencesHeading: "Daglig drift og langsigtede beslutninger",
  audiencesLead:
    "De samme belægningsdata hjælper kollegaen med at finde et skrivebord i dag, giver ledelsen dokumentation til nedskalering i morgen og omsætter klimamål til verificerbare besparelser på husleje og energi.",
  fmHeading: "Til facility management",
  fmItems: [
    "Hjælp medarbejdere med at finde et ledigt skrivebord eller lokale med det samme",
    "Smart release, når bookinger ikke benyttes",
    "Tilpas ventilation dynamisk efter faktisk headcount",
  ],
  realEstateHeading: "Til ejendom og ledelse",
  realEstateItems: [
    "Dokumentér ledig kapacitet, før I lejer, ombygger eller bygger nyt",
    "Fordel afdelingsarealer med objektive brugsmålinger",
    "Omsæt klimamål til verificerbare besparelser på energi og husleje",
  ],
  faqTitle: "Ofte stillede spørgsmål",
  faqContextAlt: "Kolleger der diskuterer planer omkring et mødebord",
  faqItems: [
    {
      q: "Hvordan fungerer belægningssensorer uden at identificere personer?",
      a: "RoomAlyzer bruger sensorer, der registrerer tilstedeværelse og bevægelse uden at indfange ansigter eller personlige identifikatorer. Data er fuldt anonymiseret og GDPR-compliant — ingen kameraer, ingen badges, ingen persondata.",
    },
    {
      q: "Kan vi automatisk frigive møder, hvor ingen dukker op?",
      a: "Ja. Kombinér belægningssignaler med en kalenderintegration (Google, Microsoft 365, Pronestor), og platformen frigiver lokalet efter en graceperiode, når en booking ikke benyttes — uden manuel oprydning af spøgelsesbookinger.",
    },
    {
      q: "Hvor præcis er belægningsdetektionen?",
      a: "Præcisionen afhænger af det miljøscenarie, hver sensor er tildelt — derfor prækonfigureres RoomAlyzer før udrulning. Finjusterede scenarier og AI-drevet rapportering giver pålidelige udnyttelsesdata fra dag ét.",
    },
    {
      q: "Hvordan påvirker det vores IT-sikkerhed?",
      a: "En stor fordel for IT-teams: infrastrukturen kører helt uafhængigt af jeres virksomhedsnetværk. Den er WiFi-fri, mobildrevet og kræver nul netværkskonfiguration — fuldt isoleret og sikker.",
    },
  ],
  ctaTitle: "Vil du selv se det?",
  ctaSubtitle:
    "Book en demo på 30 minutter. Se, hvordan belægningsdata omsættes til energi- og driftsbesparelser — RoomAlyzer installeres på minutter og tilpasser sig, når arbejdspladsen ændrer sig.",
  ctaMicrocopy: "Installeres på minutter · tilpasser sig, når arbejdspladsen ændrer sig",
};

const de: SpaceManagementStrings = {
  metaTitle: "Space-Management — Belegungssensoren und Daten | IoT Fabrikken",
  metaDescription:
    "Optimieren Sie Bürokosten und das Wohlbefinden Ihrer Mitarbeitenden mit drahtlosen Belegungssensoren für Arbeitsplätze und Besprechungsräume. Sehen Sie reale Nutzung, lösen Sie Geisterbuchungen und setzen Sie Flächendaten in Miet- und Energieeinsparungen um.",
  breadcrumbHome: "Startseite",
  breadcrumbModules: "Module",
  breadcrumbCurrent: "Space-Management",
  heroTitle: "Bürokosten optimieren und Mitarbeitendenwohlbefinden stärken —",
  heroTitleAccent: "mit Space-Management auf Basis realer Nutzung.",
  heroLead:
    "Live-Belegung von Arbeitsplätzen und Räumen, die Kalenderillusionen und Hybrid-Richtlinien-Rätselraten in Miet-, Energie- und Arbeitsplatzentscheidungen übersetzt.",
  intro: [
    "Hybrides Arbeiten bedeutet, dass Facility-Teams täglich Mitarbeitererlebnis und Führungsentscheidungen ausbalancieren — wer braucht jetzt einen Arbeitsplatz, und ob Sie mit Belegen verkleinern können. Ohne Echtzeit-Belegungsdaten läuft beides auf Bauchgefühl.",
  ],
  heroPrimaryCta: "Kostenlose Demo buchen",
  heroSecondaryCta: "Angebot anfordern",
  dashboardLabel: "RoomAlyzer — Space-Management",
  dashboardAlt: "RoomAlyzer Space-Management-Dashboard mit Arbeitsplatzbelegung, Trends und Nutzung",
  challengesEyebrow: "Die Herausforderungen, denen Sie wirklich begegnen",
  challengesHeading:
    "Ohne Echtzeit-Nutzung wird jede Immobilienentscheidung zum Rätselraten. Die Hybrid-Büropolitik sagt eines; menschliches Verhalten etwas anderes.",
  challenges: [
    {
      title: "Die Illusion der vollen Auslastung",
      body: "Besprechungsräume wirken im Kalendersystem blockiert, stehen aber leer — oder sind für zehn gebucht und von zweien genutzt. Ohne echte Daten übersehen Sie die versteckte Reserve, die eine ganze zusätzliche Abteilung aufnehmen könnte.",
    },
    {
      title: "Politik vs. Realität",
      body: "Die Geschäftsführung kündigt vielleicht eine verpflichtende Fünf-Tage-Bürowoche an, aber Teamleitungen machen individuelle Ausnahmen. Arbeitsplätze stehen montags und freitags leer, während Sie für volle Heizung, Kühlung und Reinigung zahlen.",
    },
    {
      title: "Grüne Agenda ohne Substanz",
      body: "Kommunen und Unternehmen wollen Fläche reduzieren, um Nachhaltigkeitsziele zu erreichen — aber Facility Manager fehlen die belastbaren Belegungsdaten, um diese Vorschläge gegenüber der Führung zu rechtfertigen.",
    },
    {
      title: "Der moderne Mitarbeitende",
      body: "Um Büropräsenz zu fördern, bauen Unternehmen Ruhezonen, Stehräume und Projektwände — aber ohne Tracking wissen Sie nicht, welche Layouts tatsächlich Anwesenheit fördern und welche Budget verschwenden.",
    },
  ],
  capabilitiesEyebrow: "So löst RoomAlyzer das",
  capabilitiesHeading: "Belegungsdaten, angepasst an die Art, wie Menschen arbeiten — sicher ab Tag eins.",
  solutionLead:
    "RoomAlyzer Space-Management nutzt Plug-and-Play-Desk- und Motion-Sensoren für einen live, vollständig anonymisierten Überblick über Arbeitsplatzdynamik — entwickelt für Facility Manager, Flächenplaner, Führungskräfte und Kommunen.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Space-Management nutzt Plug-and-Play-" },
    { type: "sensor", slug: "desk", label: "Desk" },
    { type: "text", value: " und " },
    { type: "sensor", slug: "motion", label: "Motion" },
    {
      type: "text",
      value:
        "-Sensoren für einen live, vollständig anonymisierten Überblick über Arbeitsplatzdynamik — entwickelt für Facility Manager, Flächenplaner, Führungskräfte und Kommunen. ",
    },
    { type: "compare", label: "Hybrid-Office-Sensoren vergleichen", useCaseId: "hybrid-office" },
  ],
  capabilitiesContextAlt:
    "Facility-Team prüft die Live-Belegung von Arbeitsplätzen auf einem Wanddisplay",
  features: [
    {
      id: "desks",
      title: "Arbeitsplätze und Zonen-Tagging",
      body: "Zählen Sie nicht nur Köpfe — taggen und vergleichen Sie, wie Abteilungen ihre Heimzonen versus gemeinsame Projektbereiche nutzen. Verstehen Sie genau, wie Teams mit Ihrer Immobilie interagieren.",
      bodyWithSensorLinks: [
        { type: "text", value: "Die Sensoren " },
        { type: "sensor", slug: "desk", label: "Desk" },
        { type: "text", value: " und " },
        { type: "sensor", slug: "motion", label: "Motion" },
        {
          type: "text",
          value:
            " ermöglichen Tagging und Vergleich, wie Abteilungen ihre Heimzonen versus gemeinsame Projektbereiche nutzen — damit Sie verstehen, wie Teams mit Ihrer Immobilie interagieren, nicht nur wie viele Personen anwesend sind.",
        },
      ],
      unit: "Tagging",
      imageAlt: "RoomAlyzer-Grundriss mit Abteilungs- und Zonen-Tagging",
    },
    {
      id: "meeting-rooms",
      title: "Besprechungsräume und Smart Release",
      body: "Vergleichen Sie Buchungen mit tatsächlicher Nutzung und schließen Sie die Lücke, die Ihren Kalender blockiert. Ungenutzte Buchungen können den Raum automatisch freigeben — integriert mit Google, Microsoft 365 und Pronestor.",
      unit: "Smart Release",
      imageAlt: "Besprechungsraumbuchung versus tatsächliche Nutzung in RoomAlyzer",
    },
    {
      id: "heatmaps",
      title: "Intuitive Heatmaps",
      body: "Weg von dichten Tabellen. Heatmaps übersetzen Rohbelegung in scannbare visuelle Trends — sehen Sie eine Woche Unterauslastung oder Spitzenbelegung über ganze Etagen auf einen Blick.",
      unit: "Trends",
      imageAlt: "Belegungs-Heatmap auf einem Grundriss in RoomAlyzer",
    },
    {
      id: "savings",
      title: "Energie- und Reinigungseinsparungen",
      body: "Bei niedriger Belegung montags und freitags Teams auf untere Etagen konsolidieren und Heizung, Lüftung und Reinigung auf oberen Ebenen abschalten. Ein dokumentierter Fall: 1 Mio. DKK Infrastrukturinvestition mit bis zu 1,5 Mio. DKK direkten Energie- und Betriebseinsparungen im ersten Jahr.",
      unit: "ROI",
      imageAlt: "RoomAlyzer-Einsparungsdashboard mit Energie- und Betriebs-ROI",
    },
  ],
  smarterTogetherLabel: "Smarter together",
  smarterTogetherHeadline: "Belegung, Raumklima und Compliance in einer Ansicht",
  smarterTogether:
    "RoomAlyzer kombiniert Flächennutzung mit Raumklimamonitoring — CO₂, Temperatur und Luftfeuchtigkeit — damit Sie für tatsächliche Kopfzahl lüften und drosseln, wenn Räume leer sind. Standardumgebungen für Büros und Klassenzimmer aktualisieren sich mit europäischer und deutscher Gesetzgebung, sodass Ihre Gebäude compliant bleiben — ohne juristischen Aufwand.",
  smarterTogetherOccupancyLabel: "Flächennutzung",
  smarterTogetherOccupancyContext: "Open Space · Etage 3",
  smarterTogetherOccupancyStat: "62 % belegt",
  smarterTogetherClimateLabel: "Raumklima",
  smarterTogetherClimateContext: "Besprechungsraum A",
  smarterTogetherIndoorClimateLink: "Raumklima-Modul entdecken",
  audiencesEyebrow: "Für wen",
  audiencesHeading: "Täglicher Betrieb und langfristige Entscheidungen",
  audiencesLead:
    "Dieselben Belegungsdaten helfen dem Kollegen, heute einen Arbeitsplatz zu finden, geben der Führung morgen den Nachweis für Verkleinerung und setzen Klimaziele in nachweisbare Miet- und Energieeinsparungen um.",
  fmHeading: "Für Facility Management",
  fmItems: [
    "Mitarbeitenden helfen, sofort einen freien Arbeitsplatz oder Raum zu finden",
    "Smart Release, wenn Buchungen ungenutzt bleiben",
    "Lüftung dynamisch an tatsächliche Kopfzahl anpassen",
  ],
  realEstateHeading: "Für Immobilien und Geschäftsführung",
  realEstateItems: [
    "Freie Kapazität belegen, bevor Sie mieten, umnutzen oder bauen",
    "Abteilungsflächen mit objektiven Nutzungsmetriken verteilen",
    "Klimaziele in nachweisbare Energie- und Mieteinsparungen umsetzen",
  ],
  faqTitle: "Häufig gestellte Fragen",
  faqContextAlt: "Kollegen besprechen Pläne an einem Besprechungstisch",
  faqItems: [
    {
      q: "Wie funktionieren Belegungssensoren, ohne Personen zu identifizieren?",
      a: "RoomAlyzer nutzt Sensoren, die Anwesenheit und Bewegung erfassen, ohne Gesichter oder persönliche Identifikatoren zu speichern. Daten sind vollständig anonymisiert und DSGVO-konform — keine Kameras, keine Badges, keine personenbezogenen Daten.",
    },
    {
      q: "Können wir No-Show-Meetings automatisch freigeben?",
      a: "Ja. Kombinieren Sie Belegungssignale mit einer Kalenderintegration (Google, Microsoft 365, Pronestor), und die Plattform gibt den Raum nach einer Kulanzzeit frei, wenn eine Buchung ungenutzt bleibt — Geisterbuchungen ohne manuelle Bereinigung.",
    },
    {
      q: "Wie genau ist die Belegungserkennung?",
      a: "Die Genauigkeit hängt vom jedem Sensor zugewiesenen Umgebungsszenario ab — deshalb wird RoomAlyzer vor dem Rollout vorkonfiguriert. Fein abgestimmte Szenarien und KI-gestütztes Reporting liefern ab Tag eins verlässliche Nutzungsdaten.",
    },
    {
      q: "Wie wirkt sich das auf unsere IT-Sicherheit aus?",
      a: "Ein großer Vorteil für IT-Teams: Die Infrastruktur arbeitet vollständig unabhängig vom Unternehmensnetzwerk. Sie ist WiFi-frei, mobilfunkbasiert und erfordert null Netzwerkkonfiguration — vollständig isoliert und sicher.",
    },
  ],
  ctaTitle: "Möchten Sie es selbst sehen?",
  ctaSubtitle:
    "Buchen Sie eine 30-minütige Demo. Sehen Sie, wie Belegungsdaten in Energie- und Betriebseinsparungen werden — RoomAlyzer ist in Minuten installiert und passt sich an, wenn sich Ihr Arbeitsplatz verändert.",
  ctaMicrocopy: "In Minuten installiert · passt sich an, wenn sich Ihr Arbeitsplatz verändert",
};

const sv: SpaceManagementStrings = {
  metaTitle: "Space management — beläggningssensorer och data | IoT Fabrikken",
  metaDescription:
    "Optimera kontorskostnader och medarbetarnas välbefinnande med trådlösa beläggningssensorer för skrivbord och mötesrum. Se verkligt utnyttjande, lösa spökbookningar och omvandla ytdata till besparingar på hyra och energi.",
  breadcrumbHome: "Hem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Space management",
  heroTitle: "Optimera kontorskostnader och medarbetarnas välbefinnande —",
  heroTitleAccent: "med space management byggt på verklig användning.",
  heroLead:
    "Live beläggning av skrivbord och rum som omvandlar kalenderillusioner och gissningar om hybridpolicy till beslut om hyra, energi och arbetsplats.",
  intro: [
    "Hybridt arbete innebär att facility-team varje dag balanserar medarbetarupplevelse och ledningsbeslut — vem behöver ett skrivbord just nu, och om ni kan minska ytan med bevis. Utan realtidsdata om beläggning styrs båda sidor av magkänsla.",
  ],
  heroPrimaryCta: "Boka en gratis demo",
  heroSecondaryCta: "Få en offert",
  dashboardLabel: "RoomAlyzer — Space management",
  dashboardAlt: "RoomAlyzer Space management-dashboard med skrivbordsbeläggning, trender och utnyttjande",
  challengesEyebrow: "Utmaningarna ni faktiskt står inför",
  challengesHeading:
    "När ni inte ser realtidsutnyttjande blir varje fastighetsbeslut en gissning. Hybridkontorspolicy säger en sak; mänskligt beteende säger något annat.",
  challenges: [
    {
      title: "Illusionen om fullbokat",
      body: "Mötesrum ser blockerade ut i kalendersystemet men står tomma — eller är bokade för tio och använda av två. Utan verkliga data missar ni den dolda kapacitet som skulle rymma en hel extra avdelning.",
    },
    {
      title: "Policy vs. verklighet",
      body: "Ledningen kan tillkännage en obligatorisk femdagars kontorsvecka, men teamledare gör individuella undantag. Skrivbord står tomma måndag och fredag medan ni betalar för full uppvärmning, kylning och städning.",
    },
    {
      title: "Gröna agenda utan substans",
      body: "Kommuner och företag vill minska kvadratmeter för att nå hållbarhetsmål — men facility managers saknar den oförnekliga beläggningsdata som krävs för att motivera det inför ledningen.",
    },
    {
      title: "Den moderna medarbetaren",
      body: "För att locka kontorsnärvaro bygger företag tysta zoner, stående rum och projektväggar — men utan spårning vet ni inte vilka layouter som faktiskt driver närvaro och vilka som slösar budget.",
    },
  ],
  capabilitiesEyebrow: "Så löser RoomAlyzer det",
  capabilitiesHeading: "Beläggningsdata anpassad till hur människor arbetar — säkert driftsatt från dag ett.",
  solutionLead:
    "RoomAlyzer Space management använder plug-and-play Desk- och Motion-sensorer för en live, helt anonymiserad överblick över arbetsplatsens dynamik — byggd för facility managers, ytplanerare, ledning och kommuner.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Space management använder plug-and-play " },
    { type: "sensor", slug: "desk", label: "Desk" },
    { type: "text", value: " och " },
    { type: "sensor", slug: "motion", label: "Motion" },
    {
      type: "text",
      value:
        "-sensorer för en live, helt anonymiserad överblick över arbetsplatsens dynamik — byggd för facility managers, ytplanerare, ledning och kommuner. ",
    },
    { type: "compare", label: "Jämför hybridkontorssensorer", useCaseId: "hybrid-office" },
  ],
  capabilitiesContextAlt:
    "Facility-team som granskar live skrivbordsbeläggning på en väggmonterad skärm",
  features: [
    {
      id: "desks",
      title: "Skrivbord och zonmärkning",
      body: "Räkna inte bara huvuden — märk och jämför hur avdelningar använder sina hemzoner versus gemensamma projektytor. Förstå exakt hur team interagerar med er fastighet.",
      bodyWithSensorLinks: [
        { type: "text", value: "Sensorerna " },
        { type: "sensor", slug: "desk", label: "Desk" },
        { type: "text", value: " och " },
        { type: "sensor", slug: "motion", label: "Motion" },
        {
          type: "text",
          value:
            " låter er märka och jämföra hur avdelningar använder sina hemzoner versus gemensamma projektytor — så ni förstår hur team interagerar med er fastighet, inte bara hur många som är närvarande.",
        },
      ],
      unit: "Tagging",
      imageAlt: "RoomAlyzer-planlösning med avdelnings- och zonmärkning",
    },
    {
      id: "meeting-rooms",
      title: "Mötesrum och smart release",
      body: "Jämför bokningar med faktisk användning och stäng gapet som blockerar er kalender. Oanvända bokningar kan frigöra rummet automatiskt — integrerat med Google, Microsoft 365 och Pronestor.",
      unit: "Smart release",
      imageAlt: "Mötesrumsbokning versus faktiskt utnyttjande i RoomAlyzer",
    },
    {
      id: "heatmaps",
      title: "Intuitiva heatmaps",
      body: "Lägg de täta kalkylbladen bakom er. Heatmaps omvandlar rå beläggning till skannbara visuella trender — se en veckas underutnyttjande eller topputnyttjande över hela våningar med ett ögonkast.",
      unit: "Trender",
      imageAlt: "Beläggningsheatmap på en planlösning i RoomAlyzer",
    },
    {
      id: "savings",
      title: "Energi- och städbesparingar",
      body: "När beläggningen är låg måndag och fredag kan ni samla team på lägre våningar och stänga av uppvärmning, ventilation och städning på övre nivåer. Ett dokumenterat case: 1 M DKK i infrastruktur ger upp till 1,5 M DKK i direkta energi- och driftsbesparingar inom det första året.",
      unit: "ROI",
      imageAlt: "RoomAlyzer-dashboard med energi- och drifts-ROI",
    },
  ],
  smarterTogetherLabel: "Smarter together",
  smarterTogetherHeadline: "Beläggning, inomhusklimat och compliance i en vy",
  smarterTogether:
    "RoomAlyzer kombinerar ytanvändning med inomhusklimatövervakning — CO₂, temperatur och luftfuktighet — så att ni ventilerar efter faktisk headcount och drar ner när rum står tomma. Standardmiljöer för kontor och klassrum uppdateras när europeisk och tysk lagstiftning ändras, så att era byggnader förblir compliant utan juridisk overhead.",
  smarterTogetherOccupancyLabel: "Ytanvändning",
  smarterTogetherOccupancyContext: "Öppet kontor · Våning 3",
  smarterTogetherOccupancyStat: "62 % belagt",
  smarterTogetherClimateLabel: "Inomhusklimat",
  smarterTogetherClimateContext: "Mötesrum A",
  smarterTogetherIndoorClimateLink: "Utforska inomhusklimat",
  audiencesEyebrow: "Vem det är för",
  audiencesHeading: "Vardagsdrift och långsiktiga beslut",
  audiencesLead:
    "Samma beläggningsdata hjälper kollegan hitta skrivbord i dag, ger ledningen bevis för att minska ytan i morgon och omvandlar klimatmål till verifierbara besparingar på hyra och energi.",
  fmHeading: "För facility management",
  fmItems: [
    "Hjälp medarbetare hitta ett ledigt skrivbord eller rum direkt",
    "Smart release när bokningar inte används",
    "Anpassa ventilation dynamiskt efter faktisk headcount",
  ],
  realEstateHeading: "För fastighet och ledning",
  realEstateItems: [
    "Visa ledig kapacitet innan ni hyr, bygger om eller bygger nytt",
    "Fördela avdelningsytor med objektiva användningsmått",
    "Omvandla klimatmål till verifierbara besparingar på energi och hyra",
  ],
  faqTitle: "Vanliga frågor",
  faqContextAlt: "Kolleger som diskuterar planer runt ett mötesbord",
  faqItems: [
    {
      q: "Hur fungerar beläggningssensorer utan att identifiera personer?",
      a: "RoomAlyzer använder sensorer som registrerar närvaro och rörelse utan att fånga ansikten eller personliga identifierare. Data är helt anonymiserad och GDPR-kompatibel — inga kameror, inga brickor, inga personuppgifter.",
    },
    {
      q: "Kan vi automatiskt frigöra möten där ingen dyker upp?",
      a: "Ja. Kombinera beläggningssignaler med en kalenderintegration (Google, Microsoft 365, Pronestor) så frigör plattformen rummet efter en respitperiod när en bokning inte används — utan manuell städning av spökbookningar.",
    },
    {
      q: "Hur exakt är beläggningsdetekteringen?",
      a: "Noggrannheten beror på det miljöscenario som tilldelats varje sensor — därför förskonfigureras RoomAlyzer före utrullning. Finjusterade scenarier och AI-driven rapportering ger pålitliga utnyttjandedata från dag ett.",
    },
    {
      q: "Hur påverkar det vår IT-säkerhet?",
      a: "En stor fördel för IT-team: infrastrukturen körs helt oberoende av ert företagsnätverk. Den är WiFi-fri, mobilnätsbaserad och kräver noll nätverkskonfiguration — helt isolerad och säker.",
    },
  ],
  ctaTitle: "Vill du se det själv?",
  ctaSubtitle:
    "Boka en 30-minuters demo. Se hur beläggningsdata blir energi- och driftsbesparingar — RoomAlyzer installeras på minuter och anpassar sig när arbetsplatsen förändras.",
  ctaMicrocopy: "Installeras på minuter · anpassar sig när arbetsplatsen förändras",
};

const dictionaries: Partial<Record<Lang, SpaceManagementStrings>> = { en, da, de, sv };

export function getSpaceManagement(lang: Lang): SpaceManagementStrings {
  return dictionaries[lang] ?? dictionaries[defaultLang]!;
}
