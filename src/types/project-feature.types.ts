import { StaticTintedImageProps } from "./tinted-image.types";

export interface ProjectFeatureLayoutProps {
	imageProps: StaticTintedImageProps;
	heading: React.ReactNode;
	description: React.ReactNode;
	projectIcons: React.ReactNode;
	onShowProjectIcons: () => void;
	onShowProjectLinks: () => void;
	showProjectIcons: boolean;
	showProjectLinks: boolean;
	reverse?: boolean;
}
