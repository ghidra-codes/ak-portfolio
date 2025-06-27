export const SECTIONS = ["home", "about", "projects"] as const;

export type Section = (typeof SECTIONS)[number];
