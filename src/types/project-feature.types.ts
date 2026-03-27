import type React from "react";
import type { StaticTintedImageProps } from "./tinted-image.types";

export interface ProjectFeatureLayoutProps {
	imageProps: StaticTintedImageProps;
	heading: React.ReactNode;
	description: React.ReactNode;
	projectIcons: React.ReactNode;
	projectLinks?: ProjectLinks;
	showIcons: boolean;
	triggerIcons: () => void;
	reverse?: boolean;
}

export interface ProjectLinks {
	github?: string;
	site?: string;
	figma?: string;
}
