import type { IconType } from "react-icons";
import {
	SiReact,
	SiReactquery,
	SiTypescript,
	SiJavascript,
	SiPhp,
	SiLaravel,
} from "react-icons/si";

export const projectIconsMap: Record<string, { icon: IconType; label: string }> = {
	typescript: { icon: SiTypescript, label: "TypeScript" },
	react: { icon: SiReact, label: "React" },
	reactQuery: { icon: SiReactquery, label: "React Query" },
	javascript: { icon: SiJavascript, label: "JavaScript" },
	php: { icon: SiPhp, label: "PHP" },
	laravel: { icon: SiLaravel, label: "Laravel" },
};
