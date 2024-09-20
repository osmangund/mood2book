import BookSearch from "@/components/displayBooks"
import { moods } from "../../contents/moods"
import Hero from "@/components/hero"

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <section id="moods" className="mood-cards px-4 md:px-36">
          {moods.map((mood, i) => {
            return (
              <div key={i} className="mood-card">
                <a
                  href={`/books/${mood.text}`}
                  className="uppercase flex gap-4 font-bold justify-center"
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
