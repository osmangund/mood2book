"use client"

import useSWR from "swr"
import React, { useState, useEffect } from "react"
import Book from "./book"
import ClipLoader from "react-spinners/ClipLoader"

const fetcher = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

function shuffle(array) {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export default function BookSearch2({ genre }) {
  const [books, setBooks] = useState([])
  const [startIndex, setStartIndex] = useState(0)

  const { data: booksData, error } = useSWR(
    `https://openlibrary.org/subjects/${encodeURIComponent(
      genre
    )}.json?limit=120&offset=${startIndex}`,
    fetcher
  )

  useEffect(() => {
    if (booksData) {
      setBooks(shuffle(booksData.works))
    }
  }, [booksData])

  if (error) return <div>Error fetching data...</div>
  if (!booksData)
    return (
      <div>
        <ClipLoader />
        <p>
          Hang <strong>tight!</strong> We&apos;re searching books based on your
          mood...
        </p>
      </div>
    )

  const totalBooks = books.length
  const booksToShow = books.slice(startIndex, startIndex + 3)

  const handleNextClick = () => {
    setStartIndex(startIndex + 3)
  }

  const handleBackClick = () => {
    setStartIndex(Math.max(0, startIndex - 3))
  }

  return (
    <section className="flex flex-col gap-16">
      <div className="flex flex-wrap justify-center gap-16 min-h-[40vh] max-h-[80vh]">
        {booksToShow.map((book, index) => (
          <React.Fragment key={index}>
            <Book book={book} />
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center mt-4 [&_button]:button [&_button]:uppercase">
        {startIndex > 0 && (
          <button onClick={handleBackClick} className="mr-4">
            Back
          </button>
        )}
        {startIndex + 3 < totalBooks && (
          <button onClick={handleNextClick}>Next</button>
        )}
      </div>
    </section>
  )
}
