/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Uncomment these if deploying to username.github.io/repo-name
  // basePath: '/playfab-spammer',
  // assetPrefix: '/playfab-spammer/',
}

module.exports = nextConfig