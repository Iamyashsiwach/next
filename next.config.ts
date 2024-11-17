import BuilderDevTools from "@builder.io/dev-tools/next";
import type { NextConfig } from "next";

const builderConfig = BuilderDevTools()({
  /* config options here */
});

// Merge the image domain configuration with BuilderDevTools config
const nextConfig: NextConfig = {
  ...builderConfig,
  images: {
    domains: ['cdn.builder.io'], // Allow images from builder.io
  },
};

export default nextConfig;