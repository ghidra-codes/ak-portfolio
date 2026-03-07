import { FaRegFolder } from "react-icons/fa6";
import RevealAnimation from "../ui/RevealAnimation";

const FeatureDivider = () => {
	return (
		<RevealAnimation setFullWidth>
			<div className="project-feature-divider-container">
				<div className="feature-divider-line left" />

				<FaRegFolder className="feature-divider-icon" />

				<div className="feature-divider-line right" />
			</div>
		</RevealAnimation>
	);
};

export default FeatureDivider;
