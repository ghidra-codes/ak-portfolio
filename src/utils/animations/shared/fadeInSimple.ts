import { EASE_OUT_SLOW } from "@/constants/animations";

export const fadeInSimple = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	transition: { duration: 1.5, ease: EASE_OUT_SLOW },
};
