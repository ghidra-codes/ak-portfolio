import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import EntryAnimation from "./components/layout/EntryAnimation";
import Footer from "./components/layout/Footer";
import { EASE_OUT_SHARP } from "./constants/animations";
import MainContent from "./layouts/MainContent";
import SequentialLayout from "./layouts/SequentialLayout";

function App() {
	const [showEntry, setShowEntry] = useState(true);

	useEffect(() => {
		if ("ontouchstart" in window) document.body.classList.add("no-hover");
		else document.body.classList.remove("no-hover");
	}, []);

	return (
		<AnimatePresence mode="wait">
			{showEntry && (
				<motion.div key="entry-root" className="entry-root">
					<motion.div
						className="entry-background"
						initial={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5, ease: EASE_OUT_SHARP }}
					/>

					<motion.div
						exit={{ scale: 0.3, opacity: 0 }}
						transition={{ delay: 0.2, duration: 0.25 }}
						className="entry-wrapper"
					>
						<EntryAnimation onComplete={() => setShowEntry(false)} />
					</motion.div>
				</motion.div>
			)}

			{!showEntry && (
				<>
					<SequentialLayout />
					<MainContent />
					<Footer />
				</>
			)}
		</AnimatePresence>
	);
}

export default App;
