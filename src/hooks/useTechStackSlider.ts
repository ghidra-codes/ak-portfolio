import type { KeenSliderInstance } from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import { type RefObject, useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ScrollDirections } from "@/components/about/tech-stack/TechStackSlider";
import type { Categories, GroupedCategories } from "@/types/techStack.types";

interface UseTechStackSliderParams {
	groupedByCategory: GroupedCategories;
	setScrollDirection: (direction: ScrollDirections) => void;
	setCurrentCategory: (category: Categories) => void;
	firstCategoryDelay: RefObject<number>;
}

/**
 * Sets up a looping KeenSlider for tech stack categories,
 * tracking the current category and scroll direction while handling arrow visibility.
 */
const useTechStackSlider = ({
	groupedByCategory,
	firstCategoryDelay,
	setScrollDirection,
	setCurrentCategory,
}: UseTechStackSliderParams) => {
	const previousSlideIndexRef = useRef<number>(0);

	// Get category names from grouped data
	const categories = useMemo(() => Object.keys(groupedByCategory), [groupedByCategory]);
	const [showArrows, setShowArrows] = useState(true);
	const [timeoutId, setTimeoutId] = useState<number | null>(null);

	// Update current category and scroll direction on slide change
	const handleSlideChanged = useCallback(
		(slider: KeenSliderInstance) => {
			const newIndex = slider.track.details.rel;
			const category = categories[newIndex];

			const previousIndex = previousSlideIndexRef.current;
			const total = categories.length;

			// Determine scroll direction
			const direction =
				(newIndex > previousIndex && newIndex - previousIndex < total / 2) ||
				(previousIndex > newIndex && previousIndex - newIndex > total / 2)
					? "left"
					: "right";

			setScrollDirection(direction);
			previousSlideIndexRef.current = newIndex;

			// Reset first category delay if needed
			if (firstCategoryDelay.current) firstCategoryDelay.current = 0;

			setCurrentCategory(category);
		},
		[categories, firstCategoryDelay, setCurrentCategory, setScrollDirection],
	);

	const [sliderRef] = useKeenSlider<HTMLDivElement>({
		loop: true,
		slides: {
			origin: "center",
			perView: 1,
		},
		slideChanged: handleSlideChanged,
		// Hide arrows while dragging
		dragStarted: () => {
			setShowArrows(false);
			if (timeoutId) clearTimeout(timeoutId);
		},
		// Show arrows 500ms after drag ends
		dragEnded: () => {
			const id = window.setTimeout(() => {
				setShowArrows(true);
			}, 500);
			setTimeoutId(id);
		},
	});

	useEffect(() => {
		return () => {
			if (timeoutId) clearTimeout(timeoutId);
		};
	}, [timeoutId]);

	return { sliderRef, showArrows };
};

export default useTechStackSlider;
