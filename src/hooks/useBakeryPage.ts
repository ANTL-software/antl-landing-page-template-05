import { site } from "../content/site";
import { getEnabledBakerySections } from "../utils/sections";

export function useBakeryPage() {
  return { site, sectionIds: getEnabledBakerySections(site.sections) };
}
