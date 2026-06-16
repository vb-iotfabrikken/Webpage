import type { Lang } from "../lang";

/**
 * Per-locale overlays for the modules hub (title/accent/eyebrow/lead) and its
 * leaves. English lives in `modules.ts`; missing keys fall back to English.
 *
 * Module names are generic feature categories (not RoomAlyzer product/brand
 * names), so they ARE translated here. Trailing-period title style is kept.
 */

export interface ModuleLeafOverlay {
  title?: string;
  titleAccent?: string;
  lead?: string;
}

export interface ModulesHubOverlay {
  title?: string;
  titleAccent?: string;
  eyebrow?: string;
  lead?: string;
  leaves?: Record<string, ModuleLeafOverlay>;
}

export const modulesHubI18n: Partial<Record<Lang, ModulesHubOverlay>> = {
  da: {
    title: "Vælg de moduler",
    titleAccent: "du faktisk har brug for.",
    eyebrow: "Moduler",
    lead: "Hvert modul løser et konkret problem i din bygning. Start med ét, og tilføj det næste, når det giver mening.",
    leaves: {
      "indoor-climate": {
        title: "Indeklima.",
        titleAccent: "Data i stedet for fornemmelser.",
        lead: "CO2, temperatur, fugt og VOC i realtid — og tidlige advarsler om skimmel og fugt, før de skader bygningen.",
      },
      preservation: {
        title: "Bevaring.",
        titleAccent: "Beskyt det, der ikke kan erstattes.",
        lead: "Kontinuerlig overvågning af klimaet omkring samlinger, kunst, arkiver og følsomme materialer.",
      },
      "space-management": {
        title: "Space management.",
        titleAccent: "Sådan bliver dine rum reelt brugt.",
        lead: "Belægning, booking kontra faktisk brug og udnyttelsesmønstre for mødelokaler, skriveborde og fællesarealer.",
      },
      "water-detection": {
        title: "Vanddetektering.",
        titleAccent: "Stop skaden, før den spreder sig.",
        lead: "Trådløse læksensorer, der alarmerer i det øjeblik, vand dukker op, hvor det ikke skal være.",
      },
      "push-buttons": {
        title: "Trykknapper.",
        titleAccent: "Feedback med et enkelt tryk.",
        lead: "Servicekald, rengøringsanmodninger og tilfredshedsinput fra medarbejdere og gæster — sendt direkte til det rette team.",
      },
      "lockers-doors": {
        title: "Skabe og døre.",
        titleAccent: "Åbnet, lukket, stået på klem.",
        lead: "Trådløse åbn/luk-sensorer til døre, skabe, vinduer og aflåste skabe — uden nogen kabling.",
      },
      "usage-cleaning": {
        title: "Brug og rengøring.",
        titleAccent: "Gør rent, når der faktisk er behov.",
        lead: "Behovsbaseret rengøring, der reagerer på reel brug i stedet for en fast plan.",
      },
    },
  },
  de: {
    title: "Wählen Sie die Module,",
    titleAccent: "die Sie wirklich brauchen.",
    eyebrow: "Module",
    lead: "Jedes Modul löst ein konkretes Problem in Ihrem Gebäude. Beginnen Sie mit einem und fügen Sie das nächste hinzu, wann immer es sinnvoll ist.",
    leaves: {
      "indoor-climate": {
        title: "Raumklima.",
        titleAccent: "Daten statt Bauchgefühl.",
        lead: "CO2, Temperatur, Luftfeuchtigkeit und VOC in Echtzeit — und frühzeitige Warnungen vor Schimmel und Feuchtigkeit, bevor sie dem Gebäude schaden.",
      },
      preservation: {
        title: "Konservierung.",
        titleAccent: "Schützen Sie, was unersetzlich ist.",
        lead: "Kontinuierliche Überwachung des Klimas rund um Sammlungen, Kunstwerke, Archive und empfindliche Materialien.",
      },
      "space-management": {
        title: "Space-Management.",
        titleAccent: "Wie Ihre Räume wirklich genutzt werden.",
        lead: "Belegung, Buchung im Vergleich zur tatsächlichen Nutzung und Auslastungsmuster für Besprechungsräume, Arbeitsplätze und Gemeinschaftsbereiche.",
      },
      "water-detection": {
        title: "Wassererkennung.",
        titleAccent: "Stoppen Sie Schäden, bevor sie sich ausbreiten.",
        lead: "Drahtlose Lecksensoren, die alarmieren, sobald Wasser dort auftaucht, wo es nicht sein sollte.",
      },
      "push-buttons": {
        title: "Drucktasten.",
        titleAccent: "Feedback mit einem einzigen Tastendruck.",
        lead: "Serviceanfragen, Reinigungswünsche und Zufriedenheitsfeedback von Mitarbeitenden und Gästen — direkt an das richtige Team.",
      },
      "lockers-doors": {
        title: "Schließfächer und Türen.",
        titleAccent: "Offen, geschlossen, angelehnt.",
        lead: "Drahtlose Öffnen/Schließen-Sensoren für Türen, Schränke, Fenster und Schließfächer — ganz ohne Verkabelung.",
      },
      "usage-cleaning": {
        title: "Nutzung und Reinigung.",
        titleAccent: "Reinigen, wenn es wirklich nötig ist.",
        lead: "Bedarfsgerechte Reinigung, die auf die tatsächliche Nutzung reagiert statt auf einen festen Plan.",
      },
    },
  },
  sv: {
    title: "Välj de moduler",
    titleAccent: "du faktiskt behöver.",
    eyebrow: "Moduler",
    lead: "Varje modul löser ett konkret problem i din byggnad. Börja med en och lägg till nästa när det känns rätt.",
    leaves: {
      "indoor-climate": {
        title: "Inomhusklimat.",
        titleAccent: "Data i stället för känslor.",
        lead: "CO2, temperatur, fukt och VOC i realtid — och tidiga varningar om mögel och fukt innan de skadar byggnaden.",
      },
      preservation: {
        title: "Bevarande.",
        titleAccent: "Skydda det som inte kan ersättas.",
        lead: "Kontinuerlig övervakning av klimatet kring samlingar, konst, arkiv och känsliga material.",
      },
      "space-management": {
        title: "Space management.",
        titleAccent: "Så används dina rum i verkligheten.",
        lead: "Beläggning, bokning kontra faktisk användning och nyttjandemönster för mötesrum, skrivbord och gemensamma ytor.",
      },
      "water-detection": {
        title: "Vattendetektering.",
        titleAccent: "Stoppa skadan innan den sprider sig.",
        lead: "Trådlösa läcksensorer som larmar i samma stund som vatten dyker upp där det inte ska vara.",
      },
      "push-buttons": {
        title: "Tryckknappar.",
        titleAccent: "Feedback med ett enda tryck.",
        lead: "Serviceanrop, städförfrågningar och nöjdhetsinput från medarbetare och gäster — skickat direkt till rätt team.",
      },
      "lockers-doors": {
        title: "Skåp och dörrar.",
        titleAccent: "Öppnat, stängt, på glänt.",
        lead: "Trådlösa öppna/stäng-sensorer för dörrar, skåp, fönster och förvaringsskåp — helt utan kablar.",
      },
      "usage-cleaning": {
        title: "Användning och städning.",
        titleAccent: "Städa när det faktiskt behövs.",
        lead: "Behovsstyrd städning som reagerar på verklig användning i stället för ett fast schema.",
      },
    },
  },
};
