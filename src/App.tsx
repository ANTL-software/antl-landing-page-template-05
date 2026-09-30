import { Route, Routes } from "react-router-dom";
import { useSectionScroll } from "./hooks/useSectionScroll";
import { BakeryNotFoundPage, BakeryPage } from "./views/layouts";

export function App() {
  useSectionScroll();

  return <Routes><Route path="/" element={<BakeryPage />} /><Route path="*" element={<BakeryNotFoundPage />} /></Routes>;
}
