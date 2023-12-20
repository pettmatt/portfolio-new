interface Props {
    header?: string
    description?: string
    overwriteHeight?: string
    children: React.ReactNode
    additionalClass?: string
}

export default function SectionWrapper(props: Props) {
    const { header, description, children, additionalClass } = props

    return (
        <div className={ `section-wrapper w-screen custom-height${
            additionalClass ? (` ${ additionalClass }`) : ""
        }` }>
            <div className="section w-screen m-auto md:max-w-custom-l-wide lg:max-w-custom-l-thin px-4">
                { header &&
                    <div id={ headerToId(header!) || "" } className="section-header mb-6">
                        <h2 className="text-6xl">{ header }</h2>
                        {
                            description && <p className="mt-2">{ description }</p>
                        }
                    </div>
                }
                { children }
            </div>
        </div>
    )
}

function headerToId(header: string) {
    return (header)
        ? header.toLowerCase().split(" ").join("-")
        : null
}