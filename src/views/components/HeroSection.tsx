import type { BakerySite } from "../../types";
import { ButtonLink } from "./ButtonLink";

type HeroSectionProps = { hero: BakerySite["hero"] };

export function HeroSection({ hero }: HeroSectionProps) {
  return <section className="bakery-hero" id="top"><img alt={hero.image.alt} src={hero.image.src} style={{ objectPosition: hero.image.position }} /><div className="bakery-hero__veil" /><div className="bakery-hero__content"><p className="eyebrow">{hero.eyebrow}</p><h1>{hero.title}</h1><div><p>{hero.text}</p><ButtonLink link={hero.cta} /></div><small>{hero.note}</small></div></section>;
}
