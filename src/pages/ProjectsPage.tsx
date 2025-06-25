import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function ProjectsPage() {
	const { ref, inView } = useInView({ threshold: 0.3 });
	const setActiveSection = useActiveSection((state) => state.setActiveSection);

	useEffect(() => {
		if (inView) {
			setActiveSection("projects");
		}
	}, [inView, setActiveSection]);

	return (
		<section ref={ref} id="projects">
			<h2>Projects page</h2>
		</section>
	);
}
