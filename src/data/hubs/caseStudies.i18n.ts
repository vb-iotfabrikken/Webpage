import type { Lang } from "../lang";

/**
 * Per-locale overlays for the case-studies hub, intro and per-case
 * title/lead teasers. English lives in `caseStudies.ts`.
 *
 * Leaf overlays are keyed by that locale's own slug:
 *  - `da` uses the Danish slug catalog (e.g. `norddjurs-kommune`)
 *  - `de`/`sv` reuse the English slug catalog (e.g. `norddjurs-municipality`)
 */

export interface CaseHubOverlay {
  title: string;
  titleAccent: string;
  eyebrow: string;
  lead: string;
}

export interface CaseIntroOverlay {
  title: string;
  paragraphs: string[];
}

export interface CaseLeafOverlay {
  title: string;
  lead: string;
}

export const caseHubI18n: Partial<Record<Lang, CaseHubOverlay>> = {
  da: {
    title: "Kundecases.",
    titleAccent: "Bliv en del af vores kunder i 15 lande.",
    eyebrow: "Cases",
    lead: "Vær på forkant med indeklima og space management med data i RoomAlyzer.",
  },
  de: {
    title: "Kundenreferenzen.",
    titleAccent: "Reihen Sie sich ein bei unseren Kunden in 15 Ländern.",
    eyebrow: "Referenzen",
    lead: "Bleiben Sie Raumklima und Space-Management mit Daten in RoomAlyzer voraus.",
  },
  sv: {
    title: "Kundcase.",
    titleAccent: "Bli en av våra kunder i 15 länder.",
    eyebrow: "Kundcase",
    lead: "Ligg steget före inomhusklimat och space management med data i RoomAlyzer.",
  },
};

export const caseIntroI18n: Partial<Record<Lang, CaseIntroOverlay>> = {
  da: {
    title: "Kundecases.",
    paragraphs: [
      "Når vi leverer en løsning til dig — uanset om det er til indeklima, space management, rengøring eller en blanding — behøver du ikke gå ud og købe andet. Du skal heller ikke bekymre dig om, hvordan du kommer i gang: vi lægger meget arbejde i opstart og oplæring, og vi svarer altid hurtigt på supporthenvendelser.",
      "Her er, hvad nogle af vores kunder siger om vores samarbejde.",
    ],
  },
  de: {
    title: "Kundenreferenzen.",
    paragraphs: [
      "Wenn wir Ihnen eine Lösung liefern — ob für Raumklima, Space-Management, Reinigung oder eine Kombination — müssen Sie nichts weiter anschaffen. Sie müssen sich auch keine Gedanken über den Einstieg machen: Wir investieren viel in Inbetriebnahme und Schulung und reagieren stets schnell auf Supportanfragen.",
      "Hier sagen einige unserer Kunden, was sie über unsere Zusammenarbeit denken.",
    ],
  },
  sv: {
    title: "Kundcase.",
    paragraphs: [
      "När vi levererar en lösning till dig — oavsett om det gäller inomhusklimat, space management, städning eller en blandning — behöver du inte köpa något mer. Du behöver inte heller oroa dig för hur du kommer igång: vi lägger mycket arbete på uppstart och utbildning och svarar alltid snabbt på supportärenden.",
      "Här är vad några av våra kunder säger om vårt samarbete.",
    ],
  },
};

export const caseLeafI18n: Partial<Record<Lang, Record<string, CaseLeafOverlay>>> = {
  da: {
    "norddjurs-kommune": { title: "Norddjurs Kommune.", lead: "Skaber bedre indretning ved at lave fire bygninger om til tre." },
    "varde-kommune": { title: "Varde Kommune.", lead: "Forbedrer trivslen og sikrer fair fordeling ved at samle administrationsbygninger." },
    "dansk-industri": { title: "Dansk Industri.", lead: "Det gør en forskel på bundlinjen." },
    "gribskov-kommune": { title: "Gribskov Kommune.", lead: "Data til at dimensionere et nyt rådhus korrekt." },
    "archdiocese-of-freiburg": { title: "Ærkebispedømmet Freiburg.", lead: "Bevidstgør frivillige gennem datadreven forståelse af indeklimaet." },
    "evangelische-kirche-in-hessen-und-nassau": { title: "Den protestantiske kirke i Hessen og Nassau.", lead: "Beskytter historiske kirker gennem præcis indeklimaovervågning." },
    sweco: { title: "Sweco.", lead: "Sweco hjælper ejendomsejere med at sikre et godt indeklima i deres bygninger." },
    "skade-teknik": { title: "SKADE-teknik.", lead: "Mange ejendomsadministratorer og udlejere har svært ved at dokumentere, hvorfor der opstår skimmel i et bestemt lejemål." },
    "boligselskabet-sjaelland": { title: "Boligselskabet Sjælland.", lead: "Boligselskabet Sjælland oplevede udfordringer med at dokumentere ændringerne i indeklimaet før og efter renoveringer af bygninger og lejligheder." },
    "vejen-kommune": { title: "Vejen Kommune.", lead: "Vejen Kommune oplevede klager over indeklimaet og havde svært ved at konkludere: hvad er fakta, og hvad er fornemmelser?" },
    "rudersdal-museer": { title: "Rudersdal Museer.", lead: "Rudersdal Museer søgte en løsning, der kunne sikre et optimalt indeklima i udstillings- og magasinrum." },
    "solroed-kommune": { title: "Solrød Kommune.", lead: "Solrød Kommune havde et ældre indeklimasensorsystem." },
    "gribskov-kommune-indoor-climate": { title: "Gribskov Kommune.", lead: "Kommunen er en del af Realdanias indeklimaprojekt og bruger RoomAlyzer-platformen til at beslutte, hvordan forholdene i skoler og andre bygninger forbedres." },
    "deutsches-museum-nordschleswig": { title: "Deutsches Museum Nordschleswig.", lead: "Deutsches Museum Nordschleswig manglede mulighed for at aflæse data på afstand." },
    "faaborg-museum": { title: "Faaborg Museum.", lead: "Faaborg Museum brugte meget tid på fysisk at aflæse sensorer." },
    "hj-energi": { title: "HJ-Energi.", lead: "Hos HJ-Energi arbejder vi for at få bygninger til at fungere, som de var tænkt." },
    "zealand-erhvervsakademi": { title: "Zealand Erhvervsakademi.", lead: "Zealand ønskede fuld kontrol over indeklimaet i alle undervisningslokaler." },
    "holbaek-kommune": { title: "Holbæk Kommune.", lead: "Vi valgte at arbejde med RoomAlyzer, fordi vi vil sætte fokus på indeklimaet og give vores medarbejdere de bedste forhold." },
  },
  de: {
    "norddjurs-municipality": { title: "Gemeinde Norddjurs.", lead: "Schafft eine bessere Raumaufteilung, indem aus vier Gebäuden drei werden." },
    "varde-municipality": { title: "Gemeinde Varde.", lead: "Verbessert das Wohlbefinden und sorgt für eine faire Verteilung durch die Zusammenlegung von Verwaltungsgebäuden." },
    "dansk-industri": { title: "Dansk Industri.", lead: "Das macht sich in der Bilanz bemerkbar." },
    "gribskov-municipality": { title: "Gemeinde Gribskov.", lead: "Daten zur richtigen Dimensionierung eines neuen Rathauses." },
    "archdiocese-of-freiburg": { title: "Erzdiözese Freiburg.", lead: "Sensibilisiert Ehrenamtliche durch datenbasiertes Verständnis des Raumklimas." },
    "evangelische-kirche-in-hessen-und-nassau": { title: "Evangelische Kirche in Hessen und Nassau.", lead: "Schützt historische Kirchen durch präzise Raumklimaüberwachung." },
    sweco: { title: "Sweco.", lead: "Sweco hilft Immobilieneigentümern, ein gutes Raumklima in ihren Gebäuden sicherzustellen." },
    "skade-teknik": { title: "SKADE-teknik.", lead: "Viele Hausverwalter und Vermieter tun sich schwer zu dokumentieren, warum in einer bestimmten Mietwohnung Schimmel entsteht." },
    "boligselskabet-sjaelland": { title: "Boligselskabet Sjælland.", lead: "Boligselskabet Sjælland hatte Schwierigkeiten, die Veränderungen des Raumklimas vor und nach Renovierungen von Gebäuden und Wohnungen zu dokumentieren." },
    "vejen-kommune": { title: "Gemeinde Vejen.", lead: "Die Gemeinde Vejen hatte mit Beschwerden über das Raumklima zu tun und konnte schwer Schlüsse ziehen: Was sind Fakten und was sind Gefühle?" },
    "rudersdal-museer": { title: "Rudersdal Museen.", lead: "Rudersdal Museen suchten eine Lösung, die ein optimales Raumklima in Ausstellungs- und Lagerräumen sicherstellt." },
    "solroed-kommune": { title: "Gemeinde Solrød.", lead: "Die Gemeinde Solrød hatte ein älteres Raumklima-Sensorsystem." },
    "gribskov-kommune": { title: "Gemeinde Gribskov.", lead: "Die Gemeinde ist Teil des Raumklimaprojekts von Realdania und nutzt die RoomAlyzer-Plattform, um zu entscheiden, wie die Bedingungen in Schulen und anderen Gebäuden verbessert werden." },
    "deutsches-museum-nordschleswig": { title: "Deutsches Museum Nordschleswig.", lead: "Dem Deutschen Museum Nordschleswig fehlte die Möglichkeit, Daten aus der Ferne abzulesen." },
    "faaborg-museum": { title: "Faaborg Museum.", lead: "Das Faaborg Museum verbrachte viel Zeit damit, Sensoren physisch abzulesen." },
    "hj-energi": { title: "HJ-Energi.", lead: "Bei HJ-Energi arbeiten wir daran, dass Gebäude so funktionieren, wie sie gedacht waren." },
    "zealand-erhvervsakademi": { title: "Zealand Business Academy.", lead: "Zealand wollte die volle Kontrolle über das Raumklima in allen Unterrichtsräumen." },
    "holbaek-kommune": { title: "Gemeinde Holbæk.", lead: "Wir haben uns für RoomAlyzer entschieden, weil wir den Fokus auf das Raumklima legen und unseren Mitarbeitenden die besten Bedingungen bieten wollen." },
  },
  sv: {
    "norddjurs-municipality": { title: "Norddjurs kommun.", lead: "Skapar bättre planlösning genom att göra fyra byggnader till tre." },
    "varde-municipality": { title: "Varde kommun.", lead: "Förbättrar välbefinnandet och säkerställer en rättvis fördelning genom att slå samman förvaltningsbyggnader." },
    "dansk-industri": { title: "Dansk Industri.", lead: "Det gör skillnad på sista raden." },
    "gribskov-municipality": { title: "Gribskovs kommun.", lead: "Data för att dimensionera ett nytt rådhus korrekt." },
    "archdiocese-of-freiburg": { title: "Ärkestiftet Freiburg.", lead: "Medvetandegör volontärer genom datadriven förståelse av inomhusklimatet." },
    "evangelische-kirche-in-hessen-und-nassau": { title: "Protestantiska kyrkan i Hessen och Nassau.", lead: "Skyddar historiska kyrkor genom precis inomhusklimatövervakning." },
    sweco: { title: "Sweco.", lead: "Sweco hjälper fastighetsägare att säkerställa ett bra inomhusklimat i sina byggnader." },
    "skade-teknik": { title: "SKADE-teknik.", lead: "Många fastighetsförvaltare och hyresvärdar har svårt att dokumentera varför mögel uppstår i en viss hyresbostad." },
    "boligselskabet-sjaelland": { title: "Boligselskabet Sjælland.", lead: "Boligselskabet Sjælland hade utmaningar med att dokumentera förändringarna i inomhusklimatet före och efter renoveringar av byggnader och lägenheter." },
    "vejen-kommune": { title: "Vejen kommun.", lead: "Vejen kommun fick klagomål om inomhusklimatet och hade svårt att dra slutsatser: vad är fakta och vad är känslor?" },
    "rudersdal-museer": { title: "Rudersdal Museer.", lead: "Rudersdal Museer sökte en lösning som kunde säkerställa ett optimalt inomhusklimat i utställnings- och magasinsrum." },
    "solroed-kommune": { title: "Solrød kommun.", lead: "Solrød kommun hade ett äldre system för inomhusklimatsensorer." },
    "gribskov-kommune": { title: "Gribskovs kommun.", lead: "Kommunen är en del av Realdanias inomhusklimatprojekt och använder RoomAlyzer-plattformen för att besluta hur förhållandena i skolor och andra byggnader ska förbättras." },
    "deutsches-museum-nordschleswig": { title: "Deutsches Museum Nordschleswig.", lead: "Deutsches Museum Nordschleswig saknade möjligheten att läsa av data på distans." },
    "faaborg-museum": { title: "Faaborg Museum.", lead: "Faaborg Museum lade mycket tid på att fysiskt läsa av sensorer." },
    "hj-energi": { title: "HJ-Energi.", lead: "På HJ-Energi arbetar vi för att få byggnader att fungera som det var tänkt." },
    "zealand-erhvervsakademi": { title: "Zealand Business Academy.", lead: "Zealand ville ha full kontroll över inomhusklimatet i alla undervisningssalar." },
    "holbaek-kommune": { title: "Holbæk kommun.", lead: "Vi valde att arbeta med RoomAlyzer eftersom vi vill fokusera på inomhusklimatet och ge våra medarbetare bästa möjliga förhållanden." },
  },
};

export const caseStudiesI18n = {
  hub: caseHubI18n,
  intro: caseIntroI18n,
  leaf: caseLeafI18n,
};
