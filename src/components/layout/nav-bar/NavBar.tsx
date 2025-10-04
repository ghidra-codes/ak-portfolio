import { useMediaQuery } from "react-responsive";
import MobileNavBar from "./nav-mobile/MobileNavBar";
import DesktopNavBar from "./nav-desktop/DesktopNavBar";

export default function NavBar() {
	const isSmallScreen = useMediaQuery({ maxWidth: 942 });

	return isSmallScreen ? <MobileNavBar /> : <DesktopNavBar />;
}
