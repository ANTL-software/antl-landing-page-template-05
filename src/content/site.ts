import bakerStory from "../assets/baker-story.png";
import bakeryHero from "../assets/bakery-hero.png";
import pastryCollection from "../assets/pastry-collection.png";
import type { BakerySite } from "../types/site";

export const site: BakerySite = {
  theme: { canvas: "#f4ede1", ink: "#34251b", dark: "#34251b", accent: "#bd5d37", accentSoft: "#e8bf8c", muted: "#78685d", lightInk: "#fffaf2", displayFont: '"DM Serif Display", Georgia, serif', bodyFont: '"DM Sans", Arial, sans-serif' },
  brand: "Maison Levain",
  navigation: [{ label: "La vitrine", href: "#/?section=specialites" }, { label: "Notre geste", href: "#/?section=maison" }, { label: "Nous trouver", href: "#/?section=visite" }],
  hero: { eyebrow: "Boulangerie & pâtisserie — Rochefort", title: "Le bon pain\nfait sa journée.", text: "Des farines choisies, du temps et beaucoup de gestes. Tout est façonné et cuit ici, dès l’aube.", cta: { label: "Précommander", href: "#/?section=precommande" }, note: "Ouvert du mardi au dimanche dès 7h", image: { src: bakeryHero, alt: "Pains, croissants et pâtisseries artisanales sur le comptoir de la boulangerie", position: "center" } },
  specialties: { eyebrow: "La vitrine du jour", title: "Ce qui vient de sortir du four.", text: "Quelques classiques bien faits, des saisons qui changent et des quantités volontairement limitées.", image: { src: pastryCollection, alt: "Assortiment de pâtisseries artisanales : tartelettes, éclair et choux", position: "center" }, products: [{ name: "Pain de campagne", detail: "Levain naturel · farine T80", price: "5,40 €", tag: "Chaque jour" }, { name: "Croissant pur beurre", detail: "Feuilleté minute · AOP Charentes-Poitou", price: "1,35 €", tag: "Dès 7h" }, { name: "Tarte framboise", detail: "Crème légère · fruits de saison", price: "4,90 €", tag: "Week-end" }, { name: "Entremets à partager", detail: "6 personnes · sur commande", price: "28 €", tag: "Précommande" }] },
  story: { eyebrow: "Notre geste", title: "Du temps, de la farine, rien à masquer.", text: "Nos pâtes fermentent lentement, nos viennoiseries sont tourées à la main et nos recettes suivent les arrivages. Une boulangerie de quartier pensée pour les habitudes du quotidien comme les grandes tablées.", image: { src: bakerStory, alt: "Boulanger façonnant un pain au levain sur un plan de travail fariné", position: "center" }, stat: "03h30 · première fournée" },
  visit: { eyebrow: "Passer à la boutique", title: "On vous garde une place à table.", address: "12 rue du Marché, 17300 Rochefort", hours: ["Mardi — Vendredi · 7h — 19h", "Samedi · 7h — 18h", "Dimanche · 7h — 13h"], cta: { label: "Préparer ma visite", href: "https://maps.google.com" } },
  preorder: {
    eyebrow: "Pour les grandes occasions",
    title: "Un goûter, un brunch, une table à imaginer ?",
    text: "Gâteaux à partager, viennoiseries du dimanche et commandes d’entreprise : dites-nous simplement pour combien vous êtes.",
    action: {
      mode: "inquiry",
      cta: { label: "Faire une demande", href: "mailto:bonjour@maison-levain.fr" },
      note: "Réponse sous 24h ouvrées · Retrait boutique",
    },
  },
  footer: { email: "bonjour@maison-levain.fr", phone: "05 46 00 00 00", city: "Rochefort · Charente-Maritime", legal: "© 2026 Maison Levain" },
  notFound: { title: "Cette miette est introuvable.", text: "La page demandée a peut-être quitté la vitrine.", cta: { label: "Retour à la boutique", href: "#/" } },
  sections: [{ id: "specialties", enabled: true }, { id: "story", enabled: true }, { id: "visit", enabled: true }, { id: "preorder", enabled: true }],
};
