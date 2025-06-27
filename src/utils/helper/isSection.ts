import { SECTIONS } from "@/constants/sections";

export const isSection = (value: string): value is (typeof SECTIONS)[number] => {
	return (SECTIONS as readonly string[]).includes(value);
};

export default isSection;
