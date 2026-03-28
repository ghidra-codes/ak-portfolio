import { motion, useInView } from "motion/react";
import type { MouseEvent } from "react";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import SectionDivider from "@/components/layout/SectionDivider";
import CursorInfoBox from "@/components/ui/CursorInfoBox";
import { EASE_OUT_SLOW } from "@/constants/animations";
import { CATEGORY_INFO, TECH_STACK } from "@/constants/techStack";
import type { GroupedCategories } from "@/types/tech-stack.types";
import { fadeInSimpleStaggered } from "@/utils/animations/tech-stack/fadeInSimpleStaggered";
import RevealAnimation from "../../ui/RevealAnimation";
import TechStackIcon from "./TechStackIcon";
import TechStackSlider from "./TechStackSlider";

const TechStack = () => {
	const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
	const [hoveredInfo, setHoveredInfo] = useState<string | null>(null);
	const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

	const sliderRef = useRef(null);
	const isInView = useInView(sliderRef, { once: true, margin: "-50px" });
	const isSmallScreen = useMediaQuery({ maxWidth: 768 });

	const groupedByCategory = TECH_STACK.reduce((acc, tech) => {
		(acc[tech.category] ??= []).push(tech);

		return acc;
	}, {} as GroupedCategories);

	const handleMouseMove = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });

	const onHoverChange = (newCategory: string | null) => {
		setHoveredCategory(newCategory);
		setHoveredInfo(newCategory ?? null);
	};

	return (
		<>
			<RevealAnimation setFullWidth>
				<SectionDivider title="Technologies I’ve worked with" />
			</RevealAnimation>

			{!isSmallScreen ? (
				<div className="icon-wrapper" onMouseMove={handleMouseMove}>
					{TECH_STACK.map(({ name, icon, category }, index) => {
						const isHighlighted = !hoveredCategory || hoveredCategory === category;

						return (
							<motion.div
								key={name}
								variants={fadeInSimpleStaggered}
								initial="initial"
								whileInView="animate"
								viewport={{ once: true, margin: "15px" }}
								custom={index}
							>
								<TechStackIcon
									name={name}
									icon={icon}
									category={category}
									isHighlighted={isHighlighted}
									isLabelHighlighted={hoveredCategory === category}
									onHoverChange={onHoverChange}
								/>
							</motion.div>
						);
					})}
				</div>
			) : (
				<motion.div
					ref={sliderRef}
					className="slider-wrapper"
					initial={{ opacity: 0, filter: "grayscale(100%)" }}
					animate={isInView ? { opacity: 1, filter: "grayscale(0%)" } : {}}
					transition={{
						opacity: { duration: 0.8, ease: EASE_OUT_SLOW },
						filter: { duration: 0.8, ease: [0.3, 0, 0.7, 1] },
					}}
				>
					<TechStackSlider groupedByCategory={groupedByCategory} isInView={isInView} />
				</motion.div>
			)}

			{hoveredInfo && !isSmallScreen && (
				<CursorInfoBox
					x={cursorPos.x}
					y={cursorPos.y}
					icon={CATEGORY_INFO[hoveredInfo].icon}
					label={CATEGORY_INFO[hoveredInfo].label}
				/>
			)}
		</>
	);
};

export default TechStack;
