import { MotionConfig } from "motion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "@/assets/scss/main.scss";
import { AnimationProvider } from "@/context/AnimationContextProvider";

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Root element with ID 'root' not found");

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<MotionConfig reducedMotion="user">
			<AnimationProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</AnimationProvider>
		</MotionConfig>
	</React.StrictMode>,
);
