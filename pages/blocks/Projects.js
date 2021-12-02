import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

export default function Projects({projects}) {

  const array = projects

  return (
    <div className='project-container'>
      { array.map(item => (
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