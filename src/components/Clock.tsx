import format from "date-fns/format";
import { useEffect, useState } from "react";

interface ClockProps {
	time: number;
}

export function Clock({ time }: ClockProps) {
	const [now, setNow] = useState(time);

	useEffect(() => {
		const id = setInterval(() => {
			setNow(Date.now());
		}, 1000);

		return () => clearInterval(id);
	}, []);

	return <>{format(now, "eeee, do MMMM y · HH:mm:ss")}</>;
}
