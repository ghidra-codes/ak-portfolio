import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";

export default function Footer() {
	const year = new Date().getFullYear();

	const isSmallScreen = useMediaQuery({ maxWidth: 768 });

	return (
		<footer>
			{isSmallScreen && (
				<div className="mobile-links">
					<a href="mailto:akallin94@gmail.com">
						<FiMail />
					</a>

					<a href="https://github.com/ghidra-codes" target="_blank" rel="noreferrer">
						<FiGithub />
					</a>

					<a
						href="https://www.linkedin.com/in/alexander-kallin-42588b326/"
						target="_blank"
						rel="noreferrer"
					>
						<FiLinkedin />
					</a>

					<a href="https://www.instagram.com/kallin.kallin/" target="_blank" rel="noreferrer">
						<FiInstagram />
					</a>
				</div>
			)}

			<p className="info">Built by Alexander Kallin © {year}</p>
		</footer>
	);
}
