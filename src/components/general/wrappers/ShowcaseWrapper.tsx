export default function Showcase({ children }: { children: React.ReactNode}) {
    return (
        <div className="showcase-wrapper">
            <div className="flex-list">
                { children }
            </div>
        </div>
    )
}