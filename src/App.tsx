import Projects from "./pages/Projects";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import NavBar from "./components/layout/NavBar/NavBar";
import Header from "./components/layout/Header";

function App() {
	return (
		<>
			<NavBar />
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
			<Footer />
		</>
	);
}

export default App;
