// app/api/books.js
import { MongoClient } from "mongodb"

export default async function handler(req, res) {
  const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  try {
    await client.connect()
    const database = client.db(process.env.MONGODB_DB)
    const collection = database.collection("books")

    // Assuming you want to filter by mood, adjust the query as needed
    const query = req.query.mood ? { mood: req.query.mood } : {}
    const books = await collection.find(query).toArray()

    res.status(200).json(books)
  } catch (error) {
    console.error("Error fetching books:", error)
    res.status(500).json({ message: "Error fetching books" })
  } finally {
    await client.close()
  }
}
