import React, { useEffect, useState } from "react";
import HamburgerBtn from "./hamburger-btn/HamburgerBtn";
import NavBarLinks from "./NavBarLinks";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useMediaQuery } from "react-responsive";
import { Section } from "@/types/sections.types";
import SlideFillButton from "@/components/ui/SlideFillButton";
import { SECTIONS } from "@/constants/sections";
import { fadeInSlideBtn } from "@/utils/animations/navBarLinks/fadeInSlideBtn";

const containerVariants = {
	visible: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	hidden: {},
};

interface NavBarProps {
	onAnimationComplete: () => void;
}

export default function NavBar({ onAnimationComplete }: NavBarProps) {
	const { scrollY } = useScroll();
	const isSmallScreen = useMediaQuery({ maxWidth: 942 });

	const [activeSection, setActiveSection] = useState<Section | null>(null);
	const [showBtn, setShowBtn] = useState(false);

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [hidden, setHidden] = useState(false);
	const [menuKey, setMenuKey] = useState(0);

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (!isSmallScreen) {
			setHidden(false);
			return;
		}

		const previous = scrollY.getPrevious();

		if (previous) {
			setHidden(latest > previous && latest > 100);

			if (isMenuOpen) setIsMenuOpen(false);
		}
	});

	const handleToggle = () => {
		setIsMenuOpen((prev) => {
			const next = !prev;

			if (next) setMenuKey((key) => key + 1);

			return next;
		});
	};

	const handleLinkClick = () => setIsMenuOpen(false);

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
					{isSmallScreen && <HamburgerBtn onToggle={handleToggle} active={isMenuOpen} />}
					{!isSmallScreen && (
						<NavBarLinks
							variant="regular"
							activeSection={activeSection}
							onSetActive={setActiveSection}
						/>
					)}
					<motion.div
						variants={fadeInSlideBtn}
						initial="hidden"
						animate={showBtn ? "show" : ""}
						onAnimationComplete={onAnimationComplete}
					>
						<SlideFillButton title="Resume" />
					</motion.div>
				</motion.div>
			</motion.nav>
			{isSmallScreen && (
				<motion.div
					key={menuKey}
					className="menu-wrapper"
					initial={{ x: "100%", opacity: 0 }}
					animate={{
						x: isMenuOpen ? 0 : "100%",
						opacity: isMenuOpen ? 1 : 0,
						pointerEvents: isMenuOpen ? "auto" : "none",
					}}
					transition={{ duration: 0.3, ease: "easeInOut" }}
				>
					<NavBarLinks
						variant="hamburger"
						onLinkClick={handleLinkClick}
						activeSection={activeSection}
						onSetActive={setActiveSection}
					/>
				</motion.div>
			)}
		</>
	);
}
