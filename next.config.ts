import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'projecthemes.vercel.app',
      },
    ],
  },
  experimental: {
    serverActions: {},
  },
};

export default nextConfig;
