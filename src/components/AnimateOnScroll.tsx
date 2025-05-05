import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type AnimateOnScrollProps = {
	children: ReactNode;
	className: string;
};

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children, className }) => {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 30, scale: 0.95 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			transition={{
				duration: 1,
				ease: "easeOut",
			}}
			viewport={{ once: true, amount: 0.3 }}
		>
			{children}
		</motion.div>
	);
};

export default AnimateOnScroll;
