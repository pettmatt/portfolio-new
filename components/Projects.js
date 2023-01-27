import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects(props) {
  const projects = props.projects

  return (
    <div className='block-container'>
      { projects.map(project => (
      <div key={ project.id } className='block-item'>
        <div className='image-container'>
          <Link href={ project?.attributes.link }>
            <a>
              <Image src={ project?.attributes.thumbnail.data.attributes.url }
              height='200' width='350' alt={ project?.attributes.title + ' image' } />
            </a>
          </Link>
        </div>
        <div className='text-container'>
        <Link href={ project?.attributes.link }>
          <a>
            <h2>{ project?.attributes.title }</h2>
          </a>
        </Link>
          {<ReactMarkdown>{ project?.attributes.description }</ReactMarkdown>}
        </div>
      </div>
      )) }
    </div>
  )
}