import TintedImage from "@/components/ui/TintedImage";
import { EASE_OUT_SLOW } from "@/constants/animations";
import { ProjectFeatureLayoutProps } from "@/types/project-feature.types";
import { fadeInSlideX } from "@/utils/animations/project-feature/fadeInSlideX";
import { motion } from "motion/react";
import React from "react";
import { FiGithub, FiLink } from "react-icons/fi";

const scaleReveal = (show: boolean) => ({
	initial: { scale: 0 },
	animate: show ? { scale: [0, 1.1, 1] } : { scale: 0 },
	transition: {
		duration: 0.45,
		ease: EASE_OUT_SLOW,
	},
});

const DesktopLayout: React.FC<ProjectFeatureLayoutProps> = ({
	imageProps,
	heading,
	description,
	projectIcons,
	onShowProjectIcons,
	onShowProjectLinks,
	showProjectIcons,
	showProjectLinks,
	reverse,
}) => {
	return (
		<>
			<div className="left">
				<motion.div
					className="left-image"
					variants={fadeInSlideX}
					custom={reverse ? "right" : "left"}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					onAnimationComplete={onShowProjectIcons}
				>
					<TintedImage {...imageProps} />
				</motion.div>

				<motion.div className="project-icons" {...scaleReveal(showProjectIcons)}>
					{projectIcons}
				</motion.div>
			</div>

			<motion.div
				className="right"
				variants={fadeInSlideX}
				custom={reverse ? "left" : "right"}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				onAnimationComplete={onShowProjectLinks}
			>
				<div className="project-feature-heading">
					<motion.span className="project-links" {...scaleReveal(showProjectLinks)}>
						<FiGithub className="project-link-icon" />
						<FiLink className="project-link-icon" />
					</motion.span>

					{heading}
				</div>

				<div className="project-description">{description}</div>
			</motion.div>
		</>
	);
};

export default DesktopLayout;
