import type { CATEGORY_INFO, TECH_STACK } from "@/constants/techStack";

export type Tech = (typeof TECH_STACK)[number];

export type Categories = keyof typeof CATEGORY_INFO;

export type GroupedCategories = Record<Categories, Tech[]>;
