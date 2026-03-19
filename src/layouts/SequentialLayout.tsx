import NavBar from "@/components/layout/nav-bar/NavBar";
import SideElements from "@/components/layout/SideElements";
import { useAnimationContext } from "@/hooks/useAnimationContext";

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
