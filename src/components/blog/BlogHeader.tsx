import Image from "next/image"

export default function BlogHeader({ blog }) {
    return (
        <header id="sub-landing" className="section">
            <div id="image-effect" className="background-image">
            <Image src={ blog.attributes.thumbnail.data.attributes.url }
                height="500" width="500" alt={ blog.attributes.header + " thumbnail" } />
            </div>
        </header>
    )
}
