import type { Variants } from "motion/react";

export const fadeInSlideLeftGroup: { container: Variants; item: Variants } = {
	container: {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	},
	item: {
		hidden: { x: 50, opacity: 0 },
		show: { x: 0, opacity: 1 },
	},
};
