/**
 * Tech stack icons
 */
import git from "@/assets/icons/tech-stack/git.svg";
import react from "@/assets/icons/tech-stack/react.svg";
import js from "@/assets/icons/tech-stack/js.svg";
import ts from "@/assets/icons/tech-stack/ts.svg";
import node from "@/assets/icons/tech-stack/node-js.svg";
import prisma from "@/assets/icons/tech-stack/prisma.svg";
import scss from "@/assets/icons/tech-stack/scss.svg";
import framer from "@/assets/icons/tech-stack/framer.svg";
import express from "@/assets/icons/tech-stack/express.svg";
import wordpress from "@/assets/icons/tech-stack/wordpress.svg";
import vite from "@/assets/icons/tech-stack/vite.svg";
import tailwind from "@/assets/icons/tech-stack/tailwind.svg";
import mongodb from "@/assets/icons/tech-stack/mongodb.svg";
import mysql from "@/assets/icons/tech-stack/mysql.svg";
import cypress from "@/assets/icons/tech-stack/cypress.svg";
import firebase from "@/assets/icons/tech-stack/firebase.svg";

/**
 * Category icons
 */
import frontend from "@/assets/icons/categories/monitor-2.svg";
import backend from "@/assets/icons/categories/gear.svg";
import tools from "@/assets/icons/categories/tools-2.svg";
import platforms from "@/assets/icons/categories/layer.svg";
import databases from "@/assets/icons/categories/database.svg";
import languages from "@/assets/icons/categories/code-2.svg";

export const categoryInfo: Record<string, { icon: string; label: string }> = {
	languages: { icon: languages, label: "Languages" },
	frontend: { icon: frontend, label: "Frontend" },
	backend: { icon: backend, label: "Backend" },
	tools: { icon: tools, label: "Tools" },
	platforms: { icon: platforms, label: "Platforms" },
	databases: { icon: databases, label: "Databases" },
} as const;

export const techStack = [
	{ name: "JavaScript", icon: js, category: "languages" },
	{ name: "TypeScript", icon: ts, category: "languages" },
	{ name: "React", icon: react, category: "frontend" },
	{ name: "Vite", icon: vite, category: "frontend" },
	{ name: "Tailwind", icon: tailwind, category: "frontend" },
	{ name: "SCSS", icon: scss, category: "frontend" },
	{ name: "Motion", icon: framer, category: "frontend" },
	{ name: "Node.js", icon: node, category: "backend" },
	{ name: "Express", icon: express, category: "backend" },
	{ name: "Prisma", icon: prisma, category: "backend" },
	{ name: "MongoDB", icon: mongodb, category: "databases" },
	{ name: "MySQL", icon: mysql, category: "databases" },
	{ name: "Firebase", icon: firebase, category: "platforms" },
	{ name: "WordPress", icon: wordpress, category: "platforms" },
	{ name: "Cypress", icon: cypress, category: "tools" },
	{ name: "Git", icon: git, category: "tools" },
] as const;
