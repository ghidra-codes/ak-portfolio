import git from "@/assets/images/icons/git.svg";
import react from "@/assets/images/icons/react.svg";
import js from "@/assets/images/icons/js.svg";
import ts from "@/assets/images/icons/ts.svg";
import node from "@/assets/images/icons/node-js.svg";
import prisma from "@/assets/images/icons/prisma.svg";
import scss from "@/assets/images/icons/scss.svg";
import bootstrap from "@/assets/images/icons/bootstrap.svg";
import express from "@/assets/images/icons/express.svg";
import wordpress from "@/assets/images/icons/wordpress.svg";
import python from "@/assets/images/icons/python.svg";
import tailwind from "@/assets/images/icons/tailwind.svg";
import mongodb from "@/assets/images/icons/mongodb.svg";
import mysql from "@/assets/images/icons/mysql.svg";

import AnimateOnScroll from "./AnimateOnScroll";
import React, { useState } from "react";

// TODO: Add a info text to the cursor when a icon is being hovered
// TODO: Add databases to the tech stack

const Tools = () => {
	const [hoveredCategory, setHoverCategory] = useState<string | null>(null);
	const [hoveredInfo, setHoveredInfo] = useState<string | null>(null);
	const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e: React.MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
	const handleMouseEnter = (info: string) => setHoveredInfo(info);
	const handleMouseLeave = () => setHoveredInfo(null);

	const handleCategoryClick = (category: string) => {
		setHoverCategory(category);
		setTimeout(() => setHoverCategory(null), 2500); // 2.5 seconds
	};

	const techStack = [
		{ name: "JavaScript", icon: js, category: "language" },
		{ name: "TypeScript", icon: ts, category: "language" },
		{ name: "Python", icon: python, category: "language" },
		{ name: "React", icon: react, category: "frontend" },
		{ name: "Tailwind", icon: tailwind, category: "frontend" },
		{ name: "SCSS", icon: scss, category: "frontend" },
		{ name: "Bootstrap", icon: bootstrap, category: "frontend" },
		{ name: "Node.js", icon: node, category: "backend" },
		{ name: "Express", icon: express, category: "backend" },
		{ name: "Prisma", icon: prisma, category: "backend" },
		{ name: "WordPress", icon: wordpress, category: "tools & platforms" },
		{ name: "Git", icon: git, category: "tools & platforms" },
		{ name: "MongoDB", icon: mongodb, category: "databases" },
		{ name: "MySQL", icon: mysql, category: "databases" },
	];

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
						// Add onClick event to highlight category
						onClick={() => handleCategoryClick(category)}
					>
						<img src={icon} alt={`${name} icon`} />
						<p className={`icon-label ${hoveredCategory === category ? "highlight-label" : ""}`}>{name}</p>
					</div>
				))}
			</div>
			{hoveredInfo && (
				<div
					className="cursor-info-box"
					style={{
						position: "fixed",
						top: cursorPos.y - 15,
						left: cursorPos.x + 50,
						pointerEvents: "none",
						zIndex: 9999,
						transform: "translate(-50%, -50%)",
					}}
				>
					{hoveredInfo}
				</div>
			)}
		</AnimateOnScroll>
	);
};

export default Tools;
