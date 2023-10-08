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

	const estoniaTime = new Date(now);
	estoniaTime.setHours(estoniaTime.getHours() + 3); // Add 3 hours to adjust to GMT+3

	return <>{formatter.format(estoniaTime).replace(" at", " ·")}</>;
}
