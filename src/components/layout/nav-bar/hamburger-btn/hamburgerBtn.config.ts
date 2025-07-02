export const hamburgerBtnConfigs = [
	{
		key: "top",
		style: { left: "50%", top: "35%", x: "-50%", y: "-50%" },
		variants: {
			open: { rotate: ["0deg", "0deg", "45deg"], top: ["35%", "50%", "50%"] },
			closed: { rotate: ["45deg", "0deg", "0deg"], top: ["50%", "50%", "35%"] },
		},
	},
	{
		key: "middle",
		style: { left: "50%", top: "50%", x: "-50%", y: "-50%" },
		variants: {
			open: { rotate: ["0deg", "0deg", "-45deg"] },
			closed: { rotate: ["-45deg", "0deg", "0deg"] },
		},
	},
	{
		key: "bottom",
		style: { left: "50%", bottom: "35%", x: "-50%", y: "50%" },
		variants: {
			open: { rotate: ["0deg", "0deg", "45deg"], bottom: ["35%", "50%", "50%"] },
			closed: { rotate: ["45deg", "0deg", "0deg"], bottom: ["50%", "50%", "35%"] },
		},
	},
];
