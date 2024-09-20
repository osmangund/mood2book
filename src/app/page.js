import { moods } from "../../contents/moods"

export default function Home() {
  return (
    <>
      <section className="flex justify-center items-center h-40">
        <div>
          <p className="text-2xl">
            How do you <span className="font-semibold">feel</span> today?
          </p>
        </div>
      </section>
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
    </>
  )
}
