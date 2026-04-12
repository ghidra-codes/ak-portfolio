import type { Variants } from "motion";
import { EASE_IN_OUT, EASE_OUT_SLOW } from "@/constants/animations";

export const fadeInMobileImage: Variants = {
	hidden: {
		opacity: 0,
		y: 36,
		scale: 0.965,
	},
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.48,
			ease: EASE_OUT_SLOW,
			type: "tween",
		},
	},
};

export const fadeInMobileDescription: Variants = {
	hidden: {
		opacity: 0,
		y: 24,
		scale: 0.985,
	},
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.36,
			ease: EASE_IN_OUT,
			type: "tween",
		},
	},
};
