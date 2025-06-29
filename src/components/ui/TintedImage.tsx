import classNames from "classnames";
import React, { useState } from "react";

interface TintedImageProps {
	src: string;
	alt: string;
	wrapperClass: string;
	imageClass: string;
	children?: React.ReactNode;
}

const TintedImage: React.FC<TintedImageProps> = ({ src, alt, wrapperClass, imageClass, children }) => {
	const [revealed, setRevealed] = useState(false);

	const handleClick = () => {
		if (revealed) return;

		setRevealed(true);
		setTimeout(() => setRevealed(false), 2500);
	};

	return (
		<div className={`tinted-image-wrapper ${wrapperClass}`} onClick={handleClick}>
			<img className={classNames("tinted-image", imageClass, { revealed })} src={src} alt={alt} />
			<div
				className={classNames("image-overlay", { revealed })}
				style={{ backgroundColor: "rgba(33, 118, 174, 0.375)" }}
			></div>
			{children}
		</div>
	);
};

export default TintedImage;
