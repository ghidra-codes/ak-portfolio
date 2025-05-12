import AboutContent from "../components/AboutContent";
import TechStack from "../components/TechStack";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "../hooks/useActiveSection";

export default function AboutPage() {
	const { ref, inView } = useInView({ threshold: 0.3 });
	const setActiveSection = useActiveSection((state) => state.setActiveSection);

	useEffect(() => {
		if (inView) {
			setActiveSection("about");
		}
	}, [inView, setActiveSection]);

	return (
		<section ref={ref} id="about">
			<div id="aboutContent">
				<AboutContent />
			</div>
			<div id="techStack">
				<TechStack />
			</div>
		</section>
	);
}
