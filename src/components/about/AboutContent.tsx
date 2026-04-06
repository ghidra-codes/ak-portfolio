import { useLayoutEffect, useRef, useState } from "react";
import heart from "@/assets/icons/heart.svg";
import paintBrush from "@/assets/icons/paint-brush.svg";
import SectionHeader from "@/components/layout/SectionHeader";
import RevealAnimation from "@/components/ui/RevealAnimation";
import { useAnimationContext } from "@/hooks/useAnimationContext";
import { useSkipSequence } from "@/hooks/useSkipSequence";

const AboutContent = () => {
	const { animateAbout } = useAnimationContext();
	const sectionRef = useRef<HTMLDivElement | null>(null);

	const [threshold, setThreshold] = useState(0);

	useLayoutEffect(() => {
		if (!sectionRef.current) return;

		const rect = sectionRef.current.getBoundingClientRect();
		const offsetTop = rect.top + window.scrollY;

		setThreshold(Math.max(0, offsetTop - window.innerHeight * 0.2));
	}, []);

	const skipSequence = useSkipSequence(threshold);

	const shouldAnimate = animateAbout || skipSequence;

	return (
		<>
			<div ref={sectionRef} className="about-section">
				<RevealAnimation manualControl shouldAnimate={shouldAnimate}>
					<SectionHeader title={"About"} />
				</RevealAnimation>
				<RevealAnimation manualControl shouldAnimate={shouldAnimate}>
					<h3>
						<img src={heart} alt="Heart" className="about-section-icon" />
						How I Found My Passion for Web Development
					</h3>
					<p>
						It all started with a simple curiosity for how things work behind the scenes. I’ve
						always enjoyed understanding the logic that holds creative ideas together, whether
						it’s writing code, solving a tricky problem, or fine-tuning a design. When I
						discovered web development, everything clicked. I had found a space where creativity
						and structure come together in a way that felt natural.
					</p>
				</RevealAnimation>
			</div>
			<div className="about-section">
				<RevealAnimation manualControl shouldAnimate={shouldAnimate}>
					<h3>
						<img src={paintBrush} alt="Paint brush" className="about-section-icon" />
						Why Details Matter
					</h3>
					<p>
						Before I started working with code, I worked with paint — literally. My background as
						a decorative painter taught me an important lesson: details shape everything. That
						same mindset still drives how I approach development today. Whether it’s refining a
						layout, structuring clean logic, or handling data consistently, I believe thoughtful
						implementation creates a better experience.
					</p>
				</RevealAnimation>
			</div>
		</>
	);
};

export default AboutContent;
