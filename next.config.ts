import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.igorpsicologo.com",
        pathname: "/adm/imagens/**",
      },
      {
        protocol: "https",
        hostname: "web.archive.org",
      },
      {
        protocol: "https",
        hostname: "www.libela.com.br",
      },
      {
        protocol: "https",
        hostname: "juspage-storage.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "doceriadarebeka.com.br",
      },
    ],
  },
};

export default nextConfig;
