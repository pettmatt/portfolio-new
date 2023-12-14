interface Props {
    header?: string
    description?: string
    overwriteHeight?: string
    children: React.ReactNode
}

export default function SectionWrapper(props: Props) {
    const { header, description, children, overwriteHeight } = props
    const height = overwriteHeight ? overwriteHeight : "3/4"

    return (
        <div className={`section-wrapper w-screen custom-height`}>
            <div className="section w-screen m-auto lg:max-w-custom px-4">
                { header && (
                    <div id={ headerToId(header!) || "" } className="section-header">
                        <h2 className="text-6xl my-4">{ header }</h2>
                        {
                            description && <p className="my-8">{ description }</p>
                        }
                    </div>
                )}
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