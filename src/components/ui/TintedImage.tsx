import { TintedImageProps } from "@/types/tinted-image.types";
import classNames from "classnames";
import React, { useState } from "react";

const TintedImage: React.FC<TintedImageProps> = ({
	src,
	alt,
	wrapperClass,
	imageClass,
	children,
	triggerPopIn = false,
}) => {
	const [revealed, setRevealed] = useState(false);

	const handleClick = () => {
		if (revealed) return;

		setRevealed(true);
		setTimeout(() => setRevealed(false), 2500);
	};

	return (
		<div className={`tinted-image-wrapper ${wrapperClass}`} onClick={handleClick}>
			<img
				className={classNames(
					"tinted-image",
					imageClass,
					{ revealed },
					{ "pop-in": triggerPopIn }
				)}
				src={src}
				alt={alt}
			/>
			<div
				className={classNames("image-overlay", { revealed }, { "pop-in": triggerPopIn })}
			></div>
			{children}
		</div>
	);
};

export default TintedImage;
