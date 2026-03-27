import { FaFigma } from "react-icons/fa6";
import { FiGithub, FiLink } from "react-icons/fi";

export const projectLinksMap = {
	github: {
		Icon: FiGithub,
		label: "GitHub",
	},
	site: {
		Icon: FiLink,
		label: "Live site",
	},
	figma: {
		Icon: FaFigma,
		label: "Figma design",
	},
} as const;

export type ProjectLinkKey = keyof typeof projectLinksMap;
