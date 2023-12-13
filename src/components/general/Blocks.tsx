// import ReactMarkdown from "react-markdown"
import Image from "next/image"
import Link from "next/link"

export default function Blocks({ blocks = [] }) {
    return (
        <div className="block-wrapper">
            {
                blocks.map((block, index) => (
                    <Block key={ index } content={ block } />
                ))
            }
        </div>
    )
}

function Block({ content = {} }) {
    return (
        <div className="block-item">
            <div className="image-wrapper">
                <Link href={ content.attributes.link }>
                    <Image src={ content.attributes.thumbnail.data.attributes.url }
                        height="200" width="350" alt={ `${ content?.attributes.title } image` }
                    />
                </Link>
            </div>
            <div className="description-wrapper">
                <Link href={ content.attributes.link }>
                    <h3>{ content?.attributes.title }</h3>
                </Link>
                {/* {<ReactMarkdown>{ block?.attributes.description }</ReactMarkdown>} */}
            </div>
        </div>
    )
}