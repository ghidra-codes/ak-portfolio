import me from "@/assets/images/me.jpg";
import TintedImage from "../ui/TintedImage";
import RevealAnimation from "../ui/RevealAnimation";
import SlideFillButton from "../ui/SlideFillButton";
import { motion } from "motion/react";

export default function Header() {
	return (
		<header>
			<div className="header-content">
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
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.4, ease: "easeOut" }}
			>
				<TintedImage
					src={me}
					alt="A picture of Alexander Kallin"
					wrapperClass="hero-image-wrapper"
					imageClass="hero-image"
				>
					<div className="grey-box"></div>
				</TintedImage>
			</motion.div>
		</header>
	);
}
