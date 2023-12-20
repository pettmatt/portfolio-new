import Link from "next/link"

export default function Footer() {
    return (
        <footer className="w-full h-14 bg-custom-black text-custom-white">
            <div className="text-center py-4">
                <Link href="#" className="px-4 py-2">
                    Going up?
                </Link>
            </div>
        </footer>
    )
}