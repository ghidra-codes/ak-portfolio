import { useEffect, useState } from "react";

const useIsTouchDevice = () => {
	const [isTouch, setIsTouch] = useState(false);

	useEffect(() => {
		setIsTouch(window.matchMedia("(pointer: coarse)").matches);
	}, []);

	return isTouch;
};

export default useIsTouchDevice;
