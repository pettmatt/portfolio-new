// import BlogBlocks from "../../components/BlogBlocks"
import { Metadata } from "next"
import { blogpage } from "@/types/strapi-pages"
import { getData } from "@/services/cmsGetRequest"
import Blocks from "@/components/general/Blocks"
import Navigation from "@/components/general/Navigation"

export const metadata: Metadata = {
    title: "Pettmatt : Blog archive"
}

export default async function BlogArchive() {
    const pageData: blogpage = await getData("/blogpage?populate=*", "Blogpage")
    const { page_title, description_text, blogs } = pageData.attributes

    return (
        <>
            <Navigation />
            <main>
                <header id="sub-landing" className="section">
                    <h1>{ page_title }</h1>
                    <p className="description">{ description_text }</p>
                </header>
                
                <div id="blog-list" className="section">
                    <h2>There are currently <span>{ blogs.data.length | 0 }</span> blog posts</h2>
                    <Blocks blocks={ blogs.data } />
                </div>
            </main>
        </>
    )
}