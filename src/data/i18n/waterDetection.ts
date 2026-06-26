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
  heroTitle: "Catch leaks before",
  heroTitleAccent: "the damage spreads.",
  heroLead:
    "A burst pipe in a shaft, water in an electrical cabinet, or a slow drip under a sink can run undetected for hours — until the repair bill and the disruption are already large.",
  intro: [
    "Water leak detection is about one thing: getting the message before a small leak becomes an expensive disaster.",
    "RoomAlyzer sends alerts straight to email or SMS when water is detected, runs on a cellular network that reaches deep basements and shafts, and keeps a detailed incident log you can hand to your insurer.",
  ],
  heroPrimaryCta: "Book a free demo",
  heroSecondaryCta: "Get an offer",
  dashboardLabel: "RoomAlyzer — Water detection",
  dashboardAlt: "RoomAlyzer water detection dashboard showing sensor locations and active alerts",
  challengesEyebrow: "The challenges you know",
  challengesHeading: "When nobody hears the alarm, the damage keeps growing.",
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
    {
      title: "No documentation after the fact",
      body: "When the insurance conversation comes, you have no objective record of when and where the leak happened.",
    },
  ],
  capabilitiesEyebrow: "How RoomAlyzer solves it",
  capabilitiesHeading: "Early warning that reaches the right person.",
  solutionLead:
    "RoomAlyzer Water detection gives facility teams and housing associations instant alerts, reliable coverage in hard-to-reach spaces, and documentation that stands up in an insurance claim.",
  capabilitiesContextAlt: "Facility team responding to a water leak alert",
  features: [
    {
      id: "instant-alerts",
      title: "Instant alerts",
      body: "Email and SMS go out the moment water is detected — to as many recipients as you need, so someone who can act always gets the message.",
      unit: "Alerts",
      imageAlt: "Water detection alert sent by email and SMS in RoomAlyzer",
    },
    {
      id: "cellular",
      title: "Cellular coverage",
      body: "NB-IoT sensors work independently of local Wi-Fi — reaching deep basements, shafts, plant rooms, and closed cabinets.",
      unit: "NB-IoT",
      imageAlt: "Cellular water sensor placed in a basement plant room",
    },
    {
      id: "point-detector",
      title: "Point & rope sensors",
      body: "Place compact point detectors under sinks and appliances, or run water rope along pipe runs and low points for continuous coverage.",
      unit: "Sensors",
      imageAlt: "RoomAlyzer Water point detector and water rope sensors",
    },
    {
      id: "incident-log",
      title: "Incident log",
      body: "Every detection is timestamped and mapped on the floor plan — giving you an objective record for insurance and post-incident review.",
      unit: "Audit trail",
      imageAlt: "Water incident log with timestamps and floor plan in RoomAlyzer",
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
  primaryAudienceHeading: "For Facility Managers",
  primaryAudienceItems: [
    "Get alerts sorted by criticality across sites",
    "Cover shafts, plant rooms, and technical spaces without Wi-Fi",
    "Document incidents for insurance and compliance",
  ],
  secondaryAudienceHeading: "For Housing & Operations Teams",
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
};

const da: ModulePageStrings = {
  metaTitle: "Vanddetektering — lækagesensorer og alarmer | IoT Fabrikken",
  metaDescription:
    "Trådløse vandsensorer, der alarmerer via e-mail og SMS, før lækager spreder sig. Mobildækning til kældre og skakte med hændelseslog til forsikringen.",
  breadcrumbHome: "Hjem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Vanddetektering",
  heroTitle: "Fang lækager, før",
  heroTitleAccent: "skaden spreder sig.",
  heroLead:
    "Et sprængt rør i en skakt, vand i et el-skab eller et langsomt dryp under en vask kan løbe uopdaget i timevis — indtil regningen og generne allerede er store.",
  intro: [
    "Detektion af vandlækager handler om én ting: at få beskeden, før et lille læk bliver til en dyr katastrofe.",
    "RoomAlyzer sender alarmer direkte til e-mail eller SMS, når der registreres vand, kører på et mobilnetværk, der når dybe kældre og skakte, og fører en detaljeret hændelseslog, I kan give til forsikringsselskabet.",
  ],
  heroPrimaryCta: "Book en gratis demo",
  heroSecondaryCta: "Få et tilbud",
  dashboardLabel: "RoomAlyzer — Vanddetektering",
  dashboardAlt: "RoomAlyzer vanddetekterings-dashboard med sensorplaceringer og aktive alarmer",
  challengesEyebrow: "Udfordringerne, I kender",
  challengesHeading: "Når ingen hører alarmen, vokser skaden.",
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
    {
      title: "Ingen dokumentation bagefter",
      body: "Når forsikringssamtalen kommer, har I ingen objektiv registrering af, hvornår og hvor lækket skete.",
    },
  ],
  capabilitiesEyebrow: "Sådan løser RoomAlyzer det",
  capabilitiesHeading: "Tidlig advarsel, der når den rette person.",
  solutionLead:
    "RoomAlyzer Vanddetektering giver facility teams og boligforeninger øjeblikkelige alarmer, pålidelig dækning i svært tilgængelige rum og dokumentation, der holder i en forsikringssag.",
  capabilitiesContextAlt: "Facility-team der reagerer på en vandlækagealarm",
  features: [
    {
      id: "instant-alerts",
      title: "Øjeblikkelige alarmer",
      body: "E-mail og SMS sendes i det øjeblik, der registreres vand — til så mange modtagere, I har brug for, så nogen, der kan handle, altid får beskeden.",
      unit: "Alarmer",
      imageAlt: "Vanddetekteringsalarm sendt via e-mail og SMS i RoomAlyzer",
    },
    {
      id: "cellular",
      title: "Mobildækning",
      body: "NB-IoT-sensorer fungerer uafhængigt af lokalt Wi-Fi — og når dybe kældre, skakte, teknikrum og lukkede skabe.",
      unit: "NB-IoT",
      imageAlt: "Mobil vandsensor placeret i et kælderteknikrum",
    },
    {
      id: "point-detector",
      title: "Punkt- og reb-sensorer",
      body: "Placér kompakte punktsensorer under vaske og ved apparater, eller læg vandrebs langs rørføringer og lave punkter for kontinuerlig dækning.",
      unit: "Sensorer",
      imageAlt: "RoomAlyzer Water punktsensor og vandrebs-sensorer",
    },
    {
      id: "incident-log",
      title: "Hændelseslog",
      body: "Hver detektion tidsstemples og placeres på plantegningen — så I har en objektiv registrering til forsikring og opfølgning.",
      unit: "Audit trail",
      imageAlt: "Vandhændelseslog med tidsstempler og plantegning i RoomAlyzer",
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
  primaryAudienceHeading: "Til facility management",
  primaryAudienceItems: [
    "Få alarmer sorteret efter kritikalitet på tværs af lokationer",
    "Dæk skakte, teknikrum og tekniske arealer uden Wi-Fi",
    "Dokumentér hændelser til forsikring og compliance",
  ],
  secondaryAudienceHeading: "Til bolig- og driftsteams",
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
};

const de: ModulePageStrings = {
  metaTitle: "Wassererkennung — Lecksensoren und Alarme | IoT Fabrikken",
  metaDescription:
    "Drahtlose Wassersensoren, die per E-Mail und SMS alarmieren, bevor sich Lecks ausbreiten. Mobilfunkabdeckung für Keller und Schächte mit Ereignisprotokoll für die Versicherung.",
  breadcrumbHome: "Startseite",
  breadcrumbModules: "Module",
  breadcrumbCurrent: "Wassererkennung",
  heroTitle: "Lecks erkennen, bevor",
  heroTitleAccent: "sich der Schaden ausbreitet.",
  heroLead:
    "Ein geplatztes Rohr im Schacht, Wasser im Elektroschrank oder ein langsames Tropfen unter der Spüle kann stundenlang unbemerkt bleiben — bis die Rechnung und der Betriebsausfall bereits groß sind.",
  intro: [
    "Wasserleck-Erkennung dreht sich um eine Sache: die Meldung zu bekommen, bevor ein kleines Leck zu einer teuren Katastrophe wird.",
    "RoomAlyzer sendet Alarme direkt per E-Mail oder SMS, wenn Wasser erkannt wird, nutzt ein Mobilfunknetz, das tiefe Keller und Schächte erreicht, und führt ein detailliertes Ereignisprotokoll, das Sie der Versicherung vorlegen können.",
  ],
  heroPrimaryCta: "Kostenlose Demo buchen",
  heroSecondaryCta: "Angebot anfordern",
  dashboardLabel: "RoomAlyzer — Wassererkennung",
  dashboardAlt: "RoomAlyzer Wassererkennungs-Dashboard mit Sensorpositionen und aktiven Alarmen",
  challengesEyebrow: "Die Herausforderungen, die Sie kennen",
  challengesHeading: "Wenn niemand den Alarm hört, wächst der Schaden weiter.",
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
    {
      title: "Keine Dokumentation im Nachhinein",
      body: "Wenn das Versicherungsgespräch kommt, haben Sie keinen objektiven Nachweis, wann und wo das Leck aufgetreten ist.",
    },
  ],
  capabilitiesEyebrow: "So löst RoomAlyzer das",
  capabilitiesHeading: "Frühwarnung, die die richtige Person erreicht.",
  solutionLead:
    "RoomAlyzer Wassererkennung gibt Facility-Teams und Wohnungsgenossenschaften sofortige Alarme, zuverlässige Abdeckung in schwer erreichbaren Räumen und Dokumentation, die in einem Versicherungsfall standhält.",
  capabilitiesContextAlt: "Facility-Team reagiert auf einen Wasseralarm",
  features: [
    {
      id: "instant-alerts",
      title: "Sofortige Alarme",
      body: "E-Mail und SMS gehen in dem Moment raus, in dem Wasser erkannt wird — an so viele Empfänger wie nötig, damit immer jemand die Meldung bekommt, der handeln kann.",
      unit: "Alarme",
      imageAlt: "Wassererkennungsalarm per E-Mail und SMS in RoomAlyzer",
    },
    {
      id: "cellular",
      title: "Mobilfunkabdeckung",
      body: "NB-IoT-Sensoren arbeiten unabhängig vom lokalen WLAN — und erreichen tiefe Keller, Schächte, Technikräume und geschlossene Schränke.",
      unit: "NB-IoT",
      imageAlt: "Mobiler Wassersensor in einem Kellertechnikraum",
    },
    {
      id: "point-detector",
      title: "Punkt- und Seilsensoren",
      body: "Platzieren Sie kompakte Punktsensoren unter Spülen und neben Geräten, oder verlegen Sie Wasserseile entlang Rohrleitungen und in Tiefpunkten für durchgängige Abdeckung.",
      unit: "Sensoren",
      imageAlt: "RoomAlyzer Water Punktsensor und Wasserseil-Sensoren",
    },
    {
      id: "incident-log",
      title: "Ereignisprotokoll",
      body: "Jede Erkennung wird mit Zeitstempel versehen und im Grundriss verortet — für einen objektiven Nachweis für Versicherung und Nachbereitung.",
      unit: "Audit trail",
      imageAlt: "Wasserereignisprotokoll mit Zeitstempeln und Grundriss in RoomAlyzer",
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
  primaryAudienceHeading: "Für Facility Management",
  primaryAudienceItems: [
    "Alarme nach Kritikalität über Standorte hinweg sortiert",
    "Schächte, Technikräume und technische Bereiche ohne WLAN abdecken",
    "Vorfälle für Versicherung und Compliance dokumentieren",
  ],
  secondaryAudienceHeading: "Für Wohnungs- und Betriebsteams",
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
};

const sv: ModulePageStrings = {
  metaTitle: "Vattendetektering — läckagesensorer och larm | IoT Fabrikken",
  metaDescription:
    "Trådlösa vattensensorer som larmar via e-post och SMS innan läckor sprider sig. Mobiltäckning för källare och schakt med händelselogg för försäkringen.",
  breadcrumbHome: "Hem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Vattendetektering",
  heroTitle: "Fånga läckor innan",
  heroTitleAccent: "skadan sprider sig.",
  heroLead:
    "Ett sprucket rör i ett schakt, vatten i ett elskåp eller ett långsamt dropp under en disk kan gå oupptäckt i timmar — tills räkningen och störningen redan är stor.",
  intro: [
    "Vattenläckagedetektering handlar om en sak: att få meddelandet innan ett litet läckage blir en dyr katastrof.",
    "RoomAlyzer skickar larm direkt via e-post eller SMS när vatten detekteras, kör på ett mobilnät som når djupa källare och schakt, och för en detaljerad händelselogg som ni kan lämna till försäkringsbolaget.",
  ],
  heroPrimaryCta: "Boka en gratis demo",
  heroSecondaryCta: "Få en offert",
  dashboardLabel: "RoomAlyzer — Vattendetektering",
  dashboardAlt: "RoomAlyzer vattendetekteringsdashboard med sensorplatser och aktiva larm",
  challengesEyebrow: "Utmaningarna ni känner igen",
  challengesHeading: "När ingen hör larmet fortsätter skadan växa.",
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
    {
      title: "Ingen dokumentation i efterhand",
      body: "När försäkringsdialogen kommer har ni inget objektivt underlag om när och var läckaget inträffade.",
    },
  ],
  capabilitiesEyebrow: "Så löser RoomAlyzer det",
  capabilitiesHeading: "Tidig varning som når rätt person.",
  solutionLead:
    "RoomAlyzer Vattendetektering ger facility-team och bostadsföreningar omedelbara larm, tillförlitlig täckning i svåråtkomliga utrymmen och dokumentation som håller i ett försäkringsärende.",
  capabilitiesContextAlt: "Facility-team som svarar på ett vattenläckagelarm",
  features: [
    {
      id: "instant-alerts",
      title: "Omedelbara larm",
      body: "E-post och SMS skickas i samma ögonblick som vatten detekteras — till så många mottagare ni behöver, så att någon som kan agera alltid får meddelandet.",
      unit: "Larm",
      imageAlt: "Vattendetekteringslarm skickat via e-post och SMS i RoomAlyzer",
    },
    {
      id: "cellular",
      title: "Mobiltäckning",
      body: "NB-IoT-sensorer fungerar oberoende av lokalt Wi-Fi — och når djupa källare, schakt, teknikrum och stängda skåp.",
      unit: "NB-IoT",
      imageAlt: "Mobil vattensensor placerad i ett källarteknikrum",
    },
    {
      id: "point-detector",
      title: "Punkt- och repsensorer",
      body: "Placera kompakta punktsensorer under diskhoar och vid apparater, eller lägg vattenrep längs rördragningar och lågpunkter för kontinuerlig täckning.",
      unit: "Sensorer",
      imageAlt: "RoomAlyzer Water punktsensor och vattenrepssensorer",
    },
    {
      id: "incident-log",
      title: "Händelselogg",
      body: "Varje detektering tidsstämplas och placeras på planlösningen — så att ni har ett objektivt underlag för försäkring och uppföljning.",
      unit: "Audit trail",
      imageAlt: "Vattenhändelselogg med tidsstämplar och planlösning i RoomAlyzer",
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
  primaryAudienceHeading: "För facility management",
  primaryAudienceItems: [
    "Få larm sorterade efter kritikalitet över platser",
    "Täck schakt, teknikrum och tekniska ytor utan Wi-Fi",
    "Dokumentera händelser för försäkring och compliance",
  ],
  secondaryAudienceHeading: "För bostads- och driftteam",
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
};

const dictionaries: Partial<Record<Lang, ModulePageStrings>> = { en, da, de, sv };

export function getWaterDetection(lang: Lang): ModulePageStrings {
  return dictionaries[lang] ?? dictionaries[defaultLang]!;
}
