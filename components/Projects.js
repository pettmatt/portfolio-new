import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

export default function Projects(props) {
  const projects = props.projects

  return (
    <div className='project-container'>
      { projects.map(project => (
      <div key={project.id} className='project-project'>
        <div className='image-container'>
          <a href={project.link}>
          <Image src={project.thumbnail !== null ? project.thumbnail.url 
          : '/imageNotFound.png'}
          height='200' width='350' alt={project.name + ' image'} />
          </a>
        </div>
        <div className='text-container'>
        <a href={project.link}><h2>{ project.title }</h2></a>
          {<ReactMarkdown>{ project.description }</ReactMarkdown>}
        </div>
      </div>
      )) }
    </div>
  )
}

// Used while building the application
// Index.js has the "real" fetching function
// export async function getStaticProps() {
//   // Fetch data from backend
//   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/projects`)
//   const data = await res.json()

//   // Forward to frontend use
//   return {
//     props: {
//       projects: data
//     }
//   }
// }