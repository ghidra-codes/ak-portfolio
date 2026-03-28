import { motion, type Variants } from "motion/react";
import { PROJECT_LINKS, type ProjectLinkKey } from "@/constants/projectLinks";

const LINK_ORDER: ProjectLinkKey[] = ["github", "figma", "site"];
const REVERSED_ORDER: ProjectLinkKey[] = ["site", "figma", "github"];

interface ProjectLinksProps {
	links: Partial<Record<ProjectLinkKey, string>>;
	itemVariants?: Variants;
	isMobile?: boolean;
	reverse?: boolean;
}

const ProjectLinks = ({ links, itemVariants, isMobile = false, reverse = false }: ProjectLinksProps) => {
	const order = isMobile ? LINK_ORDER : reverse ? REVERSED_ORDER : LINK_ORDER;

	return (
		<>
			{order.map((key) => {
				const url = links[key];
				if (!url) return null;

				const { Icon, label } = PROJECT_LINKS[key];

				return (
					<motion.a
						key={key}
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						className="project-link"
						aria-label={label}
						data-link-type={key}
						variants={itemVariants}
					>
						<Icon className="project-link-icon" />
					</motion.a>
				);
			})}
		</>
	);
};

export default ProjectLinks;
