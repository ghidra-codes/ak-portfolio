import { Section } from "@/types/sections.types";
import getTriggerPoints from "@/utils/helper/getTriggerPoints";
import { useEffect } from "react";

interface UseScrollActiveSectionProps {
	activeSection: Section | null;
	onSetActive: (section: Section | null) => void;
}

const useScrollActiveSection = ({ activeSection, onSetActive }: UseScrollActiveSectionProps) => {
	useEffect(() => {
		let lastScrollY = window.scrollY;
		let triggerPointEnter = 0;
		let triggerPointLeave = 0;

		const updateTriggerPoints = () => {
			const points = getTriggerPoints();
			triggerPointEnter = points.enter;
			triggerPointLeave = points.leave;
		};

		updateTriggerPoints();

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const scrollingDown = currentScrollY > lastScrollY;
			lastScrollY = currentScrollY;

			if (scrollingDown) {
				if (currentScrollY >= triggerPointEnter && activeSection !== "about") {
					onSetActive("about");
				}
			} else {
				if (currentScrollY < triggerPointLeave && activeSection !== null) {
					onSetActive(null);
				}
			}
		};

		if (activeSection === null || activeSection === "about") {
			window.addEventListener("scroll", handleScroll);
		} else {
			window.removeEventListener("scroll", handleScroll);
		}

		window.addEventListener("resize", updateTriggerPoints);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", updateTriggerPoints);
		};
	}, [activeSection, onSetActive]);
};

export default useScrollActiveSection;
