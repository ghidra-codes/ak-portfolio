import { EASE_IN_OUT_SMOOTH } from "@/constants/animations";
import { Variants } from "motion/react";

export const fadeInSlideImage: Variants = {
	hidden: { opacity: 0, scale: 0.95 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.4,
			ease: EASE_IN_OUT_SMOOTH,
		},
	},
};
