import type { ProjectLinks } from "@/types/project-feature.types";

interface OtherProject {
	id: string;
	title: string;
	description: string;
	links: ProjectLinks;
	technologies: string[];
}

export const OTHER_PROJECTS: OtherProject[] = [
	{
		id: "ourgreencar",
		title: "OurGreenCar",
		description:
			"OurGreenCar is a platform for managing shared electric vehicle pools, enabling users to book, track, and administer vehicles. During my internship at OAWA, I worked primarily on the frontend, building features such as Google Maps integrations and FAQ search, while contributing to other core parts of the platform within an existing Laravel system.",
		links: {
			site: "https://ourgreencar.se/",
		},
		technologies: ["Laravel", "JavaScript", "MySQL"],
	},
	{
		id: "glam-by-kt",
		title: "Glam By KT",
		description:
			"Designed and developed a production website for a professional hair and makeup brand, with a focus on responsive design, accessibility, multilingual content, and a polished premium UI. I also used the project to explore an AI-assisted workflow with Lovable for early prototyping before continuing development manually.",
		links: {
			site: "https://glambykt.se/",
			github: "https://github.com/ghidra-codes/glam-by-kt",
		},
		technologies: ["React", "TypeScript", "TanStack Start", "Tailwind CSS"],
	},
	{
		id: "nadjas-levande-tradvard",
		title: "Nadjas Levande Trädvård",
		description:
			"Designed and developed a modern, mobile-friendly website for my sister’s arborist business, focused on clearly presenting services, showcasing before-and-after work, and making it easy for customers to get in touch.",
		links: {
			site: "https://nadjas-levande-tradvard.se/",
			github: "https://github.com/ghidra-codes/nadjas-levande-tradvard",
		},
		technologies: ["React", "TypeScript", "Vite", "i18next"],
	},
	{
		id: "photo-api",
		title: "Photo API",
		description:
			"A full-featured REST API for photo and album management. Features JWT authentication, database design with relational models, and comprehensive input validation.",
		links: {
			github: "https://github.com/ghidra-codes/photo-api",
		},
		technologies: ["Node.js", "Express.js", "TypeScript", "Prisma ORM"],
	},
	{
		id: "ak-portfolio",
		title: "AK Portfolio",
		description:
			"A React and TypeScript portfolio project focused on polished UI and animation, built with Motion for smooth transitions, interactive elements, and animated section reveals.",
		links: {
			github: "https://github.com/ghidra-codes/ak-portfolio",
		},
		technologies: ["React", "TypeScript", "Vite", "Motion"],
	},
];
