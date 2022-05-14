import Image from "next/image";
import { useEffect, useState } from "react";
import { LanyardData, useLanyard } from "react-use-lanyard";

import type { TrackResponseSuccess } from "../pages/api/track";

const USER_ID = "299707523370319883";

export default function Discord() {
	const { data } = useLanyard({
		userId: USER_ID
	});
	const lanyard = data?.data;
	const [track, setTrack] = useState<TrackResponseSuccess | null>(null);

	useEffect(() => {
		if (!lanyard?.spotify) return;

		fetch(`/api/track?id=${lanyard.spotify.track_id}`, {
			cache: "no-cache"
		})
			.then(res => res.json())
			.then(track => {
				setTrack(track);
			})
			.catch(console.error);
	}, [lanyard]);

	return (
		<>
			<hr className="mb-4 bg-slate-800 border-none h-0.5" />
			<div className="mb-2 flex gap-2 items-center text-base leading-snug rounded-lg">
				{lanyard?.discord_user.avatar ? (
					<div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
						<Image
							src={`https://cdn.discordapp.com/avatars/${USER_ID}/${
								lanyard?.discord_user.avatar
							}.${
								lanyard?.discord_user.avatar.startsWith("a_")
									? "gif"
									: "webp"
							}?size=256`}
							alt="Discord Avatar"
							width={256}
							height={256}
							priority={true}
							className="rounded-full"
						/>
					</div>
				) : (
					<div className="w-16 h-16 md:w-20 md:h-20 bg-gray-800 rounded-full"></div>
				)}
				{lanyard ? (
					<div>
						<p>
							{lanyard?.discord_user.username}
							<span className="opacity-80">
								#{lanyard?.discord_user.discriminator ?? "0000"}
							</span>
						</p>
						<p>
							{lanyard?.activities[0]?.type === 4
								? lanyard?.activities[0]?.state
								: null}
						</p>
						<p className={getStatusClass(lanyard)}>
							{getStatusString(lanyard)}
						</p>
					</div>
				) : (
					<div className="w-32 opacity-80">Loading...</div>
				)}
			</div>
			<div className="flex gap-2 items-center text-base leading-snug rounded-lg">
				<div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
					<Image
						src={
							lanyard?.spotify?.album_art_url ??
							"/images/emptysong.jpg"
						}
						alt="Spotify Album Art"
						width={256}
						height={256}
						priority={true}
						className="rounded-lg"
					/>
				</div>
				<div>
					<p>
						{lanyard?.listening_to_spotify ? (
							<>
								<a
									href={`https://open.spotify.com/track/${lanyard?.spotify?.track_id}`}
									target="_blank"
									rel="noopener noreferrer"
									className="font-bold border-b border-[#fff4] transition hover:border-white"
								>
									{lanyard?.spotify?.song}
								</a>{" "}
								by{" "}
								{track
									? track.artists.map((artist, i) => (
											<span key={track.id + artist.id}>
												<a
													href={
														artist.external_urls
															.spotify
													}
													target="_blank"
													rel="noopener noreferrer"
													className="border-b border-[#fff4] transition hover:border-white"
												>
													{artist.name}
												</a>
												{i < track.artists.length - 1
													? ", "
													: null}
											</span>
									  ))
									: lanyard?.spotify?.artist}
							</>
						) : (
							"Not Listening to Anything"
						)}
					</p>
					<p className="opacity-80">
						{lanyard?.spotify?.album ? (
							track ? (
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
							) : (
								<>on {lanyard.spotify.album}</>
							)
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
						{lanyard?.listening_to_spotify ? "Listening on " : null}
						Spotify
					</p>
				</div>
			</div>
		</>
	);
}

function getStatusString(lanyard: LanyardData | undefined) {
	if (!lanyard) return "Loading...";

	const strMap: Record<string, string> = {
		online: "Online",
		idle: "Idle",
		dnd: "Do Not Disturb"
	};

	const str = strMap[lanyard.discord_status];

	if (!str) return "Offline";

	return `${str} on ${
		lanyard.active_on_discord_mobile ? "Mobile" : "Desktop"
	}`;
}

function getStatusClass(lanyard: LanyardData | undefined) {
	if (!lanyard) return "text-gray-400";

	const strMap: Record<string, string> = {
		online: "text-emerald-500",
		idle: "text-amber-400",
		dnd: "text-rose-400"
	};

	const str = strMap[lanyard.discord_status];

	if (!str) return "text-gray-400";

	return str;
}
