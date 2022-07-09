import { MusicNoteIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "preact/hooks";

import GenericMeta from "../components/GenericMeta";
import { TrackList } from "../components/TrackList";
import type { TopMusicResponseSuccess } from "./api/topMusic";

export default function Projects() {
	const [topMusic, setTopMusic] = useState<TopMusicResponseSuccess | null>(
		null
	);

	useEffect(() => {
		fetch(`/api/topMusic`)
			.then(res => res.json())
			.then(info => {
				if (info.error) return;
				setTopMusic(info);
			})
			.catch(console.error);
	}, []);

	return (
		<>
			<GenericMeta
				title="Music 🎶"
				description="My top music on Spotify."
			/>

			<h1 className="heading mb-2">
				Music{" "}
				<MusicNoteIcon className="ml-4 h-12 w-12 text-violet-400" />
			</h1>

			<p className="text-lg mb-4">My top tracks on Spotify.</p>

			<h2 className="font-bold text-3xl mb-4">Past Month</h2>
			<TrackList tracks={topMusic?.short.items} priority={true} />

			<h2 className="font-bold text-3xl mb-4">Past 6 Months</h2>
			<TrackList tracks={topMusic?.medium.items} />

			<h2 className="font-bold text-3xl mb-4">All Time</h2>
			<TrackList tracks={topMusic?.long.items} />
		</>
	);
}
