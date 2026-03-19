import type { Variants } from "motion";
import { EASE_OUT_SLOW } from "@/constants/animations";

export const fadeInSlideX: Variants = {
	hidden: (direction: "left" | "right") => ({
		opacity: 0,
		x: direction === "left" ? -80 : 80,
	}),
	visible: (direction: "left" | "right") => ({
		opacity: [0, 1, 1],
		x: 0,
		transition: {
			duration: 0.8,
			ease: EASE_OUT_SLOW,
			delay: direction === "right" ? 0.1 : 0,
			opacity: {
				times: [0, 0.8, 1],
				duration: 0.8,
			},
		},
	}),
};
