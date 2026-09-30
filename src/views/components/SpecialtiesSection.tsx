import type { BakerySite } from "../../types";

type SpecialtiesSectionProps = { specialties: BakerySite["specialties"] };

export function SpecialtiesSection({ specialties }: SpecialtiesSectionProps) {
  return <section className="specialties section" id="specialites"><div className="specialties__intro"><p className="eyebrow">{specialties.eyebrow}</p><h2>{specialties.title}</h2><p>{specialties.text}</p></div><div className="specialties__body"><img alt={specialties.image.alt} src={specialties.image.src} style={{ objectPosition: specialties.image.position }} /><div className="product-list">{specialties.products.map((product, index) => <article key={product.name}><span>0{index + 1}</span><div><p>{product.tag}</p><h3>{product.name}</h3><small>{product.detail}</small></div><strong>{product.price}</strong></article>)}</div></div></section>;
}
