import Header from '../../components/header'
import Footer from '../../components/footer'

export default function BlogArchive() {
  return (
    <div>
      <Header title='Blogs : [SLUG]' showBlogLink={true} />

      <div>
        <main>
          <header>
            <h1>Blog header</h1>
            <p>SInformation</p>
          </header>

          <article>

          </article>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  // Fetch data from backend
  const blogRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/blogs`)
  const blogData = await blogRes.json()

  // Forward to frontend use
  return {
    props: {
      frontpage: blogData.data,
    }
  }
}