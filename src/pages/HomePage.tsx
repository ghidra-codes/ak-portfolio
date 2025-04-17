import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import Header from "../components/Header";

export default function HomePage() {
	return (
		<>
			<Header />
			<AboutPage />
			<ProjectsPage />
			<ContactPage />
		</>
	);
}
