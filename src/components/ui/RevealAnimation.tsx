import { motion, useAnimation, useInView } from "motion/react";
import React, { useEffect, useRef } from "react";
import type { MarginType } from "@/types/reveal-animation.types";
import { fadeInStaggeredGroup } from "@/utils/animations/shared/fadeInStaggeredGroup";

interface RevealAnimationProps {
	children: React.ReactNode;
	className?: string;
	setFullWidth?: boolean;
	viewportMargin?: MarginType;
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
	const ref = useRef(null);

	const inView = useInView(ref, {
		once: true,
		...(viewportMargin ? { margin: viewportMargin } : {}),
	});

	useEffect(() => {
		if (!inView) return;

		if (!manualControl) {
			controls.start("show");
			return;
		}

		if (manualControl) {
			if (typeof shouldAnimate === "undefined") {
				console.error("RevealAnimation: manualControl requires shouldAnimate");
				return;
			}

			if (shouldAnimate) controls.start("show");
		}
	}, [manualControl, shouldAnimate, inView, controls]);

	return (
		<motion.div
			ref={ref}
			className={className}
			variants={fadeInStaggeredGroup.container}
			initial="hidden"
			animate={controls}
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
