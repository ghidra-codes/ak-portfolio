import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import justLogo from "../assets/images/logo/just-logo.png";
import { useEffect, useState } from "react";

export default function NavBar() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 820);
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<nav className="navbar">
			<div className="logo-wrapper">
				<img src={isMobile ? justLogo : logo} alt="logo" />
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
