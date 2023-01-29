import Header from '../../components/header'
import Footer from '../../components/footer'
import { stringToUrlFriendly } from '../../services/utils'

export default function BlogArchive() {
  return (
    <div className='main-container'>
      <main>
        <Header title='Blogs : [SLUG]' showBlogLink={true} />

        <header id='sub-landing' className='section'>
          <h1>Blog header</h1>
          <p aria-label='subject tag'>TAG</p>

          <div className='blog-details'>
            <ul>
              <li aria-label='updated'></li>
              <li aria-label='read time estimate'></li>
            </ul>
          </div>
        </header>

        <div id='article-container' className='section'>
          <article>

          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  // Fetch data from backend
  const blogRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/blogs`)
  const blogData = await blogRes.json()
  console.log('BLOGS', blogData)

  // Forward to frontend use
  return {
    props: {
      frontpage: blogData.data,
    }
  }
}

// /blogs/[slug].js
export async function getStaticPaths() {
  const blogsRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/blogs`)
  const blogsData = await blogsRes.json()

  return {
    paths: blogsData.data.map(blog => `/blogs/${ stringToUrlFriendly(blog.attributes.header) }`) || [],
    fallback: false
  }
}
