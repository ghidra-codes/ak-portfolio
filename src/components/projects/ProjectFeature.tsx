import TintedImage, { TintedImageProps } from "../ui/TintedImage";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLink } from "react-icons/fi";

type ProjectImageProps = Omit<TintedImageProps, "children" | "triggerPopIn">;
interface ProjectFeatureProps {
	imageProps: ProjectImageProps;
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
	return (
		<div className="project-feature">
			<div className="left">
				<TintedImage {...imageProps} />
				<div className="project-icons">{projectIcons}</div>
			</div>
			<div className="right">
				<div className="project-heading">
					<span>
						<FiGithub className="project-link-icon" />
						<FiLink className="project-link-icon" />
					</span>
					{heading}
				</div>
				<div className="project-description">{description}</div>
			</div>
		</div>
	);
};

export default ProjectFeature;
