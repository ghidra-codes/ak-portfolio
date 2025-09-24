import React from "react";

type DecorationProps = {
	variant: "triangle" | "square" | "circle";
};

const Decoration: React.FC<DecorationProps> = ({ variant }) => {
	const dots = (
		<>
			<circle cx="10" cy="10" r="4.5" />
			<circle cx="38" cy="10" r="4.5" />
			<circle cx="24" cy="10" r="4.5" />
			<circle cx="10" cy="24" r="4.5" />
			<circle cx="38" cy="24" r="4.5" />
			<circle cx="10" cy="38" r="4.5" />
			<circle cx="38" cy="38" r="4.5" />
			<circle cx="24" cy="38" r="4.5" />
		</>
	);

	let mainShape;

	switch (variant) {
		case "triangle":
			mainShape = (
				<path d="M23.134,19.5l-4.6188,8a1,1,0,0,0,.866,1.5h9.2376a1,1,0,0,0,.866-1.5l-4.6188-8A1,1,0,0,0,23.134,19.5Z" />
			);
			break;
		case "square":
			mainShape = <rect x="19.25" y="19.25" width="9.5" height="9.5" rx="1" />;
			break;
		case "circle":
			mainShape = <circle cx="24" cy="25" r="8" />;
			break;
		default:
			mainShape = null;
	}

	return (
		<svg
			viewBox="0 0 48 48"
			className={`decor ${variant}`}
			fill="none"
			stroke="#39393a"
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			{dots}
			{mainShape}
		</svg>
	);
};

export default Decoration;
