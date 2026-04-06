import { prefersReducedMotion } from "./prefersReducedMotion";

/**
 * Smooth scroll to an element by ID
 */
export const smoothScrollTo = (elementId: string) => {
	const element = document.getElementById(elementId);
	if (!element) return;

	const navbarHeight = document.querySelector(".navbar")?.getBoundingClientRect().height ?? 0;
	const targetTop = element.getBoundingClientRect().top + window.scrollY - navbarHeight;

	window.scrollTo({ top: targetTop, behavior: prefersReducedMotion() ? "auto" : "smooth" });
	element.focus({ preventScroll: true });
};
