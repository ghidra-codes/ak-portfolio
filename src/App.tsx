import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar/NavBar";
import { useState } from "react";
import EntryAnimation from "./components/layout/EntryAnimation";
import { motion, AnimatePresence } from "framer-motion";
import MainContent from "./layouts/MainContent";

function App() {
	const [showEntry, setShowEntry] = useState(true);

	return (
		<AnimatePresence mode="wait">
			{showEntry ? (
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
			) : (
				<>
					<NavBar />
					<MainContent />
					<Footer />
				</>
			)}
		</AnimatePresence>
	);
}

export default App;
