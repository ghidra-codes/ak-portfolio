import filmFlareImg from "@/assets/images/featured-projects/filmflare-project.png";
import growYourHabitsImg from "@/assets/images/featured-projects/grow-your-habits.png";
import matdagbokenImg from "@/assets/images/featured-projects/matdagboken.png";
import { projectIconsMap } from "@/constants/projectIcons";
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

			<ProjectFeature
				imageProps={{
					src: filmFlareImg,
					alt: "Screenshot from film flare site",
					imageClass: "project-image",
					wrapperClass: "project-image-wrapper",
				}}
				heading={<h3>The Filmflare Project</h3>}
				description={
					<p>
						FilmFlare is a React web app that leverages TanStack Query and the TMDB API. It lets
						users explore movies and TV shows, with features like search, genre filters, sorting,
						and a movie history to revisit previously viewed titles. Building it taught me about
						caching, local storage, and structuring React components for efficient data fetching.
						I’m proud of this project, as it strengthened my understanding of React and real-world
						API usage.
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
				projectLinks={{
					github: "https://github.com/yourusername/grow-your-habits",
					site: "https://grow-your-habits.com",
				}}
			/>

			<RevealAnimation setFullWidth>
				<FeatureDivider />
			</RevealAnimation>

			<ProjectFeature
				imageProps={{
					src: matdagbokenImg,
					alt: "Screenshot from matdagboken site",
					imageClass: "project-image",
					wrapperClass: "project-image-wrapper",
				}}
				heading={<h3>Matdagboken</h3>}
				description={
					<p>
						Matdagboken is a large-scale meal tracking platform I worked on during my internship
						at OAWA, where I redesigned and rebuilt the entire Matdagboken section from scratch.
						Based on a Figma design, the goal was to create a more app-like experience inspired by
						tools such as Lifesum. My work included implementing complex search flows, macro
						scaling logic, micro-animations, and modal-based interactions, as well as building
						backend routes, controllers, migrations, and models in Laravel. The project is still
						ongoing, but the features I’ve delivered are already live and actively used.
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
				projectLinks={{
					figma: "https://www.figma.com/file/yourdesignfile",
					site: "https://grow-your-habits.com",
				}}
				reverse
			/>

			<RevealAnimation setFullWidth>
				<FeatureDivider />
			</RevealAnimation>

			<ProjectFeature
				imageProps={{
					src: growYourHabitsImg,
					alt: "Screenshot from grow your habits site",
					imageClass: "project-image",
					wrapperClass: "project-image-wrapper",
				}}
				heading={<h3>Grow Your Habits</h3>}
				description={
					<p>
						Grow Your Habits is a mobile-first React web app that combines habit tracking with
						gamification. Users build and maintain routines by logging daily habits, while a
						virtual plant visualizes progress by growing or withering based on consistency. The
						app includes insights, statistics, and an achievements system to reinforce behavior.
						Building it taught me about state management with Zustand, structuring scalable
						architecture, and designing an engaging UI with Framer Motion and Lottie, while
						working with Supabase and edge functions for backend logic and persistent data.
					</p>
				}
				projectLinks={{
					github: "https://github.com/yourusername/grow-your-habits",
					site: "https://grow-your-habits.com",
				}}
				projectIcons={["typescript", "react", "reactQuery"].map((key) => {
					const { icon: Icon, label } = projectIconsMap[key];

					return (
						<span key={key} className="project-icon" data-tooltip={label}>
							<Icon />
						</span>
					);
				})}
			/>

			<RevealAnimation className="other-projects-wrapper">
				<SectionDivider title="Additional projects" className="other-projects-divider" />

				<OtherProjects />
			</RevealAnimation>
		</>
	);
}
