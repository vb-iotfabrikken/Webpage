import type { CalculatorTab, EnergyFacility } from "./constants";

export type SensorRecommendation = {
  name: string;
  summary: string;
};

const DESK_SENSORS: SensorRecommendation[] = [
  {
    name: "Desk",
    summary:
      "Under-desk occupancy to measure real desk utilisation and right-size your footprint.",
  },
  {
    name: "Motion",
    summary:
      "Room-level presence data to validate meeting-room and open-plan usage patterns.",
  },
  {
    name: "Mini+ PIR",
    summary:
      "Climate plus occupancy in one unit, ideal for meeting rooms you may consolidate.",
  },
];

const OFFICE_SENSORS: SensorRecommendation[] = [
  {
    name: "Mini+",
    summary:
      "CO₂, temperature, humidity and VOC, baseline for heating setbacks, comfort alarms and healthy CO2 levels.",
  },
  {
    name: "Temperature",
    summary:
      "Spot-check HVAC zones and plant rooms where a dedicated logger adds precision.",
  },
  {
    name: "Outdoor",
    summary:
      "Outdoor reference so indoor trends are separated from weather swings.",
  },
];

const HERITAGE_SENSORS: SensorRecommendation[] = [
  {
    name: "Humidity",
    summary:
      "Continuous relative-humidity logging, the first line of defence for organs, frescoes, paper and wood.",
  },
  {
    name: "Mini+",
    summary:
      "CO₂, temperature, humidity and VOC in one discreet unit for exhibition and storage rooms.",
  },
  {
    name: "Temperature",
    summary:
      "Tracks intermittent-heating swings so conservation heating can be tuned per room.",
  },
];

const SCHOOL_SENSORS: SensorRecommendation[] = [
  {
    name: "CO2",
    summary:
      "Live CO2 levels with alerts before classrooms pass the 1,000 ppm guideline.",
  },
  {
    name: "Mini+",
    summary:
      "Adds temperature, humidity and VOC to the CO2 picture, one unit per room.",
  },
  {
    name: "Outdoor",
    summary:
      "Outdoor reference so airing-out routines reflect actual weather conditions.",
  },
];

export function getSensorRecommendations(
  calculator: CalculatorTab,
  facility?: EnergyFacility,
): SensorRecommendation[] {
  if (calculator === "desk") return [...DESK_SENSORS];
  if (facility === "heritage") return [...HERITAGE_SENSORS];
  if (facility === "school") return [...SCHOOL_SENSORS];
  return [...OFFICE_SENSORS];
}

export function useCaseLabel(calculator: CalculatorTab): string {
  return calculator === "desk" ? "Space management" : "Indoor climate / energy";
}
