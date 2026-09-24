import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// GitHub Pages project sites are served under a sub-path (e.g. /my-repo).
// The CI workflow sets BASE_PATH automatically via actions/configure-pages.
const basePath = (process.env.BASE_PATH ?? '').replace(/\/$/, '');

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  // Emit `/docs/backend/index.html` so GitHub Pages serves clean URLs.
  trailingSlash: true,
  basePath: basePath || undefined,
  images: {
    unoptimized: true,
  },
  // Expose the base path to client code (used for the static search index URL).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default withMDX(config);
