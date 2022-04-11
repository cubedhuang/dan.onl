import Link from "next/link";

export default function Custom404() {
	return (
		<>
			<h1 className="heading text-amber-400">
				404 &ndash; page not found...
			</h1>
			<p className="mb-4">
				Seems like this page doesn&apos;t exist. Let&apos;s{" "}
				<Link href="/">
					<a className="border-b-2 border-b-white hover:border-b-transparent transition">
						go back
					</a>
				</Link>
				!
			</p>
		</>
	);
}
