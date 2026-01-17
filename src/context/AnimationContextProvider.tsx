import React, { useState } from "react";
import { AnimationContext } from "./AnimationContext";

interface AnimationProviderProps {
	children: React.ReactNode;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
	const [animateHeader, setAnimateHeader] = useState(false);
	const [animateSides, setAnimateSides] = useState(false);

	return (
		<AnimationContext.Provider
			value={{ animateHeader, setAnimateHeader, animateSides, setAnimateSides }}
		>
			{children}
		</AnimationContext.Provider>
	);
};
