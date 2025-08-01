import "@/styles/components/skills.css"

export default async function Skills() {
	interface Data {
		title: string,
		skillSections: SkillSection[]
	}

	interface SkillSection {
		title: string,
		skills: Skills[]
	}

	interface Skills {
		className: string,
		skills: String[]
	}

	const data: Data = {
		title: "Skills",
		skillSections: [
			{
				title: "Technical",
				skills: [
					{
						className: "generic",
						skills: ["JavaScript", "TypeScript", "Lua", "Rust", "PHP", "C#", "NoSQL", "SQL"]
					},
					{
						className: "data-cloud",
						skills: ["AWS", "Serverless", "Firebase", "MongoDB", "MySQL", "SQLite"]
					},
					{
						className: "frontend",
						skills: ["React", "Vue", "Svelte", "Next", "Nuxt", "jQuery", "HTML", "CSS", "Sass", "Tailwind"]
					},
					{
						className: "backend",
						skills: ["Node.js", "Deno", "Express"]
					},
					{
						className: "other",
						skills: ["Vite", "Webpack", "Jest", "WordPress", "Three.js", "Unix", "Docker", "Git"]
					}
				]
			},
			{
				title: "Soft skills",
				skills: [
					{
						className: "soft",
						skills: ["Concepting", "prototyping", "problem solving", "accessibility", "scheduling", "communication"]
					}
				]
			},
			{
				title: "Other",
				skills: [
					{
						className: "programming-styles",
						skills: ["Data oriented programming", "functional programming"]
					},
					{
						className: "architectures",
						skills: ["Serverless architecture", "microservice architecture"]
					}
				]
			}
		]
	}

	return (
		<>
			<h3>{ data.title }</h3>
			<div className="skill-list inner-container flex column wrap max-height-20">
			{
				data.skillSections.map((section: SkillSection, index: number) => (
					<div key={index} className={
						section.title.toLowerCase().replaceAll(" ", "-") + " " +
						"flex column gap-between"
					}>
						<h4>{ section.title }</h4>
						{
							section.skills.map((skillSection: Skills, ii: number) => (
								<div key={ii} className={ skillSection.className.toLowerCase() }>
									<p>{ skillSection.skills.join(", ") }</p>
								</div>
							))
						}
					</div>
				))
			}
			</div>
		</>
	)
}