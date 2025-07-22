// utils/animations/shared/fadeInStaggeredGroupSlower.ts
import { EASE_OUT_SLOW } from "@/constants/animations";
import { Variants } from "motion/react";

export const fadeInStaggeredGroupSlower: {
	container: Variants;
	child: Variants;
} = {
	container: {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.25,
			},
		},
	},
	child: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.6,
				type: "tween",
				ease: EASE_OUT_SLOW,
			},
		},
	},
};
