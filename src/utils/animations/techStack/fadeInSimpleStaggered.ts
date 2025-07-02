export const fadeInSimpleStaggered = {
	initial: {
		opacity: 0,
		y: 75,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};
