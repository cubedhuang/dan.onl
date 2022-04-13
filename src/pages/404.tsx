import Link from "next/link";

export default function Custom404() {
	return (
		<>
			<h1 className="mb-2 heading text-amber-400">
				404 &ndash; page not found...
			</h1>
			<p>
				Seems like this page doesn&apos;t exist. Let&apos;s{" "}
				<Link href="/">
					<a className="border-b border-[#fff4] hover:border-white transition">
						go back
					</a>
				</Link>
				!
			</p>
		</>
	);
}
