import Image from "next/image";

interface AnimeCardProps {
	title: string;
	description: string;
	image: string;
	link: string;
}

export default function AnimeCard({
	title,
	description,
	image,
	link
}: AnimeCardProps) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer noopener"
			className="group relative flex flex-col p-8 mb-4 overflow-hidden rounded-lg before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-0 before:transition before:duration-300 hover:before:opacity-50"
		>
			<Image
				src={image}
				alt={title}
				layout="fill"
				objectFit="cover"
				className="rounded-lg transition duration-300 group-hover:scale-[1.02]"
			/>
			<div className="z-20 transition duration-300 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100">
				<h2 className="font-bold text-3xl">{title}</h2>
				<p className="text-lg">{description}</p>
			</div>
		</a>
	);
}
