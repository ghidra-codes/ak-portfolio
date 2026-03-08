import { EASE_OUT_SLOW } from "@/constants/animations";
import type { Variants } from "motion/react";

export const fadeInStaggeredGroup: {
	container: Variants;
	item: Variants;
} = {
	container: {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.25,
			},
		},
	},
	item: {
		hidden: { opacity: 0, y: 75 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				type: "tween",
				ease: EASE_OUT_SLOW,
			},
		},
	},
};
