import { useMediaQuery } from "react-responsive";
import DesktopNavBar from "./nav-desktop/DesktopNavBar";
import MobileNavBar from "./nav-mobile/MobileNavBar";

export default function NavBar() {
	const isSmallScreen = useMediaQuery({ maxWidth: 942 });

	return isSmallScreen ? <MobileNavBar /> : <DesktopNavBar />;
}
