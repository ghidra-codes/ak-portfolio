import { useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";

/**
 * Hides navbar on downward scroll and shows it on scroll up.
 */
const useNavbarAutoHide = () => {
	const { scrollY } = useScroll();

	const [showMenu, setShowMenu] = useState(false);
	const [isHidden, setIsHidden] = useState(false);
	const pendingHideRef = useRef(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		const prev = scrollY.getPrevious();
		const scrollingDown = prev !== undefined && latest > prev;

		if (!scrollingDown) {
			// Show navbar when scrolling up if it's hidden
			if (isHidden) setIsHidden(false);
			return;
		}

		if (scrollingDown && showMenu) {
			setShowMenu(false); // Close the menu first before hiding the navbar
			pendingHideRef.current = true; // Mark navbar to hide after menu closes
			return;
		}

		// Hide navbar if menu is not open
		if (!pendingHideRef.current) setIsHidden(true);
	});

	// Complete hiding the navbar after menu exit animation
	const completeExit = () => {
		if (pendingHideRef.current) {
			setIsHidden(true);
			pendingHideRef.current = false;
		}
	};

	return { showMenu, setShowMenu, isHidden, completeExit };
};

export default useNavbarAutoHide;
