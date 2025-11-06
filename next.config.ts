import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config: any) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    config.ignoreWarnings = [/Failed to parse source map/];
    return config;
  },
  productionBrowserSourceMaps: false,
  experimental: {
    esmExternals: false,
  },
} as any;

export default nextConfig;
