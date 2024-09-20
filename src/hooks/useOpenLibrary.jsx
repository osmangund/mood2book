import { useState } from "react"

export default async function useOpenLibrary({ title }) {
  const [book, setBook] = useState({})
  const apiUrl = `https://openlibrary.org/search.json?q=${encodeURIComponent(
    title
  )}`

  try {
    const response = await fetch(`${apiUrl}`)
    const data = await response.json()
    const book = data.docs[0] || {}
    if (response.ok) {
      const isbn = book.isbn[0] || false
      const coverId = book.cover_i || false
      return { isbn, coverId }
    }
  } catch (error) {
    console.error("Error fetching data:", error)
    return []
  }
}
