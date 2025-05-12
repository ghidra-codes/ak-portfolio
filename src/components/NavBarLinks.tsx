import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import leftArrow from "@/assets/images/left-arrow.svg";
import { useActiveSection } from "../hooks/useActiveSection";

type NavBarLinksProps = {
	variant?: "regular" | "hamburger";
	onLinkClick?: () => void;
	onContactClick?: () => void;
};

const SECTIONS = ["home", "about", "projects"] as const;

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

	const isHamburger = variant === "hamburger";
	const isSmallScreen = useMediaQuery("(max-width: 920px)");

	const motionProps = isHamburger
		? {
				variants: containerVariants,
				initial: "hidden",
				animate: "show",
				exit: "hidden",
		  }
		: {};

	return (
		<motion.ul className={isHamburger ? "navbar-links-hamburger-list" : "navbar-links-list"} {...motionProps}>
			{SECTIONS.map((section) => {
				const isActive = activeSection === section;
				const path = section === "home" ? "/" : section;

				return (
					<motion.li
						key={section}
						variants={isHamburger ? itemVariants : undefined}
						className={`navbar-link-list-item ${isActive ? "active" : ""}`}
					>
						<Link to={path} onClick={onLinkClick} className={isActive ? "underline" : ""}>
							{section}
						</Link>
						{isSmallScreen && isActive && (
							<div className="left-arrow-wrapper">
								<img src={leftArrow} alt="Arrow pointing at current section" />
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
