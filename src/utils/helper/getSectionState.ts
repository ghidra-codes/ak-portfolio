import { SECTIONS } from "@/constants/sections";
import type { Section } from "@/types/sections.types";

/**
 * Returns the state of a navigation section for styling and animations.
 *
 * Determines if it's currently active, should erase underline, or is the last section.
 */
const getSectionState = (
	section: Section,
	index: number,
	activeSection: Section | null,
	prevActiveSection: Section | null,
) => ({
	isActive: activeSection === section,
	eraseUnderline: prevActiveSection === section && activeSection !== section,
	isLast: index === SECTIONS.length - 1,
});

export default getSectionState;
