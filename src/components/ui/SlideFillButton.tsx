import classNames from "classnames";
import { motion } from "motion/react";
import type { FC } from "react";
import { useMediaQuery } from "react-responsive";

interface SlideFillButtonProps {
	title: string;
	href: string;
	largerSize?: boolean;
	download?: boolean;
}

const SlideFillButton: FC<SlideFillButtonProps> = ({ title, href, largerSize, download }) => {
	const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
	const isTouchDevice = document.body.classList.contains("no-hover");

	// SMOOTH SCROLL HANDLER
	const handleClick = (e: React.MouseEvent) => {
		if (!href?.startsWith("#")) return;

		e.preventDefault();

		const target = document.querySelector(href);
		if (!target) return;

		target.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	return (
		<motion.a
			href={href}
			className={classNames("slide-fill-button", { "size-lg": largerSize }, { compact: isSmallScreen })}
			onClick={handleClick}
			{...(download ? { download: true } : {})}
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
		</motion.a>
	);
};

export default SlideFillButton;
