/**
 * Card 1 / venue-card logo presentation — shared variables for uniform sizing.
 *
 * Presets:
 * - rectangle: default horizontal wordmarks in a white rounded panel
 * - roundel: compact circular or seal logos (e.g. DHBV) — no wide rectangle required
 * - bleed: logos that ship with their own background (e.g. MUTEC black bar)
 */

export type EventCardLogoPreset = "rectangle" | "rectangleLg" | "roundel" | "bleed";

export interface EventCardLogoStyle {
  preset: EventCardLogoPreset;
  shell: string;
  height: string;
  maxWidth: string;
}

const SHELL_BASE = "mt-4 w-fit shadow-lg";

export const eventCardLogoPresets: Record<EventCardLogoPreset, EventCardLogoStyle> = {
  rectangle: {
    preset: "rectangle",
    shell: `${SHELL_BASE} rounded-xl bg-white px-3 py-3`,
    height: "h-10",
    maxWidth: "max-w-[10rem]",
  },
  rectangleLg: {
    preset: "rectangleLg",
    shell: `${SHELL_BASE} rounded-xl bg-white px-3 py-3`,
    height: "h-11",
    maxWidth: "max-w-[10rem]",
  },
  /** Compact seal — white roundel; image stays small inside (DHBV). */
  roundel: {
    preset: "roundel",
    shell: `${SHELL_BASE} rounded-full bg-white p-2`,
    height: "h-11",
    maxWidth: "max-w-[4.75rem]",
  },
  /** Full-bleed asset on the card gradient — clipped plate, no white panel (MUTEC). */
  bleed: {
    preset: "bleed",
    shell: `${SHELL_BASE} rounded-xl overflow-hidden ring-1 ring-white/10`,
    height: "h-10",
    maxWidth: "max-w-[11rem]",
  },
};

export function resolveEventCardLogo(preset: EventCardLogoPreset): EventCardLogoStyle {
  return eventCardLogoPresets[preset];
}
