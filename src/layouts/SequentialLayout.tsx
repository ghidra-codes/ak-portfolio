import NavBar from "@/components/layout/nav-bar/NavBar";
import MainContent from "./MainContent";
import { useAnimationContext } from "@/hooks/useAnimationContext";

const SequentialLayout = () => {
	const { setAnimateHeader } = useAnimationContext();

	return (
		<>
			<NavBar onStartHeaderAnimations={() => setAnimateHeader(true)} />

			<MainContent />
		</>
	);
};

export default SequentialLayout;
