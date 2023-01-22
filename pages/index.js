import Header from '../components/header'
import Footer from '../components/footer'

import Landing from '../components/Landing'
import Experience from '../components/Experience'
import Me from '../components/Me'
import Socials from '../components/Socials'

export default function Home(props) {
  const frontpage = props.frontpage.attributes
  const projects = props.projects
  const socials = props.socials
  const toolkit = props.skills

  return (
    <div className='main-container'>
      <main>
        <Header title='Web Developer' showBlogLink={ frontpage.showBlogs } />

        <Landing />

        <Experience 
          description={ frontpage.experienceDesc }
          projects={ projects }
          toolkit={toolkit}
          toolkitDesc={ frontpage.toolkitDesc } />

        <Me description={ frontpage.meDesc } />

        <Socials socials={ socials } />

      </main>
      <Footer socials={ socials } />
    </div>
  )

}

export async function getStaticProps() {
  // Fetch data from backend
  const frontpageRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/frontpage`)
  const frontpageData = await frontpageRes.json()

  const projectsRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/projects`)
  const projectData = await projectsRes.json()

  const socialsRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/socials`)
  const socialsData = await socialsRes.json()

  const skillsRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/skills`)
  const skillsData = await skillsRes.json()

  // Forward to frontend use
  return {
    props: {
      frontpage: frontpageData.data,
      projects: projectData.data,
      socials: socialsData.data,
      skills: skillsData.data
    }
  }
}