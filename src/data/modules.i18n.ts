import type { Lang } from "./lang";

/**
 * Per-locale overlays for the module cards (name/short/long) used by the
 * modules grid and the header mega-menu. English lives in `modules.ts`.
 */

export interface ModuleOverlay {
  name?: string;
  short?: string;
  long?: string;
}

export const modulesI18n: Partial<Record<Lang, Record<string, ModuleOverlay>>> = {
  da: {
    "indoor-climate": {
      name: "Indeklima",
      short: "Håndtér klager med data i stedet for fornemmelser.",
      long: "Mål CO2, temperatur, fugt og VOC. Vær på forkant med skimmel og fugt.",
    },
    "space-management": {
      name: "Space management",
      short: "Overblik over dine kontorer og mødefaciliteter.",
      long: "Reagér hurtigt på medarbejdernes skiftende behov, og optimér jeres brug af arealerne.",
    },
    "water-detection": {
      name: "Vanddetektering",
      short: "Opdag læk, før de bliver dyre.",
      long: "Trådløse sensorer, der alarmerer øjeblikkeligt, så snart vand registreres, hvor det ikke skal være.",
    },
    preservation: {
      name: "Bevaring",
      short: "Beskyt værdifulde samlinger og materialer.",
      long: "Kontinuerlig overvågning af temperatur og fugt for museer, arkiver og lagre.",
    },
    "usage-cleaning": {
      name: "Brug og rengøring",
      short: "Gør rent efter behov, ikke efter en plan.",
      long: "Brug belægningsdata til at sende rengøringen derhen, hvor den reelt gør en forskel.",
    },
    "push-buttons": {
      name: "Trykknapper",
      short: "Realtidsfeedback fra dine brugere.",
      long: "Lad medarbejdere og gæster give input med et enkelt tryk, sendt direkte til facility-teamet.",
    },
    "lockers-doors": {
      name: "Skabe og døre",
      short: "Åbnet, lukket, stået på klem.",
      long: "Trådløse åbn/luk-sensorer til døre, skabe, vinduer og aflåste skabe, uden nogen kabling.",
    },
  },
  de: {
    "indoor-climate": {
      name: "Raumklima",
      short: "Beschwerden mit Daten statt mit Bauchgefühl begegnen.",
      long: "Messen Sie CO2, Temperatur, Luftfeuchtigkeit und VOC. Bleiben Sie Schimmel und Feuchtigkeit voraus.",
    },
    "space-management": {
      name: "Space-Management",
      short: "Überblick über Ihre Büros und Besprechungsräume.",
      long: "Reagieren Sie schnell auf die wechselnden Bedürfnisse Ihrer Mitarbeitenden und optimieren Sie die Flächennutzung.",
    },
    "water-detection": {
      name: "Wassererkennung",
      short: "Erkennen Sie Lecks, bevor sie teuer werden.",
      long: "Drahtlose Sensoren, die sofort alarmieren, sobald Wasser dort erkannt wird, wo es nicht sein sollte.",
    },
    preservation: {
      name: "Konservierung",
      short: "Schützen Sie wertvolle Sammlungen und Materialien.",
      long: "Kontinuierliche Überwachung von Temperatur und Luftfeuchtigkeit für Museen, Archive und Lager.",
    },
    "usage-cleaning": {
      name: "Nutzung und Reinigung",
      short: "Reinigen nach Bedarf, nicht nach Zeitplan.",
      long: "Nutzen Sie Belegungsdaten, um die Reinigung dorthin zu lenken, wo sie wirklich etwas bewirkt.",
    },
    "push-buttons": {
      name: "Drucktasten",
      short: "Echtzeit-Feedback von Ihren Nutzern.",
      long: "Lassen Sie Mitarbeitende und Gäste mit einem einzigen Tastendruck Rückmeldung geben, direkt an das Facility-Team.",
    },
    "lockers-doors": {
      name: "Schließfächer und Türen",
      short: "Offen, geschlossen, angelehnt.",
      long: "Drahtlose Öffnen/Schließen-Sensoren für Türen, Schränke, Fenster und Schließfächer, ganz ohne Verkabelung.",
    },
  },
  sv: {
    "indoor-climate": {
      name: "Inomhusklimat",
      short: "Hantera klagomål med data i stället för känslor.",
      long: "Mät CO2, temperatur, fukt och VOC. Ligg steget före mögel och fukt.",
    },
    "space-management": {
      name: "Space management",
      short: "Överblick över dina kontor och mötesytor.",
      long: "Reagera snabbt på medarbetarnas föränderliga behov och optimera hur ni använder era ytor.",
    },
    "water-detection": {
      name: "Vattendetektering",
      short: "Upptäck läckor innan de blir dyra.",
      long: "Trådlösa sensorer som larmar direkt så snart vatten upptäcks där det inte ska vara.",
    },
    preservation: {
      name: "Bevarande",
      short: "Skydda värdefulla samlingar och material.",
      long: "Kontinuerlig övervakning av temperatur och fukt för museer, arkiv och lager.",
    },
    "usage-cleaning": {
      name: "Användning och städning",
      short: "Städa vid behov, inte efter ett schema.",
      long: "Använd beläggningsdata för att rikta städningen dit den faktiskt gör skillnad.",
    },
    "push-buttons": {
      name: "Tryckknappar",
      short: "Realtidsfeedback från dina användare.",
      long: "Låt medarbetare och gäster ge input med ett enda tryck, skickat direkt till facility-teamet.",
    },
    "lockers-doors": {
      name: "Skåp och dörrar",
      short: "Öppnat, stängt, på glänt.",
      long: "Trådlösa öppna/stäng-sensorer för dörrar, skåp, fönster och förvaringsskåp, helt utan kablar.",
    },
  },
};
