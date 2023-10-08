import { useEffect, useState } from "preact/hooks";

const formatter = new Intl.DateTimeFormat("en-US", {
	day: "numeric",
	weekday: "long",
	year: "numeric",
	month: "long",
	hour: "numeric",
	minute: "numeric",
	second: "numeric",
	hour12: false,
	timeZone: "Europe/Tallinn",
	timeZoneName: "short"
});

export function Clock() {
	const [now, setNow] = useState(0);

	useEffect(() => {
		setNow(Date.now());

		const id = setInterval(() => {
			setNow(Date.now());
		}, 1000);

		return () => clearInterval(id);
	}, []);

	const formattedTime = formatter.format(now);
	
	// Check if it's midnight (00:00) and replace "24" with "00"
	const displayTime = formattedTime.replace(" at", " · ").replace(" 24:", " 00:");
	
	return <>{displayTime}</>;
}
