// models/Book.js
import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  publishDate: String,
  description: String,
  pageCount: Number,
  rating: Number,
})

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema)

export default Book
