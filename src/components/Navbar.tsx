import ActiveLink from "./ActiveLink";

export default function Navbar() {
	return (
		<nav className="mb-12 flex flex-wrap items-center gap-x-8 font-bold">
			{[
				["/", "Hi 🏠"],
				["/projects", "Projects 📙"],
				["/anime", "Anime ✨"],
				["/music", "Music 🎶"]
			].map(([href, text]) => (
				<ActiveLink
					href={href}
					key={href}
					activeClass="border-b-white"
					nonActiveClass="border-b-transparent"
				>
					<a className="py-2 border-b-2 hover:border-b-white transition">
						{text}
					</a>
				</ActiveLink>
			))}
		</nav>
	);
}
