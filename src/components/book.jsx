import React from "react"
import { moods } from "../../contents/moods"
import useOpenLibrary from "@/hooks/useOpenLibrary"
import Image from "next/image"

export default function Book({ book, mood }) {
  const { title, author, publishDate, description, pageCount, rating } = book

  const FakeBookCover = () => {
    return (
      <>
        <div className="flex items-center justify-center">
          <div className="min-w-24 min-h-32 max-w-32 text-center flex items-center flex-col justify-center bg-yellow-200 p-2">
            <h1 className="font-semibold text-sm">{title}</h1>
            <p className="text-sm">{author}</p>
          </div>
        </div>
      </>
    )
  }
  const { isbn, coverId } = useOpenLibrary({ title })
  console.log(isbn, coverId)
  return (
    <div className="w-1/3 book">
      {coverId ? (
        <Image
          src={`https://covers.openlibrary.org/b/id/${coverId}-M.jpg`}
          alt={`${title} cover`}
          width={400}
          height={400}
          className="w-full h-full object-scale-down mb-4"
        />
      ) : (
        <FakeBookCover />
      )}

      <div
        className="h-56 w-full relative flex flex-col items-center
       justify-center mb-3"
      >
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
    </div>
  )
}
