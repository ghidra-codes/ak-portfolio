import TintedImage, { TintedImageProps } from "../ui/TintedImage";
import React from "react";

type ProjectImageProps = Omit<TintedImageProps, "children" | "triggerPopIn">;
interface ProjectFeatureProps {
	imageProps: ProjectImageProps;
	children: React.ReactNode;
}

const ProjectFeature: React.FC<ProjectFeatureProps> = ({ imageProps, children }) => {
	return (
		<div className="project-feature">
			<TintedImage {...imageProps} />
			{children}
		</div>
	);
};

export default ProjectFeature;
