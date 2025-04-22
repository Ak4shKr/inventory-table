import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/inventory",
        destination: "https://dev.electorq.com/dummy/inventory",
      },
    ];
  },
};

export default nextConfig;
