import { motion, MotionConfig } from "motion/react";
import React from "react";

type HamburgerMenuBtnProps = {
	onToggle: () => void;
	active: boolean;
};

const HamburgerMenuBtn: React.FC<HamburgerMenuBtnProps> = ({ onToggle, active }) => {
	return (
		<MotionConfig
			transition={{
				duration: 0.5,
				ease: "easeInOut",
			}}
		>
			<motion.button
				initial={false}
				className="hamburger-button"
				onClick={onToggle}
				animate={active ? "open" : "closed"}
			>
				<motion.span
					style={{
						left: "50%",
						top: "35%",
						x: "-50%",
						y: "-50%",
					}}
					className="hamburger-span"
					variants={{
						open: {
							rotate: ["0deg", "0deg", "45deg"],
							top: ["35%", "50%", "50%"],
						},
						closed: {
							rotate: ["45deg", "0deg", "0deg"],
							top: ["50%", "50%", "35%"],
						},
					}}
				/>
				<motion.span
					style={{
						left: "50%",
						top: "50%",
						x: "-50%",
						y: "-50%",
					}}
					className="hamburger-span"
					variants={{
						open: {
							rotate: ["0deg", "0deg", "-45deg"],
						},
						closed: {
							rotate: ["-45deg", "0deg", "0deg"],
						},
					}}
				/>
				<motion.span
					style={{
						left: "50%",
						bottom: "35%",
						x: "-50%",
						y: "50%",
					}}
					className="hamburger-span"
					variants={{
						open: {
							rotate: ["0deg", "0deg", "45deg"],
							left: "50%",
							bottom: ["35%", "50%", "50%"],
						},
						closed: {
							rotate: ["45deg", "0deg", "0deg"],
							left: "50%",
							bottom: ["50%", "50%", "35%"],
						},
					}}
				/>
			</motion.button>
		</MotionConfig>
	);
};

export default HamburgerMenuBtn;
