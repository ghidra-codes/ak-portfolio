import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { fadeInContent } from "@/utils/animations/other-projects/fadeInContent";
import { fadeInScaleCard } from "@/utils/animations/other-projects/fadeInScaleCard";

const OtherProjects = () => {
	const scrollRef = useRef<HTMLDivElement | null>(null);

	const { scrollYProgress } = useScroll({ container: scrollRef });

	const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

	return (
		<div className="other-projects-container">
			<div ref={scrollRef} className="other-projects-scroll">
				{Array.from({ length: 8 }).map((_, i) => (
					<motion.div
						key={i}
						className="project"
						variants={fadeInScaleCard}
						initial="hidden"
						whileInView="visible"
						viewport={{ root: scrollRef, amount: 0.6, once: true }}
					>
						<motion.div variants={fadeInContent}>
							<h3>Other Projects</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</motion.div>
					</motion.div>
				))}
			</div>

			<motion.div className="scroll-progress" style={{ scaleX }} />
		</div>
	);
};

export default OtherProjects;
