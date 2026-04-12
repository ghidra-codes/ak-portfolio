import { CATEGORY_INFO, TECH_STACK } from "@/constants/techStack";

/**
 * Preloads all tech stack and category icons to ensure they're cached before rendering
 * This prevents loading delays when sliding through tech stack categories or during animations
 */
export const preloadTechStackIcons = async (): Promise<void> => {
	const iconUrls = new Set<string>();

	// Collect all category icons
	Object.values(CATEGORY_INFO).forEach(({ icon }) => {
		iconUrls.add(icon);
	});

	// Collect all tech stack icons
	TECH_STACK.forEach(({ icon }) => {
		iconUrls.add(icon);
	});

	// Preload each icon
	const preloadPromises = Array.from(iconUrls).map((iconUrl) => {
		return new Promise<void>((resolve) => {
			const img = new Image();

			const handleLoadOrError = () => {
				img.removeEventListener("load", handleLoadOrError);
				img.removeEventListener("error", handleLoadOrError);
				resolve();
			};

			img.addEventListener("load", handleLoadOrError);
			img.addEventListener("error", handleLoadOrError); // Resolve even on error to avoid blocking
			img.src = iconUrl;
		});
	});

	await Promise.all(preloadPromises);
};
