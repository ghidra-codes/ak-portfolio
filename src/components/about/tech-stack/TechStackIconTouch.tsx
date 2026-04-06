import type { FC } from "react";

type TechStackIconTouchProps = {
	icon: string;
	name: string;
};

const TechStackIconTouch: FC<TechStackIconTouchProps> = ({ icon, name }) => {
	return (
		<div className="icon-container">
			<img src={icon} alt="" aria-hidden="true" />
			<p className="icon-label">{name}</p>
		</div>
	);
};

export default TechStackIconTouch;
