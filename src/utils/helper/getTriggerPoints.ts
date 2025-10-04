import { TriggerPoint } from "@/types/sections.types";

/**
 * Computes scroll trigger points for each page section.
 * Returns an array of sections with enter/leave positions used for scroll tracking.
 */
const getTriggerPoints = (): TriggerPoint[] => {
	const sections = document.querySelectorAll("section[id]");
	const screenHeight = window.innerHeight;

	const points: TriggerPoint[] = [];

	sections.forEach((section) => {
		const el = section as HTMLElement;
		const top = el.offsetTop;
		const id = el.id;

		const enter = top - screenHeight * 0.15;
		const leave = top - screenHeight * 0.2;

		points.push({ id, enter, leave });
	});

	points.sort((a, b) => a.enter - b.enter);

	return points;
};

export default getTriggerPoints;
