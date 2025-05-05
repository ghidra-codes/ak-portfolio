import git from "../assets/images/icons/git.svg";
import react from "../assets/images/icons/react.svg";
import js from "../assets/images/icons/js.svg";
import ts from "../assets/images/icons/ts.svg";
import node from "../assets/images/icons/node-js.svg";
import prisma from "../assets/images/icons/prisma.svg";
import scss from "../assets/images/icons/scss.svg";
import AnimateOnScroll from "./AnimateOnScroll";

const Tools = () => {
	return (
		<AnimateOnScroll className="tools">
			<h2>Frontend technologies I use</h2>
			<div className="icon-wrapper">
				<div className="icon-container">
					<img src={git} alt="Git icon" />
					<p className="icon-label">Git</p>
				</div>
				<div className="icon-container">
					<img src={react} alt="React icon" />
					<p className="icon-label">React</p>
				</div>
				<div className="icon-container">
					<img src={js} alt="JavaScript icon" />
					<p className="icon-label">JavaScript</p>
				</div>
				<div className="icon-container">
					<img src={ts} alt="TypeScript icon" />
					<p className="icon-label">TypeScript</p>
				</div>
				<div className="icon-container">
					<img src={node} alt="Node.js icon" />
					<p className="icon-label">Node.js</p>
				</div>
				<div className="icon-container">
					<img src={scss} alt="Scss icon" />
					<p className="icon-label">Scss</p>
				</div>
				<div className="icon-container">
					<img src={prisma} alt="Prisma icon" />
					<p className="icon-label">Prisma</p>
				</div>
			</div>
		</AnimateOnScroll>
	);
};

export default Tools;
