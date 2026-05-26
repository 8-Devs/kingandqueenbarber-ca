/** @type {import('next').NextConfig} */
// Configured for static export to GitHub Pages.
// - output: 'export'        → produces a static `out/` folder (no Node server needed)
// - basePath / assetPrefix  → site is served at https://8-devs.github.io/kingandqueenbarber-ca/
// - images.unoptimized      → next/image optimizer needs a server; disable on Pages
// - trailingSlash           → GitHub Pages serves /about/index.html cleanly with this on
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/kingandqueenbarber-ca',
  assetPrefix: '/kingandqueenbarber-ca/',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      // Original site assets — load these until they're replaced with higher-quality versions.
      { protocol: 'https', hostname: 'kingandqueenbarber.ca', pathname: '/storage/**' },
    ],
  },
};

module.exports = nextConfig;
