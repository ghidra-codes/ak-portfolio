import React, { useEffect, useState } from "react";
import HamburgerBtn from "./hamburger-btn/HamburgerBtn";
import NavBarLinks from "./NavBarLinks";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useMediaQuery } from "react-responsive";
import { Section } from "@/types/sections.types";
import SlideFillButton from "@/components/ui/SlideFillButton";
import { SECTIONS } from "@/constants/sections";
import { fadeInSlideBtn, fadeInSlideBtnSmallScreen } from "@/utils/animations/navBarLinks/fadeInSlideBtn";

const containerVariants = {
	visible: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	hidden: {},
};

interface NavBarProps {
	onStartHeaderAnimations: () => void;
}

export default function NavBar({ onStartHeaderAnimations }: NavBarProps) {
	const { scrollY } = useScroll();
	const isSmallScreen = useMediaQuery({ maxWidth: 942 });

	const [activeSection, setActiveSection] = useState<Section | null>(null);
	const [showBtn, setShowBtn] = useState(false);

	const [showMenu, setShowMenu] = useState(false);

	const [pendingHide, setPendingHide] = useState(false);
	const [hidden, setHidden] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (!isSmallScreen) {
			setHidden(false);
			return;
		}

		const previous = scrollY.getPrevious();

		if (previous) {
			const isScrollingDown = latest > previous && latest > 100;

			if (isScrollingDown) {
				if (showMenu) {
					setShowMenu(false);
					setPendingHide(true);
					return;
				}

				setHidden(true);
			} else {
				setHidden(false);
			}
		}
	});

	const handleToggle = () => setShowMenu((prev) => !prev);

	const handleLinkClick = () => setShowMenu(false);

	useEffect(() => {
		if (isSmallScreen) {
			setShowBtn(true);
			return;
		}

		const delayUntilReady = (SECTIONS.length - 1) * 0.2 + 0.3;

		const timeout = setTimeout(() => {
			setShowBtn(true);
		}, delayUntilReady * 1000);

		return () => clearTimeout(timeout);
	}, [isSmallScreen]);

	return (
		<>
			<motion.nav
				className="navbar"
				variants={{ hidden: { y: "-100%" }, visible: { y: 0 } }}
				animate={hidden ? "hidden" : "visible"}
				transition={{ duration: 0.4, ease: "easeInOut" }}
			>
				<div className="brand">
					<div className="logo-wrapper"></div>
					{!isSmallScreen && <h1 className="navbar-heading">Alexander Kallin</h1>}
				</div>
				<motion.div
					className="navbar-links-wrapper"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					{isSmallScreen && <HamburgerBtn onToggle={handleToggle} active={showMenu} />}
					{!isSmallScreen && (
						<NavBarLinks
							variant="regular"
							activeSection={activeSection}
							onSetActive={setActiveSection}
							onLastLinkAnimationComplete={!isSmallScreen ? onStartHeaderAnimations : undefined}
						/>
					)}
					<motion.div
						variants={!isSmallScreen ? fadeInSlideBtn : fadeInSlideBtnSmallScreen}
						initial="hidden"
						animate={showBtn ? "show" : ""}
						onAnimationComplete={isSmallScreen ? onStartHeaderAnimations : undefined}
					>
						<SlideFillButton title="Resume" />
					</motion.div>
				</motion.div>
			</motion.nav>
			<AnimatePresence>
				{isSmallScreen && showMenu && (
					<motion.div
						key="menu"
						className="menu-wrapper"
						initial={{ x: "100%", opacity: 0 }}
						animate={{ x: 0, opacity: 1, pointerEvents: "auto" }}
						exit={{ x: "100%", opacity: 0, pointerEvents: "none" }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						onAnimationComplete={(definition) => {
							if (definition === "exit" && pendingHide) {
								setHidden(true);
								setPendingHide(false);
							}
						}}
					>
						<NavBarLinks
							variant="hamburger"
							onLinkClick={handleLinkClick}
							activeSection={activeSection}
							onSetActive={setActiveSection}
							stagger={showMenu}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
