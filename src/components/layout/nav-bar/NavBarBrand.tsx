const NavBarBrand = () => {
	const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

	return (
		<div className="brand">
			<div className="logo-wrapper" onClick={scrollToTop} />
			<h1 className="navbar-heading">Alexander Kallin</h1>
		</div>
	);
};

export default NavBarBrand;
