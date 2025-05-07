import AnimateOnScroll from "./AnimateOnScroll";
import React, { useState } from "react";
import { techStack, categoryInfo } from "../data/techStack";
import CursorInfoBox from "./CursorInfoBox";
import useIsTouchDevice from "../hooks/useIsTouchDevice";

const Tools = () => {
	const [hoveredCategory, setHoverCategory] = useState<string | null>(null);
	const [hoveredInfo, setHoveredInfo] = useState<string | null>(null);
	const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

	const isTouchDevice = useIsTouchDevice();

	const handleMouseMove = (e: React.MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
	const handleMouseEnter = (info: string) => setHoveredInfo(info);
	const handleMouseLeave = () => setHoveredInfo(null);
	const handleCategoryClick = (category: string) => {
		setHoverCategory(category);
		setTimeout(() => setHoverCategory(null), 2500);
	};

	return (
		<AnimateOnScroll className="tools">
			<h2>Technologies I’ve worked with</h2>
			<div className="icon-wrapper" onMouseMove={handleMouseMove}>
				{techStack.map(({ name, icon, category }) => (
					<div
						key={name}
						className={`icon-container ${
							hoveredCategory === null || hoveredCategory === category ? "highlight" : "dimmed"
						}`}
						onMouseEnter={() => {
							setHoverCategory(category);
							handleMouseEnter(category);
						}}
						onMouseLeave={() => {
							setHoverCategory(null);
							handleMouseLeave();
						}}
						onClick={() => handleCategoryClick(category)}
					>
						<img src={icon} alt={`${name} icon`} />
						<p className={`icon-label ${hoveredCategory === category ? "highlight-label" : ""}`}>{name}</p>
					</div>
				))}
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

export default Tools;
