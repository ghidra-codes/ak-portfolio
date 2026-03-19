import classNames from "classnames";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { EASE_OUT_SLOW } from "@/constants/animations";

interface SectionDividerProps {
	title: React.ReactNode;
	className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ title, className }) => {
	const ref = useRef<HTMLDivElement | null>(null);

	const inView = useInView(ref, {
		once: true,
		margin: "-80px",
	});

	return (
		<div ref={ref} className={classNames("section-divider", className)}>
			<motion.div
				className="section-divider-line"
				initial={{ scaleX: 0 }}
				animate={inView ? { scaleX: 1 } : {}}
				transition={{
					duration: 0.3,
					ease: EASE_OUT_SLOW,
					delay: 0.4,
				}}
			/>

			<h3 className="section-divider-title">{title}</h3>

			<motion.div
				className="section-divider-line"
				initial={{ scaleX: 0 }}
				animate={inView ? { scaleX: 1 } : {}}
				transition={{
					duration: 0.3,
					ease: EASE_OUT_SLOW,
					delay: 0.4,
				}}
			/>
		</div>
	);
};

export default SectionDivider;
