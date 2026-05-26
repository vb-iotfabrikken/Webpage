import type { CalculatorTab } from "./constants";

export type SensorRecommendation = {
  name: string;
  summary: string;
};

const GATEWAY: SensorRecommendation = {
  name: "RoomAlyzer Gateway",
  summary: "Connects every wireless sensor to the RoomAlyzer platform — required for any rollout.",
};

const DESK_SENSORS: SensorRecommendation[] = [
  {
    name: "Desk sensor",
    summary:
      "Under-desk occupancy to measure real desk utilisation and right-size your footprint.",
  },
  {
    name: "PIR motion sensor",
    summary:
      "Room-level presence data to validate meeting-room and open-plan usage patterns.",
  },
  {
    name: "RoomAlyzer Full Plus PIR",
    summary:
      "Climate plus occupancy in one unit — ideal for meeting rooms you may consolidate.",
  },
  GATEWAY,
];

const ENERGY_SENSORS: SensorRecommendation[] = [
  {
    name: "RoomAlyzer Full",
    summary:
      "CO₂, temperature, humidity and VOC — baseline for heating setbacks and comfort alarms.",
  },
  {
    name: "Temperature sensor",
    summary:
      "Spot-check HVAC zones and plant rooms where a dedicated logger adds precision.",
  },
  {
    name: "Outdoor sensor",
    summary:
      "Outdoor reference so indoor trends are separated from weather swings.",
  },
  GATEWAY,
];

export function getSensorRecommendations(
  calculator: CalculatorTab,
): SensorRecommendation[] {
  return calculator === "desk" ? [...DESK_SENSORS] : [...ENERGY_SENSORS];
}

export function useCaseLabel(calculator: CalculatorTab): string {
  return calculator === "desk" ? "Space management" : "Indoor climate / energy";
}
