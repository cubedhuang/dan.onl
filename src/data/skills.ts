export interface SkillInfo {
	name: string;
	icon: string;
	href: string;
	bg?: string;
}

export const skills: SkillInfo[] = [
	{
		name: "TypeScript",
		icon: "ts",
		href: "https://www.typescriptlang.org/",
		bg: "#3279cc"
	},
	{
		name: "JavaScript",
		icon: "js",
		href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		bg: "#ecdb4f"
	},
	{
		name: "HTML",
		icon: "html",
		href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
		bg: "#d55125"
	},
	{
		name: "CSS",
		icon: "css",
		href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
		bg: "#3076bd"
	},
	{
		name: "Rust",
		icon: "rust",
		href: "https://www.rust-lang.org/",
		bg: "#d73c22"
	},
	{
		name: "MongoDB",
		icon: "mongodb",
		href: "https://www.mongodb.com/",
		bg: "#0f3430"
	},
	{
		name: "VS Code",
		icon: "vscode",
		href: "https://code.visualstudio.com/"
	},
	{
		name: "Tailwind CSS",
		icon: "tailwind",
		href: "https://tailwindcss.com/"
	},
	{
		name: "GitHub",
		icon: "github",
		href: "https://github.com/"
	},
	{
		name: "Next.js",
		icon: "nextjs",
		href: "https://nextjs.org/"
	},
	{
		name: "React",
		icon: "react",
		href: "https://reactjs.org/"
	},
	{
		name: "Node.js",
		icon: "nodejs",
		href: "https://nodejs.org/en/"
	}
];
