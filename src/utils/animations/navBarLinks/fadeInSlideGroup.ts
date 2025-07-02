export const fadeInSlideGroup = {
	container: {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.2,
			},
		},
	},
	item: {
		hidden: { x: 50, opacity: 0 },
		show: { x: 0, opacity: 1 },
	},
};
