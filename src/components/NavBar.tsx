import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import HamburgerMenuBtn from "./HamburgerMenuBtn";
import NavBarLinks from "./NavBarLinks";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
	const isSmallScreen = useMediaQuery("(max-width: 920px)");

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const onToggle = () => setIsMenuOpen((prev) => !prev);

	return (
		<>
			<nav className="navbar">
				<div className="brand">
					<div className="logo-wrapper"></div>
					{!isSmallScreen && <h1 className="navbar-heading">Alexander Kallin</h1>}
				</div>
				<div className="navbar-links-wrapper">
					{isSmallScreen ? <HamburgerMenuBtn onToggle={onToggle} active={isMenuOpen} /> : <NavBarLinks />}
					<button className="contact-button">
						<span>Contact</span>
					</button>
				</div>
			</nav>

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
