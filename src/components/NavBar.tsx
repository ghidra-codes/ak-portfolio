import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";

export default function NavBar() {
	const isSmallScreen = useMediaQuery("(max-width: 800px)");
	return (
		<nav className="navbar">
			<div className="brand">
				<div className="logo-wrapper"></div>
				{!isSmallScreen && <h1 className="navbar-heading">Alexander Kallin</h1>}
			</div>
			<ul className="navbar-links">
				<li className="home-link">
					<Link to="/">Home</Link>
				</li>
				<li className="about-link">
					<Link to="/about">About</Link>
				</li>
				<li className="projects-link">
					<Link to="/projects">Projects</Link>
				</li>
				<li className="contact-link">
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
}
