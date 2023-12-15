export async function getData(path: string = "", identity: string = "Unnamed") {
    const cmsUrl = process.env.NEXT_PUBLIC_URL
    const config = {
        headers: {
            "Authorization": `Bearer ${ process.env.NEXT_PUBLIC_CMS_API_KEY}`
        }
    }

    const res = await fetch(`${ cmsUrl }${ path }`, config)
    // const projectsRes = await fetch(`${ cmsUrl }/projects?populate=*`, config)
    // const socialsRes = await fetch(`${ cmsUrl }/socials`, config)
    // const skillsRes = await fetch(`${ cmsUrl }/skills`, config)

    if (!res.ok) return `${ identity } request was not OK`

    const data = await res.json()

    return data.data
}