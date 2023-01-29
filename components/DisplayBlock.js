import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import Link from 'next/link'

export default function DisplayBlock(props) {
  const blocks = props?.blocks

  return (
    <div className='block-container'>
      { blocks.map(block => (
      <div key={ block.id } className='block-item'>
        <div className='image-container'>
          <Link href={ block.attributes.link }>
            <a>
              <Image src={ block.attributes.thumbnail.data.attributes.url }
              height='200' width='350' alt={ block?.attributes.title + ' image' } />
            </a>
          </Link>
        </div>
        <div className='text-container'>
        <Link href={ block.attributes.link }>
          <a>
            <h2>{ block?.attributes.title }</h2>
          </a>
        </Link>
          {<ReactMarkdown>{ block?.attributes.description }</ReactMarkdown>}
        </div>
      </div>
      )) }
    </div>
  )
}