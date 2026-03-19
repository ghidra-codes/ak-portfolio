import { motion } from "motion/react";
import React, { useState } from "react";
import { FiGithub, FiLink } from "react-icons/fi";
import RevealAnimation from "@/components/ui/RevealAnimation";
import TintedImage from "@/components/ui/TintedImage";
import type { ProjectFeatureLayoutProps } from "@/types/project-feature.types";
import { fadeInSlideDownwardGroup } from "@/utils/animations/nav-links/fadeInSlideDownwardGroup";

const MobileLayout: React.FC<ProjectFeatureLayoutProps> = ({
	heading,
	imageProps,
	description,
	projectIcons,
	showIcons: showProjectIcons,
	triggerIcons: triggerProjectIcons,
}) => {
	const [showLinkIcons, setShowLinkIcons] = useState(false);

	const triggerLinkIcons = () => {
		if (showLinkIcons) return;

		setShowLinkIcons(true);
	};

	return (
		<div className="mobile-wrapper">
			<div className="top">
				{heading}

				<RevealAnimation viewportMargin="-100px" onAnimationComplete={triggerProjectIcons}>
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
				<RevealAnimation viewportMargin="-80px" onAnimationComplete={triggerLinkIcons}>
					<div className="project-description">{description}</div>
				</RevealAnimation>

				<motion.div
					className="project-links"
					variants={fadeInSlideDownwardGroup.container}
					initial="hidden"
					animate={showLinkIcons ? "show" : "hidden"}
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
