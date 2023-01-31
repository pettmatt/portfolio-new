import Header from '../../components/header'
import Footer from '../../components/footer'
import BlogBlocks from '../../components/BlogBlocks'

export default function BlogArchive(props) {
  const blogpage = props.blogpage?.attributes
  const blogs = props?.blogs

  return (
    <div className='main-container'>
      <main>
        <Header title='Blogs' showBlogLink={true} />

        <header id='sub-landing' className='section'>
          <h1>{ blogpage.page_header }</h1>
          <p className='motto'>{ blogpage.motto }</p>
          <p className='description'>{ blogpage.about_text }</p>
        </header>
        
        <div id='blog-list' className='section'>
          <p>There are currently { blogs?.length || 0 } blog posts</p>
          <BlogBlocks blocks={ blogs } />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  // Fetch data from backend
  const blogpageRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/blogpage`)
  const blogpageData = await blogpageRes.json()

  const blogsRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/blogs?populate=*`)
  const blogsData = await blogsRes.json()

  // Forward to frontend use
  return {
    props: {
      blogpage: blogpageData.data,
      blogs: blogsData.data
    }
  }
}