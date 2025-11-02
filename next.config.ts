import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export', // Static export for Cloudflare Pages
  distDir: 'out', // Output directory for static export
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Better compatibility with Cloudflare Pages
};

export default nextConfig;
