import { fadeInStaggeredGroup } from "@/utils/animations/shared/fadeInStaggeredGroup";
import { motion } from "framer-motion";
import React from "react";

interface RevealAnimationProps {
	children: React.ReactNode;
	className?: string;
	width?: "100%" | "fit-content";
}

const RevealAnimation: React.FC<RevealAnimationProps> = ({ children, className, width = "fit-content" }) => {
	return (
		<motion.div
			className={className ?? ""}
			variants={fadeInStaggeredGroup.container}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			style={{ width }}
		>
			{React.Children.map(children, (child, index) => (
				<motion.div key={index} variants={fadeInStaggeredGroup.child}>
					{child}
				</motion.div>
			))}
		</motion.div>
	);
};

export default RevealAnimation;
