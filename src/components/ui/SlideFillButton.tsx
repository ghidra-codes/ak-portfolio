import classNames from "classnames";
import { motion } from "motion/react";
import React from "react";
import { useMediaQuery } from "react-responsive";

interface SlideFillButtonProps {
	title: string;
	largerSize?: boolean;
}

const SlideFillButton: React.FC<SlideFillButtonProps> = ({ title, largerSize }) => {
	const isSmallScreen = useMediaQuery({ maxWidth: 1024 });

	return (
		<motion.button
			className={classNames(
				"slide-fill-button",
				{ "size-lg": largerSize },
				{ "desktop-size": isSmallScreen }
			)}
		>
			<span className="slide-fill-button-text">{title}</span>
			<span className="fill-top" />
			<span className="fill-bottom" />
		</motion.button>
	);
};

export default SlideFillButton;
