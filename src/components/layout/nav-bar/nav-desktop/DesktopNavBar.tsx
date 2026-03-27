import { motion } from "motion/react";
import { useEffect, useState } from "react";
import SlideFillButton from "@/components/ui/SlideFillButton";
import { SECTIONS } from "@/constants/sections";
import { fadeInSlideBtn } from "@/utils/animations/nav-links/fadeInSlideBtn.js";
import NavBarBrand from "../NavBarBrand";
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

const DesktopNavBar = () => {
	const [showBtn, setShowBtn] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setShowBtn(true), SHOW_BTN_DELAY * 1000);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<motion.nav className="navbar">
			<NavBarBrand />

			<motion.div
				className="navbar-links-wrapper"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<DesktopNavLinks />

				<motion.div variants={fadeInSlideBtn} initial="hidden" animate={showBtn ? "show" : ""}>
					<SlideFillButton href="/resume.pdf" title="Resume" download />
				</motion.div>
			</motion.div>
		</motion.nav>
	);
};

export default DesktopNavBar;
