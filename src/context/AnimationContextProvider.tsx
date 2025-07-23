import React, { useState } from "react";
import { AnimationContext } from "./AnimationContext";

interface AnimationProviderProps {
	children: React.ReactNode;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
	const [animateHeader, setAnimateHeader] = useState(false);
	const [animateAbout, setAnimateAbout] = useState(false);

	return (
		<AnimationContext.Provider
			value={{ header: { animateHeader, setAnimateHeader }, about: { animateAbout, setAnimateAbout } }}
		>
			{children}
		</AnimationContext.Provider>
	);
};
