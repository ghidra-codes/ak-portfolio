import type { Variants } from "motion";
import { EASE_SURFACE } from "@/constants/animations";

export const fadeInScaleCard: Variants = {
	hidden: {
		opacity: 0.35,
		scale: 0.985,
		boxShadow: "0 0 0 rgba(0,0,0,0)",
	},
	visible: {
		opacity: 1,
		scale: 1,
		boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
		transition: {
			duration: 0.4,
			ease: EASE_SURFACE,
			boxShadow: { delay: 0.08 },
		},
	},
};
