import me from "@/assets/images/me.jpg";
import TintedImage from "../ui/TintedImage";
import RevealAnimation from "../ui/RevealAnimation";
import SlideFillButton from "../ui/SlideFillButton";
import { useAnimationContext } from "@/hooks/useAnimationContext";
import { motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";
import { EASE_OUT_SLOW } from "@/constants/animations";

export default function Header() {
	const { header, about } = useAnimationContext();
	const { animateHeader } = header;
	const [triggerPopIn, setTriggerPopIn] = useState(false);
	const [revealText, setRevealText] = useState(false);
	const [showImage, setShowImage] = useState(false);

	useEffect(() => {
		if (animateHeader) {
			setRevealText(true);
			setTimeout(() => setShowImage(true), 1000);
		}
	}, [animateHeader]);

	const controls = useAnimation();

	useEffect(() => {
		if (showImage) {
			controls.start({
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.4,
					ease: EASE_OUT_SLOW,
				},
			});
		}
	}, [showImage, controls]);

	return (
		<motion.header initial={{ opacity: 0 }} animate={animateHeader ? { opacity: 1 } : { opacity: 0 }}>
			<div className="header-content">
				<RevealAnimation manualControl shouldAnimate={revealText}>
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
				initial={{ opacity: 0, y: 70 }}
				animate={controls}
				onAnimationComplete={() => {
					if (showImage) {
						setTriggerPopIn(true);
						about.setAnimateAbout(true);
					}
				}}
			>
				<TintedImage
					src={me}
					alt="A picture of Alexander Kallin"
					wrapperClass="hero-image-wrapper"
					imageClass="hero-image"
					triggerPopIn={triggerPopIn}
				>
					<div className="grey-box"></div>
				</TintedImage>
			</motion.div>
		</motion.header>
	);
}
