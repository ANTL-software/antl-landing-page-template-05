import { FiArrowUpRight } from "react-icons/fi";
import type { BakerySite } from "../../types";

type SiteHeaderProps = Pick<BakerySite, "brand" | "navigation">;

export function SiteHeader({ brand, navigation }: SiteHeaderProps) {
  return <header className="bakery-header"><a className="bakery-header__brand" href="#/?section=top">{brand}<span>®</span></a><nav aria-label="Navigation principale">{navigation.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}</nav><a className="bakery-header__order" href="#/?section=precommande">Commander <FiArrowUpRight aria-hidden="true" className="bakery-header__order-icon" /></a></header>;
}
