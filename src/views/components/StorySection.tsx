import type { BakerySite } from "../../types";

type StorySectionProps = { story: BakerySite["story"] };

export function StorySection({ story }: StorySectionProps) {
  return <section className="story" id="maison"><div className="story__copy"><p className="eyebrow">{story.eyebrow}</p><h2>{story.title}</h2><p>{story.text}</p><span>{story.stat}</span></div><img alt={story.image.alt} src={story.image.src} style={{ objectPosition: story.image.position }} /></section>;
}
