import { useBakeryPage } from "../../hooks/useBakeryPage";
import { getBakeryThemeStyle } from "../../utils/theme";
import { ButtonLink, SiteFooter, SiteHeader } from "../components";

export function BakeryNotFoundPage() {
  const { site } = useBakeryPage();

  return <main className="not-found" style={getBakeryThemeStyle(site.theme)}><SiteHeader brand={site.brand} navigation={site.navigation} /><section><p className="eyebrow">404</p><h1>{site.notFound.title}</h1><p>{site.notFound.text}</p><ButtonLink link={site.notFound.cta} /></section><SiteFooter brand={site.brand} footer={site.footer} /></main>;
}
