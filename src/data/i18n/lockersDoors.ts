import type { Lang } from "../lang";
import { defaultLang } from "../lang";
import type { ModulePageStrings } from "./modulePageTypes";

const en: ModulePageStrings = {
  metaTitle: "Lockers and doors — open/close monitoring | IoT Fabrikken",
  metaDescription:
    "Wireless open/close sensors for lockers, doors, windows and cabinets. See what is open in real time, spot after-hours gaps, and plan capacity from usage data.",
  breadcrumbHome: "Home",
  breadcrumbModules: "Modules",
  breadcrumbCurrent: "Lockers and doors",
  heroTitle: "See what is open.",
  heroTitleAccent: "Close the gaps.",
  heroLead:
    "Open/close monitoring that brings transparency to lockers, windows, and doors",
  intro: [
    "Open/close monitoring turns everyday uncertainty into facts: which lockers are actually in use, whether windows are left open after hours, and how access points across the building are really being used. Without it, you are managing lockers by guesswork and checking windows on foot.",
  ],
  heroPrimaryCta: "Book a free demo",
  heroSecondaryCta: "Get an offer",
  dashboardLabel: "RoomAlyzer — Lockers and doors",
  dashboardAlt: "RoomAlyzer dashboard showing live open and closed status for lockers and doors",
  challengesEyebrow: "The challenges you know",
  challengesHeading: "When you cannot see what is open, every round is a walk-through.",
  challenges: [
    {
      title: "Lockers allocated blind",
      body: "You cannot see which lockers are genuinely in use, so capacity is wasted and new employees are hard to place.",
    },
    {
      title: "Windows and doors left open",
      body: "Open access points after hours mean wasted energy and reduced security — usually discovered only by chance.",
    },
    {
      title: "No usage patterns to plan from",
      body: "Without data on how lockers, cabinets or access routes are used over time, workplace planning stays reactive.",
    },
  ],
  capabilitiesEyebrow: "How RoomAlyzer solves it",
  capabilitiesHeading: "Live open/close status you can act on the same day.",
  solutionLead:
    "RoomAlyzer Lockers and doors gives you a real-time overview of what is open or closed — and turns it into usage patterns for facility managers and workplace planners.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Lockers and doors uses the " },
    { type: "sensor", slug: "open-close", label: "Open/Close" },
    {
      type: "text",
      value:
        " sensor to give you a real-time overview of what is open or closed — and turns it into usage patterns for facility managers and workplace planners.",
    },
  ],
  capabilitiesContextAlt: "Staff checking locker and door status in a workplace",
  features: [
    {
      id: "live-status",
      title: "Live status",
      body: "See which lockers, doors and windows are open or closed right now — across floors and locations.",
      bodyWithSensorLinks: [
        { type: "text", value: "The " },
        { type: "sensor", slug: "open-close", label: "Open/Close" },
        {
          type: "text",
          value:
            " sensor shows which lockers, doors and windows are open or closed right now — across floors and locations.",
        },
      ],
      unit: "Real time",
      imageAlt: "Live open and closed status for lockers and doors in RoomAlyzer",
    },
    {
      id: "locker-overview",
      title: "Locker overview",
      body: "Spot free capacity, abandoned lockers and reassignment opportunities without walking every aisle.",
      unit: "Capacity",
      imageAlt: "Locker occupancy overview in RoomAlyzer",
    },
    {
      id: "after-hours",
      title: "After hours",
      body: "Check with one click whether everything is closed outside business hours — and get alerted when it is not.",
      unit: "Security",
      imageAlt: "After-hours open/close alerts in RoomAlyzer",
    },
    {
      id: "usage-trends",
      title: "Usage trends",
      body: "Track how lockers, cabinets and access points are used over days and weeks to support planning decisions.",
      unit: "Trends",
      imageAlt: "Locker and door usage trend chart in RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smarter together",
  relatedModuleBody:
    "Pair open/close data with occupancy from Space management — see which lockers sit near busy zones and align capacity with how the building is actually used.",
  relatedModuleLink: "Explore space management",
  audiencesEyebrow: "Who it is for",
  audiencesHeading: "Day-to-day operations and workplace planning",
  audiencesLead:
    "The same open/close data helps the facility manager secure the building tonight and the workplace planner decide how locker capacity should grow next quarter.",
  primaryAudienceHeading: "For facility managers",
  primaryAudienceItems: [
    "See live open/close status across lockers, doors and windows",
    "Get after-hours alerts when access points are left open",
    "Audit cabinet and storage access without manual rounds",
  ],
  secondaryAudienceHeading: "For workplace planning",
  secondaryAudienceItems: [
    "Identify unused locker capacity before ordering more",
    "Support shared-desk and clean-desk concepts with usage data",
    "Plan locker allocation from trends, not assumptions",
  ],
  faqTitle: "Frequently asked questions",
  faqContextAlt: "Colleagues discussing plans around a meeting table",
  faqItems: [
    {
      q: "What can the open/close sensors monitor?",
      a: "Lockers, doors, windows, cabinets, fridge doors, equipment stores and other hinged access points. If it opens and closes, we can usually monitor it.",
    },
    {
      q: "Do I need wiring to each locker?",
      a: "No. The sensors are wireless and battery-powered. A single gateway typically covers a floor or more, depending on the building.",
    },
    {
      q: "Can I get alerts when a door is left open after hours?",
      a: "Yes. Set business hours and receive email or SMS alerts when a monitored point stays open outside the window you define.",
    },
    {
      q: "How long do the batteries last?",
      a: "Open/close sensors typically run several years on a single battery, depending on how often the door is used and how frequently data is reported.",
    },
    {
      q: "Does this integrate with Space management?",
      a: "Yes. Locker and door data sits alongside occupancy data in RoomAlyzer, so you can correlate access patterns with how spaces are used.",
    },
  ],
  ctaTitle: "Want to see it for yourself?",
  ctaSubtitle:
    "Book a 30-minute demo. RoomAlyzer installs in minutes, adapts as your building changes, and costs a fraction of the usual price.",
  ctaMicrocopy: "Wireless sensors · no wiring per locker",
};

const da: ModulePageStrings = {
  metaTitle: "Skabe og døre — åbn/luk-overvågning | IoT Fabrikken",
  metaDescription:
    "Trådløse åbn/luk-sensorer til skabe, døre, vinduer og skuffer. Se, hvad der er åbent i realtid, opdag huller uden for åbningstid, og planlæg kapacitet ud fra brugsdata.",
  breadcrumbHome: "Hjem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Skabe og døre",
  heroTitle: "Se, hvad der er åbent.",
  heroTitleAccent: "Luk hullerne.",
  heroLead:
    "Åbn/luk-overvågning, der giver gennemsigtighed i skabe, vinduer og døre",
  intro: [
    "Åbn/luk-overvågning gør hverdagens usikkerhed til fakta: hvilke skabe der faktisk er i brug, om vinduer står åbne efter lukketid, og hvordan adgangspunkter i hele bygningen reelt bruges. Uden det styrer I skabe på mavefornemmelse og tjekker vinduer til fods.",
  ],
  heroPrimaryCta: "Book en gratis demo",
  heroSecondaryCta: "Få et tilbud",
  dashboardLabel: "RoomAlyzer — Skabe og døre",
  dashboardAlt: "RoomAlyzer-dashboard med live åben/luk-status for skabe og døre",
  challengesEyebrow: "Udfordringerne, I kender",
  challengesHeading: "Når I ikke kan se, hvad der er åbent, bliver hver runde en gåtur.",
  challenges: [
    {
      title: "Skabe tildelt i blinde",
      body: "I kan ikke se, hvilke skabe der reelt er i brug, så kapacitet spildes, og nye medarbejdere er svære at placere.",
    },
    {
      title: "Vinduer og døre, der står åbne",
      body: "Åbne adgangspunkter uden for åbningstid betyder spildt energi og nedsat sikkerhed — opdaget kun ved et tilfælde.",
    },
    {
      title: "Ingen brugsmønstre at planlægge ud fra",
      body: "Uden data om, hvordan skabe, skuffer eller adgangsveje bruges over tid, bliver arbejdspladsplanlægning reaktiv.",
    },
  ],
  capabilitiesEyebrow: "Sådan løser RoomAlyzer det",
  capabilitiesHeading: "Live åbn/luk-status, I kan handle på samme dag.",
  solutionLead:
    "RoomAlyzer Skabe og døre giver jer et realtidsoverblik over, hvad der er åbent eller lukket — og omsætter det til brugsmønstre for facility management og arbejdspladsplanlægning.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Skabe og døre bruger " },
    { type: "sensor", slug: "open-close", label: "Open/Close" },
    {
      type: "text",
      value:
        "-sensoren til et realtidsoverblik over, hvad der er åbent eller lukket — og omsætter det til brugsmønstre for facility management og arbejdspladsplanlægning.",
    },
  ],
  capabilitiesContextAlt: "Medarbejdere der tjekker status på skabe og døre på en arbejdsplads",
  features: [
    {
      id: "live-status",
      title: "Live status",
      body: "Se, hvilke skabe, døre og vinduer der er åbne eller lukkede lige nu — på tværs af etager og lokationer.",
      bodyWithSensorLinks: [
        { type: "text", value: "Sensoren " },
        { type: "sensor", slug: "open-close", label: "Open/Close" },
        {
          type: "text",
          value:
            " viser, hvilke skabe, døre og vinduer der er åbne eller lukkede lige nu — på tværs af etager og lokationer.",
        },
      ],
      unit: "Realtid",
      imageAlt: "Live åben/luk-status for skabe og døre i RoomAlyzer",
    },
    {
      id: "locker-overview",
      title: "Skabsoverblik",
      body: "Find ledig kapacitet, forladte skabe og muligheder for omfordeling uden at gå hver gang.",
      unit: "Kapacitet",
      imageAlt: "Overblik over skabsbelægning i RoomAlyzer",
    },
    {
      id: "after-hours",
      title: "Uden for åbningstid",
      body: "Tjek med ét klik, om alt er lukket uden for åbningstid — og få besked, når det ikke er.",
      unit: "Sikkerhed",
      imageAlt: "Åbn/luk-advarsler uden for åbningstid i RoomAlyzer",
    },
    {
      id: "usage-trends",
      title: "Brugstendenser",
      body: "Følg, hvordan skabe, skuffer og adgangspunkter bruges over dage og uger, og understøt planlægningsbeslutninger.",
      unit: "Tendenser",
      imageAlt: "Trenddiagram for skabs- og dørbrug i RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smartere sammen",
  relatedModuleBody:
    "Kombinér åbn/luk-data med belægning fra Space management — se, hvilke skabe der ligger nær travle zoner, og tilpas kapaciteten til, hvordan bygningen reelt bruges.",
  relatedModuleLink: "Udforsk space management",
  audiencesEyebrow: "Hvem det er til",
  audiencesHeading: "Daglig drift og arbejdspladsplanlægning",
  audiencesLead:
    "De samme åbn/luk-data hjælper facility manageren med at sikre bygningen i aften og arbejdspladsplanlæggeren med at beslutte, hvordan skabskapaciteten skal vokse næste kvartal.",
  primaryAudienceHeading: "Til facility management",
  primaryAudienceItems: [
    "Se live åben/luk-status for skabe, døre og vinduer",
    "Få advarsler uden for åbningstid, når adgangspunkter står åbne",
    "Auditér adgang til skabe og lager uden manuelle runder",
  ],
  secondaryAudienceHeading: "Til arbejdspladsplanlægning",
  secondaryAudienceItems: [
    "Find ubrugt skabskapacitet, før I bestiller flere",
    "Understøt shared desk- og clean desk-koncepter med brugsdata",
    "Planlæg skabstildeling ud fra tendenser, ikke antagelser",
  ],
  faqTitle: "Ofte stillede spørgsmål",
  faqContextAlt: "Kolleger der diskuterer planer omkring et mødebord",
  faqItems: [
    {
      q: "Hvad kan åbn/luk-sensorerne overvåge?",
      a: "Skabe, døre, vinduer, skuffer, køleskabsdøre, udstyrslagre og andre hængslede adgangspunkter. Hvis det åbner og lukker, kan vi som regel overvåge det.",
    },
    {
      q: "Skal der trækkes kabler til hvert skab?",
      a: "Nej. Sensorerne er trådløse og batteridrevne. Én gateway dækker typisk en etage eller mere, afhængigt af bygningen.",
    },
    {
      q: "Kan jeg få besked, når en dør står åben uden for åbningstid?",
      a: "Ja. Sæt åbningstider og modtag e-mail eller SMS, når et overvåget punkt forbliver åbent uden for det vindue, I definerer.",
    },
    {
      q: "Hvor længe holder batterierne?",
      a: "Åbn/luk-sensorer kører typisk flere år på ét batteri, afhængigt af hvor ofte døren bruges, og hvor hyppigt data rapporteres.",
    },
    {
      q: "Integrerer det med Space management?",
      a: "Ja. Skabs- og dørdata ligger side om side med belægningsdata i RoomAlyzer, så I kan sammenligne adgangsmønstre med, hvordan arealer bruges.",
    },
  ],
  ctaTitle: "Vil du selv se det?",
  ctaSubtitle:
    "Book en demo på 30 minutter. RoomAlyzer installeres på minutter, tilpasser sig, når bygningen ændrer sig, og koster en brøkdel af det sædvanlige.",
  ctaMicrocopy: "Trådløse sensorer · ingen kabling pr. skab",
};

const de: ModulePageStrings = {
  metaTitle: "Schließfächer und Türen — Öffnen/Schließen-Überwachung | IoT Fabrikken",
  metaDescription:
    "Drahtlose Öffnen/Schließen-Sensoren für Schließfächer, Türen, Fenster und Schränke. Sehen Sie in Echtzeit, was offen ist, erkennen Sie Lücken außerhalb der Öffnungszeiten und planen Sie Kapazität anhand von Nutzungsdaten.",
  breadcrumbHome: "Startseite",
  breadcrumbModules: "Module",
  breadcrumbCurrent: "Schließfächer und Türen",
  heroTitle: "Sehen Sie, was offen ist.",
  heroTitleAccent: "Schließen Sie die Lücken.",
  heroLead:
    "Öffnen/Schließen-Überwachung für Transparenz bei Schließfächern, Fenstern und Türen",
  intro: [
    "Öffnen/Schließen-Überwachung verwandelt alltägliche Unsicherheit in Fakten: welche Schließfächer tatsächlich genutzt werden, ob Fenster nach Feierabend offen stehen und wie Zugangspunkte im Gebäude wirklich genutzt werden. Ohne sie verwalten Sie Schließfächer nach Bauchgefühl und kontrollieren Fenster zu Fuß.",
  ],
  heroPrimaryCta: "Kostenlose Demo buchen",
  heroSecondaryCta: "Angebot anfordern",
  dashboardLabel: "RoomAlyzer — Schließfächer und Türen",
  dashboardAlt: "RoomAlyzer-Dashboard mit Live-Offen/Geschlossen-Status für Schließfächer und Türen",
  challengesEyebrow: "Die Herausforderungen, die Sie kennen",
  challengesHeading: "Ohne Sicht auf Offen-Status wird jede Runde zum Rundgang.",
  challenges: [
    {
      title: "Schließfächer blind zugewiesen",
      body: "Sie sehen nicht, welche Schließfächer wirklich genutzt werden — Kapazität wird verschwendet und neue Mitarbeitende sind schwer unterzubringen.",
    },
    {
      title: "Fenster und Türen offen gelassen",
      body: "Offene Zugangspunkte außerhalb der Öffnungszeiten bedeuten Energieverlust und geringere Sicherheit — meist nur zufällig entdeckt.",
    },
    {
      title: "Keine Nutzungsmuster zum Planen",
      body: "Ohne Daten darüber, wie Schließfächer, Schränke oder Zugangswege über die Zeit genutzt werden, bleibt die Arbeitsplatzplanung reaktiv.",
    },
  ],
  capabilitiesEyebrow: "So löst RoomAlyzer das",
  capabilitiesHeading: "Live-Offen/Geschlossen-Status, den Sie noch am selben Tag nutzen können.",
  solutionLead:
    "RoomAlyzer Schließfächer und Türen gibt Ihnen einen Echtzeitüberblick darüber, was offen oder geschlossen ist — und macht daraus Nutzungsmuster für Facility Management und Arbeitsplatzplanung.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Schließfächer und Türen nutzt den " },
    { type: "sensor", slug: "open-close", label: "Open/Close" },
    {
      type: "text",
      value:
        "-Sensor für einen Echtzeitüberblick darüber, was offen oder geschlossen ist — und macht daraus Nutzungsmuster für Facility Management und Arbeitsplatzplanung.",
    },
  ],
  capabilitiesContextAlt: "Mitarbeitende prüfen den Status von Schließfächern und Türen am Arbeitsplatz",
  features: [
    {
      id: "live-status",
      title: "Live-Status",
      body: "Sehen Sie, welche Schließfächer, Türen und Fenster gerade offen oder geschlossen sind — über Etagen und Standorte hinweg.",
      bodyWithSensorLinks: [
        { type: "text", value: "Der " },
        { type: "sensor", slug: "open-close", label: "Open/Close" },
        {
          type: "text",
          value:
            "-Sensor zeigt, welche Schließfächer, Türen und Fenster gerade offen oder geschlossen sind — über Etagen und Standorte hinweg.",
        },
      ],
      unit: "Echtzeit",
      imageAlt: "Live Offen/Geschlossen-Status für Schließfächer und Türen in RoomAlyzer",
    },
    {
      id: "locker-overview",
      title: "Schließfach-Überblick",
      body: "Erkennen Sie freie Kapazität, verlassene Schließfächer und Umverteilungsmöglichkeiten ohne jeden Gang abzulaufen.",
      unit: "Kapazität",
      imageAlt: "Schließfach-Belegungsübersicht in RoomAlyzer",
    },
    {
      id: "after-hours",
      title: "Außerhalb der Öffnungszeiten",
      body: "Prüfen Sie mit einem Klick, ob außerhalb der Geschäftszeiten alles geschlossen ist — und erhalten Sie Alarme, wenn nicht.",
      unit: "Sicherheit",
      imageAlt: "Offen/Geschlossen-Alarme außerhalb der Öffnungszeiten in RoomAlyzer",
    },
    {
      id: "usage-trends",
      title: "Nutzungstrends",
      body: "Verfolgen Sie, wie Schließfächer, Schränke und Zugangspunkte über Tage und Wochen genutzt werden, um Planungsentscheidungen zu stützen.",
      unit: "Trends",
      imageAlt: "Trenddiagramm für Schließfach- und Türnutzung in RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smarter zusammen",
  relatedModuleBody:
    "Kombinieren Sie Öffnen/Schließen-Daten mit Belegung aus Space-Management — sehen Sie, welche Schließfächer in der Nähe stark genutzter Zonen liegen, und passen Sie die Kapazität an die tatsächliche Nutzung des Gebäudes an.",
  relatedModuleLink: "Space management entdecken",
  audiencesEyebrow: "Für wen",
  audiencesHeading: "Täglicher Betrieb und Arbeitsplatzplanung",
  audiencesLead:
    "Dieselben Öffnen/Schließen-Daten helfen dem Facility Manager, das Gebäude heute Abend abzusichern, und dem Arbeitsplatzplaner zu entscheiden, wie die Schließfachkapazität im nächsten Quartal wachsen soll.",
  primaryAudienceHeading: "Für Facility Management",
  primaryAudienceItems: [
    "Live Offen/Geschlossen-Status für Schließfächer, Türen und Fenster sehen",
    "Alarme außerhalb der Öffnungszeiten erhalten, wenn Zugangspunkte offen bleiben",
    "Schrank- und Lagerzugang auditieren ohne manuelle Rundgänge",
  ],
  secondaryAudienceHeading: "Für Arbeitsplatzplanung",
  secondaryAudienceItems: [
    "Ungenutzte Schließfachkapazität erkennen, bevor Sie mehr bestellen",
    "Shared-Desk- und Clean-Desk-Konzepte mit Nutzungsdaten unterstützen",
    "Schließfachzuweisung anhand von Trends statt Annahmen planen",
  ],
  faqTitle: "Häufig gestellte Fragen",
  faqContextAlt: "Kollegen besprechen Pläne an einem Besprechungstisch",
  faqItems: [
    {
      q: "Was können die Öffnen/Schließen-Sensoren überwachen?",
      a: "Schließfächer, Türen, Fenster, Schränke, Kühlschranktüren, Gerätelager und andere aufschlagbare Zugangspunkte. Wenn es sich öffnet und schließt, können wir es in der Regel überwachen.",
    },
    {
      q: "Brauche ich Verkabelung zu jedem Schließfach?",
      a: "Nein. Die Sensoren sind drahtlos und batteriebetrieben. Ein einzelnes Gateway deckt typischerweise eine Etage oder mehr ab, je nach Gebäude.",
    },
    {
      q: "Kann ich Alarme erhalten, wenn eine Tür außerhalb der Öffnungszeiten offen bleibt?",
      a: "Ja. Legen Sie Geschäftszeiten fest und erhalten Sie E-Mail- oder SMS-Alarme, wenn ein überwachter Punkt außerhalb des definierten Zeitfensters offen bleibt.",
    },
    {
      q: "Wie lange halten die Batterien?",
      a: "Öffnen/Schließen-Sensoren laufen typischerweise mehrere Jahre mit einer Batterie, abhängig davon, wie oft die Tür genutzt wird und wie häufig Daten gemeldet werden.",
    },
    {
      q: "Integriert sich das mit Space-Management?",
      a: "Ja. Schließfach- und Tür-Daten liegen neben Belegungsdaten in RoomAlyzer, sodass Sie Zugangsmuster mit der Nutzung von Flächen korrelieren können.",
    },
  ],
  ctaTitle: "Möchten Sie es selbst sehen?",
  ctaSubtitle:
    "Buchen Sie eine 30-minütige Demo. RoomAlyzer ist in Minuten installiert, passt sich an, wenn sich Ihr Gebäude verändert, und kostet einen Bruchteil des Üblichen.",
  ctaMicrocopy: "Drahtlose Sensoren · keine Verkabelung pro Schließfach",
};

const sv: ModulePageStrings = {
  metaTitle: "Skåp och dörrar — öppna/stäng-övervakning | IoT Fabrikken",
  metaDescription:
    "Trådlösa öppna/stäng-sensorer för skåp, dörrar, fönster och skåp. Se vad som är öppet i realtid, upptäck luckor utanför öppettider och planera kapacitet utifrån användningsdata.",
  breadcrumbHome: "Hem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Skåp och dörrar",
  heroTitle: "Se vad som är öppet.",
  heroTitleAccent: "Stäng luckorna.",
  heroLead:
    "Öppna/stäng-övervakning som ger transparens kring skåp, fönster och dörrar",
  intro: [
    "Öppna/stäng-övervakning förvandlar vardagens osäkerhet till fakta: vilka skåp som faktiskt används, om fönster lämnas öppna efter stängning och hur åtkomstpunkter i hela byggnaden verkligen används. Utan det hanterar ni skåp på magkänsla och kontrollerar fönster till fots.",
  ],
  heroPrimaryCta: "Boka en gratis demo",
  heroSecondaryCta: "Få en offert",
  dashboardLabel: "RoomAlyzer — Skåp och dörrar",
  dashboardAlt: "RoomAlyzer-dashboard med live öppen/stängd-status för skåp och dörrar",
  challengesEyebrow: "Utmaningarna ni känner igen",
  challengesHeading: "När ni inte ser vad som är öppet blir varje runda en rundvandring.",
  challenges: [
    {
      title: "Skåp tilldelade i blindo",
      body: "Ni ser inte vilka skåp som verkligen används, så kapacitet slösas bort och nya medarbetare är svåra att placera.",
    },
    {
      title: "Fönster och dörrar lämnade öppna",
      body: "Öppna åtkomstpunkter utanför öppettider innebär slösad energi och sämre säkerhet — oftast upptäckt av en slump.",
    },
    {
      title: "Inga användningsmönster att planera utifrån",
      body: "Utan data om hur skåp, förråd eller åtkomstvägar används över tid förblir arbetsplatsplaneringen reaktiv.",
    },
  ],
  capabilitiesEyebrow: "Så löser RoomAlyzer det",
  capabilitiesHeading: "Live öppen/stängd-status ni kan agera på samma dag.",
  solutionLead:
    "RoomAlyzer Skåp och dörrar ger er en realtidsöverblick över vad som är öppet eller stängt — och omvandlar det till användningsmönster för facility management och arbetsplatsplanering.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Skåp och dörrar använder " },
    { type: "sensor", slug: "open-close", label: "Open/Close" },
    {
      type: "text",
      value:
        "-sensorn för en realtidsöverblick över vad som är öppet eller stängt — och omvandlar det till användningsmönster för facility management och arbetsplatsplanering.",
    },
  ],
  capabilitiesContextAlt: "Personal som kontrollerar status på skåp och dörrar på en arbetsplats",
  features: [
    {
      id: "live-status",
      title: "Livestatus",
      body: "Se vilka skåp, dörrar och fönster som är öppna eller stängda just nu — över våningar och platser.",
      bodyWithSensorLinks: [
        { type: "text", value: "Sensorn " },
        { type: "sensor", slug: "open-close", label: "Open/Close" },
        {
          type: "text",
          value:
            " visar vilka skåp, dörrar och fönster som är öppna eller stängda just nu — över våningar och platser.",
        },
      ],
      unit: "Realtid",
      imageAlt: "Live öppen/stängd-status för skåp och dörrar i RoomAlyzer",
    },
    {
      id: "locker-overview",
      title: "Skåpöversikt",
      body: "Hitta ledig kapacitet, övergivna skåp och omfördelningsmöjligheter utan att gå varje gång.",
      unit: "Kapacitet",
      imageAlt: "Översikt över skåpsbeläggning i RoomAlyzer",
    },
    {
      id: "after-hours",
      title: "Utanför öppettider",
      body: "Kontrollera med ett klick om allt är stängt utanför arbetstid — och få varning när det inte är det.",
      unit: "Säkerhet",
      imageAlt: "Öppen/stängd-varningar utanför öppettider i RoomAlyzer",
    },
    {
      id: "usage-trends",
      title: "Användningstrender",
      body: "Följ hur skåp, förråd och åtkomstpunkter används över dagar och veckor för att stödja planeringsbeslut.",
      unit: "Trender",
      imageAlt: "Trenddiagram för skåps- och dörranvändning i RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smartare tillsammans",
  relatedModuleBody:
    "Kombinera öppna/stäng-data med beläggning från Space management — se vilka skåp som ligger nära aktiva zoner och anpassa kapaciteten till hur byggnaden faktiskt används.",
  relatedModuleLink: "Utforska space management",
  audiencesEyebrow: "Vem det är för",
  audiencesHeading: "Vardagsdrift och arbetsplatsplanering",
  audiencesLead:
    "Samma öppna/stäng-data hjälper facility managern att säkra byggnaden i kväll och arbetsplatsplaneraren att avgöra hur skåpkapaciteten ska växa nästa kvartal.",
  primaryAudienceHeading: "För facility management",
  primaryAudienceItems: [
    "Se live öppen/stängd-status för skåp, dörrar och fönster",
    "Få varningar utanför öppettider när åtkomstpunkter lämnas öppna",
    "Granska skåp- och lageråtkomst utan manuella rundor",
  ],
  secondaryAudienceHeading: "För arbetsplatsplanering",
  secondaryAudienceItems: [
    "Identifiera oanvänd skåpkapacitet innan ni beställer fler",
    "Stöd shared desk- och clean desk-koncept med användningsdata",
    "Planera skåptilldelning utifrån trender, inte antaganden",
  ],
  faqTitle: "Vanliga frågor",
  faqContextAlt: "Kolleger som diskuterar planer runt ett mötesbord",
  faqItems: [
    {
      q: "Vad kan öppna/stäng-sensorerna övervaka?",
      a: "Skåp, dörrar, fönster, skåp, kylskåpsdörrar, utrustningsförråd och andra gångjärnsförsedda åtkomstpunkter. Om det öppnas och stängs kan vi vanligtvis övervaka det.",
    },
    {
      q: "Behöver jag kabeldragning till varje skåp?",
      a: "Nej. Sensorerna är trådlösa och batteridrivna. En gateway täcker vanligtvis en våning eller mer, beroende på byggnaden.",
    },
    {
      q: "Kan jag få varning när en dörr lämnas öppen utanför öppettider?",
      a: "Ja. Ställ in arbetstider och få e-post eller SMS när en övervakad punkt förblir öppen utanför det fönster ni definierar.",
    },
    {
      q: "Hur länge håller batterierna?",
      a: "Öppna/stäng-sensorer kör vanligtvis flera år på ett batteri, beroende på hur ofta dörren används och hur ofta data rapporteras.",
    },
    {
      q: "Integrerar det med Space management?",
      a: "Ja. Skåps- och dörrdata ligger bredvid beläggningsdata i RoomAlyzer, så ni kan korrelera åtkomstmönster med hur ytorna används.",
    },
  ],
  ctaTitle: "Vill du se det själv?",
  ctaSubtitle:
    "Boka en 30-minuters demo. RoomAlyzer installeras på minuter, anpassar sig när byggnaden förändras och kostar en bråkdel av det vanliga.",
  ctaMicrocopy: "Trådlösa sensorer · ingen kabeldragning per skåp",
};

const dictionaries: Partial<Record<Lang, ModulePageStrings>> = { en, da, de, sv };

export function getLockersDoors(lang: Lang): ModulePageStrings {
  return dictionaries[lang] ?? dictionaries[defaultLang]!;
}
