import { frontpage } from "@/types/strapi-pages"

interface FetchData {
    frontpage?: frontpage
    projects?: object
    socials?: object
    skills?: object
}

export async function getData() {
    const data: FetchData = {}
    const cmsUrl = process.env.NEXT_PUBLIC_URL
    const config = {
        headers: {
            "Authorization": `Bearer ${ process.env.NEXT_PUBLIC_CMS_API_KEY}`
        }
    }

    const frontRes = await fetch(`${ cmsUrl }/frontpage`, config)
    // const projectsRes = await fetch(`${ cmsUrl }/projects?populate=*`, config)
    // const socialsRes = await fetch(`${ cmsUrl }/socials`, config)
    // const skillsRes = await fetch(`${ cmsUrl }/skills`, config)

    if (!frontRes.ok) return "Frontpage was not OK"
    // else if (!projectsRes.ok) return "Projects was not OK"
    // else if (!socialsRes.ok) return "Socials was not OK"
    // else if (!skillsRes.ok) return "Skills was not OK"

    const frontData = await frontRes.json()
    // const projectsData = await projectsRes.json()
    // const socialsData = await socialsRes.json()
    // const skillsData = await skillsRes.json()

    data.frontpage = frontData.data
    // data.projects = projectsData.data
    // data.socials = socialsData.data
    // data.skills = skillsData.data

    return data
}