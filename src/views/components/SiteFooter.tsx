import type { BakerySite } from "../../types";

type SiteFooterProps = { brand: string; footer: BakerySite["footer"] };

export function SiteFooter({ brand, footer }: SiteFooterProps) {
  return <footer><a href="#/?section=top">{brand}</a><div><a href={`mailto:${footer.email}`}>{footer.email}</a><a href={`tel:${footer.phone.replaceAll(" ", "")}`}>{footer.phone}</a></div><div><span>{footer.city}</span><span>{footer.legal}</span></div></footer>;
}
