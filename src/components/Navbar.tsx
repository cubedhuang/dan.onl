import {
	CollectionIcon,
	CubeIcon,
	HomeIcon,
	MusicNoteIcon,
	SparklesIcon,
	ControllerIcon
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
		color: "text-blue-400"
	},
	{
		href: "/skills",
		title: "Skills",
		Icon: CubeIcon,
		color: "text-rose-400"
	},
	{
		href: "/tv_shows",
		title: "TV Shows",
		Icon: HomeIcon,
		color: "text-yellow-300"
	},
	{
		href: "/games",
		title: "Games",
		Icon: SparklesIcon,
		color: "text-green-400"
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
					activeClass="after:inset-x-0"
					nonActiveClass="after:opacity-0 after:inset-x-1/2 hover:after:opacity-100 hover:after:inset-x-1/4"
				>
					<a className="py-2 flex items-center relative after:absolute after:bottom-0 after:h-0.5 after:bg-white after:rounded after:transition-all">
						{title}
						<Icon className={`w-5 h-5 ml-2 ${color}`} />
					</a>
				</ActiveLink>
			))}
		</nav>
	);
}
