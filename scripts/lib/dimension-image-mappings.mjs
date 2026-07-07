/**
 * Source PNG → public WebP mappings for sensor dimension photography.
 *
 * When adding a new sensor dimension image:
 * 1. Add the source PNG to Pictures/Sensors/Dimensions/
 * 2. Add a row below (source → targets)
 * 3. Run `npm run sync-sensor-dimensions` (syncs WebP + regenerates bracket calibration)
 * 4. Add the sensorDimensions entry in src/data/sensorDimensions.ts
 */
export const dimensionSourceDir = "Pictures/Sensors/Dimensions";

/** @type {Array<{ source: string; targets: string[] }>} */
export const dimensionImageMappings = [
  { source: "CO2 dim.png", targets: ["co2-dimensions.webp"] },
  { source: "Humidity dim.png", targets: ["humidity-dimensions.webp"] },
  { source: "Cloud connector dim.png", targets: ["cloud-connector-dimensions.webp"] },
  { source: "Touch dim.png", targets: ["touch-dimensions.webp"] },
  { source: "Motion dim.png", targets: ["motion-dimensions.webp"] },
  { source: "Mini+ PIR dim.png", targets: ["mini-plus-pir-dimensions.webp"] },
  {
    source: "Open close dim small unit.png",
    targets: ["open-close-dimensions-compact.webp"],
  },
  {
    source: "Open close dim large unit.png",
    targets: ["open-close-dimensions-pro.webp"],
  },
  { source: "Outdoor dim.png", targets: ["outdoor-dimensions.webp"] },
  {
    source: "Mini+_Full+ dim.png",
    targets: ["mini-plus-dimensions.webp", "full-plus-dimensions.webp"],
  },
  {
    source: "Temperature_Desk dim.png",
    targets: ["temperature-dimensions.webp", "desk-dimensions.webp"],
  },
  {
    source: "Water detector_rope IP30 dim.png",
    targets: ["water-detector-dimensions-compact.webp", "water-rope-dimensions-compact.webp"],
  },
  {
    source: "Water detector_rope IP67 dim.png",
    targets: ["water-detector-dimensions-pro.webp", "water-rope-dimensions-pro.webp"],
  },
  { source: "Range extender dim.png", targets: ["range-extender-dimensions.webp"] },
  { source: "Bracket dim.png", targets: ["bracket-dimensions.webp"] },
];
