import { motion } from "motion/react";
import leftArrow from "@/assets/icons/left-arrow.svg";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import { SECTIONS } from "@/constants/sections";
import { Section } from "@/types/sections.types";
import { fadeInSlideLeftGroup } from "@/utils/animations/navBarLinks/fadeInSlideLeftGroup";
import { fadeInSlideDownwardGroup } from "@/utils/animations/navBarLinks/fadeInSlideDownwardGroup";
import classNames from "classnames";
import { useEffect } from "react";
import getTriggerPoints from "@/utils/helper/getTriggerPoints";
interface NavBarLinksProps {
	variant: "regular" | "hamburger";
	onLinkClick?: () => void;
	onContactClick?: () => void;
	activeSection: Section | null;
	onSetActive: (section: Section | null) => void;
}

const NavBarLinks: React.FC<NavBarLinksProps> = ({ variant, onLinkClick, activeSection, onSetActive }) => {
	const isHamburger = variant === "hamburger";
	const isSmallScreen = useMediaQuery({ maxWidth: 768 });

	const linkOffset = isSmallScreen ? -30 : -60;

	useEffect(() => {
		let lastScrollY = window.scrollY;
		let triggerPointEnter = 0;
		let triggerPointLeave = 0;

		const updateTriggerPoints = () => {
			const points = getTriggerPoints();
			triggerPointEnter = points.enter;
			triggerPointLeave = points.leave;
		};

		const timer = setTimeout(() => {
			updateTriggerPoints();
		}, 100);

		window.addEventListener("resize", updateTriggerPoints);

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const scrollingDown = currentScrollY > lastScrollY;
			lastScrollY = currentScrollY;

			if (scrollingDown) {
				if (currentScrollY >= triggerPointEnter && activeSection !== "about") {
					onSetActive("about");
				}
			} else {
				if (currentScrollY < triggerPointLeave && activeSection !== null) {
					onSetActive(null);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			clearTimeout(timer);
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", updateTriggerPoints);
		};
	}, [activeSection, onSetActive]);

	const motionProps = isHamburger
		? {
				variants: fadeInSlideLeftGroup.container,
				initial: "hidden",
				animate: "show",
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
			{SECTIONS.map((section) => {
				const isActive = activeSection === section;

				return (
					<motion.li
						key={section}
						variants={isHamburger ? fadeInSlideLeftGroup.item : fadeInSlideDownwardGroup.item}
						className={classNames("navbar-link-list-item", {
							active: isActive,
							underline: isActive,
						})}
					>
						<Link
							to={section}
							smooth={true}
							duration={600}
							spy={true}
							offset={linkOffset}
							onClick={onLinkClick}
							onSetActive={() => onSetActive(section)}
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
