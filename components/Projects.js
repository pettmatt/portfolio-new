import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

export default function Projects({projects}) {
  let list = projects

  return (
    <div className='project-container'>
      { list.map(item => (
      <div key={item.id} className='project-item'>
        <div className='image-container'>
          <a href={item.link}>
          <Image src={item.thumbnail !== null ? item.thumbnail.url 
          : '/imageNotFound.png'}
          height='200' width='350' alt={item.name + ' image'} />
          </a>
        </div>
        <div className='text-container'>
        <a href={item.link}><h2>{item.title}</h2></a>
          {<ReactMarkdown>{item.description}</ReactMarkdown>}
        </div>
      </div>
      )
      ) }
        
    </div>
  )
}

// Used while building the application
// Index.js has the "real" fetching function
export async function getStaticProps() {
  // Fetch data from backend
  const res = await fetch(process.env.NEXT_PUBLIC_URL)
  const data = await res.json()

  // Forward to frontend use
  return {
    props: {
      projects: data.projects
    }
  }
}