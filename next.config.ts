import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/about", destination: "/" },
      { source: "/services", destination: "/" },
      { source: "/projects", destination: "/" },
      { source: "/resume", destination: "/" },
      { source: "/skills", destination: "/" },
      { source: "/gallery", destination: "/" },
      { source: "/contact", destination: "/" },
      { source: "/services/capabilities/:groupId", destination: "/" },
    ];
  }
};

export default nextConfig;
