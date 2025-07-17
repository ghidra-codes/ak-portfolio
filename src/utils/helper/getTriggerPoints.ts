const breakpoints = {
	mobile: 480,
	tablet: 768,
	desktop: 1024,
};

const getTriggerPoints = (): { enter: number; leave: number } => {
	const screenWidth = window.innerWidth;
	const aboutSection = document.getElementById("about");
	const aboutTop = aboutSection ? aboutSection.offsetTop : 0;

	if (screenWidth <= breakpoints.mobile) {
		return { enter: aboutTop - 70, leave: aboutTop - 60 };
	} else if (screenWidth <= breakpoints.tablet) {
		return { enter: aboutTop - 100, leave: aboutTop - 90 };
	} else if (screenWidth <= breakpoints.desktop) {
		return { enter: aboutTop - 130, leave: aboutTop - 120 };
	}

	return { enter: 500, leave: 510 };
};

export default getTriggerPoints;
