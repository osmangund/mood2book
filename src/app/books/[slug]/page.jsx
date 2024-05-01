import { moods } from "@/../contents/moods"
import DisplayBooks from "@/components/displayBooks"
import FindBooks from "@/hooks/useFindBooks"

export function getStaticPaths() {
  const paths = moods.map((mood) => ({
    params: { slug: mood.text },
  }))

  return {
    paths,
    fallback: false, // This means any paths not returned here will result in a 404 page
  }
}

export default function Page({ params }) {
  const mood = moods.find((mood) => params.slug === mood.text)
  const { emoji } = mood

  return (
    <section className="px-4 md:px-16 min-h-[80vh] gap-16 flex flex-col items-center text-center">
      <div>
        <h1 className="text-6xl mb-4">{emoji}</h1>
        <p className="text-xl mb-6">
          You&apos;re feeling <strong>{params.slug}</strong> today.
        </p>
        <p className="text-lg">
          Here are some books that might match your mood:
        </p>
      </div>
      <DisplayBooks mood={params.slug} />
    </section>
  )
}
