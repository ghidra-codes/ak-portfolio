import { EASE_OUT_SLOW } from "@/constants/animations";
import { motion, Variants } from "framer-motion";
import React from "react";

interface RevealAnimationProps {
	children: React.ReactNode;
	className?: string;
}

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.25,
		},
	},
};

const childVariants: Variants = {
	hidden: { opacity: 0, y: 75 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			type: "tween",
			ease: EASE_OUT_SLOW,
		},
	},
};

const RevealAnimation: React.FC<RevealAnimationProps> = ({ children, className }) => {
	return (
		<motion.div
			className={className ?? ""}
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			{React.Children.map(children, (child, index) => (
				<motion.div key={index} variants={childVariants}>
					{child}
				</motion.div>
			))}
		</motion.div>
	);
};

export default RevealAnimation;
