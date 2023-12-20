import Image from "next/image"
import Link from "next/link"
import { blog } from "@/types/strapi-components"

interface Props {
    link: string
    blogs: blog[]
}

export default function ImageBlock(props: Props) {

    return (
        <section>
            <Link href="/blogs">
                <div className="block-image-wrapper" aria-hidden>
                    <div className="block-image">
                        {
                            // props.blogs.map((blog, index) => 
                            //     <Image key={"block-image-" + index} src={blog.attributes.thumbnail || "/img/imageNotFound.png"}
                            //         alt={`Block image ${index}`} 
                            //     />
                            // )
                        }
                    </div>
                </div>
            </Link>
        </section>
    )
}