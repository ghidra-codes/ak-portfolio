import React, { createContext } from "react";

interface AnimationContextType {
	startAnimations: boolean;
	setStartAnimations: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AnimationContext = createContext<AnimationContextType | undefined>(undefined);
