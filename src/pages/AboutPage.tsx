import AboutContent from "../components/AboutContent";
import TechStack from "../components/TechStack";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "../hooks/useActiveSection";

export default function AboutPage() {
	const { ref: aboutContentRef, inView: aboutContentInView } = useInView({ threshold: 0.3 });
	const { ref: techStackRef, inView: techStackInView } = useInView({ threshold: 0.2 });

	const setActiveSection = useActiveSection((state) => state.setActiveSection);

	useEffect(() => {
		if (aboutContentInView || techStackInView) setActiveSection("about");
	}, [aboutContentInView, techStackInView, setActiveSection]);

	return (
		<section id="about">
			<div id="aboutContent" ref={aboutContentRef}>
				<AboutContent />
			</div>
			<div id="techStack" ref={techStackRef}>
				<TechStack />
			</div>
		</section>
	);
}
