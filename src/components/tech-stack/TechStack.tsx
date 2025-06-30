import React, { useRef, useState } from "react";
import TechStackIcon from "./TechStackIcon";
import CursorInfoBox from "@/components/ui/CursorInfoBox";
import { useMediaQuery } from "react-responsive";
import { categoryInfo, Tech, techStack } from "@/constants/techStack";
import RevealAnimation from "../ui/RevealAnimation";
import TechStackSlider from "./TechStackSlider";
import { motion, useInView } from "motion/react";
import { EASE_OUT_SLOW } from "@/constants/animations";

const TechStack = () => {
	const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
	const [hoveredInfo, setHoveredInfo] = useState<string | null>(null);
	const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

	const sliderRef = useRef(null);
	const isInView = useInView(sliderRef, { once: true, margin: "30px" });
	const isSmallScreen = useMediaQuery({ maxWidth: 768 });

	const groupedByCategory = techStack.reduce((acc, tech) => {
		(acc[tech.category] ??= []).push(tech);

		return acc;
	}, {} as Record<string, Tech[]>);

	const handleMouseMove = (e: React.MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });

	const onHoverChange = (newCategory: string | null) => {
		setHoveredCategory(newCategory);
		setHoveredInfo(newCategory ?? null);
	};

	return (
		<>
			<RevealAnimation>
				<h3 className="about-section-heading">Technologies I’ve worked with</h3>
			</RevealAnimation>

			{!isSmallScreen ? (
				<div className="icon-wrapper" onMouseMove={handleMouseMove}>
					{techStack.map(({ name, icon, category }) => {
						const isHighlighted = !hoveredCategory || hoveredCategory === category;

						return (
							<RevealAnimation key={name}>
								<TechStackIcon
									name={name}
									icon={icon}
									category={category}
									isHighlighted={isHighlighted}
									isLabelHighlighted={hoveredCategory === category}
									onHoverChange={onHoverChange}
								/>
							</RevealAnimation>
						);
					})}
				</div>
			) : (
				<motion.div
					ref={sliderRef}
					className="slider-wrapper"
					initial={{ opacity: 0, y: 75, filter: "grayscale(100%)" }}
					animate={isInView ? { opacity: 1, y: 0, filter: "grayscale(0%)" } : {}}
					transition={{
						opacity: { duration: 0.8, ease: EASE_OUT_SLOW },
						y: { duration: 0.8, ease: EASE_OUT_SLOW },
						filter: { duration: 1, ease: [0.3, 0, 0.7, 1] },
					}}
				>
					<TechStackSlider groupedByCategory={groupedByCategory} />
				</motion.div>
			)}

			{hoveredInfo && !isSmallScreen && (
				<CursorInfoBox
					x={cursorPos.x}
					y={cursorPos.y}
					icon={categoryInfo[hoveredInfo].icon}
					label={categoryInfo[hoveredInfo].label}
				/>
			)}
		</>
	);
};

export default TechStack;
