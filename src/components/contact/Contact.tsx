import SectionHeader from "../layout/SectionHeader";
import RevealAnimation from "../ui/RevealAnimation";
import SlideFillButton from "../ui/SlideFillButton";

const Contact = () => {
	return (
		<RevealAnimation className="contact-wrapper">
			<p className="eyebrow">Open to opportunities</p>
			<SectionHeader title="Get in touch" noLine />
			<p className="contact-description">
				Looking for junior frontend or backend roles, while remaining open to internships. Frontend by
				training, full-stack by curiosity. Building something meaningful? <br /> I’d like to help.
			</p>

			<SlideFillButton title="Let's talk" href="mailto:akallin94@gmail.com" />
		</RevealAnimation>
	);
};

export default Contact;
