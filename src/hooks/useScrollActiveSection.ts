import { useEffect, useRef } from "react";
import { Section } from "@/types/sections.types";
import getTriggerPoints from "@/utils/helper/getTriggerPoints";

interface UseScrollActiveSectionProps {
	activeSection: Section | null;
	onSetActive: (section: Section | null) => void;
}

const useScrollActiveSection = ({ activeSection, onSetActive }: UseScrollActiveSectionProps) => {
	const triggerPointsRef = useRef({ enter: 0, leave: 0 });
	const lastScrollYRef = useRef(window.scrollY);

	useEffect(() => {
		const updateTriggerPoints = () => {
			triggerPointsRef.current = getTriggerPoints();
		};

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const scrollingDown = currentScrollY > lastScrollYRef.current;
			lastScrollYRef.current = currentScrollY;

			const { enter, leave } = triggerPointsRef.current;

			if (scrollingDown) {
				if (currentScrollY >= enter && activeSection !== "about") {
					onSetActive("about");
				}
			} else {
				if (currentScrollY < leave && activeSection !== null) {
					onSetActive(null);
				}
			}
		};

		updateTriggerPoints();
		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", updateTriggerPoints);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", updateTriggerPoints);
		};
	}, [activeSection, onSetActive]);
};

export default useScrollActiveSection;
