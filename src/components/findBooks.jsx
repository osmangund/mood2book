// app/page.tsx or app/page.js
import mongoose from "mongoose"
import Book from "../models/Book" // Adjust the path according to your project structure
const MongoClient = require("mongodb").MongoClient

export default async function FindBooks() {
  const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  await client.connect()
  const database = client.db(process.env.MONGODB_DB)
  const collection = database.collection("books")
  const books = await collection.find({}).toArray()
  await client.close()

  return (
    <>
      {books?.map((book) => (
        <div key={book._id}>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
          <p>Publish Date: {book.publishDate}</p>
          <p>Description: {book.description}</p>
          <p>Page Count: {book.pageCount}</p>
          <p>Rating: {book.rating}</p>
        </div>
      ))}
    </>
  )
}
