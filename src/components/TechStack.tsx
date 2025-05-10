import React, { useState } from "react";
import { techStack, categoryInfo } from "../data/techStack";
import CursorInfoBox from "./CursorInfoBox";
import useIsTouchDevice from "../hooks/useIsTouchDevice";
import TechStackIcon from "./TechStackIcon";
import TechStackIconTouch from "./TechStackIconTouch";
import useMediaQuery from "../hooks/useMediaQuery";
import { AnimatePresence } from "framer-motion";

type Tech = (typeof techStack)[number];

const TechStack = () => {
	const [hoveredCategory, setHoverCategory] = useState<string | null>(null);
	const [hoveredInfo, setHoveredInfo] = useState<string | null>(null);
	const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

	const isTouchDevice = useIsTouchDevice();
	const isSmallScreen = useMediaQuery("(max-width: 600px)");

	// Mouse event handlers
	const handleMouseMove = (e: React.MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
	const handleMouseEnter = (info: string) => setHoveredInfo(info);

	const renderTouchIcons = (items: Tech[]) =>
		items.map(({ name, icon }, index) => {
			if (isSmallScreen) {
				const isOdd = items.length % 2 === 1 && index === items.length - 1;

				return !isOdd ? (
					<TechStackIconTouch key={name} name={name} icon={icon} />
				) : (
					<div className="centered-icon-wrapper" key={name}>
						<TechStackIconTouch name={name} icon={icon} />
					</div>
				);
			}
			return <TechStackIconTouch key={name} name={name} icon={icon} />;
		});

	const groupedByCategory = techStack.reduce((acc, tech) => {
		if (!acc[tech.category]) acc[tech.category] = [];
		acc[tech.category].push(tech);
		return acc;
	}, {} as Record<string, Tech[]>);

	return (
		<>
			<h2 className="about-section-heading">Technologies I’ve worked with</h2>
			<div className="tech-stack">
				<div className={isTouchDevice ? "icon-wrapper-touch" : "icon-wrapper"} onMouseMove={handleMouseMove}>
					{!isTouchDevice
						? techStack.map(({ name, icon, category }) => {
								const isHighlighted = hoveredCategory === null || hoveredCategory === category;
								const isLabelHighlighted = hoveredCategory === category;

								return (
									<TechStackIcon
										key={name}
										name={name}
										icon={icon}
										category={category}
										isHighlighted={isHighlighted}
										isLabelHighlighted={isLabelHighlighted}
										isTouchDevice={isTouchDevice}
										onHoverChange={(newCategory) => {
											setHoverCategory(newCategory);
											handleMouseEnter(newCategory ?? "");
										}}
									/>
								);
						  })
						: Object.entries(groupedByCategory).map(([category, items]) => (
								<div key={category} className="tech-category-group">
									<div className="category-heading-wrapper">
										<img
											className="category-heading-icon"
											src={categoryInfo[category].icon}
											alt={categoryInfo[category].label}
										/>
										<h3 className="category-heading">{categoryInfo[category].label}</h3>
									</div>
									<div className="icon-wrapper">{renderTouchIcons(items)}</div>
								</div>
						  ))}
				</div>
				<AnimatePresence>
					{hoveredInfo && !isTouchDevice && (
						<CursorInfoBox
							x={cursorPos.x}
							y={cursorPos.y}
							icon={categoryInfo[hoveredInfo].icon}
							label={categoryInfo[hoveredInfo].label}
						/>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export default TechStack;
