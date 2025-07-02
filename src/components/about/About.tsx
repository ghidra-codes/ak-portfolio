import AboutContent from "@/components/about/AboutContent";
import TechStack from "@/components/about/tech-stack/TechStack";

export default function About() {
	return (
		<>
			<div id="aboutContent">
				<AboutContent />
			</div>
			<div id="techStack">
				<TechStack />
			</div>
		</>
	);
}
