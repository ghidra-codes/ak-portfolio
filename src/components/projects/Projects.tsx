import SectionHeader from "../layout/SectionHeader";
import RevealAnimation from "../ui/RevealAnimation";
import ProjectFeature from "./ProjectFeature";
import filmFlare from "@/assets/images/filmflare-screenshot.png";

export default function Projects() {
	return (
		<>
			<RevealAnimation width="100%" className="project-heading">
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
			>
				<h3>The Filmflare Project</h3>
				<p>
					FilmFlare is a React web app that leverages TanStack Query and the TMDB API. It lets users
					explore movies and TV shows, with features like search, genre filters, sorting, and a
					movie history to revisit previously viewed titles. Building it taught me about caching,
					local storage, and structuring React components for efficient data fetching. I’m proud of
					this project, as it strengthened my understanding of React and real-world API usage.
				</p>
			</ProjectFeature>
		</>
	);
}
