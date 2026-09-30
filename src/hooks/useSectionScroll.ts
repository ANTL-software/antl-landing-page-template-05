import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useSectionScroll() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = new URLSearchParams(location.search).get("section");
    const target = sectionId ? document.getElementById(sectionId) : undefined;
    target?.scrollIntoView({ behavior: "smooth" });
  }, [location.search]);
}
