import me from "@/assets/images/me.jpg";
import TintedImage from "../ui/TintedImage";
import RevealAnimation from "../ui/RevealAnimation";
import SlideFillButton from "../ui/SlideFillButton";
import { useAnimationContext } from "@/hooks/useAnimationContext";
import { motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";
import { fadeInSlideImage } from "@/utils/animations/header/fadeInSlideImage";

export default function Header() {
	// animateHeader boolean initiates animation sequence
	const { animateHeader, setAnimateSides } = useAnimationContext();

	const controls = useAnimation();

	const [animationStep, setAnimationStep] = useState(0);

	useEffect(() => {
		if (animateHeader) {
			// Step 1 animates in text
			setAnimationStep(1);
			// Step 2 animates in image
			setTimeout(() => setAnimationStep(2), 800);
		}
	}, [animateHeader]);

	useEffect(() => {
		if (animationStep === 2) controls.start("visible");
	}, [animationStep, controls]);

	return (
		<motion.header initial={{ opacity: 0 }} animate={animateHeader ? { opacity: 1 } : { opacity: 0 }}>
			<div className="header-content">
				<RevealAnimation manualControl shouldAnimate={animationStep >= 1}>
					<h1 className="title">
						Hello, my name is Alex<span>.</span>
					</h1>
					<h2 className="subtitle">I build things for the web.</h2>
					<p className="header-paragraph">
						I’m a creative developer who loves crafting high-quality web experiences. My goal is
						always to build the best product possible, using modern technologies and industry best
						practices.
					</p>
					<SlideFillButton title="Contact Me" largerSize />
				</RevealAnimation>
			</div>

			<motion.div
				initial="hidden"
				animate={controls}
				variants={fadeInSlideImage}
				onAnimationComplete={() => {
					// Step 3 enables image pop-in animation and initates sides animation
					if (animationStep === 2) {
						setAnimationStep(3);
						setAnimateSides(true);
					}
				}}
			>
				<TintedImage
					src={me}
					alt="A picture of Alexander Kallin"
					wrapperClass="hero-image-wrapper"
					imageClass="hero-image"
					triggerPopIn={animationStep === 3}
				>
					<div className="grey-box"></div>
				</TintedImage>
			</motion.div>
		</motion.header>
	);
}
