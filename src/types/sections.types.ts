import type { SECTIONS } from "@/constants/sections";

export type Section = (typeof SECTIONS)[number];

export interface TriggerPoint {
	id: string;
	enter: number;
	leave: number;
}
