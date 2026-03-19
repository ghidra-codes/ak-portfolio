import { motion } from "motion/react";
import type { FC } from "react";
import { EASE_OUT_SLOW } from "@/constants/animations";

interface SectionHeaderProps {
	title: string;
	noLine?: boolean;
}

const SectionHeader: FC<SectionHeaderProps> = ({ title, noLine = false }) => {
	return (
		<div className="section-header-wrapper">
			<h2 className="section-header">
				{title}
				<span className="section-header-period">.</span>
			</h2>

			{!noLine && (
				<motion.div
					className="section-header-line"
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.3, ease: EASE_OUT_SLOW, delay: 0.4 }}
				/>
			)}
		</div>
	);
};

export default SectionHeader;
