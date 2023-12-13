export default function DynamicListWrapper({
    flowDirection = "column", children
}: { flowDirection: string, children: React.ReactNode }) {
    return (
        <div className="dynamic-list-wrapper">
            <div className={ `flex-list ${ flowDirection }` }>
                { children }
            </div>
        </div>
    )
}