/**
 * Category icons
 */
import languages from "@/assets/icons/categories/code-2.svg";
import databases from "@/assets/icons/categories/database.svg";
import backend from "@/assets/icons/categories/gear.svg";
import platforms from "@/assets/icons/categories/layer.svg";
import frontend from "@/assets/icons/categories/monitor-2.svg";
import tools from "@/assets/icons/categories/tools-2.svg";

/**
 * Tech stack icons
 */
import cypress from "@/assets/icons/tech-stack/cypress.svg";
import express from "@/assets/icons/tech-stack/express.svg";
import firebase from "@/assets/icons/tech-stack/firebase.svg";
import framer from "@/assets/icons/tech-stack/framer.svg";
import git from "@/assets/icons/tech-stack/git.svg";
import js from "@/assets/icons/tech-stack/js.svg";
import laravel from "@/assets/icons/tech-stack/laravel.svg";
import mongodb from "@/assets/icons/tech-stack/mongodb.svg";
import node from "@/assets/icons/tech-stack/node-js.svg";
import postgresql from "@/assets/icons/tech-stack/postgresql.svg";
import prisma from "@/assets/icons/tech-stack/prisma.svg";
import react from "@/assets/icons/tech-stack/react.svg";
import scss from "@/assets/icons/tech-stack/scss.svg";
import supabase from "@/assets/icons/tech-stack/supabase.svg";
import tanstack from "@/assets/icons/tech-stack/tanstack.svg";
import ts from "@/assets/icons/tech-stack/ts.svg";

export const CATEGORY_INFO: Record<string, { icon: string; label: string }> = {
	languages: { icon: languages, label: "Languages" },
	frontend: { icon: frontend, label: "Frontend" },
	backend: { icon: backend, label: "Backend" },
	tools: { icon: tools, label: "Tools" },
	platforms: { icon: platforms, label: "Platforms" },
	databases: { icon: databases, label: "Databases" },
} as const;

export const TECH_STACK = [
	{ name: "JavaScript", icon: js, category: "languages" },
	{ name: "TypeScript", icon: ts, category: "languages" },

	{ name: "React", icon: react, category: "frontend" },
	{ name: "TanStack", icon: tanstack, category: "frontend" },
	{ name: "SCSS", icon: scss, category: "frontend" },
	{ name: "Motion", icon: framer, category: "frontend" },

	{ name: "Laravel", icon: laravel, category: "backend" },
	{ name: "Node.js", icon: node, category: "backend" },
	{ name: "Express", icon: express, category: "backend" },
	{ name: "Prisma", icon: prisma, category: "backend" },

	{ name: "MongoDB", icon: mongodb, category: "databases" },
	{ name: "PostgreSQL", icon: postgresql, category: "databases" },

	{ name: "Firebase", icon: firebase, category: "platforms" },
	{ name: "Supabase", icon: supabase, category: "platforms" },

	{ name: "Cypress", icon: cypress, category: "tools" },
	{ name: "Git", icon: git, category: "tools" },
] as const;
