import { CollectionIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import Image from "next/future/image";

import GenericMeta from "../components/GenericMeta";
import { projects } from "../data/projects";

const skillIconsEndpoint = "https://skillicons.dev/icons?theme=dark&i=";

export default function Projects() {
	return (
		<>
			<GenericMeta
				title="Projects 📙"
				description="Some of my projects."
			/>

			<h1 className="heading mb-8">
				Projects{" "}
				<CollectionIcon className="ml-4 h-12 w-12 text-blue-400" />
			</h1>

			{projects.map(({ name, description, image, url, stack }) => (
				<div
					key={name}
					className="mb-4 flex flex-col rounded-lg bg-slate-900"
				>
					<div className="relative h-24">
						<Image
							src={image}
							alt=""
							width={1200}
							height={800}
							priority={true}
							className="absolute top-0 left-0 w-full h-full object-cover object-center rounded-t-lg transition duration-500 group-hover:scale-105"
						/>

						<div className="flex absolute bottom-2 right-2 gap-2">
							{stack.map(({ name, icon, src }) => (
								<div
									key={name}
									className="w-6 h-6 md:w-10 md:h-10 rounded-[25%] bg-slate-900 relative group cursor-pointer flex justify-center"
								>
									<Image
										key={name}
										src={
											icon !== undefined
												? `${skillIconsEndpoint}${icon}`
												: src
										}
										width={120}
										height={120}
										alt={name}
										className="w-full h-full rounded-[25%]"
										quality={100}
									/>
									<div className="absolute mb-1 px-2 py-1 text-white text-sm bg-slate-900 opacity-0 group-hover:opacity-100 transition pointer-events-none bottom-full rounded-lg w-max">
										{name}
									</div>
								</div>
							))}
						</div>
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
								href={url}
								target="_blank"
								rel="noreferrer noopener"
								title={`Visit ${name}`}
								className="ml-auto transition hover:opacity-80"
							>
								<ExternalLinkIcon className="w-6 h-6" />
							</a>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
