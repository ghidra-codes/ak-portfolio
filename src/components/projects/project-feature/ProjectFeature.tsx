import classNames from "classnames";
import type { FC } from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import type { ProjectLinks } from "@/types/project-feature.types";
import type { StaticTintedImageProps } from "@/types/tinted-image.types";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

interface ProjectFeatureProps {
	id: string;
	imageProps: StaticTintedImageProps;
	heading: React.ReactNode;
	description: React.ReactNode;
	projectIcons: React.ReactNode;
	projectLinks: ProjectLinks;
	reverse?: boolean;
}

const ProjectFeature: FC<ProjectFeatureProps> = ({
	id,
	imageProps,
	heading,
	description,
	projectIcons,
	projectLinks,
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
		projectLinks,
		showIcons,
		triggerIcons,
	};

	return (
		<div
			id={id}
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
