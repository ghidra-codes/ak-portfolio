import React, { useState } from "react";
import { AnimationContext } from "./AnimationContext";

interface AnimationProviderProps {
	children: React.ReactNode;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
	const [animateHeader, setAnimateHeader] = useState(false);

	return (
		<AnimationContext.Provider value={{ animateHeader, setAnimateHeader }}>
			{children}
		</AnimationContext.Provider>
	);
};
