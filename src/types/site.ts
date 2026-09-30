export type Link = { label: string; href: string };

export type ImageAsset = { src: string; alt: string; position?: string };

export type BakeryTheme = {
  canvas: string;
  ink: string;
  dark: string;
  accent: string;
  accentSoft: string;
  muted: string;
  lightInk: string;
  displayFont: string;
  bodyFont: string;
};

export type Product = { name: string; detail: string; price: string; tag: string };

export type BakerySectionId = "specialties" | "story" | "visit" | "preorder";

export type BakerySite = {
  theme: BakeryTheme;
  brand: string;
  navigation: readonly Link[];
  hero: { eyebrow: string; title: string; text: string; cta: Link; note: string; image: ImageAsset };
  specialties: { eyebrow: string; title: string; text: string; image: ImageAsset; products: readonly Product[] };
  story: { eyebrow: string; title: string; text: string; image: ImageAsset; stat: string };
  visit: { eyebrow: string; title: string; address: string; hours: readonly string[]; cta: Link };
  preorder: { eyebrow: string; title: string; text: string; cta: Link; note: string };
  footer: { email: string; phone: string; city: string; legal: string };
  notFound: { title: string; text: string; cta: Link };
  sections: readonly { id: BakerySectionId; enabled: boolean }[];
};
