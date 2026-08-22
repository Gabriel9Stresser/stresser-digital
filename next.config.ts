import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.igorpsicologo.com",
        pathname: "/adm/imagens/**",
      },
    ],
  },
};

export default nextConfig;
