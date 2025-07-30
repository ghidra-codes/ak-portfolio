import { AnimatePresence, motion } from "motion/react";
import SlideFillButton from "@/components/ui/SlideFillButton";
import React from "react";
import { fadeInSlideBtnSmallScreen } from "@/utils/animations/navLinks/fadeInSlideBtn";
import { EASE_IN_OUT } from "@/constants/animations";
import useNavbarAutoHide from "@/hooks/useNavbarAutoHide";
import HamburgerBtn from "./hamburger-btn/HamburgerBtn";
import MobileNavLinks from "./MobileNavLinks";

interface MobileNavBarProps {
	onStartHeaderAnimations: () => void;
}

const MobileNavBar: React.FC<MobileNavBarProps> = ({ onStartHeaderAnimations }) => {
	const { hidden, setShowMenu, completeExit, showMenu } = useNavbarAutoHide();

	return (
		<>
			<motion.nav
				className="navbar"
				variants={{ hidden: { y: "-100%" }, visible: { y: 0 } }}
				animate={hidden ? "hidden" : "visible"}
				transition={{ duration: 0.4, ease: "easeInOut" }}
			>
				<div className="brand">
					<div className="logo-wrapper" />
				</div>
				<motion.div className="navbar-links-wrapper">
					<HamburgerBtn onToggle={() => setShowMenu((prev) => !prev)} active={showMenu} />
					<motion.div
						variants={fadeInSlideBtnSmallScreen}
						initial="hidden"
						animate="show"
						onAnimationComplete={onStartHeaderAnimations}
					>
						<SlideFillButton title="Resume" />
					</motion.div>
				</motion.div>
			</motion.nav>

			<AnimatePresence onExitComplete={completeExit}>
				{showMenu && (
					<motion.div
						key="menu"
						className="menu-wrapper"
						initial={{ x: "100%", opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: "100%", opacity: 0 }}
						transition={{ type: "tween", ease: EASE_IN_OUT, duration: 0.3 }}
					>
						<MobileNavLinks setShowMenu={setShowMenu} />
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default MobileNavBar;
