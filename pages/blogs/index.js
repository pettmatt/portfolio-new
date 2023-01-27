import Header from '../../components/header'
import Footer from '../../components/footer'

export default function BlogArchive(props) {
  const blogpage = props.blogpage?.attributes
  const blogs = props?.blogs

  return (
    <div className='main-container'>
      <main>
        <Header title='Blogs' showBlogLink={true} />

        <header id='sub-landing' className='section'>
          <h1>Developer blogs</h1>
          <p className='slogan'>Shared information is saved information</p>
          <p className='description'>There are many unknowns in software development, so why not share some interesting cases and solutions</p>
        </header>
        
        <div id='blog-list' className='section'>
          <p>There are currently { blogs?.length || 0 } blogs</p>
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

  const blogsRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/blogs`)
  const blogsData = await blogsRes.json()

  // Forward to frontend use
  return {
    props: {
      blogpage: blogpageData.data,
      blogs: blogsData.data
    }
  }
}