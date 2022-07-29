import { CubeIcon } from "@heroicons/react/solid";
import Image from "next/future/image";

import GenericMeta from "../components/GenericMeta";
import { skills } from "../data/skills";

const skillIconsEndpoint = "https://skillicons.dev/icons?theme=dark&i=";

export default function Skills() {
	return (
		<>
			<GenericMeta
				title="Skills 💻"
				description="Skills I've picked up over the years."
			/>

			<h1 className="heading mb-2">
				Skills <CubeIcon className="ml-4 h-12 w-12 text-rose-400" />
			</h1>

			<p className="mb-4">
				Skills and technologies I use to build things.
			</p>

			<div className="fade-in grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-4">
				{skills.map(({ name, icon, href, bg }) => (
					<a
						key={icon}
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						className="group overflow-hidden isolate relative grid place-items-center rounded-lg aspect-square before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-0 before:transition before:duration-300 hover:before:opacity-50"
						style={{
							backgroundColor: bg ?? "#252938"
						}}
					>
						<Image
							src={`${skillIconsEndpoint}${icon}`}
							alt={name}
							width={256}
							height={256}
							className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition duration-300 group-hover:scale-[1.02]"
							priority={true}
						/>
						<div className="z-10 absolute inset-2 flex flex-col justify-end transition duration-300 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100">
							<h2 className="text-base font-bold leading-tight">
								{name}
							</h2>
						</div>
					</a>
				))}
			</div>
		</>
	);
}
