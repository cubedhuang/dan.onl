import ActiveLink from "./ActiveLink";

export default function Navbar() {
	return (
		<nav className="mb-12 flex flex-wrap items-center gap-x-8 font-extrabold">
			<ActiveLink
				href="/"
				activeClass="border-b-white"
				nonActiveClass="border-b-transparent"
			>
				<a className="mr-auto py-2 border-b-2 hover:border-b-white transition">
					Hi 🏠
				</a>
			</ActiveLink>
			<ActiveLink
				href="/projects"
				activeClass="border-b-white"
				nonActiveClass="border-b-transparent"
			>
				<a className="py-2 border-b-2 hover:border-b-white transition">
					Projects 📙
				</a>
			</ActiveLink>
			<ActiveLink
				href="/anime"
				activeClass="border-b-white"
				nonActiveClass="border-b-transparent"
			>
				<a className="py-2 border-b-2 hover:border-b-white transition">
					Anime ✨
				</a>
			</ActiveLink>
		</nav>
	);
}
