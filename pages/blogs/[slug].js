import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { replaceCharacterInString } from '../../services/utils'

export default function BlogArchive(props) {
  const blog = props.blog
  const createDate = new Date(blog.attributes.createdAt)
  const updateDate = new Date(blog.attributes.updatedAt)

  return (
    <div className='main-container'>
      <main>
        <Header title='Blogs : [SLUG]' showBlogLink={true} />
        <header id='sub-landing' className='section'>
          <div id='image-effect' className='background-image'>
            <Image src={ blog.attributes.thumbnail.data.attributes.url }
              height='500' width='500' alt={ blog.attributes.header + ' thumbnail' } />
          </div>
        </header>

        <div id='article-container' className='section'>
          <article>
            <h1>{ blog.attributes.header }</h1>
            <div className='tag'>{ blog.attributes.tags }</div>

            <div className='blog-details' aria-label='Element contains the date and estimated read time'>
              <ul>
                {
                (createDate.getMonth() + 1 === updateDate.getMonth() + 1) ?
                  <li aria-label='Blog post date'>
                    Posted on <span>{ `${createDate.getDate()} ${pickAMonth(createDate.getMonth())} ${createDate.getFullYear()}` }</span>
                  </li>
                :
                  <li aria-label='Blog update date'>
                    Updated on { `${updateDate.getDate()} ${pickAMonth(updateDate.getMonth())} ${updateDate.getFullYear()}` }
                  </li>
                }
                <li aria-label='read time estimate'>
                  { blog.attributes.read_time }
                </li>
              </ul>
            </div>
            {<ReactMarkdown>{ blog.attributes.content }</ReactMarkdown>}
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const blogSlug = params.slug
  const processedBlogName = replaceCharacterInString(blogSlug, '-', '%20')

  // eq should be replaced with eqi (but for now it's impossible because 500 error)
  const blogRes = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/blogs?filters[header][$eq]=${ processedBlogName }&populate=*`
  )
  const blogData = await blogRes.json()

  // Forward to frontend use
  return {
    props: {
      blog: blogData.data[0]
    }
  }
}

// /blogs/[slug].js
export async function getStaticPaths() {
  // https://nextjs.org/docs/api-reference/data-fetching/get-static-paths
  const blogsRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/blogs`)
  const blogsData = await blogsRes.json()

  return {
    paths: blogsData.data.map(blog => `/blogs/${ replaceCharacterInString(blog.attributes.header, ' ', '-') }`) || [],
    fallback: false
  }
}

const pickAMonth = (index) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return months[index]
}