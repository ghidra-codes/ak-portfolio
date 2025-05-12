import useMediaQuery from "../hooks/useMediaQuery";
import HamburgerMenu from "./HamburgerMenu";
import NavBarLinks from "./NavBarLinks";

export default function NavBar() {
	const isSmallScreen = useMediaQuery("(max-width: 920px)");

	return (
		<nav className="navbar">
			<div className="brand">
				<div className="logo-wrapper"></div>
				{!isSmallScreen && <h1 className="navbar-heading">Alexander Kallin</h1>}
			</div>
			{isSmallScreen ? <HamburgerMenu /> : <NavBarLinks />}
		</nav>
	);
}
