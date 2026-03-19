import heart from "@/assets/icons/heart.svg";
import paintBrush from "@/assets/icons/paint-brush.svg";
import SectionHeader from "@/components/layout/SectionHeader";
import RevealAnimation from "@/components/ui/RevealAnimation";

const AboutContent = () => {
	return (
		<>
			<div className="about-section">
				<RevealAnimation viewportMargin={"0px 0px -15% 0px"}>
					<SectionHeader title={"About"} />
				</RevealAnimation>
				<RevealAnimation viewportMargin={"0px 0px -5% 0px"}>
					<h3>
						<img src={heart} alt="Heart" className="about-section-icon" />
						How I Found My Passion for Web Development
					</h3>
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
					<h3>
						<img src={paintBrush} alt="Paint brush" className="about-section-icon" />
						Why Details Matter
					</h3>
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
