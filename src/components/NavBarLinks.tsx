import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";

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
	const isHamburger = variant === "hamburger";
	const sections = useMemo(() => ["home", "about", "projects"], []);

	const [activeSection, setActiveSection] = useState<string>("");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.2 }
		);

		sections.forEach((section) => {
			const sectionElement = document.getElementById(section);
			if (sectionElement) observer.observe(sectionElement);
		});

		return () => observer.disconnect();
	}, [sections]);

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
			{sections.map((section) => (
				<motion.li key={section} variants={isHamburger ? itemVariants : undefined}>
					<Link
						to={section === "home" ? "/" : section}
						onClick={onLinkClick}
						className={activeSection === section ? "active" : ""}
					>
						{section.charAt(0).toUpperCase() + section.slice(1)}
					</Link>
				</motion.li>
			))}
			<motion.li>
				<button className="contact-button">
					<span>Contact</span>
				</button>
			</motion.li>
		</motion.ul>
	);
};

export default NavBarLinks;
