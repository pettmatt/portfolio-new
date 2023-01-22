import Header from '../../components/header'
import Footer from '../../components/footer'

export default function BlogArchive() {

  return (
    <div>
      <header>
        <Header title='Blogs : [SLUG]' showBlogLink={true} />
        <h1>Blog archive page</h1>
        <p>SInformation</p>
      </header>

      <div>
        <main>
          List of blogs
          <Footer />
        </main>
      </div>
    </div>
  )
}