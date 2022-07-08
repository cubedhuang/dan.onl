import Image from "next/image";
import { LanyardData, useLanyard } from "react-use-lanyard";

const USER_ID = "299707523370319883";

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

export default function Discord() {
	const { data } = useLanyard({
		userId: USER_ID
	});
	const lanyard = data?.data;

	return (
		<div className="mb-2 flex gap-2 items-center text-base leading-snug">
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
	);
}
