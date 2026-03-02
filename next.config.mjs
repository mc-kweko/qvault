/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = {
        type: 'filesystem',
        compression: false,
        maxMemoryGenerations: 1,
      }
    }
    return config
  },
}

export default nextConfig
