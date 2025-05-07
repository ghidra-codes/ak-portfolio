import git from "@/assets/images/icons/tech-stack/git.svg";
import react from "@/assets/images/icons/tech-stack/react.svg";
import js from "@/assets/images/icons/tech-stack/js.svg";
import ts from "@/assets/images/icons/tech-stack/ts.svg";
import node from "@/assets/images/icons/tech-stack/node-js.svg";
import prisma from "@/assets/images/icons/tech-stack/prisma.svg";
import scss from "@/assets/images/icons/tech-stack/scss.svg";
import bootstrap from "@/assets/images/icons/tech-stack/bootstrap.svg";
import express from "@/assets/images/icons/tech-stack/express.svg";
import wordpress from "@/assets/images/icons/tech-stack/wordpress.svg";
import python from "@/assets/images/icons/tech-stack/python.svg";
import tailwind from "@/assets/images/icons/tech-stack/tailwind.svg";
import mongodb from "@/assets/images/icons/tech-stack/mongodb.svg";
import mysql from "@/assets/images/icons/tech-stack/mysql.svg";

import frontend from "@/assets/images/icons/categories/monitor-2.svg";
import backend from "@/assets/images/icons/categories/gear.svg";
import tool from "@/assets/images/icons/categories/tools-2.svg";
import platform from "@/assets/images/icons/categories/layer.svg";
import database from "@/assets/images/icons/categories/database.svg";
import language from "@/assets/images/icons/categories/code-2.svg";

import AnimateOnScroll from "./AnimateOnScroll";
import React, { useState } from "react";

const Tools = () => {
	const [hoveredCategory, setHoverCategory] = useState<string | null>(null);
	const [hoveredInfo, setHoveredInfo] = useState<string | null>(null);
	const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e: React.MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
	const handleMouseEnter = (info: string) => setHoveredInfo(info);
	const handleMouseLeave = () => setHoveredInfo(null);

	const handleCategoryClick = (category: string) => {
		setHoverCategory(category);
		setTimeout(() => setHoverCategory(null), 2500);
	};

	const categoryInfo: Record<string, { icon: string; label: string }> = {
		languages: { icon: language, label: "Languages" },
		frontend: { icon: frontend, label: "Frontend" },
		backend: { icon: backend, label: "Backend" },
		tools: { icon: tool, label: "Tools" },
		platforms: { icon: platform, label: "Platforms" },
		databases: { icon: database, label: "Databases" },
	};

	const techStack = [
		{ name: "JavaScript", icon: js, category: "languages" },
		{ name: "TypeScript", icon: ts, category: "languages" },
		{ name: "Python", icon: python, category: "languages" },
		{ name: "React", icon: react, category: "frontend" },
		{ name: "Tailwind", icon: tailwind, category: "frontend" },
		{ name: "SCSS", icon: scss, category: "frontend" },
		{ name: "Bootstrap", icon: bootstrap, category: "frontend" },
		{ name: "Node.js", icon: node, category: "backend" },
		{ name: "Express", icon: express, category: "backend" },
		{ name: "Prisma", icon: prisma, category: "backend" },
		{ name: "MongoDB", icon: mongodb, category: "databases" },
		{ name: "MySQL", icon: mysql, category: "databases" },
		{ name: "WordPress", icon: wordpress, category: "platforms" },
		{ name: "Git", icon: git, category: "tools" },
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
						top: cursorPos.y - 27.5,
						left: cursorPos.x + 7.5,
						pointerEvents: "none",
						zIndex: 9999,
						transform: "translate(-50%, -50%)",
					}}
				>
					<div className="info-wrapper">
						<div className="info-icon-wrapper">
							<img src={categoryInfo[hoveredInfo].icon} alt="info-icon" />
						</div>
						<span className="info-label">{categoryInfo[hoveredInfo].label}</span>
					</div>
				</div>
			)}
		</AnimateOnScroll>
	);
};

export default Tools;
