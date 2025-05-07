import React from "react";

type CursorInfoBoxProps = {
	x: number;
	y: number;
	icon: string;
	label: string;
};

const CursorInfoBox: React.FC<CursorInfoBoxProps> = ({ x, y, icon, label }) => {
	return (
		<div
			className="cursor-info-box"
			style={{
				position: "fixed",
				top: y - 27.5,
				left: x + 7.5,
				pointerEvents: "none",
				zIndex: 9999,
				transform: "translate(-50%, -50%)",
			}}
		>
			<div className="info-wrapper">
				<div className="info-icon-wrapper">
					<img src={icon} alt="info-icon" />
				</div>
				<span className="info-label">{label}</span>
			</div>
		</div>
	);
};

export default CursorInfoBox;
