import { motion } from "motion/react";
import React, { useState } from "react";
import TintedImage from "@/components/ui/TintedImage";
import type { ProjectFeatureLayoutProps } from "@/types/project-feature.types";
import { fadeInSlideDownwardGroup } from "@/utils/animations/nav-links/fadeInSlideDownwardGroup";
import {
	fadeInMobileDescription,
	fadeInMobileImage,
} from "@/utils/animations/project-feature/fadeInMobileContent";
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

				<motion.div
					variants={fadeInMobileImage}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-120px" }}
					onAnimationComplete={triggerProjectIcons}
				>
					<TintedImage
						{...imageProps}
						imageClass="project-image"
						wrapperClass="project-image-wrapper"
					/>
				</motion.div>

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
				<motion.div
					className="project-description"
					variants={fadeInMobileDescription}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-150px" }}
					onAnimationComplete={triggerLinkIcons}
				>
					{description}
				</motion.div>

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
