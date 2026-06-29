import type { Lang } from "../lang";
import type { IndustryPageContent } from "./types";

/**
 * Per-locale overlays for industry detail-page body copy. English lives in
 * `industries.ts`; overlays cover the four homepage sectors (da/de/sv).
 */

export type IndustryContentOverlay = Partial<
  Omit<IndustryPageContent, "slug" | "featuredCaseStudySlugs" | "featuredArticleSlugs" | "relevantModuleSlugs">
>;

const da: Record<string, IndustryContentOverlay> = {
  offices: {
    cardTitle: "Kontorer og arbejdspladser",
    cardSummary:
      "Balanceér arealudnyttelse i hybride arbejdspladser med medarbejdernes produktivitet og komfort.",
    focus:
      "Moderne kontorer skal balancere hybrid fremmøde, mødelokalebehov og indeklima — ofte uden data til at understøtte leje, HVAC eller layoutbeslutninger.",
    challenges: [
      "I betaler for skriveborde og etager, der står tomme: hybrid arbejde har ændret fremmødemønstre, men mange organisationer dimensionerer stadig arealer efter headcount — ikke målt brug.",
      "Spøgelsesbookinger af mødelokaler: lokaler reserveret til ti og brugt af to blokerer areal, andre har brug for — uden objektiv indsigt i gapet.",
      "Komfortklager, I ikke kan verificere: 'for tung luft' eller 'for koldt' debatterer videre, fordi ventilation og varme følger faste planer — ikke faktisk belægning.",
      "HVAC kører i blinde: systemer varmer og ventilerer tomme zoner, mens de underpræsterer, når lokaler er fyldte — energispild uden bedre trivsel.",
    ],
    solution: [
      "RoomAlyzer Space management giver jer anonymiseret skrivebords- og lokalebelægning i realtid og over tid — så I kan rette størrelsen på etager, frigive spøgelsesbookede mødelokaler og forsvare layoutbeslutninger med fakta. Konteksten er tydelig: UK Workspace Survey viser, at kontorfremmøde faldt fra 83 % af arbejdstiden i 2016 til 46 % i 2023 — et fald på 37 procentpoint på syv år.",
      "RoomAlyzer Indeklima tilføjer kontinuerlig overvågning af CO2, temperatur, fugt og VOC, så eftermiddagstræthed og ventilationsklager besvares med data — ikke indtryk. Trådløse sensorer installeres på minutter uden Wi-Fi-projekt — og samme platform viser arealbrug og luftkvalitet side om side.",
    ],
    smarterTogether:
      "Kombineret lader Space management og Indeklima jer matche ventilation og varme til de personer, der faktisk er til stede — og skære energispild uden at ofre komfort på travle dage.",
    closing:
      "Hvor kontorsensorudrulninger normalt er dyre og forstyrrende, er RoomAlyzer klar på minutter, tilpasser sig, når jeres arbejdsplads ændrer sig, og koster en brøkdel af den sædvanlige pris.",
  },
  churches: {
    cardTitle: "Kirker og kulturarv",
    cardSummary:
      "Beskyt historiske interiører med præcis fugt- og temperaturkontrol i store, ujævnt opvarmede bygninger.",
    focus:
      "Kirker kombinerer uvurderlige interiører med bygninger, der aldrig var designet til moderne opvarmning — store volumener, ujævne temperaturer og sæsonbestemte fugtsvingninger truer orgler, træværk og fresker.",
    challenges: [
      "Usynlig, gradvis skade: ugunstig fugt og temperatur skader uerstattelige inventarstykker længe før synlige tegn.",
      "Ujævn opvarmning i store volumener: skib, kor og sakristier opfører sig forskelligt — håndholdte målinger er upålidelige.",
      "Udendørs vejr driver indendørs svingninger: massive murstensbygninger reagerer langsomt — indendørs data uden udendørs reference er svære at fortolke.",
      "Bevaring versus energiregning: opvarmning af en historisk bygning for at beskytte indholdet er dyrt — uden data finder I ikke balancen.",
    ],
    solution: [
      "RoomAlyzer overvåger temperatur og fugt kontinuerligt og omsætter det til klar dokumentation af de præcise forhold, jeres interiører holdes i. Trådløse Mini+ og Full+ sensorer er diskrete nok til hellige rum og præcise nok til konservatorer — med alarmer, når grænser overskrides.",
      "En udendørssensor adskiller indendørs tendenser fra vejrsvingninger, mens EN 15757-tilpasset rapportering giver stifter, forsikring og myndigheder den dokumentation, de forventer. Én platform kan dække alle kirker i en stift med rollebaseret adgang for kirkeværger, præster og rådgivere.",
    ],
    smarterTogether:
      "Bevaringsdata tjener to roller, der sjældent deler værktøj: konservatorer, der beskytter inventaret, og driftsteams, der driver bygningen — begge arbejder ud fra de samme fakta.",
    closing:
      "Klimamåling i kirker er normalt dyrt og besværligt at installere. RoomAlyzer er klar på minutter, fleksibelt nok til enhver bygning, og koster en brøkdel af det forventede.",
  },
  "museums-galleries": {
    cardTitle: "Museer og kultur",
    cardSummary:
      "Reducer risiko og bevar følsomme samlinger med kontinuerlig klimamåling i tråd med bevaringsstandarder.",
    focus:
      "Museer og gallerier skal beskytte udlånsobjekter, lagersamlinger og udstillingsrum — ofte med dokumentation over for forsikring, udlångivere og fonde, samtidig med at besøgsdrevne fugtspidser håndteres.",
    challenges: [
      "Udlåns- og lagringskrav: udlångivere forventer dokumenterede, stabile forhold — men off-display lagring får ofte mindre overvågning end hovedgallerierne.",
      "Besøgsdrevne klimaspidser: grupper og events skubber fugt og temperatur hurtigt op — uden tilstedeværelsesdata kan I ikke koble årsag og virkning.",
      "Forsikrings- og ansøgningsdokumentation: når noget går galt, skal I have manipulationssikre optegnelser — ikke en mappe med manuelle aflæsninger.",
      "Trådløs installation i følsomme rum: kabler gennem historisk stof eller travle gallerier er sjældent acceptabelt.",
    ],
    solution: [
      "RoomAlyzer leverer kontinuerlig trådløs temperatur- og fugtlogning i EN 15757-bånd — i gallerier, lagre og transportkasser. Konservatorer får alarmer, før forholdene driver, og PDF-rapporter klar til forsikring og udlånsaftaler.",
      "Bevægelsessensorer kortlægger besøgstrafik, så I kan knytte fugtspidser til åbningstider og planlægge kapacitet. En udendørssensor lader HVAC reagere på rigtigt vejr i stedet for gætværk — og beskytter samlinger, mens energien holdes nede.",
    ],
    closing:
      "Museumsniveau klimamåling er normalt dyrt og langsomt at udrulle. RoomAlyzer installeres på minutter, skalerer på tværs af alle rum og koster en brøkdel af traditionelle systemer.",
  },
  municipalities: {
    cardTitle: "Skoler og kommuner",
    cardSummary:
      "Prioritér elevers sundhed, koncentration og energitilbagetrækning på tværs af skoler, administration og kulturbygninger.",
    focus:
      "Kommuner driver dusinvis af bygningstyper — skoler, daginstitutioner, rådhuse og kulturhuse — og har brug for ét platformoverblik plus bevis for, at indeklima og energi faktisk matcher, hvordan bygningerne bruges.",
    challenges: [
      "CO2 og koncentration i klasselokaler: elever mister fokus, når ventilation halter efter belægning — men de fleste skoler stoler stadig på subjektive 'hvordan føles luften?'-tjek.",
      "Porteføljeskala: udrulning på tværs af alle skoler og administrationsbygninger føles som et flerårigt IT-projekt — medmindre sensorer er ægte plug-and-play.",
      "Energitilbagetrækning uden bevis: varme og ventilation kører efter skemaer, fordi ingen stoler på, at haller og klasselokaler faktisk er tomme efter skoletid.",
      "Svar til forældre og lærere: når luftkvaliteten udfordres, skal kommunen have dokumenterede data — ikke en engangsmåling.",
    ],
    solution: [
      "RoomAlyzer Indeklima sætter CO2-, temperatur-, fugt- og VOC-sensor i hvert klasselokale og fællesrum — med alarmer før niveauer passerer retningslinjer og dashboards, som pedeller faktisk bruger. Varde Kommune udrullede 1.400 sensorer på 36 skoler på ni uger; gennemsnitlig CO2 over 1.200 ppm i undervisningstiden faldt fra 23 % til 6 % på ti måneder.",
      "Mini+ PIR og bevægelsessensorer kortlægger reel belægning i sportshaller, auditorier og fælleslokaler, så varme og ventilation kan trække sig tilbage, når rum er tomme. Ét kommunalt dashboard samler alle bygninger — skoler, administration og kultur — uden separat system pr. lokation.",
    ],
    smarterTogether:
      "Indeklima og Space management sammen lader kommuner finjustere ventilation efter faktisk headcount og skære energi i bygninger, der står tomme uden for skoletid.",
    closing:
      "Kommunale sensorprogrammer er normalt dyre og langsomme. RoomAlyzer installeres på minutter pr. lokale, kræver ikke Wi-Fi pr. bygning, og skalerer fra én skole til en hel kommune.",
  },
};

const de: Record<string, IndustryContentOverlay> = {
  offices: {
    cardTitle: "Büros und Arbeitsplätze",
    cardSummary:
      "Flächennutzung in hybriden Arbeitswelten mit Produktivität und Komfort der Mitarbeitenden in Einklang bringen.",
    focus:
      "Moderne Büros müssen hybride Anwesenheit, Meetingraumbedarf und Raumklima ausbalancieren — oft ohne Daten für Miete, HVAC oder Layoutentscheidungen.",
    challenges: [
      "Bezahlung für leere Schreibtische und Etagen: Hybrides Arbeiten hat Anwesenheitsmuster verändert, doch viele Organisationen dimensionieren Flächen noch nach Kopfzahl — nicht nach gemessener Nutzung.",
      "Geisterbuchungen in Meetingräumen: für zehn reserviert, von zwei genutzt — ohne objektive Sicht auf die Lücke.",
      "Komfortbeschwerden ohne Beleg: 'stickige Luft' oder 'zu kalt' ohne Ende, weil Lüftung und Heizung festen Plänen folgen — nicht der tatsächlichen Belegung.",
      "HVAC im Blindflug: Systeme heizen und lüften leere Zonen und unterliefern, wenn Räume voll sind — Energieverschwendung ohne besseres Wohlbefinden.",
    ],
    solution: [
      "RoomAlyzer Space Management liefert anonymisierte Schreibtisch- und Raumbelegung in Echtzeit und über die Zeit — damit Sie Etagen richtig dimensionieren, Geisterbuchungen freigeben und Layoutentscheidungen mit Fakten verteidigen. Der Kontext ist deutlich: die UK Workspace Survey zeigt Büroanwesenheit von 83 % der Arbeitszeit 2016 auf 46 % 2023 — ein Rückgang um 37 Prozentpunkte in sieben Jahren.",
      "RoomAlyzer Raumklima ergänzt kontinuierliches CO2-, Temperatur-, Feuchte- und VOC-Monitoring, damit Nachmittagsmüdigkeit und Lüftungsbeschwerden mit Daten beantwortet werden. Drahtlose Sensoren sind in Minuten installiert — ohne Wi-Fi-Projekt — und dieselbe Plattform zeigt Flächennutzung und Luftqualität nebeneinander.",
    ],
    smarterTogether:
      "Kombiniert passen Sie Lüftung und Heizung an die tatsächlich anwesenden Personen an — Energieeinsparung ohne Komfortverlust an vollen Tagen.",
    closing:
      "Büro-Sensor-Rollouts sind normalerweise teuer und störend. RoomAlyzer ist in Minuten einsatzbereit, passt sich an veränderte Arbeitswelten an und kostet einen Bruchteil des Üblichen.",
  },
  churches: {
    cardTitle: "Kirchen und Kulturerbe",
    cardSummary:
      "Historische Innenräume mit präziser Feuchte- und Temperaturkontrolle in großen, ungleichmäßig beheizten Gebäuden schützen.",
    focus:
      "Kirchen verbinden unschätzbare Innenausstattung mit Gebäuden, die nie für moderne Heizung konzipiert wurden — große Volumina, ungleichmäßige Temperaturen und saisonale Feuchteschwankungen bedrohen Orgeln, Holzarbeiten und Fresken.",
    challenges: [
      "Unsichtbarer, gradueller Schaden: ungünstige Feuchte und Temperatur schädigen unersetzliche Ausstattung lange vor sichtbaren Zeichen.",
      "Ungleichmäßige Heizung in riesigen Volumina: Schiff, Chor und Sakristeien verhalten sich unterschiedlich — Handmessgeräte sind unzuverlässig.",
      "Außenwetter treibt Innenschwankungen: massive Mauerwerkgebäude reagieren langsam — Innendaten ohne Außenreferenz sind schwer zu deuten.",
      "Erhaltung versus Energiekosten: ein historisches Gebäude zum Schutz des Inventars zu heizen ist teuer — ohne Daten finden Sie kein Gleichgewicht.",
    ],
    solution: [
      "RoomAlyzer überwacht Temperatur und Luftfeuchtigkeit kontinuierlich und liefert klare Dokumentation der Bedingungen Ihrer Innenräume. Drahtlose Mini+ und Full+ Sensoren sind diskret genug für Kirchenräume und präzise genug für Konservatoren — mit Alarmen bei Grenzwertüberschreitung.",
      "Ein Außen Sensor trennt Innentrends von Wetterschwankungen; EN-15757-konforme Berichte liefern Diözesen, Versicherern und Denkmalschutzbehörden die erwarteten Nachweise. Eine Plattform kann jede Kirche einer Diözese abdecken — mit rollenbasierem Zugang für Küster, Pfarrer und Berater.",
    ],
    smarterTogether:
      "Erhaltungsdaten erfüllen zwei Rollen, die selten dasselbe Werkzeug teilen: Konservatoren, die das Inventar schützen, und Gebäudeteams, die den Betrieb steuern — beide mit denselben Fakten.",
    closing:
      "Klimamonitoring in Kirchen ist normalerweise teuer und aufwendig. RoomAlyzer ist in Minuten einsatzbereit, flexibel für jedes Gebäude und kostet einen Bruchteil des Erwarteten.",
  },
  "museums-galleries": {
    cardTitle: "Museen und Kultur",
    cardSummary:
      "Risiken mindern und empfindliche Sammlungen mit kontinuierlichem Klimamonitoring nach Erhaltungsstandards bewahren.",
    focus:
      "Museen und Galerien müssen Leihgaben, Lagermaterial und Ausstellungsräume schützen — oft mit Nachweis gegenüber Versicherern, Leihgebern und Förderern — während besuchergetriebene Feuchtespitzen gemanagt werden.",
    challenges: [
      "Leih- und Lageranforderungen: Leihgeber erwarten dokumentierte, stabile Bedingungen — Off-Display-Lager wird oft weniger überwacht als Hauptgalerien.",
      "Besuchergetriebene Klimaspitzen: Gruppen und Events treiben Feuchte und Temperatur schnell hoch — ohne Präsenzdaten fehlt die Kausalität.",
      "Versicherungs- und Förderdokumentation: bei Schäden brauchen Sie manipulationssichere Aufzeichnungen — keinen Ordner mit Handmessungen.",
      "Drahtlose Installation in sensiblen Räumen: Kabel durch historisches Gewebe oder voll besuchte Galerien sind selten akzeptabel.",
    ],
    solution: [
      "RoomAlyzer liefert kontinuierliche drahtlose Temperatur- und Feuchtigkeitsprotokollierung in EN-15757-Bändern — in Galerien, Lagern und Transportkisten. Kuratoren erhalten Alarme vor Abweichungen und PDF-Berichte für Versicherung und Leihverträge.",
      "Bewegungssensoren kartieren Besucherströme, damit Feuchtespitzen mit Öffnungszeiten korreliert werden können. Ein Außen Sensor lässt HVAC auf echtes Wetter reagieren — Sammlungen schützen, Energie im Griff behalten.",
    ],
    closing:
      "Museumsreifes Klimamonitoring ist normalerweise teuer und langsam. RoomAlyzer installiert sich in Minuten, skaliert über alle Räume und kostet einen Bruchteil traditioneller Systeme.",
  },
  municipalities: {
    cardTitle: "Schulen und Kommunen",
    cardSummary:
      "Gesundheit, Konzentration und Energierücknahme in Schulen, Verwaltung und Kulturgebäuden priorisieren.",
    focus:
      "Kommunen betreiben Dutzende Gebäudetypen — Schulen, Kitas, Rathäuser und Kulturhäuser — und brauchen eine Plattformsicht plus Nachweis, dass Raumklima und Energie tatsächlich zur Nutzung passen.",
    challenges: [
      "CO2 und Konzentration im Unterricht: Schüler verlieren Fokus, wenn Lüftung der Belegung hinterherhinkt — doch die meisten Schulen verlassen sich auf subjektive Luftgefühl-Checks.",
      "Portfolioskala: Monitoring über alle Schulen und Verwaltungsgebäude wirkt wie ein mehrjähriges IT-Projekt — es sei denn, Sensoren sind wirklich Plug-and-Play.",
      "Energierücknahme ohne Beleg: Heizung und Lüftung laufen nach Zeitplänen, weil niemand darauf vertraut, dass Hallen und Klassen nach Unterricht wirklich leer sind.",
      "Antworten an Eltern und Lehrkräfte: bei Luftqualitätsfragen brauchen Kommunen dokumentierte Daten — keine Einzelmessung.",
    ],
    solution: [
      "RoomAlyzer Raumklima setzt CO2-, Temperatur-, Feuchte- und VOC-Sensoren in jedes Klassenzimmer und Gemeinschaftsgebäude — mit Alarmen vor Richtlinienüberschreitung und Dashboards, die Hausmeister wirklich nutzen. Varde Kommune rollte 1.400 Sensoren auf 36 Schulen in neun Wochen aus; durchschnittliches CO2 über 1.200 ppm in Unterrichtszeiten sank von 23 % auf 6 % in zehn Monaten.",
      "Mini+ PIR und Bewegungssensoren kartieren echte Belegung in Sporthallen, Aula und Gemeinschaftsräumen, damit Heizung und Lüftung zurückfahren, wenn Räume leer sind. Ein kommunales Dashboard bündelt alle Gebäude — Schulen, Verwaltung und Kultur — ohne separates System pro Standort.",
    ],
    smarterTogether:
      "Raumklima und Space Management zusammen ermöglichen Lüftung nach tatsächlicher Kopfzahl und Energieeinsparung in Gebäuden, die außerhalb der Schulzeit leer stehen.",
    closing:
      "Kommunale Sensorprogramme sind normalerweise teuer und langsam. RoomAlyzer installiert sich in Minuten pro Raum, braucht kein Wi-Fi pro Gebäude und skaliert von einer Schule bis zur ganzen Kommune.",
  },
};

const sv: Record<string, IndustryContentOverlay> = {
  offices: {
    cardTitle: "Kontor och arbetsplatser",
    cardSummary:
      "Balansera utnyttjandet av ytor i hybridarbete med medarbetarnas produktivitet och komfort.",
    focus:
      "Moderna kontor måste balansera hybrid närvaro, mötesrumsbehov och inomhusklimat — ofta utan data för hyra, HVAC eller layoutbeslut.",
    challenges: [
      "Ni betalar för skrivbord och våningar som står tomma: hybridarbete har förändrat närvaromönster, men många organisationer dimensionerar fortfarande ytor efter headcount — inte uppmätt användning.",
      "Spökbokningar av mötesrum: rum bokade för tio och använda av två blockerar yta andra behöver — utan objektiv insikt i gapet.",
      "Komfortklagomål ni inte kan verifiera: 'tung luft' eller 'för kallt' utan slut, eftersom ventilation och värme följer fasta scheman — inte faktisk beläggning.",
      "HVAC i blindo: system värmer och ventilerar tomma zoner medan de underpresterar när rum är fulla — energislöseri utan bättre välmående.",
    ],
    solution: [
      "RoomAlyzer Space management ger anonymiserad skrivbords- och rumsbeläggning i realtid och över tid — så ni kan rätt dimensionera våningar, frigöra spökbokade mötesrum och försvara layoutbeslut med fakta. Kontexten är tydlig: UK Workspace Survey visar att kontorsnärvaro sjönk från 83 % av arbetstiden 2016 till 46 % 2023 — en minskning med 37 procentenheter på sju år.",
      "RoomAlyzer Inomhusklimat tillför kontinuerlig övervakning av CO2, temperatur, fukt och VOC så eftermiddagströtthet och ventilationsklagomål besvaras med data. Trådlösa sensorer installeras på minuter utan Wi-Fi-projekt — och samma plattform visar ytanvändning och luftkvalitet sida vid sida.",
    ],
    smarterTogether:
      "Kombinerat låter Space management och Inomhusklimat er matcha ventilation och värme till de personer som faktiskt är närvarande — och minska energislöseri utan att offra komfort på hektiska dagar.",
    closing:
      "Kontorssensorutrullningar är normalt dyra och störande. RoomAlyzer är igång på minuter, anpassar sig när arbetsplatsen förändras och kostar en bråkdel av det vanliga priset.",
  },
  churches: {
    cardTitle: "Kyrkor och kulturarv",
    cardSummary:
      "Skydda historiska interiörer med exakt fukt- och temperaturkontroll i stora, ojämnt uppvärmda byggnader.",
    focus:
      "Kyrkor kombinerar ovärderliga interiörer med byggnader som aldrig designades för modern uppvärmning — stora volymer, ojämna temperaturer och säsongsbetonade fuktvariationer hotar orglar, träarbeten och fresker.",
    challenges: [
      "Osynlig, gradvis skada: ogynnsam fukt och temperatur skadar oersättliga inventarier långt innan synliga tecken.",
      "Ojämn uppvärmning i stora volymer: långhus, kor och sakristior beter sig olika — handhållna mätningar är opålitliga.",
      "Utomhusväder driver inomhusvariationer: massiva murverksbyggnader reagerar långsamt — inomhusdata utan utomhusreferens är svåra att tolka.",
      "Bevaring versus energiräkning: att värma en historisk byggnad för att skydda innehållet är dyrt — utan data hittar ni inte balansen.",
    ],
    solution: [
      "RoomAlyzer övervakar temperatur och fukt kontinuerligt och omvandlar det till tydlig dokumentation av de exakta förhållanden era interiörer hålls i. Trådlösa Mini+ och Full+ sensorer är diskreta nog för heliga rum och precisa nog för konservatorer — med larm när trösklar överskrids.",
      "En utomhussensor separerar inomhustrender från vädersvängningar, medan EN 15757-anpassad rapportering ger stift, försäkringsbolag och myndigheter den dokumentation de förväntar sig. En plattform kan täcka varje kyrka i ett stift med rollbaserad åtkomst för kyrkvärdar, präster och rådgivare.",
    ],
    smarterTogether:
      "Bevaringsdata tjänar två roller som sällan delar samma verktyg: konservatorer som skyddar inventariet och driftteam som driver byggnaden — båda arbetar från samma fakta.",
    closing:
      "Klimamätning i kyrkor är normalt dyr och besvärlig att installera. RoomAlyzer är redo på minuter, flexibel nog för vilken byggnad som helst och kostar en bråkdel av det förväntade.",
  },
  "museums-galleries": {
    cardTitle: "Museer och kultur",
    cardSummary:
      "Minska risk och bevara känsliga samlingar med kontinuerlig klimatövervakning enligt bevarandestandarder.",
    focus:
      "Museer och gallerier måste skydda låneföremål, lagersamlingar och utställningsrum — ofta med dokumentation för försäkringsbolag, långivare och bidragsgivare — samtidigt som besöksdrivna fuktspikar hanteras.",
    challenges: [
      "Låne- och lagerkrav: långivare förväntar sig dokumenterade, stabila förhållanden — men off-display-lager får ofta mindre övervakning än huvudgallerierna.",
      "Besöksdrivna klimatspikar: grupper och evenemang driver fukt och temperatur snabbt upp — utan närvarodata saknas orsak och verkan.",
      "Försäkrings- och ansökningsdokumentation: vid skador behöver ni manipulationssäkra register — inte en mapp med manuella avläsningar.",
      "Trådlös installation i känsliga rum: kablar genom historiskt tyg eller fulla gallerier är sällan acceptabelt.",
    ],
    solution: [
      "RoomAlyzer levererar kontinuerlig trådlös temperatur- och fuktloggning i EN 15757-band — i gallerier, lager och transportlådor. Kuratorer får larm innan förhållanden driver, och PDF-rapporter redo för försäkring och låneavtal.",
      "Rörelsesensorer kartlägger besökstrafik så fuktspikar kan kopplas till öppettider och kapacitet planeras. En utomhussensor låter HVAC reagera på verkligt väder — skydda samlingar och hålla energin nere.",
    ],
    closing:
      "Museumsnivå klimatövervakning är normalt dyr och långsam att rulla ut. RoomAlyzer installeras på minuter, skalar över alla rum och kostar en bråkdel av traditionella system.",
  },
  municipalities: {
    cardTitle: "Skolor och kommuner",
    cardSummary:
      "Prioritera elevers hälsa, koncentration och energiåterställning i skolor, förvaltning och kulturbyggnader.",
    focus:
      "Kommuner driver dussintals byggnadstyper — skolor, förskolor, stadshus och kulturhus — och behöver en plattformsöversikt plus bevis att inomhusklimat och energi faktiskt matchar hur byggnaderna används.",
    challenges: [
      "CO2 och koncentration i klassrum: elever tappar fokus när ventilation halkar efter beläggning — men de flesta skolor förlitar sig fortfarande på subjektiva 'hur känns luften?'-kontroller.",
      "Portföljskala: utrullning över alla skolor och förvaltningsbyggnader känns som ett flerårigt IT-projekt — om sensorer inte är äkta plug-and-play.",
      "Energiåterställning utan bevis: värme och ventilation körs efter scheman eftersom ingen litar på att hallar och klassrum faktiskt är tomma efter skoldagens slut.",
      "Svar till föräldrar och lärare: när luftkvalitet ifrågasätts behöver kommunen dokumenterad data — inte en engångsmätning.",
    ],
    solution: [
      "RoomAlyzer Inomhusklimat sätter CO2-, temperatur-, fukt- och VOC-sensor i varje klassrum och gemensamt utrymme — med larm innan nivåer passerar riktlinjer och instrumentpaneler som vaktmästare faktiskt använder. Varde kommun rullade ut 1 400 sensorer på 36 skolor på nio veckor; genomsnittlig CO2 över 1 200 ppm under lektionstid sjönk från 23 % till 6 % på tio månader.",
      "Mini+ PIR och rörelsesensorer kartlägger verklig beläggning i idrottshallar, aula och gemensamma lokaler så värme och ventilation kan dra tillbaka när rum är tomma. En kommunal instrumentpanel samlar alla byggnader — skolor, förvaltning och kultur — utan separat system per plats.",
    ],
    smarterTogether:
      "Inomhusklimat och Space management tillsammans låter kommuner finjustera ventilation efter faktisk headcount och minska energi i byggnader som står tomma utanför skoltid.",
    closing:
      "Kommunala sensorprogram är normalt dyra och långsamma. RoomAlyzer installeras på minuter per rum, kräver inget Wi-Fi per byggnad och skalar från en skola till en hel kommun.",
  },
};

export const industryContentI18n: Partial<
  Record<Lang, Record<string, IndustryContentOverlay>>
> = { da, de, sv };
