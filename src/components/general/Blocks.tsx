import ReactMarkdown from "react-markdown"
import { project, blog } from "@/types/strapi-components"
import Image from "next/image"
import Link from "next/link"

export default function Blocks({ blocks }: { blocks: project[] | blog[] | any[] }) {

    return (
        <div className="block-wrapper">
            {
                blocks.map((block, index) => (
                    <Block key={ `block-${ index }` } content={ block } />
                ))
            }
        </div>
    )
}

function Block({ content }: { content: project | blog | any }) {
    const block = content.attributes
    const link = block.link ? block.link : `/blogs/${ block.title.split(" ").join("-") }`

    return (
        <div className="block-item">
            <div className="image-wrapper">
                <Link href={ link }>
                    {
                        // <Image src={ String.toString(block.thumbnail?.data.attributes.url) }
                        //     height="200" width="350" alt={ `${ block.title } image` }
                        // />
                    }
                </Link>
            </div>
            <div className="description-wrapper">
                <Link href={ link }>
                    <h3>{ block.title }</h3>
                </Link>
                {
                    <ReactMarkdown>{ block.description }</ReactMarkdown>
                }
            </div>
        </div>
    )
}