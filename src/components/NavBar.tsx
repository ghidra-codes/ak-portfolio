import { Link } from "react-router-dom";
import "../index.css";

const NavBar = () => {
	return (
		<nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
			{/* Left side: Logo */}
			<div className="">
				<span className="text-xl font-bold text-gray-800">YourLogo</span>
			</div>

			{/* Right side: Navigation links */}
			<ul className="flex space-x-6">
				<li className="">
					<Link to="/">Home</Link>
				</li>
				<li className="">
					<Link to="/about">About</Link>
				</li>
				<li className="">
					<Link to="/projects">Projects</Link>
				</li>
				<li className="">
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
