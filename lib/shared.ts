import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'Website Belajar Golang';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: 'golang-backend',
  repo: 'tutorial',
  branch: 'main',
};

const getContentUrl = createGetUrl(docsContentRoute);

// Set at build time from next.config (supports GitHub Pages project sites).
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/, '');

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: `${basePath}${getContentUrl(segments, page.locale)}` };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: `${basePath}${getImageUrl(segments, page.locale)}` };
}
