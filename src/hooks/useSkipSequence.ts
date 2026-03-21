import { useEffect, useState } from "react";

export const useSkipSequence = (thresholdPx: number) => {
	const [skip, setSkip] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > thresholdPx) setSkip(true);
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => window.removeEventListener("scroll", handleScroll);
	}, [thresholdPx]);

	return skip;
};
