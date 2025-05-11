import { useState } from "react";
import HamburgerMenuBtn from "./HamburgerMenuBtn";
import NavBarLinks from "./NavBarLinks";
import { motion, AnimatePresence } from "framer-motion";

const HamburgerMenu = () => {
	const [active, setActive] = useState(false);

	const onToggle = () => setActive((prev) => !prev);

	return (
		<div className="hamburger-menu">
			<HamburgerMenuBtn onToggle={onToggle} active={active} />
			<AnimatePresence>
				{active && (
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
		</div>
	);
};

export default HamburgerMenu;
