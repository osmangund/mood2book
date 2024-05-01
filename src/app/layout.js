import { Inter, Rubik } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })
const rubik = Rubik({ subsets: ["latin"] })

export const metadata = {
  title: "Mood2Book: A Mood-Based Book Recommender",
  description:
    "Find your next reading based on your mood, see how long it will take you to read it, and get a summary of the book.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
