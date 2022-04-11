import GenericMeta from "../components/GenericMeta";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
	return (
		<>
			<GenericMeta
				title="Projects 📙"
				description="Some of my projects."
			/>

			<h1 className="heading mb-8">Projects 📦</h1>

			<ProjectCard
				name="Boids: Flocking Simulation"
				bg="/images/projects/boids.png"
				href="https://boids.cubedhuang.com"
			>
				A 2D simulation of flocking behavior with thousands of boids.
			</ProjectCard>
			<ProjectCard
				name="Slate &ndash; Discord Bot"
				bg="/images/projects/slate.jpg"
				href="https://slate.dan.onl"
			>
				A Discord bot with loads of features like YouTube Together,
				logging ghost pings, playing music, and more.
			</ProjectCard>
			<ProjectCard
				name="College Board Pseudocode Interpreter"
				bg="/images/projects/board.png"
				href="https://board.dan.onl"
			>
				An interpreter for the College Board specified pseudocode
				language for the Computer Science Principles AP Exam.
			</ProjectCard>
			<ProjectCard
				name="CubeDHuang: Web Experiments"
				bg="/images/projects/cubedhuang.webp"
				href="https://cubedhuang.com"
			>
				A collection of various random web experiments I&apos;ve made
				over the years.
			</ProjectCard>
		</>
	);
}
