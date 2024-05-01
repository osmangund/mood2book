import Link from "next/link"

export default function page() {
  return (
    <section className="w-full h-screen flex justify-center items-center text-center">
      <div>
        <h1 className="text-6xl mb-4">404</h1>
        <p className="text-xl mb-6">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="rounded-lg border p-2 border-black bg-black text-white"
        >
          Return to Home
        </Link>
      </div>
    </section>
  )
}
