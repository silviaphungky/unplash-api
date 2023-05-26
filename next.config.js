/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s3.us-west-2.amazonaws.com', 'images.unsplash.com'],
  },
  publicRuntimeConfig: {
    'base-url': process.env.BASE_URL,
    'client-id': process.env.CLIENT_ID,
  },
}

module.exports = nextConfig
