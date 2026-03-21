import type { FC } from "react";
import { useState } from "react";
import { AnimationContext } from "./AnimationContext";

interface AnimationProviderProps {
	children: React.ReactNode;
}

export const AnimationProvider: FC<AnimationProviderProps> = ({ children }) => {
	const [animateHeader, setAnimateHeader] = useState(false);
	const [animateSides, setAnimateSides] = useState(false);
	const [animateAbout, setAnimateAbout] = useState(false);

	return (
		<AnimationContext.Provider
			value={{
				animateHeader,
				setAnimateHeader,
				animateSides,
				setAnimateSides,
				animateAbout,
				setAnimateAbout,
			}}
		>
			{children}
		</AnimationContext.Provider>
	);
};
