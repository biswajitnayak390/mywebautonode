import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '',
    '/services',
    '/technologies',
    '/about',
    '/contact',
    '/sitecore-development',
    '/sitecore-xm-cloud-development',
    '/sitecore-migration-review',
    '/headless-cms-development',
    '/ai-chatbot-development',
    '/ai-chatbot-websites',
    '/ai-modern-web-development',
    '/blog',
    '/blog/sitecore-cms-guide'
  ];
  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8
  }));
}
