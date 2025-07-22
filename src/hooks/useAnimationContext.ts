import { useContext } from "react";
import { AnimationContext } from "@/context/AnimationContext";

export const useAnimationContext = () => {
	const context = useContext(AnimationContext);

	if (!context) throw new Error("useAnimationContext must be used within an AnimationProvider");

	return context;
};
