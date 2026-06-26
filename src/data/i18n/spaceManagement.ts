import type { Lang } from "../lang";
import { defaultLang } from "../lang";

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
    "Wireless occupancy sensors for desks and meeting rooms. See real-time utilisation, fix ghost bookings, and turn space data into rent and energy savings.",
  breadcrumbHome: "Home",
  breadcrumbModules: "Modules",
  breadcrumbCurrent: "Space management",
  heroTitle: "Know how much space you use —",
  heroTitleAccent: "not how much you pay for.",
  heroLead:
    "Space management starts with a simple but expensive question: how much of your space are you actually using?",
  intro: [
    "When employees come in expecting to find a free desk and the right meeting room, and management needs to decide whether to rent, repurpose, or build, you cannot run on impressions.",
    "You need to know which desks and rooms are in use, when occupancy peaks, and where you are paying for space that sits empty.",
  ],
  heroPrimaryCta: "Book a free demo",
  heroSecondaryCta: "Get an offer",
  dashboardLabel: "RoomAlyzer — Space management",
  dashboardAlt: "RoomAlyzer Space management dashboard showing desk occupancy, trends, and utilisation",
  challengesEyebrow: "The challenges you know",
  challengesHeading: "When you cannot see utilisation, every decision is a guess.",
  challenges: [
    {
      title: "Paying for space you don't use",
      body: "Desks and meeting rooms stand empty while you rent or build more — with no data to prove what can be released or repurposed.",
    },
    {
      title: "Meeting rooms that don't add up",
      body: "Rooms booked for ten and used by two. Meetings cancelled but never un-booked — so the calendar looks full while the rooms stand empty.",
    },
    {
      title: "Decisions that are hard to defend",
      body: "Without a real-time view of what is free or in demand across floors, allocating space between departments or planning new hires turns into a negotiation based on opinion rather than usage.",
    },
  ],
  capabilitiesEyebrow: "How RoomAlyzer solves it",
  capabilitiesHeading: "Occupancy data you can use the same day.",
  solutionLead:
    "RoomAlyzer Space management gives you a live, anonymised overview of desk and room occupancy — built for facility management, space planners, operations, and municipalities.",
  capabilitiesContextAlt:
    "Facility team reviewing live desk occupancy on a wall display",
  features: [
    {
      id: "desks",
      title: "Desks & zones",
      body: "See which desks are free now and how each zone is used across the day and week.",
      unit: "Real time",
      imageAlt: "RoomAlyzer floor plan with live desk and zone occupancy",
    },
    {
      id: "meeting-rooms",
      title: "Meeting rooms",
      body: "Compare bookings to actual use. Unused bookings can release the room automatically.",
      unit: "Utilisation",
      imageAlt: "Meeting room utilisation calendar in RoomAlyzer",
    },
    {
      id: "heatmaps",
      title: "Heatmaps & peaks",
      body: "Spot when occupancy peaks and where spare capacity sits — across floors and locations.",
      unit: "Trends",
      imageAlt: "Weekly occupancy trend chart with usage peaks in RoomAlyzer",
    },
    {
      id: "savings",
      title: "Savings & reports",
      body: "Built-in economy calculator plus heatmaps and reports you can share with leadership.",
      unit: "ROI",
      imageAlt: "RoomAlyzer overcapacity and savings metrics dashboard",
    },
  ],
  smarterTogetherLabel: "Smarter together",
  smarterTogetherHeadline: "Occupancy and indoor climate in one view",
  smarterTogether:
    "RoomAlyzer can show space utilisation and indoor climate side by side, so you can adjust energy use and ventilation to the number of people actually present.",
  smarterTogetherOccupancyLabel: "Space utilisation",
  smarterTogetherOccupancyContext: "Open plan · Floor 3",
  smarterTogetherOccupancyStat: "62% occupied",
  smarterTogetherClimateLabel: "Indoor climate",
  smarterTogetherClimateContext: "Meeting room A",
  smarterTogetherIndoorClimateLink: "Explore indoor climate",
  audiencesEyebrow: "Who it's for",
  audiencesHeading: "Day-to-day operations and long-term decisions",
  audiencesLead:
    "The same occupancy data serves the colleague looking for a desk today and the leadership team deciding whether to rent, repurpose, or build tomorrow.",
  fmHeading: "For Facility Management",
  fmItems: [
    "Find a free desk or meeting room right now",
    "Release rooms when a booking goes unused",
    "See which zones are busiest across the week",
  ],
  realEstateHeading: "For Real Estate & Leadership",
  realEstateItems: [
    "Prove spare capacity before you rent, repurpose, or build",
    "Allocate space between departments with objective data",
    "Turn utilisation into concrete rent and energy savings",
  ],
  faqTitle: "Frequently asked questions",
  faqContextAlt: "Colleagues discussing plans around a meeting table",
  faqItems: [
    {
      q: "How do occupancy sensors work without identifying people?",
      a: "We use PIR (passive infrared), mmWave and thermopile sensors that detect motion and heat signatures but can't see faces or identify individuals. No cameras, no badges, no personal data.",
    },
    {
      q: "Is occupancy data personal data under GDPR?",
      a: "Aggregated room occupancy isn't personal data. Desk-level occupancy combined with hot-desk bookings could be, so we provide role-based access controls and retention settings specifically for that case.",
    },
    {
      q: "How accurate is the occupancy detection?",
      a: "PIR sensors are >98% accurate for presence detection in rooms up to 40 m². mmWave sensors handle bigger spaces and can count people, typically within ±1 at any given moment.",
    },
    {
      q: "Can we automatically release no-show meetings?",
      a: "Yes. Combine the PIR signal with a calendar integration (Google, Microsoft 365, Pronestor) and the platform will release the room after a grace period — the default is 10 minutes.",
    },
    {
      q: "How long does the data stay around?",
      a: "Room-level occupancy is retained for 24 months by default. Desk-level data defaults to 6 months and can be configured per room or per desk to match your works-council agreement.",
    },
  ],
  ctaTitle: "Want to see it for yourself?",
  ctaSubtitle:
    "Book a 30-minute demo. RoomAlyzer installs in minutes, adapts as your workplace changes, and costs a fraction of the usual price.",
  ctaMicrocopy: "Installs in minutes · adapts as your workplace changes",
};

const da: SpaceManagementStrings = {
  metaTitle: "Space management — belægningssensorer og data | IoT Fabrikken",
  metaDescription:
    "Trådløse belægningssensorer til skriveborde og mødelokaler. Se realtidsudnyttelse, løs spøgelsesbookinger, og omsæt arealdata til besparelser på husleje og energi.",
  breadcrumbHome: "Hjem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Space management",
  heroTitle: "Ved, hvor meget areal I bruger —",
  heroTitleAccent: "ikke hvor meget I betaler for.",
  heroLead:
    "Space management starter med et enkelt, men dyrt spørgsmål: hvor meget af jeres areal bruger I faktisk?",
  intro: [
    "Når medarbejdere møder ind og forventer at finde et ledigt skrivebord og det rette mødelokale, og ledelsen skal beslutte, om der skal lejes, ombygges eller bygges nyt, kan I ikke styre på indtryk.",
    "I har brug for at vide, hvilke skriveborde og lokaler der er i brug, hvornår belægningen topper, og hvor I betaler for arealer, der står tomme.",
  ],
  heroPrimaryCta: "Book en gratis demo",
  heroSecondaryCta: "Få et tilbud",
  dashboardLabel: "RoomAlyzer — Space management",
  dashboardAlt: "RoomAlyzer Space management-dashboard med skrivebordsbelægning, tendenser og udnyttelse",
  challengesEyebrow: "Udfordringerne, I kender",
  challengesHeading: "Når I ikke kan se udnyttelsen, bliver enhver beslutning et gæt.",
  challenges: [
    {
      title: "I betaler for areal, I ikke bruger",
      body: "Skriveborde og mødelokaler står tomme, mens I lejer eller bygger mere — uden data til at vise, hvad der kan frigives eller bruges anderledes.",
    },
    {
      title: "Mødelokaler, der ikke hænger sammen",
      body: "Lokaler booket til ti og brugt af to. Møder aflyses, men afbookes aldrig — så kalenderen ser fuld ud, mens lokalerne står tomme.",
    },
    {
      title: "Beslutninger, der er svære at forsvare",
      body: "Uden et realtidsoverblik over, hvad der er ledigt eller mest efterspurgt på tværs af etager, bliver fordeling af areal mellem afdelinger eller planlægning af nyansættelser en forhandling baseret på holdninger frem for brug.",
    },
  ],
  capabilitiesEyebrow: "Sådan løser RoomAlyzer det",
  capabilitiesHeading: "Belægningsdata, I kan bruge samme dag.",
  solutionLead:
    "RoomAlyzer Space management giver jer et live, anonymiseret overblik over belægningen af skriveborde og lokaler — bygget til facility management, arealplanlæggere, drift og kommuner.",
  capabilitiesContextAlt:
    "Facility-team der gennemgår live skrivebordsbelægning på en vægmonteret skærm",
  features: [
    {
      id: "desks",
      title: "Skriveborde og zoner",
      body: "Se, hvilke skriveborde der er ledige nu, og hvordan hver zone bruges hen over dagen og ugen.",
      unit: "Realtid",
      imageAlt: "RoomAlyzer-plantegning med live belægning af skriveborde og zoner",
    },
    {
      id: "meeting-rooms",
      title: "Mødelokaler",
      body: "Sammenlign bookinger med faktisk brug. Ubrugte bookinger kan frigive lokalet automatisk.",
      unit: "Udnyttelse",
      imageAlt: "Kalender over mødelokaleudnyttelse i RoomAlyzer",
    },
    {
      id: "heatmaps",
      title: "Heatmaps og toppe",
      body: "Se, hvornår belægningen topper, og hvor ledig kapacitet er — på tværs af etager og lokationer.",
      unit: "Tendenser",
      imageAlt: "Ugentlig belægningstrend med toppe i RoomAlyzer",
    },
    {
      id: "savings",
      title: "Besparelser og rapporter",
      body: "Indbygget økonomiberegner plus heatmaps og rapporter, I kan dele med ledelsen.",
      unit: "ROI",
      imageAlt: "RoomAlyzer-dashboard med overkapacitet og besparelser",
    },
  ],
  smarterTogetherLabel: "Smarter together",
  smarterTogetherHeadline: "Belægning og indeklima i ét overblik",
  smarterTogether:
    "RoomAlyzer kan vise arealudnyttelse og indeklima side om side, så I kan tilpasse energiforbrug og ventilation til antallet af personer, der faktisk er til stede.",
  smarterTogetherOccupancyLabel: "Arealudnyttelse",
  smarterTogetherOccupancyContext: "Åbent kontor · 3. sal",
  smarterTogetherOccupancyStat: "62 % belagt",
  smarterTogetherClimateLabel: "Indeklima",
  smarterTogetherClimateContext: "Mødelokale A",
  smarterTogetherIndoorClimateLink: "Se indeklima-modulet",
  audiencesEyebrow: "Hvem det er til",
  audiencesHeading: "Daglig drift og langsigtede beslutninger",
  audiencesLead:
    "De samme belægningsdata hjælper kollegaen, der leder efter et skrivebord i dag, og ledelsen, der skal beslutte, om I skal leje, omdisponere eller bygge i morgen.",
  fmHeading: "Til facility management",
  fmItems: [
    "Find et ledigt skrivebord eller mødelokale lige nu",
    "Frigiv lokaler, når en booking ikke benyttes",
    "Se, hvilke zoner der er mest travle hen over ugen",
  ],
  realEstateHeading: "Til ejendom og ledelse",
  realEstateItems: [
    "Dokumentér ledig kapacitet, før I lejer, ombygger eller bygger nyt",
    "Fordel areal mellem afdelinger med objektive data",
    "Omsæt arealudnyttelse til konkrete besparelser på husleje og energi",
  ],
  faqTitle: "Ofte stillede spørgsmål",
  faqContextAlt: "Kolleger der diskuterer planer omkring et mødebord",
  faqItems: [
    {
      q: "Hvordan fungerer belægningssensorer uden at identificere personer?",
      a: "Vi bruger PIR- (passiv infrarød), mmWave- og termopile-sensorer, der registrerer bevægelse og varmesignaturer, men ikke kan se ansigter eller identificere enkeltpersoner. Ingen kameraer, ingen badges, ingen persondata.",
    },
    {
      q: "Er belægningsdata persondata under GDPR?",
      a: "Aggregeret rum-belægning er ikke persondata. Belægning på skrivebordsniveau kombineret med hot-desk-bookinger kan være det, og derfor tilbyder vi rollebaserede adgangsstyring og opbevaringsindstillinger specifikt til det tilfælde.",
    },
    {
      q: "Hvor præcis er belægningsdetektionen?",
      a: "PIR-sensorer er >98 % præcise til tilstedeværelsesdetektion i rum op til 40 m². mmWave-sensorer håndterer større rum og kan tælle personer, typisk med ±1 på et givet tidspunkt.",
    },
    {
      q: "Kan vi automatisk frigive møder, hvor ingen dukker op?",
      a: "Ja. Kombinér PIR-signalet med en kalenderintegration (Google, Microsoft 365, Pronestor), og platformen frigiver lokalet efter en graceperiode — standard er 10 minutter.",
    },
    {
      q: "Hvor længe opbevares dataene?",
      a: "Belægning på rumniveau opbevares som standard i 24 måneder. Data på skrivebordsniveau er som standard 6 måneder og kan konfigureres pr. rum eller skrivebord, så det matcher jeres samarbejdsaftale.",
    },
  ],
  ctaTitle: "Vil du selv se det?",
  ctaSubtitle:
    "Book en demo på 30 minutter. RoomAlyzer installeres på minutter, tilpasser sig, når arbejdspladsen ændrer sig, og koster en brøkdel af det sædvanlige.",
  ctaMicrocopy: "Installeres på minutter · tilpasser sig, når arbejdspladsen ændrer sig",
};

const de: SpaceManagementStrings = {
  metaTitle: "Space-Management — Belegungssensoren und Daten | IoT Fabrikken",
  metaDescription:
    "Drahtlose Belegungssensoren für Arbeitsplätze und Besprechungsräume. Echtzeit-Nutzung sehen, Geisterbuchungen lösen und Flächendaten in Miet- und Energieeinsparungen umsetzen.",
  breadcrumbHome: "Startseite",
  breadcrumbModules: "Module",
  breadcrumbCurrent: "Space-Management",
  heroTitle: "Wissen, wie viel Fläche Sie nutzen —",
  heroTitleAccent: "nicht, wofür Sie bezahlen.",
  heroLead:
    "Space-Management beginnt mit einer einfachen, aber teuren Frage: Wie viel Ihrer Fläche nutzen Sie tatsächlich?",
  intro: [
    "Wenn Mitarbeitende erwarten, einen freien Arbeitsplatz und den richtigen Besprechungsraum vorzufinden, und die Geschäftsführung entscheiden muss, ob gemietet, umgenutzt oder gebaut wird, können Sie sich nicht auf Eindrücke verlassen.",
    "Sie müssen wissen, welche Arbeitsplätze und Räume genutzt werden, wann die Belegung am höchsten ist und wo Sie für leerstehende Flächen bezahlen.",
  ],
  heroPrimaryCta: "Kostenlose Demo buchen",
  heroSecondaryCta: "Angebot anfordern",
  dashboardLabel: "RoomAlyzer — Space-Management",
  dashboardAlt: "RoomAlyzer Space-Management-Dashboard mit Arbeitsplatzbelegung, Trends und Nutzung",
  challengesEyebrow: "Die Herausforderungen, die Sie kennen",
  challengesHeading: "Ohne Sicht auf die Nutzung wird jede Entscheidung zum Rätselraten.",
  challenges: [
    {
      title: "Sie zahlen für ungenutzte Flächen",
      body: "Arbeitsplätze und Besprechungsräume stehen leer, während Sie mehr mieten oder bauen — ohne Daten, die belegen, was freigegeben oder umgenutzt werden kann.",
    },
    {
      title: "Besprechungsräume, die nicht aufgehen",
      body: "Räume für zehn gebucht und von zweien genutzt. Meetings abgesagt, aber nie storniert — der Kalender wirkt voll, während die Räume leer stehen.",
    },
    {
      title: "Schwer zu rechtfertigende Entscheidungen",
      body: "Ohne Echtzeitüberblick darüber, was frei ist oder auf welchen Etagen die Nachfrage am größten ist, wird die Flächenverteilung zwischen Abteilungen oder die Planung von Neueinstellungen zur Verhandlung auf Basis von Meinungen statt Nutzung.",
    },
  ],
  capabilitiesEyebrow: "So löst RoomAlyzer das",
  capabilitiesHeading: "Belegungsdaten, die Sie noch am selben Tag nutzen können.",
  solutionLead:
    "RoomAlyzer Space-Management gibt Ihnen einen live, anonymisierten Überblick über die Belegung von Arbeitsplätzen und Räumen — entwickelt für Facility Management, Flächenplaner, den Betrieb und Kommunen.",
  capabilitiesContextAlt:
    "Facility-Team prüft die Live-Belegung von Arbeitsplätzen auf einem Wanddisplay",
  features: [
    {
      id: "desks",
      title: "Arbeitsplätze und Zonen",
      body: "Sehen Sie, welche Arbeitsplätze gerade frei sind und wie jede Zone über Tag und Woche genutzt wird.",
      unit: "Echtzeit",
      imageAlt: "RoomAlyzer-Grundriss mit Live-Belegung von Arbeitsplätzen und Zonen",
    },
    {
      id: "meeting-rooms",
      title: "Besprechungsräume",
      body: "Buchungen mit tatsächlicher Nutzung vergleichen. Ungenutzte Buchungen können den Raum automatisch freigeben.",
      unit: "Nutzung",
      imageAlt: "Nutzungskalender für Besprechungsräume in RoomAlyzer",
    },
    {
      id: "heatmaps",
      title: "Heatmaps und Spitzen",
      body: "Erkennen Sie, wann die Belegung ihren Höhepunkt erreicht und wo freie Kapazität liegt — über Etagen und Standorte hinweg.",
      unit: "Trends",
      imageAlt: "Wöchentlicher Belegungstrend mit Nutzungsspitzen in RoomAlyzer",
    },
    {
      id: "savings",
      title: "Einsparungen und Berichte",
      body: "Integrierter Wirtschaftlichkeitsrechner plus Heatmaps und Berichte, die Sie mit der Geschäftsführung teilen können.",
      unit: "ROI",
      imageAlt: "RoomAlyzer-Dashboard mit Überkapazität und Einsparungen",
    },
  ],
  smarterTogetherLabel: "Smarter together",
  smarterTogetherHeadline: "Belegung und Raumklima in einer Ansicht",
  smarterTogether:
    "RoomAlyzer kann Flächennutzung und Raumklima nebeneinander darstellen, sodass Sie Energieverbrauch und Lüftung an die Zahl der tatsächlich anwesenden Personen anpassen können.",
  smarterTogetherOccupancyLabel: "Flächennutzung",
  smarterTogetherOccupancyContext: "Open Space · Etage 3",
  smarterTogetherOccupancyStat: "62 % belegt",
  smarterTogetherClimateLabel: "Raumklima",
  smarterTogetherClimateContext: "Besprechungsraum A",
  smarterTogetherIndoorClimateLink: "Raumklima-Modul entdecken",
  audiencesEyebrow: "Für wen",
  audiencesHeading: "Täglicher Betrieb und langfristige Entscheidungen",
  audiencesLead:
    "Dieselben Belegungsdaten helfen dem Kollegen, der heute einen Arbeitsplatz sucht, und der Geschäftsführung, die morgen entscheidet, ob gemietet, umgenutzt oder gebaut wird.",
  fmHeading: "Für Facility Management",
  fmItems: [
    "Jetzt einen freien Arbeitsplatz oder Besprechungsraum finden",
    "Räume freigeben, wenn eine Buchung ungenutzt bleibt",
    "Sehen, welche Zonen über die Woche am stärksten genutzt werden",
  ],
  realEstateHeading: "Für Immobilien und Geschäftsführung",
  realEstateItems: [
    "Freie Kapazität belegen, bevor Sie mieten, umnutzen oder bauen",
    "Flächen zwischen Abteilungen mit objektiven Daten verteilen",
    "Nutzung in konkrete Miet- und Energieeinsparungen umsetzen",
  ],
  faqTitle: "Häufig gestellte Fragen",
  faqContextAlt: "Kollegen besprechen Pläne an einem Besprechungstisch",
  faqItems: [
    {
      q: "Wie funktionieren Belegungssensoren, ohne Personen zu identifizieren?",
      a: "Wir nutzen PIR- (passiv infrarot), mmWave- und Thermopile-Sensoren, die Bewegung und Wärmesignaturen erfassen, aber keine Gesichter sehen oder Personen identifizieren können. Keine Kameras, keine Badges, keine personenbezogenen Daten.",
    },
    {
      q: "Sind Belegungsdaten personenbezogene Daten nach der DSGVO?",
      a: "Aggregierte Raumbelegung ist keine personenbezogene Daten. Belegung auf Arbeitsplatzebene in Kombination mit Hot-Desk-Buchungen kann es sein — deshalb bieten wir rollenbasierte Zugriffssteuerung und Aufbewahrungseinstellungen speziell für diesen Fall.",
    },
    {
      q: "Wie genau ist die Belegungserkennung?",
      a: "PIR-Sensoren sind >98 % genau für Anwesenheitserkennung in Räumen bis 40 m². mmWave-Sensoren eignen sich für größere Räume und können Personen zählen, typischerweise mit ±1 zu jedem Zeitpunkt.",
    },
    {
      q: "Können wir No-Show-Meetings automatisch freigeben?",
      a: "Ja. Kombinieren Sie das PIR-Signal mit einer Kalenderintegration (Google, Microsoft 365, Pronestor), und die Plattform gibt den Raum nach einer Kulanzzeit frei — Standard sind 10 Minuten.",
    },
    {
      q: "Wie lange werden die Daten aufbewahrt?",
      a: "Raumbelegung wird standardmäßig 24 Monate aufbewahrt. Daten auf Arbeitsplatzebene standardmäßig 6 Monate und konfigurierbar pro Raum oder Arbeitsplatz gemäß Ihrer Betriebsvereinbarung.",
    },
  ],
  ctaTitle: "Möchten Sie es selbst sehen?",
  ctaSubtitle:
    "Buchen Sie eine 30-minütige Demo. RoomAlyzer ist in Minuten installiert, passt sich an, wenn sich Ihr Arbeitsplatz verändert, und kostet einen Bruchteil des Üblichen.",
  ctaMicrocopy: "In Minuten installiert · passt sich an, wenn sich Ihr Arbeitsplatz verändert",
};

const sv: SpaceManagementStrings = {
  metaTitle: "Space management — beläggningssensorer och data | IoT Fabrikken",
  metaDescription:
    "Trådlösa beläggningssensorer för skrivbord och mötesrum. Se realtidsutnyttjande, lösa spökbookningar och omvandla ytdata till besparingar på hyra och energi.",
  breadcrumbHome: "Hem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Space management",
  heroTitle: "Vet hur mycket yta ni använder —",
  heroTitleAccent: "inte hur mycket ni betalar för.",
  heroLead:
    "Space management börjar med en enkel men dyr fråga: hur mycket av era ytor använder ni faktiskt?",
  intro: [
    "När medarbetare kommer in och förväntar sig ett ledigt skrivbord och rätt mötesrum, och ledningen ska besluta om att hyra, bygga om eller bygga nytt, kan ni inte styra på intryck.",
    "Ni behöver veta vilka skrivbord och rum som används, när beläggningen toppar och var ni betalar för ytor som står tomma.",
  ],
  heroPrimaryCta: "Boka en gratis demo",
  heroSecondaryCta: "Få en offert",
  dashboardLabel: "RoomAlyzer — Space management",
  dashboardAlt: "RoomAlyzer Space management-dashboard med skrivbordsbeläggning, trender och utnyttjande",
  challengesEyebrow: "Utmaningarna ni känner igen",
  challengesHeading: "När ni inte ser utnyttjandet blir varje beslut en gissning.",
  challenges: [
    {
      title: "Ni betalar för ytor ni inte använder",
      body: "Skrivbord och mötesrum står tomma medan ni hyr eller bygger mer — utan data som visar vad som kan frigöras eller användas annorlunda.",
    },
    {
      title: "Mötesrum som inte går ihop",
      body: "Rum bokade för tio och använda av två. Möten ställs in men avbokas aldrig — kalendern ser full ut medan rummen står tomma.",
    },
    {
      title: "Beslut som är svåra att försvara",
      body: "Utan en realtidsbild av vad som är ledigt eller mest efterfrågat över våningarna blir fördelning av ytor mellan avdelningar eller planering av nyanställningar en förhandling baserad på åsikter snarare än användning.",
    },
  ],
  capabilitiesEyebrow: "Så löser RoomAlyzer det",
  capabilitiesHeading: "Beläggningsdata ni kan använda samma dag.",
  solutionLead:
    "RoomAlyzer Space management ger er en live, anonymiserad överblick över beläggningen av skrivbord och rum — byggd för facility management, ytplanerare, drift och kommuner.",
  capabilitiesContextAlt:
    "Facility-team som granskar live skrivbordsbeläggning på en väggmonterad skärm",
  features: [
    {
      id: "desks",
      title: "Skrivbord och zoner",
      body: "Se vilka skrivbord som är lediga nu och hur varje zon används under dagen och veckan.",
      unit: "Realtid",
      imageAlt: "RoomAlyzer-planlösning med live beläggning av skrivbord och zoner",
    },
    {
      id: "meeting-rooms",
      title: "Mötesrum",
      body: "Jämför bokningar med faktisk användning. Oanvända bokningar kan frigöra rummet automatiskt.",
      unit: "Utnyttjande",
      imageAlt: "Kalender över mötesrumsutnyttjande i RoomAlyzer",
    },
    {
      id: "heatmaps",
      title: "Heatmaps och toppar",
      body: "Se när beläggningen toppar och var ledig kapacitet finns — över våningar och platser.",
      unit: "Trender",
      imageAlt: "Veckotrend för beläggning med toppar i RoomAlyzer",
    },
    {
      id: "savings",
      title: "Besparingar och rapporter",
      body: "Inbyggd ekonomikalkylator plus heatmaps och rapporter ni kan dela med ledningen.",
      unit: "ROI",
      imageAlt: "RoomAlyzer-dashboard med överkapacitet och besparingar",
    },
  ],
  smarterTogetherLabel: "Smarter together",
  smarterTogetherHeadline: "Beläggning och inomhusklimat i en vy",
  smarterTogether:
    "RoomAlyzer kan visa ytanvändning och inomhusklimat sida vid sida, så att ni kan anpassa energianvändning och ventilation efter antalet personer som faktiskt är på plats.",
  smarterTogetherOccupancyLabel: "Ytanvändning",
  smarterTogetherOccupancyContext: "Öppet kontor · Våning 3",
  smarterTogetherOccupancyStat: "62 % belagt",
  smarterTogetherClimateLabel: "Inomhusklimat",
  smarterTogetherClimateContext: "Mötesrum A",
  smarterTogetherIndoorClimateLink: "Utforska inomhusklimat",
  audiencesEyebrow: "Vem det är för",
  audiencesHeading: "Vardagsdrift och långsiktiga beslut",
  audiencesLead:
    "Samma beläggningsdata hjälper kollegan som letar skrivbord i dag och ledningen som ska avgöra om ni ska hyra, bygga om eller bygga nytt i morgon.",
  fmHeading: "För facility management",
  fmItems: [
    "Hitta ett ledigt skrivbord eller mötesrum just nu",
    "Frigör rum när en bokning inte används",
    "Se vilka zoner som är mest aktiva under veckan",
  ],
  realEstateHeading: "För fastighet och ledning",
  realEstateItems: [
    "Visa ledig kapacitet innan ni hyr, bygger om eller bygger nytt",
    "Fördela ytor mellan avdelningar med objektiva data",
    "Omvandla utnyttjande till konkreta besparingar på hyra och energi",
  ],
  faqTitle: "Vanliga frågor",
  faqContextAlt: "Kolleger som diskuterar planer runt ett mötesbord",
  faqItems: [
    {
      q: "Hur fungerar beläggningssensorer utan att identifiera personer?",
      a: "Vi använder PIR- (passiv infraröd), mmWave- och termopile-sensorer som registrerar rörelse och värmesignaturer men inte kan se ansikten eller identifiera individer. Inga kameror, inga brickor, inga personuppgifter.",
    },
    {
      q: "Är beläggningsdata personuppgifter enligt GDPR?",
      a: "Aggregerad rumsbeläggning är inte personuppgifter. Beläggning på skrivbordsnivå i kombination med hot-desk-bokningar kan vara det, och därför erbjuder vi rollbaserad åtkomstkontroll och lagringsinställningar specifikt för det fallet.",
    },
    {
      q: "Hur exakt är beläggningsdetekteringen?",
      a: "PIR-sensorer är >98 % exakta för närvarodetektering i rum upp till 40 m². mmWave-sensorer hanterar större utrymmen och kan räkna personer, vanligtvis inom ±1 vid varje given tidpunkt.",
    },
    {
      q: "Kan vi automatiskt frigöra möten där ingen dyker upp?",
      a: "Ja. Kombinera PIR-signalen med en kalenderintegration (Google, Microsoft 365, Pronestor) så frigör plattformen rummet efter en respitperiod — standard är 10 minuter.",
    },
    {
      q: "Hur länge sparas data?",
      a: "Beläggning på rumsnivå sparas som standard i 24 månader. Data på skrivbordsnivå är som standard 6 månader och kan konfigureras per rum eller skrivbord för att matcha ert samverkansavtal.",
    },
  ],
  ctaTitle: "Vill du se det själv?",
  ctaSubtitle:
    "Boka en 30-minuters demo. RoomAlyzer installeras på minuter, anpassar sig när arbetsplatsen förändras och kostar en bråkdel av det vanliga.",
  ctaMicrocopy: "Installeras på minuter · anpassar sig när arbetsplatsen förändras",
};

const dictionaries: Partial<Record<Lang, SpaceManagementStrings>> = { en, da, de, sv };

export function getSpaceManagement(lang: Lang): SpaceManagementStrings {
  return dictionaries[lang] ?? dictionaries[defaultLang]!;
}
