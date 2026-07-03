/** Per-fair palette for Card 1 (`EventCardActive`) and matching landing-page heroes. */
import type { EventCardLogoPreset } from "./eventCardLogo";

export type EventCardTheme = "navy" | "worktech" | "mutec" | "dhbv";

export interface EventCardThemeStyle {
  shell: string;
  glow: string;
  dot: string;
  borderAccent: string;
  cta: string;
  focusRing: string;
  /** Logo preset — see `eventCardLogo.ts`. */
  logoPreset: EventCardLogoPreset;
  /** Landing venue card — bold booth headline (e.g. “Besuchen Sie uns”). */
  boothLabel: string;
}

export const eventCardThemeStyles: Record<EventCardTheme, EventCardThemeStyle> = {
  navy: {
    shell:
      "bg-gradient-to-br from-navy-500 via-navy-500 to-sky-600 focus-visible:ring-coral-500",
    glow: "background: radial-gradient(circle at 20% 0%, rgba(85,161,194,0.45), transparent 55%);",
    dot: "bg-coral-500",
    borderAccent: "border-coral-500",
    cta: "text-coral-200 group-hover:text-white",
    focusRing: "focus-visible:ring-coral-500",
    logoPreset: "rectangle",
    boothLabel: "text-sky-200",
  },
  worktech: {
    shell:
      "bg-gradient-to-br from-zinc-900 via-zinc-800 to-violet-900 focus-visible:ring-violet-500",
    glow: "background: radial-gradient(circle at 20% 0%, rgba(139,92,246,0.42), transparent 55%);",
    dot: "bg-violet-400",
    borderAccent: "border-violet-400",
    cta: "text-violet-200 group-hover:text-white",
    focusRing: "focus-visible:ring-violet-500",
    logoPreset: "rectangleLg",
    boothLabel: "text-violet-200",
  },
  mutec: {
    shell:
      "bg-gradient-to-br from-zinc-950 via-amber-950 to-yellow-700 focus-visible:ring-yellow-400",
    glow: "background: radial-gradient(circle at 80% 90%, rgba(250,204,21,0.5), transparent 45%);",
    dot: "bg-yellow-400",
    borderAccent: "border-yellow-400",
    cta: "text-yellow-300 group-hover:text-white",
    focusRing: "focus-visible:ring-yellow-400",
    logoPreset: "bleed",
    boothLabel: "text-yellow-300",
  },
  dhbv: {
    shell:
      "bg-gradient-to-br from-green-900 via-emerald-800 to-green-950 focus-visible:ring-emerald-500",
    glow: "background: radial-gradient(circle at 80% 100%, rgba(255,255,255,0.12), transparent 50%);",
    dot: "bg-emerald-400",
    borderAccent: "border-emerald-300",
    cta: "text-emerald-100 group-hover:text-white",
    focusRing: "focus-visible:ring-emerald-500",
    logoPreset: "rectangle",
    boothLabel: "text-emerald-100",
  },
};
