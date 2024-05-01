import React from "react"
import Image from "next/image"
import useBookCovers from "@/hooks/useBookCovers"

export default function Book({ book, image }) {
  const { title, author, publishDate, description, pageCount, rating } = book
  console.log(image)
  return (
    <div className="w-1/3 book">
      <div className="h-56 w-full relative flex justify-center mb-3">
        {/* <Image
          src={image}
          alt={title}
          width={200}
          height={300}
          className="w-32 h-56 object-cover"
        /> */}
      </div>
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
