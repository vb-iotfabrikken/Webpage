import type { Lang } from "../lang";
import type { CaseStudyDetail } from "./caseStudyDetails";

/**
 * Per-locale overlays for case-study detail pages, keyed by the canonical
 * English slug (the same keys as `details` in `caseStudyDetails.ts`).
 * English copy lives in `caseStudyDetails.ts`.
 */
export type CaseDetailOverlay = Partial<CaseStudyDetail>;

const da: Record<string, CaseDetailOverlay> = {
  "norddjurs-municipality": {
    titleAccent: "Dokumenterer det nødvendige antal arbejdspladser.",
    intro: [
      "Politikerne i Norddjurs Kommune har besluttet at lukke en af deres fire administrationsbygninger. Derfor måler Dilan Kocabas og Ejendomscenteret for at sikre, at der er plads nok til alle og de rette faciliteter til medarbejderne.",
    ],
    quote: {
      heading: "Hvad siger Norddjurs Kommune?",
      body: "Vi har brug for at vide, hvor mange arbejdspladser vores medarbejdere faktisk har brug for. Kontoret skal være et rart sted, der er indrettet efter deres behov. Mange af vores medarbejdere arbejder ude i marken, og som alle andre steder arbejder flere også hjemmefra. Det handler selvfølgelig også om at bruge skatteborgernes penge fornuftigt.",
    },
  },
  "varde-municipality": {
    titleAccent: "Sammenlægning og fair fordeling mellem afdelinger.",
    intro: [
      "Varde har på politisk niveau besluttet at frasælge en af sine administrationsbygninger og samle medarbejderne på rådhuset. Betina Christensen og hendes team måler derfor på begge lokationer for at sikre korrekt dimensionering og indretning.",
    ],
    quote: {
      heading: "Hvad siger Varde Kommune?",
      body: "Data fra sensorerne giver mig et objektivt billede af, hvor meget plads vi faktisk har brug for, og hvor meget plads hvert område skal tildeles for at sikre en fair indretning. Vi får også indsigt i, hvor mange og hvor store mødelokaler der er behov for.",
    },
  },
  "dansk-industri": {
    titleAccent: "Space management med sensorer frigav 650 kvadratmeter, og det gør en forskel på bundlinjen.",
    intro: [
      "Jimmy Holk har været på en lang rejse med indretning af arbejdspladser. At måle skriveborde og mødelokaler med sensorer har givet dokumentationen til at skære mange kvadratmeter væk.",
    ],
    quote: {
      heading: "Hvad siger Dansk Industri?",
      body: "Jeg kan ikke styre efter alles holdninger og fornemmelser. Og jeg sidder i et politisk hus, hvor man ikke laver så store ændringer uden at have sine argumenter – og dermed sin dokumentation – i orden. Det får jeg med IoT Fabrikken.",
    },
  },
  "gribskov-municipality": {
    titleAccent: "Data til at dimensionere et nyt rådhus korrekt.",
    intro: [
      "Forud for opførelsen af et nyt rådhus måler Gribskov Kommune brugen af det nuværende med sensorer. Af hensyn til både budgettet og den grønne omstilling vil kommunen sikre, at den ikke bygger mere end nødvendigt.",
    ],
    quote: {
      heading: "Hvad siger Gribskov Kommune?",
      body: "Koncernledelsen var ekstremt begejstret for de data, vi kan levere til at kvalificere deres beslutningsgrundlag for flere forskellige beslutninger. Tilbagemeldingen er, at de nu kan komme videre fra holdninger og antagelser. Derudover var de meget overraskede over, hvor lidt vi faktisk bruger vores skriveborde, og den ineffektive brug af mødelokaler (få deltagere i store mødelokaler). Det gav dem virkelig noget at tænke over.",
    },
  },
  "gribskov-kommune": {
    titleAccent: "Indeklimadata til skoler og kommunale bygninger.",
    intro: [
      "Kommunen er en del af Realdanias indeklimaprojekt og bruger RoomAlyzer-platformen til at beslutte, hvordan forholdene i skoler og andre bygninger forbedres.",
    ],
  },
  "archdiocese-of-freiburg": {
    titleAccent: "Bevidstgør frivillige gennem datadreven forståelse af indeklimaet.",
    intro: [
      "Sensorløsningen muliggør kontinuerlig måling af temperatur og luftfugtighed i kirkerum. Klimarisici kan opdages tidligt, og bevidstheden blandt frivillige styrkes, på en platform skræddersyet til kirkernes behov.",
    ],
    quote: {
      heading: "Hvad siger Erzdiözese Freiburg?",
      body: "Mennesker har ikke en pålidelig fornemmelse af relativ luftfugtighed, alligevel spiller den en afgørende rolle for indeklimaet i vores kirker. Derfor måler vi med sensorer. Kontinuerlig registrering af temperatur og luftfugtighed hjælper os med at forstå forholdene på stedet præcist. Dataene hjælper os med at bevidstgøre frivillige om emnet og reagere i tide på mulige risici for bygninger og inventar. Det er en stor fordel for vores arbejde. Vi valgte IoT Fabrikken, fordi de tilbyder en meget overskuelig platform og er fleksible omkring vores behov, hvilket passer godt i en kirkelig sammenhæng.",
      attribution: "Claudia Dambacher, rådgiver, Kirkebeskyttelse",
    },
  },
  "evangelische-kirche-in-hessen-und-nassau": {
    titleAccent: "Beskytter historiske kirker gennem præcis indeklimaovervågning.",
    intro: [
      "Historiske kirkebygninger har brug for stabile forhold hele året. Trådløse sensorer og RoomAlyzer giver driftsteams kontinuerlige data om luftfugtighed og temperatur uden at forstyrre gudstjenester eller fredede interiører.",
    ],
  },
  sweco: {
    titleAccent: "Indeklimadokumentation til ejendomsejere og DGNB-projekter.",
    intro: [
      "Sweco hjælper ejendomsejere med at sikre et godt indeklima i deres bygninger.",
    ],
    quote: {
      heading: "Hvad siger Sweco?",
      body: "Sweco arbejder allerede med DGNB-certificeringer i mange af deres projekter. Med RoomAlyzer-systemet fra IoT Fabrikken er det muligt at kortlægge indeklimaforhold specifikt i DGNB-projekter, hvor fleksibel indeklimaovervågning også kan være en del af metoden. Sensorerne, der måler alt fra temperatur, CO2-koncentration, luftfugtighed, TVOC, lyd og lys, er nemme at installere og forstyrrer ikke bygningens brugere, som også selv kan bruge loggerne til at overvåge og sikre et godt indeklima. I portalen, brugt sammen med indeklimaloggerne, kan DGNB-rapporter genereres med få klik, hvor man vælger, hvilke sensorer og intervaller der skal med i rapporten.",
      attribution: "Frederik Kastrup, bæredygtighedsingeniør, Sweco Danmark",
    },
  },
  "skade-teknik": {
    titleAccent: "Dokumenterer indeklimaet, når lejer og udlejer er uenige.",
    intro: [
      "Mange ejendomsadministratorer og udlejere har svært ved at dokumentere, hvorfor der opstår skimmel i et bestemt lejemål, og løsningerne er ofte komplicerede og dyre. SKADE-teknik ville hjælpe sine kunder i boligsektoren med en enkel løsning.",
    ],
    quote: {
      heading: "Hvad siger SKADE-teknik?",
      subtitle: "Løser skimmelkonflikter mellem lejer og udlejer",
      body: "Et godt eksempel på, hvordan vi bruger RoomAlyzer-platformen, er min seneste sag for en boligforening. Viceværten havde modtaget klager fra nogle beboere, der mente, de havde skimmel på grund af bygningens beskaffenhed. Det er en klassisk situation, hvor der har været en lang dialog mellem lejer og udlejer, og den går i hårdknude, fordi det er ord mod ord. I stedet kom vi ind og begyndte at måle med RoomAlyzer-platformen, og efter et par ugers måling fandt vi ud af, at der ikke var noget galt med bygningen, men at det handlede om, at beboerne skruede for højt op for varmen og ikke luftede ud. Det gjorde os i stand til at løse konflikten og begynde at lære beboerne nogle nye vaner. Det handler også om, at IoT-enheder er nemme at bruge. Man går bare ind og sætter sensoren op, og så går man igen. Vi har tidligere arbejdet med nogle sensorer, der krævede en gateway, og har oplevet, at et barn i lejligheden slukker for gatewayen. Vi har også måttet arbejde med gammeldags dataloggere, der skal tømmes for data mange gange. Med denne sensor kan vi følge med i realtid og stoppe målingen, når det giver mening, i stedet for at skulle ud og tømme en gammeldags sensor hver fjortende dag.",
      attribution: "Bo J. Mortensen, ejer, SKADE-teknik, Aalborg",
    },
  },
  "boligselskabet-sjaelland": {
    titleAccent: "Dokumenterer indeklimaet før og efter renovering.",
    intro: [
      "Boligselskabet Sjælland oplevede udfordringer med at dokumentere ændringerne i indeklimaet før og efter renoveringer af bygninger og lejligheder.",
    ],
  },
  "vejen-kommune": {
    titleAccent: "Skiller fakta fra fornemmelser om indeklimaet.",
    intro: [
      "Vejen Kommune oplevede klager over indeklimaet og havde svært ved at konkludere: hvad er fakta, og hvad er fornemmelser?",
    ],
  },
  "rudersdal-museer": {
    titleAccent: "Stabile forhold i udstillings- og magasinrum.",
    intro: [
      "Rudersdal Museer søgte en løsning, der kunne sikre et optimalt indeklima i udstillings- og magasinrum.",
    ],
  },
  "solroed-kommune": {
    titleAccent: "Opgraderer fra et ældre sensorsystem.",
    intro: [
      "Solrød Kommune havde et ældre indeklimasensorsystem og havde brug for en moderne platform til løbende overvågning og rapportering.",
    ],
  },
  "deutsches-museum-nordschleswig": {
    titleAccent: "Fjernadgang til klimadata.",
    intro: [
      "Deutsches Museum Nordschleswig manglede mulighed for at aflæse data på afstand. Trådløse loggere leverer nu kontinuerlige målinger uden manuelle runder i bygningen.",
    ],
  },
  "faaborg-museum": {
    titleAccent: "Mindre tid brugt på manuel aflæsning af sensorer.",
    intro: [
      "Faaborg Museum brugte meget tid på fysisk at aflæse sensorer. RoomAlyzer automatiserer indsamlingen, så personalet kan fokusere på bevaringsarbejdet.",
    ],
  },
  "hj-energi": {
    titleAccent: "Data til rådgivning om bygningers ydeevne.",
    intro: [
      "Hos HJ-Energi arbejder vi for at få bygninger til at fungere, som de var tænkt. Sensordata understøtter idriftsættelse, fejlfinding og rapportering til kunder.",
    ],
  },
  "zealand-erhvervsakademi": {
    titleAccent: "Fuld kontrol over indeklimaet i alle undervisningslokaler.",
    intro: [
      "Zealand ønskede fuld kontrol over indeklimaet i alle undervisningslokaler. Kontinuerlige CO2- og temperaturdata hjælper driftsteamet med at ventilere og varme op på de rette tidspunkter.",
    ],
  },
  "holbaek-kommune": {
    titleAccent: "Bedre indeklima for medarbejderne.",
    intro: [
      "Vi valgte at arbejde med RoomAlyzer, fordi vi vil sætte fokus på indeklimaet og give vores medarbejdere de bedste forhold.",
    ],
  },
};

const de: Record<string, CaseDetailOverlay> = {
  "norddjurs-municipality": {
    titleAccent: "Dokumentiert die benötigte Anzahl an Arbeitsplätzen.",
    intro: [
      "Die Politik der Gemeinde Norddjurs hat beschlossen, eines ihrer vier Verwaltungsgebäude zu schließen. Deshalb messen Dilan Kocabas und das Immobilienzentrum, um sicherzustellen, dass genug Platz für alle und die richtigen Einrichtungen für die Mitarbeitenden vorhanden sind.",
    ],
    quote: {
      heading: "Was sagt die Gemeinde Norddjurs?",
      body: "Wir müssen wissen, wie viele Arbeitsplätze unsere Mitarbeitenden tatsächlich brauchen. Das Büro soll ein angenehmer Ort sein, der auf ihre Bedürfnisse zugeschnitten ist. Viele unserer Mitarbeitenden sind im Außendienst tätig und wie überall arbeiten auch mehr von zu Hause. Es geht natürlich auch darum, das Geld der Steuerzahler sinnvoll einzusetzen.",
    },
  },
  "varde-municipality": {
    titleAccent: "Zusammenlegung und faire Verteilung zwischen Abteilungen.",
    intro: [
      "Varde hat auf politischer Ebene beschlossen, eines seiner Verwaltungsgebäude abzustoßen und die Mitarbeitenden im Rathaus zusammenzuführen. Betina Christensen und ihr Team messen daher an beiden Standorten, um die richtige Dimensionierung und Aufteilung sicherzustellen.",
    ],
    quote: {
      heading: "Was sagt die Gemeinde Varde?",
      body: "Die Daten der Sensoren geben mir ein objektives Bild davon, wie viel Platz wir tatsächlich brauchen und wie viel Platz jedem Bereich zugeteilt werden sollte, um eine faire Gestaltung zu gewährleisten. Wir gewinnen auch Erkenntnisse darüber, wie viele und wie große Besprechungsräume erforderlich sind.",
    },
  },
  "dansk-industri": {
    titleAccent: "Space-Management mit Sensoren machte 650 Quadratmeter frei und das macht sich in der Bilanz bemerkbar.",
    intro: [
      "Jimmy Holk hat eine lange Reise mit der Arbeitsplatzgestaltung hinter sich. Das Messen von Arbeitsplätzen und Besprechungsräumen mit Sensoren lieferte die Dokumentation, um viele Quadratmeter einzusparen.",
    ],
    quote: {
      heading: "Was sagt Dansk Industri?",
      body: "Ich kann nicht nach den Meinungen und Gefühlen aller steuern. Und ich bewege mich in einem politischen Umfeld, in dem man so große Veränderungen nicht vornimmt, ohne seine Argumente und damit auch seine Dokumentation in Ordnung zu haben. Das bekomme ich mit der IoT-Lösung.",
    },
  },
  "gribskov-municipality": {
    titleAccent: "Daten zur richtigen Dimensionierung eines neuen Rathauses.",
    intro: [
      "Vor dem Bau eines neuen Rathauses misst die Gemeinde Gribskov die Nutzung des aktuellen mit Sensoren. Sowohl aus Budgetgründen als auch wegen der grünen Wende möchte die Gemeinde sicherstellen, dass sie nicht mehr baut als nötig.",
    ],
    quote: {
      heading: "Was sagt die Gemeinde Gribskov?",
      body: "Die Konzernleitung war äußerst begeistert von den Daten, die wir liefern können, um ihre Entscheidungsgrundlage für mehrere verschiedene Entscheidungen zu untermauern. Die Rückmeldung ist, dass sie nun von Meinungen und Annahmen wegkommen können. Außerdem waren sie sehr überrascht, wie wenig wir unsere Arbeitsplätze tatsächlich nutzen und über die ineffiziente Nutzung von Besprechungsräumen (wenige Teilnehmende in großen Besprechungsräumen). Das gab ihnen wirklich zu denken.",
    },
  },
  "gribskov-kommune": {
    titleAccent: "Indoor climate data für Schulen und kommunale Gebäude.",
    intro: [
      "Die Gemeinde ist Teil des Indoor climateprojekts von Realdania und nutzt die RoomAlyzer-Plattform, um zu entscheiden, wie die Bedingungen in Schulen und anderen Gebäuden verbessert werden.",
    ],
  },
  "archdiocese-of-freiburg": {
    titleAccent: "Sensibilisiert Ehrenamtliche durch datenbasiertes Verständnis des Indoor climates.",
    intro: [
      "Die Sensorlösung ermöglicht die kontinuierliche Messung von Temperatur und Luftfeuchtigkeit in Kirchenräumen. Klimarisiken lassen sich früh erkennen und das Bewusstsein bei Ehrenamtlichen stärken, auf einer Plattform, die auf die Anforderungen von Kirchen zugeschnitten ist.",
    ],
    quote: {
      heading: "Was sagt die Erzdiözese Freiburg?",
      body: "Menschen haben kein verlässliches Gespür für die relative Luftfeuchtigkeit, dabei spielt sie für das Indoor climate in unseren Kirchen eine entscheidende Rolle. Deshalb messen wir mit Sensoren. Die kontinuierliche Erfassung von Temperatur und Luftfeuchtigkeit hilft uns, die Bedingungen vor Ort genau zu verstehen. Die Daten helfen uns, Ehrenamtliche für das Thema zu sensibilisieren und rechtzeitig auf mögliche Risiken für Gebäude und Ausstattung zu reagieren. Das ist ein großer Vorteil für unsere Arbeit. Wir haben uns für IoT Fabrikken entschieden, weil sie eine sehr übersichtliche Plattform bieten und flexibel auf unsere Bedürfnisse eingehen, was in einem kirchlichen Kontext gut passt.",
      attribution: "Claudia Dambacher, Referentin, Kirchenschutz",
    },
  },
  "evangelische-kirche-in-hessen-und-nassau": {
    titleAccent: "Schützt historische Kirchen durch präzise Indoor climate monitoring.",
    intro: [
      "Historische Kirchengebäude brauchen das ganze Jahr über stabile Bedingungen. Drahtlose Sensoren und RoomAlyzer liefern Facility-Teams kontinuierliche Daten zu Luftfeuchtigkeit und Temperatur, ohne Gottesdienste oder denkmalgeschützte Innenräume zu stören.",
    ],
  },
  sweco: {
    titleAccent: "Indoor climatedokumentation für Immobilieneigentümer und DGNB-Projekte.",
    intro: [
      "Sweco hilft Immobilieneigentümern, ein gutes Indoor climate in ihren Gebäuden sicherzustellen.",
    ],
    quote: {
      heading: "Was sagt Sweco?",
      body: "Sweco arbeitet in vielen seiner Projekte bereits mit DGNB-Zertifizierungen. Mit dem RoomAlyzer-System von IoT Fabrikken lassen sich Indoor climatebedingungen gezielt in DGNB-Projekten erfassen, in denen flexibles Indoor climate-Monitoring auch Teil der Methodik sein kann. Die Sensoren, die alles von Temperatur, CO2-Konzentration, Luftfeuchtigkeit, TVOC, Schall bis Licht messen, sind einfach zu installieren und stören die Gebäudenutzer nicht, die die Logger auch selbst nutzen können, um ein gutes Indoor climate zu überwachen und sicherzustellen. Im Portal, zusammen mit den Indoor climate-Loggern verwendet, lassen sich DGNB-Berichte mit wenigen Klicks erstellen, indem man auswählt, welche Sensoren und Intervalle in den Bericht aufgenommen werden.",
      attribution: "Frederik Kastrup, Nachhaltigkeitsingenieur, Sweco Dänemark",
    },
  },
  "skade-teknik": {
    titleAccent: "Dokumentiert das Indoor climate, wenn Mieter und Vermieter uneinig sind.",
    intro: [
      "Viele Hausverwalter und Vermieter tun sich schwer zu dokumentieren, warum in einer bestimmten Mietwohnung Schimmel entsteht und die Lösungen sind oft kompliziert und teuer. SKADE-teknik wollte seinen Kunden im Wohnungssektor mit einer einfachen Lösung helfen.",
    ],
    quote: {
      heading: "Was sagt SKADE-teknik?",
      subtitle: "Schimmelkonflikte zwischen Mieter und Vermieter lösen",
      body: "Ein gutes Beispiel dafür, wie wir die RoomAlyzer-Plattform nutzen, ist mein jüngster Fall für eine Wohnungsgenossenschaft. Der Hausmeister hatte Beschwerden von einigen Bewohnern erhalten, die glaubten, wegen der Beschaffenheit des Gebäudes Schimmel zu haben. Das ist eine klassische Situation, in der es einen langen Dialog zwischen Mieter und Vermieter gab und der festfährt, weil es Aussage gegen Aussage steht. Stattdessen kamen wir hinzu und begannen, mit der RoomAlyzer-Plattform zu messen und nach einigen Wochen Messung stellten wir fest, dass mit dem Gebäude nichts verkehrt war, sondern dass es darum ging, dass die Bewohner die Heizung zu hoch drehten und nicht lüfteten. So konnten wir den Konflikt lösen und den Bewohnern einige neue Gewohnheiten beibringen. Es geht auch darum, dass IoT-Geräte einfach zu bedienen sind. Man geht einfach hinein, richtet den Sensor ein und geht wieder. Wir haben früher mit Sensoren gearbeitet, die ein Gateway benötigten und erlebt, dass ein Kind in der Wohnung das Gateway ausschaltet. Wir mussten auch mit altmodischen Datenloggern arbeiten, die viele Male von Daten geleert werden müssen. Mit diesem Sensor können wir in Echtzeit mitverfolgen und die Messung beenden, wenn es sinnvoll ist, statt alle vierzehn Tage hinausfahren und einen altmodischen Sensor leeren zu müssen.",
      attribution: "Bo J. Mortensen, Inhaber, SKADE-teknik, Aalborg",
    },
  },
  "boligselskabet-sjaelland": {
    titleAccent: "Dokumentiert das Indoor climate vor und nach der Renovierung.",
    intro: [
      "Boligselskabet Sjælland hatte Schwierigkeiten, die Veränderungen des Indoor climates vor und nach Renovierungen von Gebäuden und Wohnungen zu dokumentieren.",
    ],
  },
  "vejen-kommune": {
    titleAccent: "Trennt Fakten von Gefühlen beim Indoor climate.",
    intro: [
      "Die Gemeinde Vejen hatte mit Beschwerden über das Indoor climate zu tun und konnte schwer Schlüsse ziehen: Was sind Fakten und was sind Gefühle?",
    ],
  },
  "rudersdal-museer": {
    titleAccent: "Stabile Bedingungen in Ausstellungs- und Lagerräumen.",
    intro: [
      "Rudersdal Museen suchten eine Lösung, die ein optimales Indoor climate in Ausstellungs- und Lagerräumen sicherstellt.",
    ],
  },
  "solroed-kommune": {
    titleAccent: "Umstieg von einem Alt-Sensorsystem.",
    intro: [
      "Die Gemeinde Solrød hatte ein älteres Indoor climate-Sensorsystem und benötigte eine moderne Plattform für laufende Überwachung und Berichterstattung.",
    ],
  },
  "deutsches-museum-nordschleswig": {
    titleAccent: "Fernzugriff auf Klimadaten.",
    intro: [
      "Dem Deutschen Museum Nordschleswig fehlte die Möglichkeit, Daten aus der Ferne abzulesen. Drahtlose Logger liefern nun kontinuierliche Messwerte ohne manuelle Rundgänge im Gebäude.",
    ],
  },
  "faaborg-museum": {
    titleAccent: "Weniger Zeit für das manuelle Ablesen von Sensoren.",
    intro: [
      "Das Faaborg Museum verbrachte viel Zeit damit, Sensoren physisch abzulesen. RoomAlyzer automatisiert die Erfassung, sodass sich das Personal auf die Preservationsarbeit konzentrieren kann.",
    ],
  },
  "hj-energi": {
    titleAccent: "Daten für die Beratung zur Gebäudeleistung.",
    intro: [
      "Bei HJ-Energi arbeiten wir daran, dass Gebäude so funktionieren, wie sie gedacht waren. Sensordaten unterstützen Inbetriebnahme, Fehlersuche und die Berichterstattung an Kunden.",
    ],
  },
  "zealand-erhvervsakademi": {
    titleAccent: "Volle Kontrolle über das Indoor climate in jedem Unterrichtsraum.",
    intro: [
      "Zealand wollte die volle Kontrolle über das Indoor climate in allen Unterrichtsräumen. Kontinuierliche CO2- und Temperaturdaten helfen den Facility-Teams, zur richtigen Zeit zu lüften und zu heizen.",
    ],
  },
  "holbaek-kommune": {
    titleAccent: "Besseres Indoor climate für die Mitarbeitenden.",
    intro: [
      "Wir haben uns für RoomAlyzer entschieden, weil wir den Fokus auf das Indoor climate legen und unseren Mitarbeitenden die besten Bedingungen bieten wollen.",
    ],
  },
};

const sv: Record<string, CaseDetailOverlay> = {
  "norddjurs-municipality": {
    titleAccent: "Dokumenterar det nödvändiga antalet arbetsplatser.",
    intro: [
      "Politikerna i Norddjurs kommun har beslutat att stänga en av sina fyra förvaltningsbyggnader. Därför mäter Dilan Kocabas och fastighetscentret för att säkerställa att det finns tillräckligt med plats för alla och rätt faciliteter för medarbetarna.",
    ],
    quote: {
      heading: "Vad säger Norddjurs kommun?",
      body: "Vi behöver veta hur många arbetsplatser våra medarbetare faktiskt behöver. Kontoret ska vara en trevlig plats som är utformad efter deras behov. Många av våra medarbetare arbetar ute i fält, och som överallt annars arbetar fler också hemifrån. Det handlar förstås också om att använda skattebetalarnas pengar klokt.",
    },
  },
  "varde-municipality": {
    titleAccent: "Sammanslagning och rättvis fördelning mellan avdelningar.",
    intro: [
      "Varde har på politisk nivå beslutat att avyttra en av sina förvaltningsbyggnader och samla medarbetarna i rådhuset. Betina Christensen och hennes team mäter därför på båda platserna för att säkerställa rätt dimensionering och planlösning.",
    ],
    quote: {
      heading: "Vad säger Varde kommun?",
      body: "Data från sensorerna ger mig en objektiv bild av hur mycket plats vi faktiskt behöver och hur mycket plats varje område bör tilldelas för att säkerställa en rättvis utformning. Vi får också insikt i hur många och hur stora mötesrum som behövs.",
    },
  },
  "dansk-industri": {
    titleAccent: "Space management med sensorer frigjorde 650 kvadratmeter, och det gör skillnad på sista raden.",
    intro: [
      "Jimmy Holk har gjort en lång resa med arbetsplatsutformning. Att mäta skrivbord och mötesrum med sensorer har gett dokumentationen för att skära bort många kvadratmeter.",
    ],
    quote: {
      heading: "Vad säger Dansk Industri?",
      body: "Jag kan inte styra efter allas åsikter och känslor. Och jag verkar i ett politiskt hus där man inte gör så stora förändringar utan att ha sina argument och därmed också sin dokumentation i ordning. Det får jag med IoT-lösningen.",
    },
  },
  "gribskov-municipality": {
    titleAccent: "Data för att dimensionera ett nytt rådhus korrekt.",
    intro: [
      "Inför byggandet av ett nytt rådhus mäter Gribskov kommun användningen av det nuvarande med sensorer. Av hänsyn till både budgeten och den gröna omställningen vill kommunen säkerställa att den inte bygger mer än nödvändigt.",
    ],
    quote: {
      heading: "Vad säger Gribskov kommun?",
      body: "Koncernledningen var oerhört entusiastisk över de data vi kan leverera för att kvalificera deras beslutsunderlag för flera olika beslut. Återkopplingen är att de nu kan gå vidare från åsikter och antaganden. Dessutom blev de mycket förvånade över hur lite vi faktiskt använder våra skrivbord, och den ineffektiva användningen av mötesrum (få deltagare i stora mötesrum). Det gav dem verkligen något att tänka på.",
    },
  },
  "gribskov-kommune": {
    titleAccent: "Inomhusklimatdata för skolor och kommunala byggnader.",
    intro: [
      "Kommunen är en del av Realdanias inomhusklimatprojekt och använder RoomAlyzer-plattformen för att besluta hur förhållandena i skolor och andra byggnader ska förbättras.",
    ],
  },
  "archdiocese-of-freiburg": {
    titleAccent: "Medvetandegör volontärer genom datadriven förståelse av inomhusklimatet.",
    intro: [
      "Sensorlösningen möjliggör kontinuerlig mätning av temperatur och luftfuktighet i kyrkorum. Klimatrisker kan upptäckas tidigt och medvetenheten bland volontärer stärkas, på en plattform anpassad efter kyrkornas behov.",
    ],
    quote: {
      heading: "Vad säger Erzdiözese Freiburg?",
      body: "Människor har ingen tillförlitlig känsla för relativ luftfuktighet, ändå spelar den en avgörande roll för inomhusklimatet i våra kyrkor. Därför mäter vi med sensorer. Kontinuerlig registrering av temperatur och luftfuktighet hjälper oss att förstå förhållandena på plats exakt. Datan hjälper oss att medvetandegöra volontärer om ämnet och reagera i tid på möjliga risker för byggnader och inventarier. Det är en stor fördel för vårt arbete. Vi valde IoT Fabrikken eftersom de erbjuder en mycket överskådlig plattform och är flexibla kring våra behov, vilket passar bra i ett kyrkligt sammanhang.",
      attribution: "Claudia Dambacher, rådgivare, Kyrkoskydd",
    },
  },
  "evangelische-kirche-in-hessen-und-nassau": {
    titleAccent: "Skyddar historiska kyrkor genom precis inomhusklimatövervakning.",
    intro: [
      "Historiska kyrkobyggnader behöver stabila förhållanden året runt. Trådlösa sensorer och RoomAlyzer ger driftteam kontinuerliga data om luftfuktighet och temperatur utan att störa gudstjänster eller kulturhistoriska interiörer.",
    ],
  },
  sweco: {
    titleAccent: "Inomhusklimatdokumentation för fastighetsägare och DGNB-projekt.",
    intro: [
      "Sweco hjälper fastighetsägare att säkerställa ett bra inomhusklimat i sina byggnader.",
    ],
    quote: {
      heading: "Vad säger Sweco?",
      body: "Sweco arbetar redan med DGNB-certifieringar i många av sina projekt. Med RoomAlyzer-systemet från IoT Fabrikken är det möjligt att kartlägga inomhusklimatförhållanden specifikt i DGNB-projekt, där flexibel inomhusklimatövervakning också kan vara en del av metodiken. Sensorerna, som mäter allt från temperatur, CO2-koncentration, luftfuktighet, TVOC, ljud och ljus, är enkla att installera och stör inte byggnadens användare, som även själva kan använda loggrarna för att övervaka och säkerställa ett bra inomhusklimat. I portalen, använd tillsammans med inomhusklimatloggrarna, kan DGNB-rapporter genereras med några få klick, där man väljer vilka sensorer och intervall som ska ingå i rapporten.",
      attribution: "Frederik Kastrup, hållbarhetsingenjör, Sweco Danmark",
    },
  },
  "skade-teknik": {
    titleAccent: "Dokumenterar inomhusklimatet när hyresgäst och hyresvärd är oense.",
    intro: [
      "Många fastighetsförvaltare och hyresvärdar har svårt att dokumentera varför mögel uppstår i en viss hyresbostad, och lösningarna är ofta komplicerade och dyra. SKADE-teknik ville hjälpa sina kunder i bostadssektorn med en enkel lösning.",
    ],
    quote: {
      heading: "Vad säger SKADE-teknik?",
      subtitle: "Löser mögelkonflikter mellan hyresgäst och hyresvärd",
      body: "Ett bra exempel på hur vi använder RoomAlyzer-plattformen är mitt senaste ärende för en bostadsförening. Fastighetsskötaren hade fått klagomål från några boende som trodde att de hade mögel på grund av byggnadens beskaffenhet. Det är en klassisk situation där det har förts en lång dialog mellan hyresgäst och hyresvärd, och den kör fast eftersom det är ord mot ord. I stället kom vi in och började mäta med RoomAlyzer-plattformen, och efter några veckors mätning insåg vi att det inte var något fel på byggnaden, utan att det handlade om att de boende skruvade upp värmen för högt och inte vädrade. Det gjorde att vi kunde lösa konflikten och börja lära de boende några nya vanor. Det handlar också om att IoT-enheter är enkla att använda. Man går bara in och sätter upp sensorn och sedan går man. Vi har tidigare arbetat med vissa sensorer som krävde en gateway och har upplevt att ett barn i lägenheten stänger av gatewayen. Vi har också fått arbeta med gammaldags dataloggrar som måste tömmas på data många gånger. Med den här sensorn kan vi följa i realtid och avsluta mätningen när det är lämpligt, i stället för att behöva åka ut och tömma en gammaldags sensor varannan vecka.",
      attribution: "Bo J. Mortensen, ägare, SKADE-teknik, Aalborg",
    },
  },
  "boligselskabet-sjaelland": {
    titleAccent: "Dokumenterar inomhusklimatet före och efter renovering.",
    intro: [
      "Boligselskabet Sjælland hade utmaningar med att dokumentera förändringarna i inomhusklimatet före och efter renoveringar av byggnader och lägenheter.",
    ],
  },
  "vejen-kommune": {
    titleAccent: "Skiljer fakta från känslor om inomhusklimatet.",
    intro: [
      "Vejen kommun fick klagomål om inomhusklimatet och hade svårt att dra slutsatser: vad är fakta och vad är känslor?",
    ],
  },
  "rudersdal-museer": {
    titleAccent: "Stabila förhållanden i utställnings- och magasinsrum.",
    intro: [
      "Rudersdal Museer sökte en lösning som kunde säkerställa ett optimalt inomhusklimat i utställnings- och magasinsrum.",
    ],
  },
  "solroed-kommune": {
    titleAccent: "Uppgraderar från ett äldre sensorsystem.",
    intro: [
      "Solrød kommun hade ett äldre system för inomhusklimatsensorer och behövde en modern plattform för löpande övervakning och rapportering.",
    ],
  },
  "deutsches-museum-nordschleswig": {
    titleAccent: "Fjärråtkomst till klimatdata.",
    intro: [
      "Deutsches Museum Nordschleswig saknade möjligheten att läsa av data på distans. Trådlösa loggrar levererar nu kontinuerliga avläsningar utan manuella ronder i byggnaden.",
    ],
  },
  "faaborg-museum": {
    titleAccent: "Mindre tid på manuell avläsning av sensorer.",
    intro: [
      "Faaborg Museum lade mycket tid på att fysiskt läsa av sensorer. RoomAlyzer automatiserar insamlingen så att personalen kan fokusera på bevarandearbetet.",
    ],
  },
  "hj-energi": {
    titleAccent: "Data för rådgivning om byggnaders prestanda.",
    intro: [
      "På HJ-Energi arbetar vi för att få byggnader att fungera som det var tänkt. Sensordata stöder driftsättning, felsökning och rapportering till kunder.",
    ],
  },
  "zealand-erhvervsakademi": {
    titleAccent: "Full kontroll över inomhusklimatet i varje undervisningssal.",
    intro: [
      "Zealand ville ha full kontroll över inomhusklimatet i alla undervisningssalar. Kontinuerliga CO2- och temperaturdata hjälper driftteamen att ventilera och värma upp vid rätt tidpunkter.",
    ],
  },
  "holbaek-kommune": {
    titleAccent: "Bättre inomhusklimat för medarbetarna.",
    intro: [
      "Vi valde att arbeta med RoomAlyzer eftersom vi vill fokusera på inomhusklimatet och ge våra medarbetare bästa möjliga förhållanden.",
    ],
  },
};

const overlays: Partial<Record<Lang, Record<string, CaseDetailOverlay>>> = {
  da,
  de,
  sv,
};

export function getCaseDetailOverlay(
  slug: string,
  lang: Lang,
): CaseDetailOverlay | undefined {
  return overlays[lang]?.[slug];
}
