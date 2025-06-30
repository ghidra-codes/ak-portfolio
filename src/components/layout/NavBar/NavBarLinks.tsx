import { motion } from "motion/react";
import leftArrow from "@/assets/images/icons/left-arrow.svg";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import { Section, SECTIONS } from "@/constants/sections";

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

interface NavBarLinksProps {
	variant: "regular" | "hamburger";
	onLinkClick?: () => void;
	onContactClick?: () => void;
	activeSection: Section;
	onSetActive: (section: Section) => void;
}

const NavBarLinks: React.FC<NavBarLinksProps> = ({ variant, onLinkClick, activeSection, onSetActive }) => {
	const isHamburger = variant === "hamburger";
	const isSmallScreen = useMediaQuery({ maxWidth: 920 });

	const motionProps = isHamburger
		? {
				variants: containerVariants,
				initial: "hidden",
				animate: "show",
				exit: "hidden",
		  }
		: {};

	return (
		<motion.ul
			className={isHamburger ? "navbar-links-hamburger-list" : "navbar-links-list"}
			{...motionProps}
		>
			{SECTIONS.map((section) => {
				const isActive = activeSection === section;

				return (
					<motion.li
						key={section}
						variants={isHamburger ? itemVariants : undefined}
						className={`navbar-link-list-item ${isActive ? "active" : ""}`}
					>
						<Link
							to={section}
							smooth={true}
							duration={600}
							spy={true}
							offset={-30}
							onClick={onLinkClick}
							onSetActive={() => onSetActive(section)}
							className={isActive ? "underline" : ""}
						>
							{section}
						</Link>

						{isSmallScreen && (
							<div
								className="left-arrow-wrapper"
								style={{ visibility: isActive ? "visible" : "hidden" }}
							>
								<img src={leftArrow} alt="Arrow pointing at current section" />
							</div>
						)}
					</motion.li>
				);
			})}
		</motion.ul>
	);
};

export default NavBarLinks;
