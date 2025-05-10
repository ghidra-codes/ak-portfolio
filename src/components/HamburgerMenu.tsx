import { useState } from "react";
import HamburgerMenuBtn from "./HamburgerMenuBtn";

const HamburgerMenu = () => {
	const [active, setActive] = useState(false);

	const onToggle = () => setActive((prevState) => !prevState);

	// Continue from here. Create the dropdown navbar menu
	return (
		<div className="hamburger-menu">
			<HamburgerMenuBtn onToggle={onToggle} active={active} />
		</div>
	);
};

export default HamburgerMenu;
