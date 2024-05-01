import Image from "next/image"

export default function Book({ book }) {
  const { title, cover_id, authors, first_publish_year, description } = book
  return (
    <div className="w-1/6 h-72 mb-8">
      {cover_id ? (
        <Image
          src={`https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`}
          alt={`${title} cover`}
          width={400}
          height={400}
          className="w-full h-full object-scale-down mb-4"
        />
      ) : (
        <div className="mb-4 zw-full h-full bg-gray-200 flex flex-col justify-center items-center">
          <h2 className="font-semibold text-xl">{title}</h2>
          <p>{first_publish_year ? first_publish_year : "Unknown"}</p>
        </div>
      )}
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>
          {authors
            ? authors.length > 1
              ? `${authors[0]?.name} ...`
              : authors[0]?.name
            : "Unknown"}
          <span>
            <strong> • </strong>
            {first_publish_year ? first_publish_year : "Unknown"}
          </span>
        </p>
      </div>
    </div>
  )
}
