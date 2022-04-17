import Image from "next/image";

interface TrackListProps {
	tracks: SpotifyApi.TrackObjectFull[];
	priority?: boolean;
}

export function TrackList({ tracks, priority = false }: TrackListProps) {
	return (
		<div className="relative w-screen ml-[calc(-50vw)] left-1/2 mb-12 before:fixed before:inset-0 before:bg-[linear-gradient(to_right,#0000_0%,#0000_80%,#000_100%)] lg:before:bg-[linear-gradient(to_right,#000_0%,#0000_25%,#0000_75%,#000_100%)] before:z-10">
			<div className="lg:px-[calc(50vw-400px)] md:px-[calc(50vw-350px)] px-8 grid grid-rows-2 grid-cols-[repeat(12,calc(9rem))] md:grid-cols-[repeat(12,calc(12rem))] lg:grid-cols-[repeat(12,calc(14rem))] grid-flow-col gap-4 overflow-scroll no-scrollbar">
				{tracks.map((track, i) => (
					<a
						href={track.external_urls.spotify}
						key={track.id}
						className="group relative rounded-lg before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-0 before:transition before:duration-300 hover:before:opacity-50"
					>
						<div className="w-full rounded-lg overflow-hidden">
							<Image
								src={track.album.images[0].url}
								alt={track.name}
								width={track.album.images[0].width}
								height={track.album.images[0].height}
								priority={priority}
								layout="responsive"
								className="rounded-lg transition duration-300 group-hover:scale-[1.02]"
							/>
						</div>
						<div className="z-20 absolute inset-4 flex flex-col justify-end transition duration-300 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100">
							<p className="font-bold text-xl md:text-2xl overflow-ellipsis leading-none md:leading-none mb-1">
								{track.name}
							</p>
							{track.artists.map(artist => (
								<p
									key={artist.id}
									className="text-sm md:text-base leading-tight md:leading-tight opacity-80"
								>
									{artist.name}
								</p>
							))}
						</div>
					</a>
				))}
			</div>
		</div>
	);
}
