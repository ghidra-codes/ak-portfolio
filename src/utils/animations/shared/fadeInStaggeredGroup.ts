import type { Variants } from "motion/react";
import { EASE_OUT_SLOW } from "@/constants/animations";

/**
 * Standard fade-in with staggered children.
 */
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
		hidden: { opacity: 0, y: 28 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.45,
				type: "tween",
				ease: EASE_OUT_SLOW,
			},
		},
	},
};

/**
 * Mobile-optimized variant: Faster animations with tighter staggering.
 */
export const fadeInStaggeredGroupMobile: {
	container: Variants;
	item: Variants;
} = {
	container: {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.11,
				delayChildren: 0.19,
			},
		},
	},
	item: {
		hidden: { opacity: 0, y: 28 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.35,
				type: "tween",
				ease: EASE_OUT_SLOW,
			},
		},
	},
};
