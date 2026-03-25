import { motion } from "motion/react";
import { useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa6";
import { EASE_OUT_BACK, EASE_OUT_SHARP, EASE_OUT_SLOW } from "@/constants/animations";
import SectionHeader from "../layout/SectionHeader";
import RevealAnimation from "../ui/RevealAnimation";
import SlideFillButton from "../ui/SlideFillButton";

const Contact = () => {
	const [revealFinished, setRevealFinished] = useState(false);
	const [showIconGap, setShowIconGap] = useState(false);
	const [showIcon, setShowIcon] = useState(false);

	return (
		<RevealAnimation className="contact-wrapper" onAnimationComplete={() => setRevealFinished(true)}>
			<motion.div
				className="contact-border"
				initial={{ borderColor: "rgba(96, 96, 98, 0)" }}
				animate={revealFinished ? { borderColor: "rgba(96, 96, 98, 0.6)" } : {}}
				transition={{
					duration: 0.45,
					ease: EASE_OUT_SLOW,
				}}
				onAnimationComplete={() => setShowIconGap(true)}
			>
				<motion.div
					className="contact-border-icon"
					initial={{ width: 0 }}
					animate={showIconGap ? { width: "4.45rem" } : {}}
					transition={{
						duration: 0.35,
						ease: EASE_OUT_SHARP,
					}}
					onAnimationComplete={() => setShowIcon(true)}
				>
					<motion.div
						initial={{ scale: 0.65, opacity: 0 }}
						animate={showIcon ? { scale: 1, opacity: 0.7 } : {}}
						transition={{
							duration: 0.3,
							ease: EASE_OUT_BACK,
							delay: 0.2,
						}}
					>
						<FaRegPaperPlane />
					</motion.div>
				</motion.div>
			</motion.div>

			<p className="eyebrow">Open to opportunities</p>
			<SectionHeader title="Get in touch" noLine />

			<p className="contact-description">
				Looking for junior frontend or backend roles, while remaining open to internships. Frontend by
				training, full-stack by curiosity. Building something meaningful?{" "}
				<span>I’m ready to contribute.</span>
			</p>

			<SlideFillButton title="Let's talk" href="mailto:akallin94@gmail.com" largerSize />
		</RevealAnimation>
	);
};

export default Contact;
