export interface SocialInfo {
	name: string;
	image: string;
	url: string;
}

export interface ProjectInfo {
	name: string;
	description: React.ReactNode;
	image: string;
	url: string;
}

export interface AnimeInfo {
	name: string;
	description: string;
	image: string;
	url: string;
}

export const socials: SocialInfo[] = [
	{
		name: "GitHub",
		image: "/images/github.png",
		url: "https://github.com/cubedhuang"
	},
	{
		name: "Twitter",
		image: "/images/twitter.png",
		url: "https://twitter.com/cubedhuang"
	},
	{
		name: "Spotify",
		image: "/images/spotify.png",
		url: "https://open.spotify.com/user/22ah5au2dajm7rqn3znkf4tnq?si=95e89d77cb0046f5"
	}
];

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
	}
];

export const skillIcons =
	"https://skillicons.dev/icons?theme=dark&perline=5&i=ts,js,html,css,rust,vscode,tailwind,github,nextjs,react,mongodb,nodejs";

export const anime: AnimeInfo[] = [
	{
		name: "Kaguya-sama: Love is War",
		description: "",
		image: "/images/anime/kaguya.png",
		url: "https://anilist.co/anime/101921/Kaguyasama-wa-Kokurasetai-Tensaitachi-no-Renai-Zunousen/"
	},
	{
		name: "Mairimashita! Iruma-kun",
		description: "Demon school!",
		image: "/images/anime/demon.jpg",
		url: "https://anilist.co/anime/107693/Mairimashita-Irumakun/"
	},
	{
		name: "Tokyo Ghoul",
		description: "Cannibalism.",
		image: "/images/anime/tokyo.jpg",
		url: "https://anilist.co/anime/20605/Tokyo-Ghoul/"
	},
	{
		name: "Jujutsu Kaisen",
		description: "",
		image: "/images/anime/jujutsu.jpg",
		url: "https://anilist.co/anime/113415/Jujutsu-Kaisen/"
	},
	{
		name: "Komi Can't Communicate",
		description: "",
		image: "/images/anime/komi.jpg",
		url: "https://anilist.co/anime/133965/Komisan-wa-Komyushou-desu/"
	},
	{
		name: "Saiki K.",
		description: "The world's unhappiest man.",
		image: "/images/anime/saiki.jpg",
		url: "https://anilist.co/anime/21804/Saiki-Kusuo-no-nan/"
	},
	{
		name: "Kakegurui",
		description: "Gambling addict.",
		image: "/images/anime/yumeko.jpg",
		url: "https://anilist.co/anime/98314/Kakegurui/"
	},
	{
		name: "Neon Genesis Evangelion",
		description: "Mental illness.",
		image: "/images/anime/nge.jpg",
		url: "https://anilist.co/anime/30/Shin-Seiki-Evangelion/"
	},
	{
		name: "Assassination Classroom",
		description: "Koro-sensei!",
		image: "/images/anime/classroom.jpg",
		url: "https://anilist.co/anime/20755/Ansatsu-Kyoushitsu"
	},
	{
		name: "Hunter x Hunter",
		description: "Psychological horror.",
		image: "/images/anime/hxh.jpg",
		url: "https://anilist.co/anime/11061/HUNTERHUNTER-2011/"
	},
	{
		name: "Aggretsuko",
		description: "Corporate slave.",
		image: "/images/anime/retsuko.jpg",
		url: "https://anilist.co/anime/101571/Aggressive-Retsuko/"
	},
	{
		name: "Brand New Animal",
		description: "Animal racism.",
		image: "/images/anime/bna.jpg",
		url: "https://anilist.co/anime/110354/BNA/"
	},
	{
		name: "Rascal Does Not Dream",
		description: "Puberty syndrome?",
		image: "/images/anime/mai.jpg",
		url: "https://anilist.co/anime/101291/Rascal-Does-Not-Dream-of-Bunny-Girl-Senpai/"
	},
	{
		name: "Beastars",
		description: "Carnivores.",
		image: "/images/anime/beastars.png",
		url: "https://anilist.co/anime/107660/BEASTARS/"
	}
];
