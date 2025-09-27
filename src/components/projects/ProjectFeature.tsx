import filmFlare from "@/assets/images/filmflare-screenshot.png";
import TintedImage from "../ui/TintedImage";

const ProjectFeature = () => {
	return (
		<div className="project-feature">
			<TintedImage
				src={filmFlare}
				alt="Screenshot from film flare site"
				imageClass="project-image"
				wrapperClass="project-image-wrapper"
			/>
		</div>
	);
};

export default ProjectFeature;
