import { useEffect, useRef } from "react";
import type { Section, TriggerPoint } from "@/types/sections.types";
import getTriggerPoints from "@/utils/helpers/getTriggerPoints";
import isSection from "@/utils/helpers/isSection";

const BOTTOM_THRESHOLD = 80;

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
		const updateTriggerPoints = () => {
			triggerPointsRef.current = getTriggerPoints();
		};

		const getLastSection = (): Section | null => {
			const points = triggerPointsRef.current;
			if (points.length === 0) return null;

			const lastId = points[points.length - 1].id;
			return isSection(lastId) ? lastId : null;
		};

		const isNearPageBottom = () => {
			const scrollBottom = window.innerHeight + window.scrollY;
			const docHeight = document.documentElement.scrollHeight;

			return scrollBottom >= docHeight - BOTTOM_THRESHOLD;
		};

		// SCROLL HANDLER

		const handleScroll = () => {
			const scrollY = window.scrollY;

			// Bottom override
			if (isNearPageBottom()) {
				const lastSection = getLastSection();

				if (lastSection && lastSection !== activeSection) {
					onSetActive(lastSection);
				}

				return;
			}

			// Default scroll detection
			let nextActive: Section | null = null;

			for (const { id, enter } of triggerPointsRef.current) {
				if (scrollY >= enter && isSection(id)) nextActive = id;
			}

			if (nextActive !== activeSection) onSetActive(nextActive);
		};

		// INIT

		updateTriggerPoints();
		handleScroll();

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", updateTriggerPoints);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", updateTriggerPoints);
		};
	}, [activeSection, onSetActive]);
};

export default useScrollActiveSection;
