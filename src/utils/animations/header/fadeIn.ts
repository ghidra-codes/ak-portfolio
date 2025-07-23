import { EASE_OUT_SLOW } from "@/constants/animations";
import { Variants } from "motion/react";

export const fadeIn: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.6,
			ease: EASE_OUT_SLOW,
		},
	},
};
