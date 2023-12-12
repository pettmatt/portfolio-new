import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

// Buildin SEO support: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
// Possible options: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata: Metadata = {
	title: "Pettmatt : Web developer",
	description: "Independent web developer",
}

export default function RootLayout({
  	children,
}: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
