import Image from "next/image";

export function SocialMedia() {
	return (
		<p className="mb-2 flex flex-wrap gap-2 items-center">
			{[
				[
					"GitHub",
					"/images/github.png",
					"https://github.com/cubedhuang"
				],
				[
					"Twitter",
					"/images/twitter.png",
					"https://twitter.com/cubedhuang"
				],
				[
					"Spotify",
					"/images/spotify.png",
					"https://open.spotify.com/user/22ah5au2dajm7rqn3znkf4tnq?si=95e89d77cb0046f5"
				]
			].map(([alt, src, href]) => (
				<a
					key={src}
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					className="w-6 h-6 hover:opacity-80 transition"
				>
					<Image
						src={src}
						alt={alt}
						width={64}
						height={64}
						priority={true}
					/>
				</a>
			))}
		</p>
	);
}
