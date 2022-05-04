import { CubeIcon } from "@heroicons/react/solid";
import { InferGetStaticPropsType } from "next";

import GenericMeta from "../components/GenericMeta";
import { skillIcons } from "../data";

export async function getStaticProps() {
	const svg = await fetch(skillIcons).then(res => res.text());

	return {
		props: {
			svg
		}
	};
}

export default function Skills({
	svg
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
				Some programming skills I&apos;ve picked up over the years, and
				tools I use often.
			</p>

			<div
				dangerouslySetInnerHTML={{ __html: svg }}
				className="w-full overflow-x-scroll"
			/>
		</>
	);
}
