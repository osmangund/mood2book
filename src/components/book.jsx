import React from "react"
import useOpenLibrary from "@/hooks/useOpenLibrary"
import Image from "next/image"

export default function Book({ book }) {
  const { title, author, publishDate, description, pageCount, rating } = book

  const FakeBookCover = () => {
    return (
      <>
        <div className="flex items-center justify-center">
          <div className="min-w-24 min-h-32 max-w-32 text-center flex items-center flex-col justify-center bg-blue-100 p-2" />
        </div>
      </>
    )
  }
  const { isbn, coverId } = useOpenLibrary({ title })
  console.log(isbn, coverId)
  return (
    <div className="w-full md:w-1/3 book">
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

      <article
        className="h-56 w-full relative flex flex-col items-center
       justify-center mb-3"
      >
        <h2 className="font-semibold text-xl">{title}</h2>
        <span>
          <span>{author}</span> / <span>{publishDate}</span>
        </span>
        <span>⭐️ {rating}/5</span>
        <span>{pageCount} pages</span>
        <div className="mt-3">
          <p>{description}</p>
        </div>
      </article>
    </div>
  )
}
