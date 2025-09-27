import AboutContent from "@/components/about/AboutContent";
import TechStack from "@/components/about/tech-stack/TechStack";
import Decoration from "../layout/Decoration";

export default function About() {
	return (
		<>
			<div id="about-content">
				<AboutContent />
				<Decoration variant="triangle" />
			</div>
			<div id="tech-stack">
				<TechStack />
				<Decoration variant="diamond" />
				<Decoration variant="square" />
			</div>
		</>
	);
}
