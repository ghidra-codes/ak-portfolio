import { motion } from "framer-motion";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import leftArrow from "@/assets/images/left-arrow.svg";
import { useActiveSection } from "../hooks/useActiveSection";

type NavBarLinksProps = {
	variant?: "regular" | "hamburger";
	onLinkClick?: () => void;
	onContactClick?: () => void;
};

const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { x: 50, opacity: 0 },
	show: { x: 0, opacity: 1 },
};

const NavBarLinks: React.FC<NavBarLinksProps> = ({ variant = "regular", onLinkClick }) => {
	const activeSection = useActiveSection((state) => state.activeSection);

	const sections = useMemo(() => ["home", "about", "projects"], []);
	const isHamburger = variant === "hamburger";
	const isSmallScreen = useMediaQuery("(max-width: 768px)");

	const motionProps = isHamburger
		? {
				variants: containerVariants,
				initial: "hidden",
				animate: "show",
				exit: "hidden",
		  }
		: {};

	return (
		<motion.ul className={isHamburger ? "navbar-links-hamburger" : "navbar-links"} {...motionProps}>
			{sections.map((section) => {
				const currentSection = activeSection === section;

				return (
					<motion.li key={section} variants={isHamburger ? itemVariants : undefined}>
						<Link
							to={section === "home" ? "/" : section}
							onClick={onLinkClick}
							className={currentSection ? "active" : ""}
						>
							{section.charAt(0).toUpperCase() + section.slice(1)}
						</Link>
						{isSmallScreen && currentSection && (
							<div className="left-arrow-wrapper">
								<img src={leftArrow} alt="Left arrow highlighting current section" />
							</div>
						)}
					</motion.li>
				);
			})}
			<motion.li>
				<button className="contact-button">
					<span>Contact</span>
				</button>
			</motion.li>
		</motion.ul>
	);
};

export default NavBarLinks;
