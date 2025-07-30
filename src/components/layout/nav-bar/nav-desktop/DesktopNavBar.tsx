import { motion } from "motion/react";
import SlideFillButton from "@/components/ui/SlideFillButton";
import { fadeInSlideBtn } from "@/utils/animations/navLinks/fadeInSlideBtn.js";
import { Section } from "@/types/sections.types";
import React, { useEffect, useState } from "react";
import { SECTIONS } from "@/constants/sections";
import DesktopNavLinks from "./DesktopNavLinks";

const containerVariants = {
	visible: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	hidden: {},
};

const SHOW_BTN_DELAY = (SECTIONS.length - 1) * 0.2 + 0.3;

interface DesktopNavBarProps {
	activeSection: Section | null;
	setActiveSection: React.Dispatch<React.SetStateAction<Section | null>>;
	onStartHeaderAnimations: () => void;
}

const DesktopNavBar: React.FC<DesktopNavBarProps> = ({
	activeSection,
	setActiveSection,
	onStartHeaderAnimations,
}) => {
	const [showBtn, setShowBtn] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setShowBtn(true), SHOW_BTN_DELAY * 1000);
		return () => clearTimeout(timeout);
	}, []);

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
				<DesktopNavLinks
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
