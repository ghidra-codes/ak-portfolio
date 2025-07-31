import { SECTIONS } from "@/constants/sections";
import { Section } from "@/types/sections.types";

const getSectionState = (
	section: Section,
	index: number,
	activeSection: Section | null,
	prevActiveSection: Section | null
) => ({
	isActive: activeSection === section,
	eraseUnderline: prevActiveSection === section && activeSection !== section,
	isLast: index === SECTIONS.length - 1,
});

export default getSectionState;
