import { createContext } from "react";

interface AnimationContextType {
	animateHeader: boolean;
	setAnimateHeader: React.Dispatch<React.SetStateAction<boolean>>;
	animateSides: boolean;
	setAnimateSides: React.Dispatch<React.SetStateAction<boolean>>;
	animateAbout: boolean;
	setAnimateAbout: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AnimationContext = createContext<AnimationContextType | undefined>(undefined);
