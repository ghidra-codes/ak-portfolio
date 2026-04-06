import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";

export default function Footer() {
	const year = new Date().getFullYear();

	const isSmallScreen = useMediaQuery({ maxWidth: 768 });

	return (
		<footer>
			<div className="footer-inner">
				{isSmallScreen && (
					<div className="mobile-links">
						<a href="mailto:akallin94@gmail.com" aria-label="Email Alexander Kallin">
							<FiMail />
						</a>

						<a
							href="https://github.com/ghidra-codes"
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub"
						>
							<FiGithub />
						</a>

						<a
							href="https://www.linkedin.com/in/alexander-kallin-42588b326/"
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn"
						>
							<FiLinkedin />
						</a>

						<a
							href="https://www.instagram.com/kallin.kallin/"
							target="_blank"
							rel="noreferrer"
							aria-label="Instagram"
						>
							<FiInstagram />
						</a>
					</div>
				)}

				<p className="info">Built by Alexander Kallin © {year}</p>
			</div>
		</footer>
	);
}
