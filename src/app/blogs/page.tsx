// import BlogBlocks from "../../components/BlogBlocks"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Pettmatt : Blog archive"
}

export default function BlogArchive(props) {
    const blogpage = props.blogpage?.attributes
    const blogs = props?.blogs

    return (
        <div className="main-container">
            <main>
                <header id="sub-landing" className="section">
                    <h1>Blog page is working</h1>
                    {/* <h1>{ blogpage.page_header }</h1> */}
                    {/* <p className="description">{ blogpage.about_text }</p> */}
                </header>
                
                <div id="blog-list" className="section">
                    {/* <p>There are currently { blogs?.length || 0 } blog posts</p> */}
                    {/* <BlogBlocks blocks={ blogs } /> */}
                </div>
            </main>
        </div>
    )
}