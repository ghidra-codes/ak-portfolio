// src/App.tsx
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/projects" element={<ProjectsPage />} />
				<Route path="/contact" element={<ContactPage />} />
				{/* Optional: 404 route */}
				<Route path="*" element={<div>Page Not Found</div>} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
