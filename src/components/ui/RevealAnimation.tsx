import { fadeInStaggeredGroup } from "@/utils/animations/shared/fadeInStaggeredGroup";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

interface RevealAnimationProps {
	children: React.ReactNode;
	className?: string;
	width?: "100%" | "fit-content";
	shouldAnimate?: boolean;
	manualControl?: boolean;
	onAnimationComplete?: () => void;
}

const RevealAnimation: React.FC<RevealAnimationProps> = ({
	children,
	className,
	width = "fit-content",
	shouldAnimate,
	manualControl = false,
	onAnimationComplete,
}) => {
	const controls = useAnimation();

	useEffect(() => {
		if (manualControl && shouldAnimate) {
			controls.start("visible");
		}
		if (manualControl && !shouldAnimate) {
			controls.start("hidden");
		}
	}, [manualControl, shouldAnimate, controls]);

	return (
		<motion.div
			className={className ?? ""}
			variants={fadeInStaggeredGroup.container}
			initial="hidden"
			animate={manualControl ? controls : undefined}
			whileInView={manualControl ? undefined : "visible"}
			viewport={manualControl ? undefined : { once: true }}
			style={{ width }}
		>
			{React.Children.map(children, (child, index) => {
				const isLast = index === React.Children.count(children) - 1;

				return (
					<motion.div
						key={index}
						variants={fadeInStaggeredGroup.child}
						onAnimationComplete={isLast && onAnimationComplete ? onAnimationComplete : undefined}
					>
						{child}
					</motion.div>
				);
			})}
		</motion.div>
	);
};

export default RevealAnimation;
