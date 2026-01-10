import { fadeInStaggeredGroup } from "@/utils/animations/shared/fadeInStaggeredGroup";
import { motion, useAnimation } from "motion/react";
import React, { useEffect } from "react";

interface RevealAnimationProps {
	children: React.ReactNode;
	className?: string;
	setFullWidth?: boolean;
	viewportMargin?: string;
	manualControl?: boolean;
	shouldAnimate?: boolean;
	onAnimationComplete?: () => void;
}

const RevealAnimation: React.FC<RevealAnimationProps> = ({
	children,
	className = "",
	setFullWidth = false,
	viewportMargin,
	shouldAnimate,
	manualControl = false,
	onAnimationComplete,
}) => {
	const controls = useAnimation();

	useEffect(() => {
		if (!manualControl) return;

		if (typeof shouldAnimate === "undefined") {
			console.error(
				"RevealAnimation: manualControl requires shouldAnimate — skipping animation"
			);
			return;
		}

		controls.start(shouldAnimate ? "show" : "hidden");
	}, [manualControl, shouldAnimate, controls]);

	return (
		<motion.div
			className={className}
			variants={fadeInStaggeredGroup.container}
			initial="hidden"
			animate={manualControl ? controls : undefined}
			whileInView={!manualControl ? "show" : undefined}
			viewport={
				!manualControl
					? {
							once: true,
							...(viewportMargin ? { margin: viewportMargin } : {}),
					  }
					: undefined
			}
			style={{ width: setFullWidth ? "100%" : undefined }}
		>
			{React.Children.map(children, (child, index) => {
				const isLast = index === React.Children.count(children) - 1;

				return (
					<motion.div
						key={index}
						variants={fadeInStaggeredGroup.item}
						onAnimationComplete={isLast ? onAnimationComplete : undefined}
					>
						{child}
					</motion.div>
				);
			})}
		</motion.div>
	);
};

export default RevealAnimation;
