import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TechStackIconTouch from "./TechStackIconTouch";
import { categoryInfo, Tech } from "@/constants/techStack";
import React, { useEffect, useState } from "react";
import leftArrow from "@/assets/images/icons/left-slide-arrow.svg";
import rightArrow from "@/assets/images/icons/right-slide-arrow.svg";
import { motion, easeInOut } from "motion/react";
import classNames from "classnames";
interface TechStackSliderProps {
	groupedByCategory: Record<string, Tech[]>;
}

const TechStackSlider: React.FC<TechStackSliderProps> = ({ groupedByCategory }: TechStackSliderProps) => {
	const [showArrows, setShowArrows] = useState(true);
	const [timeoutId, setTimeoutId] = useState<number | null>(null);

	const [sliderRef] = useKeenSlider<HTMLDivElement>({
		loop: true,
		slides: {
			origin: "center",
			perView: 1,
		},
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

	const arrowProps = {
		className: "arrow",
		initial: { opacity: 0 },
		animate: { opacity: showArrows ? 1 : 0 },
		transition: { duration: 0.25, ease: easeInOut },
	};

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
						{items.map(({ name, icon }) => (
							<TechStackIconTouch key={name} name={name} icon={icon} />
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default TechStackSlider;
