import NavBar from "@/components/layout/nav-bar/NavBar";
import { useAnimationContext } from "@/hooks/useAnimationContext";
import SideElements from "@/components/layout/SideElements";

/**
 * Renders the main navigation and side elements based on animation context state.
 */
const SequentialLayout = () => {
	const { animateSides } = useAnimationContext();

	return (
		<>
			<NavBar />
			{animateSides && <SideElements />}
		</>
	);
};

export default SequentialLayout;
