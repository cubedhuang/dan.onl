import moment from "moment-timezone";
import { InferGetServerSidePropsType } from "next";
import Clock from "react-live-clock";

import Discord from "../components/Discord";
import GenericMeta from "../components/GenericMeta";
import { SocialMedia } from "../components/SocialMedia";

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

			<SocialMedia />

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
