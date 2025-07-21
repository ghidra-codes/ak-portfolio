import NavBar from "@/components/layout/nav-bar/NavBar";
import { useState } from "react";
import MainContent from "./MainContent";

const SequentialLayout = () => {
	const [showMainContent, setShowMainContent] = useState(false);

	return (
		<>
			<NavBar onAnimationComplete={() => setShowMainContent(true)} />

			{showMainContent && <MainContent />}
		</>
	);
};

export default SequentialLayout;
