import { motion } from "motion/react";
import type { FC } from "react";
import { FiGithub, FiLink } from "react-icons/fi";
import TintedImage from "@/components/ui/TintedImage";
import { EASE_OUT_SLOW } from "@/constants/animations";
import type { ProjectFeatureLayoutProps } from "@/types/project-feature.types";
import { fadeInSlideX } from "@/utils/animations/project-feature/fadeInSlideX";

const scaleReveal = (show: boolean) => ({
	initial: { scale: 0 },
	animate: show ? "visible" : "hidden",
	variants: {
		hidden: { scale: 0 },
		visible: {
			scale: [0, 1.1, 1],
			transition: {
				duration: 0.35,
				ease: EASE_OUT_SLOW,
			},
		},
	},
});

const DesktopLayout: FC<ProjectFeatureLayoutProps> = ({
	imageProps,
	heading,
	description,
	projectIcons,
	showIcons,
	triggerIcons,
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
				>
					<TintedImage {...imageProps} />
				</motion.div>

				<motion.div className="project-icons" {...scaleReveal(showIcons)}>
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
				onAnimationComplete={triggerIcons}
			>
				<div className="project-feature-heading">
					<motion.span className="project-links" {...scaleReveal(showIcons)}>
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
