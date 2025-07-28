import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Section } from "@/types/sections.types";
import { SECTIONS } from "@/constants/sections";
import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";

interface NavBarProps {
	onStartHeaderAnimations: () => void;
}

export default function NavBar({ onStartHeaderAnimations }: NavBarProps) {
	const isSmallScreen = useMediaQuery({ maxWidth: 942 });

	const [activeSection, setActiveSection] = useState<Section | null>(null);
	const [showBtn, setShowBtn] = useState(false);

	useEffect(() => {
		if (isSmallScreen) {
			setShowBtn(true);
			return;
		}

		const delayUntilReady = (SECTIONS.length - 1) * 0.2 + 0.3;

		const timeout = setTimeout(() => {
			setShowBtn(true);
		}, delayUntilReady * 1000);

		return () => clearTimeout(timeout);
	}, [isSmallScreen]);

	return (
		<>
			{isSmallScreen ? (
				<MobileNavBar
					activeSection={activeSection}
					setActiveSection={setActiveSection}
					onStartHeaderAnimations={onStartHeaderAnimations}
					showBtn={showBtn}
				/>
			) : (
				<DesktopNavBar
					activeSection={activeSection}
					setActiveSection={setActiveSection}
					onStartHeaderAnimations={onStartHeaderAnimations}
					showBtn={showBtn}
				/>
			)}
		</>
	);
}
