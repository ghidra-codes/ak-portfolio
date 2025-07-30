import { motion, useAnimation } from "motion/react";
import leftArrow from "@/assets/icons/left-arrow.svg";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import { SECTIONS } from "@/constants/sections";
import { Section } from "@/types/sections.types";
import { fadeInSlideLeftGroup } from "@/utils/animations/navBarLinks/fadeInSlideLeftGroup";
import { fadeInSlideDownwardGroup } from "@/utils/animations/navBarLinks/fadeInSlideDownwardGroup";
import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import useScrollActiveSection from "@/hooks/useScrollActiveSection";
interface NavBarLinksProps {
	variant: "regular" | "hamburger";
	activeSection: Section | null;
	stagger?: boolean;
	onSetActive: (section: Section | null) => void;
	onLastLinkAnimationComplete?: () => void;
}

const NavBarLinks: React.FC<NavBarLinksProps> = ({
	variant,
	activeSection,
	stagger,
	onSetActive,
	onLastLinkAnimationComplete,
}) => {
	const [prevActiveSection, setPrevActiveSection] = useState<Section | null>(null);

	const controls = useAnimation();

	const isHamburger = variant === "hamburger";
	const isSmallScreen = useMediaQuery({ maxWidth: 768 });

	const linkOffset = useMemo(() => (isSmallScreen ? -30 : -60), [isSmallScreen]);

	useScrollActiveSection({ activeSection, onSetActive });

	useEffect(() => {
		if (isHamburger) {
			if (stagger) {
				controls.start("show");
			} else {
				controls.set("hidden");
			}
		}
	}, [stagger, isHamburger, controls]);

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

	const motionProps = isHamburger
		? {
				variants: fadeInSlideLeftGroup.container,
				initial: "hidden",
				animate: controls,
				exit: "hidden",
		  }
		: {
				variants: fadeInSlideDownwardGroup.container,
				initial: "hidden",
				animate: "show",
		  };

	return (
		<motion.ul
			className={isHamburger ? "navbar-links-hamburger-list" : "navbar-links-list"}
			{...motionProps}
		>
			{SECTIONS.map((section, index) => {
				const isActive = activeSection === section;
				const shouldEraseUnderline = prevActiveSection === section && !isActive;
				const isLast = index === SECTIONS.length - 1;

				return (
					<motion.li
						key={section}
						variants={isHamburger ? fadeInSlideLeftGroup.item : fadeInSlideDownwardGroup.item}
						className={classNames("navbar-link-list-item", {
							active: isActive,
							underline: isActive,
							"no-underline": shouldEraseUnderline,
						})}
						onAnimationComplete={
							isLast && onLastLinkAnimationComplete ? onLastLinkAnimationComplete : undefined
						}
					>
						<Link
							to={section}
							smooth={true}
							duration={600}
							spy={variant === "regular"}
							offset={linkOffset}
							onSetActive={() => {
								if (section !== "about") onSetActive(section);
							}}
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
