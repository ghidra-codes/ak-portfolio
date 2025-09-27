import SectionHeader from "../layout/SectionHeader";
import RevealAnimation from "../ui/RevealAnimation";
import ProjectFeature from "./ProjectFeature";

export default function Projects() {
	return (
		<>
			<RevealAnimation width="100%">
				<SectionHeader title="Projects" />
				<h3>Some Things I've Made</h3>
			</RevealAnimation>
			<ProjectFeature />
		</>
	);
}
