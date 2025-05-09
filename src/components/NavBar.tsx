import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<nav className="navbar">
			<div className="brand">
				<div className="logo-wrapper"></div>
				<h1 className="navbar-heading">Alexander Kallin</h1>
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
