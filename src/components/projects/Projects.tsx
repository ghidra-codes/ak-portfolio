import React from "react";
import { FEATURED_PROJECTS } from "@/constants/featuredProjects";
import { PROJECT_ICONS } from "@/constants/projectIcons";
import SectionDivider from "../layout/SectionDivider";
import SectionHeader from "../layout/SectionHeader";
import RevealAnimation from "../ui/RevealAnimation";
import FeatureDivider from "./FeatureDivider";
import OtherProjects from "./OtherProjects";
import ProjectFeature from "./project-feature/ProjectFeature";

export default function Projects() {
	return (
		<>
			<RevealAnimation className="project-heading">
				<SectionHeader title="Projects" />
				<h3 className="subheading">Some Things I've Made.</h3>
			</RevealAnimation>

			{/* PROJECT LIST */}
			{FEATURED_PROJECTS.map((project, index) => {
				return (
					<React.Fragment key={project.id}>
						<ProjectFeature
							id={project.id}
							imageProps={project.image}
							heading={<h3>{project.title}</h3>}
							description={<p>{project.description}</p>}
							projectIcons={FEATURED_PROJECTS[index].icons.map((key) => {
								const { icon: Icon, label } = PROJECT_ICONS[key];

								return (
									<span key={key} className="project-icon" data-tooltip={label}>
										<Icon />
									</span>
								);
							})}
							projectLinks={project.links}
							reverse={project.reverse}
						/>

						{/* DIVIDER BETWEEN ITEMS */}
						{index < FEATURED_PROJECTS.length - 1 && (
							<RevealAnimation setFullWidth>
								<FeatureDivider />
							</RevealAnimation>
						)}
					</React.Fragment>
				);
			})}

			<RevealAnimation className="other-projects-wrapper">
				<SectionDivider title="Additional projects" className="other-projects-divider" />
				<OtherProjects />
			</RevealAnimation>
		</>
	);
}
