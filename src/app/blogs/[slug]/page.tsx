import { Metadata } from "next"
import ReactMarkdown from "react-markdown"
import BlogHeader from "@/components/blogpage/BlogHeader"
import { getData } from "@/services/cmsGetRequest"
import { blog } from "@/types/strapi-components"
import Navigation from "@/components/general/Navigation"
import Footer from "@/components/general/Footer"
import SectionWrapper from "@/components/general/wrappers/SectionWrapper"

export let metadata: Metadata = {
    title: "Pettmatt : Blog",
    description: "Some technical blog.",
    openGraph: {
        type: "article",
        authors: ["Petteri Mattila"],
    },
    twitter: {
		card: "summary_large_image",
		title: "Pettmatt : Blog page",
        description: "",
		creator: "@pettmattdev",
		images: ["/icon.png"],
	}
}

export default async function Blogpage({ params }: { params: { slug: string } }) {
    const title = params.slug.split("-").join(" ")
    const blogdata = await getData(`/blogs?filters[title][$eq]=${title}&populate=*`, "Blogsite")
    const blog: blog = blogdata[0]

    const createDate = new Date(blog.attributes.createdAt)
    const updateDate = new Date(blog.attributes.updatedAt)
    const ogCreateDate = blog.attributes.original_publish_date 
        ? new Date(blog.attributes.original_publish_date)
        : null

    metadata.title = title
    metadata.description = blog.attributes.blog_text
        .substring(0, blog.attributes.blog_text.indexOf(".") + 1)
    metadata.twitter!.title = title
    metadata.twitter!.description = blog.attributes.blog_text
        .substring(0, blog.attributes.blog_text.indexOf(".") + 1)

    return (
        <>
            <Navigation showBlogLink={ true } />
            <main>
                <BlogHeader blog={ blog } />

                <div className="!pt-4 mx-auto w-blog-wide xl:w-blog-thin">
                    <article>
                        <h1 className="text-5xl">{ blog.attributes.title }</h1>
                        <div className="my-3">
                            <span className="tag py-1 px-2 bg-custom-black text-custom-white">
                                { blog.attributes.tags }
                            </span>
                        </div>

                        <div className="blog-details my-4">
                            <ul>
                                { (ogCreateDate || createDate) &&
                                    <li aria-label="Blog post date">
                                        Posted on <span className="bpd font-bold">                                            
                                            { (ogCreateDate)
                                                ? `${pickAMonth(ogCreateDate.getMonth())} ${ogCreateDate.getDate()}, ${ogCreateDate.getFullYear()}`
                                                : `${pickAMonth(createDate.getMonth())} ${createDate.getDate()}, ${createDate.getFullYear()}`
                                            }
                                        </span>
                                    </li>
                                }
                                { (updateDate) &&
                                    <li className="bud" aria-label="Blog update date">
                                        Updated on <span className="upd font-bold">
                                            { `${pickAMonth(updateDate.getMonth())} ${updateDate.getDate()}, ${updateDate.getFullYear()}` }
                                        </span>
                                    </li>
                                }
                                <li className="rte" aria-label="read time estimate">
                                    Estimated read time <span className="font-bold">{ blog.attributes.read_time }</span>
                                </li>
                            </ul>
                        </div>
                        <ReactMarkdown>{ blog.attributes.blog_text }</ReactMarkdown>
                    </article>
                </div>
            </main>
            <Footer />
        </>
    )
}

const pickAMonth = (index: number) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return months[index]
}