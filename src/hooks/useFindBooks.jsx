"use client"

import { useState, useEffect } from "react"

export default function useFindBooks({ mood }) {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/books?mood=${mood}`)
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data = await response.json()
        setBooks(data)
        setLoading(false)
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [mood]) // Re-run the effect if the `mood` prop changes
  return { books, loading }
}
