import ReactMarkdown from "react-markdown"
import { getData } from "@/services/cmsGetRequest"
import { replaceCharacterInString } from "@/services/utilities"
// import BlogHeader from "@/components/blogs/BlogHeader"

export default async function Blogpage(props) {
    console.log("props", props)
    // const blogTitle = window.location.href.split("?title=")
    const blogdata = await getData("/blogs", "Blogsite")
    console.log(blogdata)

    return (
        <div className="main-container">
            <main>asd
                {/* <BlogHeader props={ blog } /> */}

                <div id="article-container" className="section">
                    <article>
                        {/* <h1>{ blog.attributes.header }</h1>
                        <div className="tag">{ blog.attributes.tags }</div> */}

                        <div className="blog-details" aria-label="Element contains the date and estimated read time">
                        <ul>
                            {
                                // (createDate.getMonth() + 1 === updateDate.getMonth() + 1) ?
                                // <li aria-label="Blog post date">
                                //     Posted on <span>
                                //         { `${createDate.getDate()} ${pickAMonth(createDate.getMonth())} ${createDate.getFullYear()}` }
                                //     </span>
                                // </li>
                                // :
                                // <li aria-label="Blog update date">
                                //     Updated on { `${updateDate.getDate()} ${pickAMonth(updateDate.getMonth())} ${updateDate.getFullYear()}` }
                                // </li>
                            }
                            <li aria-label="read time estimate">
                                {/* { blog.attributes.read_time } */}
                            </li>
                        </ul>
                        </div>
                        {/* <ReactMarkdown>{ blog.attributes.content }</ReactMarkdown> */}
                    </article>
                </div>
            </main>
        </div>
    )
}

const pickAMonth = (index: number) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return months[index]
}