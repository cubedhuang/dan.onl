import { CollectionIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import Image from "next/image";

import GenericMeta from "../components/GenericMeta";
import { projects } from "../data/projects";

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

			{projects.map(({ name, description, image, url }) => (
				<div
					key={name}
					className="mb-4 flex flex-col rounded-lg bg-slate-900"
				>
					<div className="relative h-24">
						<Image
							src={image}
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
								href={url}
								target="_blank"
								rel="noreferrer noopener"
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
