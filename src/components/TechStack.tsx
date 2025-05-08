import AnimateOnScroll from "./AnimateOnScroll";
import React, { useState } from "react";
import { techStack, categoryInfo } from "../data/techStack";
import CursorInfoBox from "./CursorInfoBox";
import useIsTouchDevice from "../hooks/useIsTouchDevice";
import TechStackIcon from "./TechStackIcon";

const TechStack = () => {
	const [hoveredCategory, setHoverCategory] = useState<string | null>(null);
	const [hoveredInfo, setHoveredInfo] = useState<string | null>(null);
	const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

	const isTouchDevice = useIsTouchDevice();

	// Mouse event handlers
	const handleMouseMove = (e: React.MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
	const handleMouseEnter = (info: string) => setHoveredInfo(info);

	return (
		<AnimateOnScroll className="tech-stack">
			<h2>Technologies I’ve worked with</h2>
			<div className="icon-wrapper" onMouseMove={handleMouseMove}>
				{techStack.map(({ name, icon, category }) => {
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
				})}
			</div>
			{hoveredInfo && !isTouchDevice && (
				<CursorInfoBox
					x={cursorPos.x}
					y={cursorPos.y}
					icon={categoryInfo[hoveredInfo].icon}
					label={categoryInfo[hoveredInfo].label}
				/>
			)}
		</AnimateOnScroll>
	);
};

export default TechStack;
