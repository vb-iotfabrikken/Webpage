/**
 * Danish press mentions — backlog for `/da/about/press/`.
 * NOT rendered on English pages. See `press.ts` for English locale data.
 *
 * TODO(da-locale): Wire into Danish About > Press when `/da/about/press/` is built.
 * Translate headlines to Danish UI copy; add source URLs where available.
 */

export type PressMentionDa = {
  date: string; // ISO yyyy-mm-dd (day omitted → first of month)
  headlineDa: string;
  outlet: string;
  url?: string;
};

/** Media coverage sourced from the Danish market — newest first. */
export const mentionsDaBacklog: PressMentionDa[] = [
  {
    date: "2026-03-09",
    headlineDa: "Dansk IoT-gazelle har fundet en enkel løsning på et komplekst problem",
    outlet: "Licitationen",
  },
  {
    date: "2025-09-01",
    headlineDa: "Omtale i det tyske magasin BAUSUBSTANZ (Kirker i Hessen-Nassau)",
    outlet: "BAUSUBSTANZ",
  },
  {
    date: "2025-06-30",
    headlineDa: "Kontoret: Vi investerer i mennesker i stedet for kvadratmeter",
    outlet: "Licitationen",
  },
  {
    date: "2025-06-02",
    headlineDa: "Lagde ud med rottefælder – nu tæller kunderne både museer, kirker og kommuner",
    outlet: "Sjællandske Nyheder",
  },
  {
    date: "2025-03-03",
    headlineDa: "Kommuner skaber fremtidens arbejdsplads med data og space management",
    outlet: "Licitationen",
  },
  {
    date: "2025-01-07",
    headlineDa:
      "Sådan dokumenterer du indeklimaet, optimerer arealet og undgår vandskader – med ét system",
    outlet: "Energiforum Danmark",
  },
  {
    date: "2024-05-22",
    headlineDa: "Space management med sensorer frigav 650 kvm – og det batter på bundlinjen",
    outlet: "DFM",
  },
  {
    date: "2024-02-20",
    headlineDa: "Sensorer skal advare om luftbåren smittespredning i børnehaver",
    outlet: "Teknologisk Institut",
  },
  {
    date: "2024-01-14",
    headlineDa: "IoT Fabrikken er finalist til Roskilde Erhvervspris",
    outlet: "YouTube / Roskilde TV",
  },
  {
    date: "2023-07-07",
    headlineDa: "Snak over rødvin førte til erhvervseventyr",
    outlet: "Sjællandske Nyheder",
  },
  {
    date: "2023-07-07",
    headlineDa: "Nomineret til erhvervspris: Der er salg i sensorer",
    outlet: "Sjællandske Nyheder",
  },
  {
    date: "2023-06-16",
    headlineDa: "Slut med Excel-gymnastik, når indeklimaet skal måles",
    outlet: "BygTek",
  },
  {
    date: "2023-05-23",
    headlineDa: "DGNB Bygninger i Drift vinder indpas – ny rapport gør det enklere",
    outlet: "DFM",
  },
  {
    date: "2022-04-07",
    headlineDa: "IoT-iværksættere har skabt stor succes med brugervenlig indeklima-sensor",
    outlet: "Energiforum Danmark",
  },
  {
    date: "2021-05-26",
    headlineDa: "Bornholmsk sensor skaber bedre indeklima i klassen",
    outlet: "TV2 Bornholm",
  },
  {
    date: "2021-05-20",
    headlineDa: "Iværksætterfabrik har udviklet et vågent øje, der aldrig bliver træt",
    outlet: "Sjællandske Nyheder",
  },
  {
    date: "2020-06-18",
    headlineDa: "Telenor og IoT Fabrikken indgår samarbejde",
    outlet: "MyNewsDesk / Telenor",
  },
  {
    date: "2020-03-31",
    headlineDa: "De tager temperaturen på virksomheder og skoler",
    outlet: "Roskilde Nyheder",
  },
];
