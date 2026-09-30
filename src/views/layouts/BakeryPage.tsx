import type { ReactNode } from "react";
import { useBakeryPage } from "../../hooks/useBakeryPage";
import type { BakerySectionId } from "../../types";
import { getBakeryThemeStyle } from "../../utils/theme";
import { HeroSection, PreorderSection, SiteFooter, SiteHeader, SpecialtiesSection, StorySection, VisitSection } from "../components";

export function BakeryPage() {
  const { site, sectionIds } = useBakeryPage();
  const sections: Record<BakerySectionId, ReactNode> = {
    specialties: <SpecialtiesSection specialties={site.specialties} />,
    story: <StorySection story={site.story} />,
    visit: <VisitSection visit={site.visit} />,
    preorder: <PreorderSection preorder={site.preorder} />,
  };

  return <main style={getBakeryThemeStyle(site.theme)}><SiteHeader brand={site.brand} navigation={site.navigation} /><HeroSection hero={site.hero} />{sectionIds.map((sectionId) => <div key={sectionId}>{sections[sectionId]}</div>)}<SiteFooter brand={site.brand} footer={site.footer} /></main>;
}
