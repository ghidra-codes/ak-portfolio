import { useState } from "react";
import HamburgerMenuBtn from "./HamburgerMenuBtn";
import NavBarLinks from "./NavBarLinks";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { useMediaQuery } from "react-responsive";

export default function NavBar() {
	const { scrollY } = useScroll();
	const isSmallScreen = useMediaQuery({ maxWidth: 920 });

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [hidden, setHidden] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();

		if (isSmallScreen && previous) {
			setHidden(latest > previous && latest > 150);

			if (isMenuOpen) setIsMenuOpen(false);
		}
	});

	const onToggle = () => setIsMenuOpen((prev) => !prev);

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
				<div className="navbar-links-wrapper">
					{isSmallScreen ? (
						<HamburgerMenuBtn onToggle={onToggle} active={isMenuOpen} />
					) : (
						<NavBarLinks />
					)}
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
						className="contact-button"
					>
						Contact
					</motion.button>
				</div>
			</motion.nav>

			<AnimatePresence>
				{isMenuOpen && isSmallScreen && (
					<motion.div
						key="menu"
						initial={{ opacity: 0, x: "100%" }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: "100%" }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="menu-wrapper"
					>
						<NavBarLinks variant="hamburger" onLinkClick={onToggle} />
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
