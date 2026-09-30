import { FiArrowUpRight } from "react-icons/fi";
import type { Link } from "../../types";

type ButtonLinkProps = { link: Link; dark?: boolean };

export function ButtonLink({ link, dark = false }: ButtonLinkProps) {
  return <a className={`bakery-button${dark ? " bakery-button--dark" : ""}`} href={link.href}>{link.label}<FiArrowUpRight aria-hidden="true" className="bakery-button__icon" /></a>;
}
