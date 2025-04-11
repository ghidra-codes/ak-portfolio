import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="navbar">
			{/* Left side: Logo */}
			<div className="logo-wrapper">
				<span className="">Logo</span>
			</div>

			{/* Right side: Navigation links */}
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
};

export default NavBar;
