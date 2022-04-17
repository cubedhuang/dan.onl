import moment from "moment";
import { useEffect, useState } from "react";

interface ClockProps {
	time: number;
}

export function Clock({ time }: ClockProps) {
	const [now, setNow] = useState(moment(time));

	useEffect(() => {
		const id = setInterval(() => {
			setNow(moment());
		}, 1000);

		return () => clearInterval(id);
	}, []);

	return <>{now.format("dddd, Do MMMM YYYY · HH:mm:ss")}</>;
}
