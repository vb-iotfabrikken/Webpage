import type { Lang } from "./lang";

export interface GlossaryEntryOverlay {
  short?: string;
  detail?: string;
}

export const glossaryI18n: Partial<Record<Lang, Record<string, GlossaryEntryOverlay>>> = {
  da: {
    bms: {
      short: "Det centrale styringssystem for en bygnings HVAC, belysning, adgang og brand.",
      detail: "BMS / BAS (US) / CTS (DK) ligger oven på kablede feltbusser som BACnet, Modbus og KNX. RoomAlyzer lægger trådløse sensorer oven på eksisterende BMS-installationer og udfylder ofte huller, hvor kabler er upraktiske.",
    },
    bacnet: {
      short: "En ANSI/ISO-protokol til bygningsautomation, der forbinder HVAC, belysning og adgangskontrol over kablede netværk.",
    },
    br18: {
      short: "De danske bygningsreglementer fra 2018, der fastsætter grundkrav til indeklima og energi for nye og renoverede bygninger.",
      detail: "BR18 kapitel 14 omhandler indeklima og kræver CO₂ under 1000 ppm i belagte rum med temperatur- og fugtområder, der varierer efter brugstype.",
    },
    co2: {
      short: "Gasen, beboere udånder; indendørs niveauer er den mest praktiske indikator for ventilationskvalitet i klasseværelser og kontorer.",
      detail: "Udendørs baseline er omkring 420 ppm. BR18 kræver < 1000 ppm i klasseværelser i undervisningstid; niveauer over 1200 ppm påvirker koncentrationen, over 2000 ppm giver hovedpine.",
    },
    csrd: {
      short: "EU-direktivet, der kræver detaljeret bæredygtighedsrapportering for store virksomheder, inkl. bygningsenergi og GHG-metrics.",
    },
    dgnb: {
      short: "Et europæisk certificeringssystem for bæredygtigt byggeri, udbredt i Danmark, Tyskland og Østrig; inkluderer et indeklima-pillar.",
    },
    "en-15251": {
      short: "Den tidligere (2007) europæiske indeklimastandard, nu afløst af EN 16798, men stadig refereret i ældre specifikationer.",
    },
    "en-15757": {
      short: "Den europæiske bevaringsstandard, der angiver klimakrav for organiske hygroskopiske materialer i kulturarvsmiljøer.",
      detail: "EN 15757 bruger en relativ tilgang (sæsonbånd udledt af objektets historiske klima) frem for et fast setpoint, ofte mere realistisk i uopvarmede historiske bygninger.",
    },
    "en-16798": {
      short: "Den gældende europæiske standard for bygningers energiydelse inkl. parametre for indeklima.",
      detail: "Del 1 definerer fire kategorier af indeklima (I–IV) med CO₂-, temperatur- og fugtområder. Kategori II er det normale designtarget for nye bygninger.",
    },
    esg: {
      short: "Et rapporteringsframework brugt af investorer og tilsyn til ikke-finansiel performance, inkl. bygningsenergi og indeklimadata.",
    },
    fm: {
      short: "Disciplinen, der driver den fysiske arbejdsplads, rengøring, vedligehold, space planning, energi og miljø.",
    },
    gdpr: {
      short: "EU's databeskyttelsesforordning, der gælder, når en bygnings sensordata kan knyttes til en identificerbar person.",
      detail: "Aggregeret rumbelægning er ikke persondata. Skrivebordsniveau kombineret med hot-desk-bookinger er det som regel, derfor rollebaseret adgang og konfigurerbar opbevaring.",
    },
    ghg: {
      short: "Gasserne i CO₂-fodaftryk: CO₂, CH₄, N₂O, F-gasser. Bygningsdrift genererer scope-1- og scope-2-emissioner.",
    },
    iaq: {
      short: "Samlebetegnelsen for måling og styring af luft inde i en bygning: CO₂, temperatur, fugt, VOC, PM2.5 og mere.",
    },
    iot: {
      short: "Netværket af fysiske enheder (sensorer, gateways, aktuatorer) forbundet til internettet til dataindsamling og automatisering.",
    },
    "iso-27001": {
      short: "Den internationale standard for informationssikkerhedsstyring (ISMS); IoT Fabrikken er certificeret.",
    },
    led: {
      short: "En lavenergikilde på sensorer som trafiklys-indikator for CO₂, fugt eller alarmstatus.",
    },
    leed: {
      short: "Et US-origineret bygningscertificeringssystem med indeklima-kreditter, der kræver kontinuerlig overvågning.",
    },
    mqtt: {
      short: "En let publish-subscribe-protokol til live sensordata fra platformen til BMS, NOC og ITSM-systemer.",
    },
    mcp: {
      short: "En ny åben protokol, der lader LLM-klienter forespørge eksterne datakilder (inkl. IoT-platforme) med strukturerede værktøjer.",
    },
    "nb-iot": {
      short: "En 3GPP-celleprotokol til lavenergi-IoT. Fungerer gennem beton og under jorden, kører på operatørnetværk og kræver ikke lokal gateway.",
    },
    niagara: {
      short: "Et udbredt bygningsautomation-framework til BACnet, LonWorks, Modbus og IP-enheder under én supervisor.",
    },
    noc: {
      short: "Det 24/7 overvågningscenter, der modtager vanddetektions- og kritiske alarmer på vegne af datacenter- og enterprise-kunder.",
    },
    pi: {
      short: "En aggregeret score i indeklimarapporter, der kombinerer overskridelsesfrekvens, alvor og varighed til én procent.",
    },
    pir: {
      short: "Belægningssensorteknologi, der detekterer bevægelse via infrarød stråling, standard for tilstedeværelse på rumniveau.",
    },
    pm25: {
      short: "Fine luftbårne partikler små nok til at passere ind i blodbanen. Overvåges som del af moderne IAQ-programmer.",
    },
    "pmv-ppd": {
      short: "Fangers termiske komfortindekser, brugt i EN 16798 og ISO 7730 til at forudsige, hvordan folk oplever temperatur, fugt og aktivitet.",
    },
    ppm: {
      short: "Enheden for CO₂ og mange sporstofgasser: 1 ppm betyder 1 molekyle ud af en million.",
    },
    proptech: {
      short: "Property technology: software og hardware, der omformer design, opførelse og drift af erhvervs- og boligejendomme.",
    },
    "rest-api": {
      short: "Et HTTP request-response-interface til at hente sensordata, administrere rum og konfigurere alarmer. Dokumenteret med OpenAPI.",
    },
    rh: {
      short: "Forholdet mellem vanddamptryk og mætning, angivet i procent. 40–60 % RH er komfortzonen for de fleste belagte rum.",
    },
    "scope-2": {
      short: "GHG-emissioner fra købt elektricitet og fjernvarme. Det meste af bygningsdriftens emissioner er scope 2.",
    },
    sla: {
      short: "De kontraktmæssige forpligtelser om platformens oppetid og supportresponstider.",
    },
    sso: {
      short: "Én login med virksomhedens identity provider (Azure AD, Okta, Google) i stedet for separate konti pr. tjeneste.",
    },
    voc: {
      short: "En samlet måling af organiske forbindelser, der afgasses fra maling, lim, rengøring og menneskelig aktivitet.",
      detail: "TVOC er nyttigt til trenddetektion (rengøring lige sket, nyt møbel ankom) frem for absolutte sundhedstærskler, fordi enkeltstoffer har meget forskellig toksicitet.",
    },
    twpi: {
      short: "Et indeklimaindikator, der vægter overskridelser efter, hvor længe rummet faktisk var belagt.",
    },
    vav: {
      short: "Et ventilationsstyringsskema, hvor hvert rum får en spjæld, der modulerer luftmængde, ideelt mål for CO₂-styret efterspørgselsregulering.",
    },
    "voc-single": {
      short: "En stor familie af kulstofbaserede forbindelser, der fordamper ved stuetemperatur. Overvåges samlet som TVOC.",
    },
    vtt: {
      short: "Det finske Teknologiske Forskningscenter. Udgiver ofte citerede studier om indeklima og bevaring.",
    },
    well: {
      short: "Et wellness-fokuseret bygningscertificering med strenge krav til indeklima og komfort, populært blandt kontorlejere.",
    },
    mmwave: {
      short: "Millimeterbølge-radarsensorer, der tæller personer og estimerer kropsholdning uden kameraer. Bruges, hvor PIR er for grov.",
    },
  },
  de: {
    bms: {
      short: "Das zentrale Steuerungssystem für HVAC, Beleuchtung, Zutritt und Brandmeldeanlagen eines Gebäudes.",
      detail: "BMS / BAS (US) / CTS (DK) sitzen auf verdrahteten Feldbussen wie BACnet, Modbus und KNX. RoomAlyzer ergänzt bestehende BMS-Installationen mit drahtlosen Sensoren, oft dort, wo Verkabelung unpraktisch ist.",
    },
    bacnet: {
      short: "Ein ANSI/ISO-Protokoll für Gebäudeautomation, das HVAC, Beleuchtung und Zutrittskontrolle über verkabelte Netze verbindet.",
    },
    br18: {
      short: "Die dänische Bauordnung von 2018 mit Grundanforderungen an Indoor climate und Energie für Neubau und Sanierung.",
      detail: "BR18 Kapitel 14 regelt das Indoor climate und verlangt CO₂ unter 1000 ppm in belegten Räumen; Temperatur- und Feuchtebereiche variieren nach Nutzungstyp. In Deutschland gelten vergleichbare Anforderungen über DIN/EN oder lokale Vorschriften.",
    },
    co2: {
      short: "Das von Nutzern ausgeatmete Gas; Innenwerte sind der praktischste Indikator für Lüftungsqualität in Klassenzimmern und Büros.",
      detail: "Außenluft liegt bei etwa 420 ppm. In Deutschland gelten vergleichbare Grenzwerte über DIN/EN-Normen und GEG; über 1200 ppm sinkt die Konzentration, über 2000 ppm treten Kopfschmerzen auf.",
    },
    csrd: {
      short: "Die EU-Richtlinie zu detaillierter Nachhaltigkeitsberichterstattung großer Unternehmen, inkl. Gebäudeenergie und GHG-Kennzahlen.",
    },
    dgnb: {
      short: "Ein europäisches Nachhaltigkeitszertifikat, verbreitet in Dänemark, Deutschland und Österreich; mit Säule Innenumwelt.",
    },
    "en-15251": {
      short: "Die frühere (2007) europäische Innenumweltnorm, heute durch EN 16798 abgelöst, aber in älteren Spezifikationen noch referenziert.",
    },
    "en-15757": {
      short: "Die europäische Preservationsnorm mit Klimavorgaben für organische hygroskopische Materialien im Kulturerbe.",
      detail: "EN 15757 nutzt einen relativen Ansatz (Saisonbänder aus dem historischen Klima des Objekts) statt eines festen Sollwerts, oft realistischer in unbeheizten historischen Gebäuden.",
    },
    "en-16798": {
      short: "Die aktuelle europäische Norm zur Energieeffizienz von Gebäuden inkl. Parameter der Innenumwelt.",
      detail: "Teil 1 definiert vier Kategorien der Innenumwelt (I–IV) mit CO₂-, Temperatur- und Feuchtebereichen. Kategorie II ist das übliche Ziel für Neubauten.",
    },
    esg: {
      short: "Ein Berichtsrahmen für nicht-finanzielle Leistung von Investoren und Aufsicht, inkl. Gebäudeenergie und Indoor climate data.",
    },
    fm: {
      short: "Die Disziplin, die den physischen Arbeitsplatz betreibt: Reinigung, Wartung, Flächenplanung, Energie und Umwelt.",
    },
    gdpr: {
      short: "Die EU-Datenschutz-Grundverordnung, wenn Gebäudesensordaten einer identifizierbaren Person zugeordnet werden können.",
      detail: "Aggregierte Raumbelegung ist keine personenbezogenen Daten. Schreibtisch-Belegung mit Hot-Desk-Buchungen meist schon, dafür strikte rollenbasierte Zugriffe und konfigurierbare Aufbewahrung.",
    },
    ghg: {
      short: "Die Gase im CO₂-Fußabdruck: CO₂, CH₄, N₂O, F-Gase. Gebäudebetrieb erzeugt Scope-1- und Scope-2-Emissionen.",
    },
    iaq: {
      short: "Oberbegriff für Messung und Steuerung der Luft im Gebäude: CO₂, Temperatur, Feuchte, VOC, PM2.5 und mehr.",
    },
    iot: {
      short: "Das Netz physischer Geräte (Sensoren, Gateways, Aktoren) mit Internetanbindung für Datenerfassung und Automatisierung.",
    },
    "iso-27001": {
      short: "Die internationale Norm für Informationssicherheits-Managementsysteme (ISMS); IoT Fabrikken ist zertifiziert.",
    },
    led: {
      short: "Eine energiesparende Lichtquelle an Sensoren als Ampel-Indikator für CO₂, Feuchte oder Alarmstatus.",
    },
    leed: {
      short: "Ein US-originiertes Gebäudezertifikat mit Innenluft-Krediten, die kontinuierliches Monitoring verlangen.",
    },
    mqtt: {
      short: "Ein leichtes Publish-Subscribe-Protokoll zum Streamen von Live-Sensordaten von der Plattform zu BMS, NOC und ITSM.",
    },
    mcp: {
      short: "Ein neues offenes Protokoll, mit dem LLM-Clients externe Datenquellen (inkl. IoT-Plattformen) per strukturierter Tools abfragen.",
    },
    "nb-iot": {
      short: "Ein 3GPP-Mobilfunkprotokoll für Low-Power-IoT. Durchdringt Beton und Untergrund, läuft über Carrier-Netze, ohne lokales Gateway.",
    },
    niagara: {
      short: "Ein weit verbreitetes Gebäudeautomation-Framework für BACnet, LonWorks, Modbus und IP-Geräte unter einer Supervisor-Oberfläche.",
    },
    noc: {
      short: "Das 24/7-Überwachungszentrum, das Water detections- und kritische Alarme für Rechenzentrum- und Enterprise-Kunden empfängt.",
    },
    pi: {
      short: "Ein aggregierter Score in Indoor climateberichten, der Überschreitungshäufigkeit, Schwere und Dauer zu einem Prozentwert bündelt.",
    },
    pir: {
      short: "Belegungssensortechnik, die Bewegung über Infrarotstrahlung erfasst: Standard für Anwesenheit auf Raumebene.",
    },
    pm25: {
      short: "Feinstaubpartikel klein genug für den Blutkreislauf. Teil moderner IAQ-Programme.",
    },
    "pmv-ppd": {
      short: "Fangers thermische Komfortindizes, in EN 16798 und ISO 7730 zur Vorhersage der Wahrnehmung von Temperatur, Feuchte und Aktivität.",
    },
    ppm: {
      short: "Die Einheit für CO₂ und viele Spurengase: 1 ppm bedeutet ein Molekül unter einer Million.",
    },
    proptech: {
      short: "Property Technology: Software und Hardware, die Planung, Bau und Betrieb von Gewerbe- und Wohnimmobilien verändern.",
    },
    "rest-api": {
      short: "Eine HTTP-Schnittstelle zum Abrufen von Sensordaten, Verwalten von Räumen und Konfigurieren von Alarmen. Dokumentiert mit OpenAPI.",
    },
    rh: {
      short: "Verhältnis von Dampfdruck zu Sättigung in Prozent. 40–60 % r. F. ist der Komfortbereich für die meisten belegten Räume.",
    },
    "scope-2": {
      short: "GHG-Emissionen aus eingekauftem Strom und Fernwärme. Der Großteil des Gebäudebetriebs fällt unter Scope 2.",
    },
    sla: {
      short: "Die vertraglichen Zusagen zu Plattformverfügbarkeit und Support-Reaktionszeiten.",
    },
    sso: {
      short: "Einmal anmelden mit dem Unternehmens-Identity-Provider (Azure AD, Okta, Google) statt separater Konten pro Dienst.",
    },
    voc: {
      short: "Eine Summenmessung organischer Verbindungen aus Farbe, Klebstoff, Reinigung und menschlicher Aktivität.",
      detail: "TVOC eignet sich für Trenddetektion (Reinigung gerade erfolgt, neues Möbelstück) statt absoluter Gesundheitsschwellen, weil Einzelstoffe sehr unterschiedlich toxisch sind.",
    },
    twpi: {
      short: "Ein Indoor climateindikator, der Überschreitungen nach tatsächlicher Belegungsdauer gewichtet.",
    },
    vav: {
      short: "Lüftungsregelung mit modulierenden Klappen pro Raum, ideales Ziel für CO₂-gesteuerte Bedarfsführung.",
    },
    "voc-single": {
      short: "Eine große Familie kohlenstoffbasierter Verbindungen, die bei Raumtemperatur verdampfen. Gemessen als TVOC.",
    },
    vtt: {
      short: "Das finnische Technische Forschungszentrum. Veröffentlicht häufig zitierte Studien zu Indoor climate und Preservation.",
    },
    well: {
      short: "Ein Wellness-orientiertes Gebäudezertifikat mit strengen Anforderungen an Luft und Komfort, beliebt bei Büromietern.",
    },
    mmwave: {
      short: "Millimeterwellen-Radarsensoren, die Personen zählen und Haltung schätzen ohne Kameras. Wo PIR zu grob ist.",
    },
  },
  sv: {
    bms: {
      short: "Det centrala styrsystemet för en byggnads HVAC, belysning, åtkomst och brandsystem.",
      detail: "BMS / BAS (US) / CTS (DK) sitter ovanpå kabelburna fältbussar som BACnet, Modbus och KNX. RoomAlyzer lägger trådlösa sensorer ovanpå befintliga BMS-installationer och fyller ofta luckor där kabeldragning är opraktiskt.",
    },
    bacnet: {
      short: "Ett ANSI/ISO-protokoll för byggautomation som kopplar HVAC, belysning och åtkomstkontroll över kabelnät.",
    },
    br18: {
      short: "Danska byggreglerna från 2018 med grundkrav på inomhusklimat och energi för nybyggnation och renovering.",
      detail: "BR18 kapitel 14 reglerar inomhusklimat och kräver CO₂ under 1000 ppm i belagda rum; temperatur- och fuktintervall varierar med användningstyp. I Sverige gäller motsvarande krav via BBR eller lokala föreskrifter.",
    },
    co2: {
      short: "Gasen som andas ut av personer; inomhusnivåer är den mest praktiska indikatorn på ventilationskvalitet i klassrum och kontor.",
      detail: "Utomhusnivå ligger runt 420 ppm. BBR ställer krav på CO₂-nivåer i klassrum under lektionstid; över 1200 ppm påverkas koncentrationen, över 2000 ppm ger huvudvärk.",
    },
    csrd: {
      short: "EU-direktivet som kräver detaljerad hållbarhetsrapportering för stora företag, inkl. byggnadsenergi och GHG-mått.",
    },
    dgnb: {
      short: "Ett europeiskt certifieringssystem för hållbart byggande, vanligt i Danmark, Tyskland och Österrike; inkluderar inomhusmiljö.",
    },
    "en-15251": {
      short: "Den tidigare (2007) europeiska inomhusmiljöstandarden, nu ersatt av EN 16798 men fortfarande refererad i äldre specifikationer.",
    },
    "en-15757": {
      short: "Den europeiska bevarandestandard som anger klimatkrav för organiska hygroskopiska material i kulturarvsmiljöer.",
      detail: "EN 15757 använder ett relativt angrepp (säsongsband från objektets historiska klimat) snarare än en fast setpoint, ofta mer realistiskt i ouppvärmda historiska byggnader.",
    },
    "en-16798": {
      short: "Den gällande europeiska standarden för byggnaders energiprestanda inkl. parametrar för inomhusmiljö.",
      detail: "Del 1 definierar fyra kategorier av inomhusmiljö (I–IV) med CO₂-, temperatur- och fuktintervall. Kategori II är normalt designtarget för nybyggnation.",
    },
    esg: {
      short: "Ett rapporteringsramverk för icke-finansiell prestation hos investerare och tillsyn, inkl. byggnadsenergi och inomhusklimadata.",
    },
    fm: {
      short: "Disciplinen som driver den fysiska arbetsplatsen, städning, underhåll, ytplanering, energi och miljö.",
    },
    gdpr: {
      short: "EU:s dataskyddsförordning när byggnadssensordata kan kopplas till en identifierbar person.",
      detail: "Aggregerad rumsnärvaro är inte personuppgifter. Skrivbordsnivå kombinerat med hot-desk-bokningar är det ofta, därför rollbaserad åtkomst och konfigurerbar lagring.",
    },
    ghg: {
      short: "Gaserna i koldioxidavtryck: CO₂, CH₄, N₂O, F-gaser. Byggnadsdrift ger scope-1- och scope-2-utsläpp.",
    },
    iaq: {
      short: "Samlingsbegreppet för mätning och styrning av luft inomhus: CO₂, temperatur, fukt, VOC, PM2.5 och mer.",
    },
    iot: {
      short: "Nätverket av fysiska enheter (sensorer, gateways, ställdon) anslutna till internet för datainsamling och automation.",
    },
    "iso-27001": {
      short: "Den internationella standarden för informationssäkerhetsledning (ISMS); IoT Fabrikken är certifierad.",
    },
    led: {
      short: "En lågenergikälla på sensorer som trafikljusindikator för CO₂, fukt eller larmstatus.",
    },
    leed: {
      short: "Ett US-ursprungligt byggcertifieringssystem med inomhusluftkrediter som kräver kontinuerlig övervakning.",
    },
    mqtt: {
      short: "Ett lätt publish-subscribe-protokoll för live sensordata från plattformen till BMS, NOC och ITSM-system.",
    },
    mcp: {
      short: "Ett nytt öppet protokoll som låter LLM-klienter fråga externa datakällor (inkl. IoT-plattformar) med strukturerade verktyg.",
    },
    "nb-iot": {
      short: "Ett 3GPP-cellprotokoll för lågenergi-IoT. Fungerar genom betong och under jord, på operatörsnät, utan lokal gateway.",
    },
    niagara: {
      short: "Ett utbrett byggautomation-ramverk för BACnet, LonWorks, Modbus och IP-enheter under en supervisor.",
    },
    noc: {
      short: "Det dygnet-runt-övervakningscenter som tar emot vattendetekterings- och kritiska larm för datacenter- och enterprise-kunder.",
    },
    pi: {
      short: "Ett aggregerat betyg i inomhusklimatrapporter som kombinerar överskridandefrekvens, allvar och varaktighet till en procent.",
    },
    pir: {
      short: "Närvarosensorteknik som detekterar rörelse via infraröd strålning, standard för närvaro på rumsnivå.",
    },
    pm25: {
      short: "Fina luftburna partiklar tillräckligt små för att passera in i blodet. Övervakas i moderna IAQ-program.",
    },
    "pmv-ppd": {
      short: "Fangers termiska komfortindex, i EN 16798 och ISO 7730 för att förutsäga upplevelse av temperatur, fukt och aktivitet.",
    },
    ppm: {
      short: "Enheten för CO₂ och många spårgaser: 1 ppm betyder en molekyl av en miljon.",
    },
    proptech: {
      short: "Property technology: mjukvara och hårdvara som omformar design, byggande och drift av kommersiella och bostadsfastigheter.",
    },
    "rest-api": {
      short: "Ett HTTP request-response-gränssnitt för sensordata, rumshantering och larmkonfiguration. Dokumenterat med OpenAPI.",
    },
    rh: {
      short: "Förhållandet mellan ångtryck och mättnad i procent. 40–60 % RH är komfortzonen för de flesta belagda rum.",
    },
    "scope-2": {
      short: "GHG-utsläpp från köpt el och fjärrvärme. Det mesta av byggnadsdriftens utsläpp är scope 2.",
    },
    sla: {
      short: "De avtalsenliga åtagandena om plattformens drifttid och supportresponstider.",
    },
    sso: {
      short: "En inloggning med företagets identity provider (Azure AD, Okta, Google) i stället för separata konton per tjänst.",
    },
    voc: {
      short: "En sammanslagen mätning av organiska föreningar från färg, lim, städning och mänsklig aktivitet.",
      detail: "TVOC är användbart för trenddetektion (städning just skett, ny möbel anlänt) snarare än absoluta hälsotrösklar, eftersom enskilda ämnen har mycket olika toxicitet.",
    },
    twpi: {
      short: "En inomhusklimatindikator som viktar överskridanden efter hur länge rummet faktiskt var belagt.",
    },
    vav: {
      short: "Ett ventilationsstyrsystem där varje rum får en spjäll som modulerar luftflöde, idealt mål för CO₂-styrd efterfrågestyrning.",
    },
    "voc-single": {
      short: "En stor familj kolbaserade föreningar som avdunstar vid rumstemperatur. Mäts samman som TVOC.",
    },
    vtt: {
      short: "Finlands tekniska forskningscentrum. Publicerar ofta citerade studier om inomhusklimat och bevarande.",
    },
    well: {
      short: "Ett wellness-fokuserat byggcertifiering med strikta krav på inomhusluft och komfort, populärt bland kontorshyresgäster.",
    },
    mmwave: {
      short: "Millimetervågsradarsensorer som räknar personer och uppskattar hållning utan kameror. Där PIR är för grov.",
    },
  },
};
