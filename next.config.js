/** @type {import('next').NextConfig} */

// require("dotenv").config();

const nextConfig = {
  /*   env: {
    REST_API: process.env.REST_API
    NEXT_PUBLIC_REST_API: process.env.NEXT_PUBLIC_REST_API
  } */

  reactStrictMode: true,
  distDir: "build",
  images: {
    loader: "default",
    domains: ["localhost", "storage.googleapis.com"],
  },
  /*   images: {
    loader: "default",
    domains: ["localhost"],
  }, */
  /*   experimental: {
    outputStandalone: true,
  }, */
};

module.exports = nextConfig;
