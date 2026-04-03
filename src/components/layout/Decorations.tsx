import { motion } from "motion/react";
import type { FC } from "react";
import { EASE_OUT_SLOW } from "@/constants/animations";
import { useAnimationContext } from "@/hooks/useAnimationContext";

type DecorationVariant = "triangle" | "square" | "hexagon" | "diamond";

const VARIANTS: DecorationVariant[] = ["triangle", "square", "hexagon", "diamond"];

const Decorations: FC = () => {
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

	const getMainShape = (variant: DecorationVariant) => {
		switch (variant) {
			case "triangle":
				return (
					<path
						d="M23.134,19.75l-4.3688,7.5a1,1,0,0,0,.866,1.375h8.7376a1,1,0,0,0,.866-1.375l-4.3688-7.5A1,1,0,0,0,23.134,19.75Z"
						transform="translate(0,-0.3)"
					/>
				);
			case "square":
				return <rect x="19.375" y="19.375" width="9" height="9" rx="1" />;
			case "hexagon":
				return <path d="M24 18.5 L29 21.5 L29 26.5 L24 29.5 L19 26.5 L19 21.5 Z" />;
			case "diamond":
				return <path d="M24 18.5 L29.75 24 L24 29.5 L18.25 24 Z" />;
		}
	};

	if (!animateSides) return null;

	return (
		<>
			{VARIANTS.map((variant) => (
				<motion.svg
					key={variant}
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.085 }}
					transition={{ duration: 1.5, ease: EASE_OUT_SLOW }}
					viewBox="0 0 48 48"
					width="152"
					height="152"
					className={`decor ${variant}`}
					fill="none"
					stroke="#39393a"
					strokeWidth={1.5}
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					{dots}
					{getMainShape(variant)}
				</motion.svg>
			))}
		</>
	);
};

export default Decorations;
