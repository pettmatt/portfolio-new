import ReactMarkdown from "react-markdown"
import { project, blog } from "@/types/strapi-components"
import Image from "next/image"
import Link from "next/link"

export default function Blocks({ blocks }: { blocks: project[] | blog[] | any[] }) {

    return (
        <div className="block-wrapper flex flex-col sm:flex-row gap-4">
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
    console.log(typeof content)
    return (
        <section className="
            block-item w-full border-solid border border-custom-default rounded-md
            sm:w-1/2 lg:w-1/3 xlg:w-1/4
        ">
            <header>
                <div className="image-wrapper">
                    <Link href={ link }>
                        <Image className="rounded-t-md w-full" height="200" width="350"
                            src={ block.thumbnail?.data.attributes.url || "/img/imageNotFound.png" }
                            alt={ `${ block.title } image` }
                        />
                    </Link>
                </div>
                <Link href={ link } className="text-2xl font-bold">
                    <h3 className="mx-4 mt-2">{ block.title }</h3>
                </Link>
                {
                    (block.tags) && (
                        <div className="tag mx-4 mt-1 w-auto">
                            <span className="p-1 px-2 bg-custom-black text-white">
                                { block.tags }
                            </span>
                        </div>
                    )
                }
            </header>
            <div className="description-wrapper px-4 pt-2 pb-4">
                <ReactMarkdown>{
                    (block.blog_text)
                        ? block.blog_text.substring(0, block.blog_text.indexOf(".") + 1)
                        : block.description
                }</ReactMarkdown>
            </div>
        </section>
    )
}