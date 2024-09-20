"use client"

import { usePathname } from "next/navigation"
import Shuffle from "./shuffle"
import Link from "next/link"

export default function Header() {
  // if route is / display shuffle button
  const pathName = usePathname()

  return (
    <header className="px-4 md:px-16 py-3 flex justify-center md:mb-8 fixed left-0 top-0 right-0">
      <nav className="max-w-screen-md flex justify-center gap-16 items-center">
        <h1 className="font-bold text-2xl">
          <a href="/">📚 Mood2Book</a>
        </h1>
        {pathName === "/" ? (
          <Shuffle />
        ) : (
          <Link href="/" className="button">
            Menu
          </Link>
        )}
      </nav>
    </header>
  )
}
