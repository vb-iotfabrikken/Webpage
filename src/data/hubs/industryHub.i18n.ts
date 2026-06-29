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
    lead: "Hver branche har sine egne rytmer, regler og udfordringer. Vi har udrullet IoT i dem alle — og flere.",
    leaves: {
      offices: {
        title: "Kontorer.",
        titleAccent: "Hybrid arbejde, målt.",
        lead: "Udnyttelse, komfort og energi i moderne kontorer — de tre greb, der afgør, om folk møder ind.",
      },
      churches: {
        title: "Kirker.",
        titleAccent: "Pas på orgler og fresker.",
        lead: "Fugt, temperatur og kondensmåling, der beskytter historiske bygninger og deres indhold.",
      },
      "museums-galleries": {
        title: "Museer og gallerier.",
        titleAccent: "Bevar det, I udstiller.",
        lead: "Klimadata i tråd med internationale bevaringsstandarder for samlinger og udlånsobjekter.",
      },
      municipalities: {
        title: "Kommuner.",
        titleAccent: "Ét overblik, mange bygninger.",
        lead: "Skoler, daginstitutioner, administration og kulturinstitutioner — samlet på én platform.",
      },
    },
  },
  de: {
    title: "Für Ihre Branche gebaut.",
    titleAccent: "Vom ersten Sensor bis zum tausendsten.",
    eyebrow: "Branchen",
    lead: "Jede Branche hat eigene Rhythmen, Vorschriften und Schmerzpunkte. IoT haben wir in all diesen — und mehr — ausgerollt.",
    leaves: {
      offices: {
        title: "Büros.",
        titleAccent: "Hybrides Arbeiten, gemessen.",
        lead: "Auslastung, Komfort und Energie in modernen Büros — die drei Hebel, die entscheiden, ob Menschen ins Büro kommen.",
      },
      churches: {
        title: "Kirchen.",
        titleAccent: "Orgeln und Fresken schützen.",
        lead: "Feuchte-, Temperatur- und Kondensationsmonitoring, das historische Gebäude und ihr Inventar schützt.",
      },
      "museums-galleries": {
        title: "Museen und Galerien.",
        titleAccent: "Bewahren, was Sie ausstellen.",
        lead: "Klimadaten nach internationalen Erhaltungsstandards für Sammlungen und Leihgaben.",
      },
      municipalities: {
        title: "Kommunen.",
        titleAccent: "Ein Überblick, viele Gebäude.",
        lead: "Schulen, Kitas, Verwaltung und Kultureinrichtungen — in einer Plattform gebündelt.",
      },
    },
  },
  sv: {
    title: "Byggt för er bransch.",
    titleAccent: "Från den första sensorn till den tusende.",
    eyebrow: "Branscher",
    lead: "Varje bransch har sina egna rytmer, regler och utmaningar. Vi har rullat ut IoT i alla dessa — och fler.",
    leaves: {
      offices: {
        title: "Kontor.",
        titleAccent: "Hybridarbete, uppmätt.",
        lead: "Utnyttjande, komfort och energi på moderna kontor — de tre spakarna som avgör om folk kommer in.",
      },
      churches: {
        title: "Kyrkor.",
        titleAccent: "Vård om orglar och fresker.",
        lead: "Fukt-, temperatur- och kondensationsövervakning som skyddar historiska byggnader och deras innehåll.",
      },
      "museums-galleries": {
        title: "Museer och gallerier.",
        titleAccent: "Bevara det ni ställer ut.",
        lead: "Klimadata i linje med internationella bevarandestandarder för samlingar och låneföremål.",
      },
      municipalities: {
        title: "Kommuner.",
        titleAccent: "En översikt, många byggnader.",
        lead: "Skolor, förskolor, förvaltning och kulturinstitutioner — samlade på en plattform.",
      },
    },
  },
};
