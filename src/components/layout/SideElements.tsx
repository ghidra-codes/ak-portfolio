import { EASE_IN_OUT_SMOOTH, EASE_IN_OUT, EASE_OUT_SLOW } from "@/constants/animations";
import { motion } from "motion/react";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const DURATION = 0.25;

const SideElements = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1.5, ease: EASE_OUT_SLOW }}
		>
			<div className="side social">
				<ul>
					<li>
						<motion.a
							className="social-icon"
							href="https://github.com/ghidra-codes"
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ y: -3.5 }}
							transition={{ duration: 0.2, ease: EASE_IN_OUT_SMOOTH }}
						>
							<FiGithub />
						</motion.a>
					</li>
					<li>
						<motion.a
							className="social-icon"
							href="https://www.linkedin.com/in/alexander-kallin-42588b326/"
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ y: -3.5 }}
							transition={{ duration: 0.2, ease: EASE_IN_OUT_SMOOTH }}
						>
							<FiLinkedin />
						</motion.a>
					</li>
					<li>
						<motion.a
							className="social-icon"
							href="https://www.instagram.com/kallin.kallin/"
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ y: -3.5 }}
							transition={{ duration: 0.2, ease: EASE_IN_OUT_SMOOTH }}
						>
							<FiInstagram />
						</motion.a>
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
						className="first-mail-span"
					>
						akallin94@gmail.com
					</motion.span>

					<motion.span
						variants={{
							initial: { x: "100%", opacity: 0 },
							hovered: { x: "0%", opacity: 1 },
						}}
						transition={{ duration: DURATION, ease: EASE_IN_OUT }}
						className="second-mail-span"
					>
						akallin94@gmail.com
					</motion.span>
				</motion.a>
			</div>
		</motion.div>
	);
};

export default SideElements;
