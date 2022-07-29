import Image from "next/future/image";

interface TrackListProps {
	tracks?: SpotifyApi.TrackObjectFull[];
	priority?: boolean;
}

export function TrackList({ tracks, priority = false }: TrackListProps) {
	return (
		<div className="relative w-screen ml-[calc(-50vw)] left-1/2 mb-12 [mask-image:linear-gradient(to_right,#000_0%,#000_75%,#0000_100%)] lg:[mask-image:linear-gradient(to_right,#0000_0%,#000_25%,#000_75%,#0000_100%)] before:z-10">
			<div className="lg:px-[calc(50vw-400px)] md:px-[calc(50vw-350px)] px-8 lg:scroll-pl-[calc(50vw-400px)] md:scroll-pl-[calc(50vw-350px)] scroll-pl-8 grid grid-rows-2 grid-cols-[repeat(12,9rem)] md:grid-cols-[repeat(12,12rem)] lg:grid-cols-[repeat(12,14rem)] grid-flow-col gap-4 overflow-scroll no-scrollbar snap-x snap-mandatory">
				{tracks
					? tracks.map(track => (
							<Track
								key={track.id}
								track={track}
								priority={priority}
							/>
					  ))
					: [...new Array(24)].map((_, i) => (
							<div
								key={i}
								className="rounded-lg overflow-hidden animate-pulse"
							>
								<div className="w-full h-0 pt-[100%] bg-slate-900" />
							</div>
					  ))}
			</div>
		</div>
	);
}

interface TrackProps {
	track: SpotifyApi.TrackObjectFull;
	priority: boolean;
}

function Track({ track, priority }: TrackProps) {
	return (
		<a
			href={track.external_urls.spotify}
			target="_blank"
			rel="noopener noreferrer"
			className="group relative snap-start snap-always rounded-lg before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-0 before:transition before:duration-300 hover:before:opacity-50"
		>
			<div className="bg-slate-900 rounded-lg overflow-hidden">
				<Image
					src={track.album.images[0].url}
					alt={track.name}
					width={512}
					height={512}
					priority={priority}
					className="rounded-lg transition duration-300 group-hover:scale-[1.02]"
				/>
			</div>
			<div className="z-20 absolute inset-2 md:inset-4 flex flex-col justify-end transition duration-300 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100">
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
	);
}
