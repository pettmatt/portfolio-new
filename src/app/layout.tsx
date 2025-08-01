import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/newGlobals.css"
import "../styles/newColors.css"
import "../styles/components/generic.css"
import "../styles/mobile.css"
import "../../node_modules/devicon/devicon.min.css"

const inter = Inter({ subsets: ["latin"] })

// Buildin SEO support: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
// Possible options: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata: Metadata = {
	metadataBase: new URL("https://pettmatt.com" || "localhost:3001" || "localhost:3000"),
	title: "Pettmatt : Web developer",
	description: "A technology-oriented individual who isn't afraid to strive for perfection through failure. Always eager to learn about new as well as old technologies to expand their skills. They have passion for problem-solving and they enjoy working in a collaborative environment where they can share and acquire knowledge from others. While their focus has been for the last eight years on web technologies, they are always looking for a reason to dive into other environments.",
	keywords: ["software developer", "web developer", "portfolio"],
	icons: {
		icon: "/icon.png",
	},
	openGraph: {
		images: "/icon.png",
		type: "website",
		locale: "en_US"
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
		}
	},
	twitter: {
		card: "summary_large_image",
		title: "Pettmatt : Web developer",
		creator: "@pettmattdev",
		images: ["/icon.png"],
	}
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
			</body>
		</html>
	)
}
