import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://autonodeai.com';
  const paths = [
    '',
    '/services',
    '/technologies',
    '/about',
    '/contact',
    '/sitecore-development',
    '/sitecore-xm-cloud-development',
    '/sitecore-migration-review',
    '/blog/sitecore-cms-guide'
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8
  }));
}
