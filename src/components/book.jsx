import Image from "next/image"

export default function Book({ book }) {
  const { title, author, genre, publishDate, description, pageCount, rating } =
    book

  return (
    <div>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Genre: {genre}</p>
      <p>Publish Date: {publishDate}</p>
      <p>Description: {description}</p>
      <p>Page Count: {pageCount}</p>
      <p>Rating: {rating}</p>
    </div>
  )
}
