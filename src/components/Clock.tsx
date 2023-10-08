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
	timeZone: "Europe/Tallinn", // Use "Europe/Tallinn" for Estonia (Tartu)
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

	// Manually set the desired time (00:55) for demonstration purposes
	const estoniaTime = new Date(now);
	estoniaTime.setHours(23); // Set hours to 00
	estoniaTime.setMinutes(59); // Set minutes to 55

	return <>{formatter.format(estoniaTime).replace(" at", " ·")}</>;
}
