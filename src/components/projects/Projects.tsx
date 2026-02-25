import filmFlare from "@/assets/images/filmflare-screenshot.png";
import matdagboken from "@/assets/images/matdagboken-screenshot.jpg";
import { projectIconsMap } from "@/constants/projectIcons";
import SectionHeader from "../layout/SectionHeader";
import RevealAnimation from "../ui/RevealAnimation";
import ProjectFeature from "./project-feature/ProjectFeature";
import FeatureDivider from "./FeatureDivider";

export default function Projects() {
	return (
		<>
			<RevealAnimation className="project-heading">
				<SectionHeader title="Projects" />
				<h3 className="subheading">Some Things I've Made.</h3>
			</RevealAnimation>

			<ProjectFeature
				imageProps={{
					src: filmFlare,
					alt: "Screenshot from film flare site",
					imageClass: "project-image",
					wrapperClass: "project-image-wrapper",
				}}
				heading={<h3>The Filmflare Project</h3>}
				description={
					<p>
						FilmFlare is a React web app that leverages TanStack Query and the TMDB API.
						It lets users explore movies and TV shows, with features like search, genre
						filters, sorting, and a movie history to revisit previously viewed titles.
						Building it taught me about caching, local storage, and structuring React
						components for efficient data fetching. I’m proud of this project, as it
						strengthened my understanding of React and real-world API usage.
					</p>
				}
				projectIcons={["typescript", "react", "reactQuery"].map((key) => {
					const { icon: Icon, label } = projectIconsMap[key];

					return (
						<span key={key} className="project-icon" data-tooltip={label}>
							<Icon />
						</span>
					);
				})}
			/>

			<FeatureDivider />

			<ProjectFeature
				imageProps={{
					src: matdagboken,
					alt: "Screenshot from matdagboken site",
					imageClass: "project-image",
					wrapperClass: "project-image-wrapper",
				}}
				heading={<h3>Matdagboken</h3>}
				description={
					<p>
						Matdagboken is a large-scale meal tracking platform that I worked on during
						my internship at OAWA, where I was responsible for redesigning and
						rebuilding the entire Matdagboken section from scratch. Following a Figma
						design, the goal was to make the experience more app-like, inspired by tools
						such as Lifesum. My work included implementing complex search flows, macro
						scaling logic, micro-animations, and modal-based interactions, as well as
						setting up backend routes, controllers, migrations, and models in Laravel.
						The project is still ongoing, but the features I’ve delivered are already
						live and in active use.
					</p>
				}
				projectIcons={["javascript", "react", "php", "laravel"].map((key) => {
					const { icon: Icon, label } = projectIconsMap[key];

					return (
						<span key={key} className="project-icon" data-tooltip={label}>
							<Icon />
						</span>
					);
				})}
				reverse
			/>
		</>
	);
}
