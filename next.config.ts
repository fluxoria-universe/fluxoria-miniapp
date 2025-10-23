import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  
  // Experimental features for better handling
  experimental: {
    optimizePackageImports: ['@rainbow-me/rainbowkit', 'wagmi'],
  },
};

export default nextConfig;
