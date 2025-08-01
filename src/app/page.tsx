import Link from "next/link"
import { getData } from "@/services/cmsGetRequest"
import { frontpage } from "@/types/strapi-pages"

import Skills from "@/components/portfolio/skills"
import Header from "@/components/portfolio/header"
import WorkExperience from "@/components/portfolio/work-experience"
import Education from "@/components/portfolio/education"

export default async function Home() {
    // const pageData: frontpage = await getData("/frontpage?populate=projects.thumbnail,skills,socials", "Frontpage")
    // const data = pageData.attributes

    return (
        <>
            <main className="flex column">
				<div className="header section flex column max-height-20">
					<Header />
				</div>
				<div className="skills section flex column max-height-25">
					<Skills />
				</div>
				<div className="work-experience section flex column max-height-30">
					<WorkExperience />
				</div>
				<div className="education section max-height-20">
					<Education />
				</div>
            </main>
        </>
    )
}
