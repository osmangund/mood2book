import { moods } from "../../contents/moods"

export default function Shuffle() {
  const randomMood = moods[Math.floor(Math.random() * moods.length)]
  return (
    <button
      className="button"
      onClick={() => {
        window.location.href = `/books/${randomMood.text}`
      }}
    >
      Shuffle
    </button>
  )
}
