import React, { useState } from "react";
import TechStackIconTouch from "./TechStackIconTouch";
import TechStackIcon from "./TechStackIcon";
import CursorInfoBox from "@/components/ui/CursorInfoBox";
import { useMediaQuery } from "react-responsive";
import { categoryInfo, techStack } from "@/constants/techStack";
import RevealAnimation from "../ui/RevealAnimation";

type Tech = (typeof techStack)[number];

const TechStack = () => {
	const [hoveredCategory, setHoverCategory] = useState<string | null>(null);
	const [hoveredInfo, setHoveredInfo] = useState<string | null>(null);
	const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

	const isSmallScreen = useMediaQuery({ maxWidth: 768 });

	// Mouse event handlers
	const handleMouseMove = (e: React.MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
	const handleMouseEnter = (info: string) => setHoveredInfo(info);

	const groupedByCategory = techStack.reduce((acc, tech) => {
		if (!acc[tech.category]) acc[tech.category] = [];
		acc[tech.category].push(tech);
		return acc;
	}, {} as Record<string, Tech[]>);

	return (
		<>
			<RevealAnimation>
				<h3 className="about-section-heading">Technologies I’ve worked with</h3>
			</RevealAnimation>
			{!isSmallScreen ? (
				<div className="icon-wrapper" onMouseMove={handleMouseMove}>
					{techStack.map(({ name, icon, category }) => {
						const isHighlighted = hoveredCategory === null || hoveredCategory === category;
						const isLabelHighlighted = hoveredCategory === category;

						return (
							<RevealAnimation key={name}>
								<TechStackIcon
									name={name}
									icon={icon}
									category={category}
									isHighlighted={isHighlighted}
									isLabelHighlighted={isLabelHighlighted}
									isSmallScreen={isSmallScreen}
									onHoverChange={(newCategory) => {
										setHoverCategory(newCategory);
										handleMouseEnter(newCategory ?? "");
									}}
								/>
							</RevealAnimation>
						);
					})}
				</div>
			) : (
				<RevealAnimation className="icon-wrapper-touch">
					<div className="scroll-row">
						{Object.entries(groupedByCategory).map(([category, items]) => (
							<div className="tech-category-group" key={category}>
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
				</RevealAnimation>
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
