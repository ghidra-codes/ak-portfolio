import React, { useState } from "react";
import { AnimationContext } from "./AnimationContext";

interface AnimationProviderProps {
	children: React.ReactNode;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
	const [startAnimations, setStartAnimations] = useState(false);

	return (
		<AnimationContext.Provider value={{ startAnimations, setStartAnimations }}>
			{children}
		</AnimationContext.Provider>
	);
};
