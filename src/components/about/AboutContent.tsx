import RevealAnimation from "../ui/RevealAnimation";

const AboutContent = () => {
	return (
		<>
			<RevealAnimation>
				<h2 className="about-section-heading">About</h2>
			</RevealAnimation>
			<div className="about-section">
				<RevealAnimation>
					<h2>How I Found My Passion for Web Development</h2>
					<p>
						It all started with a simple curiosity for how things work behind the scenes. I’ve
						always enjoyed understanding the logic that holds creative ideas together, whether
						it’s writing code, solving a tricky problem, or fine-tuning a design. When I
						discovered front-end development, everything clicked. I had found a space where
						creativity and structure come together in a way that felt natural.
					</p>
				</RevealAnimation>
			</div>
			<div className="about-section">
				<RevealAnimation>
					<h2>Why Details Matter</h2>
					<p>
						Before I started working with code, I worked with paint — literally. My background as
						a decorative painter taught me an important lesson: details shape everything. That
						same mindset still drives how I approach web development today. Whether it’s refining
						a layout, selecting the perfect color contrast, or adding subtle animations for better
						flow, I believe well-crafted interfaces create a better experience.
					</p>
				</RevealAnimation>
			</div>
		</>
	);
};

export default AboutContent;
