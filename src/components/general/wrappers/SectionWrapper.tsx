interface Props {
    header?: string
    description?: string
    overwriteHeight?: string
    children: React.ReactNode
}

export default function SectionWrapper(props: Props) {
    const { header, description, children, overwriteHeight } = props
    const height = overwriteHeight ? overwriteHeight : "1/4"

    return (
        <div className={`section-wrapper w-screen min-h-${ height } px-4`}>
            <div className="section max-w-xl my-0 mx-auto">
                { (header || description) && (
                    <div id={ headerToId(header!) || "" } className="section-header">
                        <h2 className="my-4">{ header }</h2>
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