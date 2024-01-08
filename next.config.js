/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kmqacgpnrhjpthvupuju.supabase.co',
      },
    ],
  },
}

module.exports = nextConfig
