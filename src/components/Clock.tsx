import formatInTimeZone from "date-fns-tz/formatInTimeZone";
import { useEffect, useState } from "react";

export function Clock() {
	const [now, setNow] = useState(0);

	useEffect(() => {
		setNow(Date.now());

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
