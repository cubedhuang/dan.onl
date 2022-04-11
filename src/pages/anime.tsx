import AnimeCard from "../components/AnimeCard";
import GenericMeta from "../components/GenericMeta";

export default function Anime() {
	return (
		<>
			<GenericMeta
				title="Anime ✨"
				description="Some anime I've watched."
			/>

			<h1 className="heading">Anime ✨</h1>

			<p className="text-lg mb-4">Some anime I've watched.</p>

			<AnimeCard
				title="Tokyo Ghoul"
				description="Cannibalism."
				image="/images/anime/tokyo.jpg"
				link="https://anilist.co/anime/20605/Tokyo-Ghoul/"
			/>
			<AnimeCard
				title="Saiki K."
				description="The world's unhappiest man."
				image="/images/anime/saiki.jpg"
				link="https://anilist.co/anime/21804/Saiki-Kusuo-no-nan/"
			/>
			<AnimeCard
				title="Kakegurui"
				description="Gambling addict."
				image="/images/anime/yumeko.jpg"
				link="https://anilist.co/anime/98314/Kakegurui/"
			/>
			<AnimeCard
				title="Neon Genesis Evangelion"
				description="Mental illness."
				image="/images/anime/nge.jpg"
				link="https://anilist.co/anime/30/Shin-Seiki-Evangelion/"
			/>
			<AnimeCard
				title="Assassination Classroom"
				description="Koro-sensei!"
				image="/images/anime/classroom.jpg"
				link="https://anilist.co/anime/20755/Ansatsu-Kyoushitsu"
			/>
			<AnimeCard
				title="Hunter x Hunter"
				description="Psychological horror."
				image="/images/anime/hxh.jpg"
				link="https://anilist.co/anime/11061/HUNTERHUNTER-2011/"
			/>
			<AnimeCard
				title="Aggretsuko"
				description="Corporate slave."
				image="/images/anime/retsuko.jpg"
				link="https://anilist.co/anime/101571/Aggressive-Retsuko/"
			/>
			<AnimeCard
				title="Brand New Animal"
				description="Animal racism."
				image="/images/anime/bna.jpg"
				link="https://anilist.co/anime/110354/BNA/"
			/>
			<AnimeCard
				title="Rascal Does Not Dream"
				description="Puberty syndrome?"
				image="/images/anime/mai.jpg"
				link="https://anilist.co/anime/101291/Rascal-Does-Not-Dream-of-Bunny-Girl-Senpai/"
			/>
			<AnimeCard
				title="Beastars"
				description="Carnivores."
				image="/images/anime/beastars.png"
				link="https://anilist.co/anime/107660/BEASTARS/"
			/>
		</>
	);
}
