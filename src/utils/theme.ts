import type { CSSProperties } from "react";
import type { BakerySite } from "../types";

type ThemeVariable = "--bakery-canvas" | "--bakery-ink" | "--bakery-dark" | "--bakery-accent" | "--bakery-accent-soft" | "--bakery-muted" | "--bakery-light-ink" | "--bakery-display-font" | "--bakery-body-font";
export type ThemeStyle = CSSProperties & Record<ThemeVariable, string>;

export function getBakeryThemeStyle(theme: BakerySite["theme"]): ThemeStyle {
  return {
    "--bakery-canvas": theme.canvas,
    "--bakery-ink": theme.ink,
    "--bakery-dark": theme.dark,
    "--bakery-accent": theme.accent,
    "--bakery-accent-soft": theme.accentSoft,
    "--bakery-muted": theme.muted,
    "--bakery-light-ink": theme.lightInk,
    "--bakery-display-font": theme.displayFont,
    "--bakery-body-font": theme.bodyFont,
  };
}
