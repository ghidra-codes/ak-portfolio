import { motion } from "motion/react";
import { SECTIONS } from "@/constants/sections";
import { fadeInSlideLeftGroup } from "@/utils/animations/nav-links/fadeInSlideLeftGroup";
import { smoothScrollTo } from "@/utils/helpers/smoothScroll";

interface MobileNavLinksProps {
	setShowMenu: (show: boolean) => void;
}

const MobileNavLinks: React.FC<MobileNavLinksProps> = ({ setShowMenu }) => (
	<motion.ul
		className="navbar-links-hamburger-list"
		variants={fadeInSlideLeftGroup.container}
		initial="hidden"
		animate="show"
		exit="hidden"
	>
		{SECTIONS.map((section) => (
			<motion.li key={section} variants={fadeInSlideLeftGroup.item} className={"navbar-link-list-item"}>
				<a
					href={`#${section}`}
					onClick={(e) => {
						e.preventDefault();
						smoothScrollTo(section);
						setShowMenu(false);
					}}
					className="navbar-link"
				>
					{section}
				</a>
			</motion.li>
		))}
	</motion.ul>
);

export default MobileNavLinks;
