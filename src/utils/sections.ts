import type { BakerySectionId, BakerySite } from "../types";

export function getEnabledBakerySections(sections: BakerySite["sections"]): readonly BakerySectionId[] {
  const seen = new Set<BakerySectionId>();

  return sections.flatMap((section) => {
    if (!section.enabled || seen.has(section.id)) return [];
    seen.add(section.id);
    return [section.id];
  });
}
