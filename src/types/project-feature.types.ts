import type React from "react";
import type { ProjectLinkKey } from "@/constants/projectLinks";
import type { StaticTintedImageProps } from "./tinted-image.types";

export type ProjectLinks = Partial<Record<ProjectLinkKey, string>>;

export interface FeaturedProject {
	id: string;
	title: string;
	description: string;
	image: {
		src: string;
		alt: string;
	};
	icons: string[];
	links: ProjectLinks;
	reverse?: boolean;
}

export interface ProjectFeatureLayoutProps {
	imageProps: StaticTintedImageProps;
	heading: React.ReactNode;
	description: React.ReactNode;
	projectIcons: React.ReactNode;
	projectLinks: ProjectLinks;
	showIcons: boolean;
	triggerIcons: () => void;
	reverse?: boolean;
}
