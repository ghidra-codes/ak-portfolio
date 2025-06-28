import { useEffect, useState } from "react";
import { motion, Easing, ValueTransition } from "framer-motion";
import logoText from "@/assets/images/logo/logo-text.png";

const MAYA_BLUE = "#73c2fb";
const HONOLULU_BLUE = "#2176ae";

const EASE_OUT_SLOW: Easing = [0.25, 1, 0.5, 1];

const backgroundColorTransition: ValueTransition = {
	duration: 0.6,
	ease: "easeOut",
	delay: 0.3,
};

const EntryAnimation = ({ onComplete }: { onComplete: () => void }) => {
	const [colorTransition, setColorTransition] = useState(false);

	useEffect(() => {
		const colorTimer = setTimeout(() => {
			setColorTransition(true);
		}, 600);

		const entryTimer = setTimeout(() => {
			onComplete();
		}, 1400);

		return () => {
			clearTimeout(entryTimer);
			clearTimeout(colorTimer);
		};
	}, [onComplete]);

	const backgroundColor = colorTransition ? MAYA_BLUE : HONOLULU_BLUE;

	return (
		<motion.div className="entry-animation">
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
						className={`border ${side}`}
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
						style={side === "right" ? { top: "auto", bottom: 0 } : undefined}
					/>
				))}

				<img src={logoText} alt="logo-text" className="logo-text-image" />
			</div>
		</motion.div>
	);
};

export default EntryAnimation;
