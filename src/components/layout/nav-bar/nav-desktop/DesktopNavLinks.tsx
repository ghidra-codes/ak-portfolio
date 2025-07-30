import { motion } from "motion/react";
import { Link } from "react-scroll";
import { SECTIONS } from "@/constants/sections";
import { Section } from "@/types/sections.types";
import { fadeInSlideDownwardGroup } from "@/utils/animations/navLinks/fadeInSlideDownwardGroup";
import classNames from "classnames";
import { useEffect, useState } from "react";
import useScrollActiveSection from "@/hooks/useScrollActiveSection";

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

	// Refactor this hook since its only used for desktop sized screens
	useScrollActiveSection({ activeSection, onSetActive });

	useEffect(() => {
		if (prevActiveSection && prevActiveSection !== activeSection) {
			const timeout = setTimeout(() => {
				setPrevActiveSection(null);
			}, 400);

			return () => clearTimeout(timeout);
		}

		if (activeSection !== prevActiveSection) {
			setPrevActiveSection(activeSection);
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
				const isActive = activeSection === section;
				const shouldEraseUnderline = prevActiveSection === section && !isActive;
				const isLast = index === SECTIONS.length - 1;

				return (
					<motion.li
						key={section}
						variants={fadeInSlideDownwardGroup.item}
						className={classNames("navbar-link-list-item", {
							active: isActive,
							underline: isActive,
							"no-underline": shouldEraseUnderline,
						})}
						onAnimationComplete={isLast ? onLastLinkAnimationComplete : undefined}
					>
						<Link
							to={section}
							smooth={true}
							duration={600}
							offset={-60}
							spy={true}
							onSetActive={() => {
								if (section !== "about") onSetActive(section);
							}}
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
