import { replaceCharacterInString } from "@/services/utilities"
// import BlogHeader from "@/components/blogs/BlogHeader"

export default function BlogArchive(props: any) {
//   const blog = props.blog
//   const createDate = new Date(blog.attributes.createdAt)
//   const updateDate = new Date(blog.attributes.updatedAt)

  return (
    <div className="main-container">
        <main>
            {/* <BlogHeader props={ blog } /> */}

            <div id="article-container" className="section">
            <article>
                <h1>Single blog page is working</h1>
                {/* <h1>{ blog.attributes.header }</h1> */}
                {/* <div className="tag">{ blog.attributes.tags }</div> */}

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
                {/* {<ReactMarkdown>{ blog.attributes.content }</ReactMarkdown>} */}
            </article>
            </div>
        </main>
    </div>
  )
}

// NOT SUPPORTED
// export async function getStaticProps({ params }) {
//   const processedBlogName = replaceCharacterInString(params.slug, "-", "%20")

//   // eq should be replaced with eqi (but for now it's impossible because it will create an 500 error)
//   const blogRes = await fetch(
//     `${process.env.NEXT_PUBLIC_URL}/blogs?filters[header][$eq]=${ processedBlogName }&populate=*`
//   )
//   const blogData = await blogRes.json()

//   return {
//     props: {
//       blog: blogData.data[0]
//     }
//   }
// }

// NOT SUPPORTED
// /blogs/[slug].js
// export async function getStaticPaths() {
//     // https://nextjs.org/docs/api-reference/data-fetching/get-static-paths
//     const blogsRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/blogs`)
//     const blogsData = await blogsRes.json()

//     return {
//         paths: blogsData.data.map((blog: any) => `/blogs/${ replaceCharacterInString(blog.attributes.header, " ", "-") }`) || [],
//         fallback: false
//     }
// }

const pickAMonth = (index: number) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return months[index]
}