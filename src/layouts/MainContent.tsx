import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Decorations from "@/components/layout/Decorations";
import Header from "@/components/layout/Header";
import Projects from "@/components/projects/Projects";

const MainContent = () => (
	<main>
		<Header />
		<section id="about">
			<About />
		</section>
		<section id="projects">
			<Projects />
		</section>
		<section id="contact">
			<Contact />
		</section>

		<Decorations />
	</main>
);

export default MainContent;
