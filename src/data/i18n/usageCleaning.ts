import type { Lang } from "../lang";
import { defaultLang } from "../lang";
import type { ModulePageStrings } from "./modulePageTypes";

const en: ModulePageStrings = {
  metaTitle: "Usage and cleaning: demand-based cleaning | IoT Fabrikken",
  metaDescription:
    "Direct cleaning to the spaces that were actually used. See occupancy, schedule by demand, prioritise washrooms, and share reports with contractors.",
  breadcrumbHome: "Home",
  breadcrumbModules: "Modules",
  breadcrumbCurrent: "Usage and cleaning",
  heroTitle: "Clean where",
  heroTitleAccent: "it is actually needed.",
  heroLead:
    "Data-driven cleaning that follows actual use, not a fixed schedule",
  intro: [
    "Demand-based cleaning answers a question every operations team recognises: why clean a room that no one has used, while a heavily used space waits its turn? Fixed cleaning rotas treat every room the same, which means effort spent where it isn't needed and too little where it is.",
  ],
  heroPrimaryCta: "Book a free demo",
  heroSecondaryCta: "Get an offer",
  dashboardLabel: "RoomAlyzer: Usage and cleaning",
  dashboardAlt: "RoomAlyzer dashboard showing space usage and cleaning priorities",
  challengesEyebrow: "The challenges you know",
  challengesHeading: "When you clean by rota, busy rooms wait and empty ones get polished.",
  challenges: [
    {
      title: "Cleaning by rota, not by need",
      body: "Spaces that sit unused are cleaned on schedule while busy areas and public washrooms wait for their slot.",
    },
    {
      title: "Wasted resources",
      body: "Staff time and cleaning costs go to rooms that were never touched since the last round.",
    },
    {
      title: "No basis for the conversation",
      body: "You cannot show a cleaning contractor or budget holder where effort actually needs to go.",
    },
  ],
  capabilitiesEyebrow: "How RoomAlyzer solves it",
  capabilitiesHeading: "Occupancy data that drives cleaning the same day.",
  solutionLead:
    "RoomAlyzer Usage and cleaning turns occupancy into clear priorities — built for cleaning teams and facility managers who need to defend where effort goes.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Usage and cleaning uses " },
    { type: "sensor", slug: "motion", label: "Motion" },
    { type: "text", value: " and " },
    { type: "sensor", slug: "mini-plus-pir", label: "Mini+ PIR" },
    {
      type: "text",
      value:
        " sensors to turn occupancy into clear priorities — built for cleaning teams and facility managers who need to defend where effort goes.",
    },
  ],
  capabilitiesContextAlt: "Cleaning team planning routes from occupancy data",
  features: [
    {
      id: "usage-visibility",
      title: "Usage visibility",
      body: "See which rooms, zones and floors were actually used — today, this week, or over a custom period.",
      bodyWithSensorLinks: [
        { type: "text", value: "The " },
        { type: "sensor", slug: "motion", label: "Motion" },
        { type: "text", value: " and " },
        { type: "sensor", slug: "mini-plus-pir", label: "Mini+ PIR" },
        {
          type: "text",
          value:
            " sensors show which rooms, zones and floors were actually used — today, this week, or over a custom period.",
        },
      ],
      unit: "Occupancy",
      imageAlt: "Space usage visibility dashboard in RoomAlyzer",
    },
    {
      id: "demand-scheduling",
      title: "Demand scheduling",
      body: "Build cleaning rounds from real use instead of a fixed rota — skip what is clean and untouched.",
      unit: "Planning",
      imageAlt: "Demand-based cleaning schedule in RoomAlyzer",
    },
    {
      id: "washrooms",
      title: "Washrooms",
      body: "Prioritise public toilets and washrooms by footfall so the busiest facilities get attention first.",
      unit: "Footfall",
      imageAlt: "Washroom footfall and cleaning priority view in RoomAlyzer",
    },
    {
      id: "contractor-reports",
      title: "Contractor reports",
      body: "Export usage and completion data for SLA conversations with outsourced cleaning partners.",
      unit: "Reports",
      imageAlt: "Cleaning contractor report export in RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smarter together",
  relatedModuleBody:
    "Usage and cleaning shares occupancy data directly with Space management — one sensor network, two modules, and a single source of truth for how the building is used.",
  relatedModuleLink: "Explore space management",
  audiencesEyebrow: "Who it is for",
  audiencesHeading: "Cleaning teams and the facility managers who steer them",
  audiencesLead:
    "The same occupancy data helps the cleaner know which floors need attention today and the facility manager prove where the budget should go tomorrow.",
  primaryAudienceHeading: "For cleaning teams",
  primaryAudienceItems: [
    "See which rooms were used since the last round",
    "Prioritise busy washrooms and high-traffic zones",
    "Skip spaces that are already clean and untouched",
  ],
  secondaryAudienceHeading: "For facility managers",
  secondaryAudienceItems: [
    "Cut wasted cleaning hours on empty rooms",
    "Share objective usage data with contractors",
    "Align cleaning spend with actual building use",
  ],
  faqTitle: "Frequently asked questions",
  faqContextAlt: "Colleagues discussing plans around a meeting table",
  faqItems: [
    {
      q: "How does RoomAlyzer know a room was used?",
      a: "Wireless occupancy sensors detect presence without identifying people. Aggregated use signals show whether a space was occupied since the last cleaning round.",
    },
    {
      q: "Can we keep our existing cleaning contractor?",
      a: "Yes. Export usage reports and priorities for your contractor, or give them limited access to the dashboards they need for SLA reporting.",
    },
    {
      q: "Does this work for public washrooms?",
      a: "Yes. Footfall-based prioritisation is one of the highest-ROI use cases — busy toilets get cleaned first, quiet ones wait.",
    },
    {
      q: "How quickly can we change from a fixed rota?",
      a: "Most teams start with a pilot floor or zone. Sensors install in minutes, and you can run demand-based and fixed schedules side by side during transition.",
    },
    {
      q: "How does this connect to Space management?",
      a: "Both modules use the same occupancy data in RoomAlyzer. Space management focuses on desks and meeting rooms; Usage and cleaning turns that data into cleaning priorities.",
    },
  ],
  ctaTitle: "Want to see it for yourself?",
  ctaSubtitle:
    "Book a demo. RoomAlyzer installs in minutes, flexes to fit your building, and costs a fraction of the usual price.",
  ctaMicrocopy: "Demand-based cleaning · shares data with Space management",
};

const da: ModulePageStrings = {
  metaTitle: "Brug og rengøring: behovsbaseret rengøring | IoT Fabrikken",
  metaDescription:
    "Send rengøringen til de rum, der faktisk er blevet brugt. Se belægning, planlæg efter behov, prioriter toiletter og del rapporter med leverandører.",
  breadcrumbHome: "Hjem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Brug og rengøring",
  heroTitle: "Gør rent dér,",
  heroTitleAccent: "hvor det faktisk er nødvendigt.",
  heroLead:
    "Datadrevet rengøring, der følger faktisk brug — ikke en fast plan",
  intro: [
    "Behovsbaseret rengøring besvarer et spørgsmål, ethvert driftsteam kender: hvorfor gøre et rum rent, som ingen har brugt, mens et stærkt benyttet lokale venter på tur? Faste rengøringsplaner behandler alle rum ens, hvilket betyder indsats dér, hvor den ikke er nødvendig, og for lidt dér, hvor den er.",
  ],
  heroPrimaryCta: "Book en gratis demo",
  heroSecondaryCta: "Få et tilbud",
  dashboardLabel: "RoomAlyzer: Brug og rengøring",
  dashboardAlt: "RoomAlyzer-dashboard med rumbrug og rengøringsprioriteter",
  challengesEyebrow: "Udfordringerne, I kender",
  challengesHeading: "Når I gør rent efter plan, venter travle rum, mens tomme bliver pudset.",
  challenges: [
    {
      title: "Rengøring efter plan, ikke efter behov",
      body: "Rum, der står ubrugte hen, gøres rene efter skema, mens travle områder og offentlige toiletter venter på deres tur.",
    },
    {
      title: "Spildte ressourcer",
      body: "Personaletimer og rengøringsomkostninger går til rum, der ikke er rørt siden sidste runde.",
    },
    {
      title: "Intet grundlag for samtalen",
      body: "I kan ikke vise et rengøringsfirma eller en budgetansvarlig, hvor indsatsen reelt skal lægges.",
    },
  ],
  capabilitiesEyebrow: "Sådan løser RoomAlyzer det",
  capabilitiesHeading: "Belægningsdata, der driver rengøring samme dag.",
  solutionLead:
    "RoomAlyzer Brug og rengøring omsætter belægning til klare prioriteter — bygget til rengøringsteams og facility managers, der skal kunne forsvare, hvor indsatsen lægges.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Brug og rengøring bruger " },
    { type: "sensor", slug: "motion", label: "Motion" },
    { type: "text", value: " og " },
    { type: "sensor", slug: "mini-plus-pir", label: "Mini+ PIR" },
    {
      type: "text",
      value:
        "-sensorer til at omsætte belægning til klare prioriteter — bygget til rengøringsteams og facility managers, der skal kunne forsvare, hvor indsatsen lægges.",
    },
  ],
  capabilitiesContextAlt: "Rengøringsteam der planlægger ruter ud fra belægningsdata",
  features: [
    {
      id: "usage-visibility",
      title: "Brugsoverblik",
      body: "Se, hvilke rum, zoner og etager der faktisk er blevet brugt — i dag, denne uge eller over en valgfri periode.",
      bodyWithSensorLinks: [
        { type: "text", value: "Sensoren " },
        { type: "sensor", slug: "motion", label: "Motion" },
        { type: "text", value: " og " },
        { type: "sensor", slug: "mini-plus-pir", label: "Mini+ PIR" },
        {
          type: "text",
          value:
            " viser, hvilke rum, zoner og etager der faktisk er blevet brugt — i dag, denne uge eller over en valgfri periode.",
        },
      ],
      unit: "Belægning",
      imageAlt: "Dashboard med rumbrug i RoomAlyzer",
    },
    {
      id: "demand-scheduling",
      title: "Behovsplanlægning",
      body: "Byg rengøringsrunder ud fra faktisk brug i stedet for et fast skema — spring over, hvad der allerede er rent og urørt.",
      unit: "Planlægning",
      imageAlt: "Behovsbaseret rengøringsplan i RoomAlyzer",
    },
    {
      id: "washrooms",
      title: "Toiletter",
      body: "Prioritér offentlige toiletter og baderum efter fodtrafik, så de mest brugte faciliteter får opmærksomhed først.",
      unit: "Fodtrafik",
      imageAlt: "Toilet-fodtrafik og rengøringsprioritet i RoomAlyzer",
    },
    {
      id: "contractor-reports",
      title: "Leverandørrapporter",
      body: "Eksporter brugs- og gennemførelsesdata til SLA-samtaler med outsourcede rengøringspartnere.",
      unit: "Rapporter",
      imageAlt: "Eksport af rengøringsrapport til leverandør i RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smartere sammen",
  relatedModuleBody:
    "Brug og rengøring deler belægningsdata direkte med Space management — ét sensornetværk, to moduler og én fælles kilde til, hvordan bygningen bruges.",
  relatedModuleLink: "Udforsk space management",
  audiencesEyebrow: "Hvem det er til",
  audiencesHeading: "Rengøringsteams og de facility managers, der styrer dem",
  audiencesLead:
    "De samme belægningsdata hjælper rengøreren med at vide, hvilke etager der skal have opmærksomhed i dag, og facility manageren med at dokumentere, hvor budgettet skal hen i morgen.",
  primaryAudienceHeading: "Til rengøringsteams",
  primaryAudienceItems: [
    "Se, hvilke rum der er brugt siden sidste runde",
    "Prioritér travle toiletter og zoner med høj trafik",
    "Spring rum over, der allerede er rene og urørte",
  ],
  secondaryAudienceHeading: "Til facility management",
  secondaryAudienceItems: [
    "Skær spildte rengøringstimer på tomme rum",
    "Del objektive brugsdata med leverandører",
    "Tilpas rengøringsbudgettet til faktisk bygningsbrug",
  ],
  faqTitle: "Ofte stillede spørgsmål",
  faqContextAlt: "Kolleger, der diskuterer planer omkring et mødebord",
  faqItems: [
    {
      q: "Hvordan ved RoomAlyzer, at et rum er blevet brugt?",
      a: "Trådløse belægningssensorer registrerer tilstedeværelse uden at identificere personer. Aggregerede brugssignaler viser, om et rum har været optaget siden sidste rengøringsrunde.",
    },
    {
      q: "Kan vi beholde vores nuværende rengøringsleverandør?",
      a: "Ja. Eksporter brugsrapporter og prioriteter til jeres leverandør, eller giv dem begrænset adgang til de dashboards, de har brug for til SLA-rapportering.",
    },
    {
      q: "Virker det til offentlige toiletter?",
      a: "Ja. Fodtrafikbaseret prioritering er et af de stærkeste business cases — travle toiletter rengøres først, rolige venter.",
    },
    {
      q: "Hvor hurtigt kan vi skifte fra en fast plan?",
      a: "De fleste teams starter med en pilotetage eller -zone. Sensorer installeres på minutter, og I kan køre behovs- og fast plan side om side i overgangsperioden.",
    },
    {
      q: "Hvordan hænger det sammen med Space management?",
      a: "Begge moduler bruger de samme belægningsdata i RoomAlyzer. Space management fokuserer på skriveborde og mødelokaler; Brug og rengøring omsætter data til rengøringsprioriteter.",
    },
  ],
  ctaTitle: "Vil du selv se det?",
  ctaSubtitle:
    "Book en demo. RoomAlyzer installeres på minutter, tilpasser sig jeres bygning og koster en brøkdel af det sædvanlige.",
  ctaMicrocopy: "Behovsbaseret rengøring · deler data med Space management",
};

const de: ModulePageStrings = {
  metaTitle: "Usage and cleaning: bedarfsorientierte Reinigung | IoT Fabrikken",
  metaDescription:
    "Lenken Sie die Reinigung dorthin, wo Räume tatsächlich genutzt wurden. Belegung sehen, nach Bedarf planen, Sanitärräume priorisieren und Berichte mit Dienstleistern teilen.",
  breadcrumbHome: "Startseite",
  breadcrumbModules: "Module",
  breadcrumbCurrent: "Usage and cleaning",
  heroTitle: "Reinigen, wo",
  heroTitleAccent: "es wirklich nötig ist.",
  heroLead:
    "Datengesteuerte Reinigung nach tatsächlicher Nutzung — nicht nach festem Plan",
  intro: [
    "Bedarfsorientierte Reinigung beantwortet eine Frage, die jedes Betriebsteam kennt: Warum einen Raum reinigen, den niemand genutzt hat, während ein stark frequentierter Raum wartet? Feste Reinigungspläne behandeln jeden Raum gleich — Aufwand geht dorthin, wo er nicht gebraucht wird und zu wenig dorthin, wo er gebraucht wird.",
  ],
  heroPrimaryCta: "Kostenlose Demo buchen",
  heroSecondaryCta: "Angebot anfordern",
  dashboardLabel: "RoomAlyzer: Usage and cleaning",
  dashboardAlt: "RoomAlyzer-Dashboard mit Raumnutzung und Reinigungsprioritäten",
  challengesEyebrow: "Die Herausforderungen, die Sie kennen",
  challengesHeading: "Bei Reinigung nach Plan warten stark genutzte Räume, während leere poliert werden.",
  challenges: [
    {
      title: "Reinigung nach Plan, nicht nach Bedarf",
      body: "Ungenutzte Räume werden nach Zeitplan gereinigt, während stark frequentierte Bereiche und öffentliche Sanitärräume auf ihren Slot warten.",
    },
    {
      title: "Verschwendete Ressourcen",
      body: "Personalzeit und Reinigungskosten fließen in Räume, die seit der letzten Runde nicht berührt wurden.",
    },
    {
      title: "Keine Grundlage fürs Gespräch",
      body: "Sie können einem Reinigungsdienstleister oder Budgetverantwortlichen nicht zeigen, wo der Aufwand wirklich hingehen muss.",
    },
  ],
  capabilitiesEyebrow: "So löst RoomAlyzer das",
  capabilitiesHeading: "Belegungsdaten, die die Reinigung noch am selben Tag steuern.",
  solutionLead:
    "RoomAlyzer Usage and cleaning macht aus Belegung klare Prioritäten — entwickelt für Reinigungsteams und Facility Manager, die belegen müssen, wohin der Aufwand geht.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Usage and cleaning nutzt " },
    { type: "sensor", slug: "motion", label: "Motion" },
    { type: "text", value: " und " },
    { type: "sensor", slug: "mini-plus-pir", label: "Mini+ PIR" },
    {
      type: "text",
      value:
        "-Sensoren, um aus Belegung klare Prioritäten zu machen — entwickelt für Reinigungsteams und Facility Manager, die belegen müssen, wohin der Aufwand geht.",
    },
  ],
  capabilitiesContextAlt: "Reinigungsteam plant Routen anhand von Belegungsdaten",
  features: [
    {
      id: "usage-visibility",
      title: "Nutzungssicht",
      body: "Sehen Sie, welche Räume, Zonen und Etagen tatsächlich genutzt wurden — heute, diese Woche oder über einen frei wählbaren Zeitraum.",
      bodyWithSensorLinks: [
        { type: "text", value: "Die Sensoren " },
        { type: "sensor", slug: "motion", label: "Motion" },
        { type: "text", value: " und " },
        { type: "sensor", slug: "mini-plus-pir", label: "Mini+ PIR" },
        {
          type: "text",
          value:
            " zeigen, welche Räume, Zonen und Etagen tatsächlich genutzt wurden — heute, diese Woche oder über einen frei wählbaren Zeitraum.",
        },
      ],
      unit: "Belegung",
      imageAlt: "Dashboard zur Raumnutzung in RoomAlyzer",
    },
    {
      id: "demand-scheduling",
      title: "Bedarfsplanung",
      body: "Erstellen Sie Reinigungsrunden aus tatsächlicher Nutzung statt einem festen Plan — überspringen Sie, was bereits sauber und unberührt ist.",
      unit: "Planung",
      imageAlt: "Bedarfsorientierter Reinigungsplan in RoomAlyzer",
    },
    {
      id: "washrooms",
      title: "Sanitärräume",
      body: "Priorisieren Sie öffentliche Toiletten und Sanitärräume nach Frequenz, damit die am stärksten genutzten Einrichtungen zuerst dran sind.",
      unit: "Frequenz",
      imageAlt: "Sanitär-Frequenz und Reinigungspriorität in RoomAlyzer",
    },
    {
      id: "contractor-reports",
      title: "Dienstleisterberichte",
      body: "Exportieren Sie Nutzungs- und Abschlussdaten für SLA-Gespräche mit externen Reinigungspartnern.",
      unit: "Berichte",
      imageAlt: "Reinigungsdienstleister-Berichtsexport in RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smarter zusammen",
  relatedModuleBody:
    "Usage and cleaning teilt Belegungsdaten direkt mit Space-Management — ein Sensornetzwerk, zwei Module und eine gemeinsame Quelle dafür, wie das Gebäude genutzt wird.",
  relatedModuleLink: "Space-Management entdecken",
  audiencesEyebrow: "Für wen",
  audiencesHeading: "Reinigungsteams und die Facility Manager, die sie steuern",
  audiencesLead:
    "Dieselben Belegungsdaten helfen dem Reinigungsmitarbeiter zu wissen, welche Etagen heute Aufmerksamkeit brauchen und dem Facility Manager zu belegen, wohin das Budget morgen gehen soll.",
  primaryAudienceHeading: "Für Reinigungsteams",
  primaryAudienceItems: [
    "Sehen, welche Räume seit der letzten Runde genutzt wurden",
    "Stark frequentierte Sanitärräume und Zonen priorisieren",
    "Räume überspringen, die bereits sauber und unberührt sind",
  ],
  secondaryAudienceHeading: "Für Facility Management",
  secondaryAudienceItems: [
    "Verschwendete Reinigungsstunden in leeren Räumen reduzieren",
    "Objektive Nutzungsdaten mit Dienstleistern teilen",
    "Reinigungsbudget an die tatsächliche Gebäudenutzung anpassen",
  ],
  faqTitle: "Häufig gestellte Fragen",
  faqContextAlt: "Kollegen besprechen Pläne an einem Besprechungstisch",
  faqItems: [
    {
      q: "Woher weiß RoomAlyzer, dass ein Raum genutzt wurde?",
      a: "Drahtlose Belegungssensoren erkennen Anwesenheit, ohne Personen zu identifizieren. Aggregierte Nutzungssignale zeigen, ob ein Raum seit der letzten Reinigungsrunde belegt war.",
    },
    {
      q: "Können wir unseren bestehenden Reinigungsdienstleister behalten?",
      a: "Ja. Exportieren Sie Nutzungsberichte und Prioritäten für Ihren Dienstleister oder geben Sie ihm eingeschränkten Zugang zu den Dashboards, die er für SLA-Berichte braucht.",
    },
    {
      q: "Funktioniert das für öffentliche Sanitärräume?",
      a: "Ja. Frequenzbasierte Priorisierung ist einer der stärksten Business Cases — stark genutzte Toiletten werden zuerst gereinigt, ruhige warten.",
    },
    {
      q: "Wie schnell können wir von einem festen Plan wechseln?",
      a: "Die meisten Teams starten mit einer Pilotetage oder -zone. Sensoren sind in Minuten installiert und Sie können bedarfsorientierte und feste Pläne während der Umstellung parallel fahren.",
    },
    {
      q: "Wie hängt das mit Space-Management zusammen?",
      a: "Beide Module nutzen dieselben Belegungsdaten in RoomAlyzer. Space-Management fokussiert Arbeitsplätze und Besprechungsräume; Usage and cleaning macht daraus Reinigungsprioritäten.",
    },
  ],
  ctaTitle: "Möchten Sie es selbst sehen?",
  ctaSubtitle:
    "Buchen Sie eine Demo. RoomAlyzer ist in Minuten installiert, passt sich Ihrem Gebäude an und kostet einen Bruchteil des Üblichen.",
  ctaMicrocopy: "Bedarfsorientierte Reinigung · teilt Daten mit Space-Management",
};

const sv: ModulePageStrings = {
  metaTitle: "Användning och städning: behovsbaserad städning | IoT Fabrikken",
  metaDescription:
    "Rikta städningen till de utrymmen som faktiskt använts. Se beläggning, schemalägg efter behov, prioritera toaletter och dela rapporter med entreprenörer.",
  breadcrumbHome: "Hem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Användning och städning",
  heroTitle: "Städa där",
  heroTitleAccent: "det faktiskt behövs.",
  heroLead:
    "Datadriven städning efter faktisk användning — inte ett fast schema",
  intro: [
    "Behovsbaserad städning besvarar en fråga som varje driftteam känner igen: varför städa ett rum ingen har använt medan ett hårt använt utrymme väntar på sin tur? Fasta städscheman behandlar varje rum likadant — insats går dit den inte behövs och för lite dit den behövs.",
  ],
  heroPrimaryCta: "Boka en gratis demo",
  heroSecondaryCta: "Få en offert",
  dashboardLabel: "RoomAlyzer: Användning och städning",
  dashboardAlt: "RoomAlyzer-dashboard med rumsanvändning och städprioriteringar",
  challengesEyebrow: "Utmaningarna ni känner igen",
  challengesHeading: "När ni städar efter schema väntar aktiva rum medan tomma putsas.",
  challenges: [
    {
      title: "Städning efter schema, inte efter behov",
      body: "Oanvända utrymmen städas enligt plan medan aktiva zoner och offentliga toaletter väntar på sin tur.",
    },
    {
      title: "Slösade resurser",
      body: "Personaltid och städkostnader går till rum som inte rörts sedan förra rundan.",
    },
    {
      title: "Inget underlag för samtalet",
      body: "Ni kan inte visa en städentreprenör eller budgetansvarig var insatsen faktiskt behöver läggas.",
    },
  ],
  capabilitiesEyebrow: "Så löser RoomAlyzer det",
  capabilitiesHeading: "Beläggningsdata som driver städning samma dag.",
  solutionLead:
    "RoomAlyzer Användning och städning omvandlar beläggning till tydliga prioriteringar — byggt för städteam och facility managers som behöver försvara var insatsen läggs.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Användning och städning använder " },
    { type: "sensor", slug: "motion", label: "Motion" },
    { type: "text", value: " och " },
    { type: "sensor", slug: "mini-plus-pir", label: "Mini+ PIR" },
    {
      type: "text",
      value:
        "-sensorer för att omvandla beläggning till tydliga prioriteringar — byggt för städteam och facility managers som behöver försvara var insatsen läggs.",
    },
  ],
  capabilitiesContextAlt: "Städteam som planerar rutter utifrån beläggningsdata",
  features: [
    {
      id: "usage-visibility",
      title: "Användningsöversikt",
      body: "Se vilka rum, zoner och våningar som faktiskt använts — idag, denna vecka eller över en valfri period.",
      bodyWithSensorLinks: [
        { type: "text", value: "Sensorerna " },
        { type: "sensor", slug: "motion", label: "Motion" },
        { type: "text", value: " och " },
        { type: "sensor", slug: "mini-plus-pir", label: "Mini+ PIR" },
        {
          type: "text",
          value:
            " visar vilka rum, zoner och våningar som faktiskt använts — idag, denna vecka eller över en valfri period.",
        },
      ],
      unit: "Beläggning",
      imageAlt: "Dashboard för rumsanvändning i RoomAlyzer",
    },
    {
      id: "demand-scheduling",
      title: "Behovsschema",
      body: "Bygg städrundor utifrån faktisk användning i stället för ett fast schema — hoppa över det som redan är rent och orört.",
      unit: "Planering",
      imageAlt: "Behovsbaserat städschema i RoomAlyzer",
    },
    {
      id: "washrooms",
      title: "Toaletter",
      body: "Prioritera offentliga toaletter och sanitetsutrymmen efter fottrafik så de mest använda faciliteterna får uppmärksamhet först.",
      unit: "Fottrafik",
      imageAlt: "Toalett-fottrafik och städprioritet i RoomAlyzer",
    },
    {
      id: "contractor-reports",
      title: "Entreprenörsrapporter",
      body: "Exportera användnings- och genomförandedata för SLA-samtal med outsourcade städpartners.",
      unit: "Rapporter",
      imageAlt: "Export av städentreprenörsrapport i RoomAlyzer",
    },
  ],
  relatedModuleLabel: "Smartare tillsammans",
  relatedModuleBody:
    "Användning och städning delar beläggningsdata direkt med Space management — ett sensornätverk, två moduler och en gemensam källa för hur byggnaden används.",
  relatedModuleLink: "Utforska space management",
  audiencesEyebrow: "Vem det är för",
  audiencesHeading: "Städteam och de facility managers som styr dem",
  audiencesLead:
    "Samma beläggningsdata hjälper städaren att veta vilka våningar som behöver uppmärksamhet idag och facility managern att visa var budgeten ska gå imorgon.",
  primaryAudienceHeading: "För städteam",
  primaryAudienceItems: [
    "Se vilka rum som använts sedan förra rundan",
    "Prioritera aktiva toaletter och zoner med hög trafik",
    "Hoppa över utrymmen som redan är rena och orörda",
  ],
  secondaryAudienceHeading: "För facility management",
  secondaryAudienceItems: [
    "Minska bortkastade städtimmar i tomma rum",
    "Dela objektiva användningsdata med entreprenörer",
    "Anpassa städbudgeten till faktisk byggnadsanvändning",
  ],
  faqTitle: "Vanliga frågor",
  faqContextAlt: "Kolleger som diskuterar planer runt ett mötesbord",
  faqItems: [
    {
      q: "Hur vet RoomAlyzer att ett rum har använts?",
      a: "Trådlösa beläggningssensorer registrerar närvaro utan att identifiera personer. Aggregerade användningssignaler visar om ett rum varit belagt sedan förra städrundan.",
    },
    {
      q: "Kan vi behålla vår nuvarande städentreprenör?",
      a: "Ja. Exportera användningsrapporter och prioriteringar till er entreprenör, eller ge begränsad åtkomst till de dashboards de behöver för SLA-rapportering.",
    },
    {
      q: "Fungerar det för offentliga toaletter?",
      a: "Ja. Fottrafikbaserad prioritering är ett av de starkaste affärscasen — aktiva toaletter städas först, lugna väntar.",
    },
    {
      q: "Hur snabbt kan vi byta från ett fast schema?",
      a: "De flesta team börjar med en pilotvåning eller -zon. Sensorer installeras på minuter, och ni kan köra behovs- och fast schema parallellt under övergången.",
    },
    {
      q: "Hur hänger det ihop med Space management?",
      a: "Båda modulerna använder samma beläggningsdata i RoomAlyzer. Space management fokuserar på skrivbord och mötesrum; Användning och städning omvandlar data till städprioriteringar.",
    },
  ],
  ctaTitle: "Vill du se det själv?",
  ctaSubtitle:
    "Boka en demo. RoomAlyzer installeras på minuter, anpassar sig till er byggnad och kostar en bråkdel av det vanliga.",
  ctaMicrocopy: "Behovsbaserad städning · delar data med Space management",
};

const dictionaries: Partial<Record<Lang, ModulePageStrings>> = { en, da, de, sv };

export function getUsageCleaning(lang: Lang): ModulePageStrings {
  return dictionaries[lang] ?? dictionaries[defaultLang]!;
}
