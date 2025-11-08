/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // No basePath needed for username.github.io repositories
  // basePath: '/pankaj-sinha',
  trailingSlash: true,
}

module.exports = nextConfig

