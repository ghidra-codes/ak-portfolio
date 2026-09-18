import { useMediaQuery } from "react-responsive";
import DesktopNavBar from "@/components/layout/nav-bar/nav-desktop/DesktopNavBar";
import MobileNavBar from "@/components/layout/nav-bar/nav-mobile/MobileNavBar";

export default function NavBar() {
	const isSmallScreen = useMediaQuery({ maxWidth: 942 });

	return isSmallScreen ? <MobileNavBar /> : <DesktopNavBar />;
}
