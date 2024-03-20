import { Metadata } from "next"
import { blogpage } from "@/types/strapi-pages"
import { getData } from "@/services/cmsGetRequest"
import BlogHeader from "@/components/blogpage/BlogHeader"
import Blocks from "@/components/general/Blocks"
import Navigation from "@/components/general/Navigation"
import SectionWrapper from "@/components/general/wrappers/SectionWrapper"
import Footer from "@/components/general/Footer"
import "../../styles/blog.css"

export const metadata: Metadata = {
    title: "Pettmatt : Blog archive",
    description: "Blogs about technical implementations and what problems they may introduce.",
    twitter: {
		card: "summary_large_image",
		title: "Pettmatt : Blog archive",
		creator: "@pettmattdev",
		images: ["/icon.png"],
	}
}

export default async function BlogArchive() {
    const pageData: blogpage = await getData("/blogpage?populate=blogs.thumbnail", "Blogpage")
    const { blogs, about_text, page_title } = pageData.attributes

    return (
        <>
            <Navigation showBlogLink={ true } />
            <main>
                <BlogHeader title={ page_title } subtext={ about_text } />

                <SectionWrapper additionalClass="!pt-4 text-custom-black">
                    <h2 className="my-4">
                        There are currently <span>{ blogs.data.length | 0 }</span> blog posts
                    </h2>
                    <Blocks blocks={ blogs.data } />
                </SectionWrapper>
            </main>
            <Footer />
        </>
    )
}