import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimisation is on by default in Next.js.
  // remotePatterns lets next/image load photos from Supabase / a CDN later.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.chrmuk.com",
      },
    ],
  },
};

export default nextConfig;
