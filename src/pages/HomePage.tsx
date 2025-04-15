import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import Header from "../components/Header";

export default function HomePage() {
	return (
		<>
			<Header />
			<section id="about">
				<AboutPage />
			</section>
			<section id="projects">
				<ProjectsPage />
			</section>
			<section id="contact">
				<ContactPage />
			</section>
		</>
	);
}
