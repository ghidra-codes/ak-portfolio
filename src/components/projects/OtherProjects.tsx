import { type Easing, motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

const EASE_SURFACE = [0.48, 0.05, 0.52, 0.96] as Easing;
const EASE_CONTENT = [0.5, 0.05, 0.5, 0.95] as Easing;

const OtherProjects = () => {
	const scrollRef = useRef<HTMLDivElement | null>(null);

	const { scrollYProgress } = useScroll({
		container: scrollRef,
	});

	const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

	const cardVariants = {
		hidden: {
			opacity: 0,
			scale: 0.985,
			boxShadow: "0 0 0 rgba(0,0,0,0)",
		},
		visible: {
			opacity: 1,
			scale: 1,
			boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
			transition: {
				duration: 0.4,
				ease: EASE_SURFACE,
				boxShadow: { delay: 0.08 },
			},
		},
	};

	const contentVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 0.18,
				duration: 0.25,
				ease: EASE_CONTENT,
			},
		},
	};

	return (
		<div className="other-projects-container">
			<div ref={scrollRef} className="other-projects-scroll">
				{Array.from({ length: 8 }).map((_, i) => (
					<motion.div
						key={i}
						className="project"
						variants={cardVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ root: scrollRef, amount: 0.6, once: true }}
					>
						<motion.div variants={contentVariants}>
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
