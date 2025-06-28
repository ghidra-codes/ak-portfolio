import About from "@/components/About";
import Header from "@/components/layout/Header";
import Projects from "@/components/Projects";

const MainContent = () => (
	<main>
		<section id="home">
			<Header />
		</section>
		<section id="about">
			<About />
		</section>
		<section id="projects">
			<Projects />
		</section>
	</main>
);

export default MainContent;
