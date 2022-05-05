import formatInTimeZone from "date-fns-tz/formatInTimeZone";
import { useEffect, useState } from "react";

export function Clock() {
	const [now, setNow] = useState(Date.now);

	useEffect(() => {
		const id = setInterval(() => {
			setNow(Date.now());
		}, 1000);

		return () => clearInterval(id);
	}, []);

	return (
		<>
			{formatInTimeZone(
				now,
				"America/New_York",
				"eeee, do MMMM y · HH:mm:ss"
			)}
		</>
	);
}
