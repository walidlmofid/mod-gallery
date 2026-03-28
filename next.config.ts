import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* This tells Next to be less strict during the build */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
