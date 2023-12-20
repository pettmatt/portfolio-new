import { blog } from "@/types/strapi-components"
import Image from "next/image"

interface Props {
    blog?: blog,
    title?: string,
    subtext?: string,
}

export default function BlogHeader(props: Props) {
    const { blog, title, subtext } = props
    const cmsUrl = process.env.NEXT_PUBLIC_DOMAIN
    const thumbnailUrl = blog?.attributes.thumbnail.data?.attributes.url

    return (
        <header className={
            `blog-section h-l-third overflow-y-hidden bg-custom-black text-custom-white${!blog ? " pt-20 pb-4" : ""}`
        }>
            { blog
                ? (
                    <div className="background-image h-full">
                        <Image src={ thumbnailUrl ? cmsUrl + thumbnailUrl : "/img/imageNotFound.png" }
                            className="mx-auto w-fit h-full"
                            height="500" width="500"
                            alt={ `${ blog.attributes.title } thumbnail`}
                        />
                    </div>
                )
                : (
                    <div className="max-w-custom-l-wide lg:max-w-custom-l-thin m-auto">
                        <h1 className="text-5xl md:text-7xl">{ title || "Development blogs" }</h1>
                        { subtext &&
                            <p className="description text-xl mt-2">
                                { subtext }
                            </p>
                        }
                    </div>
                )
            }
        </header>
    )
}