import classNames from "classnames";
import React, { useEffect, useState } from "react";

interface TintedImageProps {
	src: string;
	alt: string;
	wrapperClass: string;
	imageClass: string;
	children?: React.ReactNode;
	shouldAnimate?: boolean;
}

const TintedImage: React.FC<TintedImageProps> = ({
	src,
	alt,
	wrapperClass,
	imageClass,
	children,
	shouldAnimate,
}) => {
	const [revealed, setRevealed] = useState(false);
	const [popIn, setPopIn] = useState(false);

	useEffect(() => {
		if (shouldAnimate) {
			const timer = setTimeout(() => setPopIn(true), 50);
			return () => clearTimeout(timer);
		} else {
			setPopIn(false);
		}
	}, [shouldAnimate]);

	const handleClick = () => {
		if (revealed) return;

		setRevealed(true);
		setTimeout(() => setRevealed(false), 2500);
	};

	return (
		<div
			className={`tinted-image-wrapper ${wrapperClass}`}
			onClick={handleClick}
			style={{ opacity: shouldAnimate ? 1 : 0, transition: "opacity 0.4s ease" }}
		>
			<img
				className={classNames("tinted-image", imageClass, { revealed }, { "pop-in": popIn })}
				src={src}
				alt={alt}
			/>
			<div
				className={classNames("image-overlay", { revealed }, { "pop-in": popIn })}
				style={{ backgroundColor: "rgba(33, 118, 174, 0.375)" }}
			></div>
			{children}
		</div>
	);
};

export default TintedImage;
