import { useAnimationContext } from "@/hooks/useAnimationContext";
import React from "react";
import { motion } from "motion/react";
import { fadeInSimple } from "@/utils/animations/shared/fadeInSimple";

type DecorationProps = {
	variant: "triangle" | "square" | "hexagon" | "diamond";
};

const Decoration: React.FC<DecorationProps> = ({ variant }) => {
	const { animateSides } = useAnimationContext();

	const dots = (
		<>
			<circle cx="10" cy="10" r="4.5" />
			<circle cx="38" cy="10" r="4.5" />
			<circle cx="24" cy="10" r="4.5" />
			<circle cx="10" cy="24" r="4.5" />
			<circle cx="38" cy="24" r="4.5" />
			<circle cx="10" cy="38" r="4.5" />
			<circle cx="38" cy="38" r="4.5" />
			<circle cx="24" cy="38" r="4.5" />
		</>
	);

	let mainShape;

	switch (variant) {
		case "triangle":
			mainShape = <path d="M24 19 L29 28 H19 Z" />;
			break;

		case "square":
			mainShape = <rect x="19.75" y="19.75" width="8.5" height="8.5" rx="0.5" />;
			break;

		case "hexagon":
			mainShape = (
				<path d="M24 18.75 L28.75 21.75 L28.75 26.25 L24 29.25 L19.25 26.25 L19.25 21.75 Z" />
			);
			break;

		case "diamond":
			mainShape = <path d="M24 18.5 L29.5 24 L24 29.5 L18.5 24 Z" />;
			break;
	}

	return (
		animateSides && (
			<div style={{ display: "inline-block", opacity: 0.1 }}>
				<motion.svg
					{...fadeInSimple}
					style={{ opacity: 0.15 }}
					viewBox="0 0 48 48"
					className={`decor ${variant}`}
					fill="none"
					stroke="#39393a"
					strokeWidth={1.5}
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					{dots}
					{mainShape}
				</motion.svg>
			</div>
		)
	);
};

export default Decoration;
