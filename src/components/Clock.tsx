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

	const estoniaTime = new Date(now);
	const estoniaHour = estoniaTime.getHours();
	const estoniaFormattedHour = estoniaHour < 10 ? `0${estoniaHour}` : estoniaHour;

	return (
		<>{formatter.format(estoniaTime).replace(" at", ` · ${estoniaFormattedHour}:`)}</>
	);
}
