import me from "@/assets/images/me.jpg";
import TintedImage from "../ui/TintedImage";
import RevealAnimation from "../ui/RevealAnimation";
import SlideFillButton from "../ui/SlideFillButton";
import { useAnimationContext } from "@/hooks/useAnimationContext";
import { motion } from "motion/react";
import { fadeInStaggeredGroup } from "@/utils/animations/shared/fadeInStaggeredGroup";
import { useState } from "react";

export default function Header() {
	const { startAnimations } = useAnimationContext();
	const [triggerPopIn, setTriggerPopIn] = useState(false);
	// Make RevealAnimation only trigger after the header-content fadeIn is complete

	return (
		<motion.header
			variants={fadeInStaggeredGroup.container}
			initial="hidden"
			animate={startAnimations ? "visible" : "hidden"}
		>
			<motion.div
				variants={fadeInStaggeredGroup.child}
				className="header-content"
				onAnimationComplete={() => setTriggerPopIn(true)}
			>
				<RevealAnimation>
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
			</motion.div>

			<motion.div variants={fadeInStaggeredGroup.child}>
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
