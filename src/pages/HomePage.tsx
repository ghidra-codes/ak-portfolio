import Typewriter from "typewriter-effect";

export default function HomePage() {
	return (
		<header>
			<section className="hero">
				<h1 className="hero-text">
					Hello my name is Alex, I do{" "}
					<Typewriter
						options={{
							strings: ["websites", "design", "art", "apps"],
							autoStart: true,
							loop: true,
							deleteSpeed: 50,
							delay: 90,
						}}
					/>
				</h1>
			</section>
		</header>
	);
}
