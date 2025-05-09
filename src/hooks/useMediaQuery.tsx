import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

	useEffect(() => {
		const mediaQuery = window.matchMedia(query);
		const handler = () => setMatches(mediaQuery.matches);

		mediaQuery.addEventListener("change", handler);
		return () => mediaQuery.removeEventListener("change", handler);
	}, [query]);

	return matches;
};

export default useMediaQuery;
