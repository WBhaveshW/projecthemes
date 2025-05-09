import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  css: {
    lightningcss: true,
  },
  images: {
    domains: ['projecthemes.vercel.app'], // only if needed
  },
};

export default nextConfig;
