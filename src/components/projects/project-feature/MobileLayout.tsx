import { motion } from "motion/react";
import React, { useState } from "react";
import RevealAnimation from "@/components/ui/RevealAnimation";
import TintedImage from "@/components/ui/TintedImage";
import { DEFAULT_VIEWPORT_MARGIN } from "@/constants/animations";
import type { ProjectFeatureLayoutProps } from "@/types/project-feature.types";
import { fadeInSlideDownwardGroup } from "@/utils/animations/nav-links/fadeInSlideDownwardGroup";
import ProjectLinks from "./ProjectLinks";

const MobileLayout: React.FC<ProjectFeatureLayoutProps> = ({
	heading,
	imageProps,
	description,
	projectIcons,
	projectLinks,
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

				<RevealAnimation
					viewportMargin={DEFAULT_VIEWPORT_MARGIN}
					onAnimationComplete={triggerProjectIcons}
				>
					<TintedImage
						{...imageProps}
						imageClass="project-image"
						wrapperClass="project-image-wrapper"
					/>
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
					<ProjectLinks
						links={projectLinks}
						itemVariants={fadeInSlideDownwardGroup.item}
						isMobile
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default MobileLayout;
