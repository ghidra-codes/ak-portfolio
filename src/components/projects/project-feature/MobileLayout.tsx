import RevealAnimation from "@/components/ui/RevealAnimation";
import TintedImage from "@/components/ui/TintedImage";
import { ProjectFeatureLayoutProps } from "@/types/project-feature.types";
import { fadeInSlideDownwardGroup } from "@/utils/animations/nav-links/fadeInSlideDownwardGroup";
import { motion } from "motion/react";
import React from "react";
import { FiGithub, FiLink } from "react-icons/fi";

const MobileLayout: React.FC<ProjectFeatureLayoutProps> = ({
	heading,
	imageProps,
	description,
	projectIcons,
	onShowProjectIcons,
	onShowProjectLinks,
	showProjectIcons,
	showProjectLinks,
}) => {
	return (
		<div className="mobile-wrapper">
			<div className="top">
				{heading}

				<RevealAnimation viewportMargin="-100px" onAnimationComplete={onShowProjectIcons}>
					<TintedImage {...imageProps} />
				</RevealAnimation>

				<motion.div
					className="project-icons"
					variants={fadeInSlideDownwardGroup.container}
					initial="hidden"
					animate={showProjectIcons ? "show" : "hidden"}
				>
					{React.Children.map(projectIcons, (icon) => (
						<motion.div variants={fadeInSlideDownwardGroup.item}>{icon}</motion.div>
					))}
				</motion.div>
			</div>

			<div className="bottom">
				<RevealAnimation viewportMargin="-80px" onAnimationComplete={onShowProjectLinks}>
					<div className="project-description">{description}</div>
				</RevealAnimation>

				<motion.div
					className="project-links"
					variants={fadeInSlideDownwardGroup.container}
					initial="hidden"
					animate={showProjectLinks ? "show" : "hidden"}
				>
					{[FiGithub, FiLink].map((Icon, i) => (
						<motion.span key={i} variants={fadeInSlideDownwardGroup.item}>
							<Icon className="project-link-icon" />
						</motion.span>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default MobileLayout;
