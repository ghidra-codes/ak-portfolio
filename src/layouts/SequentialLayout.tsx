import NavBar from "@/components/layout/nav-bar/NavBar";
import MainContent from "./MainContent";
import { useAnimationContext } from "@/hooks/useAnimationContext";

const SequentialLayout = () => {
	const { setStartAnimations } = useAnimationContext();

	return (
		<>
			<NavBar onAnimationComplete={() => setStartAnimations(true)} />

			<MainContent />
		</>
	);
};

export default SequentialLayout;
