import classNames from "classnames";
import { motion } from "motion/react";
import React from "react";
import { useMediaQuery } from "react-responsive";

interface SlideFillButtonProps {
	title: string;
	href?: string;
	largerSize?: boolean;
}

const SlideFillButton: React.FC<SlideFillButtonProps> = ({ title, href, largerSize }) => {
	const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
	const isTouchDevice = document.body.classList.contains("no-hover");

	const Component = href ? motion.a : motion.button;

	return (
		<Component
			{...(href ? { href } : {})}
			className={classNames(
				"slide-fill-button",
				{ "size-lg": largerSize },
				{ "desktop-size": isSmallScreen },
			)}
			{...(isTouchDevice
				? {
						whileTap: {
							scale: 0.95,
							boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
							backgroundColor: "rgba(76, 161, 224, 0.1)",
						},
						transition: { type: "spring", stiffness: 300, damping: 20 },
					}
				: {})}
		>
			<span className="slide-fill-button-text">{title}</span>
			<span className="fill-top" />
			<span className="fill-bottom" />
		</Component>
	);
};

export default SlideFillButton;
