import { useEffect, useRef } from "react";
import { Section } from "@/types/sections.types";
import getTriggerPoints from "@/utils/helper/getTriggerPoints";

interface UseScrollActiveSectionProps {
	activeSection: Section | null;
	onSetActive: (section: Section | null) => void;
}

const useScrollActiveSection = ({ activeSection, onSetActive }: UseScrollActiveSectionProps) => {
	const triggerPointsRef = useRef({ enter: 0, leave: 0 });
	const lastScrollYRef = useRef(0);

	useEffect(() => {
		const updateTriggerPoints = () => {
			triggerPointsRef.current = getTriggerPoints();
		};

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const scrollingDown = currentScrollY > lastScrollYRef.current;
			lastScrollYRef.current = currentScrollY;

			const { enter, leave } = triggerPointsRef.current;

			if (scrollingDown && currentScrollY > enter && activeSection !== "about") {
				onSetActive("about");
			}

			if (!scrollingDown && currentScrollY < leave && activeSection !== null) {
				onSetActive(null);
			}
		};

		const rafId = requestAnimationFrame(() => {
			updateTriggerPoints();
			lastScrollYRef.current = window.scrollY;
		});

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", updateTriggerPoints);

		return () => {
			cancelAnimationFrame(rafId);
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", updateTriggerPoints);
		};
	}, [activeSection, onSetActive]);
};

export default useScrollActiveSection;
