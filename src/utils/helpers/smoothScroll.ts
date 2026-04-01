/**
 * Smooth scroll to an element by ID
 */
export const smoothScrollTo = (elementId: string) => {
	const element = document.getElementById(elementId);
	if (element) window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
};
