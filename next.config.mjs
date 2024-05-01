/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "covers.openlibrary.org",
      },
      {
        hostname: "books.google.com",
      },
    ],
  },
}

export default nextConfig
