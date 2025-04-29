import { motion } from "framer-motion";

const AboutContent = () => {
	return (
		<div className="content">
			<motion.div
				className="about-section-one"
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				viewport={{ once: true, amount: 0.3 }}
			>
				<h2>How I Found My Passion for Web Development</h2>
				<p>
					It all started with a simple curiosity for how things work behind the scenes. I’ve always enjoyed
					understanding the logic that holds creative ideas together, whether it’s writing code, solving a
					tricky problem, or fine-tuning a design. When I discovered front-end development, everything
					clicked. I had found a space where creativity and structure come together in a way that felt
					natural.
				</p>
			</motion.div>

			<motion.div
				className="about-section-two"
				initial={{ opacity: 0, x: 100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				viewport={{ once: true, amount: 0.3 }}
			>
				<h2>Why Details Matter</h2>
				<p>
					Before I started working with code, I worked with paint — literally. My background as a decorative
					painter taught me an important lesson: details shape everything. That same mindset still drives how
					I approach web development today. Whether it’s refining a layout, selecting the perfect color
					contrast, or adding subtle animations for better flow, I believe well-crafted interfaces create a
					better experience.
				</p>
			</motion.div>
		</div>
	);
};

export default AboutContent;
