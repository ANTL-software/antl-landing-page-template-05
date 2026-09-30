import { BookingProviderEmbed } from "../../booking/react";
import { CheckoutButton } from "../../payments/react";
import { FiArrowUpRight } from "react-icons/fi";
import type { BakerySite, PreorderAction } from "../../types";
import { ButtonLink } from "./ButtonLink";

type PreorderSectionProps = { preorder: BakerySite["preorder"] };

function PreorderActionView({ action }: { action: PreorderAction }) {
  switch (action.mode) {
    case "inquiry":
      return <ButtonLink link={action.cta} />;
    case "booking":
      return <BookingProviderEmbed bookingUrl={action.booking.bookingUrl} title={action.booking.title} mode="link" linkLabel={action.booking.linkLabel} className="bakery-button" />;
    case "commerce":
      return <CheckoutButton offerId={action.checkout.offerId} className="bakery-button">{action.checkout.label}<FiArrowUpRight aria-hidden="true" className="bakery-button__icon" /></CheckoutButton>;
  }
}

export function PreorderSection({ preorder }: PreorderSectionProps) {
  return <section className="preorder" id="precommande"><p className="eyebrow">{preorder.eyebrow}</p><h2>{preorder.title}</h2><p>{preorder.text}</p><PreorderActionView action={preorder.action} /><small>{preorder.action.note}</small></section>;
}
