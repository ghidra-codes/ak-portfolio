export const fadeInSlideX = {
	hidden: (direction: "left" | "right") => ({
		opacity: 0,
		x: direction === "left" ? -80 : 80,
	}),
	visible: {
		opacity: 1,
		x: 0,
	},
};
