import SectionHeader from "../layout/SectionHeader";
import RevealAnimation from "../ui/RevealAnimation";
import SlideFillButton from "../ui/SlideFillButton";

const Contact = () => {
	return (
		<RevealAnimation className="contact-wrapper">
			<p className="eyebrow">Let’s make it official</p>
			<SectionHeader title="Get in touch" noLine />
			<p className="contact-description">
				Open to internship and junior frontend or backend roles. Frontend by education,
				full-stack by curiosity. Building something meaningful? I’d like to help.
			</p>

			<SlideFillButton title="Let's talk" href="mailto:akallin94@gmail.com" />
		</RevealAnimation>
	);
};

export default Contact;
