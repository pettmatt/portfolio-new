import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import Link from 'next/link'
import { replaceCharacterInString } from '../services/utils'

export default function BlogBlocks(props) {
  const blocks = props?.blocks

  return (
    <div className='block-container'>
      { blocks.map(block => (
      <div key={ block.id } className='block-item'>
        <div className='image-container'>
          <Link href={ '/blogs/' + replaceCharacterInString(block.attributes.header, ' ', '-') }>
            <a>
              <Image src={ block.attributes.thumbnail.data.attributes.url }
              height='200' width='350' alt={ block.attributes.title + ' image' } />
            </a>
          </Link>
        </div>
        <div className='text-container'>
          <Link href={ '/blogs/' + replaceCharacterInString(block.attributes.header, ' ', '-') }>
            <a>
              <h2>{ block.attributes.header }</h2>
            </a>
          </Link>
          <div className='tag'>
            { block.attributes.tags }
          </div>
          {<ReactMarkdown>{ 
            block.attributes.content.substring(
              0,
              block.attributes.content.indexOf('.') + 1
            )
          }</ReactMarkdown>}
        </div>
      </div>
      )) }
    </div>
  )
}