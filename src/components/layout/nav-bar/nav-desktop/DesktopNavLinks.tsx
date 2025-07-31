import { motion } from "motion/react";
import { Link } from "react-scroll";
import { SECTIONS } from "@/constants/sections";
import { Section } from "@/types/sections.types";
import { fadeInSlideDownwardGroup } from "@/utils/animations/navLinks/fadeInSlideDownwardGroup";
import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";
import useScrollActiveSection from "@/hooks/useScrollActiveSection";
import getSectionState from "@/utils/helper/getSectionState";

interface DesktopNavLinksProps {
	activeSection: Section | null;
	onSetActive: (section: Section | null) => void;
	onLastLinkAnimationComplete: () => void;
}

const DesktopNavLinks: React.FC<DesktopNavLinksProps> = ({
	activeSection,
	onSetActive,
	onLastLinkAnimationComplete,
}) => {
	const [prevActiveSection, setPrevActiveSection] = useState<Section | null>(null);

	useScrollActiveSection({ activeSection, onSetActive });

	useEffect(() => {
		if (prevActiveSection === activeSection) return;

		if (activeSection !== null) {
			const timeout = setTimeout(() => setPrevActiveSection(activeSection), 400);
			return () => clearTimeout(timeout);
		}
	}, [activeSection, prevActiveSection]);

	const handleSetActive = useCallback(
		(section: Section) => {
			if (section !== "about") onSetActive(section);
		},
		[onSetActive]
	);

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
					prevActiveSection
				);

				return (
					<motion.li
						key={section}
						variants={fadeInSlideDownwardGroup.item}
						className={classNames("navbar-link-list-item", {
							active: isActive,
							"underline-exit": eraseUnderline,
						})}
						onAnimationComplete={isLast ? onLastLinkAnimationComplete : undefined}
					>
						<Link
							to={section}
							smooth={true}
							duration={600}
							offset={-60}
							spy={true}
							onSetActive={() => handleSetActive(section)}
						>
							{section}
						</Link>
					</motion.li>
				);
			})}
		</motion.ul>
	);
};

export default DesktopNavLinks;
