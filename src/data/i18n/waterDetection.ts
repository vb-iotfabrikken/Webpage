import type { Lang } from "../lang";
import { defaultLang } from "../lang";
import type { ModulePageStrings } from "./modulePageTypes";

const en: ModulePageStrings = {
  metaTitle: "Water detection — leak sensors and alerts | IoT Fabrikken",
  metaDescription:
    "Wireless water sensors that alert by email and SMS before leaks spread. Cellular coverage for basements and shafts, with an incident log for insurance.",
  breadcrumbHome: "Home",
  breadcrumbModules: "Modules",
  breadcrumbCurrent: "Water detection",
  heroTitle: "Smart water detection.",
  heroTitleAccent: "Get the message, not the damage",
  heroLead:
    "Forget old-fashioned alarms that no one hears — get direct SMS & email notifications, ensuring you catch leaks before they become a disaster.",
  intro: [],
  heroPrimaryCta: "Book a free demo",
  heroSecondaryCta: "Get an offer",
  dashboardLabel: "RoomAlyzer — Water detection",
  dashboardAlt: "RoomAlyzer water detection dashboard showing sensor locations and active alerts",
  challengesEyebrow: "The risk you cannot hear",
  challengesHeading: "A beeping sensor in an empty basement is not protection.",
  challenges: [
    {
      title: "Leaks discovered too late",
      body: "Water reaches servers, electrical installations, or the building fabric before anyone is aware — turning a minor incident into a major one.",
    },
    {
      title: "Alarms no one hears",
      body: "A traditional sensor beeps to itself in a basement or shaft where no one is around to notice it.",
    },
    {
      title: "Hard-to-reach risk points",
      body: "Shafts, basements, and technical rooms are exactly where leaks start — and exactly where no one looks regularly.",
    },
  ],
  capabilitiesEyebrow: "How RoomAlyzer protects",
  capabilitiesHeading: "Early warning that reaches the right person.",
  solutionLead:
    "RoomAlyzer Water detection gives facility teams and housing associations instant alerts, reliable coverage in hard-to-reach spaces, and documentation that stands up in an insurance claim.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer connects " },
    { type: "sensor", slug: "water-detector", label: "Water detector" },
    { type: "text", value: " and " },
    { type: "sensor", slug: "water-rope", label: "Water rope" },
    {
      type: "text",
      value:
        " sensors to give facility teams and housing associations instant alerts, reliable coverage in hard-to-reach spaces, and documentation that stands up in an insurance claim. ",
    },
    { type: "compare", label: "Compare leak sensors", useCaseId: "leak" },
  ],
  capabilitiesContextAlt: "Facility team responding to a water leak alert",
  features: [
    {
      id: "smart-notifications",
      title: "Smart notifications",
      body: "Unlike a beeper-only sensor in an empty basement, RoomAlyzer sends the alarm directly to the people who can act — by SMS and email the moment water is detected.",
      unit: "SMS & email",
      imageAlt: "Water detection alert sent by SMS and email in RoomAlyzer",
    },
    {
      id: "alarm-escalation",
      title: "Alarm escalation",
      body: "Define a call chain for each site. If the first person does not acknowledge the alarm, the system automatically notifies the next contact — so a leak at 2 a.m. does not wait for someone to check their phone later.",
      unit: "Escalation",
      imageAlt: "Alarm escalation chain in RoomAlyzer water detection",
    },
    {
      id: "visual-overview",
      title: "Visual overview",
      body: "See exactly where the leak was detected — on maps and floor plans across your buildings, so the on-call team knows which room to head for before they arrive.",
      unit: "Floor plans",
      imageAlt: "Water leak location shown on a floor plan in RoomAlyzer",
    },
    {
      id: "incident-log",
      title: "Incident log",
      body: "Every detection is timestamped and retained in the platform — giving you an objective record for insurance claims and post-incident review.",
      unit: "Audit trail",
      imageAlt: "Water incident log with timestamps in RoomAlyzer",
    },
    {
      id: "plug-and-play",
      title: "Plug & play",
      body: "Sensors run on NB-IoT with up to seven years of battery life. No Wi-Fi, no gateways — mount the sensor and it connects over the mobile network, including deep basements and shafts.",
      bodyWithSensorLinks: [
        {
          type: "text",
          value:
            "The ",
        },
        { type: "sensor", slug: "water-detector", label: "Water detector" },
        { type: "text", value: " and " },
        { type: "sensor", slug: "water-rope", label: "Water rope" },
        {
          type: "text",
          value:
            " run on NB-IoT with up to seven years of battery life. No Wi-Fi, no gateways — mount the sensor and it connects over the mobile network, including deep basements and shafts.",
        },
      ],
      unit: "NB-IoT",
      imageAlt: "NB-IoT water sensor installed in a basement plant room",
    },
  ],
  relatedModuleLabel: "Also relevant",
  relatedModuleBody:
    "Heritage buildings face a double risk: slow humidity damage to collections and sudden water ingress from roofs, pipes, and masonry. Pair water detection with Preservation to protect both the fabric and what it holds.",
  relatedModuleLink: "Explore preservation",
  audiencesEyebrow: "Who it's for",
  audiencesHeading: "Operations teams that need to act fast",
  audiencesLead:
    "The same alert that reaches a facility manager in a commercial building reaches the on-call caretaker in a housing association — with documentation everyone can trust.",
  primaryAudienceHeading: "For facility managers and operations teams",
  primaryAudienceItems: [
    "Get alerts sorted by criticality across sites",
    "Cover shafts, plant rooms, and technical spaces without Wi-Fi",
    "Document incidents for insurance and compliance",
  ],
  secondaryAudienceHeading: "For housing and real estate",
  secondaryAudienceItems: [
    "Reach on-call caretakers by SMS — even when nobody is on site",
    "Protect basements, laundry rooms, and common technical areas",
    "Give board and insurers a clear record of when and where water was detected",
  ],
  faqTitle: "Frequently asked questions",
  faqContextAlt: "Colleagues discussing plans around a meeting table",
  faqItems: [
    {
      q: "How long does the battery last?",
      a: "Five to seven years in most installations. Sensors are sealed against humidity and rated for basements, plant rooms, and under-sink cabinets. The platform warns you well in advance when a battery needs replacing.",
    },
    {
      q: "Why cellular instead of Wi-Fi?",
      a: "Leaks start where Wi-Fi often does not reach — deep basements, shafts, and closed cabinets. NB-IoT sensors connect over the mobile network independently of your building's wireless infrastructure.",
    },
    {
      q: "Water rope vs point detector — when should we use which?",
      a: "Use point detectors under sinks, next to water heaters, and beside appliances where a single spot is the risk. Run water rope along pipe runs, under raised floors, and across low points where water could travel before anyone notices.",
    },
    {
      q: "Can we use the incident log for insurance documentation?",
      a: "Yes. Every detection is timestamped, geotagged to the sensor on your floor plan, and retained in the platform. Most customers export the log directly to their broker or insurer after an escape-of-water claim.",
    },
    {
      q: "What does it cost?",
      a: "The price depends on the number of sensors and the layout of your building. Book a demo and we will give you a concrete estimate based on your risk points.",
    },
  ],
  ctaTitle: "Want to see it for yourself?",
  ctaSubtitle:
    "Book a 30-minute demo. We will walk through your risk points, show the platform, and give you a price estimate.",
  ctaMicrocopy: "Minutes to install · works in basements and shafts",
  spotlight: {
    heading: "Hope you never need it. Trust it when you do.",
    useCasesHeading: "Examples of places we often detect damage first",
    variants: [
      {
        key: "compact",
        label: "Compact (IP30)",
        caption: "For dry technical rooms, cabinets, and under sinks",
        alt: "RoomAlyzer Water detector Compact installed in a technical cabinet",
        hrefSlug: "water-detector",
      },
      {
        key: "pro",
        label: "Pro (IP67 waterproof)",
        caption: "For basements, plant rooms, and shafts",
        alt: "RoomAlyzer Water detector Pro installed in a plant room",
        hrefSlug: "water-detector",
      },
    ],
    useCases: [
      {
        title: "Technical shafts",
        body: "Where leaks often drip unseen down through several floors.",
      },
      {
        title: "Heating plant rooms",
        body: "Catch district-heating leaks and dripping pumps early.",
      },
      {
        title: "Elevator shafts",
        body: "Prevent sump water from damaging expensive lift equipment.",
      },
      {
        title: "Communal laundry rooms",
        body: "Behind industrial machines where pipes and hoses are rarely checked.",
      },
      {
        title: "Anywhere you need certainty",
        body: "Quick notification when unwanted water appears.",
      },
    ],
  },
};

const da: ModulePageStrings = {
  metaTitle: "Vanddetektering — lækagesensorer og alarmer | IoT Fabrikken",
  metaDescription:
    "Trådløse vandsensorer, der alarmerer via e-mail og SMS, før lækager spreder sig. Mobildækning til kældre og skakte med hændelseslog til forsikringen.",
  breadcrumbHome: "Hjem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Vanddetektering",
  heroTitle: "Smart vanddetektering.",
  heroTitleAccent: "Få beskeden, ikke skaden",
  heroLead:
    "Glem gammeldags alarmer, som ingen hører — få direkte SMS- og e-mail-notifikationer, så I fanger lækager, før de bliver til en katastrofe.",
  intro: [],
  heroPrimaryCta: "Book en gratis demo",
  heroSecondaryCta: "Få et tilbud",
  dashboardLabel: "RoomAlyzer — Vanddetektering",
  dashboardAlt: "RoomAlyzer vanddetekterings-dashboard med sensorplaceringer og aktive alarmer",
  challengesEyebrow: "Risikoen, I ikke kan høre",
  challengesHeading: "En bippe-sensor i en tom kælder er ikke beskyttelse.",
  challenges: [
    {
      title: "Læk opdaget for sent",
      body: "Vand når servere, el-installationer eller bygningens konstruktion, før nogen er opmærksom — og en mindre hændelse bliver til en stor.",
    },
    {
      title: "Alarmer, ingen hører",
      body: "En traditionel sensor sidder og bipper for sig selv i en kælder eller skakt, hvor der ikke er nogen til at bemærke den.",
    },
    {
      title: "Svært tilgængelige risikopunkter",
      body: "Skakte, kældre og teknikrum er præcis dér, hvor læk opstår — og præcis dér, hvor ingen kigger regelmæssigt.",
    },
  ],
  capabilitiesEyebrow: "Sådan beskytter RoomAlyzer",
  capabilitiesHeading: "Tidlig advarsel, der når den rette person.",
  solutionLead:
    "RoomAlyzer Vanddetektering giver facility teams og boligforeninger øjeblikkelige alarmer, pålidelig dækning i svært tilgængelige rum og dokumentation, der holder i en forsikringssag.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer forbinder " },
    { type: "sensor", slug: "water-detector", label: "Water detector" },
    { type: "text", value: " og " },
    { type: "sensor", slug: "water-rope", label: "Water rope" },
    {
      type: "text",
      value:
        "-sensorer, så facility teams og boligforeninger får øjeblikkelige alarmer, pålidelig dækning i svært tilgængelige rum og dokumentation, der holder i en forsikringssag. ",
    },
    { type: "compare", label: "Sammenlign lækagesensorer", useCaseId: "leak" },
  ],
  capabilitiesContextAlt: "Facility-team der reagerer på en vandlækagealarm",
  features: [
    {
      id: "smart-notifications",
      title: "Smarte notifikationer",
      body: "I modsætning til en bippe-sensor i en tom kælder sender RoomAlyzer alarmen direkte til dem, der kan handle — via SMS og e-mail i det øjeblik, der registreres vand.",
      unit: "SMS & e-mail",
      imageAlt: "Vanddetekteringsalarm sendt via SMS og e-mail i RoomAlyzer",
    },
    {
      id: "alarm-escalation",
      title: "Alarm-eskalering",
      body: "Definér en kontaktkæde for hvert sted. Hvis den første person ikke kvitterer alarmen, underretter systemet automatisk næste kontakt — så et læk kl. 02.00 ikke venter på, at nogen tjekker telefonen senere.",
      unit: "Eskalering",
      imageAlt: "Alarm-eskalering i RoomAlyzer vanddetektering",
    },
    {
      id: "visual-overview",
      title: "Visuelt overblik",
      body: "Se præcis hvor lækagen er registreret — på kort og plantegninger på tværs af jeres bygninger, så vagthavende ved, hvilket rum de skal til, før de ankommer.",
      unit: "Plantegninger",
      imageAlt: "Vandlækage vist på plantegning i RoomAlyzer",
    },
    {
      id: "incident-log",
      title: "Hændelseslog",
      body: "Hver detektion tidsstemples og gemmes på platformen — så I har en objektiv registrering til forsikringssager og opfølgning.",
      unit: "Audit trail",
      imageAlt: "Vandhændelseslog med tidsstempler i RoomAlyzer",
    },
    {
      id: "plug-and-play",
      title: "Plug and play",
      body: "Sensorerne kører på NB-IoT med op til syv års batterilevetid. Intet Wi-Fi, ingen gateways — monter sensoren, og den forbinder via mobilnetværket, også i dybe kældre og skakte.",
      bodyWithSensorLinks: [
        { type: "text", value: "Sensoren " },
        { type: "sensor", slug: "water-detector", label: "Water detector" },
        { type: "text", value: " og " },
        { type: "sensor", slug: "water-rope", label: "Water rope" },
        {
          type: "text",
          value:
            " kører på NB-IoT med op til syv års batterilevetid. Intet Wi-Fi, ingen gateways — monter sensoren, og den forbinder via mobilnetværket, også i dybe kældre og skakte.",
        },
      ],
      unit: "NB-IoT",
      imageAlt: "NB-IoT vandsensor installeret i et kælderteknikrum",
    },
  ],
  relatedModuleLabel: "Også relevant",
  relatedModuleBody:
    "Fredede bygninger løber en dobbelt risiko: langsom fugtskade på samlinger og pludselig vandindtrængning fra tage, rør og murværk. Kombinér vanddetektering med Bevaring for at beskytte både bygningen og det, den rummer.",
  relatedModuleLink: "Se bevaringsmodulet",
  audiencesEyebrow: "Hvem det er til",
  audiencesHeading: "Driftsteams, der skal handle hurtigt",
  audiencesLead:
    "Den samme alarm, der når en facility manager i en erhvervsbygning, når vagthavende vicevært i en boligforening — med dokumentation, alle kan stole på.",
  primaryAudienceHeading: "Til facility managers og driftsteams",
  primaryAudienceItems: [
    "Få alarmer sorteret efter kritikalitet på tværs af lokationer",
    "Dæk skakte, teknikrum og tekniske arealer uden Wi-Fi",
    "Dokumentér hændelser til forsikring og compliance",
  ],
  secondaryAudienceHeading: "Til bolig & fast ejendom",
  secondaryAudienceItems: [
    "Nå vagthavende viceværter via SMS — også når ingen er på stedet",
    "Beskyt kældre, vaskerier og fælles tekniske arealer",
    "Giv bestyrelse og forsikring et klart billede af, hvornår og hvor der blev registreret vand",
  ],
  faqTitle: "Ofte stillede spørgsmål",
  faqContextAlt: "Kolleger der diskuterer planer omkring et mødebord",
  faqItems: [
    {
      q: "Hvor længe holder batteriet?",
      a: "Fem til syv år i de fleste installationer. Sensorerne er tætte mod fugt og godkendt til kældre, teknikrum og skabe under vaske. Platformen advarer i god tid, før et batteri skal skiftes.",
    },
    {
      q: "Hvorfor mobil i stedet for Wi-Fi?",
      a: "Læk opstår, hvor Wi-Fi ofte ikke når frem — dybe kældre, skakte og lukkede skabe. NB-IoT-sensorer forbinder via mobilnetværket uafhængigt af bygningens trådløse infrastruktur.",
    },
    {
      q: "Vandrebs vs. punktsensor — hvornår skal vi bruge hvad?",
      a: "Brug punktsensorer under vaske, ved vandvarmere og ved apparater, hvor ét punkt er risikoen. Læg vandrebs langs rørføringer, under hævede gulve og over lave punkter, hvor vand kan løbe, før nogen opdager det.",
    },
    {
      q: "Kan vi bruge hændelsesloggen til forsikringsdokumentation?",
      a: "Ja. Hver detektion tidsstemples, knyttes til sensoren på jeres plantegning og opbevares på platformen. De fleste kunder eksporterer loggen direkte til mægler eller forsikring efter en vandskade.",
    },
    {
      q: "Hvad koster det?",
      a: "Prisen afhænger af antal sensorer og bygningens layout. Book en demo, så giver vi et konkret estimat baseret på jeres risikopunkter.",
    },
  ],
  ctaTitle: "Vil du selv se det?",
  ctaSubtitle:
    "Book en demo på 30 minutter. Vi gennemgår jeres risikopunkter, viser platformen og giver et prisestimat.",
  ctaMicrocopy: "Installeres på minutter · virker i kældre og skakte",
  spotlight: {
    heading: "Håb, du aldrig får brug for det. Stol på det, når du gør.",
    useCasesHeading: "Eksempler på steder, hvor vi ofte opdager skaderne først",
    variants: [
      {
        key: "compact",
        label: "Compact (IP30)",
        caption: "Til tørre teknikrum, skabe og under vaske",
        alt: "RoomAlyzer Water detector Compact monteret i et teknikskab",
        hrefSlug: "water-detector",
      },
      {
        key: "pro",
        label: "Pro (IP67 vandtæt)",
        caption: "Til kældre, varmecentraler og skakte",
        alt: "RoomAlyzer Water detector Pro monteret i et teknikrum",
        hrefSlug: "water-detector",
      },
    ],
    useCases: [
      {
        title: "Tekniske skakter",
        body: "Hvor lækager ofte drypper uset ned gennem flere etager.",
      },
      {
        title: "Varmecentralen",
        body: "Overvåg utætte fjernvarmeanlæg og dryppende pumper i tide.",
      },
      {
        title: "Elevatorskakter",
        body: "Undgå at bundvand ødelægger dyr teknik og sætter elevatoren ud af drift.",
      },
      {
        title: "Fællesvaskeriet",
        body: "Bag de store industrimaskiner, hvor rør og slanger sjældent bliver tjekket.",
      },
      {
        title: "Alle steder",
        body: "Hvor du gerne vil være helt sikker på at få hurtig besked om uønsket vand.",
      },
    ],
  },
};

const de: ModulePageStrings = {
  metaTitle: "Wassererkennung — Lecksensoren und Alarme | IoT Fabrikken",
  metaDescription:
    "Drahtlose Wassersensoren, die per E-Mail und SMS alarmieren, bevor sich Lecks ausbreiten. Mobilfunkabdeckung für Keller und Schächte mit Ereignisprotokoll für die Versicherung.",
  breadcrumbHome: "Startseite",
  breadcrumbModules: "Module",
  breadcrumbCurrent: "Wassererkennung",
  heroTitle: "Smarte Wassererkennung.",
  heroTitleAccent: "Die Meldung statt des Schadens",
  heroLead:
    "Vergessen Sie veraltete Alarme, die niemand hört — erhalten Sie direkte SMS- und E-Mail-Benachrichtigungen, damit Sie Lecks erkennen, bevor sie zur Katastrophe werden.",
  intro: [],
  heroPrimaryCta: "Kostenlose Demo buchen",
  heroSecondaryCta: "Angebot anfordern",
  dashboardLabel: "RoomAlyzer — Wassererkennung",
  dashboardAlt: "RoomAlyzer Wassererkennungs-Dashboard mit Sensorpositionen und aktiven Alarmen",
  challengesEyebrow: "Das Risiko, das Sie nicht hören",
  challengesHeading: "Ein piepsender Sensor in einem leeren Keller ist kein Schutz.",
  challenges: [
    {
      title: "Lecks zu spät entdeckt",
      body: "Wasser erreicht Server, Elektroinstallationen oder das Gebäude, bevor jemand es merkt — und ein kleiner Vorfall wird zu einem großen.",
    },
    {
      title: "Alarme, die niemand hört",
      body: "Ein herkömmlicher Sensor piepst für sich allein in einem Keller oder Schacht, wo niemand in der Nähe ist, es zu bemerken.",
    },
    {
      title: "Schwer erreichbare Risikopunkte",
      body: "Schächte, Keller und Technikräume sind genau dort, wo Lecks beginnen — und genau dort, wo niemand regelmäßig nachsieht.",
    },
  ],
  capabilitiesEyebrow: "So schützt RoomAlyzer",
  capabilitiesHeading: "Frühwarnung, die die richtige Person erreicht.",
  solutionLead:
    "RoomAlyzer Wassererkennung gibt Facility-Teams und Wohnungsgenossenschaften sofortige Alarme, zuverlässige Abdeckung in schwer erreichbaren Räumen und Dokumentation, die in einem Versicherungsfall standhält.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer verbindet " },
    { type: "sensor", slug: "water-detector", label: "Wasserdetektor" },
    { type: "text", value: " und " },
    { type: "sensor", slug: "water-rope", label: "Water rope" },
    {
      type: "text",
      value:
        "-Sensoren, um Facility-Teams und Wohnungsgenossenschaften sofortige Alarme, zuverlässige Abdeckung in schwer erreichbaren Räumen und Dokumentation zu geben, die in einem Versicherungsfall standhält. ",
    },
    { type: "compare", label: "Lecksensoren vergleichen", useCaseId: "leak" },
  ],
  capabilitiesContextAlt: "Facility-Team reagiert auf einen Wasseralarm",
  features: [
    {
      id: "smart-notifications",
      title: "Smarte Benachrichtigungen",
      body: "Anders als ein reiner Piepser in einem leeren Keller sendet RoomAlyzer den Alarm direkt an die Personen, die handeln können — per SMS und E-Mail in dem Moment, in dem Wasser erkannt wird.",
      unit: "SMS & E-Mail",
      imageAlt: "Wassererkennungsalarm per SMS und E-Mail in RoomAlyzer",
    },
    {
      id: "alarm-escalation",
      title: "Alarm-Eskalation",
      body: "Definieren Sie eine Kontaktkette für jeden Standort. Wenn die erste Person den Alarm nicht quittiert, benachrichtigt das System automatisch den nächsten Kontakt — damit ein Leck um 2 Uhr morgens nicht wartet, bis jemand später sein Telefon prüft.",
      unit: "Eskalation",
      imageAlt: "Alarm-Eskalationskette in RoomAlyzer Wassererkennung",
    },
    {
      id: "visual-overview",
      title: "Visueller Überblick",
      body: "Sehen Sie genau, wo das Leck erkannt wurde — auf Karten und Grundrissen über alle Ihre Gebäude, damit das Bereitschaftsteam weiß, in welchen Raum es gehen muss, bevor es ankommt.",
      unit: "Grundrisse",
      imageAlt: "Wasserleck auf einem Grundriss in RoomAlyzer angezeigt",
    },
    {
      id: "incident-log",
      title: "Ereignisprotokoll",
      body: "Jede Erkennung wird mit Zeitstempel versehen und auf der Plattform gespeichert — für einen objektiven Nachweis für Versicherungsfälle und Nachbereitung.",
      unit: "Audit trail",
      imageAlt: "Wasserereignisprotokoll mit Zeitstempeln in RoomAlyzer",
    },
    {
      id: "plug-and-play",
      title: "Plug & play",
      body: "Sensoren laufen über NB-IoT mit bis zu sieben Jahren Batterielaufzeit. Kein WLAN, keine Gateways — Sensor montieren, und er verbindet sich über das Mobilfunknetz, auch in tiefen Kellern und Schächten.",
      bodyWithSensorLinks: [
        { type: "text", value: "Der " },
        { type: "sensor", slug: "water-detector", label: "Wasserdetektor" },
        { type: "text", value: " und die " },
        { type: "sensor", slug: "water-rope", label: "Water rope" },
        {
          type: "text",
          value:
            " laufen über NB-IoT mit bis zu sieben Jahren Batterielaufzeit. Kein WLAN, keine Gateways — Sensor montieren, und er verbindet sich über das Mobilfunknetz, auch in tiefen Kellern und Schächten.",
        },
      ],
      unit: "NB-IoT",
      imageAlt: "NB-IoT-Wassersensor in einem Kellertechnikraum installiert",
    },
  ],
  relatedModuleLabel: "Auch relevant",
  relatedModuleBody:
    "Denkmalgeschützte Gebäude laufen ein doppeltes Risiko: langsame Feuchteschäden an Sammlungen und plötzliches Wassereindringen durch Dächer, Rohre und Mauerwerk. Kombinieren Sie Wassererkennung mit Konservierung, um sowohl die Bausubstanz als auch ihren Inhalt zu schützen.",
  relatedModuleLink: "Konservierungsmodul entdecken",
  audiencesEyebrow: "Für wen",
  audiencesHeading: "Betriebsteams, die schnell handeln müssen",
  audiencesLead:
    "Derselbe Alarm, der einen Facility Manager im Gewerbegebäude erreicht, erreicht den Bereitschafts-Hausmeister in der Wohnungsgenossenschaft — mit Dokumentation, der alle vertrauen können.",
  primaryAudienceHeading: "Für Facility Manager und Betriebsteams",
  primaryAudienceItems: [
    "Alarme nach Kritikalität über Standorte hinweg sortiert",
    "Schächte, Technikräume und technische Bereiche ohne WLAN abdecken",
    "Vorfälle für Versicherung und Compliance dokumentieren",
  ],
  secondaryAudienceHeading: "Für Wohnungswirtschaft & Immobilien",
  secondaryAudienceItems: [
    "Bereitschafts-Hausmeister per SMS erreichen — auch wenn niemand vor Ort ist",
    "Keller, Waschräume und gemeinsame Technikbereiche schützen",
    "Vorstand und Versicherung einen klaren Nachweis geben, wann und wo Wasser erkannt wurde",
  ],
  faqTitle: "Häufig gestellte Fragen",
  faqContextAlt: "Kollegen besprechen Pläne an einem Besprechungstisch",
  faqItems: [
    {
      q: "Wie lange hält die Batterie?",
      a: "Fünf bis sieben Jahre in den meisten Installationen. Die Sensoren sind feuchtigkeitsgeschützt und für Keller, Technikräume und Unterschränke geeignet. Die Plattform warnt rechtzeitig, bevor eine Batterie gewechselt werden muss.",
    },
    {
      q: "Warum Mobilfunk statt WLAN?",
      a: "Lecks entstehen dort, wo WLAN oft nicht hinreicht — tiefe Keller, Schächte und geschlossene Schränke. NB-IoT-Sensoren verbinden sich über das Mobilfunknetz unabhängig von der drahtlosen Infrastruktur Ihres Gebäudes.",
    },
    {
      q: "Wasserseil vs. Punktsensor — wann nutzen wir was?",
      a: "Nutzen Sie Punktsensoren unter Spülen, neben Warmwasserbereitern und bei Geräten, wo ein einzelner Punkt das Risiko ist. Verlegen Sie Wasserseile entlang Rohrleitungen, unter Doppelböden und über Tiefpunkte, wo Wasser laufen kann, bevor es jemand bemerkt.",
    },
    {
      q: "Können wir das Ereignisprotokoll für die Versicherungsdokumentation nutzen?",
      a: "Ja. Jede Erkennung wird mit Zeitstempel versehen, dem Sensor in Ihrem Grundriss zugeordnet und auf der Plattform aufbewahrt. Die meisten Kunden exportieren das Protokoll direkt an Makler oder Versicherer nach einem Wasserschaden.",
    },
    {
      q: "Was kostet es?",
      a: "Der Preis hängt von der Anzahl der Sensoren und der Gebäudestruktur ab. Buchen Sie eine Demo, und wir erstellen ein konkretes Angebot basierend auf Ihren Risikopunkten.",
    },
  ],
  ctaTitle: "Möchten Sie es selbst sehen?",
  ctaSubtitle:
    "Buchen Sie eine 30-minütige Demo. Wir gehen Ihre Risikopunkte durch, zeigen die Plattform und erstellen ein Preisangebot.",
  ctaMicrocopy: "In Minuten installiert · funktioniert in Kellern und Schächten",
  spotlight: {
    heading: "Hoffentlich brauchen Sie es nie. Vertrauen Sie darauf, wenn Sie es tun.",
    useCasesHeading: "Beispiele für Orte, an denen wir Schäden oft zuerst erkennen",
    variants: [
      {
        key: "compact",
        label: "Compact (IP30)",
        caption: "Für trockene Technikräume, Schränke und unter Spülen",
        alt: "RoomAlyzer Water detector Compact in einem Technikschrank installiert",
        hrefSlug: "water-detector",
      },
      {
        key: "pro",
        label: "Pro (IP67 wasserdicht)",
        caption: "Für Keller, Technikräume und Schächte",
        alt: "RoomAlyzer Water detector Pro in einem Technikraum installiert",
        hrefSlug: "water-detector",
      },
    ],
    useCases: [
      {
        title: "Technische Schächte",
        body: "Wo Lecks oft unbemerkt über mehrere Etagen tropfen.",
      },
      {
        title: "Heizzentralen",
        body: "Undichte Fernwärmeanlagen und tropfende Pumpen rechtzeitig erkennen.",
      },
      {
        title: "Aufzugsschächte",
        body: "Schachtwasser verhindern, das teure Technik beschädigt und den Aufzug außer Betrieb setzt.",
      },
      {
        title: "Gemeinschaftswaschräume",
        body: "Hinter großen Industriemaschinen, wo Schläuche und Rohre selten geprüft werden.",
      },
      {
        title: "Überall dort",
        body: "Wo Sie sicher sein wollen, schnell über unerwünschtes Wasser informiert zu werden.",
      },
    ],
  },
};

const sv: ModulePageStrings = {
  metaTitle: "Vattendetektering — läckagesensorer och larm | IoT Fabrikken",
  metaDescription:
    "Trådlösa vattensensorer som larmar via e-post och SMS innan läckor sprider sig. Mobiltäckning för källare och schakt med händelselogg för försäkringen.",
  breadcrumbHome: "Hem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Vattendetektering",
  heroTitle: "Smart vattendetektering.",
  heroTitleAccent: "Få meddelandet, inte skadan",
  heroLead:
    "Glöm gammaldags larm som ingen hör — få direkta SMS- och e-postnotiser så att ni fångar läckor innan de blir en katastrof.",
  intro: [],
  heroPrimaryCta: "Boka en gratis demo",
  heroSecondaryCta: "Få en offert",
  dashboardLabel: "RoomAlyzer — Vattendetektering",
  dashboardAlt: "RoomAlyzer vattendetekteringsdashboard med sensorplatser och aktiva larm",
  challengesEyebrow: "Risken ni inte kan höra",
  challengesHeading: "En pipande sensor i en tom källare är inget skydd.",
  challenges: [
    {
      title: "Läckor upptäckta för sent",
      body: "Vatten når servrar, elinstallationer eller byggnadens konstruktion innan någon märker det — och en mindre händelse blir till en stor.",
    },
    {
      title: "Larm som ingen hör",
      body: "En traditionell sensor piper för sig själv i en källare eller ett schakt där ingen finns för att lägga märke till det.",
    },
    {
      title: "Svåråtkomliga riskpunkter",
      body: "Schakt, källare och teknikrum är precis där läckor börjar — och precis där ingen tittar regelbundet.",
    },
  ],
  capabilitiesEyebrow: "Så skyddar RoomAlyzer",
  capabilitiesHeading: "Tidig varning som når rätt person.",
  solutionLead:
    "RoomAlyzer Vattendetektering ger facility-team och bostadsföreningar omedelbara larm, tillförlitlig täckning i svåråtkomliga utrymmen och dokumentation som håller i ett försäkringsärende.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer kopplar " },
    { type: "sensor", slug: "water-detector", label: "Water detector" },
    { type: "text", value: " och " },
    { type: "sensor", slug: "water-rope", label: "Water rope" },
    {
      type: "text",
      value:
        "-sensorer så att facility-team och bostadsföreningar får omedelbara larm, tillförlitlig täckning i svåråtkomliga utrymmen och dokumentation som håller i ett försäkringsärende. ",
    },
    { type: "compare", label: "Jämför läckagesensorer", useCaseId: "leak" },
  ],
  capabilitiesContextAlt: "Facility-team som svarar på ett vattenläckagelarm",
  features: [
    {
      id: "smart-notifications",
      title: "Smarta notiser",
      body: "Till skillnad från en pipande sensor i en tom källare skickar RoomAlyzer larmet direkt till dem som kan agera — via SMS och e-post i samma ögonblick som vatten detekteras.",
      unit: "SMS & e-post",
      imageAlt: "Vattendetekteringslarm skickat via SMS och e-post i RoomAlyzer",
    },
    {
      id: "alarm-escalation",
      title: "Larmeskalering",
      body: "Definiera en kontaktkedja för varje plats. Om den första personen inte kvitterar larmet meddelar systemet automatiskt nästa kontakt — så ett läckage kl. 02.00 inte väntar på att någon kollar telefonen senare.",
      unit: "Eskalering",
      imageAlt: "Larmeskalering i RoomAlyzer vattendetektering",
    },
    {
      id: "visual-overview",
      title: "Visuell översikt",
      body: "Se exakt var läckaget detekterades — på kartor och planlösningar i era byggnader, så jourteamet vet vilket rum de ska gå till innan de anländer.",
      unit: "Planlösningar",
      imageAlt: "Vattenläcka visad på planlösning i RoomAlyzer",
    },
    {
      id: "incident-log",
      title: "Händelselogg",
      body: "Varje detektering tidsstämplas och sparas på plattformen — så att ni har ett objektivt underlag för försäkringsärenden och uppföljning.",
      unit: "Audit trail",
      imageAlt: "Vattenhändelselogg med tidsstämplar i RoomAlyzer",
    },
    {
      id: "plug-and-play",
      title: "Plug & play",
      body: "Sensorerna kör på NB-IoT med upp till sju års batteritid. Inget Wi-Fi, inga gateways — montera sensorn så ansluter den via mobilnätet, även i djupa källare och schakt.",
      bodyWithSensorLinks: [
        { type: "text", value: "Sensorn " },
        { type: "sensor", slug: "water-detector", label: "Water detector" },
        { type: "text", value: " och " },
        { type: "sensor", slug: "water-rope", label: "Water rope" },
        {
          type: "text",
          value:
            " kör på NB-IoT med upp till sju års batteritid. Inget Wi-Fi, inga gateways — montera sensorn så ansluter den via mobilnätet, även i djupa källare och schakt.",
        },
      ],
      unit: "NB-IoT",
      imageAlt: "NB-IoT vattensensor installerad i ett källarteknikrum",
    },
  ],
  relatedModuleLabel: "Också relevant",
  relatedModuleBody:
    "Kulturbyggnader löper en dubbel risk: långsam fuktskada på samlingar och plötsligt vatteninträngande från tak, rör och murverk. Kombinera vattendetektering med Bevarande för att skydda både byggnaden och det den rymmer.",
  relatedModuleLink: "Utforska bevarandemodulen",
  audiencesEyebrow: "Vem det är för",
  audiencesHeading: "Driftteam som behöver agera snabbt",
  audiencesLead:
    "Samma larm som når en facility manager i en kommersiell byggnad når jourhavande vaktmästare i en bostadsförening — med dokumentation alla kan lita på.",
  primaryAudienceHeading: "För facility managers och driftteam",
  primaryAudienceItems: [
    "Få larm sorterade efter kritikalitet över platser",
    "Täck schakt, teknikrum och tekniska ytor utan Wi-Fi",
    "Dokumentera händelser för försäkring och compliance",
  ],
  secondaryAudienceHeading: "För bostäder & fastigheter",
  secondaryAudienceItems: [
    "Nå jourhavande vaktmästare via SMS — även när ingen är på plats",
    "Skydda källare, tvättstugor och gemensamma teknikutrymmen",
    "Ge styrelse och försäkring ett tydligt underlag om när och var vatten detekterades",
  ],
  faqTitle: "Vanliga frågor",
  faqContextAlt: "Kolleger som diskuterar planer runt ett mötesbord",
  faqItems: [
    {
      q: "Hur länge håller batteriet?",
      a: "Fem till sju år i de flesta installationer. Sensorerna är tätade mot fukt och godkända för källare, teknikrum och skåp under diskhoar. Plattformen varnar i god tid innan ett batteri behöver bytas.",
    },
    {
      q: "Varför mobil istället för Wi-Fi?",
      a: "Läckor börjar där Wi-Fi ofta inte når — djupa källare, schakt och stängda skåp. NB-IoT-sensorer ansluter via mobilnätet oberoende av byggnadens trådlösa infrastruktur.",
    },
    {
      q: "Vattenrep vs punktsensor — när ska vi använda vilket?",
      a: "Använd punktsensorer under diskhoar, vid varmvattenberedare och vid apparater där en enskild punkt är risken. Lägg vattenrep längs rördragningar, under upphöjda golv och över lågpunkter där vatten kan rinna innan någon märker det.",
    },
    {
      q: "Kan vi använda händelseloggen för försäkringsdokumentation?",
      a: "Ja. Varje detektering tidsstämplas, kopplas till sensorn på er planlösning och sparas på plattformen. De flesta kunder exporterar loggen direkt till mäklare eller försäkringsbolag efter en vattenskada.",
    },
    {
      q: "Vad kostar det?",
      a: "Priset beror på antal sensorer och byggnadens layout. Boka en demo så ger vi en konkret uppskattning baserad på era riskpunkter.",
    },
  ],
  ctaTitle: "Vill du se det själv?",
  ctaSubtitle:
    "Boka en 30-minuters demo. Vi går igenom era riskpunkter, visar plattformen och ger en prisuppskattning.",
  ctaMicrocopy: "Installeras på minuter · fungerar i källare och schakt",
  spotlight: {
    heading: "Hoppas du aldrig behöver det. Lita på det när du gör det.",
    useCasesHeading: "Exempel på platser där vi ofta upptäcker skador först",
    variants: [
      {
        key: "compact",
        label: "Compact (IP30)",
        caption: "För torra teknikrum, skåp och under diskhoar",
        alt: "RoomAlyzer Water detector Compact monterad i ett teknikskåp",
        hrefSlug: "water-detector",
      },
      {
        key: "pro",
        label: "Pro (IP67 vattentät)",
        caption: "För källare, teknikrum och schakt",
        alt: "RoomAlyzer Water detector Pro monterad i ett teknikrum",
        hrefSlug: "water-detector",
      },
    ],
    useCases: [
      {
        title: "Tekniska schakt",
        body: "Där läckor ofta droppar oupptäckt genom flera våningar.",
      },
      {
        title: "Värmecentraler",
        body: "Upptäck läckande fjärrvärmeanläggningar och droppande pumpar i tid.",
      },
      {
        title: "Hisschakt",
        body: "Förhindra att schaktvatten skadar dyr teknik och sätter hissen ur drift.",
      },
      {
        title: "Gemensamma tvättstugor",
        body: "Bakom stora industrimaskiner där slangar och rör sällan kontrolleras.",
      },
      {
        title: "Överallt",
        body: "Där ni vill vara helt säkra på att få snabb avisering om oönskat vatten.",
      },
    ],
  },
};

const dictionaries: Partial<Record<Lang, ModulePageStrings>> = { en, da, de, sv };

export function getWaterDetection(lang: Lang): ModulePageStrings {
  return dictionaries[lang] ?? dictionaries[defaultLang]!;
}
