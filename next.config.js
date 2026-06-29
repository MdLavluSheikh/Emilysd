/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://funmeet.live/spicywives5",
        permanent: false,
      },
    ]
  },
}
module.exports = nextConfig
