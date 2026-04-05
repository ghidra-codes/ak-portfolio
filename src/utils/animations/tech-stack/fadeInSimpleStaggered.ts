import type { Variants } from "motion";

type StaggerMeta = {
	i: number;
	cols: number;
};

const STAGGER_STEP = 0.1;

export const fadeInSimpleStaggered: Variants = {
	initial: {
		opacity: 0,
		y: 40,
	},
	animate: ({ i, cols }: StaggerMeta) => {
		const row = Math.floor(i / cols);
		const col = i % cols;
		const colOrder = row % 2 === 1 ? cols - 1 - col : col;
		const delay = (row * cols + colOrder) * STAGGER_STEP;

		return {
			opacity: 1,
			y: 0,
			transition: {
				delay,
			},
		};
	},
};
