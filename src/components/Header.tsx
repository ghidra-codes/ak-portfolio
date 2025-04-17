import me from "../assets/images/me.jpg";

export default function Header() {
	return (
		<header>
			<div className="home-content">
				<h1 className="title">
					Hello my name is Alex, <br />I do web development.
				</h1>
				<h3 className="subtitle">
					I’m a creative developer who loves crafting high-quality web experiences. My goal is always to build
					the best product possible, using modern technologies and industry best practices.
				</h3>
			</div>
			<div className="hero-image-wrapper">
				<img className="hero-image" src={me} alt="A image of me" />
				<div className="grey-box"></div>
			</div>
		</header>
	);
}
