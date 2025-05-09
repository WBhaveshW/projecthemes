import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  css: {
    lightningcss: true,
  },
  images: {
    domains: ['projecthemes.vercel.app'], // only if needed
  },
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
