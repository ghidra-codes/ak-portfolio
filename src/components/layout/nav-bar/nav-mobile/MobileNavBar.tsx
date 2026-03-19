import { AnimatePresence, motion } from "motion/react";
import SlideFillButton from "@/components/ui/SlideFillButton";
import { EASE_IN_OUT } from "@/constants/animations";
import { useAnimationContext } from "@/hooks/useAnimationContext";
import useNavbarAutoHide from "@/hooks/useNavbarAutoHide";
import { fadeInSlideBtnSmallScreen } from "@/utils/animations/nav-links/fadeInSlideBtn";
import NavBarBrand from "../NavBarBrand";
import HamburgerBtn from "./hamburger-btn/HamburgerBtn";
import MobileNavLinks from "./MobileNavLinks";

const MobileNavBar = () => {
	const { isHidden, setShowMenu, completeExit, showMenu } = useNavbarAutoHide();
	const { setAnimateHeader } = useAnimationContext();

	return (
		<>
			<motion.nav
				className="navbar"
				variants={{ hidden: { y: "-100%" }, visible: { y: 0 } }}
				animate={isHidden ? "hidden" : "visible"}
				transition={{ duration: 0.4, ease: "easeInOut" }}
			>
				<NavBarBrand />

				<motion.div className="navbar-links-wrapper">
					<HamburgerBtn onToggle={() => setShowMenu((prev) => !prev)} active={showMenu} />
					<motion.div
						variants={fadeInSlideBtnSmallScreen}
						initial="hidden"
						animate="show"
						onAnimationComplete={() => setAnimateHeader(true)}
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
