import { motion, type Variants } from "motion/react";
import { type ProjectLinkKey, projectLinksMap } from "@/constants/projectLinks";

interface ProjectLinksProps {
	links?: Partial<Record<ProjectLinkKey, string>>;
	itemVariants?: Variants;
}

const ProjectLinks = ({ links, itemVariants }: ProjectLinksProps) => {
	if (!links) return null;

	return (
		<>
			{(Object.keys(links) as ProjectLinkKey[]).map((key) => {
				const url = links[key];
				if (!url) return null;

				const { Icon, label } = projectLinksMap[key];

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
