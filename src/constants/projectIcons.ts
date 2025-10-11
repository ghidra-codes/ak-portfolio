import type { IconType } from "react-icons";
import { SiReact, SiReactquery, SiTypescript } from "react-icons/si";

export const projectIconsMap: Record<string, { icon: IconType; label: string }> = {
	typescript: { icon: SiTypescript, label: "TypeScript" },
	react: { icon: SiReact, label: "React" },
	reactQuery: { icon: SiReactquery, label: "React Query" },
};
