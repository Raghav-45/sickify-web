/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
}

const withPWA = require('next-pwa')

// module.exports = withPWA({
//   dest: 'public',
//   register: true,
//   skipWaiting: true,
//   // reactStrictMode: true,
//   disable: process.env.NODE_ENV === 'development',
//   ...nextConfig,
// })

module.exports = nextConfig
