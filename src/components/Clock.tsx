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
	timeZone: "America/New_York",
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

	return <>{formatter.format(now).replace(" at", " ·")}</>;
}
