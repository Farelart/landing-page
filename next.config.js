/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.giphy.com", "example.com"], // Add other existing domains here
  },
};

module.exports = nextConfig;