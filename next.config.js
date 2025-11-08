/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath configured for GitHub Pages subdirectory deployment
  basePath: '/pankaj-sinha',
  trailingSlash: true,
}

module.exports = nextConfig

