import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/due-diligence",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
