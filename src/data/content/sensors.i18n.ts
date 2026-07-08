import type { Lang } from "../lang";
import type { SensorPageContent } from "./types";

/**
 * Per-locale translations of the sensor detail copy. English (`sensors.ts`) is
 * the canonical source; entries here override it field-by-field. Anything left
 * out falls back to the English value, so partial translations are safe.
 *
 * `benefits`, if provided, must be the complete ordered array for that sensor
 * (it replaces the English array wholesale rather than merging item-by-item).
 *
 * Product/brand names are not translated (so `heroTitle` is usually omitted),
 * with the approved exception that "Water detector" is "Wasserdetektor" in `de`.
 */
export type SensorContentOverlay = Partial<Omit<SensorPageContent, "slug">>;

export const sensorContentI18n: Partial<Record<Lang, Record<string, SensorContentOverlay>>> = {
  de: {
    "full-plus": {
      heroTitleAccent: "Vollständige Raumklimaüberwachung, komplett kabellos.",
      heroLead:
        "Der Full+ ist Ihre All-in-One-Lösung zur präzisen Überwachung von Temperatur, Luftfeuchtigkeit, CO2 und TVOC. Konzipiert für den mühelosen professionellen Einsatz, liefert er die entscheidenden Daten, um Wohlbefinden zu optimieren, Gebäude zu schützen und Heizkosten zu senken.",
      useCases: "Schulen & Klassenzimmer · Kindertagesstätten · Büros · DGNB-zertifizierte Gebäude",
      benefits: [
        {
          title: "Kein IT-Aufwand",
          body: "Arbeitet über ein sicheres, unabhängiges NB-IoT-Netz, ganz ohne WLAN oder Gateways.",
        },
        {
          title: "Einrichten und vergessen",
          body: "Bis zu 10 Jahre Batterielaufzeit für einen echten wartungsfreien Betrieb.",
        },
        {
          title: "Faktenbasierte Entscheidungen",
          body: "Schluss mit Rätselraten: marktführende Präzision und minimale Drift belegen die tatsächlichen Bedingungen schwarz auf weiß.",
        },
        {
          title: "Intelligente Plattformintegration",
          body: "Nahtlose Anbindung an die RoomAlyzer-Plattform für Echtzeitwarnungen, Schimmelprognosen und automatisierte Datenerfassung für DGNB-Zertifizierungen.",
        },
      ],
    },
    "mini-plus": {
      heroTitleAccent: "Präzise Temperatur- und Feuchtemessung, ohne die Komplexität.",
      heroLead:
        "Der Mini+ ist die ideale Lösung, um die wichtigsten Parameter Ihres Raumklimas präzise zu überwachen, ohne unnötige Komplexität. Für den professionellen Einsatz konzipiert, verbindet er robuste Hardware mit der intelligenten RoomAlyzer-Plattform, um Energieverbrauch zu optimieren und Werte zu schützen.",
      useCases: "Gebäude mit vielen Räumen · Pflegeheime · Museen & Kirchen · Mietobjekte",
      benefits: [
        {
          title: "Schnelle Inbetriebnahme",
          body: "Taste am Sensor drücken: Daten fließen sofort über NB-IoT, ohne Wi-Fi, Gateway oder IT-Einrichtung.",
        },
        {
          title: "Echter wartungsfreier Betrieb",
          body: "Ein austauschbares 3 × AA-Lithium-Paket liefert bis zu 10 Jahre Batterielaufzeit für stabile Überwachung bei niedrigen Betriebskosten.",
        },
        {
          title: "Faktenbasierte Dokumentation",
          body: "±0,1 °C und ±1 % r. F. Präzision bei <0,03 °C/Jahr Drift – nachweisbare Bedingungen, exportierbar über die RoomAlyzer-Plattform.",
        },
        {
          title: "Präzise Energieeinsparungen",
          body: "Mit H124 × B60 × T26 mm (130 g) in jedem Raum einsetzen und Heizkosten um ~5 % pro gesenktem Grad senken, gestützt durch Raumdaten.",
        },
      ],
    },
    "mini-plus-pir": {
      heroTitleAccent: "Präzise Raumklima- und Auslastungsdaten, mit langer Batterielaufzeit.",
      heroLead:
        "Der Mini+ PIR ist die intelligente All-in-One-Lösung für ein optimiertes Raumklima und eine bedarfsgerechte Flächennutzung. Durch die Kombination präziser Klimamessungen mit anonymisierter Belegungserfassung liefert er einen ganzheitlichen Überblick über Ihre Gebäudedynamik.",
      useCases: "Flexible Büros · Besprechungsräume · Geteilte Arbeitsplätze",
      benefits: [
        {
          title: "Dokumentierte Bedingungen in Echtzeit",
          body: "Schaffen Sie eine verlässliche Datenbasis für Ihr Raumklima mit High-End-Sensorik für maximale Präzision.",
        },
        {
          title: "Intelligente Energieoptimierung",
          body: "Verfolgen Sie die Raumbelegung, um verstecktes Sparpotenzial bei Heizung und Lüftung aufzudecken: 5 % Heizkosten pro gesenktem Grad.",
        },
        {
          title: "Faktenbasierte Bedarfsanalyse",
          body: "Solide Grundlage für die Entscheidung, ob Flächen neu verteilt oder Reinigungsintervalle an die tatsächliche Nutzung statt an starre Pläne angepasst werden sollten.",
        },
        {
          title: "Kein IT-Aufwand",
          body: "Arbeitet zu 100 % kabellos über ein geschlossenes, sicheres Netz, unabhängig von Ihrer lokalen IT und mit bis zu 10 Jahren Batterielaufzeit.",
        },
      ],
    },
    humidity: {
      heroTitleAccent: "Diskreter Schutz für Werte und Raumklima, mit extrem langer Batterielaufzeit.",
      heroLead:
        "Der Humidity ist die ideale Lösung für alle, die präzise Temperatur- und Feuchtedaten in einem diskreten, kompakten Format benötigen. Er liefert exakte Werte an die RoomAlyzer-Plattform, um unersetzliche Kulturgüter zu schützen, strengen Denkmalschutz einzuhalten oder Büroumgebungen zu optimieren.",
      useCases: "Museen & Kirchen · Archive · Denkmalgeschützte Gebäude",
      benefits: [
        {
          title: "Höchste Diskretion",
          body: "Dank extrem kompaktem Design und unter 10 Gramm Gewicht fügt sich die Technik nahtlos in Büros, Kirchen, Museen oder Vitrinen ein.",
        },
        {
          title: "Extreme Wirtschaftlichkeit",
          body: "Eine Batterielaufzeit von bis zu 15 Jahren garantiert eine stabile, nahezu wartungsfreie Zustandsüberwachung mit sehr niedrigen Betriebskosten.",
        },
        {
          title: "Flexibel und präzise",
          body: "High-End-Sensorik liefert maximale Präzision mit marktführender Langzeitstabilität, sodass eine Kalibrierung im laufenden Betrieb entfällt.",
        },
        {
          title: "Sichere Verbindung",
          body: "Die Daten werden sicher über den Cloud Connector und ein geschlossenes Netz übertragen, unabhängig vom lokalen WLAN und auch durch dicke Wände.",
        },
      ],
    },
    co2: {
      heroTitleAccent: "Präzise Luftqualitätsdaten, mit maximaler Batterielaufzeit.",
      heroLead:
        "Der CO2 ist die professionelle Lösung zur Überwachung der Luftqualität dort, wo Wohlbefinden, Gesundheit und Konzentration entscheidend sind. In Kombination mit der RoomAlyzer-Plattform bietet er eine fundierte, faktenbasierte Grundlage, um Lüftung und Raumklima zu optimieren.",
      useCases: "Klassenzimmer · Besprechungsräume · Großraumbüros",
      benefits: [
        {
          title: "Faktenbasierte Dokumentation",
          body: "Eine konkrete Dokumentation der CO2-Werte hilft, Nutzeranfragen professionell zu beantworten und Gebäudediskussionen mit verlässlichen Daten zu versachlichen.",
        },
        {
          title: "Mehr Leistungsfähigkeit",
          body: "Aktives CO2-Management reduziert Müdigkeit und Kopfschmerzen in Klassen oder Büros, eine direkte Investition in weniger Krankheitstage und bessere Konzentration.",
        },
        {
          title: "Einfache Energieoptimierung",
          body: "Regeln Sie die Lüftung nach Echtzeitdaten statt nach starren Zeitplänen und senken Sie Strom- und Heizverbrauch, ohne Komfort einzubüßen.",
        },
        {
          title: "Nahtlose Integration",
          body: "Überträgt Daten sicher über den Cloud Connector, völlig unabhängig von Ihrem lokalen WLAN oder IT-Netz und mit minimalem Verwaltungsaufwand.",
        },
      ],
    },
    temperature: {
      heroTitleAccent: "Sichere und präzise Temperaturüberwachung im kleinsten Format der Welt.",
      heroLead:
        "Der Temperature überwacht präzise kritische Umgebungen, in denen kleinste Abweichungen erhebliche Folgen haben. Für die mühelose Validierung konzipiert, sichert er die korrekte Lagerung von Medikamenten und Lebensmitteln sowie den stabilen Betrieb technischer Anlagen und Labore.",
      useCases: "Apotheken & Medikamentenlager · Lebensmittellager · Labore & Serverräume",
      benefits: [
        {
          title: "Kein IT-Aufwand",
          body: "Überträgt Daten sicher mit SecureDataShot-Technologie über einen Cloud Connector, völlig unabhängig von Ihrem lokalen WLAN oder IT-Netz.",
        },
        {
          title: "Maximale Autonomie",
          body: "Profitieren Sie von bis zu 15 Jahren Batterielaufzeit und sparen Sie sich laufende Wartung und Serviceeinsätze, selbst an schwer zugänglichen Stellen.",
        },
        {
          title: "Sofortige Reaktion",
          body: "Automatische E-Mail- und SMS-Benachrichtigungen, sobald Temperaturgrenzen überschritten werden, damit Ihr Team handelt, bevor wertvolle Ware verdirbt.",
        },
        {
          title: "Schnelle, flexible Installation",
          body: "Der ultrakompakte 3-Gramm-Sensor mit leistungsstarkem Klebeband ist in Sekunden einsatzbereit, ganz ohne Kabel.",
        },
      ],
    },
    outdoor: {
      heroTitleAccent: "Die professionelle Lösung zur präzisen Überwachung Ihres Außenklimas.",
      heroLead:
        "Der Außensensor ist ein wesentlicher Bestandteil des modernen Gebäudemanagements. Durch die präzise Erfassung von Außentemperatur und -feuchte schafft er die nötige Referenz, um zu verstehen, wie das Außenklima Ihre Bausubstanz beeinflusst.",
      useCases: "Innen-/Außenvergleich · Heizungsoptimierung · Schimmelprävention",
      benefits: [
        {
          title: "Präzise Energieoptimierung",
          body: "Die genaue Kenntnis der Außentemperatur ermöglicht eine bedarfsgerechte Feinabstimmung der Heizung und vermeidet unnötigen Energieverbrauch.",
        },
        {
          title: "Intelligente Schimmelprävention",
          body: "Steuern Sie Lüftungsanlagen proaktiv anhand der Außenfeuchte und minimieren Sie das Risiko, feuchte Luft anzusaugen, bevor sie die Bausubstanz gefährdet.",
        },
        {
          title: "Extreme Wetterbeständigkeit",
          body: "Für raue Umgebungen gebaut: 100 % wasserdicht (IP67) mit robustem, zweiteiligem Design und externer Sonde.",
        },
        {
          title: "Maximale Zuverlässigkeit",
          body: "Überträgt Daten sicher über das geschlossene Netz mit bis zu 8 Jahren Batterielaufzeit, stabil und unabhängig von lokalen IT-Netzen.",
        },
      ],
    },
    desk: {
      heroTitleAccent: "Datengestütztes Flächenmanagement für den modernen Arbeitsplatz.",
      heroLead:
        "Der Desk liefert präzise Auslastungsdaten für eine effiziente, bedarfsgerechte Optimierung Ihrer Büroflächen, ohne Rätselraten. Durch die Kombination von Umgebungstemperaturmessung mit intelligenten Algorithmen zur Präsenzerkennung folgt er konsequent dem Privacy-by-Design-Prinzip und ermittelt nur, ob ein Arbeitsplatz belegt oder frei ist.",
      useCases: "Flexible Büros · Aktivitätsbasierte Arbeitsplätze · Hot-Desking",
      benefits: [
        {
          title: "Bedarfsgerechte Flächenoptimierung",
          body: "Verschaffen Sie sich einen objektiven Überblick über die tatsächliche Nutzung Ihrer Zonen, um Engpässe und ungenutztes Potenzial zu erkennen und Miet- und Energiekosten nachhaltig zu senken.",
        },
        {
          title: "Mehr Wohlbefinden am Arbeitsplatz",
          body: "Echtzeitdaten und farbcodierte Heatmaps führen Mitarbeitende direkt zu freien Plätzen und verkürzen die Suchzeit im Alltag.",
        },
        {
          title: "Faktenbasierte Entscheidungen",
          body: "Eine transparente Grundlage für Entscheidungsträger, um Ressourcen fair und nach tatsächlichem Bedarf auf die Abteilungen zu verteilen.",
        },
        {
          title: "Diskret und langlebig",
          body: "Ultrakompaktes Design mit leistungsstarkem Klebeband und integriertem Akku mit bis zu 9 Jahren Laufzeit für einen echten wartungsfreien Betrieb.",
        },
      ],
    },
    touch: {
      heroTitleAccent: "Einfaches Feedback und schneller Service, genau dort, wo der Bedarf entsteht.",
      heroLead:
        "Der Touch ist die ideale Lösung für alle, die ihren Betrieb bedarfsorientiert steuern möchten. Geben Sie Nutzern und Gästen die Möglichkeit, Sie per Knopfdruck direkt zu informieren, so reagieren Sie sofort, wenn eine Einrichtung Aufmerksamkeit braucht, ob eine Kaffeemaschine defekt ist oder ein Waschraum Service benötigt.",
      useCases: "Waschräume · Kantinen · Empfang & Besprechungsräume",
      benefits: [
        {
          title: "Bedarfsgesteuertes Facility Management",
          body: "Optimieren Sie Ressourcen, indem Sie Personal nur bei tatsächlichem Bedarf einsetzen, weniger unnötiger Aufwand bei maximalem Nutzen.",
        },
        {
          title: "Höhere Zufriedenheit",
          body: "Erfassen Sie valides Feedback in Echtzeit aus Besprechungsräumen, Kantinen oder Empfangsbereichen und beheben Sie Probleme, bevor Beschwerden entstehen.",
        },
        {
          title: "Installation in Sekunden",
          body: "Platzieren Sie den Sensor flexibel an relevanten Servicepunkten per Klebemontage, mit bis zu 15 Jahren Batterielaufzeit für nahezu wartungsfreien Betrieb.",
        },
        {
          title: "Kein IT-Aufwand",
          body: "Die Datenübertragung erfolgt verschlüsselt und sicher über den Cloud Connector, völlig unabhängig von Ihrer lokalen IT-Umgebung.",
        },
      ],
    },
    "open-close": {
      heroTitleAccent: "Volle Transparenz Ihrer Raumressourcen in Echtzeit, von Schließfächern bis Fenstern.",
      heroLead:
        "Der Open/Close liefert präzise Fakten statt Vermutungen zum Status und zur Nutzung Ihrer Infrastruktur. Ob Schließfachverwaltung, Logistikoptimierung für Arbeitskleidung oder Objektschutz durch die Kontrolle geschlossener Fenster, der Sensor verwandelt jedes Ereignis in wertvolle Erkenntnisse.",
      useCases: "Schließfachverwaltung · Arbeitskleidungs-Logistik · Fenster- & Türkontrolle",
      benefits: [
        {
          title: "Intelligente Schließfachverwaltung",
          body: "Ein genauer Überblick über die tatsächliche Belegung ermöglicht es, freie Kapazitäten effizient neuen Mitarbeitenden zuzuweisen, ideal für moderne Konzepte wie Shared Desks.",
        },
        {
          title: "Effiziente Verwaltung und Service",
          body: "Das System zeigt genau, welche Schränke genutzt wurden und ermöglicht bedarfsgerechtes Auffüllen von Arbeitskleidung oder gezielte Inspektionsintervalle.",
        },
        {
          title: "Objektschutz und Energieoptimierung",
          body: "Prüfen Sie nach Feierabend per Klick, ob Fenster und Türen geschlossen sind, das schützt das Gebäude und vermeidet unnötigen Energieverbrauch.",
        },
        {
          title: "Voller Datenschutz",
          body: "Die Lösung verarbeitet ausschließlich technische Messdaten ohne personenbezogene Informationen und minimiert so den DSGVO-Aufwand.",
        },
      ],
    },
    motion: {
      heroTitleAccent: "Kabellose Erfassung der Flächennutzung mit 360°-Rundumblick.",
      heroLead:
        "Der Motion schafft die präzise Grundlage für professionelles Flächenmanagement und die strategische Optimierung Ihrer Gebäudenutzung. Mittels passiver Infrarottechnik (PIR) zur Erkennung von Wärmebewegung erfasst das System die Raumbelegung ausschließlich, um die Nutzung Ihrer Quadratmeter abzubilden.",
      useCases: "Flächenplanung · Reinigungsoptimierung · Facility Management",
      benefits: [
        {
          title: "Strategisches Flächenmanagement",
          body: "Volle Transparenz darüber, wann Ihre Räume tatsächlich genutzt werden, eine faktenbasierte Grundlage für Facility Management und langfristige Flächenplanung.",
        },
        {
          title: "Bedarfsgerechtes Facility Management",
          body: "Optimieren Sie die Ressourcenverteilung, indem Sie Service- und Reinigungsrunden auf tatsächlich genutzte Bereiche konzentrieren, geplant über präzise, automatisierte Heatmaps.",
        },
        {
          title: "Minimale Wartung und Langlebigkeit",
          body: "Mit bis zu 15 Jahren Batterielaufzeit im Normalbetrieb ist der Sensor auf einen nahezu wartungsfreien Lebenszyklus ausgelegt.",
        },
        {
          title: "Einfache Plug-and-Play-Installation",
          body: "Sensor durch Entfernen des Batteriestreifens aktivieren und verschlüsselte Datenübertragung über den Cloud Connector starten: Ihr internes IT-Netz bleibt unberührt.",
        },
      ],
    },
    "water-detector": {
      heroTitleAccent: "Zuverlässige Überwachung unerwünschten Wassers, auch an schwer zugänglichen Stellen.",
      heroLead:
        "Der Wasserdetektor ist der ultimative Schutz vor kostspieligen Wasserschäden in Ihrem gesamten Gebäudebestand. Speziell für den professionellen Betrieb entwickelt, ist der Sensor sowohl als robuste, vollständig wasserdichte Variante (Water Detector Pro IP67) als auch als diskrete Innenvariante (Water Detector Compact IP30) erhältlich.",
      useCases: "Serverräume · Keller & Schächte · Wohnungsbaugesellschaften",
      benefits: [
        {
          title: "Schutz kritischer Infrastruktur",
          body: "Sofortige Benachrichtigungen per E-Mail oder SMS, sobald leitfähige Flüssigkeiten erkannt werden, so fangen Sie Lecks ab, bevor sie Serverräume oder Elektroanlagen erreichen.",
        },
        {
          title: "Sicherheit in Kellern und Schächten",
          body: "Platzieren Sie den Sensor unter Spülen, an Heizungen oder in tiefen Schächten für eine durchgehende Zustandsüberwachung, die die Bausubstanz vor Feuchtigkeit und Schimmel schützt.",
        },
        {
          title: "Installation ohne Grenzen",
          body: "Dank des serienmäßigen 3-Meter-Kabels liegt die Messfläche genau am Sammelpunkt der Flüssigkeit, während das Gehäuse am Ort mit optimaler Signalstärke verbleibt.",
        },
        {
          title: "Schnelle Einführung ohne IT-Freigabe",
          body: "Über das landesweite NB-IoT-Mobilfunknetz arbeitet der Sensor völlig unabhängig vom lokalen WLAN, umständliche Freigaben der IT-Abteilung entfallen.",
        },
      ],
    },
    "water-rope": {
      heroTitleAccent: "Umfassender Schutz statt einzelner Messpunkte, mit durchgehender Zonenerkennung.",
      heroLead:
        "Der Water rope bietet ein fortschrittliches Sicherheitsnetz, indem er einen durchgehenden Pfad statt eines einzelnen Punktes überwacht. Bereits ab 50 mm Kontakt an einer beliebigen Stelle seines flexiblen 3-Meter-Kabels ausgelöst, liefert er die nötige Echtzeitabdeckung, um Hochrisiko-Infrastruktur wie Archive, Labore und Serverräume zu schützen.",
      useCases: "Archive & Labore · Rohrleitungen & Doppelböden · Wohnungsbaugesellschaften",
      benefits: [
        {
          title: "Durchgehender Zonenschutz",
          body: "Verlegen Sie das Sensorkabel entlang ganzer Rohrleitungen, unter Doppelböden oder direkt um kritische Serverschränke und schaffen Sie eine lückenlose Schutzzone.",
        },
        {
          title: "Sofortige Meldung & schneller Auto-Reset",
          body: "Erhalten Sie umgehend Sicherheitswarnungen per E-Mail oder SMS, sobald der Sensor Flüssigkeit erkennt.",
        },
        {
          title: "Einsatz in anspruchsvollen Umgebungen",
          body: "Dank eigenständiger NB-IoT-Technik durchdringt das Mobilfunksignal mühelos tiefe Keller, schweres Mauerwerk und Technikschächte, ganz ohne lokales WLAN.",
        },
        {
          title: "Flexible Installation ohne Grenzen",
          body: "Platzieren Sie die Haupteinheit am Ort mit dem besten Funkempfang und verlegen Sie das erweiterbare Kabel (bis 50 m) genau dort, wo Risiken bestehen.",
        },
      ],
    },
    "cloud-connector": {
      heroTitleAccent: "Die sichere Brücke zwischen Ihren Sensoren und der Cloud.",
      heroLead:
        "Der Cloud Connector ist das zentrale Gateway, das Ihren Sensoren sicheren Netzzugang verschafft, damit Sie präzise Daten für Ihren Gebäudebetrieb erhalten. Während unsere NB-IoT-Sensoren völlig eigenständig arbeiten, fungiert der Cloud Connector als notwendige, sichere Brücke für alle Sensoren mit SecureDataShot-Technologie.",
      useCases: "Erforderlich für SecureDataShot-Sensoren · Standorte mit vielen Sensoren · API-Integrationen",
      benefits: [
        {
          title: "Maximale Sicherheit",
          body: "Überträgt Daten über ein geschlossenes Netz unabhängig von Ihrer lokalen IT-Umgebung und gewährleistet volle NIS2-Konformität und robusten Datenschutz.",
        },
        {
          title: "Einfache Skalierbarkeit",
          body: "Mühelose Plug-and-Play-Installation ohne Konfigurationsaufwand; die große Funkreichweite deckt große Flächen und zahlreiche Sensoren gleichzeitig ab.",
        },
        {
          title: "Zukunftssichere Integration",
          body: "Offene REST-API und Webhooks sorgen dafür, dass das Konnektivitäts-Ökosystem nahtlos mit Ihren anderen Plattformen und Softwaresystemen kommuniziert.",
        },
        {
          title: "Keine WLAN-Abhängigkeit",
          body: "Mit interner SIM-Karte arbeitet er völlig unabhängig vom Gebäude-WLAN und garantiert maximale Stabilität und Hardware-Isolierung.",
        },
      ],
    },
  },
  da: {
    "full-plus": {
      heroTitleAccent: "Komplet overvågning af indeklimaet, helt trådløst.",
      heroLead:
        "Full+-sensoren er din alt-i-én-løsning til præcis overvågning af temperatur, luftfugtighed, CO2 og TVOC. Designet til ubesværet professionel brug leverer den de vitale data, du har brug for til at optimere trivsel, beskytte dine bygninger og reducere varmeomkostninger.",
      useCases: "Skoler & klasselokaler · Daginstitutioner · Kontorer · DGNB-certificerede bygninger",
      benefits: [
        {
          title: "Intet IT-besvær",
          body: "Fungerer via et sikkert, uafhængigt NB-IoT-netværk uden behov for Wi-Fi eller gateways.",
        },
        {
          title: "Indstil og glem",
          body: "Nyd op til 10 års batterilevetid for ægte vedligeholdelsesfri drift.",
        },
        {
          title: "Faktabaserede beslutninger",
          body: "Fjern gætværk med markedsledende præcision og minimal drift, så du kan dokumentere de faktiske forhold sort på hvidt.",
        },
        {
          title: "Smart platformsintegration",
          body: "Forbindes problemfrit til RoomAlyzer-platformen og giver realtidsalarmer, skimmelprognoser og automatisk dataindsamling til DGNB-certificeringer.",
        },
      ],
    },
    "mini-plus": {
      heroTitleAccent: "Præcis temperatur- og fugtovervågning, uden kompleksiteten.",
      heroLead:
        "Mini+-sensoren er den ideelle løsning til præcist at overvåge de mest kritiske parametre i dit indeklima uden unødig kompleksitet. Designet til professionel brug kombinerer den robust hardware med den intelligente RoomAlyzer-platform og hjælper dig med at optimere energiforbruget og beskytte dine værdier.",
      useCases: "Bygninger med mange rum · Plejehjem · Museer & kirker · Lejeboliger",
      benefits: [
        {
          title: "Hurtig idriftsættelse",
          body: "Tryk på knappen på sensoren, data sendes straks via NB-IoT uden Wi-Fi, gateway eller IT-opsætning.",
        },
        {
          title: "Ægte vedligeholdelsesfri drift",
          body: "En udskiftelig pakke med 3 × AA-litiumbatterier giver op til 10 års batterilevetid – stabil overvågning med lave driftsomkostninger.",
        },
        {
          title: "Faktabaseret dokumentation",
          body: "±0,1 °C og ±1 % RF i præcision med under 0,03 °C/år i drift – verificerbare forhold, du kan eksportere fra RoomAlyzer-platformen.",
        },
        {
          title: "Præcise energibesparelser",
          body: "Registrér temperaturen i hvert rum (H124 × B60 × D26 mm, 130 g), og sænk varmeomkostningerne med ~5 % for hver grad, du sænker setpunktet.",
        },
      ],
    },
    "mini-plus-pir": {
      heroTitleAccent: "Præcise data om indeklima og arealudnyttelse, med lang batterilevetid.",
      heroLead:
        "Mini+ PIR er den intelligente alt-i-én-løsning til et optimeret indeklima og en behovsbaseret arealudnyttelse. Ved at kombinere præcise klimamålinger med anonymiseret tilstedeværelsesregistrering giver den et helhedsbillede af din bygnings dynamik.",
      useCases: "Fleksible kontorer · Mødelokaler · Delte arbejdspladser",
      benefits: [
        {
          title: "Dokumenterede forhold i realtid",
          body: "Skab et pålideligt datagrundlag for dit indeklima med avanceret sensorteknologi, der garanterer maksimal præcision.",
        },
        {
          title: "Intelligent energioptimering",
          body: "Følg rumbelægningen for straks at afdække skjult sparepotentiale i varme og ventilation: 5 % på varmeomkostningerne for hver grad sænket.",
        },
        {
          title: "Faktabaseret behovsanalyse",
          body: "Få et solidt grundlag for at beslutte, om arealer skal omfordeles, eller om rengøringsintervaller skal følge den faktiske brug frem for stive skemaer.",
        },
        {
          title: "Intet IT-besvær",
          body: "Fungerer 100 % trådløst via et lukket, sikkert netværk, helt uafhængigt af din lokale IT og med op til 10 års batterilevetid.",
        },
      ],
    },
    humidity: {
      heroTitleAccent: "Diskret beskyttelse af værdier og indeklima, med ekstremt lang batterilevetid.",
      heroLead:
        "Humidity-sensoren er den ideelle løsning for alle, der har brug for præcise temperatur- og fugtdata i et diskret, kompakt format. Den leverer nøjagtige værdier til RoomAlyzer-platformen for at beskytte uerstattelige kulturværdier, overholde streng bevaring eller optimere kontormiljøer.",
      useCases: "Museer & kirker · Arkiver · Fredede bygninger",
      benefits: [
        {
          title: "Højeste diskretion",
          body: "Takket være et ekstremt kompakt design og en vægt på under 10 gram smelter teknologien naturligt ind i kontorer, kirker, museer eller montrer.",
        },
        {
          title: "Ekstrem økonomisk effektivitet",
          body: "En batterilevetid på op til 15 år garanterer stabil tilstandsovervågning, der praktisk talt er vedligeholdelsesfri med usædvanligt lave driftsomkostninger.",
        },
        {
          title: "Fleksibel og præcis",
          body: "Avanceret sensorteknologi leverer maksimal præcision med markedsledende langtidsstabilitet, så kalibrering under drift bliver helt unødvendig.",
        },
        {
          title: "Sikker forbindelse",
          body: "Data overføres sikkert via Cloud Connector gennem et lukket netværk, uafhængigt af dit lokale Wi-Fi og i stand til at trænge gennem tykke mure.",
        },
      ],
    },
    co2: {
      heroTitleAccent: "Præcise data om luftkvalitet, med maksimal batterilevetid.",
      heroLead:
        "CO2-sensoren er den professionelle løsning til at overvåge luftkvaliteten i miljøer, hvor trivsel, sundhed og koncentration er afgørende. Sammen med RoomAlyzer-platformen giver den et solidt, faktabaseret grundlag for at optimere ventilation og dit samlede indeklima.",
      useCases: "Klasselokaler · Mødelokaler · Storrumskontorer",
      benefits: [
        {
          title: "Faktabaseret dokumentation",
          body: "Konkret dokumentation af CO2-niveauer giver dig mulighed for professionelt at håndtere brugerhenvendelser og objektivere bygningsdiskussioner med pålidelige data.",
        },
        {
          title: "Øget ydeevne",
          body: "Aktiv CO2-styring minimerer træthed og hovedpine i klasselokaler eller kontorer, en direkte investering i lavere sygefravær og bedre koncentration.",
        },
        {
          title: "Enkel energioptimering",
          body: "Reguler ventilationen ud fra realtidsdata frem for stive, faste skemaer og sænk el- og varmeforbruget uden at miste komfort.",
        },
        {
          title: "Problemfri integration",
          body: "Overfører data sikkert via Cloud Connector, helt uafhængigt af dit lokale Wi-Fi eller IT-netværk og med minimal administration.",
        },
      ],
    },
    temperature: {
      heroTitleAccent: "Sikker og præcis temperaturovervågning i verdens mindste format.",
      heroLead:
        "Temperature-sensoren tilbyder præcis overvågning af kritiske miljøer, hvor selv de mindste afvigelser har store konsekvenser. Designet til ubesværet validering sikrer den korrekt opbevaring af medicin og fødevarer samt stabil drift af tekniske installationer og laboratorier.",
      useCases: "Apoteker & medicinopbevaring · Fødevareopbevaring · Laboratorier & serverrum",
      benefits: [
        {
          title: "Intet IT-besvær",
          body: "Overfører data sikkert med SecureDataShot-teknologi via en Cloud Connector og forbliver helt uafhængig af dit lokale Wi-Fi eller IT-netværk.",
        },
        {
          title: "Maksimal autonomi",
          body: "Få en exceptionel batterilevetid på op til 15 år, der fjerner løbende vedligeholdelse og servicebesøg, selv på svært tilgængelige steder.",
        },
        {
          title: "Øjeblikkelig reaktion",
          body: "Modtag automatiske e-mail- og SMS-beskeder, når temperaturgrænserne overskrides, så dit team kan handle, før værdifulde varer fordærves.",
        },
        {
          title: "Hurtig, fleksibel installation",
          body: "Den ultrakompakte sensor på 3 gram har kraftig peel-and-stick-tape og er klar til brug på få sekunder uden kabler.",
        },
      ],
    },
    outdoor: {
      heroTitleAccent: "Den professionelle løsning til præcis overvågning af dit udeklima.",
      heroLead:
        "Outdoor-sensoren er en væsentlig del af moderne bygningsdrift. Ved præcist at registrere udendørs temperatur og luftfugtighed skaber den den nødvendige reference, så du forstår, hvordan udeklimaet påvirker din bygningskonstruktion.",
      useCases: "Inde/ude-sammenligning · Varmeoptimering · Skimmelforebyggelse",
      benefits: [
        {
          title: "Præcis energioptimering",
          body: "Kendskab til den nøjagtige udetemperatur ved din ejendom muliggør behovsstyret finjustering af varmeanlægget og fjerner unødigt energiforbrug.",
        },
        {
          title: "Intelligent skimmelforebyggelse",
          body: "Styr ventilationsanlæg proaktivt ved at følge udendørs luftfugtighed og minimer risikoen for at trække fugtig luft ind, før den truer bygningskonstruktionen.",
        },
        {
          title: "Ekstrem vejrbestandighed",
          body: "Bygget til barske miljøer er sensoren 100 % vandtæt (IP67-certificeret) og har et robust, todelt design med ekstern probe.",
        },
        {
          title: "Maksimal pålidelighed",
          body: "Overfører data sikkert via det lukkede netværk med op til 8 års batterilevetid og sikrer stabil drift uafhængigt af lokale IT-netværk.",
        },
      ],
    },
    desk: {
      heroTitleAccent: "Datadrevet arealstyring til den moderne arbejdsplads.",
      heroLead:
        "Desk-sensoren leverer præcise udnyttelsesdata til effektiv, behovsbaseret optimering af dine kontorarealer uden gætværk. Ved at kombinere måling af omgivelsestemperatur med intelligente algoritmer til tilstedeværelsesregistrering følger den konsekvent Privacy by Design-princippet og afgør kun, om en arbejdsplads er optaget eller fri.",
      useCases: "Fleksible kontorer · Aktivitetsbaserede arbejdspladser · Hot-desking",
      benefits: [
        {
          title: "Behovsbaseret arealoptimering",
          body: "Få et objektivt overblik over den faktiske udnyttelse af dine zoner for at identificere flaskehalse og uudnyttet potentiale og dermed sænke leje- og energiomkostninger varigt.",
        },
        {
          title: "Bedre trivsel på arbejdspladsen",
          body: "Brug realtidsdata og farvekodede heatmaps til at guide medarbejdere direkte til ledige skriveborde og reducere søgetiden i hverdagen.",
        },
        {
          title: "Faktabaseret beslutningstagning",
          body: "Skab et gennemsigtigt grundlag for beslutningstagere, så ressourcer kan fordeles retfærdigt mellem afdelinger ud fra reelle behov.",
        },
        {
          title: "Diskret og langtidsholdbar",
          body: "Nyd et ultrakompakt design monteret med kraftig peel-and-stick-tape og et integreret batteri med op til 9 års levetid for ægte vedligeholdelsesfri drift.",
        },
      ],
    },
    touch: {
      heroTitleAccent: "Enkel feedback og hurtig service, præcis dér, hvor behovet opstår.",
      heroLead:
        "Touch-sensoren er den ideelle løsning for alle, der vil styre deres drift ud fra behov. Ved at give dine brugere og gæster mulighed for at give besked direkte med et enkelt tryk på en knap kan du reagere med det samme, når en facilitet kræver opmærksomhed, om en kaffemaskine er ude af drift, eller et toilet skal serviceres.",
      useCases: "Toiletter · Kantiner · Reception & mødelokaler",
      benefits: [
        {
          title: "Behovsstyret facility management",
          body: "Optimer dine ressourcer ved kun at sende personale ud, når der er et reelt behov, og reducer unødigt tidsforbrug.",
        },
        {
          title: "Højere kundetilfredshed",
          body: "Indsaml valid feedback i realtid fra mødelokaler, kantiner eller receptioner og afhjælp problemer med det samme, før de fører til klager.",
        },
        {
          title: "Installation på sekunder",
          body: "Placér sensoren fleksibelt ved relevante servicepunkter med praktisk peel-and-stick-montering og en batterilevetid på op til 15 år.",
        },
        {
          title: "Intet IT-besvær",
          body: "Dataoverførsel er krypteret og håndteres sikkert via Cloud Connector, helt uafhængigt af dit lokale IT-miljø.",
        },
      ],
    },
    "open-close": {
      heroTitleAccent: "Fuld gennemsigtighed over dine arealressourcer i realtid, fra skabe til vinduer.",
      heroLead:
        "Open/Close-sensoren leverer præcise fakta i stedet for gætværk om status og udnyttelse af din infrastruktur. Om du administrerer skabe, optimerer logistik for arbejdstøj eller sikrer ejendomsbeskyttelse ved at kontrollere lukkede vinduer, sensoren forvandler enhver hændelse til værdifuld indsigt.",
      useCases: "Skabsadministration · Arbejdstøjslogistik · Vindues- & dørkontrol",
      benefits: [
        {
          title: "Intelligent skabsadministration",
          body: "Få et præcist overblik over den faktiske belægning for effektivt at tildele ledig kapacitet til nye medarbejdere, ideel støtte til moderne koncepter som delte skriveborde.",
        },
        {
          title: "Effektiv administration og service",
          body: "Systemet viser præcis, hvilke skabe der har været brugt, og muliggør behovsbaseret påfyldning af arbejdstøj eller målrettede inspektionsintervaller.",
        },
        {
          title: "Ejendomsbeskyttelse og energioptimering",
          body: "Kontrollér med et enkelt klik efter arbejdstid, om vinduer eller døre er lukkede, det beskytter bygningen og undgår unødigt energiforbrug.",
        },
        {
          title: "Fuld databeskyttelse",
          body: "Løsningen behandler udelukkende tekniske måledata uden personhenførbare oplysninger og minimerer den administrative byrde i forhold til GDPR.",
        },
      ],
    },
    motion: {
      heroTitleAccent: "Trådløs registrering af arealudnyttelse med 360° panoramaudsyn.",
      heroLead:
        "Motion-sensoren giver det præcise grundlag for professionel arealstyring og strategisk optimering af din bygningsudnyttelse. Ved hjælp af passiv infrarød (PIR) teknologi til at registrere termisk bevægelse registrerer systemet udelukkende rumbelægning for at kortlægge, hvordan dine kvadratmeter bruges.",
      useCases: "Arealplanlægning · Rengøringsoptimering · Facility management",
      benefits: [
        {
          title: "Strategisk arealstyring",
          body: "Få fuld gennemsigtighed over, hvornår dine rum reelt bruges, og skab et faktabaseret grundlag for facility management og langsigtet arealplanlægning.",
        },
        {
          title: "Behovsbaseret facility management",
          body: "Optimer ressourcefordelingen ved at planlægge service- og rengøringsrunder efter de områder, der reelt har været brugt – ud fra præcise, automatiske heatmaps.",
        },
        {
          title: "Minimal vedligeholdelse og lang levetid",
          body: "Med en batterilevetid på op til 15 år ved normal drift er sensoren designet til at køre næsten vedligeholdelsesfrit i hele sin levetid.",
        },
        {
          title: "Enkel plug-and-play-installation",
          body: "Aktivér blot sensoren ved at fjerne batteristrimlen for at starte krypteret dataoverførsel via Cloud Connector, dit interne IT-netværk berøres ikke.",
        },
      ],
    },
    "water-detector": {
      heroTitleAccent: "Pålidelig overvågning af uønsket vand, selv på svært tilgængelige steder.",
      heroLead:
        "Water detector er den ultimative sikring mod kostbare vandskader i hele din bygningsportefølje. Udviklet specielt til professionel drift fås sensoren i både en robust, helt vandtæt variant (Water Detector Pro IP67) og en diskret indendørsvariant (Water Detector Compact IP30).",
      useCases: "Serverrum · Kældre & skakter · Boligselskaber",
      benefits: [
        {
          title: "Beskyttelse af kritisk infrastruktur",
          body: "Modtag øjeblikkelig besked på e-mail eller SMS, når der registreres ledende væske, så du kan opfange læk, før de når serverrum eller elektriske installationer.",
        },
        {
          title: "Sikkerhed i kældre og skakter",
          body: "Placér sensoren under vaske, ved varmeanlæg eller i dybe skakter for kontinuerlig tilstandsovervågning, der beskytter bygningskonstruktionen mod fugt og skimmel.",
        },
        {
          title: "Installation uden grænser",
          body: "Takket være standardkablet på 3 meter placeres måleoverfladen præcis ved væskens opsamlingspunkt, mens sensorhuset forbliver dér, hvor signalstyrken er bedst.",
        },
        {
          title: "Hurtig udrulning uden IT-godkendelse",
          body: "Sensoren kører på det landsdækkende NB-IoT-mobilnetværk og er helt uafhængig af dit lokale Wi-Fi, så du springer besværlige IT-godkendelser over.",
        },
      ],
    },
    "water-rope": {
      heroTitleAccent: "Omfattende beskyttelse frem for enkelte datapunkter med kontinuerlig zoneregistrering.",
      heroLead:
        "Water rope-sensoren giver et avanceret sikkerhedsnet ved at overvåge en kontinuerlig strækning frem for et enkelt punkt. Udløst af så lidt som 50 mm kontakt hvor som helst langs det fleksible 3-meter-kabel leverer den den realtidsdækning, der kræves for at beskytte højrisiko-infrastruktur som arkiver, laboratorier og serverrum.",
      useCases: "Arkiver & laboratorier · Rørføringer & hævede gulve · Boligselskaber",
      benefits: [
        {
          title: "Kontinuerlig zonebeskyttelse",
          body: "Før sensorkablet jævnt langs hele rørføringer, under hævede gulve eller direkte rundt om kritiske serverracks for at skabe en sammenhængende forsvarszone.",
        },
        {
          title: "Øjeblikkelig besked & hurtig auto-reset",
          body: "Få straks sikkerhedsalarmer via e-mail eller SMS, når sensoren registrerer væske.",
        },
        {
          title: "Indsats i krævende miljøer",
          body: "Drevet af selvstændig NB-IoT-teknologi trænger mobilsignalet nemt gennem dybe kældre, tungt murværk og tekniske skakter uden lokalt Wi-Fi.",
        },
        {
          title: "Fleksibel installation uden grænser",
          body: "Placér hovedenheden dér, hvor det trådløse signal er allerbedst, og før det udvidelige kabel (op til 50 m) præcis dér, hvor risici opstår.",
        },
      ],
    },
    "cloud-connector": {
      heroTitleAccent: "Den sikre bro mellem dine sensorer og skyen.",
      heroLead:
        "Cloud Connector er den centrale gateway, der giver dine sensorer sikker netværksadgang, så du modtager præcise data til din bygningsdrift. Mens vores NB-IoT-sensorer fungerer helt selvstændigt, fungerer Cloud Connector som en nødvendig og sikker bro for alle sensorer med SecureDataShot-teknologi.",
      useCases: "Påkrævet til SecureDataShot-sensorer · Lokationer med mange sensorer · API-integrationer",
      benefits: [
        {
          title: "Maksimal sikkerhed",
          body: "Overfører data via et lukket netværk uafhængigt af dit lokale IT-miljø og sikrer fuld NIS2-overholdelse og robust databeskyttelse.",
        },
        {
          title: "Enkel skalerbarhed",
          body: "Nyd en ubesværet plug-and-play-installation uden konfiguration; den store trådløse rækkevidde dækker effektivt store områder og mange sensorer på én gang.",
        },
        {
          title: "Fremtidssikret integration",
          body: "Åbent REST-API og webhooks sikrer, at forbindelsesøkosystemet kommunikerer problemfrit med dine øvrige platforme og softwaresystemer.",
        },
        {
          title: "Ingen Wi-Fi-afhængighed",
          body: "Med et internt SIM-kort fungerer den helt uafhængigt af bygningens Wi-Fi og garanterer maksimal stabilitet og hardware-isolation.",
        },
      ],
    },
  },
  sv: {
    "full-plus": {
      heroTitleAccent: "Komplett övervakning av inomhusklimatet, helt trådlöst.",
      heroLead:
        "Full+-sensorn är din allt-i-ett-lösning för exakt övervakning av temperatur, luftfuktighet, CO2 och TVOC. Utformad för smidig professionell användning levererar den de viktiga data du behöver för att optimera välbefinnande, skydda dina byggnader och sänka uppvärmningskostnaderna.",
      useCases: "Skolor & klassrum · Förskolor · Kontor · DGNB-certifierade byggnader",
      benefits: [
        {
          title: "Inget IT-krångel",
          body: "Fungerar via ett säkert, oberoende NB-IoT-nät utan behov av Wi-Fi eller gateways.",
        },
        {
          title: "Ställ in och glöm",
          body: "Få upp till 10 års batteritid för en verkligt underhållsfri drift.",
        },
        {
          title: "Faktabaserade beslut",
          body: "Eliminera gissningar med marknadsledande precision och minimal drift, så att du kan styrka faktiska förhållanden svart på vitt.",
        },
        {
          title: "Smart plattformsintegration",
          body: "Ansluts sömlöst till RoomAlyzer-plattformen och ger realtidslarm, mögelprognoser och automatisk datainsamling för DGNB-certifieringar.",
        },
      ],
    },
    "mini-plus": {
      heroTitleAccent: "Exakt temperatur- och fuktövervakning, utan komplexiteten.",
      heroLead:
        "Mini+-sensorn är den idealiska lösningen för att exakt övervaka de mest kritiska parametrarna i ditt inomhusklimat utan onödig komplexitet. Utformad för professionell användning kombinerar den robust hårdvara med den intelligenta RoomAlyzer-plattformen för att optimera energiförbrukningen och skydda dina tillgångar.",
      useCases: "Byggnader med många rum · Vårdboenden · Museer & kyrkor · Hyresfastigheter",
      benefits: [
        {
          title: "Snabb driftsättning",
          body: "Tryck på knappen på sensorn, data skickas direkt via NB-IoT utan Wi-Fi, gateway eller IT-installation.",
        },
        {
          title: "Verkligt underhållsfri drift",
          body: "Ett utbytbart 3 × AA litiumpaket ger upp till 10 års batteritid för stabil övervakning med låga driftskostnader.",
        },
        {
          title: "Faktabaserad dokumentation",
          body: "±0,1 °C och ±1 % RF precision med <0,03 °C/år drift, verifierbara förhållanden som du kan exportera från RoomAlyzer-plattformen.",
        },
        {
          title: "Exakta energibesparingar",
          body: "Med H124 × B60 × D26 mm (130 g) i varje rum och sänk uppvärmningskostnaderna med ~5 % för varje grad du sänker börvärdet, stödd av rumsdata.",
        },
      ],
    },
    "mini-plus-pir": {
      heroTitleAccent: "Exakta data om inomhusklimat och ytutnyttjande, med lång batteritid.",
      heroLead:
        "Mini+ PIR är den intelligenta allt-i-ett-lösningen för ett optimerat inomhusklimat och ett behovsanpassat ytutnyttjande. Genom att kombinera exakta klimatmätningar med anonymiserad närvaroregistrering ger den en helhetsbild av byggnadens dynamik.",
      useCases: "Flexibla kontor · Mötesrum · Delade arbetsplatser",
      benefits: [
        {
          title: "Dokumenterade förhållanden i realtid",
          body: "Skapa ett tillförlitligt dataunderlag för ditt inomhusklimat med avancerad sensorteknik som garanterar maximal precision.",
        },
        {
          title: "Intelligent energioptimering",
          body: "Följ rumsbeläggningen för att omedelbart upptäcka dold besparingspotential i värme och ventilation: 5 % på uppvärmningskostnaderna för varje sänkt grad.",
        },
        {
          title: "Faktabaserad behovsanalys",
          body: "Få ett gediget underlag för att avgöra om ytor ska omfördelas eller om städintervall ska baseras på faktisk användning i stället för stela scheman.",
        },
        {
          title: "Inget IT-krångel",
          body: "Fungerar 100 % trådlöst via ett slutet, säkert nät, helt oberoende av din lokala IT och med upp till 10 års batteritid.",
        },
      ],
    },
    humidity: {
      heroTitleAccent: "Diskret skydd för tillgångar och inomhusklimat, med extremt lång batteritid.",
      heroLead:
        "Humidity-sensorn är den idealiska lösningen för alla som behöver exakta temperatur- och fuktdata i ett diskret, kompakt format. Den levererar exakta värden till RoomAlyzer-plattformen för att skydda oersättliga kulturvärden, uppfylla strängt bevarande eller optimera kontorsmiljöer.",
      useCases: "Museer & kyrkor · Arkiv · Kulturhistoriska byggnader",
      benefits: [
        {
          title: "Högsta diskretion",
          body: "Tack vare en extremt kompakt design och en vikt under 10 gram smälter tekniken sömlöst in i kontor, kyrkor, museer eller montrar.",
        },
        {
          title: "Extrem ekonomisk effektivitet",
          body: "En batteritid på upp till 15 år garanterar stabil tillståndsövervakning som är praktiskt taget underhållsfri med mycket låga driftskostnader.",
        },
        {
          title: "Flexibel och exakt",
          body: "Avancerad sensorteknik levererar maximal precision med marknadsledande långtidsstabilitet, vilket gör kalibrering under drift helt onödig.",
        },
        {
          title: "Säker anslutning",
          body: "Data överförs säkert via Cloud Connector genom ett slutet nät, oberoende av ditt lokala Wi-Fi och med förmåga att tränga igenom tjocka väggar.",
        },
      ],
    },
    co2: {
      heroTitleAccent: "Exakta data om luftkvalitet, med maximal batteritid.",
      heroLead:
        "CO2-sensorn är den professionella lösningen för att övervaka luftkvaliteten i miljöer där välbefinnande, hälsa och koncentration är avgörande. Tillsammans med RoomAlyzer-plattformen ger den ett gediget, faktabaserat underlag för att optimera ventilation och hela ditt inomhusklimat.",
      useCases: "Klassrum · Mötesrum · Öppna kontorslandskap",
      benefits: [
        {
          title: "Faktabaserad dokumentation",
          body: "Konkret dokumentation av CO2-nivåer gör att du professionellt kan hantera användarfrågor och objektifiera byggnadsdiskussioner med tillförlitliga data.",
        },
        {
          title: "Ökad prestation",
          body: "Aktiv CO2-hantering minskar trötthet och huvudvärk i klassrum eller kontor, en direkt investering i lägre sjukfrånvaro och bättre koncentration.",
        },
        {
          title: "Enkel energioptimering",
          body: "Reglera ventilationen utifrån realtidsdata i stället för stela, fasta scheman och sänk el- och värmeförbrukningen utan att förlora komfort.",
        },
        {
          title: "Sömlös integration",
          body: "Överför data säkert via Cloud Connector, helt oberoende av ditt lokala Wi-Fi eller IT-nät och med minimal administration.",
        },
      ],
    },
    temperature: {
      heroTitleAccent: "Säker och exakt temperaturövervakning i världens minsta format.",
      heroLead:
        "Temperature-sensorn erbjuder exakt övervakning av kritiska miljöer där minsta avvikelse får stora konsekvenser. Utformad för smidig validering säkerställer den korrekt förvaring av läkemedel och livsmedel samt stabil drift av tekniska installationer och laboratorier.",
      useCases: "Apotek & läkemedelsförvaring · Livsmedelsförvaring · Laboratorier & serverrum",
      benefits: [
        {
          title: "Inget IT-krångel",
          body: "Överför data säkert med SecureDataShot-teknik via en Cloud Connector och förblir helt oberoende av ditt lokala Wi-Fi eller IT-nät.",
        },
        {
          title: "Maximal autonomi",
          body: "Få en exceptionell batteritid på upp till 15 år, vilket eliminerar löpande underhåll och servicebesök även på svåråtkomliga platser.",
        },
        {
          title: "Omedelbar reaktion",
          body: "Få automatiska e-post- och SMS-aviseringar i det ögonblick temperaturgränser överskrids, så att ditt team kan agera innan värdefullt lager förstörs.",
        },
        {
          title: "Snabb, flexibel installation",
          body: "Den ultrakompakta sensorn på 3 gram har kraftfull peel-and-stick-tejp och är klar att använda på några sekunder utan kablar.",
        },
      ],
    },
    outdoor: {
      heroTitleAccent: "Den professionella lösningen för exakt övervakning av ditt utomhusklimat.",
      heroLead:
        "Outdoor-sensorn är en väsentlig del av modern fastighetsdrift. Genom att exakt registrera utomhustemperatur och luftfuktighet skapar den den referens som behövs för att förstå hur utomhusklimatet påverkar din byggnadsstomme.",
      useCases: "Inne/ute-jämförelse · Värmeoptimering · Mögelförebyggande",
      benefits: [
        {
          title: "Exakt energioptimering",
          body: "Kännedom om den exakta utomhustemperaturen vid din fastighet möjliggör behovsstyrd finjustering av värmesystemet och eliminerar onödig energiförbrukning.",
        },
        {
          title: "Intelligent mögelförebyggande",
          body: "Styr ventilationssystem proaktivt genom att följa utomhusfuktigheten och minimera risken att dra in fuktig luft innan den hotar byggnadsstommen.",
        },
        {
          title: "Extrem väderbeständighet",
          body: "Byggd för tuffa miljöer är sensorn 100 % vattentät (IP67-certifierad) och har en robust, tvådelad design med extern givare.",
        },
        {
          title: "Maximal tillförlitlighet",
          body: "Överför data säkert via det slutna nätet med upp till 8 års batteritid och säkerställer stabil drift oberoende av lokala IT-nät.",
        },
      ],
    },
    desk: {
      heroTitleAccent: "Datadriven ytstyrning för den moderna arbetsplatsen.",
      heroLead:
        "Desk-sensorn levererar exakta utnyttjandedata för effektiv, behovsanpassad optimering av dina kontorsytor utan gissningar. Genom att kombinera mätning av omgivningstemperatur med intelligenta algoritmer för närvarodetektering följer den konsekvent principen Privacy by Design och avgör endast om en arbetsplats är upptagen eller ledig.",
      useCases: "Flexibla kontor · Aktivitetsbaserade arbetsplatser · Hot-desking",
      benefits: [
        {
          title: "Behovsanpassad ytoptimering",
          body: "Få en objektiv överblick över den faktiska användningen av dina zoner för att identifiera flaskhalsar och outnyttjad potential och därmed sänka hyres- och energikostnader långsiktigt.",
        },
        {
          title: "Bättre välbefinnande på arbetsplatsen",
          body: "Använd realtidsdata och färgkodade heatmaps för att leda medarbetare direkt till lediga skrivbord och minska söktiden i vardagen.",
        },
        {
          title: "Faktabaserat beslutsfattande",
          body: "Skapa ett transparent underlag för beslutsfattare, så att resurser kan fördelas rättvist mellan avdelningar utifrån verkliga behov.",
        },
        {
          title: "Diskret och hållbar",
          body: "Få en ultrakompakt design monterad med kraftfull peel-and-stick-tejp och ett integrerat batteri med upp till 9 års livslängd för verkligt underhållsfri drift.",
        },
      ],
    },
    touch: {
      heroTitleAccent: "Enkel feedback och snabb service, precis där behovet uppstår.",
      heroLead:
        "Touch-sensorn är den idealiska lösningen för alla som vill styra sin verksamhet utifrån behov. Genom att ge dina användare och gäster möjlighet att meddela dig direkt med ett enkelt knapptryck kan du reagera omedelbart när en anläggning behöver uppmärksamhet, om en kaffemaskin är trasig eller ett toalettutrymme behöver service.",
      useCases: "Toaletter · Matsalar · Reception & mötesrum",
      benefits: [
        {
          title: "Behovsstyrd facility management",
          body: "Optimera dina resurser genom att endast skicka ut personal när det finns ett verkligt behov och minska onödig tidsåtgång.",
        },
        {
          title: "Högre kundnöjdhet",
          body: "Samla in giltig feedback i realtid från mötesrum, matsalar eller receptioner och åtgärda problem direkt innan de leder till klagomål.",
        },
        {
          title: "Installation på sekunder",
          body: "Placera sensorn flexibelt vid relevanta servicepunkter med praktisk peel-and-stick-montering och en batteritid på upp till 15 år.",
        },
        {
          title: "Inget IT-krångel",
          body: "Dataöverföringen är krypterad och hanteras säkert via Cloud Connector, helt oberoende av din lokala IT-miljö.",
        },
      ],
    },
    "open-close": {
      heroTitleAccent: "Full transparens över dina ytresurser i realtid, från skåp till fönster.",
      heroLead:
        "Open/Close-sensorn levererar exakta fakta i stället för gissningar om status och användning av din infrastruktur. Oavsett om du hanterar skåp, optimerar logistik för arbetskläder eller säkerställer egendomsskydd genom att kontrollera stängda fönster, sensorn förvandlar varje händelse till värdefulla insikter.",
      useCases: "Skåphantering · Logistik för arbetskläder · Fönster- & dörrkontroll",
      benefits: [
        {
          title: "Intelligent skåphantering",
          body: "Få en exakt överblick över den faktiska beläggningen för att effektivt tilldela ledig kapacitet till nya medarbetare, idealiskt stöd för moderna koncept som delade skrivbord.",
        },
        {
          title: "Effektiv hantering och service",
          body: "Systemet visar exakt vilka skåp som har använts och möjliggör behovsanpassad påfyllning av arbetskläder eller riktade inspektionsintervall.",
        },
        {
          title: "Egendomsskydd och energioptimering",
          body: "Kontrollera med ett enda klick efter arbetstid om fönster eller dörrar är stängda, det skyddar byggnaden och undviker onödig energiförbrukning.",
        },
        {
          title: "Fullt dataskydd",
          body: "Lösningen behandlar uteslutande tekniska mätdata utan personuppgifter och minimerar den administrativa bördan kring GDPR.",
        },
      ],
    },
    motion: {
      heroTitleAccent: "Trådlös registrering av ytutnyttjande med 360° panoramavy.",
      heroLead:
        "Motion-sensorn ger den exakta grunden för professionell ytstyrning och strategisk optimering av din byggnadsanvändning. Med hjälp av passiv infraröd (PIR) teknik för att upptäcka termisk rörelse registrerar systemet endast rumsbeläggning för att kartlägga hur dina kvadratmeter används.",
      useCases: "Ytplanering · Städoptimering · Facility management",
      benefits: [
        {
          title: "Strategisk ytstyrning",
          body: "Få full transparens över när dina rum faktiskt används och skapa ett faktabaserat underlag för facility management och långsiktig ytplanering.",
        },
        {
          title: "Behovsanpassad facility management",
          body: "Optimera resursfördelningen genom att planera service- och städrundor efter de områden som faktiskt har använts – utifrån exakta, automatiska heatmaps.",
        },
        {
          title: "Minimalt underhåll och lång livslängd",
          body: "Med en batteritid på upp till 15 år vid normal drift är sensorn utformad för att köra nästan underhållsfritt under hela sin livscykel.",
        },
        {
          title: "Enkel plug-and-play-installation",
          body: "Aktivera sensorn genom att ta bort batteriremsan för att starta krypterad dataöverföring via Cloud Connector, ditt interna IT-nät påverkas inte.",
        },
      ],
    },
    "water-detector": {
      heroTitleAccent: "Tillförlitlig övervakning av oönskat vatten, även på svåråtkomliga platser.",
      heroLead:
        "Water detector är det ultimata skyddet mot kostsamma vattenskador i hela din byggnadsportfölj. Speciellt utvecklad för professionell drift finns sensorn både som en robust, helt vattentät variant (Water Detector Pro IP67) och en diskret inomhusvariant (Water Detector Compact IP30).",
      useCases: "Serverrum · Källare & schakt · Bostadsbolag",
      benefits: [
        {
          title: "Skydd av kritisk infrastruktur",
          body: "Få omedelbara aviseringar via e-post eller SMS när ledande vätskor upptäcks, så att du kan fånga upp läckor innan de når serverrum eller elektriska installationer.",
        },
        {
          title: "Säkerhet i källare och schakt",
          body: "Placera sensorn under handfat, vid värmesystem eller i djupa schakt för kontinuerlig tillståndsövervakning som skyddar byggnadsstommen mot fukt och mögel.",
        },
        {
          title: "Installation utan gränser",
          body: "Tack vare standardkabeln på 3 meter placeras mätytan exakt vid vätskans uppsamlingspunkt, medan sensorhöljet stannar där signalstyrkan är som bäst.",
        },
        {
          title: "Snabb utrullning utan IT-godkännande",
          body: "Sensorn körs på det rikstäckande NB-IoT-mobilnätet och är helt oberoende av ditt lokala Wi-Fi, så du slipper omständliga IT-godkännanden.",
        },
      ],
    },
    "water-rope": {
      heroTitleAccent: "Omfattande skydd i stället för enskilda datapunkter med kontinuerlig zonregistrering.",
      heroLead:
        "Water rope-sensorn ger ett avancerat skyddsnät genom att övervaka en kontinuerlig sträcka i stället för en enda punkt. Utlöst av så lite som 50 mm kontakt var som helst längs den flexibla 3-meterskabeln levererar den den realtidstäckning som krävs för att skydda högriskinfrastruktur som arkiv, laboratorier och serverrum.",
      useCases: "Arkiv & laboratorier · Rörledningar & upphöjda golv · Bostadsbolag",
      benefits: [
        {
          title: "Kontinuerligt zonskydd",
          body: "Dra sensorkabeln jämnt längs hela rörledningar, under upphöjda golv eller direkt runt kritiska serverrack för att skapa en sammanhängande skyddszon.",
        },
        {
          title: "Omedelbar avisering & snabb auto-reset",
          body: "Få omedelbara säkerhetslarm via e-post eller SMS när sensorn upptäcker vätska.",
        },
        {
          title: "Insats i krävande miljöer",
          body: "Driven av fristående NB-IoT-teknik tränger mobilsignalen enkelt genom djupa källare, tungt murverk och tekniska schakt utan lokalt Wi-Fi.",
        },
        {
          title: "Flexibel installation utan gränser",
          body: "Placera huvudenheten där den trådlösa signalen är som allra bäst och dra den utbyggbara kabeln (upp till 50 m) precis där risker uppstår.",
        },
      ],
    },
    "cloud-connector": {
      heroTitleAccent: "Den säkra bron mellan dina sensorer och molnet.",
      heroLead:
        "Cloud Connector är den centrala gateway som ger dina sensorer säker nätverksåtkomst, så att du får exakta data för din fastighetsdrift. Medan våra NB-IoT-sensorer fungerar helt självständigt fungerar Cloud Connector som en nödvändig och säker brygga för alla sensorer med SecureDataShot-teknik.",
      useCases: "Krävs för SecureDataShot-sensorer · Platser med många sensorer · API-integrationer",
      benefits: [
        {
          title: "Maximal säkerhet",
          body: "Överför data via ett slutet nät oberoende av din lokala IT-miljö och säkerställer full NIS2-efterlevnad och robust dataskydd.",
        },
        {
          title: "Enkel skalbarhet",
          body: "Få en smidig plug-and-play-installation utan konfiguration; den stora trådlösa räckvidden täcker effektivt stora ytor och många sensorer samtidigt.",
        },
        {
          title: "Framtidssäker integration",
          body: "Öppet REST-API och webhooks säkerställer att anslutningsekosystemet kommunicerar sömlöst med dina övriga plattformar och programvarusystem.",
        },
        {
          title: "Inget Wi-Fi-beroende",
          body: "Med ett internt SIM-kort fungerar den helt oberoende av byggnadens Wi-Fi och garanterar maximal stabilitet och hårdvaruisolering.",
        },
      ],
    },
  },
};
