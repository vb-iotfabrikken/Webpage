/**
 * Product photography for RoomAlyzer sensors. Served from
 * `public/images/sensors/` with slug-based filenames for crawlability.
 *
 * Alt text is descriptive (product line, name, form factor) for accessibility,
 * image search, and structured-data consumers.
 *
 * ## Adding a new product image
 *
 * **Single photo** (most sensors): one entry with `src` only. Preview uses the
 * standard full-square frame (`p-6 sm:p-8`, `object-contain`) — see Cloud connector.
 *
 * **Two-photo kit** (e.g. Range Extender and Bracket): set `src` to the top image
 * and `extraSrc: [`${BASE}/other-part.png`]` for the bottom image. Preview stacks
 * them vertically with the same outer frame and kit zoom — see
 * `SensorProductPreview.astro`; do not merge into one PNG.
 *
 * **Detail gallery** (sensor pages only): side views live in
 * `Sensor Product Pictures/Dimension/` → sync via `npm run sync-sensor-dimensions`
 * into `{slug}-dimensions.png`. Spec text comes from `sensorDimensions.ts`
 * (sourced from product sheets). In-use photos live in
 * `Sensor Product Pictures/In use/` → sync via `npm run sync-sensor-in-use`
 * into `{slug}-in-use.png` (and optional `{slug}-in-use-2.png`). Register
 * `inUseSrc` / `inUseAlt` on the entry — see `SensorProductGallery.astro`.
 */

const BASE = "/images/sensors";

import sensorInUseImageSizes from "./sensorInUseImageSizes.json";

export type SensorProductImage = {
  /** Primary image URL (site-relative). */
  src: string;
  /** Additional kit image(s), stacked below `src` in the card preview. */
  extraSrc?: string[];
  /** Optional in-context photo(s) for the sensor detail gallery (max two). */
  inUseSrc?: string | string[];
  inUseAlt?: string | string[];
  /** CSS object-position for in-use lifestyle photos (e.g. `"72% 42%"`). */
  inUseObjectPosition?: string | string[];
  imageAlt: string;
  width: number;
  height: number;
};

export const sensorProductImages: Record<string, SensorProductImage> = {
  co2: {
    src: `${BASE}/co2.png`,
    inUseSrc: [`${BASE}/co2-in-use.png`, `${BASE}/co2-in-use-2.png`],
    inUseAlt: [
      "RoomAlyzer Air CO2 sensor in a classroom — wireless air quality monitoring",
      "RoomAlyzer Air CO2 sensor in a meeting room — CO₂, temperature and humidity monitoring",
    ],
    imageAlt:
      "RoomAlyzer Air CO2 sensor — wireless battery-powered indoor climate monitor",
    width: 1080,
    height: 1080,
  },
  "full-plus": {
    src: `${BASE}/full-plus.png`,
    inUseSrc: [`${BASE}/full-plus-in-use.png`, `${BASE}/full-plus-in-use-2.png`],
    inUseAlt: [
      "RoomAlyzer Air Full+ sensor on a brick pillar in a modern office — wireless indoor climate monitoring",
      "RoomAlyzer Air Full+ sensor installed on a wall in a commercial interior",
    ],
    imageAlt:
      "RoomAlyzer Air Full+ sensor — all-in-one wireless indoor climate monitor",
    width: 1080,
    height: 1080,
  },
  humidity: {
    src: `${BASE}/humidity.png`,
    inUseSrc: [`${BASE}/humidity-in-use.png`, `${BASE}/humidity-in-use-2.png`],
    inUseAlt: [
      "RoomAlyzer Air Humidity sensor discreetly mounted in a heritage interior — temperature and humidity monitoring",
      "RoomAlyzer Air Humidity sensor in a museum or archive — wireless climate monitoring",
    ],
    imageAlt:
      "RoomAlyzer Air Humidity sensor — wireless temperature and humidity monitor",
    width: 1080,
    height: 1080,
  },
  "mini-plus": {
    src: `${BASE}/mini-plus.png`,
    inUseSrc: [`${BASE}/mini-plus-in-use.png`, `${BASE}/mini-plus-in-use-2.png`],
    inUseAlt: [
      "RoomAlyzer Air Mini+ sensor mounted on a stone wall in a church — discreet wireless climate monitoring",
      "RoomAlyzer Air Mini+ sensor installed on a wall in a commercial interior — compact wireless climate monitoring",
    ],
    inUseObjectPosition: ["72% 42%", "center"],
    imageAlt:
      "RoomAlyzer Air Mini+ NB-IoT sensor — wireless temperature and humidity monitor, 124 × 60 × 26 mm",
    width: 1080,
    height: 1080,
  },
  "mini-plus-pir": {
    src: `${BASE}/mini-plus-pir.png`,
    inUseSrc: [`${BASE}/mini-plus-pir-in-use.png`, `${BASE}/mini-plus-pir-in-use-2.png`],
    inUseAlt: [
      "RoomAlyzer Air Mini+ PIR sensor mounted on a wall in a cafe — climate and occupancy monitoring",
      "RoomAlyzer Air Mini+ PIR sensor and meeting-room display — climate and occupancy monitoring",
    ],
    inUseObjectPosition: ["center top", "55% center"],
    imageAlt:
      "RoomAlyzer Air Mini+ PIR sensor — compact climate monitor with occupancy sensing",
    width: 1080,
    height: 1080,
  },
  outdoor: {
    src: `${BASE}/outdoor.png`,
    inUseSrc: [`${BASE}/outdoor-in-use.png`, `${BASE}/outdoor-in-use-2.png`],
    inUseAlt: [
      "RoomAlyzer Air Outdoor sensor mounted on an exterior stone wall with cable probe — outdoor reference for indoor climate baselines",
      "RoomAlyzer Air Outdoor sensor on an exterior wall — outdoor temperature and humidity reference",
    ],
    inUseObjectPosition: ["58% 48%", "center"],
    imageAlt:
      "RoomAlyzer Air Outdoor sensor — wireless outdoor reference unit for indoor climate baselines",
    width: 1080,
    height: 1080,
  },
  temperature: {
    src: `${BASE}/temperature.png`,
    inUseSrc: [`${BASE}/temperature-in-use.png`, `${BASE}/temperature-in-use-2.png`],
    inUseAlt: [
      "RoomAlyzer Air Temperature sensor in a cold storage environment — wireless temperature monitoring",
      "RoomAlyzer Air Temperature sensor mounted in a technical room — precise temperature tracking",
    ],
    imageAlt:
      "RoomAlyzer Air Temperature sensor — wireless battery-powered temperature monitor",
    width: 1080,
    height: 1080,
  },
  desk: {
    src: `${BASE}/desk.png`,
    inUseSrc: [`${BASE}/desk-in-use.png`, `${BASE}/desk-in-use-2.png`],
    inUseAlt: [
      "RoomAlyzer Space Desk sensor under a desk in a flexible office — wireless occupancy monitoring",
      "RoomAlyzer Space Desk sensor in a hot-desking workspace — desk utilisation tracking",
    ],
    imageAlt:
      "RoomAlyzer Space Desk sensor — under-desk wireless occupancy monitor for hot-desking",
    width: 1080,
    height: 1080,
  },
  motion: {
    src: `${BASE}/motion.png`,
    inUseSrc: [`${BASE}/motion-in-use.png`, `${BASE}/motion-in-use-2.png`],
    inUseAlt: [
      "RoomAlyzer Space Motion sensor in an office ceiling — wireless PIR presence monitoring",
      "RoomAlyzer Space Motion sensor mounted on a ceiling — wireless PIR presence monitoring",
    ],
    inUseObjectPosition: ["center", "center top"],
    imageAlt:
      "RoomAlyzer Space Motion sensor — wireless PIR presence monitor without cameras",
    width: 1080,
    height: 1080,
  },
  "open-close": {
    src: `${BASE}/open-close.png`,
    inUseSrc: [`${BASE}/open-close-in-use.png`, `${BASE}/open-close-in-use-2.png`],
    inUseAlt: [
      "RoomAlyzer Space Open/Close sensor on a cabinet door — magnetic contact monitoring",
      "RoomAlyzer Space Open/Close sensor on a window — open and close detection",
    ],
    imageAlt:
      "RoomAlyzer Space Open/Close sensor — wireless magnetic contact sensor for doors and windows",
    width: 1080,
    height: 1080,
  },
  touch: {
    src: `${BASE}/touch.png`,
    inUseSrc: [`${BASE}/touch-in-use.png`, `${BASE}/touch-in-use-2.png`],
    inUseAlt: [
      "RoomAlyzer Space Touch sensor on a wall in a washroom — one-tap service requests",
      "RoomAlyzer Space Touch sensor in a canteen — wireless feedback and service calls",
    ],
    imageAlt:
      "RoomAlyzer Space Touch sensor — wireless one-tap button for service requests and feedback",
    width: 1080,
    height: 1080,
  },
  "water-detector": {
    src: `${BASE}/water-detector.png`,
    inUseSrc: [`${BASE}/water-detector-in-use.png`, `${BASE}/water-detector-in-use-2.png`],
    inUseAlt: [
      "RoomAlyzer Water detector under a sink — spot leak detection with wireless alerts",
      "RoomAlyzer Water detector in a technical room — water damage prevention",
    ],
    imageAlt:
      "RoomAlyzer Water detector — wireless spot leak sensor for instant water alarms",
    width: 1080,
    height: 1080,
  },
  "water-rope": {
    src: `${BASE}/water-rope.png`,
    inUseSrc: [`${BASE}/water-rope-in-use.png`, `${BASE}/water-rope-in-use-2.png`],
    inUseAlt: [
      "RoomAlyzer Water rope and Cloud connector in a utility cabinet — line leak monitoring with wireless uplink",
      "RoomAlyzer Water rope in a server room — continuous zone water monitoring",
    ],
    inUseObjectPosition: ["center top", "center"],
    imageAlt:
      "RoomAlyzer Water rope — wireless sensing cable for line leak detection along pipes and floors",
    width: 1080,
    height: 1080,
  },
  "cloud-connector": {
    src: `${BASE}/cloud-connector.png`,
    inUseSrc: [`${BASE}/cloud-connector-in-use.png`, `${BASE}/cloud-connector-in-use-2.png`],
    inUseAlt: [
      "Washroom touch sensor for paper, soap and cleaning requests — connected via RoomAlyzer Cloud connector",
      "RoomAlyzer Cloud connector mounted on a ceiling — cellular gateway for wireless sensors",
    ],
    inUseObjectPosition: ["center", "center top"],
    imageAlt:
      "RoomAlyzer Cloud connector — cellular gateway connecting wireless sensors to the platform",
    width: 1080,
    height: 1080,
  },
  "range-extender-and-bracket": {
    src: `${BASE}/range-extender.png`,
    extraSrc: [`${BASE}/bracket.png`],
    inUseSrc: [
      `${BASE}/range-extender-and-bracket-in-use.png`,
      `${BASE}/range-extender-and-bracket-in-use-2.png`,
    ],
    inUseAlt: [
      "RoomAlyzer range extender under a desk — signal boost for wireless desk sensors",
      "RoomAlyzer mounting bracket with sensor in a cold storage area — secure sensor mounting",
    ],
    imageAlt:
      "RoomAlyzer range extender and mounting bracket — wireless coverage extension and sensor mounting kit",
    width: 1080,
    height: 1080,
  },
};

export function getSensorProductImage(slug: string): SensorProductImage | undefined {
  return sensorProductImages[slug];
}

/** Fallback in-use tile size when manifest entry is missing. */
export const SENSOR_IN_USE_IMAGE_WIDTH = 1280;
export const SENSOR_IN_USE_IMAGE_HEIGHT = 800;

function inUseImageDimensions(src: string): { width: number; height: number } {
  const filename = src.split("/").pop() ?? "";
  const size = sensorInUseImageSizes[filename as keyof typeof sensorInUseImageSizes];
  if (size) return size;
  return {
    width: SENSOR_IN_USE_IMAGE_WIDTH,
    height: SENSOR_IN_USE_IMAGE_HEIGHT,
  };
}

/** In-use gallery entries with paired src/alt and optional focal point (up to two). */
export function getSensorInUseImages(
  slug: string,
): Array<{ src: string; alt: string; objectPosition: string; width: number; height: number }> {
  const product = sensorProductImages[slug];
  if (!product?.inUseSrc) return [];

  const srcs = (
    Array.isArray(product.inUseSrc) ? product.inUseSrc : [product.inUseSrc]
  ).slice(0, 2);
  const alts = product.inUseAlt
    ? (Array.isArray(product.inUseAlt) ? product.inUseAlt : [product.inUseAlt]).slice(0, 2)
    : [];
  const positions = product.inUseObjectPosition
    ? Array.isArray(product.inUseObjectPosition)
      ? product.inUseObjectPosition
      : [product.inUseObjectPosition]
    : [];

  return srcs.map((src, index) => ({
    src,
    alt: alts[index] ?? product.imageAlt,
    objectPosition: positions[index] ?? positions[0] ?? "center",
    ...inUseImageDimensions(src),
  }));
}

/** Primary product image for Open Graph and Product JSON-LD. */
export function sensorProductOgImage(slug: string): string | undefined {
  return sensorProductImages[slug]?.src;
}
