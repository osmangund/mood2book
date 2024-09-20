"use client"

import { useState, useEffect } from "react"

export default function useBookIsbn({ title }) {
  const [isbn, setIsbn] = useState("")
  useEffect(() => {
    const fetchBookImage = async () => {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${title}`
      )
      const data = await response.json()
      if (data.items && data.items.length > 0) {
        // Assuming the first item has a valid image URL
        setIsbn(data.items[0])
      }
    }

    fetchBookImage()
  }, [title])

  return isbn
}
