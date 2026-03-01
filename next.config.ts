import type { NextConfig } from "next";

const repo = "serendale.ai";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    path: process.env.NODE_ENV === "production" ? `/${repo}/_next/image` : "/_next/image",
  },
  basePath: process.env.NODE_ENV === "production" ? `/${repo}` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repo}/` : "",
};

export default nextConfig;
