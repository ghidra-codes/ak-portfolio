import React, { createContext } from "react";

interface AnimationContextType {
	animateHeader: boolean;
	setAnimateHeader: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AnimationContext = createContext<AnimationContextType | undefined>(undefined);
