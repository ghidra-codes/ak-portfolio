import { useState } from "react";
import HamburgerBtn from "./hamburger-btn/HamburgerBtn";
import NavBarLinks from "./NavBarLinks";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useMediaQuery } from "react-responsive";
import { Section } from "@/types/sections.types";
import SlideFillButton from "@/components/ui/SlideFillButton";

export default function NavBar() {
	const { scrollY } = useScroll();
	const isDesktopSize = useMediaQuery({ maxWidth: 768 });

	const [activeSection, setActiveSection] = useState<Section>("home");

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [hidden, setHidden] = useState(false);
	const [menuKey, setMenuKey] = useState(0);

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (!isDesktopSize) {
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
					{!isDesktopSize && <h1 className="navbar-heading">Alexander Kallin</h1>}
				</div>
				<div className="navbar-links-wrapper">
					{isDesktopSize && <HamburgerBtn onToggle={onToggle} active={isMenuOpen} />}
					{!isDesktopSize && (
						<NavBarLinks
							variant="regular"
							activeSection={activeSection}
							onSetActive={setActiveSection}
						/>
					)}
					<SlideFillButton title="Resume" />
				</div>
			</motion.nav>
			{isDesktopSize && (
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
