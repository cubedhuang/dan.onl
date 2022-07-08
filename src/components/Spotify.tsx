import Image from "next/image";
import useSWR from "swr";

import type {
	NowPlayingResponseError,
	NowPlayingResponseSuccess
} from "../pages/api/nowPlaying";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Spotify() {
	const { data } = useSWR<NowPlayingResponseSuccess, NowPlayingResponseError>(
		"/api/nowPlaying",
		fetcher
	);

	// Get the current track, ignoring episodes because those don't have the same info
	// and I don't wanna deal with that.
	const track = data?.item && "album" in data.item ? data.item : null;

	return (
		<div className="flex gap-2 items-center text-base leading-snug">
			<div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
				<Image
					src={track?.album.images[0]?.url ?? "/images/emptysong.jpg"}
					alt="Spotify Album Art"
					width={256}
					height={256}
					priority={true}
					className="rounded-lg"
				/>
			</div>
			<div>
				<p>
					{track ? (
						<>
							<a
								href={track.external_urls.spotify}
								target="_blank"
								rel="noopener noreferrer"
								className="font-bold border-b border-[#fff4] transition hover:border-white"
							>
								{track.name}
							</a>{" "}
							by{" "}
							{track.artists.map((artist, i) => (
								<span key={track.id + artist.id}>
									<a
										href={artist.external_urls.spotify}
										target="_blank"
										rel="noopener noreferrer"
										className="border-b border-[#fff4] transition hover:border-white"
									>
										{artist.name}
									</a>
									{i < track.artists.length - 1 ? ", " : null}
								</span>
							))}
						</>
					) : (
						"Not Listening to Anything"
					)}
				</p>
				<p className="opacity-80">
					{track ? (
						<>
							on{" "}
							<a
								href={track.album.external_urls.spotify}
								target="_blank"
								rel="noopener noreferrer"
								className="border-b border-[#fff4] transition hover:border-white"
							>
								{track.album.name}
							</a>
						</>
					) : null}
				</p>
				<p className="opacity-80 flex items-center gap-1">
					<span className="w-4 h-4">
						<Image
							src="/images/spotify.png"
							alt=""
							width={48}
							height={48}
							className="w-4 h-4"
						/>
					</span>
					{track ? "Listening on " : null}
					Spotify
				</p>
			</div>
		</div>
	);
}
