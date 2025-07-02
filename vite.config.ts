import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	css: {
		preprocessorOptions: {
			api: "legacy",
			scss: {
				includePaths: [path.resolve(__dirname, "src/assets/scss")],
			},
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
});
