/** @type {import('next').NextConfig} */
// Configured for static export to GitHub Pages.
// - output: 'export'    → produces a static `out/` folder (no Node server needed)
// - basePath            → site is served at https://8-devs.github.io/kingandqueenbarber-ca/.
//                         Next.js auto-derives assetPrefix from this, so we don't set it.
// - images.unoptimized  → next/image optimizer needs a server; disable on Pages.
//
// Notes:
//   - We do NOT set `trailingSlash: true`. With basePath + trailingSlash on GitHub Pages
//     it produces a route hydration mismatch that 404s the home page when the URL has a
//     trailing slash. Default (false) works cleanly with Pages's directory-index serving.
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/kingandqueenbarber-ca',
  images: {
    unoptimized: true,
    remotePatterns: [
      // Original site assets — load these until they're replaced with higher-quality versions.
      { protocol: 'https', hostname: 'kingandqueenbarber.ca', pathname: '/storage/**' },
    ],
  },
};

module.exports = nextConfig;
