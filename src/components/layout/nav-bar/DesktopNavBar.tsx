import { motion } from "motion/react";
import NavBarLinks from "./NavBarLinks";
import SlideFillButton from "@/components/ui/SlideFillButton";
import { fadeInSlideBtn } from "@/utils/animations/navBarLinks/fadeInSlideBtn";
import { Section } from "@/types/sections.types";
import React from "react";

const containerVariants = {
	visible: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	hidden: {},
};

interface DesktopNavBarProps {
	activeSection: Section | null;
	setActiveSection: React.Dispatch<React.SetStateAction<Section | null>>;
	onStartHeaderAnimations: () => void;
	showBtn: boolean;
}

const DesktopNavBar: React.FC<DesktopNavBarProps> = ({
	activeSection,
	setActiveSection,
	onStartHeaderAnimations,
	showBtn,
}) => {
	return (
		<motion.nav className="navbar">
			<div className="brand">
				<div className="logo-wrapper" />
				<h1 className="navbar-heading">Alexander Kallin</h1>
			</div>

			<motion.div
				className="navbar-links-wrapper"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<NavBarLinks
					variant="regular"
					activeSection={activeSection}
					onSetActive={setActiveSection}
					onLastLinkAnimationComplete={onStartHeaderAnimations}
				/>
				<motion.div variants={fadeInSlideBtn} initial="hidden" animate={showBtn ? "show" : ""}>
					<SlideFillButton title="Resume" />
				</motion.div>
			</motion.div>
		</motion.nav>
	);
};

export default DesktopNavBar;
