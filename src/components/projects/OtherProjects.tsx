import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { OTHER_PROJECTS } from "@/constants/otherProjects";
import { fadeInContent } from "@/utils/animations/other-projects/fadeInContent";
import { fadeInScaleCard } from "@/utils/animations/other-projects/fadeInScaleCard";
import ProjectLinks from "./project-feature/ProjectLinks";

const OtherProjects = () => {
	const scrollRef = useRef<HTMLDivElement | null>(null);

	const { scrollYProgress } = useScroll({ container: scrollRef });

	const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

	return (
		<div className="other-projects-container">
			<div ref={scrollRef} className="other-projects-scroll">
				{OTHER_PROJECTS.map(({ id, title, description, links }) => (
					<motion.div
						key={id}
						className="other-project"
						variants={fadeInScaleCard}
						initial="hidden"
						viewport={{ root: scrollRef, amount: 0.6, once: true }}
						whileInView="visible"
					>
						<motion.div className="other-project-content" variants={fadeInContent}>
							<div className="header">
								<h3 className="title">{title}</h3>

								<div className="links">
									<ProjectLinks links={links} />
								</div>
							</div>
							<p className="description">{description}</p>
						</motion.div>
					</motion.div>
				))}
			</div>

			<motion.div className="scroll-progress" style={{ scaleX }} />
		</div>
	);
};

export default OtherProjects;
