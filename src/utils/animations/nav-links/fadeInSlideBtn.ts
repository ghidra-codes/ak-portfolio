import { EASE_OUT_SLOW } from "@/constants/animations";
import type { Variants } from "motion/react";

export const fadeInSlideBtn: Variants = {
	hidden: { opacity: 0, x: 100 },
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.3,
			ease: EASE_OUT_SLOW,
		},
	},
};

export const fadeInSlideBtnSmallScreen: Variants = {
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
