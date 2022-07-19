import {
	CollectionIcon,
	CubeIcon,
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
		color: "text-blue-400"
	},
	{
		href: "/skills",
		title: "Skills",
		Icon: CubeIcon,
		color: "text-rose-400"
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
					activeClass="after:scale-x-100"
					nonActiveClass="after:scale-x-0 after:opacity-0 hover:after:scale-x-50 hover:after:opacity-100"
				>
					<a className="py-2 flex items-center after:transition relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:rounded">
						{title}
						<Icon className={`w-5 h-5 ml-2 ${color}`} />
					</a>
				</ActiveLink>
			))}
		</nav>
	);
}
