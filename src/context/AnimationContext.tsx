import React, { createContext } from "react";

interface AnimationContextType {
	header: { animateHeader: boolean; setAnimateHeader: React.Dispatch<React.SetStateAction<boolean>> };
	about: { animateAbout: boolean; setAnimateAbout: React.Dispatch<React.SetStateAction<boolean>> };
}

export const AnimationContext = createContext<AnimationContextType | undefined>(undefined);
