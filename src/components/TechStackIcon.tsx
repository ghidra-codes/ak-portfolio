import React from "react";

type TechStackIconProps = {
	name: string;
	icon: string;
	category: string;
	isHighlighted: boolean;
	isLabelHighlighted: boolean;
	isTouchDevice: boolean;
	onHoverChange: (category: string | null) => void;
};

const TechStackIcon: React.FC<TechStackIconProps> = ({
	name,
	icon,
	category,
	isHighlighted,
	isLabelHighlighted,
	isTouchDevice,
	onHoverChange,
}) => {
	const handleMouseEnter = () => {
		if (!isTouchDevice) onHoverChange(category);
	};

	const handleMouseLeave = () => {
		if (!isTouchDevice) onHoverChange(null);
	};

	return (
		<div
			className={`icon-container ${isHighlighted ? "highlight" : "dimmed"}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<img src={icon} alt={`${name} icon`} />
			<p className={`icon-label ${isLabelHighlighted ? "highlight-label" : ""}`}>{name}</p>
		</div>
	);
};

export default TechStackIcon;
