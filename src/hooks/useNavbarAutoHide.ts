import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

const useNavbarAutoHide = () => {
	const { scrollY } = useScroll();

	const [showMenu, setShowMenu] = useState(false);
	const [pendingHide, setPendingHide] = useState(false);
	const [hidden, setHidden] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		const prev = scrollY.getPrevious();
		const scrollingDown = prev !== undefined && latest > prev;

		if (scrollingDown) {
			if (showMenu) {
				setShowMenu(false);
				setPendingHide(true);
				return;
			}

			if (!pendingHide) setHidden(true);
		} else {
			setHidden(false);
		}
	});

	const completeExit = () => {
		if (pendingHide) {
			setHidden(true);
			setPendingHide(false);
		}
	};

	return { showMenu, setShowMenu, hidden, completeExit };
};

export default useNavbarAutoHide;
