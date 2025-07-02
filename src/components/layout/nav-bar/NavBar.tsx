import { useState } from "react";
import HamburgerBtn from "./hamburger-btn/HamburgerBtn";
import NavBarLinks from "./NavBarLinks";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useMediaQuery } from "react-responsive";
import { Section } from "@/types/sections.types";

export default function NavBar() {
	const { scrollY } = useScroll();
	const isSmallScreen = useMediaQuery({ maxWidth: 920 });

	const [activeSection, setActiveSection] = useState<Section>("home");

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

	const onToggle = () => {
		setIsMenuOpen((prev) => {
			const next = !prev;

			if (next) setMenuKey((key) => key + 1);

			return next;
		});
	};

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
					{isSmallScreen && <HamburgerBtn onToggle={onToggle} active={isMenuOpen} />}
					{!isSmallScreen && (
						<NavBarLinks
							variant="regular"
							activeSection={activeSection}
							onSetActive={setActiveSection}
						/>
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
						onLinkClick={onToggle}
						activeSection={activeSection}
						onSetActive={setActiveSection}
					/>
				</motion.div>
			)}
		</>
	);
}
