import { EASE_OUT_SLOW } from "@/constants/animations";
import { Variants } from "motion/react";

export const fadeInSlideDownwardGroup: { container: Variants; item: Variants } = {
	container: {
		show: {
			transition: {
				staggerChildren: 0.2,
			},
		},
		hidden: {},
	},
	item: {
		hidden: { opacity: 0, y: -70 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.3,
				ease: EASE_OUT_SLOW,
			},
		},
	},
};
