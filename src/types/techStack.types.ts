import { categoryInfo, techStack } from "@/constants/techStack";

export type Tech = (typeof techStack)[number];

export type Categories = keyof typeof categoryInfo;

export type GroupedCategories = Record<Categories, Tech[]>;
