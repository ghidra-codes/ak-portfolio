import { useEffect, useRef } from "react";
import type { Section, TriggerPoint } from "@/types/sections.types";
import getTriggerPoints from "@/utils/helper/getTriggerPoints";
import isSection from "@/utils/helper/isSection";

interface UseScrollActiveSectionProps {
	activeSection: Section | null;
	onSetActive: (section: Section | null) => void;
}

/**
 * Tracks and updates the current active section based on scroll position.
 */
const useScrollActiveSection = ({ activeSection, onSetActive }: UseScrollActiveSectionProps) => {
	const triggerPointsRef = useRef<TriggerPoint[]>([]);

	useEffect(() => {
		const updateTriggerPoints = () => (triggerPointsRef.current = getTriggerPoints());

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			let newActiveSection: Section | null = null;

			// Find the last section scrolled past
			for (const { id, enter } of triggerPointsRef.current) {
				// If we are in the header section this doesn't pass, newActiveSection remains null
				if (currentScrollY >= enter && isSection(id)) newActiveSection = id;
			}

			if (newActiveSection !== activeSection) onSetActive(newActiveSection);
		};

		updateTriggerPoints();
		handleScroll(); // Set initial section

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", updateTriggerPoints);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", updateTriggerPoints);
		};
	}, [activeSection, onSetActive]);
};

export default useScrollActiveSection;
