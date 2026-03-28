import type { IconType } from "react-icons";
import {
	SiJavascript,
	SiLaravel,
	SiPhp,
	SiReact,
	SiReactquery,
	SiSupabase,
	SiTypescript,
	SiVite,
} from "react-icons/si";

export const PROJECT_ICONS: Record<string, { icon: IconType; label: string }> = {
	typescript: { icon: SiTypescript, label: "TypeScript" },
	react: { icon: SiReact, label: "React" },
	reactQuery: { icon: SiReactquery, label: "React Query" },
	javascript: { icon: SiJavascript, label: "JavaScript" },
	php: { icon: SiPhp, label: "PHP" },
	laravel: { icon: SiLaravel, label: "Laravel" },
	supabase: { icon: SiSupabase, label: "Supabase" },
	vite: { icon: SiVite, label: "Vite" },
} as const;
