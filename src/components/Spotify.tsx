import { PauseIcon, PlayIcon } from "@heroicons/react/solid";
import Image from "next/future/image";
import { useEffect, useState } from "preact/hooks";
import useSWR from "swr";

import type {
	NowPlayingResponseError,
	NowPlayingResponseSuccess
} from "../pages/api/nowPlaying";

const formatDuration = (ms: number) => {
	const seconds = Math.floor((ms / 1000) % 60)
		.toString()
		.padStart(2, "0");
	const minutes = Math.floor(ms / 1000 / 60);

	return `${minutes}:${seconds}`;
};

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Spotify() {
	const { data } = useSWR<NowPlayingResponseSuccess, NowPlayingResponseError>(
		"/api/nowPlaying",
		fetcher,
		{ refreshInterval: 5000 }
	);

	const [time, setTime] = useState(0);

	useEffect(() => {
		if (!data?.progessMs || !data.track) return;

		const started = Date.now();

		const interval = setInterval(() => {
			setTime(
				data.isPaused
					? data.progessMs
					: Math.min(
							data.progessMs! + Date.now() - started,
							data?.track?.duration_ms!
					  )
			);
		}, 100);

		return () => clearInterval(interval);
	}, [data]);

	return (
		<div className="flex gap-2 items-center text-base leading-snug">
			<div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
				<Image
					src={
						data?.track?.album.images[0]?.url ??
						"/images/emptysong.jpg"
					}
					alt="Spotify Album Art"
					width={256}
					height={256}
					priority={true}
					className="w-16 h-16 md:w-20 md:h-20 object-cover object-center rounded-lg"
				/>
			</div>
			<div className="basis-full">
				<p>
					{data?.track ? (
						<>
							<a
								href={data.track.external_urls.spotify}
								target="_blank"
								rel="noopener noreferrer"
								className="font-bold border-b border-[#fff4] transition hover:border-white"
							>
								{data.track.name}
							</a>{" "}
							by{" "}
							{data.track.artists.map((artist, i) => (
								<span key={data.track?.id + artist.id}>
									<a
										href={artist.external_urls.spotify}
										target="_blank"
										rel="noopener noreferrer"
										className="border-b border-[#fff4] transition hover:border-white"
									>
										{artist.name}
									</a>
									{i < data.track?.artists.length! - 1
										? ", "
										: null}
								</span>
							))}
						</>
					) : (
						"Not Listening to Anything"
					)}
				</p>
				<p className="opacity-80">
					{data?.track ? (
						<>
							on{" "}
							<a
								href={data.track.album.external_urls.spotify}
								target="_blank"
								rel="noopener noreferrer"
								className="border-b border-[#fff4] transition hover:border-white"
							>
								{data.track.album.name}
							</a>
						</>
					) : null}
				</p>
				<p className="opacity-80 flex items-center gap-1">
					{data?.isPlayingNow && data.track ? (
						<span className="block w-full max-w-sm mt-2">
							<span className="block h-0.5 rounded overflow-hidden bg-[#5e5e5e]">
								<span
									className="block h-full bg-white"
									style={{
										width: `${
											(time! / data.track.duration_ms) *
											100
										}%`
									}}
								/>
							</span>
							<span className="flex items-center text-sm">
								<span className="basis-full">
									{formatDuration(time!)}
								</span>
								<span>
									{data?.isPaused ? (
										<PlayIcon className="text-white h-4 w-4" />
									) : (
										<PauseIcon className="text-white h-4 w-4" />
									)}
								</span>
								<span className="basis-full text-right">
									{formatDuration(data.track.duration_ms)}
								</span>
							</span>
						</span>
					) : (
						<>
							<span className="w-4 h-4">
								<Image
									src="/images/spotify.png"
									alt=""
									width={48}
									height={48}
									className="w-4 h-4"
								/>
							</span>
							{data?.track ? <>Last Played on </> : null}
							Spotify
						</>
					)}
				</p>
			</div>
		</div>
	);
}
