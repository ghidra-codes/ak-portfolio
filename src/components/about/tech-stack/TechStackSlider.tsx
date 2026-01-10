import TechStackIconTouch from "./TechStackIconTouch";
import React, { useEffect, useMemo, useRef, useState } from "react";
import leftArrow from "@/assets/icons/left-slide-arrow.svg";
import rightArrow from "@/assets/icons/right-slide-arrow.svg";
import { motion, easeInOut, AnimatePresence } from "motion/react";
import classNames from "classnames";
import useTechStackSlider from "@/hooks/useTechStackSlider";
import { Categories, GroupedCategories } from "@/types/techStack.types";
import { categoryInfo } from "@/constants/techStack";
import { fadeInBlurStaggered } from "@/utils/animations/tech-stack-slider/fadeInBlurStaggered";

export type ScrollDirections = "left" | "right";

interface TechStackSliderProps {
	groupedByCategory: GroupedCategories;
	isInView: boolean;
}

const TechStackSlider: React.FC<TechStackSliderProps> = ({
	groupedByCategory,
	isInView,
}: TechStackSliderProps) => {
	const [currentCategory, setCurrentCategory] = useState<Categories | null>(null);
	const [scrollDirection, setScrollDirection] = useState<ScrollDirections>("left");
	const firstCategoryDelay = useRef<number>(0);

	const { sliderRef, showArrows } = useTechStackSlider({
		groupedByCategory,
		setScrollDirection,
		setCurrentCategory,
		firstCategoryDelay,
	});

	const arrowProps = useMemo(
		() => ({
			className: "arrow",
			initial: { opacity: 0 },
			animate: { opacity: showArrows ? 1 : 0 },
			transition: { duration: 0.25, ease: easeInOut },
		}),
		[showArrows]
	);

	useEffect(() => {
		if (isInView) {
			firstCategoryDelay.current = 0.6;
			setCurrentCategory(Object.keys(groupedByCategory)[0] || null);
		} else {
			firstCategoryDelay.current = 0;
			setCurrentCategory(null);
		}
	}, [isInView, groupedByCategory]);

	return (
		<div ref={sliderRef} className="keen-slider">
			{Object.entries(groupedByCategory).map(([category, items]) => (
				<div className="keen-slider__slide category-group" key={category}>
					<div className="category-header">
						<div className="category-controls">
							<motion.img
								{...arrowProps}
								src={leftArrow}
								alt="Left arrow"
								aria-label="Scroll left"
							/>

							<div className="category-title">
								<img
									className="category-icon"
									src={categoryInfo[category].icon}
									alt={categoryInfo[category].label}
								/>
								<p className="category-label">{categoryInfo[category].label}</p>
							</div>

							<motion.img
								{...arrowProps}
								src={rightArrow}
								alt="Right arrow"
								aria-label="Scroll right"
							/>
						</div>
					</div>

					<div className={classNames("icons-row", { "icons-row--many": category === "frontend" })}>
						<AnimatePresence>
							{currentCategory === category &&
								isInView &&
								items.map(({ name, icon }, index) => (
									<motion.div
										key={name}
										variants={fadeInBlurStaggered}
										initial="initial"
										animate="animate"
										exit="exit"
										custom={{
											index,
											total: items.length,
											direction: scrollDirection,
											extraDelay: firstCategoryDelay.current || 0,
										}}
									>
										<TechStackIconTouch name={name} icon={icon} />
									</motion.div>
								))}
						</AnimatePresence>
					</div>
				</div>
			))}
		</div>
	);
};

export default TechStackSlider;
