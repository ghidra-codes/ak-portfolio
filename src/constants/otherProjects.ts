import type { ProjectLinks } from "@/types/project-feature.types";

interface OtherProject {
	id: string;
	title: string;
	description: string;
	links: ProjectLinks;
}

export const OTHER_PROJECTS: OtherProject[] = [
	{
		id: "nadjas-levande-tradvard",
		title: "Nadjas Levande Trädvård",
		description:
			"I designed and developed a modern, mobile-friendly website for my sister’s arborist business, focused on clearly presenting services, showcasing before-and-after work, and making it easy for customers to get in touch.",
		links: {
			github: "asd",
			site: "asd",
		},
	},
];
