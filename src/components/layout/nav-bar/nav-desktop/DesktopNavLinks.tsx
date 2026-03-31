import classNames from "classnames";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { SECTIONS } from "@/constants/sections";
import { useAnimationContext } from "@/hooks/useAnimationContext";
import useScrollActiveSection from "@/hooks/useScrollActiveSection";
import type { Section } from "@/types/sections.types";
import { fadeInSlideDownwardGroup } from "@/utils/animations/nav-links/fadeInSlideDownwardGroup";
import getSectionState from "@/utils/helpers/getSectionState";

/**
 * Renders desktop navigation links with scroll tracking.
 *
 * Highlights the active section and triggers header animation after the last link animates.
 */
const DesktopNavLinks = () => {
	const { setAnimateHeader } = useAnimationContext();

	// Track current and previous active section for animations
	const [activeSection, setActiveSection] = useState<Section | null>(null);
	const [prevActiveSection, setPrevActiveSection] = useState<Section | null>(null);

	// Update activeSection based on scroll position
	useScrollActiveSection({ activeSection, onSetActive: setActiveSection });

	// Keep previous active section to handle underline exit animations
	useEffect(() => {
		if (activeSection && activeSection !== prevActiveSection) {
			const timeout = setTimeout(() => setPrevActiveSection(activeSection), 400);
			return () => clearTimeout(timeout);
		}
	}, [activeSection, prevActiveSection]);

	return (
		<motion.ul
			className="navbar-links-list"
			variants={fadeInSlideDownwardGroup.container}
			initial="hidden"
			animate="show"
		>
			{SECTIONS.map((section, index) => {
				const { isActive, eraseUnderline, isLast } = getSectionState(
					section,
					index,
					activeSection,
					prevActiveSection,
				);

				return (
					<motion.li
						key={section}
						variants={fadeInSlideDownwardGroup.item}
						className={classNames("navbar-link-list-item", {
							active: isActive,
							"underline-exit": eraseUnderline,
						})}
						onAnimationComplete={isLast ? () => setAnimateHeader(true) : undefined}
					>
						<Link to={section} smooth={true} duration={600} offset={-60} spy={true}>
							{section}
						</Link>
					</motion.li>
				);
			})}
		</motion.ul>
	);
};

export default DesktopNavLinks;
