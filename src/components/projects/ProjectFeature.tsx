import TintedImage, { TintedImageProps } from "../ui/TintedImage";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLink } from "react-icons/fi";

type ProjectImageProps = Omit<TintedImageProps, "children" | "triggerPopIn">;
interface ProjectFeatureProps {
	imageProps: ProjectImageProps;
	heading: React.ReactNode;
	description: React.ReactNode;
}

const ProjectFeature: React.FC<ProjectFeatureProps> = ({ imageProps, heading, description }) => {
	return (
		<div className="project-feature">
			<div className="left">
				<TintedImage {...imageProps} />
			</div>
			<div className="right">
				<div className="project-heading">
					<span>
						<FiGithub />
						<FiLink />
					</span>
					{heading}
				</div>
				<div className="project-description">{description}</div>
			</div>
		</div>
	);
};

export default ProjectFeature;
