import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['onebitflix-mateusrodc.s3.us-east-2.amazonaws.com'],
  },
};

export default nextConfig;
