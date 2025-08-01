import List from "./elements/List"
import "@/styles/components/header.css"

export default async function Header() {
	const data = {
		hidden_title: "Hidden header for search engines",
		title: {
			main: "Petteri Mattila",
			span: "Software Developer"
		},
		socials: ["email", "linkedin", "github"],
		description: `
			<p>
				As a technology-centric individual, I am always eager to learn new technologies and
				improve my skills. I have a passion for problem-solving and enjoy working in a
				collaborative environment where I can share my knowledge and learn from others.
				While my focus has been on web technologies, I am open to broadening my skills
				and expertise in new areas.
			</p>
		`
	}

	return (
		<>
			<div className="flex row gap-between">
				<div className="introduction">
					<h1>{ data.hidden_title }</h1>
					<h2>{ data.title.main } <span>{ data.title.span }</span></h2>
				</div>
				<div className="link-container">
					<List list={data.socials} className="link-list flex column text-right weighted-children" />
				</div>
			</div>
			<div className="paragraph-container">
				{
					<div className="dangerous-container width-75" dangerouslySetInnerHTML={
						{ __html: data.description }
					} />
				}
			</div>
		</>
	)
}