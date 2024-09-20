"use client"

import React, { useState } from "react"
import Book from "./book"
import useFindBooks from "../hooks/useFindBooks"
import { ClipLoader } from "react-spinners"

const LoadingMessage = () => {
  return (
    <div>
      <ClipLoader />
      <p>
        Hang <strong>tight!</strong> We&apos;re searching for you...
      </p>
    </div>
  )
}

export default function DisplayBooks({ mood }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { books, loading } = useFindBooks({ mood })

  const displayAmount = 1

  if (loading) {
    return <LoadingMessage />
  }

  if (!books?.length) {
    return (
      <div>
        Currently, there are no books. We&apos;ll add some{" "}
        <strong>ASAP.</strong>
      </div>
    )
  }

  const displayBooks = books.slice(currentIndex, currentIndex + displayAmount)

  const handleNext = () => {
    if (currentIndex + displayAmount < books.length) {
      setCurrentIndex(currentIndex + displayAmount)
    }
  }

  const handleBack = () => {
    if (currentIndex - displayAmount >= 0) {
      setCurrentIndex(currentIndex - displayAmount)
    }
  }
  return (
    <section id="books" className="w-full min-h-80 flex flex-col gap-8">
      <div className="flex flex-wrap justify-center gap-16 w-full">
        {displayBooks.map((book, i) => {
          return (
            <React.Fragment key={`b__${i}`}>
              <Book book={book} mood={mood} />
            </React.Fragment>
          )
        })}
      </div>
      <div className="flex justify-center gap-4 [&_button]:button [&_button]:uppercase">
        <button
          onClick={handleBack}
          className={`${currentIndex < 1 && "disabled"}`}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className={`${currentIndex + 1 === books.length && "disabled"}`}
        >
          Next
        </button>
      </div>
    </section>
  )
}
