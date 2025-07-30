import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Section } from "@/types/sections.types";
import MobileNavBar from "./nav-mobile/MobileNavBar";
import DesktopNavBar from "./nav-desktop/DesktopNavBar";

interface NavBarProps {
	onStartHeaderAnimations: () => void;
}

export default function NavBar({ onStartHeaderAnimations }: NavBarProps) {
	const isSmallScreen = useMediaQuery({ maxWidth: 942 });

	const [activeSection, setActiveSection] = useState<Section | null>(null);

	return (
		<>
			{isSmallScreen ? (
				<MobileNavBar onStartHeaderAnimations={onStartHeaderAnimations} />
			) : (
				<DesktopNavBar
					activeSection={activeSection}
					setActiveSection={setActiveSection}
					onStartHeaderAnimations={onStartHeaderAnimations}
				/>
			)}
		</>
	);
}
