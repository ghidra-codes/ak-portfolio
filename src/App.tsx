import Footer from "./components/layout/Footer";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SequentialLayout from "./layouts/SequentialLayout";
import EntryAnimation from "./components/layout/EntryAnimation";

function App() {
	const [showEntry, setShowEntry] = useState(true);

	useEffect(() => {
		if ("ontouchstart" in window) {
			document.body.classList.add("no-hover");
		} else {
			document.body.classList.remove("no-hover");
		}
	}, []);

	return (
		<AnimatePresence mode="wait">
			{showEntry && (
				<motion.div
					key="entry"
					exit={{ scale: 0.3, opacity: 0 }}
					transition={{ delay: 0.2, duration: 0.25 }}
					onAnimationComplete={(definition) => {
						if (definition === "exit") setShowEntry(false);
					}}
					className="entry-wrapper"
				>
					<EntryAnimation onComplete={() => setShowEntry(false)} />
				</motion.div>
			)}

			{!showEntry && (
				<>
					<SequentialLayout />
					<Footer />
				</>
			)}
		</AnimatePresence>
	);
}

export default App;
