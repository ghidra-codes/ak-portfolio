import { MotionConfig, motion } from "motion/react";
import type { FC } from "react";
import { hamburgerBtnConfigs } from "./hamburgerBtn.config";

type HamburgerBtnProps = {
	onToggle: () => void;
	active: boolean;
};

const HamburgerBtn: FC<HamburgerBtnProps> = ({ onToggle, active }) => {
	return (
		<MotionConfig
			transition={{
				duration: 0.5,
				ease: "easeInOut",
			}}
		>
			<motion.button
				initial={false}
				className="hamburger-button"
				onClick={onToggle}
				animate={active ? "open" : "closed"}
			>
				{hamburgerBtnConfigs.map(({ key, style, variants }) => (
					<motion.span key={key} style={style} variants={variants} className="hamburger-span" />
				))}
			</motion.button>
		</MotionConfig>
	);
};

export default HamburgerBtn;
