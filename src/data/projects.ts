export interface ProjectInfo {
	name: string;
	description: React.ReactNode;
	image: string;
	url: string;
}

export const projects: ProjectInfo[] = [
	{
		name: "Boids: Flocking Simulation",
		description:
			"A 2D simulation of flocking behavior with thousands of boids.",
		image: "/images/projects/boids.png",
		url: "https://boids.cubedhuang.com"
	},
	{
		name: "Slate – Discord Bot",
		description:
			"A Discord bot with loads of features like YouTube Together, logging ghost pings, playing music, and more.",
		image: "/images/projects/slate.jpg",
		url: "https://slate.dan.onl"
	},
	{
		name: "Discord Embed Creator",
		description:
			"A tool that lets you generate code for embeds in discord.js or discord.py easily.",
		image: "/images/projects/embed.png",
		url: "https://embed.dan.onl"
	},
	{
		name: "College Board Pseudocode Interpreter",
		description:
			"An interpreter for the College Board specified pseudocode language for the Computer Science Principles AP Exam.",
		image: "/images/projects/board.png",
		url: "https://board.dan.onl"
	},
	{
		name: "CubeDHuang: Web Experiments",
		description:
			"A collection of various random web experiments I've made over the years.",
		image: "/images/projects/cubedhuang.webp",
		url: "https://cubedhuang.com"
	},
	{
		name: "Wordle Bot",
		description:
			"A simple bot that lets you play unlimited Wordle games in your Discord servers. It uses images to accurately simulate the real Wordle website.",
		image: "/images/projects/wordle.jpg",
		url: "https://github.com/cubedhuang/wordle-bot"
	}
];
