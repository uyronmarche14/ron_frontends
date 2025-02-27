import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    // See https://github.com/vercel/next.js/issues/184408
    // See https://github.com/vercel/next.js/issues/194984
    // See https://github.com/vercel/next.js/issues/194985
    options: {
      isolatedModules: true,
      allowJs: true,
      moduleResolution: "node",
    },
  },
};

export default nextConfig;
