import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TechStackIconTouch from "./TechStackIconTouch";
import { categoryInfo, Tech } from "@/constants/techStack";
import React from "react";

interface TechStackSliderProps {
	groupedByCategory: Record<string, Tech[]>;
}

const TechStackSlider: React.FC<TechStackSliderProps> = ({ groupedByCategory }: TechStackSliderProps) => {
	const [sliderRef] = useKeenSlider({
		mode: "free-snap",
		loop: true,
		dragSpeed: 0.75,
	});

	return (
		<div ref={sliderRef} className="keen-slider scroll-row">
			{Object.entries(groupedByCategory).map(([category, items]) => (
				<div className="keen-slider__slide tech-category-group" key={category}>
					<div className="category-heading-wrapper">
						<div className="category-heading-container">
							<img
								className="category-heading-icon"
								src={categoryInfo[category].icon}
								alt={categoryInfo[category].label}
							/>
							<p className="category-heading">{categoryInfo[category].label}</p>
						</div>
					</div>
					<div className="touch-icons">
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
