import { EASE_OUT_SLOW } from "@/constants/animations";
import { Variants } from "motion/react";

export const fadeInSlideBtn: Variants = {
	hidden: { opacity: 0, y: -70 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
			ease: EASE_OUT_SLOW,
		},
	},
};
