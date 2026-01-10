import { SECTIONS } from "@/constants/sections";

const isSection = (value: string): value is (typeof SECTIONS)[number] =>
	SECTIONS.some((section) => section === value);

export default isSection;
