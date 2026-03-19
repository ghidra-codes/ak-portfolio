import { motion } from "motion/react";
import type { FC } from "react";

type TechStackIconProps = {
	name: string;
	icon: string;
	category: string;
	isHighlighted: boolean;
	isLabelHighlighted: boolean;
	onHoverChange: (category: string | null) => void;
};

const TechStackIcon: FC<TechStackIconProps> = ({
	name,
	icon,
	category,
	isHighlighted,
	isLabelHighlighted,
	onHoverChange,
}) => {
	const handleMouseEnter = () => onHoverChange(category);

	const handleMouseLeave = () => onHoverChange(null);

	return (
		<motion.div
			className="icon-container"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			animate={{
				opacity: isHighlighted ? 1 : 0.3,
			}}
			transition={{ duration: 0.5, ease: "easeInOut" }}
		>
			<img src={icon} alt={`${name} icon`} />
			<motion.p
				className="icon-label"
				animate={{
					textShadow: isLabelHighlighted
						? "0px 0px 10px rgba(115, 194, 251, 0.85)"
						: "0px 0px 0px rgba(0,0,0,0)",
				}}
				transition={{ duration: 0.3 }}
			>
				{name}
			</motion.p>
		</motion.div>
	);
};

export default TechStackIcon;
