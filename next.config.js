/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.microcms-assets.io"],
  },
  swcMinify: true,
  experimental: {
    optimizeFonts: true,
  },
}

module.exports = nextConfig
