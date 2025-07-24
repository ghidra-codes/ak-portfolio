import NavBar from "@/components/layout/nav-bar/NavBar";
import { useAnimationContext } from "@/hooks/useAnimationContext";
import SideElements from "@/components/layout/SideElements";

const SequentialLayout = () => {
	const { setAnimateHeader, animateSides } = useAnimationContext();

	return (
		<>
			<NavBar onStartHeaderAnimations={() => setAnimateHeader(true)} />
			{animateSides && <SideElements />}
		</>
	);
};

export default SequentialLayout;
