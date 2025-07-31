const getTriggerPoints = (): { enter: number; leave: number } => {
	const aboutSection = document.getElementById("about")!;

	const aboutTop = aboutSection.offsetTop;
	const screenHeight = window.innerHeight;

	const enter = aboutTop - screenHeight * 0.15;
	const leave = aboutTop - screenHeight * 0.2;

	return { enter, leave };
};

export default getTriggerPoints;
