import type { ScrollDirections } from "@/components/about/tech-stack/TechStackSlider";
import { EASE_GENTLE_SPRING, EASE_IN_OUT, EASE_IN_OUT_SMOOTH } from "@/constants/animations";
import type { Variants } from "motion";

interface AnimateProps {
	index: number;
	total: number;
	direction: ScrollDirections;
	extraDelay: number;
}

export const fadeInBlurStaggered: Variants = {
	initial: {
		y: 25,
		scale: 0.6,
		opacity: 0,
		filter: "blur(4px)",
	},
	animate: ({ index, total, direction, extraDelay }: AnimateProps) => {
		const delay = direction === "left" ? extraDelay + 0.08 * index : 0.08 * (total - 1 - index);

		return {
			y: 0,
			scale: 1,
			opacity: 1,
			filter: "blur(0px)",
			transition: {
				y: {
					delay,
					duration: 0.45,
					ease: EASE_IN_OUT_SMOOTH,
				},
				scale: {
					delay,
					duration: 0.4,
					ease: EASE_GENTLE_SPRING,
				},
				filter: {
					delay,
					duration: 0.25,
					ease: EASE_IN_OUT,
				},
				opacity: {
					delay,
					duration: 0.3,
					ease: EASE_IN_OUT,
				},
			},
		};
	},
	exit: () => ({
		y: 0,
		scale: 1,
		opacity: 0,
		filter: "blur(2px)",
		transition: {
			duration: 0.3,
			ease: EASE_IN_OUT,
		},
	}),
};
