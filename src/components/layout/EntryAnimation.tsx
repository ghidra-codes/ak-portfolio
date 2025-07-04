import { useEffect, useRef, useState } from "react";
import { motion, useInView, ValueTransition } from "framer-motion";
import logoText from "@/assets/images/logo/logo-text.png";
import { EASE_OUT_SLOW, HONOLULU_BLUE, MAYA_BLUE } from "@/constants/animations";

const backgroundColorTransition: ValueTransition = {
	duration: 0.6,
	ease: "easeOut",
	delay: 0.3,
};

const EntryAnimation = ({ onComplete }: { onComplete: () => void }) => {
	const [colorTransition, setColorTransition] = useState(false);
	const [glowVisible, setGlowVisible] = useState(false);

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (!isInView) return;

		const colorTimer = setTimeout(() => setColorTransition(true), 600);
		const glowStart = setTimeout(() => setGlowVisible(true), 775);
		const glowEnd = setTimeout(() => setGlowVisible(false), 1150);
		const entryTimer = setTimeout(() => onComplete(), 1400);

		return () => {
			clearTimeout(colorTimer);
			clearTimeout(glowStart);
			clearTimeout(glowEnd);
			clearTimeout(entryTimer);
		};
	}, [isInView, onComplete]);

	const backgroundColor = colorTransition ? MAYA_BLUE : HONOLULU_BLUE;

	return (
		<motion.div className="entry-animation" ref={ref}>
			{isInView && (
				<div className="logo-frame">
					{[
						{ side: "top", y: -50, delay: 0 },
						{ side: "bottom", y: 50, delay: 0.1 },
					].map(({ side, y, delay }) => (
						<motion.div
							key={side}
							className={`border ${side}`}
							initial={{ y, opacity: 0 }}
							animate={{
								y: 0,
								opacity: 1,
								backgroundColor,
							}}
							transition={{
								y: {
									type: "tween",
									duration: 0.6,
									ease: EASE_OUT_SLOW,
									delay,
								},
								opacity: {
									duration: 0.6,
									ease: EASE_OUT_SLOW,
									delay,
								},
								backgroundColor: backgroundColorTransition,
							}}
						/>
					))}

					{["left", "right"].map((side) => (
						<motion.div
							key={side}
							className={`border ${side} ${glowVisible ? "glow-active" : ""}`}
							initial={{ height: 0 }}
							animate={{
								height: "100%",
								backgroundColor,
							}}
							transition={{
								height: {
									type: "tween",
									duration: 0.6,
									delay: 0.7,
									ease: EASE_OUT_SLOW,
								},
								backgroundColor: backgroundColorTransition,
							}}
						/>
					))}

					<img src={logoText} alt="logo-text" className="logo-text-image" />
				</div>
			)}
		</motion.div>
	);
};

export default EntryAnimation;
