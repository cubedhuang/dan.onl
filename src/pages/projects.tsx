import Image from "next/image";

import GenericMeta from "../components/GenericMeta";
import { projects } from "../data";

export default function Projects() {
	return (
		<>
			<GenericMeta
				title="Projects 📙"
				description="Some of my projects."
			/>

			<h1 className="heading mb-8">Projects 📦</h1>

			{projects.map(({ name, description, image: bg, url: href }) => (
				<div
					key={name}
					className="mb-4 flex flex-col rounded-lg bg-slate-900"
				>
					<div className="relative h-24">
						<Image
							src={bg}
							alt=""
							layout="fill"
							objectFit="cover"
							priority={true}
							className="rounded-t-lg transition duration-500 group-hover:scale-105"
						/>
					</div>
					<div className="p-4">
						<div className="flex items-start">
							<div>
								<h2 className="mb-2 font-heading font-extrabold text-2xl">
									{name}
								</h2>
								<p className="text-lg">{description}</p>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer noopener"
								className="ml-auto transition hover:opacity-80"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="#fff"
								>
									<path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z" />
									<path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
