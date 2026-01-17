import { EASE_OUT_SLOW } from "@/constants/animations";
import { motion } from "motion/react";
import { FaRegFolder } from "react-icons/fa6";
import RevealAnimation from "../ui/RevealAnimation";

const FeatureDivider = () => {
	return (
		<RevealAnimation setFullWidth>
			<div className="project-feature-divider-container">
				<motion.div
					className="feature-divider-line left"
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.4, ease: EASE_OUT_SLOW, delay: 0.3 }}
				/>

				<FaRegFolder className="feature-divider-icon" />

				<motion.div
					className="feature-divider-line right"
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.4, ease: EASE_OUT_SLOW, delay: 0.3 }}
				/>
			</div>
		</RevealAnimation>
	);
};

export default FeatureDivider;
