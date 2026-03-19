import type { Variants } from "motion";
import { EASE_CONTENT } from "@/constants/animations";

export const fadeInContent: Variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 0.18,
			duration: 0.25,
			ease: EASE_CONTENT,
		},
	},
};
