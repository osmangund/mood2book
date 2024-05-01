import BookSearch from "@/components/booksearch"
import { moods } from "../../contents/moods"

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-40">
        <p className="text-2xl">
          How do you <span className="underline">feel</span> today?
        </p>
      </div>
      <main>
        <section id="moods" className="mood-cards px-4 md:px-36">
          {moods.map((mood, i) => {
            return (
              <div key={i} className="mood-card">
                <a
                  href={`/books/${mood.text}`}
                  className="uppercase flex gap-4"
                >
                  <span>{mood.emoji}</span> <span>{mood.text}</span>
                </a>
              </div>
            )
          })}
        </section>
      </main>
    </>
  )
}
