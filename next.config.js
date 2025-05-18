/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
