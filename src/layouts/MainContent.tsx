import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
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
	</main>
);

export default MainContent;
