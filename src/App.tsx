import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import OmamailPage from "@/pages/OmamailPage";
import PrivacyPage from "@/pages/PrivacyPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/privacy" element={<PrivacyPage />} />
			<Route path="/omamail" element={<OmamailPage />} />
		</Routes>
	);
}

export default App;
