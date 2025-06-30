import classNames from "classnames";
import React, { useEffect, useState } from "react";

interface TintedImageProps {
	src: string;
	alt: string;
	wrapperClass: string;
	imageClass: string;
	children?: React.ReactNode;
}

const TintedImage: React.FC<TintedImageProps> = ({ src, alt, wrapperClass, imageClass, children }) => {
	const [revealed, setRevealed] = useState(false);
	const [popIn, setPopIn] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setPopIn(true);
		}, 50);
		return () => clearTimeout(timer);
	}, []);

	const handleClick = () => {
		if (revealed) return;

		setRevealed(true);
		setTimeout(() => setRevealed(false), 2500);
	};

	return (
		<div className={`tinted-image-wrapper ${wrapperClass}`} onClick={handleClick}>
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
