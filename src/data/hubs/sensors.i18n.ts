import type { Lang } from "../lang";

/**
 * Per-locale translations of the sensors hub marketing copy. English
 * (`sensors.ts`) is canonical; fields here override it and anything omitted
 * falls back to English.
 *
 * Leaf `title` is a product name and normally omitted (names are not
 * translated; the German "Wasserdetektor" exception is handled by
 * `localizedSensorName`). Provide `title` only for non-product leaves such as
 * "compare". `titleAccent` and `lead` are marketing copy and should translate.
 */
export type SensorLeafOverlay = {
  title?: string;
  titleAccent?: string;
  lead?: string;
  seoTitle?: string;
  metaDescription?: string;
};

export type SensorHubOverlay = {
  title?: string;
  titleAccent?: string;
  eyebrow?: string;
  lead?: string;
  leaves?: Record<string, SensorLeafOverlay>;
};

export const sensorsHubI18n: Partial<Record<Lang, SensorHubOverlay>> = {
  de: {
    title: "Der komplette Sensorkatalog.",
    titleAccent: "Wählen Sie das richtige Werkzeug für den Raum.",
    eyebrow: "Sensoren",
    lead: "Jeder RoomAlyzer-Sensor ist kabellos, batteriebetrieben und Plug-and-Play. Vergleichen Sie die Modelle und finden Sie das passende für Ihren Anwendungsfall.",
    leaves: {
      co2: {
        titleAccent: "Der eine Parameter, den man nicht riechen kann.",
        lead: "Überwachen Sie CO₂, Temperatur und Luftfeuchtigkeit in Klassenzimmern, Besprechungsräumen und anderen stark frequentierten Räumen.",
      },
      "full-plus": {
        titleAccent: "Alles über Ihr Indoor climate.",
        lead: "CO₂, Temperatur, Luftfeuchtigkeit, VOC und mehr in einer einzigen, diskreten Einheit, das Arbeitstier der meisten Indoor climate-Rollouts.",
      },
      humidity: {
        titleAccent: "Schutz vor Feuchtigkeit und Schimmel.",
        lead: "Messen Sie Temperatur und Luftfeuchtigkeit diskret, ideal für Kriechkeller, Keller und Außenwände.",
      },
      "mini-plus": {
        titleAccent: "Kleiner Footprint, präzise Klimadaten.",
        lead: "Einfache Installation und präzise Klimawerte dort, wo Größe und Ästhetik zählen.",
        seoTitle: "RoomAlyzer Air Mini+ | NB-IoT Temperatur- & Humidity",
        metaDescription:
          "RoomAlyzer Air Mini+ Funk-Sensor: NB-IoT Temperatur- und Feuchtigkeitsüberwachung, bis zu 10 Jahre Batterie, ±0,1 °C Präzision. Ohne Wi-Fi oder Gateway.",
      },
      "mini-plus-pir": {
        titleAccent: "Klima und Präsenz in einem.",
        lead: "Kompakte Klimaüberwachung mit Belegungserkennung, perfekt für Besprechungsräume und flexible Arbeitsplätze.",
      },
      outdoor: {
        titleAccent: "Die Basis für jede Berechnung.",
        lead: "Eine Außenreferenzeinheit, damit die Plattform Innentrends vom Wetter draußen unterscheiden kann.",
      },
      temperature: {
        titleAccent: "Überall dort, wo Grad entscheiden.",
        lead: "Zuverlässige Temperaturüberwachung für Kühlschränke, Gefriergeräte, Lager und Technikräume.",
      },
      desk: {
        titleAccent: "Sehen Sie, welche Schreibtische wirklich genutzt werden.",
        lead: "Flächenmanagement einfach gemacht: Sensorik unter dem Schreibtisch für Hot-Desking und Bürolayout-Entscheidungen.",
      },
      motion: {
        titleAccent: "Präsenz ohne Identität.",
        lead: "Erfassen Sie die Raumnutzung in Echtzeit, ohne Kameras, WLAN-Sniffing oder andere identifizierende Technik.",
      },
      "open-close": {
        titleAccent: "Türen, Fenster, Schränke, Schließfächer.",
        lead: "Ein magnetischer Kontaktsensor für alles, was sich öffnet und schließt, mit langer Batterielaufzeit und sofortigen Alarmen.",
      },
      touch: {
        titleAccent: "Ein Tipp, direkt ans Team.",
        lead: "Lösen Sie Aktionen mit einem einzigen Klick aus: Reinigungsanfragen, Feedback, Serviceanrufe und mehr.",
      },
      "water-detector": {
        titleAccent: "Die günstigste Versicherung in Ihrem Gebäude.",
        lead: "Verhindern Sie Wasserschäden mit Daten: Alarme innerhalb von Sekunden, sobald Wasser erkannt wird.",
      },
      "water-rope": {
        titleAccent: "Linienabdeckung dort, wo ein Water detector nicht hinreicht.",
        lead: "Ein Sensorkabel für lange Strecken entlang von Rohren, Sockelleisten und Technikraumböden.",
      },
      "cloud-connector": {
        titleAccent: "Bringen Sie die Daten nach Hause.",
        lead: "Verbindet kabellose Sensoren über eine sichere Mobilfunkverbindung mit der RoomAlyzer-Plattform.",
      },
      "range-extender-and-bracket": {
        titleAccent: "Erreichen Sie die Ecken des Gebäudes.",
        lead: "Erweitern Sie die Funkabdeckung und montieren Sie Sensoren sicher dort, wo die Platzierung zählt.",
      },
      compare: {
        title: "Sensoren vergleichen.",
        titleAccent: "Nebeneinander.",
        lead: "Ein direkter Vergleich aller Sensoren im Katalog, damit Sie den richtigen für Ihre Räume finden.",
      },
    },
  },
  da: {
    title: "Det komplette sensorkatalog.",
    titleAccent: "Vælg det rigtige værktøj til rummet.",
    eyebrow: "Sensorer",
    lead: "Hver RoomAlyzer-sensor er trådløs, batteridrevet og plug-and-play. Sammenlign modellerne og find den, der passer til dit behov.",
    leaves: {
      co2: {
        titleAccent: "Den ene parameter, du ikke kan lugte.",
        lead: "Overvåg CO₂, temperatur og luftfugtighed i klasselokaler, mødelokaler og andre rum med mange mennesker.",
      },
      "full-plus": {
        titleAccent: "Alt om dit indeklima.",
        lead: "CO₂, temperatur, luftfugtighed, VOC og mere i én enkelt, diskret enhed, arbejdshesten i de fleste indeklima-udrulninger.",
      },
      humidity: {
        titleAccent: "Beskyt mod fugt og skimmel.",
        lead: "Mål temperatur og luftfugtighed diskret, ideel til krybekældre, kældre og ydervægge.",
      },
      "mini-plus": {
        titleAccent: "Lille fodaftryk, præcise klimadata.",
        lead: "Nem installation og præcise klimaaflæsninger, hvor størrelse og æstetik betyder noget.",
        seoTitle: "RoomAlyzer Air Mini+ | NB-IoT temperatur- og fugtsensor",
        metaDescription:
          "RoomAlyzer Air Mini+ trådløs sensor: NB-IoT temperatur- og fugtovervågning, op til 10 års batteri, ±0,1 °C præcision. Uden Wi-Fi eller gateway.",
      },
      "mini-plus-pir": {
        titleAccent: "Klima og tilstedeværelse i én.",
        lead: "Kompakt klimaovervågning med tilstedeværelsesregistrering, perfekt til mødelokaler og fleksible arbejdspladser.",
      },
      outdoor: {
        titleAccent: "Grundlaget for enhver beregning.",
        lead: "En udendørs referenceenhed, så platformen kan adskille indendørs tendenser fra vejret udenfor.",
      },
      temperature: {
        titleAccent: "Overalt hvor grader betyder noget.",
        lead: "Pålidelig temperaturovervågning til køleskabe, frysere, lagre og tekniske rum.",
      },
      desk: {
        titleAccent: "Se, hvilke skriveborde der reelt bruges.",
        lead: "Arealstyring gjort enkel, sensorer under skrivebordet til hot-desking og beslutninger om kontorindretning.",
      },
      motion: {
        titleAccent: "Tilstedeværelse uden identitet.",
        lead: "Følg rumforbruget i realtid, uden kameraer, Wi-Fi-sniffing eller anden identificerende teknologi.",
      },
      "open-close": {
        titleAccent: "Døre, vinduer, skabe, skabsrum.",
        lead: "En magnetisk kontaktsensor til alt, der åbner og lukker, med lang batterilevetid og øjeblikkelige alarmer.",
      },
      touch: {
        titleAccent: "Et tryk, direkte til teamet.",
        lead: "Udløs handlinger med et enkelt klik, rengøringsanmodninger, feedback, serviceopkald og mere.",
      },
      "water-detector": {
        titleAccent: "Den billigste forsikring i din bygning.",
        lead: "Forebyg vandskader med data, alarmer inden for sekunder, når der registreres vand.",
      },
      "water-rope": {
        titleAccent: "Linjedækning, hvor en punktsensor ikke kan nå.",
        lead: "Et følekabel til lange strækninger langs rør, fodlister og gulve i teknikrum.",
      },
      "cloud-connector": {
        titleAccent: "Bring dataene hjem.",
        lead: "Forbinder trådløse sensorer til RoomAlyzer-platformen via et sikkert mobilt uplink.",
      },
      "range-extender-and-bracket": {
        titleAccent: "Nå bygningens hjørner.",
        lead: "Udvid den trådløse dækning og montér sensorer sikkert, hvor placeringen betyder noget.",
      },
      compare: {
        title: "Sammenlign sensorer.",
        titleAccent: "Side om side.",
        lead: "En sammenligning side om side af alle sensorer i kataloget, så du kan vælge den rigtige til dine rum.",
      },
    },
  },
  sv: {
    title: "Den kompletta sensorkatalogen.",
    titleAccent: "Välj rätt verktyg för rummet.",
    eyebrow: "Sensorer",
    lead: "Varje RoomAlyzer-sensor är trådlös, batteridriven och plug-and-play. Jämför modellerna och hitta den som passar ditt användningsfall.",
    leaves: {
      co2: {
        titleAccent: "Den enda parameter du inte kan känna lukten av.",
        lead: "Övervaka CO₂, temperatur och luftfuktighet i klassrum, mötesrum och andra rum med många personer.",
      },
      "full-plus": {
        titleAccent: "Allt om ditt inomhusklimat.",
        lead: "CO₂, temperatur, luftfuktighet, VOC och mer i en enda, diskret enhet, arbetshästen i de flesta inomhusklimat-utrullningar.",
      },
      humidity: {
        titleAccent: "Skydda mot fukt och mögel.",
        lead: "Mät temperatur och luftfuktighet diskret, idealisk för kryputrymmen, källare och ytterväggar.",
      },
      "mini-plus": {
        titleAccent: "Litet fotavtryck, exakta klimatdata.",
        lead: "Enkel installation och exakta klimatavläsningar där storlek och estetik spelar roll.",
        seoTitle: "RoomAlyzer Air Mini+ | NB-IoT temperatur- och fuktsensor",
        metaDescription:
          "RoomAlyzer Air Mini+ trådlös sensor: NB-IoT temperatur- och fuktövervakning, upp till 10 års batteri, ±0,1 °C precision. Utan Wi-Fi eller gateway.",
      },
      "mini-plus-pir": {
        titleAccent: "Klimat och närvaro i ett.",
        lead: "Kompakt klimatövervakning med närvarodetektering, perfekt för mötesrum och flexibla arbetsplatser.",
      },
      outdoor: {
        titleAccent: "Grunden för varje beräkning.",
        lead: "En utomhusreferensenhet så att plattformen kan skilja inomhustrender från vädret utanför.",
      },
      temperature: {
        titleAccent: "Överallt där grader spelar roll.",
        lead: "Tillförlitlig temperaturövervakning för kylskåp, frysar, lager och tekniska rum.",
      },
      desk: {
        titleAccent: "Se vilka skrivbord som faktiskt används.",
        lead: "Ytstyrning gjord enkel, sensorer under skrivbordet för hot-desking och beslut om kontorslayout.",
      },
      motion: {
        titleAccent: "Närvaro utan identitet.",
        lead: "Följ rumsanvändningen i realtid, utan kameror, Wi-Fi-sniffning eller annan identifierande teknik.",
      },
      "open-close": {
        titleAccent: "Dörrar, fönster, skåp, förvaringsskåp.",
        lead: "En magnetisk kontaktsensor för allt som öppnas och stängs, med lång batteritid och omedelbara larm.",
      },
      touch: {
        titleAccent: "Ett tryck, direkt till teamet.",
        lead: "Utlös åtgärder med ett enda klick, städförfrågningar, feedback, serviceanrop och mer.",
      },
      "water-detector": {
        titleAccent: "Den billigaste försäkringen i din byggnad.",
        lead: "Förebygg vattenskador med data, larm inom sekunder när vatten upptäcks.",
      },
      "water-rope": {
        titleAccent: "Linjetäckning där en punktsensor inte når.",
        lead: "En sensorkabel för långa sträckor längs rör, golvlister och golv i teknikrum.",
      },
      "cloud-connector": {
        titleAccent: "Hämta hem datan.",
        lead: "Ansluter trådlösa sensorer till RoomAlyzer-plattformen via en säker mobil uppkoppling.",
      },
      "range-extender-and-bracket": {
        titleAccent: "Nå byggnadens hörn.",
        lead: "Utöka den trådlösa täckningen och montera sensorer säkert där placeringen spelar roll.",
      },
      compare: {
        title: "Jämför sensorer.",
        titleAccent: "Sida vid sida.",
        lead: "En jämförelse sida vid sida av alla sensorer i katalogen så att du kan välja rätt för dina rum.",
      },
    },
  },
};
