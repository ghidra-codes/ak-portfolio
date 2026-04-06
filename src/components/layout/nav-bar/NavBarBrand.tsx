const NavBarBrand = () => {
	const scrollToTop = () => {
		const mainContent = document.getElementById("main-content");
		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
		mainContent?.focus({ preventScroll: true });
	};

	return (
		<div className="brand">
			<button type="button" className="logo-wrapper" onClick={scrollToTop} aria-label="Scroll to top" />
			<h1 className="navbar-heading">Alexander Kallin</h1>
		</div>
	);
};

export default NavBarBrand;
