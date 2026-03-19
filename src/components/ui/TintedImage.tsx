import classNames from "classnames";
import type { FC } from "react";
import { useState } from "react";
import type { TintedImageProps } from "@/types/tinted-image.types";

const TintedImage: FC<TintedImageProps> = ({
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
				className={classNames("tinted-image", imageClass, { revealed }, { "pop-in": triggerPopIn })}
				src={src}
				alt={alt}
			/>
			<div className={classNames("image-overlay", { revealed }, { "pop-in": triggerPopIn })}></div>
			{children}
		</div>
	);
};

export default TintedImage;
