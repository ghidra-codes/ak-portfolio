import { EASE_IN_OUT } from "@/constants/animations";
import { motion } from "motion/react";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const DURATION = 0.25;

const SideElements = () => {
	return (
		<>
			<div className="side social">
				<ul>
					<li>
						<a href="https://github.com/ghidra-codes" target="_blank" rel="noopener noreferrer">
							<motion.div whileHover={{ scale: 1.2 }}>
								<FiGithub />
							</motion.div>
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/alexander-kallin-42588b326/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<motion.div whileHover={{ scale: 1.2 }}>
								<FiLinkedin />
							</motion.div>
						</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/kallin.kallin/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<motion.div whileHover={{ scale: 1.2 }}>
								<FiInstagram />
							</motion.div>
						</a>
					</li>
				</ul>
			</div>

			<div className="side email">
				<motion.a href="mailto:akallin94@gmail.com" initial="initial" whileHover="hovered">
					<motion.span
						variants={{
							initial: { x: 0, opacity: 1 },
							hovered: { x: "-100%", opacity: 0 },
						}}
						transition={{ duration: DURATION, ease: EASE_IN_OUT }}
						className="first-link-span"
					>
						akallin94@gmail.com
					</motion.span>

					<motion.span
						variants={{
							initial: { x: "100%", opacity: 0 },
							hovered: { x: "0%", opacity: 1 },
						}}
						transition={{ duration: DURATION, ease: EASE_IN_OUT }}
						className="second-link-span"
					>
						akallin94@gmail.com
					</motion.span>
				</motion.a>
			</div>
		</>
	);
};

export default SideElements;
