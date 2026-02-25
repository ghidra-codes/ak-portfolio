import { StaticTintedImageProps } from "@/types/tinted-image.types";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";
import classNames from "classnames";

interface ProjectFeatureProps {
	imageProps: StaticTintedImageProps;
	heading: React.ReactNode;
	description: React.ReactNode;
	projectIcons: React.ReactNode;
	reverse?: boolean;
}

const ProjectFeature: React.FC<ProjectFeatureProps> = ({
	imageProps,
	heading,
	description,
	projectIcons,
	reverse = false,
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
		<div
			className={classNames("project-feature", {
				"is-mobile": isSmallScreen,
				"is-desktop": !isSmallScreen,
				"is-reversed": reverse,
			})}
		>
			{isSmallScreen ? (
				<MobileLayout {...sharedProps} />
			) : (
				<DesktopLayout {...sharedProps} reverse={reverse} />
			)}
		</div>
	);
};

export default ProjectFeature;
