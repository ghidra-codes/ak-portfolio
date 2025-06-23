import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealOnScrollProps {
	children: React.ReactNode;
	width?: "fit-content" | "100%";
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children, width = "fit-content" }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {}, [isInView]);

	return (
		<div style={{ position: "relative", width, overflow: "hidden" }}>
			<motion.div
				variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }}
				initial="hidden"
				animate="visible"
				transition={{ duration: 0.5, delay: 0.25 }}
			>
				{children}
			</motion.div>
		</div>
	);
};

export default RevealOnScroll;
