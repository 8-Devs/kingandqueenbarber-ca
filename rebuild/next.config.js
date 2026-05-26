/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Original site assets — load these until they're replaced with higher-quality versions.
      { protocol: "https", hostname: "kingandqueenbarber.ca", pathname: "/storage/**" },
    ],
  },
};

module.exports = nextConfig;
