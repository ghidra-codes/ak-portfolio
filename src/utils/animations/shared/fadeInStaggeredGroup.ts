import { EASE_OUT_SLOW } from "@/constants/animations";
import { Variants } from "motion/react";

export const fadeInStaggeredGroup: {
	container: Variants;
	child: Variants;
} = {
	container: {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.25,
			},
		},
	},
	child: {
		hidden: { opacity: 0, y: 75 },
		visible: {
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
