"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function BookSearch({ genre }) {
  const [books, setBooks] = useState([])
  const [startIndex, setStartIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const [prevStartIndexes, setPrevStartIndexes] = useState([])
  const booksPerBatch = 3

  const searchBooksByGenre = async (genre, startIndex, booksPerBatch) => {
    const apiUrl = "https://openlibrary.org/subjects/"

    try {
      setLoading(true)
      const response = await fetch(
        `${apiUrl}${encodeURIComponent(
          genre
        )}.json?limit=${booksPerBatch}&offset=${startIndex}`
      )
      const data = await response.json()

      const extractedBooks = data.works.map((work) => ({
        title: work.title,
        author: work.authors
          ? work.authors.map((author) => author.name).join(", ")
          : "Unknown",
        coverUrl: work.cover_id
          ? `https://covers.openlibrary.org/b/id/${work.cover_id}-M.jpg`
          : "",
        publishYear: work.first_publish_year
          ? work.first_publish_year
          : "Unknown",
      }))
      setLoading(false)
      return extractedBooks
    } catch (error) {
      setLoading(false)
      console.error("Error fetching data:", error)
      return []
    }
  }

  const fetchNextBooks = async () => {
    const newBooks = await searchBooksByGenre(
      genre,
      startIndex + booksPerBatch,
      booksPerBatch
    )
    setBooks(newBooks)
    setPrevStartIndexes([...prevStartIndexes, startIndex])
    setStartIndex(startIndex + booksPerBatch)
  }

  const fetchPrevBooks = async () => {
    const prevStartIndex = prevStartIndexes.pop()
    const newBooks = await searchBooksByGenre(
      genre,
      prevStartIndex,
      booksPerBatch
    )
    setBooks(newBooks)
    setStartIndex(prevStartIndex)
    setPrevStartIndexes([...prevStartIndexes])
  }

  useEffect(() => {
    searchBooksByGenre(genre, startIndex, booksPerBatch).then((result) =>
      setBooks(result)
    )
  }, [genre])

  return (
    <div className="flex flex-wrap justify-center gap-16">
      {books.map((book, index) => (
        <div key={index} className="w-1/6 h-72 mb-8">
          {book.coverUrl && (
            <Image
              src={book.coverUrl}
              alt={`${book.title} cover`}
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          )}
          <div>
            <h2>{book.title}</h2>
            <p>
              <strong>Author:</strong> {book.author}
            </p>
            <p>
              <strong>Year:</strong> {book.publishYear}
            </p>
          </div>
        </div>
      ))}
      <div className="flex gap-4 [&_button]:button [&_button]:uppercase">
        <button
          onClick={fetchPrevBooks}
          className={`${prevStartIndexes.length < 1 && "disabled"}`}
        >
          Back
        </button>
        <button
          onClick={fetchNextBooks}
          className={`${books.length < 0 && "disabled"}`}
        >
          Next
        </button>
      </div>
    </div>
  )
}
