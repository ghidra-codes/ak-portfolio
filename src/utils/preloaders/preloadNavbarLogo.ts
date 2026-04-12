import logoImage from "@/assets/images/logo/logo.png";

/**
 * Preloads the navbar logo image to ensure it's cached before rendering
 * This ensures the navbar logo appears immediately when the entry animation finishes
 */
export const preloadNavbarLogo = async (): Promise<void> => {
	return new Promise<void>((resolve) => {
		const img = new Image();

		const handleLoadOrError = () => {
			img.removeEventListener("load", handleLoadOrError);
			img.removeEventListener("error", handleLoadOrError);
			resolve();
		};

		img.addEventListener("load", handleLoadOrError);
		img.addEventListener("error", handleLoadOrError); // Resolve even on error to avoid blocking
		img.src = logoImage;
	});
};
