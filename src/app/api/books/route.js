import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"

export async function GET(req) {
  const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  try {
    await client.connect()
    const database = client.db(process.env.MONGODB_DB)
    const collection = database.collection("books")

    const url = new URL(req.url)
    const searchParams = new URLSearchParams(url.search)
    const mood = searchParams.get("mood")

    // Assuming you want to filter by mood, adjust the query as needed
    const query = mood ? { mood } : {}
    const books = await collection.find(query).toArray()
    return NextResponse.json(books, { status: 200 })
  } catch (error) {
    console.error("Error fetching books:", error)
    return NextResponse.json({ error: "Error fetching books" }, { status: 500 })
  } finally {
    await client.close()
  }
}
