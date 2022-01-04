import Header from '../components/header'
import Footer from '../components/footer'

import Landing from '../components/Landing'
import Experience from '../components/Experience'
import Me from '../components/Me'
import Contact from '../components/Contact'

console.log('Work in progress')

export default function Home({ body }) {
  
  return (
    <div className='main-container'>
      <main>
        
        <Header 
          title='Portfolio'
          showBlogLink={ body.showBlogs } />

        <Landing/>

        <Experience 
          description={ body.experienceDesc }
          projects={ body.projects }
          toolkit={ body.skills } 
          toolkitDesc={ body.toolkitDesc }/>

        <Me 
          description={ body.meDesc} />

        <Contact 
          email={ body.email }
          message={ body.contactMessage }
          location={ body.location } />

        <Footer 
          socials={body.socials} />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  // Fetch data from backend
  const res = await fetch(process.env.NEXT_PUBLIC_URL)
  const data = await res.json()

  if(!data) {
    return {
      notFound: true,
    }
  }

  // Forward to frontend use
  return {
    props: {
      body: data
    }
  }
}