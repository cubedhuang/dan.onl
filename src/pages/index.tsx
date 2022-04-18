import differenceInYears from "date-fns/differenceInYears";
import { InferGetServerSidePropsType } from "next";
import Image from "next/image";

import { Clock } from "../components/Clock";
import Discord from "../components/Discord";
import GenericMeta from "../components/GenericMeta";
import { socials } from "../data";

const birthday = new Date(2006, 4, 17);

export async function getServerSideProps() {
	return {
		props: {
			time: Date.now(),
			age: differenceInYears(birthday, Date.now()).toString()
		}
	};
}

export default function Home({
	time,
	age
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
			<GenericMeta
				title="Daniel 👋"
				description="My portfolio and personal website."
			/>

			<h1 className="heading mb-2">Daniel 👋!</h1>

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
				Atlanta &middot;{" "}
				<Clock time={time} />
			</p>

			<Discord />
		</>
	);
}
