import git from "../assets/images/icons/git.svg";
import react from "../assets/images/icons/react.svg";
import js from "../assets/images/icons/js.svg";
import ts from "../assets/images/icons/ts.svg";
import node from "../assets/images/icons/node-js.svg";
import prisma from "../assets/images/icons/prisma.svg";
import scss from "../assets/images/icons/scss.svg";
import bootstrap from "../assets/images/icons/bootstrap.svg";
import express from "../assets/images/icons/express.svg";
import wordpress from "../assets/images/icons/wordpress.svg";
import python from "../assets/images/icons/python.svg";
import tailwind from "../assets/images/icons/tailwind.svg";

import AnimateOnScroll from "./AnimateOnScroll";

const Tools = () => {
	const techStack = [
		{ name: "JavaScript", icon: js, category: "language" },
		{ name: "TypeScript", icon: ts, category: "language" },
		{ name: "React", icon: react, category: "frontend" },
		{ name: "Tailwind", icon: tailwind, category: "frontend" },
		{ name: "SCSS", icon: scss, category: "frontend" },
		{ name: "Bootstrap", icon: bootstrap, category: "frontend" },
		{ name: "WordPress", icon: wordpress, category: "platform" },
		{ name: "Node.js", icon: node, category: "backend" },
		{ name: "Express", icon: express, category: "backend" },
		{ name: "Prisma", icon: prisma, category: "backend" },
		{ name: "Git", icon: git, category: "tool" },
		{ name: "Python", icon: python, category: "language" },
	];
	return (
		<AnimateOnScroll className="tools">
			<h2>Technologies I’ve worked with</h2>
			<div className="icon-wrapper">
				<div className="icon-container">
					<img src={js} alt="JavaScript icon" />
					<p className="icon-label">JavaScript</p>
				</div>
				<div className="icon-container">
					<img src={ts} alt="TypeScript icon" />
					<p className="icon-label">TypeScript</p>
				</div>
				<div className="icon-container">
					<img src={python} alt="Python icon" />
					<p className="icon-label">Python</p>
				</div>
				<div className="icon-container">
					<img src={react} alt="React icon" />
					<p className="icon-label">React</p>
				</div>
				<div className="icon-container">
					<img src={tailwind} alt="Prisma icon" />
					<p className="icon-label">Tailwind</p>
				</div>
				<div className="icon-container">
					<img src={scss} alt="Scss icon" />
					<p className="icon-label">Scss</p>
				</div>
				<div className="icon-container">
					<img src={bootstrap} alt="Bootstrap icon" />
					<p className="icon-label">Bootstrap</p>
				</div>
				<div className="icon-container">
					<img src={wordpress} alt="Wordpress icon" />
					<p className="icon-label">WordPress</p>
				</div>
				<div className="icon-container">
					<img src={node} alt="Node.js icon" />
					<p className="icon-label">Node.js</p>
				</div>
				<div className="icon-container">
					<img src={express} alt="Wordpress icon" />
					<p className="icon-label">Express</p>
				</div>
				<div className="icon-container">
					<img src={prisma} alt="Prisma icon" />
					<p className="icon-label">Prisma</p>
				</div>
				<div className="icon-container">
					<img src={git} alt="Git icon" />
					<p className="icon-label">Git</p>
				</div>
			</div>
		</AnimateOnScroll>
	);
};

export default Tools;
