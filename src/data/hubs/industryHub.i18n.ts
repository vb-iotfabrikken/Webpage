import type { Lang } from "../lang";

export interface IndustryLeafOverlay {
  title?: string;
  titleAccent?: string;
  lead?: string;
}

export interface IndustriesHubOverlay {
  title?: string;
  titleAccent?: string;
  eyebrow?: string;
  lead?: string;
  leaves?: Record<string, IndustryLeafOverlay>;
}

export const industriesHubI18n: Partial<Record<Lang, IndustriesHubOverlay>> = {
  da: {
    title: "Bygget til din branche.",
    titleAccent: "Fra den første sensor til den tusindende.",
    eyebrow: "Brancher",
    lead: "Hver branche har sine egne rytmer, regler og udfordringer. Vi har udrullet IoT i dem alle, og flere.",
    leaves: {
      offices: {
        title: "Kontorer.",
        titleAccent: "Hybrid arbejde, målt.",
        lead: "Udnyttelse, komfort og energi i moderne kontorer, de tre greb, der afgør, om folk møder ind.",
      },
      churches: {
        title: "Kirker.",
        titleAccent: "Pas på orgler og fresker.",
        lead: "Bevaringskvalitets fugt- og temperaturmåling, der beskytter historiske bygninger og deres indhold.",
      },
      "museums-galleries": {
        title: "Museer og gallerier.",
        titleAccent: "Bevar det, I udstiller.",
        lead: "Klimadata fra Bevaring-modulet i tråd med internationale bevaringsstandarder for samlinger og udlånsobjekter.",
      },
      municipalities: {
        title: "Kommuner.",
        titleAccent: "Ét overblik, mange bygninger.",
        lead: "Skoler, daginstitutioner, administration og kulturinstitutioner, samlet på én platform.",
      },
      schools: {
        title: "Skoler.",
        titleAccent: "Bedre luft, bedre fokus.",
        lead: "CO2-, temperatur- og fugtovervågning, der dokumenterer indeklimaet i hvert klasseværelse.",
      },
      hospitals: {
        title: "Hospitaler.",
        titleAccent: "Hvor hver grad tæller.",
        lead: "Overvågning af lager, medicinskabe, afdelinger og laboratorier med revisionsklare rapporter.",
      },
      "archives-libraries": {
        title: "Arkiver og biblioteker.",
        titleAccent: "Dokumentér bevaringen.",
        lead: "Løbende klimaprotokollering og alarmer for sjældne bøger, manuskripter og følsomme papirarkiver.",
      },
      "manors-castles": {
        title: "Herregårde og slotte.",
        titleAccent: "Arv der holder.",
        lead: "Overvåg fugt og temperatur i uopvarmede sale, kældre og lager, uden at skade overflader.",
      },
      hotels: {
        title: "Hoteller.",
        titleAccent: "Komfort uden spild.",
        lead: "Belægningsstyret klima og rengøring i værelser, mødelokaler og fællesarealer.",
      },
      retail: {
        title: "Detailhandel.",
        titleAccent: "Butiksdrift, smartere.",
        lead: "Kølemonitorering, butikskomfort og kundestrøm på tværs af enkelte butikker eller kæder.",
      },
      "warehouses-logistics": {
        title: "Lagre og logistik.",
        titleAccent: "Beskyt det på hylderne.",
        lead: "Temperatur, fugt og vanddetektion til lager, kølekæde og lasteporte.",
      },
      "elderly-care": {
        title: "Ældrepleje.",
        titleAccent: "En tryggere, roligere hverdag.",
        lead: "Indeklimaovervågning og trykknapper til serviceanmodninger, der gør den daglige pleje lettere for beboere og personale.",
      },
      "property-management": {
        title: "Ejendomsadministration.",
        titleAccent: "Færre klager, hurtigere løsninger.",
        lead: "Dokumentation af indeklima i lejemål og tidlig advarsel ved lækager på tværs af porteføljen.",
      },
      "fm-companies": {
        title: "FM-virksomheder.",
        titleAccent: "White-label datalaget.",
        lead: "Tilføj målbart indeklima, space management, rengøring og vanddetektering oven på jeres eksisterende facility management.",
      },
      "consulting-engineers": {
        title: "Rådgivende ingeniører.",
        titleAccent: "Fakta til jeres rådgivning.",
        lead: "Midlertidige og permanente målinger, der understøtter commissioning, energiaudits og renoveringsprojekter.",
      },
    },
  },
  de: {
    title: "Für Ihre Branche gebaut.",
    titleAccent: "Vom ersten Sensor bis zum tausendsten.",
    eyebrow: "Branchen",
    lead: "Jede Branche hat eigene Rhythmen, Vorschriften und Schmerzpunkte. IoT haben wir in all diesen (und mehr) ausgerollt.",
    leaves: {
      offices: {
        title: "Büros.",
        titleAccent: "Hybrides Arbeiten, gemessen.",
        lead: "Auslastung, Komfort und Energie in modernen Büros, die drei Hebel, die entscheiden, ob Menschen ins Büro kommen.",
      },
      churches: {
        title: "Kirchen.",
        titleAccent: "Orgeln und Fresken schützen.",
        lead: "Erhaltungsgerechtes Feuchte- und Temperaturmonitoring, das historische Gebäude und ihr Inventar schützt.",
      },
      "museums-galleries": {
        title: "Museen und Galerien.",
        titleAccent: "Bewahren, was Sie ausstellen.",
        lead: "Klimadaten aus dem Modul Erhaltung nach internationalen Erhaltungsstandards für Sammlungen und Leihgaben.",
      },
      municipalities: {
        title: "Kommunen.",
        titleAccent: "Ein Überblick, viele Gebäude.",
        lead: "Schulen, Kitas, Verwaltung und Kultureinrichtungen, in einer Plattform gebündelt.",
      },
      schools: {
        title: "Schulen.",
        titleAccent: "Bessere Luft, besserer Fokus.",
        lead: "CO₂-, Temperatur- und Feuchteüberwachung, die das Raumklima in jedem Klassenzimmer dokumentiert.",
      },
      hospitals: {
        title: "Krankenhäuser.",
        titleAccent: "Wo jeder Grad zählt.",
        lead: "Überwachung von Lagern, Medikamentenschränken, Stationen und Laboren mit prüffähigen Berichten.",
      },
      "archives-libraries": {
        title: "Archive und Bibliotheken.",
        titleAccent: "Erhaltung dokumentieren.",
        lead: "Laufende Klimaprotokollierung und Alarme für seltene Bücher, Manuskripte und empfindliche Papierarchive.",
      },
      "manors-castles": {
        title: "Herrenhäuser und Schlösser.",
        titleAccent: "Erbe, das Bestand hat.",
        lead: "Feuchte und Temperatur in unbeheizten Sälen, Kellern und Lagern überwachen, ohne Oberflächen zu schädigen.",
      },
      hotels: {
        title: "Hotels.",
        titleAccent: "Komfort ohne Verschwendung.",
        lead: "Belegungsgesteuertes Klima und Reinigung in Zimmern, Tagungsräumen und Gemeinschaftsbereichen.",
      },
      retail: {
        title: "Einzelhandel.",
        titleAccent: "Filialbetrieb, smarter.",
        lead: "Kühlüberwachung, Ladenkomfort und Kundenströme über einzelne Filialen oder Ketten hinweg.",
      },
      "warehouses-logistics": {
        title: "Lager und Logistik.",
        titleAccent: "Schützen, was auf den Regalen liegt.",
        lead: "Temperatur, Feuchte und Water detection für Lager, Kühlkette und Laderampen.",
      },
      "elderly-care": {
        title: "Altenpflege.",
        titleAccent: "Ein sichererer, ruhigerer Alltag.",
        lead: "Raumklimaüberwachung und Drucktasten für Serviceanfragen, die den täglichen Pflegealltag erleichtern.",
      },
      "property-management": {
        title: "Immobilienverwaltung.",
        titleAccent: "Weniger Beschwerden, schnellere Lösungen.",
        lead: "Dokumentation des Raumklimas in Mietobjekten und frühe Warnung bei Leckagen über das Portfolio.",
      },
      "fm-companies": {
        title: "FM-Unternehmen.",
        titleAccent: "Die White-Label-Datenebene.",
        lead: "Ergänzen Sie Ihr Facility Management um messbares Raumklima, Space-Management, Reinigung und Water detection.",
      },
      "consulting-engineers": {
        title: "Beratende Ingenieure.",
        titleAccent: "Fakten für Ihre Beratung.",
        lead: "Temporäre und permanente Messungen für Inbetriebnahme, Energieaudits und Sanierungsprojekte.",
      },
    },
  },
  sv: {
    title: "Byggt för er bransch.",
    titleAccent: "Från den första sensorn till den tusende.",
    eyebrow: "Branscher",
    lead: "Varje bransch har sina egna rytmer, regler och utmaningar. Vi har rullat ut IoT i alla dessa, och fler.",
    leaves: {
      offices: {
        title: "Kontor.",
        titleAccent: "Hybridarbete, uppmätt.",
        lead: "Utnyttjande, komfort och energi på moderna kontor, de tre spakarna som avgör om folk kommer in.",
      },
      churches: {
        title: "Kyrkor.",
        titleAccent: "Vård om orglar och fresker.",
        lead: "Bevarandekvalitet för fukt- och temperaturövervakning som skyddar historiska byggnader och deras innehåll.",
      },
      "museums-galleries": {
        title: "Museer och gallerier.",
        titleAccent: "Bevara det ni ställer ut.",
        lead: "Klimadata från Bevarande-modulen enligt internationella bevarandestandarder för samlingar och låneföremål.",
      },
      municipalities: {
        title: "Kommuner.",
        titleAccent: "En översikt, många byggnader.",
        lead: "Skolor, förskolor, förvaltning och kulturinstitutioner, samlade på en plattform.",
      },
      schools: {
        title: "Skolor.",
        titleAccent: "Bättre luft, bättre fokus.",
        lead: "CO₂-, temperatur- och fuktövervakning som dokumenterar inomhusklimatet i varje klassrum.",
      },
      hospitals: {
        title: "Sjukhus.",
        titleAccent: "Där varje grad räknas.",
        lead: "Övervakning av lager, medicinskåp, avdelningar och laboratorier med revisionsklara rapporter.",
      },
      "archives-libraries": {
        title: "Arkiv och bibliotek.",
        titleAccent: "Dokumentera bevarandet.",
        lead: "Löpande klimaprotokoll och larm för sällsynta böcker, manuskript och känsliga pappersarkiv.",
      },
      "manors-castles": {
        title: "Herrgårdar och slott.",
        titleAccent: "Arv som håller.",
        lead: "Övervaka fukt och temperatur i ouppvärmda salar, källare och lager, utan att skada ytor.",
      },
      hotels: {
        title: "Hotell.",
        titleAccent: "Komfort utan slöseri.",
        lead: "Beläggningsstyrt klimat och städning i rum, möteslokaler och gemensamma ytor.",
      },
      retail: {
        title: "Detaljhandel.",
        titleAccent: "Butiksdrift, smartare.",
        lead: "Kylövervakning, butikskomfort och kundflöden över enskilda butiker eller kedjor.",
      },
      "warehouses-logistics": {
        title: "Lager och logistik.",
        titleAccent: "Skydda det på hyllorna.",
        lead: "Temperatur, fukt och vattendetektering för lager, kylkedja och lastportar.",
      },
      "elderly-care": {
        title: "Äldreomsorg.",
        titleAccent: "En tryggare, lugnare vardag.",
        lead: "Inomhusklimatövervakning och tryckknappar för serviceanrop som underlättar den dagliga omsorgen för boende och personal.",
      },
      "property-management": {
        title: "Fastighetsförvaltning.",
        titleAccent: "Färre klagomål, snabbare lösningar.",
        lead: "Dokumentation av inomhusklimat i hyresobjekt och tidig varning vid läckage över portföljen.",
      },
      "fm-companies": {
        title: "FM-företag.",
        titleAccent: "White-label-datalagret.",
        lead: "Lägg till mätbart inomhusklimat, space management, städning och vattendetektering ovanpå er facility management.",
      },
      "consulting-engineers": {
        title: "Konsultingingenjörer.",
        titleAccent: "Fakta för er rådgivning.",
        lead: "Tillfälliga och permanenta mätningar som stödjer driftsättning, energirevisioner och renoveringsprojekt.",
      },
    },
  },
};
