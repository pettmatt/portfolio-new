"use client"

export default function Footer() {
    function toTopClickEvent(e: any) {
        e.preventDefault()
        window.scrollTo({
            top:0,
            left: 0,
            behavior: "smooth",
        })
    }

    return (
        <footer className="w-full h-14">
            <div className="text-center py-4 bg-custom-black text-custom-white">
                <button onClick={toTopClickEvent} className="px-4 py-2" aria-label="Scroll to the top">
                    Going up?
                </button>
            </div>
        </footer>
    )
}