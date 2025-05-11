import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type NavBarLinksProps = {
	variant?: "regular" | "hamburger";
	onLinkClick?: () => void;
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
	const sections = ["home", "about", "projects", "contact"];
	const listClass = variant === "hamburger" ? "navbar-links-hamburger" : "navbar-links";

	return (
		<motion.ul
			className={listClass}
			variants={variant === "hamburger" ? containerVariants : {}}
			initial={variant === "hamburger" ? "hidden" : undefined}
			animate={variant === "hamburger" ? "show" : undefined}
			exit={variant === "hamburger" ? "hidden" : undefined}
		>
			{sections.map((section) => (
				<motion.li key={section} variants={variant === "hamburger" ? itemVariants : {}}>
					<Link to={section === "home" ? "/" : section} onClick={onLinkClick}>
						{section.charAt(0).toUpperCase() + section.slice(1)}
					</Link>
				</motion.li>
			))}
		</motion.ul>
	);
};

export default NavBarLinks;
