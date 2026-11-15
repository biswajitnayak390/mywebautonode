import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
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
    '/blog/sitecore-cms-guide',
    '/blog/sitecore-nextjs-published-page-404',
    '/blog/sitecore-xm-cloud-migration-checklist',
    '/blog/headless-cms-seo-checklist'
  ];
  return paths.map((path) => ({
    url: path === '/' ? SITE_URL : new URL(path, SITE_URL).href
  }));
}
