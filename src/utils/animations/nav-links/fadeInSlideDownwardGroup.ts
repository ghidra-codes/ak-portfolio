import type { Variants } from "motion/react";
import { EASE_OUT_SLOW } from "@/constants/animations";

export const fadeInSlideDownwardGroup: { container: Variants; item: Variants } = {
	container: {
		show: {
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
		hidden: {},
	},
	item: {
		hidden: { opacity: 0, y: -50 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.25,
				ease: EASE_OUT_SLOW,
			},
		},
	},
};
