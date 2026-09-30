import { useEffect, type CSSProperties, type ReactNode } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { site } from "./content/site";
import type { BakerySectionId, BakerySite } from "./types/site";

type ThemeVariable = "--bakery-canvas" | "--bakery-ink" | "--bakery-dark" | "--bakery-accent" | "--bakery-accent-soft" | "--bakery-muted" | "--bakery-light-ink" | "--bakery-display-font" | "--bakery-body-font";
type ThemeStyle = CSSProperties & Record<ThemeVariable, string>;

function getThemeStyle(theme: BakerySite["theme"]): ThemeStyle {
  return { "--bakery-canvas": theme.canvas, "--bakery-ink": theme.ink, "--bakery-dark": theme.dark, "--bakery-accent": theme.accent, "--bakery-accent-soft": theme.accentSoft, "--bakery-muted": theme.muted, "--bakery-light-ink": theme.lightInk, "--bakery-display-font": theme.displayFont, "--bakery-body-font": theme.bodyFont };
}

function Button({ link, dark = false }: { link: BakerySite["hero"]["cta"]; dark?: boolean }) {
  return <a className={`bakery-button${dark ? " bakery-button--dark" : ""}`} href={link.href}>{link.label}<span aria-hidden="true">↗</span></a>;
}

function Header() {
  return <header className="bakery-header"><a className="bakery-header__brand" href="#/?section=top">{site.brand}<span>®</span></a><nav aria-label="Navigation principale">{site.navigation.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}</nav><a className="bakery-header__order" href="#/?section=precommande">Commander <span aria-hidden="true">↗</span></a></header>;
}

function Hero() {
  return <section className="bakery-hero" id="top"><img alt={site.hero.image.alt} src={site.hero.image.src} style={{ objectPosition: site.hero.image.position }} /><div className="bakery-hero__veil" /><div className="bakery-hero__content"><p className="eyebrow">{site.hero.eyebrow}</p><h1>{site.hero.title}</h1><div><p>{site.hero.text}</p><Button link={site.hero.cta} /></div><small>{site.hero.note}</small></div></section>;
}

function Specialties() {
  return <section className="specialties section" id="specialites"><div className="specialties__intro"><p className="eyebrow">{site.specialties.eyebrow}</p><h2>{site.specialties.title}</h2><p>{site.specialties.text}</p></div><div className="specialties__body"><img alt={site.specialties.image.alt} src={site.specialties.image.src} style={{ objectPosition: site.specialties.image.position }} /><div className="product-list">{site.specialties.products.map((product, index) => <article key={product.name}><span>0{index + 1}</span><div><p>{product.tag}</p><h3>{product.name}</h3><small>{product.detail}</small></div><strong>{product.price}</strong></article>)}</div></div></section>;
}

function Story() {
  return <section className="story" id="maison"><div className="story__copy"><p className="eyebrow">{site.story.eyebrow}</p><h2>{site.story.title}</h2><p>{site.story.text}</p><span>{site.story.stat}</span></div><img alt={site.story.image.alt} src={site.story.image.src} style={{ objectPosition: site.story.image.position }} /></section>;
}

function Visit() {
  return <section className="visit section" id="visite"><p className="eyebrow">{site.visit.eyebrow}</p><div className="visit__grid"><h2>{site.visit.title}</h2><div><address>{site.visit.address}</address>{site.visit.hours.map((hour) => <p key={hour}>{hour}</p>)}<Button link={site.visit.cta} dark /></div></div></section>;
}

function Preorder() {
  return <section className="preorder" id="precommande"><p className="eyebrow">{site.preorder.eyebrow}</p><h2>{site.preorder.title}</h2><p>{site.preorder.text}</p><Button link={site.preorder.cta} /><small>{site.preorder.note}</small></section>;
}

function Footer() {
  return <footer><a href="#/?section=top">{site.brand}</a><div><a href={`mailto:${site.footer.email}`}>{site.footer.email}</a><a href={`tel:${site.footer.phone.replaceAll(" ", "")}`}>{site.footer.phone}</a></div><div><span>{site.footer.city}</span><span>{site.footer.legal}</span></div></footer>;
}

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = new URLSearchParams(location.search).get("section");
    const target = sectionId ? document.getElementById(sectionId) : undefined;
    target?.scrollIntoView({ behavior: "smooth" });
  }, [location.search]);

  return null;
}

function Page() {
  const sections: Record<BakerySectionId, ReactNode> = { specialties: <Specialties />, story: <Story />, visit: <Visit />, preorder: <Preorder /> };
  const enabledSections = site.sections.filter((section, index, all) => section.enabled && all.findIndex((candidate) => candidate.id === section.id) === index);

  return <main style={getThemeStyle(site.theme)}><ScrollToSection /><Header /><Hero />{enabledSections.map((section) => <div key={section.id}>{sections[section.id]}</div>)}<Footer /></main>;
}

function NotFound() {
  return <main className="not-found" style={getThemeStyle(site.theme)}><Header /><section><p className="eyebrow">404</p><h1>{site.notFound.title}</h1><p>{site.notFound.text}</p><Button link={site.notFound.cta} /></section><Footer /></main>;
}

export function App() {
  return <Routes><Route path="/" element={<Page />} /><Route path="*" element={<NotFound />} /></Routes>;
}
