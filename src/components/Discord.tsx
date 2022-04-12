import Image from "next/image";
import { LanyardData, useLanyard } from "react-use-lanyard";

const USER_ID = "299707523370319883";

export default function Discord() {
	const { status: lanyard } = useLanyard({
		userId: USER_ID,
		socket: true
	});

	if (!lanyard) return null;

	return (
		<>
			<div className="mb-4 mr-4 w-max flex gap-4 items-center px-4 py-2 bg-slate-900 text-base leading-snug rounded-lg">
				{lanyard?.discord_user.avatar ? (
					<div className="w-12 h-12">
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
							className="w-20 h-20 rounded-full"
						/>
					</div>
				) : null}
				<div>
					<p>
						{lanyard?.discord_user.username}
						<span className="opacity-80">
							#{lanyard?.discord_user.discriminator}
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
			</div>
			<div className="w-max flex gap-4 items-center px-4 py-2 bg-green-900 text-base leading-snug rounded-lg">
				<div className="w-12 h-12">
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
								<b>{lanyard?.spotify?.song}</b> by{" "}
								{lanyard?.spotify?.artist}
							</>
						) : (
							"Not Listening to Anything"
						)}
					</p>
					<p className="opacity-80">
						{lanyard?.listening_to_spotify
							? lanyard?.spotify?.album
							: null}
					</p>
					<p className="opacity-80">
						{lanyard?.listening_to_spotify ? "Listening on " : null}
						Spotify
					</p>
				</div>
			</div>
		</>
	);
}

function getStatusString(lanyard: LanyardData | undefined) {
	if (!lanyard) return "";

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
	if (!lanyard) return "offline";

	const strMap: Record<string, string> = {
		online: "text-emerald-500",
		idle: "text-amber-400",
		dnd: "text-red-500"
	};

	const str = strMap[lanyard.discord_status];

	if (!str) return "text-gray-400";

	return str;
}
