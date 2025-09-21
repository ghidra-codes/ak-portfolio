import AboutContent from "@/components/about/AboutContent";
import TechStack from "@/components/about/tech-stack/TechStack";
import Decoration from "../layout/Decoration";

export default function About() {
	return (
		<>
			<div id="about-content">
				<AboutContent />
			</div>
			<div id="tech-stack">
				<TechStack />

				<Decoration variant="square" />
			</div>
		</>
	);
}
