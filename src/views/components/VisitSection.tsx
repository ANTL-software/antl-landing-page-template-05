import type { BakerySite } from "../../types";
import { ButtonLink } from "./ButtonLink";

type VisitSectionProps = { visit: BakerySite["visit"] };

export function VisitSection({ visit }: VisitSectionProps) {
  return <section className="visit section" id="visite"><p className="eyebrow">{visit.eyebrow}</p><div className="visit__grid"><h2>{visit.title}</h2><div><address>{visit.address}</address>{visit.hours.map((hour) => <p key={hour}>{hour}</p>)}<ButtonLink link={visit.cta} dark /></div></div></section>;
}
