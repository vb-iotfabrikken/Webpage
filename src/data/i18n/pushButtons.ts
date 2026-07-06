import type { Lang } from "../lang";
import { defaultLang } from "../lang";
import type { ModulePageStrings } from "./modulePageTypes";

const en: ModulePageStrings = {
  metaTitle: "Push buttons: one-tap feedback and service requests | IoT Fabrikken",
  metaDescription:
    "Wireless push buttons for cleaning requests, restocking and maintenance. Route alerts instantly to service teams, no apps, no login, no delay.",
  breadcrumbHome: "Home",
  breadcrumbModules: "Modules",
  breadcrumbCurrent: "Push buttons",
  heroTitle: "Feedback with",
  heroTitleAccent: "a single tap.",
  heroLead:
    "Real-time user feedback that turns problems into instant service requests",
  intro: [
    "User feedback usually arrives too late, as a complaint, after the coffee machine has been broken all morning or the washroom has been out of paper for hours. By the time you hear about it, the damage to the experience is already done.",
  ],
  heroPrimaryCta: "Book a free demo",
  heroSecondaryCta: "Get an offer",
  dashboardLabel: "RoomAlyzer: Push buttons",
  dashboardAlt:
    "RoomAlyzer dashboard showing push-button feedback, routing rules and response history",
  challengesEyebrow: "The challenges you know",
  challengesHeading: "When feedback is slow, every small issue becomes a complaint.",
  challenges: [
    {
      title: "Problems you hear about too late",
      body: "Empty dispensers, dirty restrooms and broken fixtures are often reported by email or front desk — long after the guest or colleague has already left unhappy.",
    },
    {
      title: "Alerts that go nowhere",
      body: "Without clear routing, a cleaning request can sit in a shared inbox while the right team never sees it — and the same room triggers again the next day.",
    },
    {
      title: "No record of what happened",
      body: "When feedback lives on sticky notes or verbal handovers, you cannot prove response times, spot repeat issues or hold vendors to an SLA.",
    },
  ],
  capabilitiesEyebrow: "How RoomAlyzer solves it",
  capabilitiesHeading: "One press from the floor to the right team.",
  solutionLead:
    "RoomAlyzer Push buttons turn a physical tap into a routed, trackable service request — built for facility managers who need visibility and service teams who need clarity.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Push buttons turn the " },
    { type: "sensor", slug: "touch", label: "Touch" },
    {
      type: "text",
      value:
        " sensor into a routed, trackable service request — built for facility managers who need visibility and service teams who need clarity.",
    },
  ],
  capabilitiesContextAlt: "Employee submitting feedback with a RoomAlyzer touch button",
  features: [
    {
      id: "one-tap",
      title: "One-tap feedback",
      body: "Staff or guests press once — no app download, no login and no long form to fill in.",
      bodyWithSensorLinks: [
        { type: "text", value: "The " },
        { type: "sensor", slug: "touch", label: "Touch" },
        {
          type: "text",
          value:
            " sensor lets staff or guests press once — no app download, no login and no long form to fill in.",
        },
      ],
      unit: "One press",
      imageAlt: "Wall-mounted push button for one-tap service feedback",
    },
    {
      id: "instant-routing",
      title: "Instant routing",
      body: "Alerts reach the right team, mobile device or ticketing system within seconds of the press.",
      unit: "Seconds",
      imageAlt: "RoomAlyzer alert routing rules for push-button events",
    },
    {
      id: "feedback-history",
      title: "Feedback history",
      body: "See trends by room, floor and button role — spot recurring issues before they escalate.",
      unit: "Trends",
      imageAlt: "Push-button feedback history and trend chart in RoomAlyzer",
    },
    {
      id: "flexible-placement",
      title: "Flexible placement",
      body: "Mount on walls, dispensers, desks or equipment. Battery-powered and wireless — no cabling required.",
      unit: "Anywhere",
      imageAlt: "Push buttons mounted in a restroom, meeting room and corridor",
    },
  ],
  relatedModuleLabel: "Smarter together",
  relatedModuleBody:
    "Combine push-button signals with occupancy from Usage and cleaning — dispatch cleaners to restrooms guests flagged and skip rooms that sat empty all day.",
  relatedModuleLink: "Explore usage and cleaning",
  audiencesEyebrow: "Who it's for",
  audiencesHeading: "Visibility for managers, clarity for the teams on the floor",
  audiencesLead:
    "The same tap serves the colleague who needs soap restocked and the facility manager who needs proof that service levels are met.",
  primaryAudienceHeading: "For facility managers",
  primaryAudienceItems: [
    "See every open request on one dashboard",
    "Set routing rules by building, floor and button role",
    "Track response times for SLA and vendor contracts",
    "Reduce complaint volume with proactive service",
  ],
  secondaryAudienceHeading: "For service teams",
  secondaryAudienceItems: [
    "Get mobile alerts with room and issue type",
    "Close tasks in the field without paperwork",
    "Prioritise by urgency and location",
    "Integrate with existing ticketing tools",
  ],
  faqTitle: "Frequently asked questions",
  faqContextAlt: "Colleagues discussing plans around a meeting table",
  faqItems: [
    {
      q: "How long does the battery last?",
      a: "LoRaWAN push buttons typically run 3–7 years on a single battery, depending on how often they are pressed. The platform warns you well in advance when a battery needs replacing.",
    },
    {
      q: "Where should we place the buttons?",
      a: "Common spots include restrooms (cleaning and restock), meeting rooms (A/V and maintenance), corridors (general issues) and next to dispensers. Mount at a reachable height with a clear label for what each press means.",
    },
    {
      q: "How do alerts get routed?",
      a: "Each button has a role — cleaning, restock, maintenance, feedback and so on. RoomAlyzer routes events to the right team, email group, mobile app or ticketing system via webhooks, based on the button role and its location.",
    },
    {
      q: "Is the solution GDPR-compliant?",
      a: "Yes. Push buttons report a service event from a location — not who pressed them. No personal data is collected unless you explicitly choose to link presses to logged-in users in a custom integration.",
    },
    {
      q: "What does it cost?",
      a: "The price depends on the number of buttons and how routing is set up. Book a demo and we will give you a concrete estimate based on your buildings and use cases.",
    },
  ],
  ctaTitle: "Want to see it for yourself?",
  ctaSubtitle:
    "Book a 30-minute demo. We will show the platform, walk through your case and give you a price estimate.",
  ctaMicrocopy: "Ready in seconds · place anywhere",
};

const da: ModulePageStrings = {
  metaTitle: "Trykknapper: feedback og serviceanmodninger med ét tryk | IoT Fabrikken",
  metaDescription:
    "Trådløse trykknapper til rengøringsanmodninger, genopfyldning og vedligehold. Send alarmer direkte til serviceteams, uden apps, login eller forsinkelse.",
  breadcrumbHome: "Hjem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Trykknapper",
  heroTitle: "Feedback med",
  heroTitleAccent: "et enkelt tryk.",
  heroLead:
    "Brugerfeedback i realtid, der gør problemer til øjeblikkelige serviceanmodninger",
  intro: [
    "Brugerfeedback kommer som regel for sent, som en klage, efter kaffemaskinen har været i stykker hele morgenen, eller toilettet har været uden papir i timevis. Når I hører om det, er skaden på oplevelsen allerede sket.",
  ],
  heroPrimaryCta: "Book en gratis demo",
  heroSecondaryCta: "Få et tilbud",
  dashboardLabel: "RoomAlyzer: Trykknapper",
  dashboardAlt:
    "RoomAlyzer-dashboard, der viser tryknap-feedback, routingregler og svarhistorik",
  challengesEyebrow: "Udfordringerne, I kender",
  challengesHeading: "Når feedback er langsom, bliver hvert lille problem til en klage.",
  challenges: [
    {
      title: "Problemer I hører om for sent",
      body: "Tomme dispensere, beskidte toiletter og defekte installationer meldes ofte via mail eller reception — længe efter gæsten eller kollegaen allerede er gået utilfreds.",
    },
    {
      title: "Alarmer der ikke når frem",
      body: "Uden tydelig routing kan en rengøringsanmodning ligge i en fælles indbakke, mens det rigtige team aldrig ser den — og det samme rum udløser alarmen igen næste dag.",
    },
    {
      title: "Ingen dokumentation for, hvad der skete",
      body: "Når feedback lever på post-its eller mundtlige overleveringer, kan I hverken dokumentere svartider, spotte gentagne problemer eller holde leverandører til en SLA.",
    },
  ],
  capabilitiesEyebrow: "Sådan løser RoomAlyzer det",
  capabilitiesHeading: "Ét tryk fra gulvet til det rigtige team.",
  solutionLead:
    "RoomAlyzer Trykknapper gør et fysisk tryk til en routed, sporbar serviceanmodning — bygget til facility managers, der skal have overblik, og serviceteams, der skal have klarhed.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Trykknapper gør " },
    { type: "sensor", slug: "touch", label: "Touch" },
    {
      type: "text",
      value:
        "-sensoren til en routed, sporbar serviceanmodning — bygget til facility managers, der skal have overblik, og serviceteams, der skal have klarhed.",
    },
  ],
  capabilitiesContextAlt: "Medarbejder der sender feedback med en RoomAlyzer-trykknap",
  features: [
    {
      id: "one-tap",
      title: "Feedback med ét tryk",
      body: "Medarbejdere eller gæster trykker én gang — ingen app, ingen login og ingen lang formular.",
      bodyWithSensorLinks: [
        { type: "text", value: "Med " },
        { type: "sensor", slug: "touch", label: "Touch" },
        {
          type: "text",
          value:
            "-sensoren trykker medarbejdere eller gæster én gang — ingen app, ingen login og ingen lang formular.",
        },
      ],
      unit: "Ét tryk",
      imageAlt: "Væghængt tryknap til servicefeedback med ét tryk",
    },
    {
      id: "instant-routing",
      title: "Øjeblikkelig routing",
      body: "Alarmer når det rigtige team, den rigtige mobilenhed eller ticketsystemet inden for sekunder efter trykket.",
      unit: "Sekunder",
      imageAlt: "RoomAlyzer routingregler for tryknap-events",
    },
    {
      id: "feedback-history",
      title: "Feedbackhistorik",
      body: "Se trends pr. rum, etage og knaprolle — spot gentagne problemer, før de eskalerer.",
      unit: "Trends",
      imageAlt: "Tryknap-feedbackhistorik og trendgraf i RoomAlyzer",
    },
    {
      id: "flexible-placement",
      title: "Fleksibel placering",
      body: "Monter på vægge, dispensere, skriveborde eller udstyr. Batteridrevet og trådløs — ingen kabler.",
      unit: "Overalt",
      imageAlt: "Trykknapper monteret i toilet, mødelokale og korridor",
    },
  ],
  relatedModuleLabel: "Smartere sammen",
  relatedModuleBody:
    "Kombinér tryknap-signaler med belægning fra Brug og rengøring — send rengøring til toiletter, gæster har markeret, og spring tomme rum over.",
  relatedModuleLink: "Udforsk brug og rengøring",
  audiencesEyebrow: "Hvem det er til",
  audiencesHeading: "Overblik for ledere, klarhed for teams på gulvet",
  audiencesLead:
    "Det samme tryk hjælper kollegaen, der mangler sæbe, og facility manageren, der skal dokumentere, at serviceniveauet holdes.",
  primaryAudienceHeading: "Til Facility Management",
  primaryAudienceItems: [
    "Se alle åbne anmodninger på ét dashboard",
    "Sæt routingregler pr. bygning, etage og knaprolle",
    "Følg svartider til SLA og leverandørkontrakter",
    "Reducer klagemængden med proaktiv service",
  ],
  secondaryAudienceHeading: "Til serviceteams",
  secondaryAudienceItems: [
    "Få mobilalarmer med rum og problemtype",
    "Luk opgaver i marken uden papirarbejde",
    "Prioritér efter hastighed og placering",
    "Integrér med eksisterende ticketsystemer",
  ],
  faqTitle: "Ofte stillede spørgsmål",
  faqContextAlt: "Kolleger der diskuterer planer omkring et mødebord",
  faqItems: [
    {
      q: "Hvor længe holder batteriet?",
      a: "LoRaWAN-trykknapper kører typisk 3–7 år på ét batteri, afhængigt af hvor ofte de trykkes. Platformen advarer i god tid, når et batteri skal skiftes.",
    },
    {
      q: "Hvor skal vi placere knapperne?",
      a: "Typiske steder er toiletter (rengøring og genopfyldning), mødelokaler (A/V og vedligehold), korridorer (generelle problemer) og ved dispensere. Monter i en behagelig højde med en tydelig label for, hvad hvert tryk betyder.",
    },
    {
      q: "Hvordan routes alarmerne?",
      a: "Hver knap har en rolle — rengøring, genopfyldning, vedligehold, feedback osv. RoomAlyzer sender events til det rigtige team, mailgruppe, mobilapp eller ticketsystem via webhooks, baseret på knaprollen og placeringen.",
    },
    {
      q: "Er løsningen GDPR-kompatibel?",
      a: "Ja. Trykknapper rapporterer en servicehændelse fra en placering — ikke hvem der trykkede. Ingen persondata indsamles, medmindre I eksplicit vælger at koble tryk til loggede brugere i en custom integration.",
    },
    {
      q: "Hvad koster det?",
      a: "Prisen afhænger af antal knapper og hvordan routing er sat op. Book en demo, så giver vi et konkret estimat ud fra jeres bygninger og use cases.",
    },
  ],
  ctaTitle: "Vil du se det selv?",
  ctaSubtitle:
    "Book en 30-minutters demo. Vi viser platformen, går jeres case igennem og giver et prisestimat.",
  ctaMicrocopy: "Klar på sekunder · placer overalt",
};

const de: ModulePageStrings = {
  metaTitle: "Drucktasten: Feedback und Serviceanfragen mit einem Tipp | IoT Fabrikken",
  metaDescription:
    "Drahtlose Drucktasten für Reinigungsanfragen, Nachfüllungen und Wartung. Leiten Sie Alarme sofort an Serviceteams weiter, ohne Apps, Login oder Verzögerung.",
  breadcrumbHome: "Startseite",
  breadcrumbModules: "Module",
  breadcrumbCurrent: "Drucktasten",
  heroTitle: "Feedback mit",
  heroTitleAccent: "einem einzigen Tipp.",
  heroLead:
    "Echtzeit-Feedback, das Probleme in sofortige Serviceanfragen verwandelt",
  intro: [
    "Nutzerfeedback kommt meist zu spät — als Beschwerde, nachdem die Kaffeemaschine den ganzen Morgen defekt war oder die Toilette stundenlang kein Papier hatte. Wenn Sie davon hören, ist der Schaden für die Erfahrung bereits entstanden.",
  ],
  heroPrimaryCta: "Kostenlose Demo buchen",
  heroSecondaryCta: "Angebot anfordern",
  dashboardLabel: "RoomAlyzer: Drucktasten",
  dashboardAlt:
    "RoomAlyzer-Dashboard mit Drucktasten-Feedback, Routing-Regeln und Antwortverlauf",
  challengesEyebrow: "Die Herausforderungen, die Sie kennen",
  challengesHeading: "Wenn Feedback langsam ist, wird jedes kleine Problem zur Beschwerde.",
  challenges: [
    {
      title: "Probleme, von denen Sie zu spät erfahren",
      body: "Leere Spender, schmutzige Toiletten und defekte Einrichtungen werden oft per E-Mail oder an der Rezeption gemeldet — lange nachdem der Gast oder Kollege unzufrieden gegangen ist.",
    },
    {
      title: "Alarme, die nirgends ankommen",
      body: "Ohne klares Routing kann eine Reinigungsanfrage in einem gemeinsamen Postfach liegen, während das richtige Team sie nie sieht — und derselbe Raum löst am nächsten Tag erneut aus.",
    },
    {
      title: "Keine Aufzeichnung dessen, was passiert ist",
      body: "Wenn Feedback auf Post-its oder mündlichen Übergaben basiert, können Sie weder Reaktionszeiten nachweisen, wiederkehrende Probleme erkennen noch Dienstleister an eine SLA halten.",
    },
  ],
  capabilitiesEyebrow: "So löst RoomAlyzer das",
  capabilitiesHeading: "Ein Tipp vom Boden bis zum richtigen Team.",
  solutionLead:
    "RoomAlyzer Drucktasten machen aus einem physischen Tipp eine geroutete, nachverfolgbare Serviceanfrage — für Facility Manager mit Überblick und Serviceteams mit Klarheit.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Drucktasten machen aus dem " },
    { type: "sensor", slug: "touch", label: "Touch" },
    {
      type: "text",
      value:
        "-Sensor eine geroutete, nachverfolgbare Serviceanfrage — für Facility Manager mit Überblick und Serviceteams mit Klarheit.",
    },
  ],
  capabilitiesContextAlt: "Mitarbeitende geben Feedback über eine RoomAlyzer-Touch-Taste",
  features: [
    {
      id: "one-tap",
      title: "Feedback mit einem Tipp",
      body: "Mitarbeitende oder Gäste drücken einmal — kein App-Download, kein Login und kein langes Formular.",
      bodyWithSensorLinks: [
        { type: "text", value: "Mit dem " },
        { type: "sensor", slug: "touch", label: "Touch" },
        {
          type: "text",
          value:
            "-Sensor drücken Mitarbeitende oder Gäste einmal — kein App-Download, kein Login und kein langes Formular.",
        },
      ],
      unit: "Ein Tipp",
      imageAlt: "Wandmontierte Drucktaste für Service-Feedback mit einem Tipp",
    },
    {
      id: "instant-routing",
      title: "Sofortiges Routing",
      body: "Alarme erreichen das richtige Team, Mobilgerät oder Ticketsystem innerhalb von Sekunden nach dem Tipp.",
      unit: "Sekunden",
      imageAlt: "RoomAlyzer Routing-Regeln für Drucktasten-Events",
    },
    {
      id: "feedback-history",
      title: "Feedback-Verlauf",
      body: "Sehen Sie Trends nach Raum, Etage und Tastenrolle — erkennen Sie wiederkehrende Probleme, bevor sie eskalieren.",
      unit: "Trends",
      imageAlt: "Drucktasten-Feedback-Verlauf und Trenddiagramm in RoomAlyzer",
    },
    {
      id: "flexible-placement",
      title: "Flexible Platzierung",
      body: "Montage an Wänden, Spendern, Schreibtischen oder Geräten. Batteriebetrieben und drahtlos — keine Verkabelung nötig.",
      unit: "Überall",
      imageAlt: "Drucktasten in Toilette, Besprechungsraum und Flur montiert",
    },
  ],
  relatedModuleLabel: "Intelligenter zusammen",
  relatedModuleBody:
    "Kombinieren Sie Drucktasten-Signale mit Belegung aus Nutzung und Reinigung — schicken Sie Reinigung in Toiletten, die Gäste gemeldet haben, und überspringen Sie leerstehende Räume.",
  relatedModuleLink: "Nutzung und Reinigung entdecken",
  audiencesEyebrow: "Für wen es gedacht ist",
  audiencesHeading: "Überblick für Manager, Klarheit für Teams vor Ort",
  audiencesLead:
    "Derselbe Tipp hilft dem Kollegen, der Seife nachfüllen lässt, und dem Facility Manager, der nachweisen muss, dass Servicelevel eingehalten werden.",
  primaryAudienceHeading: "Für Facility Manager",
  primaryAudienceItems: [
    "Alle offenen Anfragen auf einem Dashboard sehen",
    "Routing-Regeln nach Gebäude, Etage und Tastenrolle festlegen",
    "Reaktionszeiten für SLA und Dienstleisterverträge verfolgen",
    "Beschwerdevolumen durch proaktiven Service senken",
  ],
  secondaryAudienceHeading: "Für Serviceteams",
  secondaryAudienceItems: [
    "Mobile Alarme mit Raum und Problemtyp erhalten",
    "Aufgaben vor Ort ohne Papierkram abschließen",
    "Nach Dringlichkeit und Standort priorisieren",
    "Mit bestehenden Ticketsystemen integrieren",
  ],
  faqTitle: "Häufig gestellte Fragen",
  faqContextAlt: "Kollegen besprechen Pläne an einem Besprechungstisch",
  faqItems: [
    {
      q: "Wie lange hält die Batterie?",
      a: "LoRaWAN-Drucktasten laufen typischerweise 3–7 Jahre mit einer Batterie, je nach Häufigkeit der Betätigung. Die Plattform warnt rechtzeitig, wenn eine Batterie gewechselt werden muss.",
    },
    {
      q: "Wo sollen wir die Tasten platzieren?",
      a: "Übliche Stellen sind Toiletten (Reinigung und Nachfüllung), Besprechungsräume (A/V und Wartung), Flure (allgemeine Probleme) und neben Spendern. Montieren Sie in erreichbarer Höhe mit einer klaren Beschriftung, was jeder Tipp bedeutet.",
    },
    {
      q: "Wie werden Alarme geroutet?",
      a: "Jede Taste hat eine Rolle (Reinigung, Nachfüllung, Wartung, Feedback usw.). RoomAlyzer leitet Events per Webhooks an das richtige Team, die E-Mail-Gruppe, die Mobile App oder das Ticketsystem, basierend auf Tastenrolle und Standort.",
    },
    {
      q: "Ist die Lösung DSGVO-konform?",
      a: "Ja. Drucktasten melden ein Service-Ereignis von einem Standort — nicht, wer gedrückt hat. Es werden keine personenbezogenen Daten erfasst, es sei denn, Sie verknüpfen Tastendrücke in einer Custom-Integration explizit mit angemeldeten Nutzern.",
    },
    {
      q: "Was kostet es?",
      a: "Der Preis hängt von der Anzahl der Tasten und der Routing-Konfiguration ab. Buchen Sie eine Demo — wir erstellen eine konkrete Schätzung für Ihre Gebäude und Anwendungsfälle.",
    },
  ],
  ctaTitle: "Möchten Sie es selbst sehen?",
  ctaSubtitle:
    "Buchen Sie eine 30-minütige Demo. Wir zeigen die Plattform, gehen Ihren Fall durch und erstellen eine Preisschätzung.",
  ctaMicrocopy: "In Sekunden einsatzbereit · überall platzierbar",
};

const sv: ModulePageStrings = {
  metaTitle: "Tryckknappar: feedback och serviceförfrågningar med ett tryck | IoT Fabrikken",
  metaDescription:
    "Trådlösa tryckknappar för städförfrågningar, påfyllning och underhåll. Dirigera larm direkt till serviceteam, utan appar, inloggning eller fördröjning.",
  breadcrumbHome: "Hem",
  breadcrumbModules: "Moduler",
  breadcrumbCurrent: "Tryckknappar",
  heroTitle: "Feedback med",
  heroTitleAccent: "ett enda tryck.",
  heroLead:
    "Användarfeedback i realtid som förvandlar problem till omedelbara serviceförfrågningar",
  intro: [
    "Användarfeedback kommer oftast för sent — som ett klagomål, efter att kaffemaskinen varit trasig hela morgonen eller toaletten saknat papper i timmar. När ni hör om det är skadan på upplevelsen redan skedd.",
  ],
  heroPrimaryCta: "Boka en gratis demo",
  heroSecondaryCta: "Få en offert",
  dashboardLabel: "RoomAlyzer: Tryckknappar",
  dashboardAlt:
    "RoomAlyzer-dashboard som visar tryckknappsfeedback, routingregler och svarshistorik",
  challengesEyebrow: "Utmaningarna ni känner igen",
  challengesHeading: "När feedback är långsam blir varje litet problem ett klagomål.",
  challenges: [
    {
      title: "Problem ni får höra om för sent",
      body: "Tomma dispensrar, smutsiga toaletter och trasiga installationer rapporteras ofta via e-post eller reception — långt efter att gästen eller kollegan redan lämnat missnöjd.",
    },
    {
      title: "Larm som inte når fram",
      body: "Utan tydlig routing kan en städförfrågan ligga i en gemensam inkorg medan rätt team aldrig ser den — och samma rum utlöser igen nästa dag.",
    },
    {
      title: "Inget underlag för vad som hände",
      body: "När feedback lever på post-its eller muntliga överlämningar kan ni varken visa svarstider, hitta återkommande problem eller hålla leverantörer till en SLA.",
    },
  ],
  capabilitiesEyebrow: "Så löser RoomAlyzer det",
  capabilitiesHeading: "Ett tryck från golvet till rätt team.",
  solutionLead:
    "RoomAlyzer Tryckknappar gör ett fysiskt tryck till en dirigerad, spårbar serviceförfrågan — byggd för facility managers som behöver överblick och serviceteam som behöver tydlighet.",
  solutionLeadWithSensorLinks: [
    { type: "text", value: "RoomAlyzer Tryckknappar gör " },
    { type: "sensor", slug: "touch", label: "Touch" },
    {
      type: "text",
      value:
        "-sensorn till en dirigerad, spårbar serviceförfrågan — byggd för facility managers som behöver överblick och serviceteam som behöver tydlighet.",
    },
  ],
  capabilitiesContextAlt: "Medarbetare som skickar feedback med en RoomAlyzer-tryckknapp",
  features: [
    {
      id: "one-tap",
      title: "Feedback med ett tryck",
      body: "Medarbetare eller gäster trycker en gång — ingen app, ingen inloggning och inget långt formulär.",
      bodyWithSensorLinks: [
        { type: "text", value: "Med " },
        { type: "sensor", slug: "touch", label: "Touch" },
        {
          type: "text",
          value:
            "-sensorn trycker medarbetare eller gäster en gång — ingen app, ingen inloggning och inget långt formulär.",
        },
      ],
      unit: "Ett tryck",
      imageAlt: "Väggmonterad tryckknapp för servicefeedback med ett tryck",
    },
    {
      id: "instant-routing",
      title: "Omedelbar routing",
      body: "Larm når rätt team, mobilenhet eller ärendesystem inom sekunder efter trycket.",
      unit: "Sekunder",
      imageAlt: "RoomAlyzer routingregler för tryckknappsevent",
    },
    {
      id: "feedback-history",
      title: "Feedbackhistorik",
      body: "Se trender per rum, våning och knapproll — hitta återkommande problem innan de eskalerar.",
      unit: "Trender",
      imageAlt: "Tryckknappsfeedbackhistorik och trenddiagram i RoomAlyzer",
    },
    {
      id: "flexible-placement",
      title: "Flexibel placering",
      body: "Montera på väggar, dispensrar, skrivbord eller utrustning. Batteridriven och trådlös — inga kablar.",
      unit: "Överallt",
      imageAlt: "Tryckknappar monterade i toalett, mötesrum och korridor",
    },
  ],
  relatedModuleLabel: "Smartare tillsammans",
  relatedModuleBody:
    "Kombinera tryckknappsignaler med beläggning från Användning och städning — skicka städning till toaletter gäster flaggat och hoppa över rum som stått tomma hela dagen.",
  relatedModuleLink: "Utforska användning och städning",
  audiencesEyebrow: "Vem det är för",
  audiencesHeading: "Överblick för chefer, tydlighet för team på golvet",
  audiencesLead:
    "Samma tryck hjälper kollegan som behöver påfyllning av tvål och facility managern som ska visa att servicenivån hålls.",
  primaryAudienceHeading: "För Facility Managers",
  primaryAudienceItems: [
    "Se alla öppna förfrågningar på en dashboard",
    "Sätt routingregler per byggnad, våning och knapproll",
    "Följ svarstider för SLA och leverantörsavtal",
    "Minska klagomålsvolymen med proaktiv service",
  ],
  secondaryAudienceHeading: "För serviceteam",
  secondaryAudienceItems: [
    "Få mobila larm med rum och problemtyp",
    "Stäng uppgifter i fält utan pappersarbete",
    "Prioritera efter brådska och plats",
    "Integrera med befintliga ärendesystem",
  ],
  faqTitle: "Vanliga frågor",
  faqContextAlt: "Kolleger som diskuterar planer runt ett mötesbord",
  faqItems: [
    {
      q: "Hur länge håller batteriet?",
      a: "LoRaWAN-tryckknappar kör vanligtvis 3–7 år på ett batteri, beroende på hur ofta de trycks. Plattformen varnar i god tid när ett batteri behöver bytas.",
    },
    {
      q: "Var ska vi placera knapparna?",
      a: "Vanliga platser är toaletter (städning och påfyllning), mötesrum (A/V och underhåll), korridorer (allmänna problem) och vid dispensrar. Montera i behaglig höjd med en tydlig etikett för vad varje tryck betyder.",
    },
    {
      q: "Hur dirigeras larmen?",
      a: "Varje knapp har en roll — städning, påfyllning, underhåll, feedback osv. RoomAlyzer skickar event till rätt team, e-postgrupp, mobilapp eller ärendesystem via webhooks, baserat på knapproll och plats.",
    },
    {
      q: "Är lösningen GDPR-förenlig?",
      a: "Ja. Tryckknappar rapporterar en servicehändelse från en plats — inte vem som tryckte. Inga personuppgifter samlas in om ni inte uttryckligen kopplar tryck till inloggade användare i en anpassad integration.",
    },
    {
      q: "Vad kostar det?",
      a: "Priset beror på antal knappar och hur routing är uppsatt. Boka en demo så ger vi en konkret uppskattning utifrån era byggnader och användningsfall.",
    },
  ],
  ctaTitle: "Vill du se det själv?",
  ctaSubtitle:
    "Boka en 30-minuters demo. Vi visar plattformen, går igenom ert fall och ger en prisuppskattning.",
  ctaMicrocopy: "Redo på sekunder · placera överallt",
};

const dictionaries: Partial<Record<Lang, ModulePageStrings>> = { en, da, de, sv };

export function getPushButtons(lang: Lang): ModulePageStrings {
  return dictionaries[lang] ?? dictionaries[defaultLang]!;
}
