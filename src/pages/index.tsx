import moment from "moment-timezone";
import { InferGetServerSidePropsType } from "next";
import Image from "next/image";
import Clock from "react-live-clock";

import Discord from "../components/Discord";
import GenericMeta from "../components/GenericMeta";

const birthday = moment(new Date(2006, 4, 17));

export async function getServerSideProps() {
	return {
		props: {
			startTime: Date.now(),
			age: moment().diff(birthday, "years").toString()
		}
	};
}

export default function Home({
	startTime,
	age
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
			<GenericMeta
				title="Daniel 👋"
				description="My portfolio and personal website."
			/>

			<h1 className="heading mb-2">Daniel 👋!</h1>

			<p className="mb-4">
				Hi! I&apos;m Daniel, a{" "}
				<span className="text-blue-400">{age}-year-old developer</span>{" "}
				from <span className="text-rose-400">Atlanta</span>.
			</p>

			<p className="mb-2 flex flex-wrap gap-2 items-center">
				<a
					href="https://github.com/cubedhuang"
					target="_blank"
					rel="noopener noreferrer"
					className="w-6 h-6 hover:opacity-80 transition"
				>
					<Image
						src="/images/github.png"
						alt="GitHub Logo"
						width={64}
						height={64}
					/>
				</a>
				<a
					href="https://twitter.com/cubedhuang"
					target="_blank"
					rel="noopener noreferrer"
					className="w-6 h-6 hover:opacity-80 transition"
				>
					<Image
						src="/images/twitter.png"
						alt="Twitter Logo"
						width={64}
						height={64}
					/>
				</a>
				<a
					href="https://open.spotify.com/user/22ah5au2dajm7rqn3znkf4tnq?si=95e89d77cb0046f5"
					target="_blank"
					rel="noopener noreferrer"
					className="w-6 h-6 hover:opacity-80 transition"
				>
					<Image
						src="/images/spotify.png"
						alt="Spotify Logo"
						width={64}
						height={64}
					/>
				</a>
			</p>

			<p className="mb-4 text-base text-gray-300">
				Atlanta &middot;{" "}
				<Clock
					format={"dddd, Do MMMM YYYY · HH:mm:ss"}
					ticking={true}
					timezone={"US/Eastern"}
					date={startTime}
				/>
			</p>

			<Discord />
		</>
	);
}
