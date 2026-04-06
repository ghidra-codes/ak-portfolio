import { motion } from "motion/react";
import React from "react";

type CursorInfoBoxProps = {
	x: number;
	y: number;
	icon: string;
	label: string;
};

const CursorInfoBoxComponent: React.FC<CursorInfoBoxProps> = ({ x, y, icon, label }) => {
	return (
		<motion.div
			key="modal"
			className="cursor-info-box"
			initial={{ opacity: 0, scale: 0, y: 20 }}
			animate={{
				opacity: 1,
				scale: 1,
				y: 0,
			}}
			transition={{ duration: 0.3, ease: "easeIn" }}
			style={{
				position: "fixed",
				top: y - 27.5,
				left: x + 7.5,
				transform: "translate(-50%, -50%)",
				pointerEvents: "none",
				zIndex: 9999,
			}}
		>
			<div className="info-wrapper">
				<div className="info-icon-wrapper">
					<img src={icon} alt="" aria-hidden="true" />
				</div>
				<span className="info-label">{label}</span>
			</div>
		</motion.div>
	);
};

const CursorInfoBox = React.memo(CursorInfoBoxComponent);

export default CursorInfoBox;
