import { motion } from "motion/react";
import React, { useState } from "react";
import { FiGithub, FiLink } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import TintedImage, { TintedImageProps } from "../ui/TintedImage";
import { fadeInSlideX } from "@/utils/animations/project-feature/fadeInSlideX";
import { EASE_OUT_SLOW } from "@/constants/animations";
import RevealAnimation from "../ui/RevealAnimation";
import { fadeInSlideDownwardGroup } from "@/utils/animations/navLinks/fadeInSlideDownwardGroup";

type ProjectImageProps = Omit<TintedImageProps, "children" | "triggerPopIn">;
interface ProjectFeatureProps {
	imageProps: ProjectImageProps;
	heading: React.ReactNode;
	description: React.ReactNode;
	projectIcons: React.ReactNode;
}

const ProjectFeature: React.FC<ProjectFeatureProps> = ({
	imageProps,
	heading,
	description,
	projectIcons,
}) => {
	const [showProjectIcons, setShowProjectIcons] = useState(false);
	const [showProjectLinks, setShowProjectLinks] = useState(false);
	const isSmallScreen = useMediaQuery({ maxWidth: 1024 });

	return (
		<div className={`project-feature ${isSmallScreen ? "is-mobile" : "is-desktop"}`}>
			{isSmallScreen ? (
				<div className="mobile-wrapper">
					<div className="top">
						{heading}

						<RevealAnimation
							viewportMargin="-100px"
							onAnimationComplete={() => setShowProjectIcons(true)}
						>
							<TintedImage {...imageProps} />
						</RevealAnimation>

						<motion.div
							className="project-icons"
							variants={fadeInSlideDownwardGroup.container}
							initial="hidden"
							animate={showProjectIcons ? "show" : "hidden"}
						>
							{React.Children.map(projectIcons, (icon) => (
								<motion.div variants={fadeInSlideDownwardGroup.item}>
									{icon}
								</motion.div>
							))}
						</motion.div>
					</div>

					<div className="bottom">
						<RevealAnimation
							viewportMargin="-80px"
							onAnimationComplete={() => setShowProjectLinks(true)}
						>
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
			) : (
				<>
					<div className="left">
						<motion.div
							className="left-image"
							variants={fadeInSlideX}
							custom="left"
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.8, ease: EASE_OUT_SLOW }}
							onAnimationComplete={() => setShowProjectIcons(true)}
						>
							<TintedImage {...imageProps} />
						</motion.div>

						<motion.div
							className="project-icons"
							initial={{ scale: 0 }}
							animate={showProjectIcons ? { scale: [0, 1.1, 1] } : { scale: 0 }}
							transition={{
								duration: 0.45,
								ease: EASE_OUT_SLOW,
							}}
						>
							{projectIcons}
						</motion.div>
					</div>

					<motion.div
						className="right"
						variants={fadeInSlideX}
						custom="right"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: EASE_OUT_SLOW, delay: 0.1 }}
						onAnimationComplete={() => setShowProjectLinks(true)}
					>
						<div className="project-heading">
							<motion.span
								className="project-links"
								initial={{ scale: 0 }}
								animate={showProjectLinks ? { scale: [0, 1.1, 1] } : { scale: 0 }}
								transition={{
									duration: 0.45,
									ease: EASE_OUT_SLOW,
								}}
							>
								<FiGithub className="project-link-icon" />
								<FiLink className="project-link-icon" />
							</motion.span>

							{heading}
						</div>

						<div className="project-description">{description}</div>
					</motion.div>
				</>
			)}
		</div>
	);
};

export default ProjectFeature;
