export type HubLeaf = {
  slug: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  lead: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export type Hub = {
  slug: string;
  title: string;
  titleAccent?: string;
  eyebrow: string;
  lead: string;
  leaves: HubLeaf[];
};
