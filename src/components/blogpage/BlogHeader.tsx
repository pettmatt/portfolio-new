import { blog } from "@/types/strapi-components"
import Image from "next/image"

interface Props {
    blog?: blog,
}

export default function BlogHeader(props: Props) {
    const blog = props.blog

    return (
        <header id="sub-landing" className="section pt-20 pb-4 h-third bg-custom-black text-custom-white">
            { blog
                ? (
                    <div id="image-effect" className="background-image">
                        <Image src={ blog.attributes.thumbnail?.data.attributes.url }
                            height="500" width="500"
                            alt={ `${ blog.attributes.title } thumbnail`} 
                        />
                    </div>
                )
                : (
                    <div className="max-w-custom-l-wide lg:max-w-custom-l-thin m-auto">
                        <h1 className="text-5xl">Developer blogs</h1>
                        <p className="description text-xl mt-2">
                            Learn, code, reflect and share
                        </p>
                    </div>
                )
            }
        </header>
    )
}