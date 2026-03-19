import classNames from "classnames";
import type { FC } from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import type { StaticTintedImageProps } from "@/types/tinted-image.types";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

interface ProjectFeatureProps {
	imageProps: StaticTintedImageProps;
	heading: React.ReactNode;
	description: React.ReactNode;
	projectIcons: React.ReactNode;
	reverse?: boolean;
}

const ProjectFeature: FC<ProjectFeatureProps> = ({
	imageProps,
	heading,
	description,
	projectIcons,
	reverse = false,
}) => {
	const isSmallScreen = useMediaQuery({ maxWidth: 1024 });

	const [showIcons, setShowIcons] = useState(false);

	const triggerIcons = () => {
		if (showIcons) return;

		setShowIcons(true);
	};

	const sharedProps = {
		imageProps,
		heading,
		description,
		projectIcons,
		showIcons,
		triggerIcons,
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
