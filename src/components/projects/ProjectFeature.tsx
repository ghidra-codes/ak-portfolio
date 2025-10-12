import TintedImage, { TintedImageProps } from "../ui/TintedImage";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLink } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";

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
	const isSmallScreen = useMediaQuery({ maxWidth: 1024 });

	return (
		<div className={`project-feature ${isSmallScreen ? "is-mobile" : "is-desktop"}`}>
			{isSmallScreen ? (
				<>
					<div className="top">
						<TintedImage {...imageProps} />
						{heading}
					</div>
					<div className="bottom">
						<div className="project-icons">{projectIcons}</div>
						<span>
							<FiGithub className="project-link-icon" />
							<FiLink className="project-link-icon" />
						</span>
						<div className="project-description">{description}</div>
					</div>
				</>
			) : (
				<>
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
				</>
			)}
		</div>
	);
};

export default ProjectFeature;
