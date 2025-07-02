import { ScrollDirections } from "@/components/about/tech-stack/TechStackSlider";
import { Categories, GroupedCategories } from "@/types/techStack.types";
import { KeenSliderInstance } from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import { RefObject, useCallback, useEffect, useMemo, useRef, useState } from "react";

interface UseTechStackSliderParams {
	groupedByCategory: GroupedCategories;
	setScrollDirection: (direction: ScrollDirections) => void;
	setCurrentCategory: (category: Categories) => void;
	firstCategoryDelay: RefObject<number>;
}

const useTechStackSlider = ({
	groupedByCategory,
	firstCategoryDelay,
	setScrollDirection,
	setCurrentCategory,
}: UseTechStackSliderParams) => {
	const previousSlideIndexRef = useRef<number>(0);
	const categories = useMemo(() => Object.keys(groupedByCategory), [groupedByCategory]);
	const [showArrows, setShowArrows] = useState(true);
	const [timeoutId, setTimeoutId] = useState<number | null>(null);

	const handleSlideChanged = useCallback(
		(slider: KeenSliderInstance) => {
			const newIndex = slider.track.details.rel;
			const category = categories[newIndex];

			const previousIndex = previousSlideIndexRef.current;
			const total = categories.length;

			const direction =
				(newIndex > previousIndex && newIndex - previousIndex < total / 2) ||
				(previousIndex > newIndex && previousIndex - newIndex > total / 2)
					? "left"
					: "right";

			setScrollDirection(direction);
			previousSlideIndexRef.current = newIndex;

			if (firstCategoryDelay.current) firstCategoryDelay.current = 0;
			setCurrentCategory(category);
		},
		[categories, firstCategoryDelay, setCurrentCategory, setScrollDirection]
	);

	const [sliderRef] = useKeenSlider<HTMLDivElement>({
		loop: true,
		slides: {
			origin: "center",
			perView: 1,
		},
		slideChanged: handleSlideChanged,
		dragStarted: () => {
			setShowArrows(false);
			if (timeoutId) clearTimeout(timeoutId);
		},
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
