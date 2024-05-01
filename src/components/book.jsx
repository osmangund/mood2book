import React, { useState, useEffect } from "react"
import axios from "axios"

export default function Book({ book }) {
  const [image, setImage] = useState("")

  useEffect(() => {
    const fetchBookImage = async () => {
      if (!book) return
      const { title } = book
      try {
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=${title}`
        )
        const firstBook = response.data.docs[0]
        if (firstBook) {
          setImage(firstBook.cover_edition_0)
        }
      } catch (error) {
        console.error("Error fetching book image:", error)
      }
    }

    fetchBookImage()
  }, [book])

  if (!book) {
    return <div>No book data available</div>
  }

  const { title, author, publishDate, description, pageCount, rating } = book

  return (
    <div className="w-1/3 book">
      <div className="h-52" style={{ backgroundImage: `url(${image})` }}></div>
      <h2 className="font-semibold text-xl">{title}</h2>
      <p>
        <span>{author}</span> | <span>{publishDate}</span>
      </p>
      <p>⭐️ {rating}/5</p>
      <div className="mt-3">
        <p>{description}</p>
        <p>{pageCount} pages</p>
      </div>
    </div>
  )
}
