// app/page.tsx or app/page.js
import mongoose from "mongoose"
import Book from "./book"
const MongoClient = require("mongodb").MongoClient

export default async function FindBooks({ mood }) {
  const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  await client.connect()
  const database = client.db(process.env.MONGODB_DB)
  const collection = database.collection("books")
  const query = mood ? { mood } : {}

  const books = await collection.find(query).toArray()
  await client.close()

  return (
    <>
      {books?.map((book) => (
        <Book key={book._id} book={book} />
      ))}
    </>
  )
}
