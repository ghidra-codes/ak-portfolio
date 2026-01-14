import { motion } from "motion/react";
import { Link } from "react-scroll";
import { SECTIONS } from "@/constants/sections";
import { fadeInSlideLeftGroup } from "@/utils/animations/nav-links/fadeInSlideLeftGroup";

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
			<motion.li
				key={section}
				variants={fadeInSlideLeftGroup.item}
				className={"navbar-link-list-item"}
			>
				<Link
					to={section}
					smooth={true}
					duration={600}
					offset={-32.5}
					onClick={() => setShowMenu(false)}
				>
					{section}
				</Link>
			</motion.li>
		))}
	</motion.ul>
);

export default MobileNavLinks;
