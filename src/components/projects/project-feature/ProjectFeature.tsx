import { StaticTintedImageProps } from "@/types/tinted-image.types";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

interface ProjectFeatureProps {
	imageProps: StaticTintedImageProps;
	heading: React.ReactNode;
	description: React.ReactNode;
	projectIcons: React.ReactNode;
}

const ProjectFeature: React.FC<ProjectFeatureProps> = ({
	imageProps,
	heading,
	description,
	projectIcons,
}) => {
	const [showProjectIcons, setShowProjectIcons] = useState(false);
	const [showProjectLinks, setShowProjectLinks] = useState(false);

	const isSmallScreen = useMediaQuery({ maxWidth: 1024 });

	const sharedProps = {
		imageProps,
		heading,
		description,
		projectIcons,
		onShowProjectIcons: () => setShowProjectIcons(true),
		onShowProjectLinks: () => setShowProjectLinks(true),
		showProjectIcons,
		showProjectLinks,
	};

	return (
		<div className={`project-feature ${isSmallScreen ? "is-mobile" : "is-desktop"}`}>
			{isSmallScreen ? <MobileLayout {...sharedProps} /> : <DesktopLayout {...sharedProps} />}
		</div>
	);
};

export default ProjectFeature;
