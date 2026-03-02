/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev, isServer }) => {
    // Disable webpack cache in development to avoid serialization warnings
    if (dev) {
      config.cache = false
    }
    return config
  },
}

export default nextConfig
