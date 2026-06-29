import type { Lang } from "../lang";

export interface PlatformLeafOverlay {
  title?: string;
  titleAccent?: string;
  lead?: string;
}

export interface PlatformHubOverlay {
  title?: string;
  titleAccent?: string;
  eyebrow?: string;
  lead?: string;
  leaves?: Record<string, PlatformLeafOverlay>;
}

export const platformHubI18n: Partial<Record<Lang, PlatformHubOverlay>> = {
  da: {
    title: "RoomAlyzer-platformen.",
    titleAccent: "Ét sted for alle jeres sensordata.",
    eyebrow: "Platform",
    lead: "Arkitektur, dashboards, rapporter, sikkerhed og API'er. Alt det, der sker, når sensoren har rapporteret ind.",
    leaves: {
      "how-it-works": {
        title: "Sådan virker det.",
        titleAccent: "Fra sensor til indsigt på minutter.",
        lead: "Følg en måling fra den fysiske sensor, gennem vores gateways og sky, og ind i de dashboards, jeres team bruger hver dag.",
      },
      architecture: {
        title: "Arkitektur.",
        titleAccent: "Skalerbar, sikker, europæisk.",
        lead: "En multi-tenant SaaS bygget på EU-infrastruktur med tydelig adskillelse mellem indsamling, lagring og præsentation.",
      },
      dashboards: {
        title: "Dashboards.",
        titleAccent: "Data gjort læsbart.",
        lead: "Konfigurerbare dashboards, der giver facility-teams, ledere og lejere præcis det overblik, de har brug for.",
      },
      reports: {
        title: "Rapporter.",
        titleAccent: "Dokumentation på bestilling.",
        lead: "Planlagte PDF- og Excel-eksporter til compliance, ESG-rapportering, bestyrelsesmøder og kommunikation med lejere.",
      },
      notifications: {
        title: "Notifikationer.",
        titleAccent: "Den rette person, på det rette tidspunkt.",
        lead: "SMS, e-mail, webhooks og eskaleringskæder, når en måling krydser en grænse.",
      },
      "maps-floorplans": {
        title: "Kort og plantegninger.",
        titleAccent: "Se jeres bygning med ét blik.",
        lead: "Upload plantegninger og placer sensorer på dem. Liveværdier og alarmer farver rummene, når de ændrer sig.",
      },
      "mobile-tv": {
        title: "Mobil- og TV-visninger.",
        titleAccent: "De rette data på den rette skærm.",
        lead: "En responsiv mobilapp til facility-teamet og fuldskærms-TV-dashboards til lobbyer og kontrolrum.",
      },
      "ai-analytics": {
        title: "AI og analyse.",
        titleAccent: "Mønstre, I ellers ville overse.",
        lead: "Anomalidetektion, forudsigelige alarmer og forespørgsler på naturligt sprog på tværs af hele jeres sensorhistorik.",
      },
      security: {
        title: "Sikkerhed.",
        titleAccent: "Bygget med compliance for øje.",
        lead: "End-to-end-kryptering, SSO, finmasket adgangskontrol og udelukkende EU-baseret datalagring som standard.",
      },
      api: {
        title: "API.",
        titleAccent: "Jeres data, hvor I har brug for dem.",
        lead: "Et veldokumenteret REST- og MQTT-API, så I kan føre RoomAlyzer-data ind i jeres BI, BMS eller egne værktøjer.",
      },
    },
  },
  de: {
    title: "Die RoomAlyzer-Plattform.",
    titleAccent: "Ein Ort für alle Ihre Sensordaten.",
    eyebrow: "Plattform",
    lead: "Architektur, Dashboards, Berichte, Sicherheit und APIs. Alles, was passiert, nachdem der Sensor gemeldet hat.",
    leaves: {
      "how-it-works": {
        title: "So funktioniert es.",
        titleAccent: "Vom Sensor zur Erkenntnis in Minuten.",
        lead: "Verfolgen Sie einen Messwert vom physischen Sensor über unsere Gateways und die Cloud bis zu den Dashboards, die Ihr Team täglich nutzt.",
      },
      architecture: {
        title: "Architektur.",
        titleAccent: "Skalierbar, sicher, europäisch.",
        lead: "Eine Multi-Tenant-SaaS auf EU-Infrastruktur mit klarer Trennung zwischen Erfassung, Speicherung und Darstellung.",
      },
      dashboards: {
        title: "Dashboards.",
        titleAccent: "Daten verständlich gemacht.",
        lead: "Konfigurierbare Dashboards, die Facility-Teams, Führungskräfte und Mieter genau die Ansicht geben, die sie brauchen.",
      },
      reports: {
        title: "Berichte.",
        titleAccent: "Dokumentation auf Abruf.",
        lead: "Geplante PDF- und Excel-Exporte für Compliance, ESG-Reporting, Vorstandssitzungen und Mieterkommunikation.",
      },
      notifications: {
        title: "Benachrichtigungen.",
        titleAccent: "Die richtige Person zur richtigen Zeit.",
        lead: "SMS, E-Mail, Webhooks und Eskalationsstufen, wenn ein Messwert eine Schwelle überschreitet.",
      },
      "maps-floorplans": {
        title: "Karten und Grundrisse.",
        titleAccent: "Ihr Gebäude auf einen Blick.",
        lead: "Grundrisse hochladen und Sensoren darauf platzieren. Live-Werte und Alarme färben die Räume, wenn sie sich ändern.",
      },
      "mobile-tv": {
        title: "Mobile und TV-Ansichten.",
        titleAccent: "Die richtigen Daten auf dem richtigen Bildschirm.",
        lead: "Eine responsive Mobile-App für das Facility-Team und Vollbild-TV-Dashboards für Lobbys und Leitstände.",
      },
      "ai-analytics": {
        title: "KI und Analytik.",
        titleAccent: "Muster, die Sie sonst übersehen würden.",
        lead: "Anomalieerkennung, prädiktive Alarme und Abfragen in natürlicher Sprache über Ihre gesamte Sensorhistorie.",
      },
      security: {
        title: "Sicherheit.",
        titleAccent: "Mit Compliance im Blick entwickelt.",
        lead: "End-to-End-Verschlüsselung, SSO, feingranulare Zugriffskontrolle und ausschließlich EU-basierte Datenhaltung als Standard.",
      },
      api: {
        title: "API.",
        titleAccent: "Ihre Daten, wo Sie sie brauchen.",
        lead: "Eine gut dokumentierte REST- und MQTT-API, damit Sie RoomAlyzer-Daten in Ihr BI, BMS oder eigene Tools einspeisen können.",
      },
    },
  },
  sv: {
    title: "RoomAlyzer-plattformen.",
    titleAccent: "Ett ställe för all er sensordata.",
    eyebrow: "Plattform",
    lead: "Arkitektur, instrumentpaneler, rapporter, säkerhet och API:er. Allt som händer efter att sensorn har rapporterat in.",
    leaves: {
      "how-it-works": {
        title: "Så fungerar det.",
        titleAccent: "Från sensor till insikt på minuter.",
        lead: "Följ en avläsning från den fysiska sensorn, genom våra gateways och molnet, och in i de instrumentpaneler som ert team använder varje dag.",
      },
      architecture: {
        title: "Arkitektur.",
        titleAccent: "Skalbar, säker, europeisk.",
        lead: "En multi-tenant SaaS byggd på EU-infrastruktur med tydlig separation mellan insamling, lagring och presentation.",
      },
      dashboards: {
        title: "Instrumentpaneler.",
        titleAccent: "Data gjorda läsbara.",
        lead: "Konfigurerbara instrumentpaneler som ger facility-team, chefer och hyresgäster exakt den vy de behöver.",
      },
      reports: {
        title: "Rapporter.",
        titleAccent: "Dokumentation på begäran.",
        lead: "Schemalagda PDF- och Excel-exporter för compliance, ESG-rapportering, styrelsemöten och kommunikation med hyresgäster.",
      },
      notifications: {
        title: "Aviseringar.",
        titleAccent: "Rätt person, vid rätt tillfälle.",
        lead: "SMS, e-post, webhooks och eskaleringsstegar när en avläsning passerar en tröskel.",
      },
      "maps-floorplans": {
        title: "Kartor och planritningar.",
        titleAccent: "Se er byggnad med ett ögonkast.",
        lead: "Ladda upp planritningar och placera sensorer på dem. Livevärden och larm färgar rummen när de ändras.",
      },
      "mobile-tv": {
        title: "Mobil- och TV-vyer.",
        titleAccent: "Rätt data på rätt skärm.",
        lead: "En responsiv mobilapp för facility-teamet och helskärms-TV-instrumentpaneler för lobbyer och kontrollrum.",
      },
      "ai-analytics": {
        title: "AI och analys.",
        titleAccent: "Mönster ni annars skulle missa.",
        lead: "Anomalidetektering, prediktiva larm och frågor på naturligt språk över hela er sensorhistorik.",
      },
      security: {
        title: "Säkerhet.",
        titleAccent: "Byggd med compliance i åtanke.",
        lead: "End-to-end-kryptering, SSO, finmaskad åtkomstkontroll och enbart EU-baserad datalagring som standard.",
      },
      api: {
        title: "API.",
        titleAccent: "Er data, var ni behöver den.",
        lead: "Ett väldokumenterat REST- och MQTT-API så att ni kan mata in RoomAlyzer-data i ert BI, BMS eller egna verktyg.",
      },
    },
  },
};
