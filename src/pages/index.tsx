import { HomeIcon } from "@heroicons/react/solid";
import differenceInYears from "date-fns/differenceInYears";
import type { InferGetServerSidePropsType } from "next";
import Image from "next/future/image";

import { Clock } from "../components/Clock";
import Discord from "../components/Discord";
import GenericMeta from "../components/GenericMeta";
import Spotify from "../components/Spotify";
import { socials } from "../data/socials";

const birthday = new Date(2006, 4, 17);

export async function getStaticProps() {
	return {
		props: {
			age: differenceInYears(Date.now(), birthday).toString()
		}
	};
}

export default function Home({
	age
}: InferGetServerSidePropsType<typeof getStaticProps>) {
	return (
		<>
			<GenericMeta
				title="Daniel 👋"
				description="My portfolio and personal website."
			/>

			<h1 className="heading mb-2">
				Daniel! <HomeIcon className="ml-4 h-12 w-12 text-orange-400" />
			</h1>

			<p className="mb-4">
				Hi! I&apos;m Daniel, a{" "}
				<span className="text-blue-400">{age}-year-old developer</span>{" "}
				from <span className="text-rose-400">Atlanta</span>.
			</p>

			<p className="mb-2 flex flex-wrap gap-2 items-center">
				{socials.map(({ name, image, url }) => (
					<a
						key={name}
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						className="w-6 h-6 hover:opacity-80 transition"
					>
						<Image
							src={image}
							alt={name}
							width={64}
							height={64}
							priority={true}
						/>
					</a>
				))}
			</p>

			<p className="mb-4 text-base text-gray-300">
				<Clock />
			</p>

			<hr className="mb-4 bg-slate-800 border-none h-0.5" />

			<Discord />
			<Spotify />
		</>
	);
}
