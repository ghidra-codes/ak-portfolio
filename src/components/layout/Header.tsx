import me from "@/assets/images/me.jpg";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Header() {
	const { ref, inView } = useInView({ threshold: 0.3 });
	const setActiveSection = useActiveSection((state) => state.setActiveSection);

	useEffect(() => {
		if (inView) {
			setActiveSection("home");
		}
	}, [inView, setActiveSection]);

	return (
		<header ref={ref} id="home">
			<div className="home-content">
				<h1 className="title">
					Hello my name is Alex, <br />I do web development.
				</h1>
				<h3 className="subtitle">
					I’m a creative developer who loves crafting high-quality web experiences. My
					goal is always to build the best product possible, using modern technologies and
					industry best practices.
				</h3>
			</div>
			<div className="hero-image-wrapper">
				<img className="hero-image" src={me} alt="A picture of Alexander Kallin" />
				<div className="grey-box"></div>
			</div>
		</header>
	);
}
