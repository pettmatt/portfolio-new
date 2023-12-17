// import BlogBlocks from "../../components/BlogBlocks"
import { Metadata } from "next"
import { blogpage } from "@/types/strapi-pages"
import { getData } from "@/services/cmsGetRequest"
import BlogHeader from "@/components/blogpage/BlogHeader"
import Blocks from "@/components/general/Blocks"
import Navigation from "@/components/general/Navigation"
import SectionWrapper from "@/components/general/wrappers/SectionWrapper"

export const metadata: Metadata = {
    title: "Pettmatt : Blog archive"
}

export default async function BlogArchive() {
    const pageData: blogpage = await getData("/blogpage?populate=*", "Blogpage")
    const { blogs } = pageData.attributes

    return (
        <>
            <Navigation />
            <main>
                <BlogHeader />

                <SectionWrapper>
                    <h2>There are currently <span>{ blogs.data.length | 0 }</span> blog posts</h2>
                    <Blocks blocks={ blogs.data } />
                </SectionWrapper>
            </main>
        </>
    )
}