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
		<div className="flex flex-wrap gap-4 mb-4">
			<div className="flex gap-4 items-center p-4 bg-slate-900 rounded-lg">
				{lanyard?.discord_user.avatar && (
					<Image
						src={`https://cdn.discordapp.com/avatars/${USER_ID}/${
							lanyard?.discord_user.avatar
						}.${
							lanyard?.discord_user.avatar.startsWith("a_")
								? "gif"
								: "webp"
						}?size=256`}
						alt="Discord Avatar"
						width={80}
						height={80}
						priority={true}
						className="rounded-full"
					/>
				)}
				<div>
					<div>
						{lanyard?.discord_user.username}
						<span className="opacity-70">
							#{lanyard?.discord_user.discriminator}
						</span>
					</div>
					<p className="text-base">
						{lanyard?.activities[0]?.type === 4
							? lanyard?.activities[0]?.state
							: null}
					</p>
					<p className={`text-base ${getStatusClass(lanyard)}`}>
						{getStatusString(lanyard)}
					</p>
				</div>
			</div>
			<div className="flex gap-4 items-center p-4 bg-green-900 rounded-lg">
				<Image
					src={
						lanyard?.spotify?.album_art_url ??
						"/images/emptysong.jpg"
					}
					alt="Spotify Album Art"
					width={80}
					height={80}
					priority={true}
					className="rounded-lg"
				/>
				<div>
					<h4>Spotify</h4>
					<p className="text-base">
						{lanyard?.listening_to_spotify ? (
							<>
								<b>{lanyard?.spotify?.song}</b> by{" "}
								{lanyard?.spotify?.artist}
							</>
						) : (
							"Not Listening to Anything"
						)}
					</p>
					<p className="text-base opacity-70">
						{lanyard?.listening_to_spotify &&
							lanyard?.spotify?.album}
					</p>
				</div>
			</div>
		</div>
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
