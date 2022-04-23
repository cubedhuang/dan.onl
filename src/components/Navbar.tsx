import {
	CollectionIcon,
	HomeIcon,
	MusicNoteIcon,
	SparklesIcon
} from "@heroicons/react/solid";

import ActiveLink from "./ActiveLink";

interface PageData {
	href: string;
	title: string;
	Icon: (props: { className?: string }) => JSX.Element;
	color: string;
}

const pages: PageData[] = [
	{
		href: "/",
		title: "Home",
		Icon: HomeIcon,
		color: "text-orange-400"
	},
	{
		href: "/projects",
		title: "Projects",
		Icon: CollectionIcon,
		color: "text-blue-300"
	},
	{
		href: "/anime",
		title: "Anime",
		Icon: SparklesIcon,
		color: "text-yellow-300"
	},
	{
		href: "/music",
		title: "Music",
		Icon: MusicNoteIcon,
		color: "text-violet-400"
	}
];

export default function Navbar() {
	return (
		<nav className="mb-12 flex flex-wrap items-center gap-x-8 font-bold">
			{pages.map(({ href, title, Icon, color }) => (
				<ActiveLink
					href={href}
					key={href}
					activeClass="border-b-white"
					nonActiveClass="border-b-transparent"
				>
					<a className="py-2 border-b-2 flex items-center hover:border-b-white transition">
						{title}
						<Icon className={`w-5 h-5 ml-2 ${color}`} />
					</a>
				</ActiveLink>
			))}
		</nav>
	);
}
