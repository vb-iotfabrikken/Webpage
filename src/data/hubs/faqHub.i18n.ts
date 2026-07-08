import type { Lang } from "../lang";

export interface FaqLeafOverlay {
  title?: string;
  titleAccent?: string;
  lead?: string;
}

export interface FaqHubOverlay {
  title?: string;
  titleAccent?: string;
  eyebrow?: string;
  lead?: string;
  leaves?: Record<string, FaqLeafOverlay>;
}

export const faqHubI18n: Partial<Record<Lang, FaqHubOverlay>> = {
  da: {
    title: "Ofte stillede spørgsmål.",
    titleAccent: "Klare svar uden marketingtåge.",
    eyebrow: "FAQ",
    lead: "Gennemse efter emne, eller brug søgningen. Hvert svar er kort, konkret og linket til den relevante del af produktet.",
    leaves: {
      platform: {
        title: "Platform-FAQ.",
        titleAccent: "Sådan fungerer RoomAlyzer.",
        lead: "Arkitektur, dashboards, opdateringer, oppetid og det, folk spørger om, før de tilmelder sig.",
      },
      "indoor-climate": {
        title: "Indeklima FAQ.",
        titleAccent: "CO₂, fugt, VOC og resten.",
        lead: "Hvad vi måler, hvorfor det betyder noget, og hvordan alarmerne konfigureres.",
      },
      preservation: {
        title: "Bevaring FAQ.",
        titleAccent: "Til samlinger og kulturarv.",
        lead: "Standarder, målefrekvens, sensorplacering og rapportering til museer, arkiver og kirker.",
      },
      "space-management": {
        title: "Space-management-FAQ.",
        titleAccent: "Udnyttelse, privatliv, nøjagtighed.",
        lead: "Hvad vi tæller, hvad vi ikke gør, og hvordan dataene overholder GDPR og overenskomster.",
      },
      "water-detection": {
        title: "Vanddetektion FAQ.",
        titleAccent: "Hvor hurtigt, hvor højt, hvor pålideligt.",
        lead: "Alarmforsinkelse, falsk-positiv-rate, batterilevetid og hvordan alarmer sendes videre fra platformen.",
      },
      "push-buttons": {
        title: "Trykknapper FAQ.",
        titleAccent: "Hændelser, routing, udrulning.",
        lead: "Konfiguration af hændelser, mærkning af knapper og integration med ticketing- og rengøringssystemer.",
      },
      sensors: {
        title: "Sensorer FAQ.",
        titleAccent: "Hardwarespørgsmål, besvaret.",
        lead: "Nøjagtighed, kalibrering, batterilevetid, placering og compliance, de spørgsmål, vi får mest.",
      },
      integrations: {
        title: "Integrationer FAQ.",
        titleAccent: "Kobling til resten af jeres stack.",
        lead: "Formater, autentificering, rate limits og de mønstre, vi ser til integration med BMS, BI og FM-værktøjer.",
      },
      pricing: {
        title: "Priser FAQ.",
        titleAccent: "Hvad I betaler for, og hvad I ikke gør.",
        lead: "Licensmodel, kontraktvilkår, opsigelse og den typiske faktureringsopsætning for offentlige kunder.",
      },
      "security-privacy": {
        title: "Sikkerhed og privatliv FAQ.",
        titleAccent: "Compliance gjort kedeligt.",
        lead: "GDPR, datalokation, SSO, penetrationstest og de underdatabehandlere, der er involveret.",
      },
      installation: {
        title: "Installation FAQ.",
        titleAccent: "Fra kasse til data.",
        lead: "Hvad der kommer i kassen, hvor lang tid installationen tager, og hvad kunden selv skal gøre.",
      },
      support: {
        title: "Support FAQ.",
        titleAccent: "Hvor du går hen, når du har brug for hjælp.",
        lead: "Supporttider, serviceaftaler, hjælpecenteret og hvordan eskaleringer fungerer.",
      },
    },
  },
  de: {
    title: "Häufig gestellte Fragen.",
    titleAccent: "Klare Antworten, kein Marketingnebel.",
    eyebrow: "FAQ",
    lead: "Nach Thema stöbern, oder die Suche nutzen. Jede Antwort ist kurz, konkret und mit dem passenden Produktbereich verknüpft.",
    leaves: {
      platform: {
        title: "Plattform-FAQ.",
        titleAccent: "So funktioniert RoomAlyzer.",
        lead: "Architektur, Dashboards, Updates, Verfügbarkeit und das, was Kunden vor der Anmeldung fragen.",
      },
      "indoor-climate": {
        title: "Raumklima-FAQ.",
        titleAccent: "CO₂, Feuchte, VOC und mehr.",
        lead: "Was wir messen, warum es zählt und wie Alarme konfiguriert werden.",
      },
      preservation: {
        title: "Erhaltung-FAQ.",
        titleAccent: "Für Sammlungen und Kulturerbe.",
        lead: "Normen, Messfrequenz, Sensorplatzierung und Berichte für Museen, Archive und Kirchen.",
      },
      "space-management": {
        title: "Space-Management-FAQ.",
        titleAccent: "Auslastung, Datenschutz, Genauigkeit.",
        lead: "Was wir zählen, was nicht und wie die Daten GDPR und Betriebsvereinbarungen respektieren.",
      },
      "water-detection": {
        title: "Water detection-FAQ.",
        titleAccent: "Wie schnell, wie laut, wie zuverlässig.",
        lead: "Alarmlatenz, Falschalarmrate, Batterielaufzeit und wie Alarme aus der Plattform weitergeleitet werden.",
      },
      "push-buttons": {
        title: "Taster-FAQ.",
        titleAccent: "Ereignisse, Routing, Rollout.",
        lead: "Ereignisse konfigurieren, Taster beschriften und Ausgaben mit Ticketing- und Reinigungssystemen verbinden.",
      },
      sensors: {
        title: "Sensoren-FAQ.",
        titleAccent: "Hardwarefragen, beantwortet.",
        lead: "Genauigkeit, Kalibrierung, Batterielaufzeit, Platzierung und Compliance, die häufigsten Fragen.",
      },
      integrations: {
        title: "Integrationen-FAQ.",
        titleAccent: "Anbindung an Ihren Stack.",
        lead: "Formate, Authentifizierung, Rate Limits und typische Muster für BMS-, BI- und FM-Anbindungen.",
      },
      pricing: {
        title: "Preise-FAQ.",
        titleAccent: "Wofür Sie zahlen und wofür nicht.",
        lead: "Lizenzmodell, Vertragslaufzeiten, Kündigung und typische Rechnungsstellung für den öffentlichen Sektor.",
      },
      "security-privacy": {
        title: "Sicherheit und Datenschutz-FAQ.",
        titleAccent: "Compliance, langweilig gemacht.",
        lead: "GDPR, Datenresidenz, SSO, Penetrationstests und beteiligte Unterauftragsverarbeiter.",
      },
      installation: {
        title: "Installation-FAQ.",
        titleAccent: "Von der Box zu den Daten.",
        lead: "Lieferumfang, Installationsdauer und was der Kunde selbst erledigen muss.",
      },
      support: {
        title: "Support-FAQ.",
        titleAccent: "Wohin, wenn Sie Hilfe brauchen.",
        lead: "Supportzeiten, Service-Level-Agreements, Hilfecenter und Eskalationswege.",
      },
    },
  },
  sv: {
    title: "Vanliga frågor.",
    titleAccent: "Raka svar utan marknadsfog.",
    eyebrow: "FAQ",
    lead: "Bläddra efter ämne, eller använd sökningen. Varje svar är kort, konkret och länkat till rätt del av produkten.",
    leaves: {
      platform: {
        title: "Plattforms-FAQ.",
        titleAccent: "Så fungerar RoomAlyzer.",
        lead: "Arkitektur, dashboards, uppdateringar, drifttid och det folk frågar om innan de registrerar sig.",
      },
      "indoor-climate": {
        title: "Inomhusklimat-FAQ.",
        titleAccent: "CO₂, fukt, VOC och resten.",
        lead: "Vad vi mäter, varför det spelar roll och hur larmen konfigureras.",
      },
      preservation: {
        title: "Bevarande-FAQ.",
        titleAccent: "För samlingar och kulturarv.",
        lead: "Standarder, mätfrekvens, sensorplacering och rapportering för museer, arkiv och kyrkor.",
      },
      "space-management": {
        title: "Space management-FAQ.",
        titleAccent: "Utnyttjande, integritet, noggrannhet.",
        lead: "Vad vi räknar, vad vi inte gör, och hur data följer GDPR och fackliga avtal.",
      },
      "water-detection": {
        title: "Vattendetektering-FAQ.",
        titleAccent: "Hur snabbt, hur högt, hur tillförlitligt.",
        lead: "Alarmlatens, falsklarm, batteritid och hur larm skickas vidare från plattformen.",
      },
      "push-buttons": {
        title: "Tryckknappar-FAQ.",
        titleAccent: "Händelser, routing, utrullning.",
        lead: "Konfigurera händelser, märka knappar och koppla utdata till ticketing- och städsystem.",
      },
      sensors: {
        title: "Sensorer-FAQ.",
        titleAccent: "Hårdvarufrågor, besvarade.",
        lead: "Noggrannhet, kalibrering, batteritid, placering och compliance, de frågor vi får oftast.",
      },
      integrations: {
        title: "Integrationer-FAQ.",
        titleAccent: "Koppling till resten av er stack.",
        lead: "Format, autentisering, rate limits och mönster vi ser för integration med BMS, BI och FM-verktyg.",
      },
      pricing: {
        title: "Priser-FAQ.",
        titleAccent: "Vad ni betalar för, och vad ni inte gör.",
        lead: "Licensmodell, avtalsvillkor, uppsägning och typisk fakturering för offentliga kunder.",
      },
      "security-privacy": {
        title: "Säkerhet och integritet-FAQ.",
        titleAccent: "Compliance gjort tråkigt.",
        lead: "GDPR, datalagring, SSO, penetrationstester och underbiträden som är inblandade.",
      },
      installation: {
        title: "Installation-FAQ.",
        titleAccent: "Från låda till data.",
        lead: "Vad som kommer i lådan, hur lång installationen tar och vad kunden själv måste göra.",
      },
      support: {
        title: "Support-FAQ.",
        titleAccent: "Vart du vänder dig när du behöver hjälp.",
        lead: "Supporttider, serviceavtal, hjälpcentret och hur eskaleringar fungerar.",
      },
    },
  },
};
