import { motion, AnimatePresence } from "framer-motion";
import React from "react";

type CursorInfoBoxProps = {
	x: number;
	y: number;
	icon: string;
	label: string;
};

const CursorInfoBoxComponent: React.FC<CursorInfoBoxProps> = ({ x, y, icon, label }) => {
	return (
		<AnimatePresence>
			<motion.div
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
						<img src={icon} alt="info-icon" />
					</div>
					<span className="info-label">{label}</span>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

const CursorInfoBox = React.memo(CursorInfoBoxComponent);

export default CursorInfoBox;
