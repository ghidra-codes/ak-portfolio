import NavBar from "@/components/layout/nav-bar/NavBar";
import MainContent from "./MainContent";
import { useAnimationContext } from "@/hooks/useAnimationContext";

const SequentialLayout = () => {
	const { header } = useAnimationContext();

	return (
		<>
			<NavBar onStartHeaderAnimations={() => header.setAnimateHeader(true)} />

			<MainContent />
		</>
	);
};

export default SequentialLayout;
