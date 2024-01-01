export async function getData(path: string = "", identity: string = "Unnamed") {
    const cmsUrl = process.env.NEXT_PUBLIC_URL

    const res = await fetch(`${ cmsUrl }${ path }`, {
        headers: {
            "Authorization": `Bearer ${ process.env.NEXT_PUBLIC_CMS_API_KEY}`
        },
        // Use "no-store" or specify when revalidation should happen to force next/react to not use cached data.
        cache: "no-store",
        // next: { revalidate: 60 }
    })

    if (!res.ok)
        return `${ identity } request was not OK`

    const data = await res.json()

    return data.data
}