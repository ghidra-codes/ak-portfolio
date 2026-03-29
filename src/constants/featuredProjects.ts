import filmFlare from "@/assets/images/featured-projects/filmflare-project.png";
import growYourHabits from "@/assets/images/featured-projects/grow-your-habits.png";
import matdagboken from "@/assets/images/featured-projects/matdagboken.png";
import type { FeaturedProject } from "@/types/project-feature.types";

export const FEATURED_PROJECTS: FeaturedProject[] = [
	{
		id: "matdagboken",
		title: "Matdagboken",
		description:
			"Matdagboken is a large-scale meal tracking platform I worked on during my internship at OAWA, where I redesigned and rebuilt the entire Matdagboken section from scratch. Based on a Figma design, the goal was to deliver a more app-like experience inspired by tools such as Lifesum. I implemented complex search flows, macro scaling logic, and micro-interactions, while also building backend functionality using Laravel, including routes, controllers, and database structure. The features are live in production and actively used.",
		image: {
			src: matdagboken,
			alt: "Screenshot from matdagboken site",
		},
		icons: ["javascript", "react", "laravel", "php"],
		links: {
			figma: "https://www.figma.com/design/jUxajtCOkJ8woK2e037Eor/matdagbok?node-id=162-5968",
			site: "https://www.matdagboken.se/",
		},
	},
	{
		id: "filmflare",
		title: "The Filmflare Project",
		description:
			"FilmFlare is a React application built as part of a school project for exploring movies and TV shows using the TMDB API. It supports search, filtering, sorting, and a history system for revisiting previously viewed content. The project uses TanStack Query for efficient data fetching, caching, and state synchronization, combined with local storage for persistence. It focuses on structuring reusable components and handling real-world API integration patterns effectively.",
		image: {
			src: filmFlare,
			alt: "Screenshot from the filmflare project",
		},
		icons: ["typescript", "react", "reactQuery", "vite"],
		links: {
			github: "https://github.com/ghidra-codes/filmflare-project",
			site: "https://the-filmflare-project.netlify.app",
		},
		reverse: true,
	},
	{
		id: "grow-your-habits",
		title: "Grow Your Habits",
		description:
			"Grow Your Habits is a mobile-first React application that combines habit tracking with gamification. Users log daily habits while a virtual plant reflects consistency by growing or declining over time. The system includes insights, statistics, and achievements, backed by Supabase and edge functions for persistent data and logic. The project focuses on scalable state management with TanStack Query and Zustand, along with a structured component architecture and UI animations using Framer Motion and Lottie.",
		image: {
			src: growYourHabits,
			alt: "Screenshot from grow your habits site",
		},
		icons: ["typescript", "react", "reactQuery", "supabase"],
		links: {
			site: "https://grow-your-habits.netlify.app",
			github: "https://github.com/ghidra-codes/grow-your-habits",
		},
	},
];
