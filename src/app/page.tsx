import Blocks from "@/components/general/Blocks"
import Landing from "@/components/frontpage/Landing"
import SectionWrapper from "@/components/general/wrappers/SectionWrapper"

interface FetchData {
    frontpage?: object
    projects?: object
    socials?: object
    skills?: object
}

async function getData() {
    const data: FetchData = {}
    const cmsUrl = process.env.NEXT_PUBLIC_URL

    const frontRes = await fetch(`${ cmsUrl }/frontpage`)
    const projectsRes = await fetch(`${ cmsUrl }/projects?populate=*`)
    const socialsRes = await fetch(`${ cmsUrl }/socials`)
    const skillsRes = await fetch(`${ cmsUrl }/skills`)

    if (!frontRes.ok || !projectsRes.ok || !socialsRes.ok || !skillsRes.ok) {
        return "Request was not OK"
    }

    const frontData = await frontRes.json()
    const projectsData = await projectsRes.json()
    const socialsData = await socialsRes.json()
    const skillsData = await skillsRes.json()

    data.frontpage = frontData.data
    data.projects = projectsData.data
    data.socials = socialsData.data
    data.skills = skillsData.data

    return data
}

export default async function Home() {
    
    const pageData = await getData()
    console.log(pageData)

    return (
        <main className="flex flex-col items-start justify-between">
            <SectionWrapper overwriteHeight="1/3">
                <Landing />
            </SectionWrapper>

            <SectionWrapper header="About">
                <p></p>
            </SectionWrapper>

            <SectionWrapper header="Projects & Blogs">
                <Blocks blocks={[]} />
            </SectionWrapper>

            <SectionWrapper header="Toolkit">
                
            </SectionWrapper>

            <SectionWrapper header="Links">
                
            </SectionWrapper>
        </main>
    )
}
