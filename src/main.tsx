import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/scss/main.scss";
import { AnimationProvider } from "./context/AnimationContextProvider";

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Root element with ID 'root' not found");

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<AnimationProvider>
			<App />
		</AnimationProvider>
	</React.StrictMode>
);
