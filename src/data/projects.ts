export interface StackIconItem {
	name: string;
	icon: string;
	src?: never;
}

export interface StackCustomItem {
	name: string;
	icon?: never;
	src: string;
}

export interface ProjectInfo {
	name: string;
	description: React.ReactNode;
	image: string;
	url: string;
	stack: (StackIconItem | StackCustomItem)[];
}

export const projects: ProjectInfo[] = [
	{
		name: "nimi.li",
		description:
			"Online, interactive toki pona dictionary which uses public data about popular words and compounds.",
		image: "/images/projects/sona.png",
		url: "https://nimi.li",
		stack: [
			{
				name: "TailwindCSS",
				icon: "tailwindcss"
			},
			{
				name: "SvelteKit",
				icon: "svelte"
			},
			{
				name: "TypeScript",
				icon: "ts"
			}
		]
	},
	{
		name: "Boids: Flocking Simulation",
		description:
			"A 2D simulation of flocking behavior with thousands of boids.",
		image: "/images/projects/boids.png",
		url: "https://boids.cubedhuang.com",
		stack: [
			{
				name: "PixiJS",
				src: "/images/icons/pixi.png"
			},
			{
				name: "JavaScript",
				icon: "js"
			},
			{
				name: "HTML",
				icon: "html"
			},
			{
				name: "CSS",
				icon: "css"
			}
		]
	},
	{
		name: "Slate – Discord Bot",
		description:
			"A Discord bot with loads of features like YouTube Together, logging ghost pings, playing music, and more.",
		image: "/images/projects/slate.jpg",
		url: "https://slate.dan.onl",
		stack: [
			{
				name: "Linux Systems",
				icon: "linux"
			},
			{
				name: "NodeJS",
				icon: "nodejs"
			},
			{
				name: "discord.js",
				src: "/images/icons/djs.webp"
			},
			{
				name: "Docker",
				icon: "docker"
			},
			{
				name: "MongoDB",
				icon: "mongodb"
			},
			{
				name: "Prisma",
				icon: "prisma"
			},
			{
				name: "TypeScript",
				icon: "ts"
			}
		]
	},
	{
		name: "Discord Embed Creator",
		description:
			"A tool that lets you generate code for embeds in discord.js or discord.py easily.",
		image: "/images/projects/embed.png",
		url: "https://embed.dan.onl",
		stack: [
			{
				name: "Next.js",
				icon: "nextjs"
			},
			{
				name: "React",
				icon: "react"
			},
			{
				name: "TailwindCSS",
				icon: "tailwindcss"
			},
			{
				name: "Redis",
				icon: "redis"
			},
			{
				name: "MD Parsers",
				icon: "markdown"
			},
			{
				name: "TypeScript",
				icon: "ts"
			},
			{
				name: "SCSS",
				icon: "sass"
			}
		]
	},
	{
		name: "Pseudocode Interpreter",
		description:
			"An interpreter for the College Board specified pseudocode language for the Computer Science Principles AP Exam.",
		image: "/images/projects/board.png",
		url: "https://board.dan.onl",
		stack: [
			{
				name: "Next.js",
				icon: "nextjs"
			},
			{
				name: "React",
				icon: "react"
			},
			{
				name: "TypeScript",
				icon: "ts"
			},
			{
				name: "HTML",
				icon: "html"
			},
			{
				name: "CSS",
				icon: "css"
			}
		]
	},
	{
		name: "CubeDHuang: Web Experiments",
		description:
			"A collection of various random web experiments I've made over the years.",
		image: "/images/projects/cubedhuang.webp",
		url: "https://cubedhuang.com",
		stack: [
			{
				name: "Vue.js",
				icon: "vue"
			},
			{
				name: "JavaScript",
				icon: "js"
			},
			{
				name: "HTML",
				icon: "html"
			},
			{
				name: "CSS",
				icon: "css"
			}
		]
	},
	{
		name: "Wordle Bot",
		description:
			"A simple bot that lets you play unlimited Wordle games in your Discord servers. It uses images to accurately simulate the real Wordle website.",
		image: "/images/projects/wordle.jpg",
		url: "https://github.com/cubedhuang/wordle-bot",
		stack: [
			{
				name: "discord.js",
				src: "/images/icons/djs.webp"
			},
			{
				name: "PlanetScale",
				src: "/images/icons/pscale.jpg"
			},
			{
				name: "Prisma",
				icon: "prisma"
			},
			{
				name: "TypeScript",
				icon: "ts"
			}
		]
	}
];
